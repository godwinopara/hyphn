import Image from "next/image";
import lanre from "public/assets/lanre.png";
import ada from "public/assets/ada.png";
import blessing from "public/assets/blessing.png";
import uche from "public/assets/uche.png";

export default function TeamList() {
	return (
		<div className="grid md:px-10 xl:px-0 xl:grid-cols-2 gap-20">
			<div className="md:flex  gap-8">
				<div className="flex items-center justify-center xl:w-1/2">
					<Image
						src={ada}
						alt="guy on black shirt sitting down"
						className="xl:h-[300px] object-cover object-center"
					/>
				</div>
				<div className="mt-5 text-center md:text-left md:w-1/2">
					<h3 className="font-bold text-2xl mb-2">Eze-nwoko Adaeze Confidence</h3>
					<span className="mb-2 block text-lg font-medium text-center md:text-left">
						HR Generalist
					</span>
					<p className="mt-4">
						Recruitment, employee relations, onboarding, compensation and benefits, performance
						management, learning and development, and HR Administration
					</p>
				</div>
			</div>
			<div className="md:flex gap-8">
				<div className="flex items-center justify-center">
					<Image
						src={lanre}
						alt="guy on black shirt sitting down"
						className="xl:h-[300px] object-cover object-center"
					/>
				</div>
				<div className="mt-5 text-center md:text-left">
					<h3 className="font-bold text-2xl mb-2">Akinyele Olanrewaju Quadri</h3>
					<span className="mb-2 block text-lg font-medium">Creative Manager</span>
					<p className="mt-4">Graphics/ MoGraph/ Video Editing</p>
				</div>
			</div>
			<div className="md:flex gap-8">
				<div className="flex items-center justify-center">
					<Image
						src={blessing}
						alt="guy on black shirt sitting down"
						className="xl:h-[300px] object-cover object-center"
					/>
				</div>
				<div className="mt-5 text-center md:text-left">
					<h3 className="font-bold text-2xl mb-2">Nwaigba Ngozi</h3>
					<span className="mb-2 block text-lg font-medium">Client service executive</span>
					<p className="mt-4">Organization, Scheduling, Customer Service.</p>
				</div>
			</div>
			<div className="md:flex gap-8">
				<div className="flex items-center justify-center">
					<Image
						src={uche}
						alt="guy on black shirt sitting down"
						className="xl:w-[250px] object-cover object-center"
					/>
				</div>
				<div className="mt-5 text-center md:text-left">
					<h3 className="font-bold text-2xl mb-2">Ebenyi Uchechukwu</h3>
					<span className="mb-2 block text-lg font-medium">Office Assitant</span>
					<p className="mb-4">Organization, Scheduling, Logistics</p>
				</div>
			</div>
		</div>
	);
}
