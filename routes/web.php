<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Redirect root to login; if already authenticated, middleware on login will send to dashboard
Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Recipe Search Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/recipes', [RecipeController::class, 'index'])
        ->name('recipes.index');

    Route::get('/recipes/search', [RecipeController::class, 'search'])
        ->name('recipes.search');
    Route::get('/recipes/random', [RecipeController::class, 'random'])
    ->name('recipes.random');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
