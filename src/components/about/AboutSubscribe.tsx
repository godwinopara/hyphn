export default function AboutSubscribe() {
	return (
		<section className="w-[95%] px-6 max-w-[1240px] mx-auto bg-yellow absolute -bottom-24 lg:w-full text-white xl:px-0">
			<div className="max-w-[598px] mx-auto py-8">
				<h2 className="text-lg lg:text-4xl font-bold leading-130 mb-5">
					To Get The Latest News About Us
				</h2>
				<div className="border border-solid rounded-lg border-white flex justify-between items-center p-2 lg:rounded-2xl">
					<input
						type="email"
						placeholder="Enter your Email Address"
						className="placeholder:text-sm w-[70%] py-3 text-white bg-transparent outline-none pl-4 placeholder-white"
					/>
					<button className="rounded-md bg-white text-yellow w-[30%] h-[50px] font-medium">
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
}
