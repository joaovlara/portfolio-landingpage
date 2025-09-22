import React from "react";
import WorkCard from "../Cards/WorkCard";
import { projects } from "../../data/work";

const Works = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meus Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi com diferentes tecnologias e abordagens.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
