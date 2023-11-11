import React from "react";
import Image from "next/image";
import heroBg from "../../public/assets/herobg.svg";
import Partners from "@/components/Partners";

export default function Hero() {
	return (
		<section className="mt-[4.85rem] xl:min-h-[95vh] bg-black pt-10  pb-5 xl:pt-16 xl:pb-0  relative">
			<div className=" max-w-desktop mx-auto px-6 xl:px-0 lg:grid lg:grid-cols-2 lg:items-center">
				<div
					className="text-center text-white mb-14 lg:mb-0 lg:text-left lg:mr-8"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
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
				<div
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<Image src={heroBg} alt="hero background" />
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
