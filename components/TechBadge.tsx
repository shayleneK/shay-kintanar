import {
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiPython,
  SiMongodb,
} from "react-icons/si";

export type Tech =
  | "php"
  | "laravel"
  | "postgreSQL"
  | "next.js"
  | "react"
  | "vue.js"
  | "python"
  | "mongodb";

const techIcons = {
  php: SiPhp,
  laravel: SiLaravel,
  postgreSQL: SiPostgresql,
  "next.js": SiNextdotjs,
  react: SiReact,
  "vue.js": SiVuedotjs,
  python: SiPython,
  mongodb: SiMongodb,
};

export function TechBadge({ tech }: { tech: Tech }) {
  const Icon = techIcons[tech];

  return (
    <span className="flex items-center gap-2 px-3 py-1 text-sm rounded-full border bg-black border-white/20 text-white/80">
      {Icon && <Icon className="w-4 h-4" />}
      {tech}
    </span>
  );
}
