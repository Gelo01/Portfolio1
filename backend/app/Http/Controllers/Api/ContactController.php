<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:120',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:200',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

        ContactMessage::create($data);

        $toEmail = config('portfolio.contact_email');
        $subject = $data['subject'] ?: 'New portfolio message from ' . $data['name'];

        try {
            Mail::raw(
                "Name: {$data['name']}\nEmail: {$data['email']}\n\n{$data['message']}",
                function ($mail) use ($toEmail, $subject, $data) {
                    $mail->to($toEmail)
                         ->replyTo($data['email'], $data['name'])
                         ->subject($subject);
                }
            );
        } catch (\Exception $e) {
            // Message is already saved to DB; swallow mail error so the user
            // still gets a success response even if SMTP isn't configured yet.
            \Log::warning('Portfolio contact mail failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => "Thanks! I'll get back to you as soon as I can.",
        ], 201);
    }
}
