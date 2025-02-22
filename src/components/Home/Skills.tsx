import { headVariants } from "@/animation";
import { baseUrl } from "@/lib/utils";
import { ISkill } from "@/types/skill";
import * as motion from "framer-motion/client";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";

const Skills = async () => {
  const res = await fetch(`${baseUrl}/skill/get`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: ISkill[] };

  const getExpertise = (expertice: number) => {
    // 0-50 > Beginner
    // 50-75 > Intermediate
    // 75-100 > Expert
    if (expertice <= 50) {
      return "Beginner";
    } else if (expertice > 50 && expertice <= 75) {
      return "Intermediate";
    } else {
      return "Expert";
    }
  };

  return (
    <section className="bg-[#1b1b1b] py-[100px]" id="skills">
      <SectionHeading heading={"My Skills"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px] center max-w-[1000px] mx-auto px-[15px] mt-[80px]">
        {data?.data?.map((skill, i) => {
          const expertise = getExpertise(skill.expertise);
          const extraTime = 0.5 * i * 0.1;
          return (
            <motion.div
              {...headVariants(0.5 + extraTime)}
              className="bg-white w-full py-[18px] group/skill boxShadowHover relative overflow-hidden cursor-pointer"
              key={i + "skill"}
            >
              <span
                className="absolute w-full text-center center bg-mainTxt hidden group-hover/skill:flex py-[5px] z-[2]"
                style={{ right: -71, top: 31, transform: "rotate(45deg)" }}
              >
                {expertise}
              </span>
              <div className="w-[136px] h-[120px] mx-auto">
                <Image
                  className="w-full h-full object-cover group-hover/skill:rotate-[360deg]"
                  style={{ transition: "0.8s" }}
                  width={136}
                  height={120}
                  src={skill.image}
                  alt={skill.label}
                />
              </div>

              <p className="text-center text-[25px] font-[600] mt-[20px]">
                {skill.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
