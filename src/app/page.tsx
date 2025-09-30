import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Hero from "@/components/Sections/Hero";
import Skills from "@/components/Sections/Skills";
import Expertise from "@/components/Sections/Expertise";
import Works from "@/components/Sections/Works";
import CalltoAction from "@/components/Sections/CalltoAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Works />
    </main>
  );
}
