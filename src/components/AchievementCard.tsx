import Image from "next/image";

interface CompletedProjectCardProps {
	icon: string;
	title: string;
	rating: string;
}

export default function CompletedProjectCard({ icon, title, rating }: CompletedProjectCardProps) {
	return (
		<div className="mb-20 text-white md:mb-0  md:border-r  lg:border-white last:border-none  w-full  flex justify-center items-center text-center ">
			<div className="px-10">
				<div className="mb-2.5 flex justify-center">
					<Image src={icon} alt="Rating" />
				</div>
				<h3 className="font-medium mb-4">{title}</h3>
				<h4 className="text-40 leading-130 font-bold text-yellow md:text-33 lg:text-40">
					{rating}
				</h4>
			</div>
		</div>
	);
}
