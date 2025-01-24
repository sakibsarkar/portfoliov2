"use client";
import Lenis from "lenis";
import { useLayoutEffect } from "react";
const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", () => {});
  }, []);
  return children;
};

export default LenisProvider;
