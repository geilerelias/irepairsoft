<?php

namespace App\Providers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        $this->app->bind(
            LengthAwarePaginator::class,
            \App\Extensions\LengthAwarePaginator::class,
        );

        /* Inertia::share(['errors' => function () {
             return Session::get('errors')
                 ? Session::get('errors')->getBag('default')->getMessages()
                 : (object)[];
         },
         ]);

         Inertia::share('flash', function () {
             return [
                 'message' => Session::get('message'),
                 'status' => Session::get('status'),
             ];
         });

         Inertia::share('auth', function () {
             $user = auth()->user();
             return $user ? [
                 'roles' => $user->getRoleNames(),
                 'permissions' => $user->getAllPermissions()->pluck('name')
             ] : null;
         });*/
    }
}
