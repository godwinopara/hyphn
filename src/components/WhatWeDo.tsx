import tv from "public/assets/tv.svg";
import radio from "public/assets/radio.svg";
import digitalContent from "public/assets/digital-content.svg";
import experientialContent from "public/assets/experiential-content.svg";
import WhatWeDoCard from "./WhatWeDoCard";
import rating from "public/assets/rating.svg";
import projectPlan from "public/assets/project-plan.svg";
import raise from "public/assets/raise.svg";
import timeline from "public/assets/timeline.svg";
import AchievementCard from "./AchievementCard";

export default function WhatWeDo() {
	return (
		<section className="pt-11" id="services">
			<div className="px-6 max-w-desktop mx-auto lg:pb-32 xl:px-0">
				<div
					className="text-center mb-6 md:text-left"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="20"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<h2 className="text-xl text-yellow font-semibold mb-3 md:text-xl md:font-medium">
						SERVICES
					</h2>
					<p className="font-medium text-3xl md:font-semibold md:w-[62%] lg:w-1/2 xl:w-[35%]">
						What we do
					</p>
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
			<div className="py-[98px] bg-black relative ">
				<div className="px-6 md:flex md:justify-between max-w-desktop mx-auto lg:px-0">
					<AchievementCard icon={projectPlan} title="Completed Projects" rating="150 +" />
					<AchievementCard icon={rating} title="Customer Satisfaction" rating="60%" />
					<AchievementCard icon={raise} title="Raised by Clients" rating="$12M" />
					<AchievementCard icon={timeline} title="Years in Business" rating="7 yrs" />
				</div>
				<div className="absolute -bottom-[5%] right-0 md:-bottom-[15%] md:-right-[20%] bg-patternRight bg-no-repeat bg-center h-[400px] w-full"></div>
			</div>
		</section>
	);
}
