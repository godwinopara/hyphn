import React from "react";
import Image from "next/image";
import heroBg from "../../public/assets/herobg.svg";

export default function Hero() {
	return (
		<section className="min-h-[70vh] bg-light-yellow border border-black pt-10">
			<div className="grid grid-cols-2 max-w-desktop mx-auto items-center">
				<div className="border border-black mr-8">
					<h1 className="font-bold text-50 leading-130">
						Increase Your Customers Loyalty and Brand Satisfaction
					</h1>
					<p className="text-xl mt-3 mb-9">
						We deliver expert content marketing strategies for our clients with our engaging
						articles, social media, PR, market analysis and videos.
					</p>
					<button className="bg-yellow text-xl font-medium text-white py-5 px-7.5 rounded-2xl">
						Get Started
					</button>
				</div>
				<div className="border border-black">
					<Image src={heroBg} alt="hero background" />
				</div>
			</div>
		</section>
	);
}
