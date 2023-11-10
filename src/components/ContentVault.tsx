import radio from "public/assets/radio-section.png";
import tv from "public/assets/tv-section.png";
import event from "public/assets/event-section.png";
import digital from "public/assets/digital-section.png";
import Image from "next/image";

export default function ContentVault() {
	return (
		<section className="bg-black border border-black py-16">
			<div className="max-w-desktop mx-auto">
				<div>
					<h2 className="text-yellow">CONTENT VAULT</h2>
					<p>Take a sneak pick of what we have</p>
				</div>
				<div className="grid grid-cols-4 gap-8 bg-black">
					<div>
						<Image
							src={radio}
							alt="an image that represents a radio"
							className="h-60 object-cover"
						/>
						<div className="px-10 py-8 bg-white h-44">
							<span className="block mb-2 text-gray3 leading-130">RADIO</span>
							<h3 className="leading-130 text-xl font-bold mb-2">World of Hero</h3>
							<span className="text-sm leading-130">16 July 2023</span>
						</div>
					</div>
					<div>
						<div>
							<Image src={tv} alt="an image that represents tv" className="h-60 object-cover" />
						</div>
						<div className="px-10 py-8 bg-white h-44">
							<span className="text-gray3 leading-130 mb-2">TV</span>
							<h3 className="leading-130 text-xl font-bold mb-2">Chasing Weddings</h3>
							<span>20 November 2023</span>
						</div>
					</div>
					<div>
						<Image
							src={digital}
							alt="an image that represents a radio"
							className="h-60 object-cover"
						/>
						<div className="px-10 py-8 bg-white h-44">
							<span className="text-gray3 leading-130 mb-2">DIGITAL/ONLINE</span>
							<h3 className="leading-130 text-xl font-bold mb-2">Ultimate Football Challenge</h3>
							<span>O1 November 2023</span>
						</div>
					</div>
					<div>
						<Image
							src={event}
							alt="an image that represents a radio"
							className="h-60 object-cover"
						/>
						<div className="px-10 py-8 bg-white h-44">
							<span className="text-gray3 leading-130 mb-2">EVENTS</span>
							<h3 className="leading-130 text-xl font-bold mb-2">Hero Music Album</h3>
							<span>20 May 2023</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
