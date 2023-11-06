import LogoDark from "public/assets/logo-dark.svg";
import facebook from "public/assets/facebook-yellow.svg";
import instagram from "public/assets/instagram-yellow.svg";
import linkedin from "public/assets/linkedin-yellow.svg";
import twitter from "public/assets/twitter-yellow.svg";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-mid-yellow py-10 px-6 xl:px-0">
			<div className="md:grid grid-cols-3 items-start max-w-desktop mx-auto mb-20">
				<div className="mb-10 md:mb-0">
					<Image src={LogoDark} alt="logo" className="pb-5" />
					<p className="mb-5 text-xl">
						Some footer text about the Agency. Just a little description to help people understand
						you better
					</p>
					<div className="flex items-center gap-4">
						<Image src={facebook} alt="facebook logo" />
						<Image src={twitter} alt="twitter logo" />
						<Image src={linkedin} alt="linkedin logo" />
						<Image src={instagram} alt="instagram logo" />
					</div>
				</div>
				<div className="mb-10 md:flex justify-center  md:mb-0">
					<div>
						<h3 className="font-semibold text-xl mb-4">Quick Links</h3>
						<ul className="flex flex-col gap-6 text-lg">
							<li>Services</li>
							<li>About Us</li>
							<li>Content Vault</li>
							<li>Portfolio</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</div>
				<div>
					<h3 className="font-semibold text-xl mb-7">Address</h3>
					<p className="text-xl">
						Design Agency Head Office.
						<br />
						Airport Road
						<br />
						United Arab Emirate
					</p>
				</div>
			</div>
			<div className="max-w-desktop mx-auto text-xl">Copyright Design Agency 2023</div>
		</footer>
	);
}