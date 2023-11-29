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
				black2: "#1a1a1a",
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
				42: "2.625rem",
				44: "2.75rem",
				33: "2.062rem",
				28: "1.750rem",
				23: "1.438rem",
				19: "1.188rem",
			},
			maxWidth: {
				desktop: "1250px",
			},
			lineHeight: {
				130: "130%",
			},
			screens: {
				md: "767px",
				lg: "1022px",
				xl: "1279px",
				xxl: "1400px",
			},
			backgroundImage: {
				openHub: "url('/assets/openHub.png')",
				skyside: "url('/assets/skyside.png')",
				content: "url('/assets/content.jpg')",
				heroPattern: "url('/assets/bg-design.svg')",
				heroPattern2: "url('/assets/bg-design2.svg')",
				patternRight: "url('/assets/patternRight.svg')",
				patternLeft: "url('/assets/patternLeft.svg')",
				aboutHero: "url('/assets/aboutBg.png')",
				darkGradient:
					"linear-gradient(0deg, rgba(16, 16, 16, 0.43) -0.08%, rgba(16, 16, 16, 0.80) 110.57%)",
				contentVaultBg: "url('/assets/content-vault-bg.png')",
				dataHeroBg: "url('/assets/data.png')",
				directorBg: "url('/assets/director.png')",
				igniteBg: "url('/assets/ignite.png')",
			},
			boxShadow: {
				"3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
export default config;
