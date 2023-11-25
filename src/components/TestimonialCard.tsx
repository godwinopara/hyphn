"use client";

import Image from "next/image";
import customer from "public/assets/customer.png";

interface TestimonialCardProps {
	jobTitle: string;
}

export default function TestimonialCard({ jobTitle }: TestimonialCardProps) {
	return (
		<ul className="p-10 shadow-lg mb-10 rounded-3xl md:mr-10">
			<li className="mb-5">
				Thank You for your service. I am very pleased with the result. I have seen exponencial
				growth in my business and its all thanks to your amazing service
			</li>
			<li>
				<div className="flex items-center">
					<div className="mr-5 rounded-full bg-light-gray">
						<Image src={customer} alt="customer image" />
					</div>
					<div>
						<strong>Emily Stones</strong>
						<span className="block">{jobTitle}</span>
					</div>
				</div>
			</li>
		</ul>
	);
}
