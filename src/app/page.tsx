// import ContentVault from "@/components/ContentVault";
import ContentVault from "@/components/home/ContentVault";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/home/OurTeam";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";
import Partners from "@/components/home/Partners";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<Partners />
				<WhatWeDo />
				<OurTeam />
				<ContentVault />
				<Testimonial />
				<Subscribe />
			</main>
		</>
	);
}
