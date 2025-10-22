"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workSection } from "@/data/data.texts";

export default function Portfolio() {
  const { title, subtitle, buttonText, projects } = workSection;

  // State to track which card is clicked on mobile
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  // Handle card click on mobile
  const handleCardClick = (projectId: number) => {
    // Toggle active state (close if clicking the same card again)
    setActiveCardId(activeCardId === projectId ? null : projectId);
  };

  return (
    <section id="portfolio" className="flex flex-col items-center justify-center">
      <div className="container p-5 space-y-3">
        <div className="">
          <h2 className="">{title}</h2>
          <h3 className="mb-10">{subtitle}</h3>
        </div>
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group"
              onClick={() => handleCardClick(project.id)}
            >
              {/* Project container with overlay on hover/click */}
              <div className="relative h-[300px] md:h-[300px] w-full overflow-hidden">
                {/* Project image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on hover (desktop) or click (mobile) */}
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center
                    ${activeCardId === project.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                >
                  <div className="text-center p-6">
                    <span className="textcolor-primary-500 block mb-2">
                      {project.category}
                    </span>
                    <h3 className="mb-8">{project.title}</h3>

                    {/* Plus icon */}
                    <span className="block mb-8">+</span>

                    <Link
                      href={project.link}
                      className="inline-block border border-amber-500 textcolor-primary-500 hover:bg-amber-500 hover:text-black transition-colors py-2 px-4 text-xs uppercase tracking-wider"
                      onClick={(e) => e.stopPropagation()} // Prevent card click handler from firing when clicking the link
                    >
                      {buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}