import Image from "next/image";
import TeamList from "../TeamList";
import underline from "public/assets/underline.svg";

export default function AboutTeam() {
	return (
		<section className="px-6 xl:px-0 max-w-desktop mx-auto py-24">
			<div className="text-center max-w-[1148px] mx-auto mb-14">
				<div className="relative">
					<h2 className="text-4xl xl:text-42 leading-130 font-bold mb-20">Our Team</h2>
					<Image
						src={underline}
						alt="zig zag underline"
						className="left-[5%] absolute top-14 md:left-[30%] xl:left-[38%]"
					/>
				</div>
				<p className="text-xl xl:text-3xl leading-130">
					Get to know the talented individuals behind Hyphn. Our team is not just a group of content
					developers; we are a family of wordsmiths passionate about what we do.
				</p>
			</div>
			<TeamList />
		</section>
	);
}
