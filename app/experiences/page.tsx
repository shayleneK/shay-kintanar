"use client";

import * as motion from "motion/react-client";
import { experiencesData } from "./data"; // Adjust path as needed

export default function Experiences() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experiencesData.map((exp, index) => (
          <li key={exp.id}>
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className={`timeline-${exp.side} mb-10 md:text-end w-2/3 bg-white shadow-md text-black rounded-lg p-2`}
              whileHover={{ y: -10 }}
              whileInView={{ opacity: 1, y: -10 }}
              layout
              initial={{ opacity: 0, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <time className="text-sm text-background">{exp.date}</time>
              <div className="text-md font-black">{exp.title}</div>
              <div className="pl-4 text-right">{exp.description}</div>
            </motion.div>
            {index !== experiencesData.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
}
