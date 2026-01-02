import { div } from "motion/react-client";
import { projects } from "../data";
import Image from "next/image";

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
      <div className="flex gap-5 w-full lg:w-3/4 p-2 items-center  font-sans text-primary ">
        <Image
          src={project.image}
          className="shadow-md rounded-lg"
          width={400}
          height={700}
          objectFit="fill"
          alt="Picture of the author"
        />
        <div className="flex flex-col w-full lg:w-2/3 p-10 gap-4 bg-white rounded-lg text-black">
          <p className="font-bold">{project.title}</p>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
