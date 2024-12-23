"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const AboutMe = () => {
  return (
    <section className="bg-[#1b1b1b] py-[100px]">
      <h1 className="text-[45px] textShadow font-[700] text-mainTxt mx-auto text-center">
        About me
      </h1>

      <div className="w-[750px] mx-auto mt-[120px] flex items-start justify-between gap-[15px]">
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
            className="text-mainTxt"
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
