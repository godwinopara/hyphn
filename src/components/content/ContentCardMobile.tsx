import { StaticImageData } from "next/image";
import ContentDetailCard from "./ContentDetailCard";

type ContentCardMobileProps = {
	data: { id: number; title: string; selected: boolean; description: string }[];
	title: string;
	img: StaticImageData | string;
};

export default function ContentCardMobile({ data, title, img }: ContentCardMobileProps) {
	return (
		<div className="mb-24">
			<div className="flex justify-between items-center mb-16">
				<h3 className="text-xl font-semibold lg:text-3xl text-yellow">{title}</h3>
				<div>View All</div>
			</div>
			<div className="md:grid md:grid-cols-2 gap-6">
				{data.map((content) => {
					return (
						<ContentDetailCard
							key={content.id}
							img={img}
							title={content.title}
							description={content.description}
						/>
					);
				})}
			</div>
		</div>
	);
}
