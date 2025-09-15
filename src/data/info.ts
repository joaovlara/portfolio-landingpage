

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import type { Profile } from "@/types/type";

export const Info: Profile & {
	portfolio: string;
	educations: string[];
	socialLinks: { name: string; icon: any; url: string }[];
	mainSkills: { name: string; color: string }[];
} = {
	name: "Sinan",
	email: "abdurrahman_sinan@hotmail.com",
	location: "Turkey",
	image: "/images/image.jpg",
	website: "https://www.sinantokmak.com",
	role: "Full-stack developer",
	workType: "Full-time / Freelancer",
	portfolio: "https://www.sinantokmak.com/portfolio",
	educations: [
		"BSc Computer Science - University of Turkey",
		"Fullstack Bootcamp - CodeAcademy",
	],
	socialLinks: [
		{ name: "Linkedin", icon: FaLinkedin, url: "https://linkedin.com" },
		{ name: "Github", icon: FaGithub, url: "https://github.com" },
		{ name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
	],
	mainSkills: [
		{ name: "JavaScript", color: "#f0db4f" },
		{ name: "TypeScript", color: "#3178c6" },
		{ name: "React", color: "#61dafb" },
		{ name: "Next.js", color: "#000000" },
	]
};

