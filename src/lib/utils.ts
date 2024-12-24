import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const pageScroll = (id: string) => {
  const element = document.querySelector(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectLinks = [
  {
    _id: "sfasfasdfd",
    name: "Project example",
    thumbnail:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1734883003/Nazmul_islam_sakib_utkykm.gif",
    start_date: "2022-01-01",
    end_date: "2022-02-01",
    description: "project description",
    tech_stack: ["Nextjs", "Tailwindcss", "Typescript"],
    live_link: "https://github.com/sakibsarkar/nextjs-portfolio",
    github_link: "https://github.com/sakibsarkar/nextjs-portfolio",
  },
  {
    _id: "sfauusd",
    name: "Project example",
    thumbnail:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1734883003/Nazmul_islam_sakib_utkykm.gif",
    start_date: "2022-01-01",
    end_date: "2022-02-01",
    description: "project description",
    tech_stack: ["Nextjs", "Tailwindcss", "Typescript"],
    live_link: "https://github.com/sakibsarkar/nextjs-portfolio",
    github_link: "https://github.com/sakibsarkar/nextjs-portfolio",
  },
];

export const skills = [
  {
    label: "React",
    image:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/react_bk6ry9.png",
    expertise: 70,
  },
  {
    label: "React",
    image:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/react_bk6ry9.png",
    expertise: 50,
  },
  {
    label: "React",
    image:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/react_bk6ry9.png",
    expertise: 80,
  },
  {
    label: "React",
    image:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/react_bk6ry9.png",
    expertise: 80,
  },
];

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    description:
      "Led development of multiple full-stack applications using React, Node.js, and TypeScript. Implemented microservices architecture and improved system performance by 40%.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "WebDev Innovations",
    period: "2019 - 2021",
    description:
      "Developed and maintained multiple client projects using MERN stack. Collaborated with design team to implement responsive UI/UX designs.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Tech",
    period: "2018 - 2019",
    description:
      "Assisted in developing front-end features using React and JavaScript. Participated in code reviews and implemented feedback from senior developers.",
    skills: ["JavaScript", "React", "HTML", "CSS"],
  },
];

export const blogs = [
  {
    _id: "1",
    title: "Introduction to React",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    thumbnail:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/react_bk6ry9.png",
    createdAt: "2024-12-24T10:30:00Z",
  },
  {
    _id: "2",
    title: "Mastering Node.js",
    content:
      "Node.js is a runtime environment that lets you run JavaScript on the server side. It’s lightweight, efficient, and perfect for building scalable web applications.",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    thumbnail:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/nodejs_bk6ry9.png",
    createdAt: "2024-11-18T15:45:00Z",
  },
  {
    _id: "3",
    title: "Getting Started with TypeScript",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript by adding static types. Learn the basics and how to use TypeScript to build robust applications.",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    thumbnail:
      "https://res.cloudinary.com/dqgynvtyz/image/upload/v1735033426/typescript_bk6ry9.png",
    createdAt: "2024-10-05T09:20:00Z",
  },
];
