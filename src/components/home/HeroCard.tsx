import Image, { StaticImageData } from "next/image";

interface HeroCardProps {
	heading: string;
	highlight: string;
	description: string;
	heroBg: string | StaticImageData;
}

export default function HeroCard({ heading, highlight, description, heroBg }: HeroCardProps) {
	return (
		<div className="relative max-w-desktop lg:min-h-[40vh] xl:min-h-[80vh] w-screen  mx-auto px-6 xl:px-0 grid  lg:items-center">
			<div className="text-center text-white mb-14 lg:mb-0 lg:text-left lg:mr-8">
				<h1 className="font-bold leading-130 text-33 xl:text-42 xl:w-[100%]">
					{heading} <br />
					<span className="text-yellow">{highlight}</span>
				</h1>
				<p className="mt-3 mb-9 md:text-lg xl:text-xl lg:w-[40%]">{description}</p>
				<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-7.5 xl:py-5">
					Get Started
				</button>
			</div>
			<div className="absolute bottom-0 right-0 xl:-top-16 w-full xl:-right-4 xxl:-right-24 overflow-hidden">
				<Image
					src={heroBg}
					alt="hero background"
					className="hidden lg:block object-cover object-center"
				/>
			</div>
		</div>
	);
}
