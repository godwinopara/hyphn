"use client";

import HeroCard from "./HeroCard";
import data from "public/assets/data.png";
import director from "public/assets/director.png";
import ignite from "public/assets/ignite.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Hero() {
	const items = [
		{
			id: 1,
			heading: "Ignite",
			highlight: "audience engagement",
			description: "with top-notch content that will maximize your online and offline presence.",
			heroBg: ignite,
		},
		{
			id: 2,
			heading: "Transform your",
			highlight: "content strategy",
			description: "with data-drive techniques.",
			heroBg: data,
		},
		{
			id: 3,
			heading: "Take advantage of the power of",
			highlight: "compelling stories",
			description: "to build your brand visibility",
			heroBg: director,
		},
	];

	return (
		<section className="mt-[4.85rem] xl:min-h-[95vh] xl:w-screen bg-black pt-10  pb-5 xl:pt-20 xl:pb-0 xl:mt-0  relative">
			<AliceCarousel
				autoPlay
				autoPlayStrategy="none"
				autoPlayInterval={3000}
				animationDuration={1000}
				animationType="slide"
				infinite
				touchTracking={false}
				disableDotsControls
				disableButtonsControls
				items={items.map((item) => (
					<HeroCard key={item.id} {...item} />
				))}
			/>

			<div>
				<div className="hidden md:block absolute top-0 left-[40%] bg-contain bg-no-repeat bg-heroPattern h-[555.291px] w-[545.595px]"></div>
			</div>
		</section>
	);
}
