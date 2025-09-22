import Image from "next/image";
import { aboutTexts } from "@/data/data.texts";
import AboutCard from "../Cards/AboutCard";

export default function About() {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <div className="container p-9 flex justify-around">
        <div className="flex flex-col">
            texto aqui
        </div>

        <div className="flex flex-col">
            accordion
        </div>
      </div>
    </section>
  );
}
