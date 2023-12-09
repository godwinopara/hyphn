import Image from "next/image";
import Link from "next/link";
import data from "public/assets/data.png";
import dataMobile from "public/assets/dataMobile.svg";

export default function SecondSlideHero() {
	return (
		<div className="relative max-w-desktop lg:min-h-[40vh] xl:min-h-[80vh] w-screen  mx-auto px-6 xl:px-0 grid  lg:items-center">
			<div className="text-center text-white mb-5 lg:mb-0 lg:text-left lg:mr-8">
				<h1 className="font-bold leading-130 text-33 xl:text-50 xl:w-[100%] mb-3">
					Transform your <br /> <span className="text-yellow">content strategy</span>
				</h1>
				<p className="mt-1 mb-9 text-lg xl:text-2xl lg:w-[40%]">with data-drive techniques.</p>
				<button className="bg-yellow text-xl font-medium text-white py-2.5 px-5 rounded-2xl xl:px-10 xl:py-4">
					<Link href="/content">Get Started</Link>
				</button>
			</div>
			<div className="hidden absolute bottom-0 right-0 xl:-top-16 w-full lg:block xl:-right-4 xxl:-right-24 overflow-hidden">
				<Image src={data} alt="hero background" className="object-cover object-center" />
			</div>
			<div className="lg:hidden">
				<Image src={dataMobile} alt="hero background" className="object-cover object-center" />
			</div>
		</div>
	);
}
