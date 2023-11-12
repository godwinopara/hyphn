import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/assets/logo-white.svg";
import facebook from "public/assets/facebook.svg";
import instagram from "public/assets/instagram.svg";
import twitter from "public/assets/twitter.svg";
import linkedin from "public/assets/linkedin.svg";

export default function Navbar() {
	const currentRoute = usePathname();
	return (
		<nav className="py-1 bg-black fixed w-full z-50 top-0 left-0">
			<div className="py-5 px-6 max-w-desktop mx-auto flex items-center justify-between xl:py-2 xl:px-0">
				<div>
					<Link href="/">
						<Image src={logo} alt="logo" className="w-3/5 lg:w-full" />
					</Link>
				</div>
				<ul className="hidden xl:flex items-center font-medium text-white">
					<NavLink href="/services" currentPath={currentRoute} label="Services" />
					<NavLink href="/about" currentPath={currentRoute} label="About Us" />
					<NavLink href="/content" currentPath={currentRoute} label="Content Vault" />
					<NavLink href="/team" currentPath={currentRoute} label="Our Team" />
					<NavLink href="/contact" currentPath={currentRoute} label="Contact Us" />

					<li className="mr-8 cursor-pointer border border-white rounded-lg py-2.5 px-3 hover:bg-yellow">
						Book a meeting
					</li>
					<li className="flex items-center justify-between">
						<Image src={twitter} alt="twitter logo" className="mr-1 cursor-pointer" />
						<Image src={instagram} alt="instagram logo" className="mr-1 cursor-pointer" />
						<Image src={linkedin} alt="linkedin logo" className="mr-1 cursor-pointer" />
						<Image src={facebook} alt="facebook logo" className="mr-1 cursor-pointer" />
					</li>
				</ul>
				<div className="xl:hidden">
					<Image src="/assets/hamburgerIcon.svg" height={24} width={24} alt="hamburger icon" />
				</div>
			</div>
		</nav>
	);
}

interface NavLinkProp {
	href: string;
	label: string;
	currentPath: string;
}

const NavLink = ({ href, currentPath, label }: NavLinkProp) => {
	return (
		<li
			className={`mr-8 cursor-pointer hover:text-yellow ${
				currentPath === href ? "text-yellow hover:text-white" : ""
			}`}
		>
			<Link href={href}>{label}</Link>
		</li>
	);
};
