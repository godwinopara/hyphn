import contentImg from "public/assets/content.svg";
import heartImg from "public/assets/Heart.svg";
import workImg from "public/assets/Work.svg";
import WhatWeDoCard from "./WhatWeDoCard";
import rating from "public/assets/rating.svg";
import projectPlan from "public/assets/project-plan.svg";
import raise from "public/assets/raise.svg";
import timeline from "public/assets/timeline.svg";
import AchievementCard from "./AchievementCard";

export default function WhatWeDo() {
	return (
		<section className="pt-11 ">
			<div className="px-6 max-w-desktop mx-auto lg:pb-32">
				<div className="text-center mb-10 md:text-left">
					<h2 className="text-xl text-yellow font-semibold mb-3 md:text-xl md:font-medium">
						WHAT WE DO
					</h2>
					<p className="font-medium md:text-3xl md:font-semibold md:w-[62%] lg:w-1/2 xl:w-[35%]">
						We create engaging content that works for you and explains your brand
					</p>
				</div>
				<div className="md:grid grid-cols-3 gap-5">
					<WhatWeDoCard
						img={contentImg}
						title="Create Content"
						description="We help identify the best ways to improve your business"
					/>

					<WhatWeDoCard
						img={heartImg}
						title="Improve brand loyalty"
						description="We help identify the best ways to improve your business"
					/>
					<WhatWeDoCard
						img={workImg}
						title="Improve Business Model"
						description="We help identify the best ways to improve your business"
					/>
				</div>
			</div>
			<div className="pt-17 bg-light-yellow ">
				<div className="px-6 md:grid md:grid-cols-4 gap-4 max-w-desktop mx-auto">
					<AchievementCard icon={projectPlan} title="Completed Projects" rating="150 +" />
					<AchievementCard icon={rating} title="Customer Satisfaction" rating="60%" />
					<AchievementCard icon={raise} title="Raised by Clients" rating="$12M" />
					<AchievementCard icon={rating} title="Years in Business" rating="7 yrs" />
				</div>
			</div>
		</section>
	);
}
