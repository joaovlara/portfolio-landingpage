import Link from 'next/link';

export default function Contact() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-amber-500 tracking-widest text-sm font-medium mb-8">
          Get in touch
        </h2>
        
        <div className="max-w-4xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-16">
            I love to hear from you. Whether you have a 
            question or just want to chat about design, 
            tech & art — shoot me a message.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* Coluna 1 - Contato */}
            <div>
              <h4 className="uppercase text-white tracking-wider text-sm font-medium mb-4">
                Reach me at
              </h4>
              <div className="text-gray-400 space-y-2">
                <p>sayhello@luther.com</p>
                <p>+197 543 2345</p>
              </div>
            </div>
            
            {/* Coluna 2 - Social */}
            <div>
              <h4 className="uppercase text-white tracking-wider text-sm font-medium mb-4">
                Social
              </h4>
              <div className="text-gray-400 space-y-2">
                <p>Behance, Dribbble, Twitter,</p>
                <p>Instagram, Github</p>
              </div>
            </div>
            
            {/* Coluna 3 - Botão */}
            <div>
              <Link href="/contact">
                <div className="bg-zinc-800 hover:bg-zinc-700 text-amber-500 uppercase text-sm tracking-widest py-4 px-8 text-center transition-colors">
                  Say Hello.
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}