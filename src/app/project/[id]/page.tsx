import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/lib/utils";
import { IProject } from "@/types/project";
import { ArrowLeft, Calendar, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramsData = await params;
  const res = await fetch(`${baseUrl}/project/get/${paramsData.id}`);
  const data = (await res.json()) as { data: IProject };
  const project = data?.data;
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-20 px-4">
      <div className="site_layout">
        <Link
          href="/projects"
          className="inline-flex items-center text-[#00FFF0] hover:text-[#00FFF0]/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="space-y-8">
          {/* Project Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">{project.name}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(project.start_date).toLocaleDateString()} -{" "}
                  {new Date(project.end_date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative aspect-video max-w-[1300px] mx-auto w-full overflow-hidden rounded-lg border border-gray-800">
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90"
            >
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#00FFF0] text-[#00FFF0] hover:bg-[#00FFF0] bg-transparent"
            >
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">About Project</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-[#242424] text-[#00FFF0] hover:bg-[#242424]/90"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
