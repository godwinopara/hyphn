import Image from "next/image";
import arrow from "public/assets/arrow-white.svg";
import AboutSubscribe from "./AboutSubscribe";

export default function AboutHero() {
	return (
		<section className="mt-16 min-h-[40vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-aboutHero relative xl:min-h-[70vh] ">
			<div className="absolute h-full w-full bg-darkGradient"></div>
			<div className="px-6 max-w-desktop mx-auto text-center text-white z-10 xl:px-0">
				<h1 className="text-4xl md:text-50 leading-130 font-bold ">About Us</h1>
			</div>

			<AboutSubscribe />
		</section>
	);
}
