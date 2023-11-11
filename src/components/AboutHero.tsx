import Image from "next/image";
import arrow from "public/assets/arrow-white.svg";

export default function AboutHero() {
	return (
		<section className="mt-16 min-h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-aboutHero relative">
			<div className="absolute h-full w-full bg-darkGradient"></div>
			<div className="px-6 max-w-desktop mx-auto text-center text-white z-10 xl:px-0">
				<h1 className="text-4xl xl:text-50 leading-130 font-bold mt-32 mb-2 ">About Us</h1>
				<p className="xl:text-xl max-w-[838px] mx-auto">
					Welcome to Hyphn, an agency where words come to life! we are a passionate team of writers,
					editors, and content strategists dedicated to delivering exceptional content solutions for
					businesses and individuals
				</p>
				<div className="mt-8 flex items-center justify-center">
					<button className="flex items-center justify-center gap-3 py-4 px-5">
						Learn More <Image src={arrow} alt="arrow icon " />
					</button>
				</div>
			</div>
		</section>
	);
}
