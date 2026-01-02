"use client";
import Link from "next/link";
import { useState } from "react";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  return (
    <div
      className="flex flex-col items-center justify-center h-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`text-2xl cursor-pointer bg-secondary font-bricolage text-black transition-all ease-in-out p-2 rounded ${
          isOpen ? "text-sm" : "text-2xl"
        }`}
      >
        Shay Kintanar
      </div>
      {isOpen && (
        <motion.div
          className="flex gap-5 p-2 translate-y-2
          bg-[#8878BA] rounded
          transition-all duration-300 ease-out"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            scale: { type: "tween", bounce: 0.2 },
          }}
        >
          <Link
            href="/"
            className={clsx("p-2 rounded", {
              "bg-[#8878BA] text-white": pathname !== "/",
              "bg-white text-gray-900": pathname === "/",
            })}
          >
            <motion.div
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.6,
                  repeat: 0,
                  ease: "easeInOut",
                },
              }}
              animate={{ y: 0 }}
            >
              Home
            </motion.div>
          </Link>
          <Link
            href="/experiences"
            className={clsx("p-2 rounded", {
              "bg-[#8878BA] text-white": pathname !== "/experiences",
              "bg-white text-gray-900": pathname === "/experiences",
            })}
          >
            <motion.div
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.6,
                  repeat: 0,
                  ease: "easeInOut",
                },
              }}
              animate={{ y: 0 }}
            >
              Experiences
            </motion.div>
          </Link>

          <Link
            href="/projects"
            className={clsx("p-2 rounded", {
              "bg-[#8878BA] text-white": pathname !== "/projects",
              "bg-white text-gray-900": pathname === "/projects",
            })}
          >
            <motion.div
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.6,
                  repeat: 0,
                  ease: "easeInOut",
                },
              }}
              animate={{ y: 0 }}
            >
              Projects
            </motion.div>
          </Link>
          <Link
            href="/contact"
            className={clsx("p-2 rounded", {
              "bg-[#8878BA] text-white": pathname !== "/skills",
              "bg-white text-gray-900": pathname === "/skills",
            })}
          >
            <motion.div
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.6,
                  repeat: 0,
                  ease: "easeInOut",
                },
              }}
              animate={{ y: 0 }}
            >
              Contact Me
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
