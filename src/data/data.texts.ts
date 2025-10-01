// Centraliza todos os textos das sessões e componentes do projeto

export const aboutTexts = {
  title: "Sobre mim",
  description: "Sou um desenvolvedor full-stack apaixonado por tecnologia, com experiência em projetos web e mobile. Busco sempre aprender e evoluir, entregando soluções modernas e eficientes.",
};

export const heroTexts = {
  title: "Hey I’m Dev, Full-Stack Developer!",
  subtitle: "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done",
  cta: "Let’s Talk",
};

export const contactTexts = {
  title: "Contato",
  description: "Entre em contato para oportunidades, dúvidas ou parcerias. Estou disponível para novos desafios!",
  emailLabel: "Seu e-mail",
  messageLabel: "Mensagem",
  sendButton: "Enviar",
};

export const skillsTexts = {
  title: "Skills",
  description: "Essas são algumas das tecnologias e habilidades que utilizo como desenvolvedor.",
  techTitle: "Tecnologias:",
};

export const worksTexts = {
  title: "Projetos",
  description: "Confira alguns dos meus principais projetos desenvolvidos recentemente.",
};

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Contato", href: "/contato" },
];

export const socialLinks = [
  { name: "Linkedin", icon: FaLinkedin, url: "https://linkedin.com" },
  { name: "Github", icon: FaGithub, url: "https://github.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
];

export const footerTexts = {
  copyright: "© 2025 Sinan. Todos os direitos reservados.",
  socialLinks,
};

export const expertiseTexts = {
  title: "EXPERTISE",
  subtitle: "Visual Design, Branding Identity, UI Design, Product Design, Prototyping, Illustration",
  experience: {
    title: "EXPERIENCE",
    items: [
      {
        company: "Dropbox",
        position: "Product Designer",
        period: "AUGUST 2019 - PRESENT",
        description: "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi."
      },
      {
        company: "Microsoft",
        position: "Frontend Developer",
        period: "AUGUST 2016 - JULY 2019",
        description: "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi."
      }
    ]
  },
  education: {
    title: "EDUCATION",
    items: [
      {
        institution: "University of Life",
        degree: "Master in Graphic Design",
        period: "APRIL 2015",
        description: "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi."
      },
      {
        institution: "School of Cool Designers",
        degree: "B.A. Degree in Graphic Design",
        period: "AUGUST 2012",
        description: "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi."
      }
    ]
  },
  skills: {
    title: "SKILLS",
    categories: [
      {
        title: "Design",
        skills: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Visual Design"]
      },
      {
        title: "Development",
        skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"]
      },
      {
        title: "Tools",
        skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "VS Code"]
      }
    ]
  }
};
