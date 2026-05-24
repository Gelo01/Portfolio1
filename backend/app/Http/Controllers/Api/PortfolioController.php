<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class PortfolioController extends Controller
{
    public function show()
    {
        $config = config('portfolio');
        $cvPath = storage_path('app/public/cv/resume.pdf');

        return response()->json([
            'name' => $config['name'],
            'title' => $config['title'],
            'tagline' => $config['tagline'],
            'handle' => $config['handle'],
            'profile_url' => $config['profile_url'],
            'profile_image' => $config['profile_image'],
            'availability' => $config['availability'],
            'reference_url' => $config['reference_url'],
            'about' => $config['about'],
            'about_highlights' => $config['about_highlights'],
            'mentors' => $config['mentors'],
            'experience_summary' => $config['experience_summary'],
            'skills' => $config['skills'],
            'projects' => $config['projects'],
            'experience' => $config['experience'],
            'education' => $config['education'],
            'contact_intro' => $config['contact_intro'],
            'contact_email' => $config['contact_email'],
            'social' => $config['social'],
            'copyright_year' => $config['copyright_year'],
            'cv_download_url' => url('/api/cv/download'),
            'cv_available' => File::exists($cvPath),
        ]);
    }
}
