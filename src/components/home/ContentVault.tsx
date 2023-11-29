import radio from "public/assets/radio-section.png";
import tv from "public/assets/tv-section.png";
import event from "public/assets/event-section.png";
import digital from "public/assets/digital-section.png";
import Image from "next/image";
import ContentVaultCard from "./ContentVaultCard";
import arrow from "public/assets/arrow-white.svg";

export default function ContentVault() {
	return (
		<section className="px-6 bg-black border border-black py-16 relative xl:px-0">
			<div className="max-w-desktop mx-auto">
				<div className="mb-6">
					<h2 className="text-yellow font-medium text-xl mb-6">CONTENT VAULT</h2>
					<p className="text-2xl text-white1 md:text-3xl font-semibold">
						Take a sneak pick of what we have
					</p>
				</div>
				<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 bg-black">
					<ContentVaultCard
						img={radio}
						section="RADIO"
						title="World of Hero Radio Show"
						date="16 July 2023"
					/>

					<ContentVaultCard
						img={tv}
						section="TV"
						title="League of Heroes"
						date="20 November 2023"
					/>
					<ContentVaultCard
						img={digital}
						section="DIGITAL/ONLINE"
						title="Ultimate Football Challenge"
						date="O1 November 2023"
					/>

					<ContentVaultCard
						img={event}
						section="EVENT"
						title="Hero Music Album"
						date="20 May 2023"
					/>
				</div>

				<div className="text-white flex justify-center mt-10">
					<button className="flex items-center justify-center gap-3 z-10 py-4 px-5 hover:bg-yellow rounded-lg">
						Learn More <Image src={arrow} alt="arrow" />
					</button>
				</div>
			</div>

			<div className="absolute -bottom-[5px] -left-[20%] bg-patternLeft bg-no-repeat bg-center h-[300px] w-full"></div>
		</section>
	);
}
