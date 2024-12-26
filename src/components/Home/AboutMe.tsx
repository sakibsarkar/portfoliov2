"use client";
import { headVariants, opacityVariants } from "@/animation";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import SectionHeading from "../shared/SectionHeading";
const AboutMe = () => {
  return (
    <section className="bg-[#1b1b1b] py-[100px] px-[15px]" id="about-me">
      <SectionHeading heading={"About Me"} />

      <div className="max-w-[850px] mx-auto mt-[120px] flex items-center lg:items-start justify-between flex-col  gap-[15px]">
        <div className="flex items-start justify-start gap-[15px] flex-col md:flex-row">
          <motion.div
            {...headVariants(0.5)}
            className="w-[300px] h-[300px] shrink-0"
          >
            <Image
              width={300}
              height={300}
              src="/images/assets/me.jpg"
              alt="nazmul islam sakib"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-white text-[25px]">I&apos;m Sakib</h3>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A fullstack developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Passionate with backend",
                1000,
                "Tyring to master it",
              ]}
              wrapper="span"
              className="text-mainTxt text-[35px]"
              speed={50}
              repeat={Infinity}
            />
            <motion.p className="text-white">
              Over the years, I have honed my skills in creating scalable,
              secure, and performance-driven applications tailored to meet
              business objectives. I excel in designing interactive user
              experiences with React and Next.js, while my proficiency in
              server-side development with Node.js and database modeling using
              Prisma and SQL ensures that the back-end systems I build are
              robust and reliable.
              <br />
              <br />I take pride in writing clean, maintainable, and efficient
              code and strive to keep up with the latest industry trends and
              technologies.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="flex items-start flex-col w-full"
          {...opacityVariants()}
        >
          <p className="text-white mt-[15px]">
            Hi, I&apos;m Nazmul Isalm Sakib, a detail-oriented FullStack
            Developer. I&aposm a passionate and results-driven Full Stack
            Developer with a strong foundation in building dynamic, scalable,
            and user-friendly web applications. With expertise in Next.js,
            Node.js, React, Prisma, SQL, JavaScript, and TypeScript, I craft
            seamless solutions that merge intuitive front-end interfaces with
            robust back-end systems.
            <br />
            <br />
            I thrive on solving complex challenges and delivering high-quality
            code while keeping user experience at the forefront. My proficiency
            with modern frameworks and databases allows me to design and
            implement performant applications that meet diverse business needs.
            Whether it&apos;s developing responsive web designs, architecting
            APIs, or optimizing database queries, I bring a versatile skill set
            to every project
            <br />
            <br />
            I&apos;m always eager to collaborate, learn, and contribute to
            innovative projects. Let&apos;s create something extraordinary
            together!
          </p>

          <Link
            href="https://www.linkedin.com/in/nazmul-islam-sakib-204938253/"
            className="primaryBtn mt-[25px]"
          >
            Linkedin
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
