import Subscribe from "@/components/Subscribe";
import AboutHero from "@/components/about/AboutHero";
import AboutInfo from "@/components/about/AboutInfo";
import Services from "@/components/about/Services";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Mission from "@/components/content/Mission";

export default function AboutPage() {
	return (
		<main>
			<AboutHero />
			<AboutInfo />
			<Services />
			<WhyChooseUs />
			<Mission />
			<Subscribe />
		</main>
	);
}
