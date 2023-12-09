import TeamList from "@/components/TeamList";
import Image from "next/image";
import underline from "public/assets/underline.svg";

export default function Team() {
	return (
		<>
			<section className="mt-16 min-h-[50vh] md:min-h-[30vh] xl:min-h-[50vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-teamHero relative">
				<div className="absolute h-full w-full bg-darkGradient"></div>
				<div className="px-6 max-w-desktop mx-auto text-center text-white z-10 xl:px-0">
					<h1 className="text-33 md:text-50 leading-130 font-bold mb-6 xl:text-5xl">Our Team</h1>
					<p className="md:text-2xl max-w-[900px] mx-auto">
						we are a group of skilled professionals who excel in creating engaging and impactful
						content that help businesses reach their target audience and achieve their
						marketing goals.
					</p>
				</div>
			</section>
			<section className="bg-light-yellow py-24 px-6 xl:px-0">
				<div className="relative">
					<h2 className="text-3xl md:text-4xl xl:text-42 leading-130 font-normal mb-20 xl:mb-44 text-yellow text-center">
						Meet Our Team
					</h2>
					<Image
						src={underline}
						alt="zig zag underline"
						className="hidden left-[12%] absolute top-16 md:left-[30%] xl:block xl:left-[40%]"
					/>
				</div>

				<div className="max-w-desktop mx-auto flex flex-col gap-20">
					<TeamList />
				</div>
			</section>
		</>
	);
}
