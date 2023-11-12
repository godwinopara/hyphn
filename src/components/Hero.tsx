"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroBg from "public/assets/herobg.svg";
import heroBg2 from "public/assets/herobg2.png";
import heroBg3 from "public/assets/herobg3.png";
import heroBg4 from "public/assets/herobg4.png";
import Partners from "@/components/Partners";

export default function Hero() {
	const images = [heroBg2, heroBg3, heroBg4, heroBg];
	const texts = [
		"Social Media.",
		"Great Marlet Analysis.",
		"Captivating Videos.",
		"Strategies Articles.",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="mt-[4.85rem] xl:min-h-[95vh] bg-black pt-10  pb-5 xl:pt-16 xl:pb-0  relative">
			<div className=" max-w-desktop mx-auto px-6 xl:px-0 lg:grid lg:grid-cols-2 gap-20  lg:items-center">
				<div
					className="text-center text-white mb-14 lg:mb-0 lg:text-left lg:mr-8"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<h1 className="font-bold leading-130 text-2xl md:text-40  xl:text-44 ">
						Discover the power of ENGAGING CONTENT through
						<span className="text-yellow"> {texts[currentIndex] || "Strategies Articles."}</span>
					</h1>
					<p className=" mt-3 mb-9 md:text-lg xl:text-xl">
						We deliver expert content marketing strategies for our clients with our engaging
						articles, social media, PR, market analysis and videos.
					</p>
					<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-7.5 xl:py-5">
						Get Started
					</button>
				</div>
				<div
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<Image src={images[currentIndex] || heroBg} alt="hero background" />
				</div>
			</div>
			<div>
				<div className="hidden md:block absolute top-0 left-[40%] bg-contain bg-no-repeat bg-heroPattern h-[555.291px] w-[545.595px]"></div>
				<div className="hidden md:block absolute bottom-0 right-0 bg-heroPattern2 h-[673.833px] w-[471.46px]"></div>
			</div>
			<Partners />
		</section>
	);
}
