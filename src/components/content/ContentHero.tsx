export default function ContentHero() {
	return (
		<section className="mt-16 min-h-[60vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-contentVaultBg relative">
			<div className="absolute h-full w-full bg-darkGradient"></div>
			<div className="px-6 max-w-desktop mx-auto text-center text-white z-10 xl:px-0">
				<h1 className="text-4xl md:text-50 leading-130 font-bold">Our Content Vault</h1>
			</div>
		</section>
	);
}
