"use client";

import { useState } from "react";
import tv from "public/assets/tv.png";
import digital from "public/assets/digital-online.png";
import radio from "public/assets/radio.png";
import event from "public/assets/event.png";
import ContentDetailCard from "./ContentDetailCard";
import ContentCardMobile from "./ContentCardMobile";

export default function ContentMobile() {
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

	return (
		<section className="py-24 xl:hidden">
			<div className="px-6">
				<ContentCardMobile img={tv} title="TV" data={tvContentData} />
				<ContentCardMobile img={radio} title="RADIO" data={radioContentData} />
				<ContentCardMobile img={digital} title="DIGITAL/ONLINE" data={tvContentData} />
				<ContentCardMobile img={event} title="EVENT" data={radioContentData} />
			</div>
		</section>
	);
}
