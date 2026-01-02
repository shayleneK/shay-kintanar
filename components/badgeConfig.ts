// badgeConfig.ts
import { FaGithub, FaFigma } from "react-icons/fa";

export const badgeConfig = {
  github: {
    label: "GitHub",
    icon: FaGithub,
    color: "bg-gray-900 text-white",
  },
  figma: {
    label: "Figma",
    icon: FaFigma,
    color: "bg-purple-600 text-white",
  },
} as const;

export type BadgeType = keyof typeof badgeConfig;
