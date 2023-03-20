/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				primaryDark: '#6D3C4F',
				primaryLight: '#784858',
				secondaryDark: '#3C3E6D',
				secondaryDarkest: '#18182b',
				secondaryLight: '#44467C',
				base: '#EBEBE6',
				baseDark: '#cdcdc1',
				bright: '#2155FF'
			},
			fontFamily: {
				workSans: ['Work Sans', 'sans'],
				josefinSans: ['Josefin Sans'],
				chivo: ['Chivo'],
				satoshi: ['Satoshi', 'sans-serif']
			}
		}
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};
