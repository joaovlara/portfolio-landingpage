import Image from "next/image";
import { aboutTexts } from '../../data/data.texts';
import { Info } from '../../data/info';

export default function About() {
    return (
        <section className="bg-secondary h-screen flex items-center justify-center">
            <div className="container bg-accent-100 p-5">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                                        <h1>{aboutTexts.title}</h1>
                                        <p>{aboutTexts.description}</p>
                                        <div>
                                                <img src={Info.image} alt={Info.name} />
                                                <h3>{Info.name}</h3>
                                                <p>{Info.role}</p>
                                                <p>{Info.location}</p>
                                                <p>{Info.email}</p>
                                                <p>{Info.workType}</p>
                                                <a href={Info.portfolio}>Portfólio</a>
                                                <ul>
                                                    {Info.educations.map((edu) => (
                                                        <li key={edu}>{edu}</li>
                                                    ))}
                                                </ul>
                                        </div>
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