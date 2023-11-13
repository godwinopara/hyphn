import Image, { StaticImageData } from "next/image";
import user from "public/assets/user.svg";
import arrow from "public/assets/arrow.svg";

type ContentDetailCardProps = {
	title: string;
	img: string | StaticImageData;
};

export default function ContentDetailCard({ title, img }: ContentDetailCardProps) {
	return (
		<div className="mb-10 p-7 border border-black w-full xl:mb-0">
			<Image src={img} alt="chase wedding" />
			<div className="flex items-center gap-4 my-6">
				<Image src={user} alt="user icon" />
				<span className="text-sm">By Admin</span>
				<span className="text-sm">20 November 2023</span>
			</div>
			<div>
				<h4 className="font-bold text-2xl mb-2">{title}</h4>
				<span>Episode 1</span>
				<p className="my-6">
					Lorem ipsum dolor sit amet consectetur. Morbi tincidunt et id adipiscing a scelerisque
					posuere euismod egestas. Ac proin odio urna fringilla nibh sed mi tristique vitae. Cras
					lorem quam aliquam at purus tortor non. Hendrerit etiam id facilisi enim suspendisse netus
					nibh augue.
				</p>
				<button className="text-lg border flex items-center justify-center gap-3 py-3 px-5 hover:bg-yellow rounded-[10px] hover:text-white">
					Learn More <Image src={arrow} alt="arrow icon" />
				</button>
			</div>
		</div>
	);
}
