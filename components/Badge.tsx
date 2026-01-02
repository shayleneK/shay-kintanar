// Badge.tsx
"use client";

import Link from "next/link";
import { badgeConfig, BadgeType } from "./badgeConfig";

type BadgeProps = {
  type: BadgeType;
  href: string;
};

export default function Badge({ type, href }: BadgeProps) {
  const { label, icon: Icon, color } = badgeConfig[type];

  return (
    <Link
      href={href}
      target="_blank"
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${color} hover:opacity-80 transition`}
    >
      <Icon className="text-lg" />
      {label}
    </Link>
  );
}
