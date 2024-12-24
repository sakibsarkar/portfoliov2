import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
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
    </>
  );
}
