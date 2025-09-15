import React from "react";
import Image from "next/image";
import { aboutTexts } from "@/data/data.texts";

const AboutCard = () => {
	return (
		<section className="relative flex flex-col md:flex-row items-center justify-center gap-8 py-12">
			{/* Texto principal */}
			<div className="bg-[#23272f] rounded-2xl p-8 max-w-xl w-full shadow-lg text-gray-100 border border-[#2dd4bf]/40">
				<h2 className="text-3xl md:text-4xl font-bold text-[#2dd4bf] mb-4">{aboutTexts.title}</h2>
				<p className="text-lg leading-relaxed text-gray-300">{aboutTexts.description}</p>
			</div>
			{/* Imagem */}
			<div className="flex-shrink-0">
				<Image
					src="/images/image.jpg"
					alt="Foto programando"
					width={320}
					height={320}
					className="rounded-xl object-cover shadow-lg border border-[#2dd4bf]/30"
				/>
			</div>
		</section>
	);
};

export default AboutCard;
