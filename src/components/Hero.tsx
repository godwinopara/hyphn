import React from "react";
import Image from "next/image";
import heroBg from "../../public/assets/herobg.svg";
import Partners from "./Partners";

export default function Hero() {
	return (
		<section className="xl:min-h-[70vh] bg-light-yellow pt-8 pb-5 xl:pt-10 xl:pb-9">
			<div className=" max-w-desktop mx-auto px-6 xl:px-0 lg:grid lg:grid-cols-2 lg:items-center">
				<div className="text-center mb-14 lg:mb-0 lg:text-left lg:mr-8">
					<h1 className="font-bold leading-130 text-2xl md:text-40  xl:text-50 ">
						Increase Your Customers Loyalty and Brand Satisfaction
					</h1>
					<p className=" mt-3 mb-9 md:text-lg xl:text-xl">
						We deliver expert content marketing strategies for our clients with our engaging
						articles, social media, PR, market analysis and videos.
					</p>
					<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-7.5 xl:py-5">
						Get Started
					</button>
				</div>
				<div>
					<Image src={heroBg} alt="hero background" />
				</div>
			</div>
			<Partners />
		</section>
	);
}
