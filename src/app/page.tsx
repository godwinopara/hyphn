// import ContentVault from "@/components/ContentVault";
import ContentVault from "@/components/home/ContentVault";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/home/OurTeam";
import Subscribe from "@/components/home/Subscribe";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<WhatWeDo />
				<OurTeam />
				<ContentVault />
				<Testimonial />
				<Subscribe />
			</main>
		</>
	);
}
