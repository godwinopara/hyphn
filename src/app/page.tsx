// import ContentVault from "@/components/ContentVault";
import ContentVault from "@/components/ContentVault";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Subscribe from "@/components/Subscribe";
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
