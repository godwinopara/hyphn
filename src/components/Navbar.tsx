"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/assets/logo-white.svg";
import facebook from "public/assets/facebook.svg";
import instagram from "public/assets/instagram.svg";
import twitter from "public/assets/twitter.svg";
import linkedin from "public/assets/linkedin.svg";
import hamburgerMenu from "public/assets/hamburger-menu.svg";
import closeHamburger from "public/assets/close-icon.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
	const currentRoute = usePathname();

	const [navIsOpen, setNavIsOpen] = useState(false);

	const handleToggleNav = () => {
		setNavIsOpen(!navIsOpen);
	};

	useEffect(() => {
		setNavIsOpen(false);
	}, [currentRoute]);

	return (
		<nav className="py-1 bg-black fixed w-full z-50 top-0 left-0">
			<div className="py-5 px-6 max-w-desktop mx-auto flex items-center justify-between xl:py-2 xl:px-0">
				<div>
					<Link href="/">
						<Image src={logo} alt="logo" className="w-3/5 lg:w-full" />
					</Link>
				</div>
				<ul className="hidden lg:flex items-center font-medium text-white">
					<NavLink href="/#services" currentPath={currentRoute} label="Services" />
					<NavLink href="/about" currentPath={currentRoute} label="About Us" />
					<NavLink href="/content" currentPath={currentRoute} label="Our Content Vault" />
					<NavLink href="/team" currentPath={currentRoute} label="Our Team" />
					{/* <NavLink href="/contact" currentPath={currentRoute} label="Contact Us" /> */}

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
				<ul
					className={`fixed transition ease-linear w-full top-20 py-8 -left-1 -translate-x-[100%] pl-6 bg-black  lg:hidden items-center font-medium text-white ${
						navIsOpen ? "translate-x-1" : ""
					}`}
				>
					<MobileNavLink
						href="/#services"
						currentPath={currentRoute}
						icon="/assets/services-icon.svg"
						label="Services"
					/>
					<MobileNavLink
						href="/about"
						currentPath={currentRoute}
						icon="/assets/about-icon.svg"
						label="About Us"
					/>
					<MobileNavLink
						href="/content"
						currentPath={currentRoute}
						icon="/assets/content-icon.svg"
						label="Our Content Vault"
					/>
					<MobileNavLink
						href="/team"
						currentPath={currentRoute}
						icon="/assets/team-icon.svg"
						label="Our Team"
					/>
					{/* <MobileNavLink
						href="/contact"
						currentPath={currentRoute}
						icon="/assets/contact-icon.svg"
						label="Contact Us"
					/> */}
				</ul>
				<button className="lg:hidden" onClick={handleToggleNav}>
					{!navIsOpen && <Image src={hamburgerMenu} alt="hamburger icon" />}
					{navIsOpen && <Image src={closeHamburger} alt="hamburger close" />}
				</button>
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
			className={`lg:mr-4 xl:mr-8 cursor-pointer hover:text-yellow ${
				currentPath === href ? "text-yellow hover:text-white" : ""
			}`}
		>
			<Link href={href}>{label}</Link>
		</li>
	);
};

interface MobileNavLinkProp {
	href: string;
	label: string;
	currentPath: string;
	icon: string;
}

const MobileNavLink = ({ href, currentPath, label, icon }: MobileNavLinkProp) => {
	return (
		<li
			className={`text-xl flex mb-6 cursor-pointer hover:text-yellow ${
				currentPath === href ? "text-yellow hover:text-white" : ""
			}`}
		>
			<Image src={icon} alt="icon" className="mr-5 h-auto w-auto" height={20} width={20} />
			<Link href={href}>{label}</Link>
		</li>
	);
};
