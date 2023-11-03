import arrow from "public/assets/arrow.svg";
import arrowYellow from "public/assets/arrow-yellow.svg";
import Image from "next/image";

interface WhatWeDoCardProps {
	img: string;
	title: string;
	description: string;
}

export default function WhatWeDoCard({ img, title, description }: WhatWeDoCardProps) {
	return (
		<div className="py-10 flex flex-col items-center justify-center text-center mt-8 md:text-left border md: px-4">
			<div className="bg-light-yellow p-6 rounded-2xl mb-3 md:mr-auto">
				<Image src={img} alt="content creation icon" />
			</div>
			<div className="mb-9">
				<h3 className="text-xl font-semibold mb-3 lg:text-2xl">{title}</h3>
				<p className="lg:text-lg">{description}</p>
			</div>
			<button className="flex items-center justify-center text-yellow px-4 py-3 gap-8">
				<span className="lg:text-lg lg:text-black">Learn More</span>
				<Image src={arrow} alt="arrow icon" className="hidden lg:block" />
				<Image src={arrowYellow} alt="arrow icon" className="lg:hidden" />
			</button>
		</div>
	);
}