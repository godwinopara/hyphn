"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image from "next/image";
import customer from "public/assets/customer.png";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState, useRef } from "react";

import arrowRight from "public/assets/arrow-right.svg";
import arrowLeft from "public/assets/arrow-left.svg";

const items = [
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
	"CEO, Marketing Guru",
];

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1200: { items: 3 },
};

export default function Testimonial() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [disablePrev, setDisablePrev] = useState(true);
	const [disableNext, setDisableNext] = useState(false);
	const [innerWidth, setInnerWidth] = useState(0);

	const carousel = useRef(null);

	const prev = (e) => {
		carousel?.current?.slidePrev(activeIndex);
		setActiveIndex(() => setActiveIndex(activeIndex - 1));
		if (activeIndex === 1) {
			setDisablePrev(true);
			setDisableNext(false);
		}
	};

	const next = (e) => {
		carousel?.current?.slideNext(activeIndex);
		setActiveIndex(() => setActiveIndex(activeIndex + 1));
		if (activeIndex === 2) {
			setDisableNext(true);
			setDisablePrev(false);
		}
	};

	useEffect(() => {
		setInnerWidth(window.innerWidth);
	}, [innerWidth]);

	return (
		<section className="max-w-desktop mx-auto mb-20 pt-28 relative px-6 xl:px-0">
			<div className="mb-24 flex items-center justify-between">
				<div>
					<h2 className="text-yellow md:text-xl mb-6">TESTIMONIAL</h2>
					<strong className="text-xl md:text-3xl">Our Happy Customer</strong>
				</div>

				<div key="btns" className="flex">
					<button
						className={`border rounded-full px-5 py-4 mr-3 flex items-center justify-center ${
							disablePrev === true
								? "bg-transparent hover:bg-gray-light cursor-not-allowed"
								: "bg-mid-yellow "
						}`}
						onClick={prev}
						disabled={disablePrev}
					>
						<Image src={arrowLeft} alt="arrow icon" />
					</button>
					<button
						className={`border rounded-[100%] px-5 py-4 mr-3 flex items-center justify-center ${
							disableNext === true
								? "bg-transparent hover:bg-gray-light cursor-not-allowed"
								: "bg-mid-yellow "
						}`}
						onClick={next}
						disabled={disableNext}
					>
						<Image src={arrowRight} alt="arrow icon" />
					</button>
				</div>
			</div>
			<AliceCarousel
				mouseTracking
				disableDotsControls
				disableButtonsControls
				items={items.map((item, id) => (
					<TestimonialCard jobTitle={item} key={id} />
				))}
				responsive={responsive}
				ref={carousel}
				innerWidth={innerWidth}
			/>
		</section>
	);
}
