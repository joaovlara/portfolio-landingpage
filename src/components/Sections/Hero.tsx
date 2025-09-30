"use client";

export default function Hero() {
  return (
    <section className="bg-stone-900 min-h-screen flex flex-col items-center justify-center">
      <div className="container p-5 space-y-3">
        <h3 className="md:text-3xl font-mono text-stone-600">Hello World!</h3>
        <h2 className="text-5xl md:text-8xl font-bold font-bigshot"> {/*adicionar animação de estrelas no fundo*/}
          I am Luther, <br /> a digital designer <br />
           & frontend developer <br />
          based in
          Somewhere.
        </h2>
      </div>
    </section>
  );
}