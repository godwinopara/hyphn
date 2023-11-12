"use client";

import { useState } from "react";
import ContentHero from "@/components/content/ContentHero";
import ContentCard from "@/components/content/ContentCard";
import ContentDetailCard from "@/components/content/ContentDetailCard";
import tv from "public/assets/tv.png";
import digital from "public/assets/digital-online.png";
import radio from "public/assets/radio.png";
import event from "public/assets/event.png";

type ContentType = {
	id: number;
	title: string;
	selected: boolean;
};

export default function ContentVault() {
	const [currentTvContent, setCurrentTvContent] = useState("Chasing Wedding");
	const [currentRadioContent, setCurrentRadioContent] = useState("World of Hero");

	const [tvContentData, setTvContentData] = useState([
		{ id: 1, title: "Chasing Wedding", selected: true },
		{ id: 2, title: "Matrix", selected: false },
		{ id: 3, title: "Bride and Groom", selected: false },
		{ id: 4, title: "Fantastic Four", selected: false },
	]);
	const [radioContentData, setRadioContentData] = useState([
		{ id: 1, title: "World of Hero", selected: true },
		{ id: 2, title: "World of Budwiser", selected: false },
		{ id: 3, title: "World of Flying Fish", selected: false },
		{ id: 4, title: "World of Malt", selected: false },
	]);

	const handleClick = (content: ContentType) => {
		setCurrentTvContent(content.title);
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
		setCurrentRadioContent(content.title);
		const newRadioContentData = radioContentData.map((data) => {
			if (data.id === content.id) {
				return { ...data, selected: true };
			} else {
				return { ...data, selected: false };
			}
		});
		setRadioContentData(newRadioContentData);
	};

	return (
		<main>
			<ContentHero />
			<div className="max-w-desktop mx-auto">
				<h2 className="text-yellow text-xl mb-4 mt-16">Content Vault</h2>

				<div>
					<div className="mb-24">
						<h3 className="font-semibold">TV</h3>
						<div className="flex justify-between gap-8">
							<ContentDetailCard img={tv} title={currentTvContent} />
							<div>
								{tvContentData.map((content) => {
									return (
										<ContentCard
											key={content.id}
											id={content.id}
											title={content.title}
											selected={content.selected}
											onClick={handleClick}
										/>
									);
								})}
							</div>
						</div>
					</div>

					<div className="mb-24">
						<h3>Radio</h3>
						<div className="flex justify-between gap-8">
							<div>
								{radioContentData.map((content) => {
									return (
										<ContentCard
											key={content.id}
											id={content.id}
											title={content.title}
											selected={content.selected}
											onClick={handleClickRadio}
										/>
									);
								})}
							</div>
							<ContentDetailCard img={radio} title={currentRadioContent} />
						</div>
					</div>

					<div className="mb-24">
						<h3>Digital/Online</h3>
						<div className="flex justify-between gap-8">
							<ContentDetailCard img={digital} title={currentTvContent} />
							<div>
								{tvContentData.map((content) => {
									return (
										<ContentCard
											key={content.id}
											id={content.id}
											title={content.title}
											selected={content.selected}
											onClick={handleClick}
										/>
									);
								})}
							</div>
						</div>
					</div>

					<div className="mb-24">
						<h3>Event</h3>
						<div className="flex justify-between gap-8">
							<div>
								{radioContentData.map((content) => {
									return (
										<ContentCard
											key={content.id}
											id={content.id}
											title={content.title}
											selected={content.selected}
											onClick={handleClickRadio}
										/>
									);
								})}
							</div>
							<ContentDetailCard img={event} title={currentRadioContent} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
