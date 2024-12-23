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
