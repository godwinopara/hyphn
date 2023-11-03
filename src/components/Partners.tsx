import Image from "next/image";
import michigan from "public/assets/michigan.svg";
import flexport from "public/assets/flexport.svg";
import stanford from "public/assets/stanford.svg";
import bonfire from "public/assets/bonfire.svg";
import alfred from "public/assets/alfred.svg";

export default function Partners() {
	return (
		<div className="flex justify-between items-center max-w-desktop mx-auto bg-white2 border border-black py-9">
			<Image src={flexport} alt="flexport logo" className="border border-black" />
			<Image src={alfred} alt="alfred logo" className="border border-black" />
			<Image src={bonfire} alt="bonfire logo" className="border border-black" />
			<Image src={michigan} alt="michigan university logo" className="border border-black" />
			<Image src={stanford} alt="stanford logo" className="border border-black" />
		</div>
	);
}
