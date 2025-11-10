// Centraliza todos os textos das sessões e componentes do projeto

import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp , FaAws} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobecreativecloud } from "react-icons/si";

export const socialLinks = [
  { name: "Github", icon: FaGithub, url: "https://github.com/joaovlara"},
  { name: "WhatsApp", icon: FaWhatsapp, url:"https://wa.me/5541998205576"},
  { name: "Linkedin", icon: FaLinkedin, url: "https://www.linkedin.com/in/joaovlara/"},
  // { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
];

export const aboutSection = {
  title: "SOBRE",
  description:
    "Eu sou o João, crio e desenvolvo aplicações e material para internet, sou especializado em Desenvolvimento Front-End, com interfaces para Web e Mobile, focando em performance, responsividade e experiência do usuário. Colaborei em Startups, Empresas e Instituições, também faço prestação de serviços para clientes individuais atuando em todo ciclo de criação e publicação do projeto. Trabalho com tecnologias atuais para desenvolvimento, programo plataformas web, landing pages, portfólios e sites comerciais. Gosto de trabalhar com criatividade e presença online para alcançar prospecções e campanhas ou solucionar problemas de maneira efetiva e otimizada.",
  image: {
    src: "/images/about-photo.jpg",
    alt: "Profile photo",
  },
  techIcons: [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaAws, name: "AWS" },
    { icon: SiAdobecreativecloud, name: "Adobe Creative Cloud" },
  ],
  button: {
    text: "DOWNLOAD CV",
    link: "/cv.pdf",
  },
};

export const expertiseTexts = {
  title: "EXPERIÊNCIAS",
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
          "Formação na area de Tecnologia da Informação, com enfase em Engenharia de Software, com objetivo de adquirir conhecimentos práticos e teoricos em programação, algoritmos, cybersegurança, análise de dados e desenvolvimento de sistemas.",
      },
      {
        institution: "Escola Conquer",
        degree: "Desenvolvimento Web Avançado",
        period: "2022-2023",
        description:
          "Curso de especialização em Desenvolvimento Web e Front-End, com foco em desenvolver projetos reais e aplicar conhecimentos em programação com HTML5, Css, JavaScript, TypeScript, React, responsividade, hospedagem e deploy de aplicações.",
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
      title: "Landing Pages",
      category: "Landing Pages",
      image: "/images/Frame 3.png",
      link: "https://www.onfocus.com.br/",
    },
    {
      id: 2,
      title: "Desenvolvimento Mobile",
      category: "Mobile",
      image: "/images/mobile.png",
      link: "https://pokedex-plum-rho.vercel.app/",
    },
    {
      id: 3,
      title: "Website Comercial",
      category: "Desenvolvimento Web",
      image: "/images/website-comercial.png",
      link: "https://grupodigital.com.br/",
    },
    {
      id: 4,
      title: "Website Institucional",
      category: "Social Media",
      image: "/images/site-institucional.png",
      link: "https://advocaciamarialara.com.br/",
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
  copyright: "JWAO © 2025 Todos direitos reservados",
  socialLinks,
};
