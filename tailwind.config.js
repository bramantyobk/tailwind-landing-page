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
			backgroundImage: () => ({
				dots: "url('../images/bg-dots.svg')",
			}),
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1020px",
			xl: "1440px",
		},
	},
	plugins: [],
};
