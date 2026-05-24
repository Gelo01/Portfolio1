<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CvController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\VisitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/portfolio', [PortfolioController::class, 'show']);
Route::get('/cv/download', [CvController::class, 'download']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/visit', [VisitController::class, 'increment']);
Route::get('/visit', [VisitController::class, 'show']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
