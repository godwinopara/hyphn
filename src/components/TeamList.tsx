import Image from "next/image";
import huston1 from "public/assets/huston1.png";
import huston2 from "public/assets/huston2.png";
import huston3 from "public/assets/huston3.png";
import facebook from "public/assets/facebook-color.svg";
import instagram from "public/assets/instagram-color.svg";
import linkedin from "public/assets/linkedin-color.svg";

export default function TeamList() {
	return (
		<div className="grid md:grid-cols-3 gap-16 text-center">
			<div>
				<Image src={huston1} alt="guy on black shirt sitting down" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Ramandar Huston</h3>
					<span className="mb-2 block">UI/UX desinger</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">
						Currently working on a bombshell, amazing idea. works with Canva, Upwork as Developer
						and IT designer.
					</p>

					<div className="max-w-desktop mx-auto flex justify-center">
						<Image src={facebook} alt="facebook " className="mr-2" />
						<Image src={instagram} alt="facebook " className="mr-2" />
						<Image src={linkedin} alt="facebook " className="mr-2" />
					</div>
				</div>
			</div>
			<div>
				<Image src={huston2} alt="guy on black shirt sitting down" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Ramandar Huston</h3>
					<span className="mb-2 block">UI/UX desinger</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">
						Currently working on a bombshell, amazing idea. works with Canva, Upwork as Developer
						and IT designer.
					</p>

					<div className="max-w-desktop mx-auto flex justify-center">
						<Image src={facebook} alt="facebook " className="mr-2" />
						<Image src={instagram} alt="facebook " className="mr-2" />
						<Image src={linkedin} alt="facebook " className="mr-2" />
					</div>
				</div>
			</div>
			<div>
				<Image src={huston3} alt="guy on black shirt sitting down" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Ramandar Huston</h3>
					<span className="mb-2 block">UI/UX desinger</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">
						Currently working on a bombshell, amazing idea. works with Canva, Upwork as Developer
						and IT designer.
					</p>

					<div className="max-w-desktop mx-auto flex justify-center">
						<Image src={facebook} alt="facebook " className="mr-2" />
						<Image src={instagram} alt="facebook " className="mr-2" />
						<Image src={linkedin} alt="facebook " className="mr-2" />
					</div>
				</div>
			</div>
		</div>
	);
}
