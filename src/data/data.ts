export const skills = [
  { name: 'React', icon: 'FaReact', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#38BDF8' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'HTML5', icon: 'FaHtml5', color: '#E34F26' },
  { name: 'CSS3', icon: 'FaCss3Alt', color: '#1572B6' },
  { name: 'Node.js', icon: 'FaNodeJs', color: '#339933' },
  { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
];

export type Category = {
  label: string;
  value: string;
};

export type Work = {
  id: number;
  title: string;
  category: string[];
  image: string;
};

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
  
];
