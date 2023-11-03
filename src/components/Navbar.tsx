import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="py-1 bg-light-yellow">
			<div className="max-w-desktop mx-auto flex justify-between">
				<div>
					<Image src="/assets/logo.svg" width={150} height={52} alt="logo" />
				</div>
				<ul className="flex items-center font-medium">
					<li className="mr-8 cursor-pointer">Services</li>
					<li className="mr-8 cursor-pointer">About Us</li>
					<li className="mr-8 cursor-pointer">Content Vault</li>
					<li className="mr-8 cursor-pointer">Portfolio</li>
					<li className="mr-8 cursor-pointer">Contact Us</li>
					<li className="mr-8 cursor-pointer border border-solid border-yellow rounded-lg py-2.5 px-3">
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
			</div>
		</nav>
	);
}
