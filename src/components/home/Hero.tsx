"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FirstSlideHero from "./FirstSlideHero";
import SecondSlideHero from "./SecondSlideHero";
import ThirdSlideHero from "./ThirdSlideHero";
import arrowLeft from "public/assets/arrow-left-white.svg";
import arrowRight from "public/assets/arrow-right-white.svg";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
	const carousel = useRef<AliceCarousel>(null);

	return (
		<section className="mt-[4.85rem] xl:min-h-[95vh] xl:w-screen bg-black pt-10  pb-5 xl:pt-20 xl:pb-0 xl:mt-0  relative">
			<AliceCarousel
				ref={carousel}
				animationDuration={500}
				infinite
				mouseTracking
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

			<div className="flex justify-center gap-5">
				<button
					className="border border-light-yellow xl:absolute bottom-10 xl:left-[42%] px-5 py-4 cursor-pointer rounded-[100%] hover:bg-yellow"
					onClick={(e) => carousel?.current?.slidePrev(e)}
				>
					<Image src={arrowLeft} alt="arrow icon facing left" />
				</button>
				<button
					className="border border-light-yellow xl:absolute bottom-10 xl:right-[49%] px-5 py-4 cursor-pointer rounded-[100%] hover:bg-yellow"
					onClick={(e) => carousel?.current?.slideNext(e)}
				>
					<Image src={arrowRight} alt="arrow icon facing left" />
				</button>
			</div>
		</section>
	);
}
