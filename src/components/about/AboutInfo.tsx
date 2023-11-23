import expertise from "public/assets/expertise.svg";
import customization from "public/assets/customization.svg";
import quality from "public/assets/quality.svg";
import Image from "next/image";
import WhyChooseUsCard from "./WhyChooseUsCard";
import underline from "public/assets/underline.svg";
import office from "public/assets/office.png";

export default function AboutInfo() {
	return (
		<section className="px-6 xl:px-0 max-w-desktop mx-auto my-44">
			<div className="grid lg:grid-cols-2 items-center">
				<Image src={office} alt="office photo" />
				<div className="mt-10 lg:mt-0">
					<h2 className="text-2xl md:text-42 leading-130 font-bold text-yellow mb-6">
						Hyphn Profile
					</h2>
					<p className="md:text-xl leading-130">
						Hyphn is a comprehensive hub for exceptional content marketing services. We are a
						content marketing agency focused on delivering remarkable TV, radio, digital, and
						experiential content that helps businesses captivate audiences.
					</p>
					<br />
					<p className="md:text-xl leading-130">
						At Hyphn, we understand that effective content marketing goes beyond just showcasing
						products and services. ${`It's`}about crafting narratives that resonate with your target
						audience and compel them to take action. With our expertise, innovative strategies, and
						passion for storytelling, we ensure that your ${`brand's`} voice is heard loud and clear
						across all channels.
					</p>
				</div>
			</div>
		</section>
	);
}
