import Image, { StaticImageData } from "next/image";
import director from "public/assets/director.png";
import data from "public/assets/data.png";

interface HeroCardProps {
	heading: string;
	highlight: string;
	description: string;
	heroBg: string | StaticImageData;
	// className: string;
}

// lg:grid lg:grid-cols-2

export default function HeroCard({ heading, highlight, description, heroBg }: HeroCardProps) {
	return (
		<div className="relative max-w-desktop min-h-[80vh]  mx-auto px-6 xl:px-0 grid  lg:items-center">
			<div className="text-center text-white mb-14 lg:mb-0 lg:text-left lg:mr-8">
				<h1 className="font-bold leading-130 text-33 xl:text-42 xl:w-[100%]">
					{heading} <br />
					<span className="text-yellow">{highlight}</span>
				</h1>
				<p className="mt-3 mb-9 md:text-lg xl:text-xl xl:w-[40%]">{description}</p>
				<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-7.5 xl:py-5">
					Get Started
				</button>
			</div>
			<div className="absolute -top-16 -right-24">
				<Image src={heroBg} alt="hero background" className="object-cover object-center" />
			</div>
		</div>
	);
}

// data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
// data-aos-duration="1000"
// data-aos-easing="ease-in-out"
