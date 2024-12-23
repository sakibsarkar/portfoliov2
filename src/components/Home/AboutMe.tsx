"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import SectionHeading from "../shared/SectionHeading";
const AboutMe = () => {
  return (
    <section className="bg-[#1b1b1b] py-[100px] px-[15px]" id="about-me">
      <SectionHeading heading={"About Me"} />

      <div className="max-w-[850px] mx-auto mt-[120px] flex items-center lg:items-start justify-between flex-col lg:flex-row gap-[15px]">
        <div className="w-[300px] h-[300px] shrink-0">
          <Image
            width={300}
            height={300}
            src="/images/assets/me.jpg"
            alt="nazmul islam sakib"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-start flex-col w-full">
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
          <p className="text-white mt-[15px]">
            Hi, I&apos;m Nazmul Isalm Sakib, a detail-oriented FullStack
            Developer with expertise in Node js, Typescript, prisma, SQL,
            MongoDB. My passion lies in crafting pixel-perfect user interfaces
            that seamlessly blend creativity with functionality. From concept to
            deployment.
          </p>

          <Link
            href="https://www.linkedin.com/in/nazmul-islam-sakib-204938253/"
            className="primaryBtn mt-[25px]"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
