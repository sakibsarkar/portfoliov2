import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
    </>
  );
}
