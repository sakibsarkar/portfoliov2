import { baseUrl } from "@/lib/utils";
import { IProject } from "@/types/project";
import ProjectCard from "../Cards/ProjectCard";
import SectionHeading from "../shared/SectionHeading";

const Projects = async () => {
  const res = await fetch(`${baseUrl}/project/get`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: IProject[] };

  return (
    <section id="projects" className="relative">
      <span className="w-[95%] sm:w-[400px] md:w-[500px] lg:w-[800px] aspect-video glow_gradient absolute position_center rounded-full z-[1] left-[-0%]"></span>
      <div className="site_layout py-[100px] relative z-[2]">
        <SectionHeading heading={"My Projects"} />

        <div className="gap-[25px] gridResponsive mt-[120px]">
          {data?.data?.map((project, i) => (
            <ProjectCard index={i} key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
