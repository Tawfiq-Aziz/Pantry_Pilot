import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    [key: string]: string;
}

interface RandomProps {
    recipe: Recipe | null;
    error: string | null;
}

export default function Random({ recipe, error }: RandomProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Random Recipe Inspiration
                </h2>
            }
        >
            <Head title="Random Recipe Inspiration" />

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Feeling Hungry? Get Inspired!
                        </h1>
                        <p className="mt-3 text-gray-600">
                            Discover a random recipe and try something new.
                        </p>
                    </div>

                    <div className="mb-8 text-center">
                        <button
                            type="button"
                            onClick={() => router.get(route('recipes.random'))}
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#15803d',
                                color: '#ffffff',
                                padding: '14px 32px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '16px',
                                cursor: 'pointer',
                                border: 'none',
                            }}
                        >
                            Surprise Me!
                        </button>
                    </div>

                    {error && (
                        <p className="text-center text-red-600">{error}</p>
                    )}

                    {recipe && (
                        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                className="h-80 w-full object-cover"
                            />

                            <div className="p-8">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                                    {recipe.strMeal}
                                </h2>

                                <p className="mb-6 text-gray-600">
                                    Category: {recipe.strCategory} | Cuisine: {recipe.strArea}
                                </p>

                                <h3 className="mb-3 text-xl font-bold">
                                    Ingredients
                                </h3>

                                <ul className="mb-8 list-disc space-y-2 pl-6">
                                    {Array.from({ length: 20 }, (_, i) => i + 1)
                                        .filter((i) => recipe[`strIngredient${i}`]?.trim())
                                        .map((i) => (
                                            <li key={i}>
                                                {recipe[`strIngredient${i}`]}
                                                {recipe[`strMeasure${i}`]
                                                    ? ` - ${recipe[`strMeasure${i}`]}`
                                                    : ''}
                                            </li>
                                        ))}
                                </ul>

                                <h3 className="mb-3 text-xl font-bold">
                                    Instructions
                                </h3>

                                <p className="whitespace-pre-line leading-7 text-gray-700">
                                    {recipe.strInstructions}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
