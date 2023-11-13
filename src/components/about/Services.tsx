import Image from "next/image";
import underline from "public/assets/underline.svg";
import tv from "public/assets/tv.svg";
import radio from "public/assets/radio.svg";

import WhatWeDoCard from "../WhatWeDoCard";
import digitalContent from "public/assets/digital-content.svg";
import experientialContent from "public/assets/experiential-content.svg";

export default function Services() {
	return (
		<section className="py-44 bg-black">
			<div className="px-6 max-w-desktop mx-auto lg:pb-32 xl:px-0">
				<div className="text-center mb-6 md:text-left">
					<div className="relative">
						<h2 className="text-4xl xl:text-42 leading-130 font-bold mb-20 text-white text-center">
							Services Offered
						</h2>
						<Image
							src={underline}
							alt="zig zag underline"
							className="left-[5%] absolute top-14 md:left-[30%] xl:left-[39%]"
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 xl:grid-cols-7 gap-6 mb-6">
					<WhatWeDoCard
						img={tv}
						title="TV Content"
						description="Our team of talented creatives specializes in producing engaging television content that informs and entertains. From captivating commercials and infomercials to captivating TV shows and documentaries, we help you bring your brand to life on the screen."
						className="xl:col-span-3"
					/>

					<WhatWeDoCard
						img={radio}
						title="Radio Content"
						description="With years of experience in radio broadcasting, our team knows how to create impactful audio content that captivates listeners. We skillfully craft radio commercials, podcasts, jingles, and sponsorships that stand out in the airwaves and leave a lasting impression."
						className="xl:col-span-4"
					/>
					<WhatWeDoCard
						img={digitalContent}
						title="Digital Content"
						description=" In the digital age, online platforms hold immense potential to reach audiences globally. At Hyphn, our digital content experts leverage their skills to produce compelling videos, engaging social media campaigns, informative blog posts, interactive websites, and more, enabling you to connect with your target audience across various digital channels.
"
						className="xl:col-span-4"
					/>
					<WhatWeDoCard
						img={experientialContent}
						title="Experiential Content"
						description="We believe in creating immersive experiences that go beyond traditional marketing formats. Our team conceptualizes innovative experiential events and activations that leave a lasting impression on your customers. From themed events to interactive displays, we ensure your brand is unforgettable."
						className="xl:col-span-3"
					/>
				</div>
			</div>
		</section>
	);
}
