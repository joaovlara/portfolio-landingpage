import Link from "next/link";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-stone-950">
      <div className="container p-5 space-y-3">
          <h2 className="textcolor-primary mb-10">
          Get in touch</h2>

        <div className="">
          <h3 className="leading-tight mb-16 text-neutral-200 text-4xl">
            I love to hear from you. Whether you have a question or just want to
            chat about design, tech & art — shoot me a message.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* Coluna 1 - Contato */}
            <div>
              <h4 className="uppercase tracking-wider mb-4"> 
                Reach me at
              </h4>
              <div className="space-y-2">
                <p>sayhello@luther.com</p>
                <p>+197 543 2345</p>
              </div>
            </div>

            {/* Coluna 2 - Social */}
            <div>
              <h4 className="uppercase tracking-wider mb-4">
                Social
              </h4>
              <div className="space-y-2">
                <p>Behance, Dribbble, Twitter,</p>
                <p>Instagram, Github</p>
              </div>
            </div>

            {/* Coluna 3 - Botão */}
            <div>
              <Link href="/contact">
                <div className="bg-zinc-800 hover:bg-zinc-700 textcolor-primary-500 uppercase tracking-widest py-4 px-8 text-center transition-colors">
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
