import Image from "next/image";
// Importando ícones - substitua por seus ícones preferidos
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side image container with relative positioning */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* The portrait image */}
          <div className="relative h-[700px] w-[600px] md:h-[800px] md:w-[650px]">
            <Image 
              src="/images/about-photo.jpg"
              alt="Profile photo"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              className="rounded-sm"
            />
            
            {/* Technology icons column - absolute positioned on top right of image */}
            <div className="absolute top-7 left-7 flex flex-col gap-5">
              <FaReact className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <FaNodeJs className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <FaJs className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <FaHtml5 className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <FaCss3Alt className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <SiTailwindcss className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
              <SiNextdotjs className="text-stone-500 text-7xl hover:text-accent-200 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 space-y-6 md:pl-4">
          <h2 className="uppercase text-amber-500 tracking-wider text-sm font-medium border-l-2 border-amber-500 pl-3">ABOUT</h2>
          
          <p className="text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          <button className="uppercase tracking-wider text-amber-500 bg-zinc-800 hover:bg-zinc-700 transition-colors py-3 px-8 text-sm">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </section>
  );
}