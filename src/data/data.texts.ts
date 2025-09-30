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
