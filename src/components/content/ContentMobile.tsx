"use client";

import { useState } from "react";
import tv from "public/assets/tv.png";
import digital from "public/assets/digital-online.png";
import radio from "public/assets/radio.png";
import event from "public/assets/event.png";
import ContentCardMobile from "./ContentCardMobile";
import worldOfHeroes from "public/assets/hero-world-of-heroes.png";
import wisemama from "public/assets/wise-mama.png";
import naijaUntapped from "public/assets/naija-untapped.png";
import drive from "public/assets/15min.png";
import topsquad from "public/assets/top-squad-all.png";
import placeholder from "public/assets/placeholder1.png";

export default function ContentMobile() {
	const tvContentData = [
		{
			id: 1,
			title: "League of Heroes",
			selected: true,
			img: worldOfHeroes,
			description:
				"League of Heroes was a 15mins TV show specifically created for Hero Lager beer as platform for the brand to leverage their sponsorship of the NPFL in 2021/2022. The show was a weekly review of the Nigerian premier league and highlights of Hero beer’s participation in the sponsorship.",
		},
		{
			id: 2,
			title: "Naija Untapped",
			selected: false,
			img: naijaUntapped,
			description:
				"Naija Untapped is a TV documentary that explores the hidden treasures of the Nigerian leisure and entertainment industry. From nightclubs to lounges, bistros to restaurants, beach houses to art houses, theme parks to parties, Naija Untapped will take viewers on an experience into some of the most exciting places and events where the best of Naija fun and entertainment is served",
		},
		{
			id: 3,
			title: "Top Squad",
			selected: false,
			img: topsquad,
			description:
				"Top Squad is a TV game show where teams face-off against each other in games and recreational activities that border around the social interests on youths. Squads complete in elimination challenges until the top squad is decided. This show is available for sponsorship.",
		},
	];

	const radioContentData = [
		{
			id: 1,
			title: "15mins Drivetime with TOTAL",
			selected: true,
			img: drive,
			description:
				"15minutes Drivetime with Total Energies is a live radio show created for Total to give free auto care education and recommendations. The show featured expert on common auto care challenges of the Nigerian user with analysis with recommendations on how to overcome them. ",
		},
		{
			id: 2,
			title: "Wise Mama",
			selected: false,
			img: wisemama,
			description:
				"Wise Mama is a radio drama series created for Tasty Tom tomato brand. It’s the story of how a 63yr old grandmother is attempting to impact her wisdom on a young generation of mothers who are going through the challenges of being a wife, a mother and a superwoman.",
		},
		{
			id: 3,
			title: "King of Football Radio Show",
			selected: false,
			description:
				"The King of Football Radio Show is specifically designed for Budweiser as a platform for the brans to leverage their sponsorship of the English Premier league. In the live radio show, listeners call in to test their knowledge of the premiership and stand an opportunity to win amazing prizes. ",
		},
		{
			id: 4,
			title: "World of Heroes Radio Show",
			selected: false,
			description:
				"The World of Heroes is a live radio show specifically created for Hero lager beer as a platform to propagate the brand’s communication and offers. It is an exciting radio program that infuses comedy, music, culture and current trends to engage and pass across the Hero lager’s message to its target audience.",
		},
		{
			id: 5,
			title: "Ultimate Football Challenge",
			selected: false,
			description:
				"The Ultimate Football Challenge is an exciting and intriguing live radio game show where listeners call-in and challenge their knowledge on different football topics across the world for a chance to some of the biggest prizes on Nigerian radio.",
		},
	];

	const digitalContentData = [
		{
			id: 1,
			title: "Ultimate Football Challenge",
			selected: true,
			description:
				"Excite yourself in the Ultimate Football Challenge experience by downloading the app here or being part of the social media community on Facebook, X and Instagram……",
		},
	];

	return (
		<section className="py-24 xl:hidden">
			<div className="px-6">
				<ContentCardMobile title="TV" data={tvContentData} />
				<ContentCardMobile title="RADIO" data={radioContentData} />
				<ContentCardMobile title="DIGITAL" data={digitalContentData} />
			</div>
		</section>
	);
}
