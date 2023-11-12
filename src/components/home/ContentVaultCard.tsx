import Image, { StaticImageData } from "next/image";

interface ContentVaultCardProps {
	img: StaticImageData | string;
	section: string;
	title: string;
	date: string;
}

export default function ContentVaultCard({ img, section, title, date }: ContentVaultCardProps) {
	return (
		<div className="z-10">
			<Image src={img} alt="an image that represents a radio" className="h-60 object-cover" />
			<div className="px-10 py-8 bg-white h-44">
				<span className="block mb-2 text-gray3 leading-130">{section}</span>
				<h3 className="leading-130 text-xl font-bold mb-2">{title}</h3>
				<span className="text-sm leading-130">{date}</span>
			</div>
		</div>
	);
}
