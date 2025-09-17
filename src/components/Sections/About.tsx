
import Image from "next/image";
import { aboutTexts } from "@/data/data.texts";
import AboutCard from "../Cards/AboutCard";

export default function About() {
    return (
        <section className="bg-stone-800 min-h-screen flex flex-col items-center justify-center ">
            <div className="container p-9 flex justify-around">
                About
            </div>
        </section>
    );
}