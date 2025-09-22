'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { Project } from '../../types/type';

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card */}
      <div 
        className="group relative aspect-square overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
        onClick={openModal}
      >
        {/* Imagem de fundo */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        />
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Conteúdo do hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Título */}
          <h3 className="text-white text-lg font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          
          {/* Breve descrição */}
          <p className="text-gray-200 text-sm mb-4 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.description}
          </p>
          
          {/* Botão outline */}
          <button className="inline-flex items-center justify-center px-4 py-2 border border-white/50 text-white text-sm font-medium rounded-lg hover:bg-white/10 w-fit transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
            Ver Projeto
            <FiExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
            >
              <FiX className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Imagem do projeto */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Conteúdo do modal */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Skills utilizadas */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Botão para o projeto */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Ver Projeto Completo
                  <FiExternalLink className="ml-2 w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}