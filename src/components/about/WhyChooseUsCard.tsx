import Image, { StaticImageData } from "next/image";

interface WhyChooseUsCardProps {
	img: StaticImageData | string;
	title: string;
	description: string;
}

export default function WhyChooseUsCard({ img, title, description }: WhyChooseUsCardProps) {
	return (
		<div className="mb-10 xl:text-center ">
			<Image src={img} alt="a man and a lady sitting down" className="xl:mx-auto mb-4" />
			<h3 className="text-xl font-bold xl:text-3xl mb-2">{title}</h3>
			<p className="text-lg leading-130">{description}</p>
		</div>
	);
}
