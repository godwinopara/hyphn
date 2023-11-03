import Image from "next/image";
import michigan from "public/assets/michigan.svg";
import flexport from "public/assets/flexport.svg";
import stanford from "public/assets/stanford.svg";
import bonfire from "public/assets/bonfire.svg";
import alfred from "public/assets/alfred.svg";

export default function Partners() {
	return (
		<>
			<div className="px-6 max-w-desktop mx-auto bg-white2 border border-black py-9 lg:hidden">
				<div className="grid grid-cols-2 gap-5">
					<div className="border border-black flex justify-center">
						<Image src={flexport} alt="flexport logo" />
					</div>
					<div className="border border-black flex justify-center">
						<Image src={alfred} alt="alfred logo" />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-3 mt-5">
					<div className="border border-black flex justify-center">
						<Image src={bonfire} alt="bonfire logo" />
					</div>
					<div className="border border-black flex justify-center">
						<Image src={michigan} alt="michigan university logo" />
					</div>
					<div className="border border-black flex justify-center">
						<Image src={stanford} alt="stanford logo" />
					</div>
				</div>
			</div>
			<div className="hidden max-w-desktop mx-auto bg-white2 border border-black py-9 lg:flex justify-between items-center">
				<Image src={flexport} alt="flexport logo" className="border border-black" />
				<Image src={alfred} alt="alfred logo" className="border border-black" />
				<Image src={bonfire} alt="bonfire logo" className="border border-black" />
				<Image src={michigan} alt="michigan university logo" className="border border-black" />
				<Image src={stanford} alt="stanford logo" className="border border-black" />
			</div>
		</>
	);
}
