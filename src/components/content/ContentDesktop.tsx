"use client";

import { useState } from "react";
import ContentCard from "@/components/content/ContentCard";
import ContentDetailCard from "@/components/content/ContentDetailCard";
import tv from "public/assets/tv.png";
import digital from "public/assets/digital-online.png";
import radio from "public/assets/radio.png";
import event from "public/assets/event.png";
import Link from "next/link";

type ContentType = {
	id: number;
	title: string;
	description: string;
	selected: boolean;
};

export default function ContentDesktop() {
	const [currentTvContent, setCurrentTvContent] = useState({
		title: "Naija Untapped",
		description:
			"Naija Untapped is a TV documentary that explores the hidden treasures of the Nigerian leisure and entertainment industry. From nightclubs to lounges, bistros to restaurants, beach houses to art houses, theme parks to parties, Naija Untapped will take viewers on an experience into some of the most exciting places and events where the best of Naija fun and entertainment is served",
	});
	const [currentRadioContent, setCurrentRadioContent] = useState({
		title: "King of Football Radio Show",
		description:
			"The King of Football Radio Show is specifically designed for Budweiser as a platform for the brans to leverage their sponsorship of the English Premier league. In the live radio show, listeners call in to test their knowledge of the premiership and stand an opportunity to win amazing prizes. ",
	});

	const [currentDigitalContent, setCurrentDigitalContent] = useState({
		title: "Ultimate Football Challenge",
		description:
			"Excite yourself in the Ultimate Football Challenge experience by downloading the app here or being part of the social media community on Facebook, X and Instagram……",
	});

	const [tvContentData, setTvContentData] = useState([
		{
			id: 1,
			title: "League of Heroes",
			selected: true,
			description:
				"League of Heroes was a 15mins TV show specifically created for Hero Lager beer as platform for the brand to leverage their sponsorship of the NPFL in 2021/2022. The show was a weekly review of the Nigerian premier league and highlights of Hero beer’s participation in the sponsorship.",
		},
		{
			id: 2,
			title: "Naija Untapped",
			selected: false,
			description:
				"Naija Untapped is a TV documentary that explores the hidden treasures of the Nigerian leisure and entertainment industry. From nightclubs to lounges, bistros to restaurants, beach houses to art houses, theme parks to parties, Naija Untapped will take viewers on an experience into some of the most exciting places and events where the best of Naija fun and entertainment is served",
		},
		{
			id: 3,
			title: "Top Squad",
			selected: false,
			description:
				"Top Squad is a TV game show where teams face-off against each other in games and recreational activities that border around the social interests on youths. Squads complete in elimination challenges until the top squad is decided. This show is available for sponsorship.",
		},
		{
			id: 4,
			title: "Naija Untapped",
			selected: false,
			description:
				"Naija Untapped is a TV documentary that explores the hidden treasures of the Nigerian leisure and entertainment industry. From nightclubs to lounges, bistros to restaurants, beach houses to art houses, theme parks to parties, Naija Untapped will take viewers on an experience into some of the most exciting places and events where the best of Naija fun and entertainment is served",
		},
	]);

	const [radioContentData, setRadioContentData] = useState([
		{
			id: 1,
			title: "15mins Drivetime with TOTAL",
			selected: true,
			description:
				"15minutes Drivetime with Total Energies is a live radio show created for Total to give free auto care education and recommendations. The show featured expert on common auto care challenges of the Nigerian user with analysis with recommendations on how to overcome them. ",
		},
		{
			id: 2,
			title: "Wise Mama",
			selected: false,
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
	]);

	const [digitalContentData, setDigitalContentData] = useState([
		{
			id: 1,
			title: "Ultimate Football Challenge",
			selected: true,
			description:
				"Excite yourself in the Ultimate Football Challenge experience by downloading the app here or being part of the social media community on Facebook, X and Instagram……",
		},
		{
			id: 2,
			title: "Wise Mama",
			selected: false,
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
	]);

	const handleClick = (content: ContentType) => {
		setCurrentTvContent({ ...content });
		const newtvContentData = tvContentData.map((data) => {
			if (data.id === content.id) {
				return { ...data, selected: true };
			} else {
				return { ...data, selected: false };
			}
		});
		setTvContentData(newtvContentData);
	};

	const handleClickRadio = (content: ContentType) => {
		setCurrentRadioContent({ ...content });
		const newRadioContentData = radioContentData.map((data) => {
			if (data.id === content.id) {
				return { ...data, selected: true };
			} else {
				return { ...data, selected: false };
			}
		});
		setRadioContentData(newRadioContentData);
	};

	const handleClickDigital = (content: ContentType) => {
		setCurrentDigitalContent({ ...content });
		const newDigitalContentData = digitalContentData.map((data) => {
			if (data.id === content.id) {
				return { ...data, selected: true };
			} else {
				return { ...data, selected: false };
			}
		});
		setDigitalContentData(newDigitalContentData);
	};

	return (
		<div className="hidden xl:block">
			<div className="my-24">
				<div className="flex justify-between items-center mb-16">
					<h3 className="font-semibold text-3xl text-yellow">TV</h3>
					<div>View All</div>
				</div>
				<div className="grid grid-cols-2 justify-between gap-8">
					<ContentDetailCard img={tv} {...currentTvContent} />
					<div>
						{tvContentData.map((content) => {
							return <ContentCard key={content.id} {...content} onClick={handleClick} />;
						})}
					</div>
				</div>
			</div>

			<div className="mb-24">
				<div className="flex justify-between items-center mb-16">
					<h3 className="font-semibold text-3xl text-yellow">RADIO</h3>
					<div>View All</div>
				</div>
				<div className="grid grid-cols-2 justify-between gap-8">
					<div>
						{radioContentData.map((content) => {
							return <ContentCard key={content.id} {...content} onClick={handleClickRadio} />;
						})}
					</div>
					<ContentDetailCard img={radio} {...currentRadioContent} />
				</div>
			</div>

			<div className="mb-24">
				<div className="flex justify-between items-center mb-16">
					<h3 className="font-semibold text-3xl text-yellow">DIGITAL</h3>
					<div>View All</div>
				</div>
				<div className="grid grid-cols-2 justify-between gap-8">
					<ContentDetailCard img={digital} {...currentDigitalContent} />
					<div>
						{digitalContentData.map((content) => {
							return <ContentCard key={content.id} {...content} onClick={handleClickDigital} />;
						})}
					</div>
				</div>
			</div>

			<div className="mb-24">
				<div className="flex justify-between items-center mb-16">
					<h3 className="font-semibold text-3xl text-yellow">EVENT</h3>
					<div>View All</div>
				</div>
				<div className="grid grid-cols-2 justify-between gap-8">
					<div>
						{radioContentData.map((content) => {
							return <ContentCard key={content.id} {...content} onClick={handleClickRadio} />;
						})}
					</div>
					<ContentDetailCard img={event} {...currentRadioContent} />
				</div>
			</div>
		</div>
	);
}
