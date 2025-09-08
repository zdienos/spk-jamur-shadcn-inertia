<?php

use App\Http\Controllers\ClassificationController;
use App\Http\Controllers\CriteriaController;
use App\Http\Controllers\SubCriteriaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('auth/sign-in/sign-in-2'));
Route::get('/sign-in', fn() => Inertia::render('auth/sign-in/index'));
Route::get('/sign-in-2', fn() => Inertia::render('auth/sign-in/sign-in-2'));
Route::get('/sign-up', fn() => Inertia::render('auth/sign-up/index'));
Route::get('/forgot-pass', fn() => Inertia::render('auth/forgot-password/index'));
Route::get('/otp', fn() => Inertia::render('auth/otp/index'));
Route::get('/401', fn() => Inertia::render('errors/unauthorized-error'));
Route::get('/403', fn() => Inertia::render('errors/forbidden'));
Route::get('/404', fn() => Inertia::render('errors/not-found-error'));
Route::get('/500', fn() => Inertia::render('errors/general-error'));
Route::get('/503', fn() => Inertia::render('errors/maintenance-error'));
Route::get('/pricing', fn() => Inertia::render('pricing/index'));


Route::group(['prefix' => '/dashboard', 'middleware' => ['auth', 'verified']], function () {
    require __DIR__ . '/dashboard.php';
});



Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('criteria', CriteriaController::class);
    Route::resource('subcriteria', SubCriteriaController::class);
    Route::resource('classification', ClassificationController::class);
});


require __DIR__ . '/auth.php';
