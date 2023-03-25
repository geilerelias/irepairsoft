<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return Inertia::render('Views/Home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('Views/AboutUs');
})->name('about-us');

Route::get('/services', function () {
    return Inertia::render('Views/Services');
})->name('services');

Route::get('/contact-us', function () {
    return Inertia::render('Views/ContactUs');
})->name('contact-us');

Route::get('/example', function () {
    return Inertia::render('Example');
})->name('example');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


