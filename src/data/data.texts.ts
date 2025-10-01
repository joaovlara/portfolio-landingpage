// Centraliza todos os textos das sessões e componentes do projeto

import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const aboutSection = {
  title: "ABOUT",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: {
    src: "/images/about-photo.jpg",
    alt: "Profile photo"
  },
  techIcons: [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiNextdotjs, name: "Next.js" }
  ],
  button: {
    text: "DOWNLOAD CV",
    link: "/cv.pdf"
  }
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
  ]
};

export const CtaSection = {
  title: "Get in touch",
  description: "I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message.",
  contact: {
    title: "Reach me at",
    email: "sayhello@luther.com",
    phone: "+197 543 2345"
  },
  social: {
    title: "Social",
    platforms: "Behance, Dribbble, Twitter,",
    additionalPlatforms: "Instagram, Github"
  },
  button: {
    text: "Say Hello.",
    link: "/contact"
  }
};

export const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contact" },
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
