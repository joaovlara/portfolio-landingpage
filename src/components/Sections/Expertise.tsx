import React from "react";
import { expertiseTexts } from "@/data/data.texts";
import type {
  ExperienceItem,
  EducationItem,
  SkillCategory,
} from "@/types/type";

export default function Expertise() {
  const { title, subtitle, experience, education, skills } = expertiseTexts;

  return (
    <section id="expertise" className="min-h-screen flex flex-col items-center justify-center">
      <div className="container p-5 space-y-3">
        {/* Expertise Header */}
        <div className="">
          <h2 className="">{title}</h2>
          <h3 className="mb-10">{subtitle}</h3>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {/* Experience Column */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {experience.title}
            </p>

            {experience.items.map((item: ExperienceItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="mr-3">•</span>
                  <div>
                    <h4 className="mb-1">{item.company}</h4>
                    <p className="text-neutral-300">{item.position}</p>
                    <p className="uppercase tracking-wider mt-1 text-neutral-500">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {education.title}
            </p>

            {education.items.map((item: EducationItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="textcolor-primary-500 mr-3">•</span>
                  <div>
                    <h4 className="mb-1 text-neutral-300">
                      {item.institution}
                    </h4>
                    <p className="">{item.degree}</p>
                    <p className="uppercase tracking-wider mt-1 text-neutral-500">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Column (Third column) */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {skills.title}
            </p>

            {skills.categories.map((category: SkillCategory, index: number) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="bg-zinc-800 px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
