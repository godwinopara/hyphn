"use client";

import Image from "next/image";
import content1 from "public/assets/content1.png";
import content2 from "public/assets/content2.png";
import Carousel from "react-spring-3d-carousel";

export default function ContentVault() {
	return (
		<>
			<section className="bg-light-yellow pt-16">
				<div className="max-w-desktop mx-auto">
					<div className="text-center pb-14">
						<h2 className="text-2xl font-semibold text-yellow mb-3">CONTENT VAULT</h2>
						<p className="font-semibold">Take a sneak pick of what we have</p>
					</div>
				</div>
				<div className="flex flex-col gap-10 pb-10 items-center justify-center">
					<Image src={content1} alt="content" />
					<Image src={content2} alt="content" />
					<Image src={content1} alt="content" />
				</div>
			</section>
		</>
	);
}
