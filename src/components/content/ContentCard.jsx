import { MouseEventHandler } from "react";
import Image, { StaticImageData } from "next/image";
import user from "public/assets/user.svg";

// type ContentType = {
// 	id: number;
// 	title: string;
// 	selected: boolean;
// 	description: string;
// 	img: string | StaticImageData;
// };

// type ContentCardProps = {
// 	id: number;
// 	title: string;
// 	selected: boolean;
// 	description: string;
// 	img: string | StaticImageData;
// 	onClick: MouseEventHandler<HTMLDivElement> | ((content: ContentType) => void);
// };

export default function ContentCard({ id, title, selected, description, img, onClick }) {
	return (
		<div
			onClick={onClick}
			className={`border-b hover:bg-gray4 cursor-pointer border-black mb-4 p-6 last:mb-0 ${
				selected ? "bg-gray4" : ""
			}`}
		>
			<div className="flex items-center gap-4 mb-4">
				<Image src={user} alt="user icon" />
				<span className="text-sm">By Admin</span>
				<span className="text-sm">20 November 2023</span>
				iI
			</div>
			<div>
				<h4 className="font-bold text-lg mb-1">{title}</h4>
				<p className="mt-5">{description}</p>
			</div>
		</div>
	);
}

// const content = { id, title, selected, description, img };

// const handleClick = () => {
// 	if (typeof onClick === "function") {
// 		(onClick as (content: ContentType) => void)({
// 			id,
// 			title,
// 			selected,
// 			description,
// 			img,
// 		});
// 	}
// };
