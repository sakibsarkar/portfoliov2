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
