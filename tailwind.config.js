/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'hero-background': '#0000006b',
				'hero-hover': '#00000025',
			},
			keyframes: {
				appear: {
					'0%': { opacity: 0, transform: 'translateY(5rem)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				appear: 'appear 1500ms ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
