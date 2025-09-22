import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { Skill, Project, Work, Category } from "../types/type";

export const skills: Skill[] = [
    { name: "React", icon: FaReact, color: "#61DAFB", link: "https://react.dev/" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", link: "https://www.typescriptlang.org/" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", link: "https://tailwindcss.com/" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", link: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", link: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", link: "https://developer.mozilla.org/docs/Web/CSS" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", link: "https://nodejs.org/" },
    { name: "Git", icon: FaGitAlt, color: "#F05032", link: "https://git-scm.com/" },
];

export const projects: Project[] = [
    {
        id: 1,
        title: "Learn UI/UX Design",
        description: "Curso completo de UI/UX Design para web e mobile.",
        image: "/images/image.jpg",
        skills: ["React", "CSS3", "JavaScript"],
        link: "https://example.com/uiux",
    },
    {
        id: 2,
        title: "Start Working as a Web Designer",
        description: "Primeiros passos como web designer profissional.",
        image: "/images/background-hero.jpg",
        skills: ["HTML5", "CSS3", "Tailwind"],
        link: "https://example.com/webdesigner",
    },
    {
        id: 3,
        title: "Explore Mobile UI",
        description: "Explorando interfaces mobile modernas.",
        image: "/images/logo.png",
        skills: ["React", "TypeScript"],
        link: "https://example.com/mobileui",
    },
    {
        id: 4,
        title: "Modern Web Development",
        description: "Desenvolvimento web moderno com as últimas tecnologias.",
        image: "/images/pattern.png",
        skills: ["Next.js", "Tailwind", "TypeScript"],
        link: "https://example.com/modernweb",
    },
];

export const categories: Category[] = [
    { label: 'All', value: 'all' },
    { label: 'UI', value: 'ui' },
    { label: 'UX', value: 'ux' },
    { label: 'Web Design', value: 'web' },
];

export const works: Work[] = [
    {
        id: 1,
        title: 'Learn UI/UX Design',
        category: ['ui', 'ux', 'web'],
        image: '/images/image.jpg',
    },
    {
        id: 2,
        title: 'Start Working as a Web Designer',
        category: ['web', 'ui'],
        image: '/images/background-hero.jpg',
    },
    {
        id: 3,
        title: 'Explore Mobile UI',
        category: ['ui', 'ux'],
        image: '/images/logo.png',
    },
    {
        id: 4,
        title: 'Modern Web Development',
        category: ['web', 'ui'],
        image: '/images/pattern.png',
    },
];