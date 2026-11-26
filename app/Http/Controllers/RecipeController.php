<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index()
    {
        return Inertia::render('Recipes/Search', [
            'recipes' => [],
            'query' => '',
            'ingredient' => '',
            'error' => null,
        ]);
    }

    public function search(Request $request)
    {
        $request->validate([
            'query' => 'nullable|string|max:100',
            'ingredient' => 'nullable|string|max:100',
        ]);

        $query = $request->input('query');
        $ingredient = $request->input('ingredient');

        $recipes = [];
        $error = null;

        if (!empty($query)) {
            $response = Http::timeout(15)->get(
                'https://www.themealdb.com/api/json/v1/1/search.php',
                ['s' => $query]
            );

            if ($response->successful()) {
                $recipes = $response->json()['meals'] ?? [];
            } else {
                $error = 'Unable to retrieve recipes. Please try again.';
            }
        } elseif (!empty($ingredient)) {
            $response = Http::timeout(15)->get(
                'https://www.themealdb.com/api/json/v1/1/filter.php',
                ['i' => $ingredient]
            );

            if ($response->successful()) {
                $recipes = $response->json()['meals'] ?? [];
            } else {
                $error = 'Unable to retrieve recipes. Please try again.';
            }
        } else {
            $error = 'Please enter a recipe name or ingredient.';
        }

        return Inertia::render('Recipes/Search', [
            'recipes' => $recipes,
            'query' => $query ?? '',
            'ingredient' => $ingredient ?? '',
            'error' => $error,
        ]);
    }

    public function random()
    {
        $response = Http::timeout(15)->get(
            'https://www.themealdb.com/api/json/v1/1/random.php'
        );

        $recipe = null;
        $error = null;

        if ($response->successful()) {
            $recipe = $response->json()['meals'][0] ?? null;
        } else {
            $error = 'Unable to retrieve a random recipe. Please try again.';
        }

        return Inertia::render('Recipes/Random', [
            'recipe' => $recipe,
            'error' => $error,
        ]);
    }
}
