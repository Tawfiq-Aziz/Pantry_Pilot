
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory?: string;
    strArea?: string;
}

interface SearchProps {
    recipes: Recipe[];
    query: string;
    ingredient: string;
    error: string | null;
}

export default function Search({
    recipes,
    query,
    ingredient,
    error,
}: SearchProps) {
    const { data, setData, get, processing } = useForm({
        query: query || '',
        ingredient: ingredient || '',
    });

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        get(route('recipes.search'), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Recipe Search
                </h2>
            }
        >
            <Head title="Recipe Search" />

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Find Your Next Favourite Meal
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Search delicious recipes by name or ingredient.
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

                        <form onSubmit={handleSearch}>
                            <div className="mb-5">
                                <label className="mb-2 block font-medium text-gray-700">
                                    Search by Recipe Name
                                </label>

                                <input
                                    type="text"
                                    value={data.query}
                                    onChange={(e) =>
                                        setData({
                                            query: e.target.value,
                                            ingredient: '',
                                        })
                                    }
                                    placeholder="Example: Chicken Curry"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <div className="mb-6 text-center text-sm text-gray-400">
                                OR
                            </div>

                            <div className="mb-6">
                                <label className="mb-2 block font-medium text-gray-700">
                                    Search by Ingredient
                                </label>

                                <input
                                    type="text"
                                    value={data.ingredient}
                                    onChange={(e) =>
                                        setData({
                                            ingredient: e.target.value,
                                            query: '',
                                        })
                                    }
                                    placeholder="Example: Chicken"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    backgroundColor: '#15803d',
                                    color: 'white',
                                    padding: '14px 24px',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    marginTop: '20px',
                                    border: 'none',
                                }}
                            >
                                {processing ? 'Searching...' : 'Search Recipes'}
                            </button>
                        </form>
                    </div>

                    {error && (
                        <p className="mt-8 text-center text-red-600">
                            {error}
                        </p>
                    )}

                    <div className="mt-12">
                        {recipes.length > 0 && (
                            <>
                                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                                    Search Results ({recipes.length})
                                </h2>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {recipes.map((recipe) => (
                                        <div
                                            key={recipe.idMeal}
                                            className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <img
                                                src={recipe.strMealThumb}
                                                alt={recipe.strMeal}
                                                className="h-56 w-full object-cover"
                                            />

                                            <div className="p-5">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {recipe.strMeal}
                                                </h3>

                                                {recipe.strArea && (
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Cuisine: {recipe.strArea}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {!error &&
                            recipes.length === 0 &&
                            (query || ingredient) && (
                                <p className="mt-8 text-center text-gray-600">
                                    No recipes found. Try another search.
                                </p>
                            )}
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
