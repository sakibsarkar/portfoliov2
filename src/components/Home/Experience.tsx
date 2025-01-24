import { headVariants } from "@/animation";
import { baseUrl } from "@/lib/utils";
import { IExperience } from "@/types/experience";
import * as motion from "framer-motion/client";
import ExperinceCard from "../Cards/ExperinceCard";
import SectionHeading from "../shared/SectionHeading";
const Experience = async () => {
  const res = await fetch(`${baseUrl}/experience/get`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: IExperience[] };

  return (
    <section id="experience" className="relative w-full">
      <motion.span
        {...headVariants()}
        className="w-[500px] lg:w-[500px] md:flex hidden aspect-square glow_gradient absolute position_center rounded-full z-[1]"
      ></motion.span>
      <span
        {...headVariants()}
        className="w-[90%] sm:w-[500px] md:hidden aspect-square glow_gradient absolute position_center rounded-full z-[1]"
      ></span>
      <div className="site_layout py-[100px] relative z-[2]">
        <SectionHeading heading={"My Experiences"} />

        <div className="gap-[25px] flex flex-col  mt-[120px] max-w-[1000px] mx-auto">
          {data?.data?.map((exp, i) => (
            <ExperinceCard key={i + "exp"} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
