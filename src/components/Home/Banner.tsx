import Link from "next/link";
import ResumeDownloadButton from "./ResumeDownloadButton";
import SocialLinks from "./SocialLinks";

const Banner = () => {
  return (
    <section className="w-full h-[80vh] relative flex items-center overflow-hidden">
      <div className="relative z-[2] px-[80px]">
        <h3 className="text-[30px] text-white">I&apos;M</h3>
        <h1 className="titleText leading-[99%]">SAKIB</h1>
        <p className="text-[44px] text-white">
          Im a <span className="web">Fullstack</span> Developer
        </p>

        <p className="text-white text-[15px] max-w-[950px]">
          I bring web applications to life using the Modern Fullstack
          technologies (Typescript, Next Js, prisma, mongoose, node js,). With
          prisma, I seamlessly manage databases, while Express.Crafting engaging
          user interfaces is my forte, thanks to React.js, and I ensure smooth
          functionality with the help of Node.js on the server
        </p>
        <div className="flex items-center justify-start gap-[20px] mt-[25px]">
          <Link href="" className="primaryBtn" target="_blank">
            KNOW MORE ABOUT ME<i className="fa-solid fa-arrow-right"></i>
          </Link>
          <ResumeDownloadButton />
        </div>
      </div>
      <SocialLinks />
    </section>
  );
};

export default Banner;
