import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    const features = [
        {
            title: 'Recipe Search',
            description:
                'Find delicious recipes by searching for a meal name or an ingredient you have.',
            icon: '🔍',
            link: route('recipes.index'),
            available: true,
            button: 'Explore Recipes',
        },
        {
            title: 'Random Recipe Inspiration',
            description:
                'Not sure what to cook? Discover a random recipe and try something new.',
            icon: '🍳',
            link: route('recipes.random'),
            available: true,
            button: 'Surprise Me',
        },
        {
            title: 'Cuisine Explorer',
            description:
                'Explore dishes and cooking styles from different countries around the world.',
            icon: '🌍',
            link: null,
            available: false,
            button: 'Coming Soon',
        },
        {
            title: 'Personal Recipe Book',
            description:
                'Save your favourite recipes and keep all your cooking ideas in one place.',
            icon: '📖',
            link: null,
            available: false,
            button: 'Coming Soon',
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="Home - PantryPilot" />

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-green-800 to-emerald-600 px-6 py-20 text-white">
                    <div className="mx-auto max-w-7xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-100">
                            Welcome to PantryPilot
                        </p>

                        <h1 className="text-4xl font-bold sm:text-5xl">
                            Your Kitchen, Smarter.
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
                            Discover recipes, find inspiration, and make
                            your everyday cooking experience easier.
                        </p>

                        <Link
                            href={route('recipes.index')}
                            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-800 shadow-md transition hover:bg-green-50"
                        >
                            Explore Recipes →
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Explore PantryPilot
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Everything you need to make cooking more enjoyable.
                        </p>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-5 text-5xl">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 flex-grow text-sm leading-6 text-gray-600">
                                    {feature.description}
                                </p>

                                {feature.available && feature.link ? (
                                    <Link
                                        href={feature.link}
                                        className="mt-7 block rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-800"
                                    >
                                        {feature.button}
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="mt-7 cursor-not-allowed rounded-lg bg-gray-200 px-4 py-3 font-semibold text-gray-500"
                                    >
                                        {feature.button}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center">
                    <p className="font-semibold text-green-800">
                        PantryPilot
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        Making everyday cooking easier and smarter.
                    </p>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
