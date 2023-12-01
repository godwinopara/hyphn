import arrow from "public/assets/arrow.svg";
import arrowYellow from "public/assets/arrow-yellow.svg";
import Image from "next/image";

interface WhatWeDoCardProps {
	img: string;
	title: string;
	description: string;
	className: string;
}

export default function WhatWeDoCard({ img, title, description, className }: WhatWeDoCardProps) {
	return (
		<div
			className={`py-10 px-4 bg-white1 rounded-3xl mt-8 md:text-left lg:items-start xl:px-16 ${className}`}
		>
			<div className="flex items-center lg:block mb-5">
				<div className="h-[48px] w-[48px] mr-3 bg-light-yellow lg:h-[88px] lg:w-[88px] flex items-center justify-center rounded-2xl">
					<Image src={img} alt="content creation icon" />
				</div>
				<h3 className="ml-2 lg:ml-0 text-xl font-semibold lg:text-2xl lg:my-5">{title}</h3>
			</div>
			<div className="mb-9">
				<p className="lg:text-lg">{description}</p>
			</div>
			<button className="flex items-center justify-center text-yellow px-4 py-4 gap-8 hover:bg-yellow hover:px-6 hover:rounded-xl   md:justify-start md:px-0">
				<span className="lg:text-lg lg:text-black">Learn More</span>
				<Image src={arrow} alt="arrow icon" className="hidden lg:block" />
				<Image src={arrowYellow} alt="arrow icon" className="lg:hidden" />
			</button>
		</div>
	);
}
