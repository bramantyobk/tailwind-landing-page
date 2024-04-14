/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				softBlue: "#5368df",
				softRed: "#fc5555",
				grayishBlue: "#9194a1",
				veryDarkBlue: "#252b46",
			},
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
