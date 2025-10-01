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
    <section className="bg-stone-900 min-h-screen flex flex-col items-center justify-center">
      <div className="container p-5 space-y-3">
        {/* Expertise Header */}
        <div className="">
          <h3 className="text-2xl md:text-4xl font-bold font-bigshot textcolor-primary mb-10">
            {title}
          </h3>
          <h2 className="text-lg font-mono text-gray-300 mb-10">{subtitle}</h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {/* Experience Column */}
          <div className="col-span-1">
            <h3 className="uppercase text-sm tracking-wider textcolor-primary-500 font-medium mb-10">
              {experience.title}
            </h3>

            {experience.items.map((item: ExperienceItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="textcolor-primary-500 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-xl font-normal mb-1">{item.company}</h4>
                    <p className="text-gray-300">{item.position}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="col-span-1">
            <h3 className="uppercase text-sm tracking-wider textcolor-primary-500 font-medium mb-10">
              {education.title}
            </h3>

            {education.items.map((item: EducationItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="textcolor-primary-500 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-xl font-normal mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-gray-300">{item.degree}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Column (Third column) */}
          <div className="col-span-1">
            <h3 className="uppercase text-sm tracking-wider textcolor-primary-500 font-medium mb-10">
              {skills.title}
            </h3>

            {skills.categories.map((category: SkillCategory, index: number) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-normal mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded"
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
