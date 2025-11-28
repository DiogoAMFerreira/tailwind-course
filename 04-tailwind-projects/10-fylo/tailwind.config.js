/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/*.{html,js}', './src/*.{html,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'dark-blue-50': 'hsl(217, 28%, 15%)',
                'dark-blue-100': 'hsl(218, 28%, 13%)',
                'dark-blue-200': 'hsl(216, 53%, 9%)',
                'dark-blue-300': 'hsl(219, 30%, 18%)',
                'accent-cyan': 'hsl(176, 68%, 64%)',
                'accent-blue': 'hsl(198, 60%, 50%)',
                'light-red': 'hsl(0, 100%, 63%)',
            },
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            backgroundImage: (theme) => ({
                'logo-dark-mode': "url('../dist/images/logo-dark-mode.svg')",
                'logo-light-mode': "url('../dist/images/logo-light-mode.svg')",
                'curvy-dark-mode':
                    "url('../dist/images/bg-curvy-dark-mode.svg')",
                'curvy-light-mode':
                    "url('../dist/images/bg-curvy-light-mode.svg')",
            }),
        },
    },
    variants: {
        extend: {
            backgroundImage: ['dark'],
        },
    },
    plugins: [],
};
