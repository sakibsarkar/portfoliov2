import { baseUrl } from "@/lib/utils";
import { IProject } from "@/type/project";
import ProjectCard from "../Cards/ProjectCard";
import SectionHeading from "../shared/SectionHeading";

const Projects = async () => {
  const res = await fetch(`${baseUrl}/project/get`);
  const data = (await res.json()) as { data: IProject[] };

  return (
    <section id="projects">
      <div className="site_layout py-[100px]">
        <SectionHeading heading={"My Projects"} />

        <div className="gap-[25px] gridResponsive mt-[120px]">
          {data?.data?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
