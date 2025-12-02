/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/*.{html,js}', './src/*.{html,js}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1020px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'soft-blue': 'hsl(231, 69%, 60%)',
                'soft-red': 'hsl(0, 94%, 66%)',
                'grayish-blue': 'hsl(229, 8%, 60%)',
                'very-dark-blue': 'hsl(229, 31%, 21%)',
            },
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
            backgroundImage: () => ({
                dots: "url('../dist/images/bg-dots.svg')",
            }),
        },
    },
    plugins: [],
};
