import { MouseEventHandler } from "react";
import Image from "next/image";
import user from "public/assets/user.svg";

type ContentType = {
	id: number;
	title: string;
	selected: boolean;
};

type ContentCardProps = {
	id: number;
	title: string;
	selected: boolean;
	onClick: MouseEventHandler<HTMLDivElement> | ((content: ContentType) => void);
};

export default function ContentCard({ id, title, selected, onClick }: ContentCardProps) {
	const content = { id, title, selected };

	const handleClick = () => {
		if (typeof onClick === "function") {
			(onClick as (content: ContentType) => void)(content);
		}
	};
	return (
		<div
			onClick={handleClick}
			className={`border-b hover:bg-gray4 cursor-pointer border-black mb-4 p-6 last:mb-0 ${
				selected ? "bg-gray4" : ""
			}`}
		>
			<div className="flex items-center gap-4 mb-4">
				<Image src={user} alt="user icon" />
				<span className="text-sm">By Admin</span>
				<span className="text-sm">20 November 2023</span>
			</div>
			<div>
				<h4 className="font-bold text-lg mb-1">{title}</h4>
				<p className="mt-5">
					Lorem ipsum dolor sit amet consectetur. Egestas dignissim enim et neque tellus cras.
					Iaculis tortor ultrices mattis quam scelerisque.
				</p>
			</div>
		</div>
	);
}
