import Image, { StaticImageData } from "next/image";

interface WhyChooseUsCardProps {
	img: StaticImageData | string;
	title: string;
	description: string;
}

export default function WhyChooseUsCard({ img, title, description }: WhyChooseUsCardProps) {
	return (
		<div className="mb-10">
			<div className="md:flex md:items-center gap-3">
				<Image
					src={img}
					alt="a man and a lady sitting down"
					className="mx-auto w-[20%] md:w-[15%] md:mx-0  lg:max-w-full mb-4"
				/>
				<h3 className="text-xl font-bold xl:text-3xl mb-2">{title}</h3>
			</div>
			<p className="text-lg leading-130">{description}</p>
		</div>
	);
}
