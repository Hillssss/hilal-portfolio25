/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '760px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "var(--font-bai-jamjuree-extralight)",
	},
  	extend: {
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height : "var(--radix-accordion-content-height"},
			},
			"accordion-up": {
				from: { height : "var(--radix-accordion-content-height" },
				to: { height : "0"},
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
		colors: {
			primary: '#0f0f0f', 
			accent: {
			  DEFAULT: '#e8e1d1', 
			  hover: '#3a5422',
			}
		  },		  
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
