/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primaryDark: '#6D3C4F',
				primaryLight: '#784858',
				secondaryDark: '#3C3E6D',
				secondaryLight: '#44467C',
				base: '#EBEBE6'
			},
			fontFamily: {
				workSans: ['Work Sans', 'sans'],
				josefinSans: ['Josefin Sans'],
				chivo: ['Chivo']
			}
		}
	},
	plugins: []
};
