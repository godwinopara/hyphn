import Image from "next/image";
import underline from "public/assets/underline.svg";
import WhyChooseUsCard from "./WhyChooseUsCard";
import client from "public/assets/client.svg";
import creative from "public/assets/creative.svg";
import industry from "public/assets/industry.svg";
import result from "public/assets/result.svg";
import strategy from "public/assets/strategy.svg";

export default function WhyChooseUs() {
	return (
		<section className="my-24 max-w-desktop mx-auto">
			<div className="relative">
				<h2 className="text-3xl md:text-4xl xl:text-42 leading-130 font-bold mb-32 text-yellow text-center">
					Why Choose Hyphn?
				</h2>
				<Image
					src={underline}
					alt="zig zag underline"
					className="left-[12%] absolute top-12 md:left-[30%] xl:left-[38%]"
				/>
			</div>

			<div className="px-6 text-center md:grid grid-cols-2 md:text-left md:gap-6 lg:gap-x-32 lg:mx-10">
				<WhyChooseUsCard
					img={strategy}
					title="Tailored Strategies"
					description="We understand that each client is unique, and we work closely with you to develop customized content marketing strategies that align with your business goals and target audience."
				/>
				<WhyChooseUsCard
					img={creative}
					title="Creative Excellence"
					description="Our dedicated team of talented writers, directors, producers, and designers consistently delivers high-quality content that stands out from the crowd. We infuse creativity, innovation, and storytelling into every project we undertake."
				/>
				<WhyChooseUsCard
					img={result}
					title="Results-Driven Approach"
					description="We are committed to driving tangible results for your business. Our data-driven insights and analytics enable us to optimize content performance and ensure it resonates with your target audience, expanding your reach and increasing engagement."
				/>
				<WhyChooseUsCard
					img={client}
					title="Client-Centric Collaboration"
					description="We believe in building strong partnerships with our clients. Our collaborative approach ensures open communication, transparent processes, and the highest level of customer service throughout our engagement."
				/>
				<WhyChooseUsCard
					img={industry}
					title="Industry Expertise"
					description="With years of experience in content marketing, we have garnered a deep understanding of various industries. This expertise allows us to tailor our strategies and create content that speaks directly to your target market."
				/>
			</div>
		</section>
	);
}
