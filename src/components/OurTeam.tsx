import Image from "next/image";
import huston1 from "public/assets/huston1.png";
import huston2 from "public/assets/huston2.png";
import huston3 from "public/assets/huston3.png";
import facebook from "public/assets/facebook-color.svg";
import instagram from "public/assets/instagram-color.svg";
import linkedin from "public/assets/linkedin-color.svg";
import TeamList from "./TeamList";

export default function OurTeam() {
	return (
		<section className="px-6 max-w-desktop mx-auto py-16 xl:px-0">
			<div className="mb-6">
				<h2 className="text-xl text-yellow font-medium mb-6">OUR TEAM</h2>
				<p className="text-xl font-semibold md:text-2xl">My Gang, Creative and Talented</p>
			</div>
			<TeamList />
		</section>
	);
}
