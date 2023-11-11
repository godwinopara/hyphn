import expertise from "public/assets/expertise.svg";
import customization from "public/assets/customization.svg";
import quality from "public/assets/quality.svg";
import Image from "next/image";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function AboutInfo() {
	return (
		<section className="py-16 max-w-desktop mx-auto">
			<div className="text-center mb-17">
				<h2 className="text-yellow text-42 font-bold leading-130 mb-6">
					Crafting Content Excellence
				</h2>
				<p className="leading-130 max-w-[827px] mx-auto">
					At Hyphn, our journey began with a shared love for the written word. Over the years, we’ve
					evolved into a full-fledged content agency, committed to helping our clients achieve their
					communication goals through the power of words.
				</p>
			</div>

			<div>
				<h2 className="text-center text-42 font-bold leading-130 text-yellow mb-12">
					Why Choose Hyphn
				</h2>
				<div className="grid grid-cols-3 gap-10">
					<WhyChooseUsCard
						img={expertise}
						title="Tailored Strategies"
						description="We understand that each client is unique, and we work closely with you to develop customized content marketing strategies that align with your business goals and target audience."
					/>
					<WhyChooseUsCard
						img={customization}
						title="Creative Excellence"
						description="Our dedicated team of talented writers, directors, producers, and designers
							consistently delivers high-quality content that stands out from the crowd. We infuse
							creativity, innovation, and storytelling into every project we undertake."
					/>
					<WhyChooseUsCard
						img={quality}
						title="Results-Driven Approach"
						description="We are committed to driving tangible results for your business. Our data-driven
							insights and analytics enable us to optimize content performance and ensure it
							resonates with your target audience, expanding your reach and increasing engagement."
					/>

					<WhyChooseUsCard
						img={customization}
						title="Client-Centric Collaboration"
						description="We believe in building strong partnerships with our clients. Our collaborative
							approach ensures open communication, transparent processes, and the highest level of
							customer service throughout our engagement."
					/>

					<WhyChooseUsCard
						img={quality}
						title="Industry Expertise"
						description="With years of experience in content marketing, we have garnered a deep understanding
							of various industries. This expertise allows us to tailor our strategies and create
							content that speaks directly to your target market."
					/>

					<WhyChooseUsCard
						img={expertise}
						title="Deep Industry Insights"
						description="Partner with Hyphn today and experience the power of exceptional content marketing.
							Let us transform your brand's narrative into an impactful story that resonates with
							your audience, drives engagement, and fuels your success."
					/>
				</div>
			</div>
		</section>
	);
}
