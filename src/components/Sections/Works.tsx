import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Social Media",
      category: "Social Media",
      image: "/images/Image.png",
      link: "/projects/social-media"
    },
    {
      id: 2,
      title: "Tatiana Nascimento Heim",
      category: "Branding",
      image: "/images/Image.png",
      link: "/projects/tatiana-nascimento"
    },
    {
      id: 3,
      title: "Maria Lara Advocacia",
      category: "Web Design",
      image: "/images/Image.png",
      link: "/projects/maria-lara"
    },
    {
      id: 4,
      title: "Social Media",
      category: "Social Media",
      image: "/images/Image.png",
      link: "/projects/social-media"
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="uppercase text-center text-xs tracking-widest text-gray-400 mb-12">
          PORTFOLIO
        </h2>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              {/* Project container with overlay on hover */}
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                {/* Project image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="text-center p-6">
                    <span className="text-sm text-amber-500 block mb-2">{project.category}</span>
                    <h3 className="text-white text-xl mb-8">{project.title}</h3>
                    
                    {/* Plus icon */}
                    <span className="text-white text-4xl block mb-8">+</span>
                    
                    <Link 
                      href={project.link}
                      className="inline-block border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors py-2 px-4 text-xs uppercase tracking-wider"
                    >
                      Ver Projeto
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