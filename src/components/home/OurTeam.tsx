import TeamList from "../TeamList";

export default function OurTeam() {
	return (
		<section className="px-6 max-w-desktop mx-auto py-16 xl:px-0">
			<div className="mb-6">
				<h2 className="text-xl text-yellow font-medium mb-6">OUR TEAM</h2>
				<p className="text-xl font-semibold md:text-2xl">My Gang, Creative and Talented</p>
			</div>
			<TeamList />
		</section>
	);
}
