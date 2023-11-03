import Image from "next/image";
import contentImg from "public/assets/content.svg";
import heartImg from "public/assets/Heart.svg";
import workImg from "public/assets/Work.svg";
import arrow from "public/assets/arrow.svg";
import arrowYellow from "public/assets/arrow-yellow.svg";
import WhatWeDoCard from "./WhatWeDoCard";

export default function WhatWeDo() {
	return (
		<section className="px-6 pt-11 max-w-desktop mx-auto">
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
				<div></div>
			</div>
		</section>
	);
}
