<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Domain\Blog\Models\Category;
use Domain\Blog\Models\Post;
use Domain\Blog\Models\Tag;
use Domain\Shared\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(BasicAdminPermissionSeeder::class);
        //$this->call(PostSeeder::class);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com'
        ]);

        User:: factory()->count(10)->create();


        Category:: factory()->count(5)->create();

        Tag:: factory()->count(20)->create();

        $posts = Post:: factory()->count(190)->create();

        $posts->each(function (Post $post) {
            $post->tags()->saveMany(Tag:: all()->random(3));
        });
    }
}
