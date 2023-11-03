import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				yellow: "#C98700",
				"light-yellow": "#FAF3E6",
				"mid-yellow": "#EEDAB0",
				brown: "#462F00",
				black: "#101010",
				white2: "#F9F9F9",
			},
			spacing: {
				2.5: "0.625rem",
				7.5: "1.875rem",
			},
			fontSize: {
				50: "3.125rem",
				40: "2.5rem",
				33: "2.062rem",
				28: "1.750rem",
				23: "1.438rem",
				19: "1.188rem",
			},
			maxWidth: {
				desktop: "1298px",
			},
			lineHeight: {
				130: "130%",
			},
			screens: {
				md: "767px",
				lg: "1022px",
			},
		},
	},
	plugins: [],
};
export default config;
