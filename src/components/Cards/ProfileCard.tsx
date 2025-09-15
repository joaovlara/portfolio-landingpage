
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGlobe, FaDownload } from "react-icons/fa";
import { Info } from "@/data/info";
import DowloadCV from "../Buttons/DowloadCV";

export default function ProfileCard() {

  const profile = {
    name: Info.name,
    role: Info.role,
    image: Info.image,
  };
  const contacts = [
    { type: "email", value: Info.email, icon: FaEnvelope },
    { type: "location", value: Info.location, icon: FaMapMarkerAlt },
    { type: "workType", value: Info.workType, icon: FaBriefcase },
    { type: "website", value: Info.website, icon: FaGlobe },
  ];
  const educations = Info.educations;
  const cvUrl = Info.portfolio;
  const skill = Info.mainSkills;

  return (
    <section className="relative bg-[#2c3136] rounded-tl-[120px] rounded-br-[40px] rounded-tr-[8px] rounded-bl-[8px] border-4 border-[#17C8E0] max-w-lg mx-auto shadow-2xl p-3">

      {/* Conteúdo do card */}
      <div className="flex flex-col justify-end p-8 space-y-8 h-full">

        <div className="absolute -top-10 -left-6 z-10">
          <div className="w-40 h-40 rounded-full border-4 border-[#17C8E0] bg-white flex items-center justify-center overflow-hidden shadow-lg">
            <img src={profile.image} alt="Profile" className="rounded-full object-cover" />
          </div>
        </div>

        {/* Conteúdo centralizado abaixo */}
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-white text-4xl font-mono font-bold">{profile.name}</h1>
          <p className="text-[#b4b4b4] text-base font-mono">{profile.role}</p>
        </div>

        {/* Contatos */}
        <div className="space-y-2">
          {contacts.map(({ type, value, icon: Icon }) => (
            <div key={type} className="flex items-center gap-2 text-[#17C8E0]">
              <Icon />
              {type === "website" ? (
                <a href={value} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-mono hover:underline">
                  {value.replace("https://", "")}
                </a>
              ) : (
                <span className="text-white text-sm font-mono">{value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Habilidades */}
        <div className="flex flex-wrap gap-2 justify-center">
          {skill.map((skill) => (
            <span key={skill.name}
              className={`text-[#222] px-3 py-1 rounded-full text-xs font-bold font-mono`}
              style={{ backgroundColor: skill.color }}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Botão de download do curriculo */}
        <DowloadCV />

      </div>

    </section>
  );
}