import Image from "next/image";
import lanre from "public/assets/lanre.png";
import ada from "public/assets/ada.png";
import blessing from "public/assets/blessing.png";
import uche from "public/assets/Uche.png";

export default function TeamList() {
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16 text-center">
			<div>
				<Image src={ada} alt="guy on black shirt sitting down" className="mx-auto" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Eze-nwoko Adaeze Confidence</h3>
					<span className="mb-2 block">HR Generalist</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">
						Recruitment, employee relations, onboarding, compensation and benefits, performance
						management, learning and development, and HR Administration
					</p>
				</div>
			</div>
			<div>
				<Image src={lanre} alt="guy on black shirt sitting down" className="mx-auto" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Akinyele Olanrewaju Quadri</h3>
					<span className="mb-2 block">Creative Manager</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">Graphics/ MoGraph/ Video Editing</p>
				</div>
			</div>
			<div>
				<Image src={blessing} alt="guy on black shirt sitting down" className="mx-auto" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Nwaigba Ngozi</h3>
					<span className="mb-2 block">Client service executive</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">Organization, Scheduling, Customer Service.</p>
				</div>
			</div>
			<div>
				<Image src={uche} alt="guy on black shirt sitting down" className="mx-auto" />
				<div className="mt-4">
					<h3 className="font-bold text-xl mb-2">Ebenyi Uchechukwu</h3>
					<span className="mb-2 block">Office Assitant</span>
					<p className="text-sm mb-4 w-4/5 mx-auto">Organization, Scheduling, Logistics</p>
				</div>
			</div>
		</div>
	);
}
