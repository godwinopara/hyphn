"use client";

import Image from "next/image";
import michigan from "public/assets/michigan.svg";
import flexport from "public/assets/flexport.svg";
import stanford from "public/assets/stanford.svg";
import bonfire from "public/assets/bonfire.svg";
import alfred from "public/assets/alfred.svg";
import Marquee from "react-fast-marquee";

export default function Partners() {
	return (
		<div className="bg-black pb-10">
			<div className=" bg-white">
				<div className="py-3 max-w-[900px] mx-auto md:py-9 px-6 lg:px-0">
					<Marquee>
						<div className="mr-16">
							<Image src={flexport} alt="flexport logo" className="w-28" />
						</div>
						<div className="mr-16">
							<Image src={alfred} alt="alfred logo" className="w-28" />
						</div>
						<div className="mr-16">
							<Image src={bonfire} alt="bonfire logo" className="w-28" />
						</div>
						<div className="mr-16">
							<Image src={michigan} alt="michigan university logo" className="w-28" />
						</div>
						<div className="mr-16">
							<Image src={stanford} alt="stanford logo" className="w-28" />
						</div>
					</Marquee>
				</div>
			</div>
		</div>
	);
}
