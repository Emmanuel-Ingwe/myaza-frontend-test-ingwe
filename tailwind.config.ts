import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			colors: {
				primary: "#1D1D41",
				Asecondary: "#01A461",
				secondary: "#141332",
				black: {
         			 10: "#666D80",
					500: "#0F0F10",
					900: "#000000",
				},
				status: {
					success: {
						"10": "#C6EDE5",
						"100": "#40C4AA",
					},
					alert: {
						10: "#F9D2D9",
						100: "#F7D4C3",
						500: "#DF1C41",
					},
					error: {
						"10": "#FEE4E2",
						"100": "#FF0000",
					},
					border: {
						"100": "#DFE1E6",
					},
				},
			},
			fontFamily: {
				Roboto: ["var(--roboto)"],
				OpenSans: ["var(--open-sans)"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			transitionProperty: {
				height: "height",
				width: "width",
				"max-height": "max-height",
			},
		},
	},
//   plugins: [require("tailwind-scrollbar")({ nocompatible: true })],

} satisfies Config;

