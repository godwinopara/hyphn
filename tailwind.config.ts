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
				white2: "#F8FFF9",
				white1: "#f9f9f9",
				gray: "#c4c4c47f",
				"light-gray": "#E6E4FF",
				gray2: "#8B8B8B",
				gray3: "#8A8A8A",
				gray4: "#CECECE",
				green: "#20B15A",
			},
			spacing: {
				2.5: "0.625rem",
				7.5: "1.875rem",
				17: "4.4375rem",
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
			backgroundImage: {
				openHub: "url('/assets/openHub.png')",
				skyside: "url('/assets/skyside.png')",
				content: "url('/assets/content.jpg')",
				heroPattern: "url('/assets/bg-design.svg')",
				heroPattern2: "url('/assets/bg-design2.svg')",
			},
			boxShadow: {
				"3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
export default config;
