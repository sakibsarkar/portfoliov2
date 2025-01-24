"use client";
import { navLinks, pageScroll } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
const Navbar = () => {
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);

  const [showSidebar, setShowSidebar] = useState(false);

  const sideBarToggle = () => {
    if (showSidebar) {
      document.body.classList.remove("h-[100dvh]");
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("h-[100dvh]");
      document.body.classList.add("overflow-hidden");
    }
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const screen = window.innerWidth; // Use innerWidth instead of screen.width for consistency

      // Return if the screen width is larger than 768px (desktop view)
      if (screen > 768) {
        return;
      }

      // Check if the click is outside both the drawer and the menu button
      if (!target.closest(".myDrawer") && !target.closest(".menuBtn")) {
        if (showSidebar) {
          document.body.classList.remove("h-[100dvh]");
          document.body.classList.remove("overflow-hidden");
          setShowSidebar(false);
        }
      }
    };

    // Add event listener only when sidebar is shown
    if (showSidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSidebar]);

  return (
    <header className="site_layout py-[30px] flex items-center justify-between sticky top-0 z-[5] bg-transparent backdrop-blur-[5px]">
      <Link href={"/"} className="text-[25px] text-[#a4acb1]">
        Sakib {" < />"}
      </Link>
      <nav>
        <ul className="hidden md:flex items-center justify-start gap-[35px] text-white">
          {navLinks.map(({ href, name }, i) => (
            <li key={i + "link"}>
              <Link
                href={href}
                className={`text-[16px] font-[400] relative uppercase ${
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
        <button
          onClick={sideBarToggle}
          className="md:hidden text-white text-[30px] menuBtn"
        >
          <IoMenu />
        </button>
      </nav>{" "}
      {showSidebar ? (
        <div className="myDrawer fixed inset-y-0 left-0 h-dvh z-50 w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <Link href={"/"} className="text-xl font-bold">
                Sakib {" < />"}
              </Link>
              <button
                onClick={sideBarToggle}
                className="text-white"
                aria-label="Close menu"
              >
                <IoClose />
              </button>
            </div>
            <ul className="space-y-4">
              {navLinks.map(({ href, name }, i) => (
                <li key={i + "sidebar-link"}>
                  <Link
                    href={href}
                    className={`block py-2 px-4 rounded transition-colors ${
                      href === activePath
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={(e) => {
                      setActivePath(href);
                      if (href.startsWith("#")) {
                        e.preventDefault();
                        sideBarToggle();
                        pageScroll(href);
                        return;
                      }
                      sideBarToggle();
                      return;
                    }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
