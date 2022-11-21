/** @type {import('tailwindcss').Config} */
module.exports = {

	content: {
		relative: true,
		files: [
			'index.html',
			'./src/**/*.{html,js}',
			'./src/script.js'
		]
	},
	theme: {
		extend: {}
	},
	plugins: [
		require('prettier-plugin-tailwindcss')
	]
}