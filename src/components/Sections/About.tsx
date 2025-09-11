import Image from "next/image";

export default function About() {
    return (
        <section className="bg-secondary h-screen flex items-center justify-center">
            <div className="container bg-accent-100 p-5">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1>Sobre Mim</h1>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, <br />
                            vel nobis eos sequi aliquid tenetur, repudiandae voluptates? architecto officia!
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/images/image.jpg"
                            alt="Foto de Perfil"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}