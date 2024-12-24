import Link from "next/link";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-[#30363d] bg-[#0d1117] py-8">
      <div className="site_layout px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-[#00ffff] md:text-left">
              © {year} Nazmul Islam Sakib. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/sakibsarkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6 text-[#00ffff] hover:text-[#00ffff]/80" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/nazmul-islam-sakib-204938253"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6 text-[#00ffff] hover:text-[#00ffff]/80" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:your.email@example.com">
              <FaMailBulk className="h-6 w-6 text-[#00ffff] hover:text-[#00ffff]/80" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
