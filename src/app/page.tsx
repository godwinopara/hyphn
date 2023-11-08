// import ContentVault from "@/components/ContentVault";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<WhatWeDo />
				<Testimonial />
				<Subscribe />
			</main>
			<Footer />
		</>
	);
}
