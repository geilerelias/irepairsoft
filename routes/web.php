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
    return Inertia::render('Landing/Home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('Landing/AboutUs');
})->name('about-us');

Route::get('/services', function () {
    return Inertia::render('Landing/Services');
})->name('services');

Route::get('/contact-us', function () {
    return Inertia::render('Landing/ContactUs');
})->name('contact-us');

Route::get('/example', function () {
    return Inertia::render('Example');
})->name('example');

Route::get('/example2', function () {
    return Inertia::render('Example2');
})->name('example2');

Route::get('/datatables', function () {
    return Inertia::render('Datatables');
})->name('datatables');

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
])->prefix('dashboard')->group(function () {

    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');


    Route::get('/order', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('order');

    Route::get('/customer', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('customer');

    Route::get('/device', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('device');

    Route::get('/product', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('product');

    Route::get('/cash', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('cash');

    Route::get('/schedule', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('schedule');

    Route::get('/supplier', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('supplier');

    Route::get('/reports', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('reports');

    //Route::resource('role', App\Http\Controllers\Admin\RoleController::class);

    Route::resource('posts', App\Http\Controllers\Blog\PostController::class);


});

Route::group([
    'prefix' => 'dashboard',
    'middleware' => ['auth:sanctum', config('jetstream.auth_session'), 'verified'],
], function () {
    Route::resource('user', App\Http\Controllers\Admin\UserController::class);
    Route::resource('role', App\Http\Controllers\Admin\RoleController::class);
    Route::resource('permission', App\Http\Controllers\Admin\PermissionController::class);
    //Route::resource('post', App\Http\Controllers\Admin\PostController::class);
});


Route::get('/get/img/{folder?}/{file?}', function ($folder = 'null', $file = null) {
    $directory = '';

    if ($folder === 'null') {
        $directory = base_path('resources/images/' . trim($file));

    } else if ($file === null) {
        $ficheros = scandir(base_path('resources/images/' . trim($folder)));
        $directory = base_path('resources/images/' . trim($folder) . '/' . $ficheros[2]);

    } else {
        $directory = base_path('resources/images/' . trim($folder) . '/' . trim($file));
    }

    try {
        $fileContent = File::get($directory);
        $mimeType = File::mimeType($directory);

        return Response::make($fileContent, 200)->header('Content-Type', $mimeType);

    } catch (Exception $e) {
        return 'Excepción capturada: ' . $e->getMessage() . "\n";
    }
});
