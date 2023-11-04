export default function Subscribe() {
	return (
		<section className="max-w-2xl mx-auto text-center px-6 py-20">
			<div>
				<h2 className="text-green font-semibold text-2xl mb-3 lg:font-medium">SUBSCRIBE</h2>
			</div>
			<div>
				<h3 className="font-medium mb-1 lg:font-semibold lg:text-3xl">
					Subscribe To Get The Latest <br /> News About Us
				</h3>
				<p className="font-bold text-gray2 mb-5 lg:font-normal lg:mb-10">
					Please drop your email below to get daily update about what we do
				</p>
			</div>
			<div className="border border-solid rounded-lg border-black flex justify-between items-center p-2 lg:rounded-2xl">
				<input type="email" placeholder="Enter your Email Address" className="-z-10 w-[70%] py-3" />
				<button className="rounded-md bg-yellow text-white w-[30%] h-[50px] font-medium">
					Subscribe
				</button>
			</div>
		</section>
	);
}
