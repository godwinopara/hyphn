import Image from "next/image";
import ignite from "public/assets/ignite.png";
import igniteMobile from "public/assets/igniteMobile.svg";

export default function FirstSlideHero() {
	return (
		<div className="relative max-w-desktop lg:min-h-[40vh] xl:min-h-[80vh] w-screen  mx-auto px-6 xl:px-0 grid  lg:items-center">
			<div className="text-center text-white mb-5 lg:mb-0 lg:text-left lg:mr-8">
				<h1 className="font-bold leading-130 text-33 xl:text-42 xl:w-[100%]">
					Ignite <span className="text-yellow">audience engagement</span>
				</h1>
				<p className="mt-1 mb-9 md:text-lg xl:text-xl lg:w-[40%]">
					with top-notch content that will maximize your online and offline presence.
				</p>
				<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-10  xl:py-4">
					Get Started
				</button>
			</div>
			<div className="hidden absolute bottom-0 right-0 xl:-top-16 w-full lg:block xl:-right-4 xxl:-right-24 overflow-hidden">
				<Image src={ignite} alt="hero background" className="object-cover object-center" />
			</div>
			<div className="lg:hidden">
				<Image src={igniteMobile} alt="hero background" className="lg:hidden" />
			</div>
		</div>
	);
}
