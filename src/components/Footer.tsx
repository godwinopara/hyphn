import Logo from "public/assets/logo-white.svg";
import facebook from "public/assets/facebook-yellow.svg";
import instagram from "public/assets/instagram-yellow.svg";
import linkedin from "public/assets/linkedin-yellow.svg";
import twitter from "public/assets/twitter-yellow.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-black text-white2 py-10 px-6 xl:px-0">
			<div className="md:grid grid-cols-3 items-start max-w-desktop mx-auto mb-20">
				<div className="mb-10 md:mb-0">
					<Image src={Logo} alt="logo" className="pb-5" />
					<p className="mb-5">
						Hyphn is a comprehensive hub for exceptional content marketing services. We are a
						content marketing agency focused on delivering remarkable TV, radio, digital, and
						experiential content that helps businesses captivate audiences.
					</p>
					<div className="flex items-center gap-4">
						<Image src={facebook} alt="facebook logo" />
						<Image src={twitter} alt="twitter logo" />
						<Image src={linkedin} alt="linkedin logo" />
						<Image src={instagram} alt="instagram logo" />
					</div>
				</div>
				<div className="mb-10 md:flex justify-center  md:mb-0 mx-auto w-full">
					<div>
						<h3 className="font-semibold text-xl mb-4">Quick Links</h3>
						<ul className="flex flex-col gap-6 text-md">
							<li>
								<Link href="/#service">Services</Link>
							</li>
							<li>
								<Link href="/about">About Us</Link>
							</li>
							<li>
								<Link href="/content">Our Content Vault</Link>
							</li>
							<li>
								<Link href="/team">Our Team</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mx-auto">
					<h3 className="font-semibold text-xl mb-7">Address</h3>
					<p className="text-base">
						Hyphn Head Office.
						<br />
						434b, Damilola Fashade street off Titilayo Sector,
						<br />
						Omole Phase 1, Lagos, Nigeria
					</p>
				</div>
			</div>
			<div className="max-w-desktop mx-auto text-base">Copyright Design Agency 2023</div>
		</footer>
	);
}
