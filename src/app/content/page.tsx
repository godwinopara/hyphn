import ContentHero from "@/components/content/ContentHero";

import ContentDesktop from "@/components/content/ContentDesktop";
import ContentMobile from "@/components/content/ContentMobile";

export default function ContentVault() {
	return (
		<main>
			<ContentHero />
			<div className="max-w-desktop mx-auto">
				<ContentDesktop />
				<ContentMobile />
			</div>
		</main>
	);
}
