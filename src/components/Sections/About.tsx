
import Image from "next/image";
import { aboutTexts } from "@/data/data.texts";
import AboutCard from "../Cards/AboutCard";

export default function About() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#181c23] overflow-hidden"
            style={{ backgroundImage: 'url(/images/pattern.png)', backgroundRepeat: 'repeat', backgroundSize: 'cover' }}
        >
            {/* Linha animada e círculo */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#2dd4bf] bg-[#181c23] text-[#2dd4bf] text-2xl font-bold shadow-lg">
                    0
                </div>
                <div className="w-1 h-16 bg-gradient-to-b from-[#2dd4bf] to-transparent mt-1" />
            </div>

            {/* Título destacado */}
            <div className="relative z-10 mb-8">
                <span className="inline-block px-8 py-2 text-3xl md:text-4xl font-bold text-white border-2 border-[#2dd4bf] rounded-lg bg-[#181c23] shadow-lg">
                    About Me
                </span>
            </div>

            {/* Card + Imagem */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
                {/* Card de texto estilizado */}
                <div className="flex-1 min-w-[320px]">
                    <div className="bg-[#23272f] rounded-2xl p-8 shadow-xl border border-[#2dd4bf]/40">
                        <p className="text-2xl font-bold text-[#2dd4bf] mb-2">Hello!</p>
                        <p className="text-gray-300 mb-2">
                            My name is Sinan and I specialize in web development that utilizes <span className="text-[#2dd4bf]">HTML</span>, <span className="text-[#2dd4bf]">CSS</span>, <span className="text-[#2dd4bf]">JS</span>, and <span className="text-[#2dd4bf]">REACT</span> etc.
                        </p>
                        <p className="text-gray-400 mb-2">
                            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                        </p>
                        <p className="text-gray-400 mb-2">
                            When I'm not coding, I am <span className="text-[#2dd4bf] underline">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-[#2dd4bf] underline">photography</span>.
                        </p>
                        <p className="text-gray-400">
                            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                        </p>
                    </div>
                </div>
                {/* Imagem */}
                <div className="flex-1 flex items-center justify-center min-w-[320px]">
                    <Image
                        src="/images/image.jpg"
                        alt="Foto programando"
                        width={340}
                        height={340}
                        className="rounded-xl object-cover shadow-lg border border-[#2dd4bf]/30"
                    />
                </div>
            </div>

            {/* Overlay para escurecer o fundo e dar contraste */}
            <div className="absolute inset-0 bg-[#181c23]/80 pointer-events-none" />
        </section>
    );
}