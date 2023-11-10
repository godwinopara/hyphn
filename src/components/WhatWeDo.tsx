import contentImg from "public/assets/content.svg";
import heartImg from "public/assets/Heart.svg";
import workImg from "public/assets/Work.svg";
import WhatWeDoCard from "./WhatWeDoCard";
import rating from "public/assets/rating.svg";
import projectPlan from "public/assets/project-plan.svg";
import raise from "public/assets/raise.svg";
import timeline from "public/assets/timeline.svg";
import AchievementCard from "./AchievementCard";

// import one from "public/assets/one.svg";

export default function WhatWeDo() {
	return (
		<section className="pt-11">
			<div className="px-6 max-w-desktop mx-auto lg:pb-32 lg:px-0">
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
					<p className="font-medium md:text-3xl md:font-semibold md:w-[62%] lg:w-1/2 xl:w-[35%]">
						What we do
					</p>
				</div>
				<div className="md:grid grid-cols-2 gap-6 lg:grid-cols-2">
					<WhatWeDoCard
						img={contentImg}
						title="TV Content"
						description="In the digital age, online platforms hold immense potential to reach audiences globally. At Hyphn, our digital content experts leverage their skills to produce compelling videos, engaging social media campaigns, informative blog posts, interactive websites, and more, enabling you to connect with your target audience across various digital channels."
						duration="700"
					/>

					<WhatWeDoCard
						img={heartImg}
						title="Radio Content"
						description="In the digital age, online platforms hold immense potential to reach audiences globally. At Hyphn, our digital content experts leverage their skills to produce compelling videos, engaging social media campaigns, informative blog posts, interactive websites, and more, enabling you to connect with your target audience across various digital channels."
						duration="1000"
					/>
					<WhatWeDoCard
						img={workImg}
						title="Digital Content"
						description="In the digital age, online platforms hold immense potential to reach audiences globally. At Hyphn, our digital content experts leverage their skills to produce compelling videos, engaging social media campaigns, informative blog posts, interactive websites, and more, enabling you to connect with your target audience across various digital channels."
						duration="1500"
					/>
					<WhatWeDoCard
						img={workImg}
						title="Experiential Content"
						description="We believe in creating immersive experiences that go beyond traditional marketing formats. Our team conceptualizes innovative experiential events and activations that leave a lasting impression on your customers. From themed events to interactive displays, we ensure your brand is unforgettable.."
						duration="2000"
					/>
				</div>
			</div>
			<div className="pt-17 bg-black md:pb-17">
				<div className="px-6 md:grid md:grid-cols-4 gap-4 max-w-desktop mx-auto lg:px-0">
					<AchievementCard icon={projectPlan} title="Completed Projects" rating="150 +" />
					<AchievementCard icon={rating} title="Customer Satisfaction" rating="60%" />
					<AchievementCard icon={raise} title="Raised by Clients" rating="$12M" />
					<AchievementCard icon={timeline} title="Years in Business" rating="7 yrs" />
				</div>
			</div>
		</section>
	);
}
