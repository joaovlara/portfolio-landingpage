import React from "react";

export default function Expertise() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8 bg-black text-white">
      {/* Expertise Header */}
      <div className="max-w-6xl w-full mb-16">
        <h3 className="uppercase text-center text-sm tracking-wider text-amber-500 font-medium mb-8">
          EXPERTISE
        </h3>

        <h2 className="text-center text-4xl md:text-5xl font-light leading-tight max-w-4xl mx-auto">
          Visual Design, Branding Identity, UI Design, 
          Product Design, Prototyping, Illustration
        </h2>
      </div>

      {/* Three Column Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
        {/* Experience Column */}
        <div className="col-span-1">
          <h3 className="uppercase text-sm tracking-wider text-amber-500 font-medium mb-10">
            EXPERIENCE
          </h3>

          {/* Experience Item 1 */}
          <div className="mb-12">
            <div className="flex items-start mb-3">
              <span className="text-amber-500 mr-3 text-xl">•</span>
              <div>
                <h4 className="text-xl font-normal mb-1">Dropbox</h4>
                <p className="text-gray-300">Product Designer</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">AUGUST 2019 - PRESENT</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex 
              in magna consectetur nisi cupidatat laboris esse 
              eiusmod deserunt aute do quis velit esse sed Ut 
              proident cupidatat nulla esse cillum laborum occaecat 
              nostrud sit dolor incididunt amet est occaecat nisi.
            </p>
          </div>

          {/* Experience Item 2 */}
          <div className="mb-12">
            <div className="flex items-start mb-3">
              <span className="text-amber-500 mr-3 text-xl">•</span>
              <div>
                <h4 className="text-xl font-normal mb-1">Microsoft</h4>
                <p className="text-gray-300">Frontend Developer</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">AUGUST 2016 - JULY 2019</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex 
              in magna consectetur nisi cupidatat laboris esse 
              eiusmod deserunt aute do quis velit esse sed Ut 
              proident cupidatat nulla esse cillum laborum occaecat 
              nostrud sit dolor incididunt amet est occaecat nisi.
            </p>
          </div>
        </div>

        {/* Education Column */}
        <div className="col-span-1">
          <h3 className="uppercase text-sm tracking-wider text-amber-500 font-medium mb-10">
            EDUCATION
          </h3>

          {/* Education Item 1 */}
          <div className="mb-12">
            <div className="flex items-start mb-3">
              <span className="text-amber-500 mr-3 text-xl">•</span>
              <div>
                <h4 className="text-xl font-normal mb-1">University of Life</h4>
                <p className="text-gray-300">Master in Graphic Design</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">APRIL 2015</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex 
              in magna consectetur nisi cupidatat laboris esse 
              eiusmod deserunt aute do quis velit esse sed Ut 
              proident cupidatat nulla esse cillum laborum occaecat 
              nostrud sit dolor incididunt amet est occaecat nisi.
            </p>
          </div>

          {/* Education Item 2 */}
          <div className="mb-12">
            <div className="flex items-start mb-3">
              <span className="text-amber-500 mr-3 text-xl">•</span>
              <div>
                <h4 className="text-xl font-normal mb-1">School of Cool Designers</h4>
                <p className="text-gray-300">B.A. Degree in Graphic Design</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">AUGUST 2012</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed ml-6 mt-4">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex 
              in magna consectetur nisi cupidatat laboris esse 
              eiusmod deserunt aute do quis velit esse sed Ut 
              proident cupidatat nulla esse cillum laborum occaecat 
              nostrud sit dolor incididunt amet est occaecat nisi.
            </p>
          </div>
        </div>

        {/* Skills Column (Third column) */}
        <div className="col-span-1">
          <h3 className="uppercase text-sm tracking-wider text-amber-500 font-medium mb-10">
            SKILLS
          </h3>

          {/* Skill Categories */}
          <div className="mb-8">
            <h4 className="text-xl font-normal mb-4">Design</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">UI/UX Design</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Wireframing</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Prototyping</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">User Research</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Visual Design</span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-normal mb-4">Development</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">HTML/CSS</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">JavaScript</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">React</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Tailwind CSS</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Next.js</span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-normal mb-4">Tools</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Figma</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Adobe XD</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Photoshop</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">Illustrator</span>
              <span className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm rounded">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}