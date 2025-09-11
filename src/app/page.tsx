import About from '@/components/Sections/About';
import Contact from '@/components/Sections/Contact';
import Hero from '@/components/Sections/Hero';
import Skills from '@/components/Sections/Skills';
import Works from '@/components/Sections/Works';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
