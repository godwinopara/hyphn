"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FirstSlideHero from "./FirstSlideHero";
import SecondSlideHero from "./SecondSlideHero";
import ThirdSlideHero from "./ThirdSlideHero";

export default function Hero() {
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
				items={[
					<FirstSlideHero key={1} />,
					<SecondSlideHero key={2} />,
					<ThirdSlideHero key={3} />,
				].map((slide, id) => {
					return <div key={id}>{slide}</div>;
				})}
			/>

			<div>
				<div className="hidden md:block absolute top-0 left-[40%] bg-contain bg-no-repeat bg-heroPattern h-[555.291px] w-[545.595px]"></div>
			</div>
		</section>
	);
}
