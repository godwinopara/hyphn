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
		<>
			{/* <div className="px-6  bg-white py-9 hidden">
				<div className="grid grid-cols-2 gap-5">
					<div className="flex justify-center">
						<Image src={flexport} alt="flexport logo" />
					</div>
					<div className="border border-black flex justify-center">
						<Image src={alfred} alt="alfred logo" />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-3 mt-5">
					<div className="flex justify-center">
						<Image src={bonfire} alt="bonfire logo" />
					</div>
					<div className="flex justify-center">
						<Image src={michigan} alt="michigan university logo" />
					</div>
					<div className="flex justify-center">
						<Image src={stanford} alt="stanford logo" />
					</div>
				</div>
			</div> */}
			<div className=" bg-white">
				<div className="py-3 max-w-desktop mx-auto md:py-9 px-6 lg:px-0">
					<Marquee>
						<div className="mr-16">
							<Image src={flexport} alt="flexport logo" />
						</div>
						<div className="mr-16">
							<Image src={alfred} alt="alfred logo" />
						</div>
						<div className="mr-16">
							<Image src={bonfire} alt="bonfire logo" />
						</div>
						<div className="mr-16">
							<Image src={michigan} alt="michigan university logo" />
						</div>
						<div className="mr-16">
							<Image src={stanford} alt="stanford logo" />
						</div>
					</Marquee>
				</div>
			</div>
		</>
	);
}
