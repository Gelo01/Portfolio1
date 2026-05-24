<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class CvController extends Controller
{
    public function download()
    {
        $path = storage_path('app/public/cv/resume.pdf');

        if (!File::exists($path)) {
            return response()->json([
                'message' => 'CV file not found. Add your PDF to storage/app/public/cv/resume.pdf',
            ], 404);
        }

        $filename = config('portfolio.cv_filename', 'CV.pdf');

        return response()->download($path, $filename);
    }
}
