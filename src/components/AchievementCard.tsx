import Image from "next/image";

interface CompletedProjectCardProps {
	icon: string;
	title: string;
	rating: string;
}

export default function CompletedProjectCard({ icon, title, rating }: CompletedProjectCardProps) {
	return (
		<div className="border-r text-white border-gray last:border-none p-10 flex flex-col items-center justify-center mt-8 ">
			<div className="mb-2.5">
				<Image src={icon} alt="Rating" />
			</div>
			<h3 className="font-medium mb-4 text-center">{title}</h3>
			<h4 className="text-40 leading-130 font-bold text-yellow md:text-33 lg:text-40">{rating}</h4>
		</div>
	);
}
