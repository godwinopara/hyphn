import React from "react";
import OurTeam from "@/components/OurTeam";
import arrow from "public/assets/arrow-white.svg";
import Image from "next/image";

export default function AboutPage() {
	return (
		<main>
			<section className="mt-16 min-h-[60vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-aboutHero relative">
				<div className="absolute h-full w-full bg-darkGradient"></div>
				<div className="max-w-desktop mx-auto text-center text-white z-10">
					<h1 className="text-50 leading-130 font-bold mt-32 mb-2 ">About Us</h1>
					<p className="text-xl max-w-[838px] mx-auto">
						Welcome to Hyphn, an agency where words come to life! we are a passionate team of
						writers, editors, and content strategists dedicated to delivering exceptional content
						solutions for businesses and individuals
					</p>
					<div className="mt-8 flex items-center justify-center">
						<button className="flex items-center justify-center gap-3">
							Learn More <Image src={arrow} alt="arrow icon " />{" "}
						</button>
					</div>
				</div>
			</section>
			<OurTeam />
		</main>
	);
}
