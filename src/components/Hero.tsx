import React from "react";
import Image from "next/image";
import heroBg from "../../public/assets/herobg.svg";
import Partners from "./Partners";

export default function Hero() {
	return (
		<section className="min-h-[70vh] bg-light-yellow border border-black pt-8 pb-5 xl:pt-10 xl:pb-9">
			<div className=" max-w-desktop mx-auto px-6 xl:px-0 xl:grid xl:grid-cols-2 xl:items-center">
				<div className="border border-black text-center mb-14 xl:mb-0 xl:text-left xl:mr-8">
					<h1 className="font-bold leading-130 text-2xl xl:text-50 ">
						Increase Your Customers Loyalty and Brand Satisfaction
					</h1>
					<p className=" mt-3 mb-9 xl:text-xl">
						We deliver expert content marketing strategies for our clients with our engaging
						articles, social media, PR, market analysis and videos.
					</p>
					<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-7.5 xl:py-5">
						Get Started
					</button>
				</div>
				<div className="border border-black">
					<Image src={heroBg} alt="hero background" />
				</div>
			</div>
			<Partners />
		</section>
	);
}
