import Image from "next/image";
import underline from "public/assets/underline.svg";

export default function Mission() {
	return (
		<section className="px-6 xl:px-0 bg-black text-white1 py-28">
			<div className="max-w-[1198px] mx-auto text-center">
				<div className="relative">
					<h2 className="text-4xl xl:text-42 leading-130 font-bold mb-17">Our Mission</h2>
					<Image
						src={underline}
						alt="zig zag underline"
						className="left-[5%] absolute top-12 xl:left-[38%]"
					/>
				</div>
				<p className="text-xl xl:text-3xl leading-130">
					Our mission is to empower businesses and individuals with engaging and impactful content.
					We believe that well-crafted content is the cornerstone of effective communication and can
					drive success in today's digital age.
				</p>
			</div>
		</section>
	);
}
