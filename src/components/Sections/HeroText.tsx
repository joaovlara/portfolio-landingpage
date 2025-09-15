
import { FaEnvelope } from "react-icons/fa";

export default function HeroText() {
    return (
        <section className="flex flex-col text-left justify-end h-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hey<br />
                I’m <span className="text-teal-400">Sinan</span>,<br />
                Full-Stack Developer
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-mono bg-transparent">
                I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
            </p>
            <a
                href="#contato"
                className="inline-flex items-center gap-2 text-2xl font-mono text-teal-400 hover:text-teal-300 transition-colors"
            >
                Let’s Talk
                <span className="bg-gray-700 rounded-full p-2">
                    <FaEnvelope />
                </span>
            </a>
        </section>
    );
}
