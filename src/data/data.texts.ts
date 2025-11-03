// Centraliza todos os textos das sessões e componentes do projeto

import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const socialLinks = [
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wpp.me.number.com" },
  { name: "Linkedin", icon: FaLinkedin, url: "https://linkedin.com" },
  { name: "Github", icon: FaGithub, url: "https://github.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
];

export const aboutSection = {
  title: "SOBRE",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: {
    src: "/images/about-photo.jpg",
    alt: "Profile photo",
  },
  techIcons: [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiNextdotjs, name: "Next.js" },
  ],
  button: {
    text: "DOWNLOAD CV",
    link: "/cv.pdf",
  },
};

export const expertiseTexts = {
  title: "",
  subtitle:
    "Visual Design, Branding Identity, UI Design, Product Design, Prototyping, Illustration",
  experience: {
    title: "EXPERIÊNCIA",
    items: [
      {
        company: "OnFocus Marketing",
        position: "Desenvolvedor Web",
        period: "Atualmente",
        description:
          "Desenvolvimento e hospedagem de Websites, Landing Pages, Sites Comerciais, Sites Institucionais, Cardápios, Portfólios. Projetos com responsividade, Otimização, tecnologias atuais e boas práticas de SEO e Segurança, mantendo a identidade visual da marca.",
      },
      {
        company: "FAE Centro Universitário",
        position: "Desenvolvedor Frontend",
        period: "Atualmente",
        description:
          "Desenvolvimento de Aplicações Web e Interfaces para mobile e desktop, colaboração em equipes multidisciplinares, metodologia ágil, versionamento e entrega de soluções. Atuando com integrações, APIs, documentação técnica, sustentação e rotina de monitoramento.",
      },
    ],
  },
  education: {
    title: "EDUCAÇÃO",
    items: [
      {
        institution: "PUCPR - Pontifícia Universidade Católica do Paraná",
        degree:
          "Graduação Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
        period: "2022-2025",
        description:
          "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
      },
      {
        institution: "Escola Conquer",
        degree: "Desenvolvimento Web Avançado",
        period: "2022-2023",
        description:
          "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
      },
    ],
  },
  skills: {
    title: "SKILLS",
    categories: [
      {
        title: "Design",
        skills: [
          "UI/UX Design",
          "Prototipagem",
          "Figma",
          "Photoshop",
          "Illustrator",
          "Identidade Visual",
        ],
      },
      {
        title: "Desenvolvimento",
        skills: [
          "HTML/CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "React Native",
          "NodeJs",
        ],
      },
      {
        title: "Ferramentas e Serviços",
        skills: [
          "AWS",
          "Adobe AEM",
          "Firebase",
          "Wordpress",
          "Jira",
          "Confluence",
          "GitHub",
          "Google ADS",
        ],
      },
    ],
  },
};

export const workSection = {
  title: "PORTFÓLIO",
  subtitle: "Conheça alguns dos meus trabalhos recentes",
  buttonText: "Ver Projeto",
  projects: [
    {
      id: 1,
      title: "Social Media",
      category: "Social Media",
      image: "/images/Image.png",
      link: "/projects/social-media",
    },
    {
      id: 2,
      title: "Tatiana Nascimento Heim",
      category: "Branding",
      image: "/images/Image.png",
      link: "/projects/tatiana-nascimento",
    },
    {
      id: 3,
      title: "Maria Lara Advocacia",
      category: "Web Design",
      image: "/images/Image.png",
      link: "/projects/maria-lara",
    },
    {
      id: 4,
      title: "Social Media",
      category: "Social Media",
      image: "/images/Image.png",
      link: "/projects/social-media-2",
    },
  ],
};

export const CtaSection = {
  title: "Entre em Contato",
  description:
    "Vamos desenvolver sua presença online, com criatividade, segurança e bom desempenho na web",
  contact: {
    title: "Envie sua ideia, faça um orçamento",
    email: "joaovdelara@gmail.com",
    phone: "41998205576",
  },
  social: {
    title: "Social",
    socialLinks,
  },
  button: {
    text: "Contato",
    link: "/contact",
  },
};

export const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contact" },
];

export const footerTexts = {
  copyright: "©2025 Todos direitos reservados",
  socialLinks,
};
