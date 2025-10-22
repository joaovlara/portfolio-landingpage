"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
      <div className="container p-5 space-y-3">
        <h3 className="md:text-3xl font-mono textcolor-primary border-none">Hello World!</h3>
        <h1 className="text-5xl md:text-8xl font-bold font-bigshot"> {/*adicionar animação de estrelas no fundo*/}
          Eu sou João, <br /> desenvolvedor <br />
          Web  & Front-End  <br />
        </h1>
        <h3 className="md:text-lg pt-10 font-mono border-none text-neutral-400">Mobile, Web, Responsividade</h3>
      </div>
    </section>
  );
}