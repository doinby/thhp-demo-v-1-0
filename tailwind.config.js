/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: [''],
			headings: [''],
		},
		extend: {},
	},
	plugins: [typography],
};
