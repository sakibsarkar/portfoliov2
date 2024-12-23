"use client";
import { navLinks, pageScroll } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);
  return (
    <header className="site_layout py-[30px] flex items-center justify-between">
      <Link href={"/"} className="text-[25px] text-[#a4acb1]">
        Sakib {" < />"}
      </Link>
      <nav>
        <ul className="flex items-center justify-start gap-[25px] text-white">
          {navLinks.map(({ href, name }, i) => (
            <li key={i + "link"}>
              <Link
                href={href}
                className={`text-[19px] font-[400] relative ${
                  href === activePath
                    ? "activePath textShadow"
                    : "navRoute text-white"
                }`}
                onClick={(e) => {
                  setActivePath(href);
                  if (href.startsWith("#")) {
                    e.preventDefault();
                    pageScroll(href);
                    return;
                  }
                  return;
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
