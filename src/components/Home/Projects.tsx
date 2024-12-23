import { projectLinks } from "@/lib/utils";
import ProjectCard from "../Cards/ProjectCard";
import SectionHeading from "../shared/SectionHeading";

const Projects = async () => {
  return (
    <div className="site_layout py-[100px]">
      <SectionHeading heading={"My Projects"} />

      <div className="gap-[25px] gridResponsive mt-[120px]">
        {projectLinks.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
