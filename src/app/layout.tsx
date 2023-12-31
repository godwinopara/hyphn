"use client";

import { useEffect } from "react";
// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

// const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<html lang="en">
			<body className={` text-black`}>
				<header>
					<Navbar />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
