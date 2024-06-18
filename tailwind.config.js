/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'application-linear':
                    'linear-gradient(203deg,#0D0884 57.4%,#73EFAC 98.68%)',
            },
        },
    },
    plugins: [],
};
