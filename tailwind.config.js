import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Figtree', ...defaultTheme.fontFamily.sans],
                serif: ['"Instrument Serif"', 'Georgia', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                pantry: {
                    dark: '#1E211A',
                    bg: '#F1EEE7',
                    card: '#181C17',
                    muted: '#9EA498',
                    accent: '#3E4D38',
                    pill: '#E5E1D7',
                },
            },
        },
    },

    plugins: [forms],
};
