import { experiences } from "@/lib/utils";
import ExperinceCard from "../Cards/ExperinceCard";
import SectionHeading from "../shared/SectionHeading";

const Experience = () => {
  return (
    <section id="experience">
      <div className="site_layout py-[100px]">
        <SectionHeading heading={"My Experiences"} />

        <div className="gap-[25px] flex flex-col  mt-[120px] max-w-[1000px] mx-auto">
          {experiences.map((exp, i) => (
            <ExperinceCard key={i + "exp"} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;