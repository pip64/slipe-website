/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				"white": "#ffffff",
				"blue": "#1976FF",
				"black": "#000000",
				"transparent-light": "#ffffff80",
				"transparent-dark": "#00000080",
				"gray-section": "#1F1F1F",
				"gray-button": "#0000001a",
				"copyright": "#ffffff40",
				"header-background": "#000000cc",
			},
		},
	},
};
