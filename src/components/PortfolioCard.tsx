import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
	img: string | StaticImageData;
	title: string;
	description: string;
}

export default function PortfolioCard({ img, title, description }: PortfolioCardProps) {
	return (
		<div className="mb-14">
			<div className="pb-5">
				<Image src={img} alt="soho web design" />
			</div>
			<div>
				<h3 className="font-semibold mb-2 lg:text-2xl">{title}</h3>
				<p className="text-sm lg:text-base md:w-[90%] lg:w-full xl:w-[85%]">{description}</p>
			</div>
		</div>
	);
}
