"use client";

import { projects } from "./data";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/Badge";

export default function Projects() {
  return (
    <div className="min-h-screen flex justify-center text-white p-2 gap-5 flex-wrap">
      {projects.map((project) => (
        <motion.div
          className="card bg-base-100 w-96 shadow-sm"
          key={project.id}
          whileHover={{
            y: [0, -10, 0],
            transition: {
              duration: 1,
              repeat: 0,
              ease: "easeInOut",
            },
          }}
          animate={{ y: 0 }}
        >
          <figure className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              fill
              className="shadow-md"
              style={{ objectFit: "cover" }}
              alt="Picture of the author"
            />
          </figure>
          <div className="card-body bg-white text-black rounded-b-lg">
            <h2 className="card-title">{project.title}</h2>
            <div className="flex gap-1">
              {project.links?.map((link, index) => (
                <Badge key={index} type={link.type} href={link.href} />
              ))}
            </div>
            <p>{project.brief}</p>
            <div className="card-actions justify-end">
              <Link
                href={`/projects/${project.id}`}
                className="btn bg-black border-0"
              >
                View More
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
