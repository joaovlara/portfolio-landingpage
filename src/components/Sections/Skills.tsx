import { skills } from '../../data/work';
import { skillsTexts } from '../../data/data.texts';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';

const icons = {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
};

export default function Skills() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="container p-5 justify-center items-center">
                <div className='text-center'>
                    <h2 className="">{skillsTexts.title}</h2>
                    <p className="">{skillsTexts.description}</p>
                </div>

                <div className='flex flex-col md:flex-row justify-around'>
                    <span>Icone - texto</span>
                    <span>texto - Icone</span>
                </div>

                <div className="w-full mt-8">
                    <h2 className="text-xl font-semibold mb-4 text-center">{skillsTexts.techTitle}</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {skills.map((skill) => {
                            const Icon = icons[skill.icon as keyof typeof icons];
                            return (
                                <div key={skill.name} className="flex flex-col items-center">
                                    <div
                                        className="rounded-full flex items-center justify-center mb-2 shadow-lg"
                                        style={{ background: skill.color, width: 80, height: 80 }}
                                    >
                                        {Icon && <Icon size={48} color="#fff" />}
                                    </div>
                                    <span className="text-base font-medium">{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}