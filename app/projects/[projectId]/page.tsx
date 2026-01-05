import { div } from "motion/react-client";
import { projects } from "../data";
import Image from "next/image";
import { TechBadge } from "@/components/TechBadge";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  const project = projects.find((p) => p.id === projectId);

  console.log(project);

  console.log(project);

  if (!projectId) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-col gap-5 w-full lg:w-3/4 p-2 items-center  font-sans text-primary ">
        {project?.image && (
          <Image
            src={project.image}
            className="shadow-md rounded-lg"
            width={500}
            height={800}
            objectFit="fill"
            alt="Project image"
          />
        )}
        <div className="flex flex-col w-full lg:w-2/3 p-10 gap-4 bg-white rounded-lg text-black">
          <p className="font-bold">{project?.title}</p>
          <div className="flex gap-2">
            {project?.stacks?.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <p style={{ whiteSpace: "pre-line" }}>{project?.description}</p>
        </div>
      </div>
    </div>
  );
}
