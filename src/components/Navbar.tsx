import Image from "next/image";
import logo from "public/assets/logo.svg";

export default function Navbar() {
	return (
		<nav className="py-1 bg-light-yellow">
			<div className="py-5 px-6 max-w-desktop mx-auto flex items-center justify-between xl:py-2 xl:px-0">
				<div>
					<Image src={logo} alt="logo" className="w-3/5 lg:w-full" />
				</div>
				<ul className="hidden xl:flex items-center font-medium">
					<li className="mr-8 cursor-pointer">Services</li>
					<li className="mr-8 cursor-pointer">About Us</li>
					<li className="mr-8 cursor-pointer">Content Vault</li>
					<li className="mr-8 cursor-pointer">Our Team</li>
					<li className="mr-8 cursor-pointer">Contact Us</li>
					<li className="mr-8 cursor-pointer border-yellow rounded-lg py-2.5 px-3">
						Book a meeting
					</li>
					<li className="flex items-center justify-between">
						<Image
							src="/assets/twitter.svg"
							width={18}
							height={18}
							alt="twitter logo"
							className="mr-1 cursor-pointer"
						/>
						<Image
							src="/assets/instagram.svg"
							width={18}
							height={18}
							alt="instagram logo"
							className="mr-1 cursor-pointer"
						/>
						<Image
							src="/assets/linkedin.svg"
							width={18}
							height={18}
							alt="linkedin logo"
							className="mr-1 cursor-pointer"
						/>
						<Image
							src="/assets/facebook.svg"
							width={18}
							height={18}
							alt="facebook logo"
							className="mr-1 cursor-pointer"
						/>
					</li>
				</ul>
				<div className="xl:hidden">
					<Image src="/assets/hamburgerIcon.svg" height={24} width={24} alt="hamburger icon" />
				</div>
			</div>
		</nav>
	);
}
