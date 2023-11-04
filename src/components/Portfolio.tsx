import soho from "public/assets/soho.png";
import openHub from "public/assets/openHub.png";
import skyside from "public/assets/skyside.png";
import woodseer from "public/assets/woodseer.png";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
	return (
		<section className="pt-17 px-6 max-w-desktop mx-auto lg:px-0">
			<div className="text-center mb-14 xl:text-left">
				<h2 className="text-yellow text-2xl font-semibold mb-3">OUR PORTFOLIO</h2>
				<p className="font-semibold md:text-3xl md:w-4/5 md:mx-auto xl:w-[45%] xl:m-0">
					We provide the Perfect Content Solution for your business growth
				</p>
			</div>

			<div className="md:w-[80%] lg:grid grid-cols-2 gap-5 max-w-desktop mx-auto lg:w-full">
				<div>
					<PortfolioCard
						img={skyside}
						title="Skyside Aero – Video"
						description="Ever wanted to step inside a luxurious private jet? Skyside Aero provides aircraft management, charter options, CAMO services and aircraft delivery and wanted a video to showcase its charter jet services."
					/>
					<PortfolioCard
						img={soho}
						title="Soho Markets – SEO Content Report"
						description="Soho Markets, a leading trading company, approached Contentworks Agency for a strategic start to finish overview of their website content."
					/>
				</div>
				<div>
					<PortfolioCard
						img={openHub}
						title="X Open Hub – Press Releases"
						description="X Open Hub is a regulated London based fintech providing multi-asset liquidity and trading technology. X Open Hub approached Contentworks Agency to work on a retained basis delivering monthly press release content."
					/>

					<PortfolioCard
						img={woodseer}
						title="Woodseer Dividend Forecasting – Articles"
						description="Woodseer is a renowned global specialist in dividend forecasting. The company has 200k+ securities in its system with estimate data for over 32,000 including equities, ADRs and ETFs."
					/>
				</div>
			</div>
		</section>
	);
}
