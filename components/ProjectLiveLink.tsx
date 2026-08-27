"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/constants/projects";
import {
  getLiveLinkLabel,
  hasLiveLink,
  resolveLiveLink,
} from "@/libs/project-links";
import { cn } from "@/libs/utils";

type Variant = "button" | "button-secondary" | "inline";

interface ProjectLiveLinkProps {
  project: Project;
  variant?: Variant;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ProjectLiveLink({
  project,
  variant = "button",
  className,
  onClick,
}: ProjectLiveLinkProps) {
  const [href, setHref] = useState<string | undefined>(() =>
    project.storeLinks
      ? project.storeLinks.android
      : project.liveLink || undefined
  );
  const [label, setLabel] = useState(() =>
    project.storeLinks ? "Get the App" : "Live Demo"
  );

  useEffect(() => {
    setHref(resolveLiveLink(project));
    setLabel(getLiveLinkLabel(project));
  }, [project]);

  if (!hasLiveLink(project) || !href) return null;

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300",
          className
        )}
        onClick={onClick}
      >
        <ExternalLink size={14} />
        {label === "Live Demo" ? "Demo" : label}
      </a>
    );
  }

  if (variant === "button-secondary") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-1.5 px-4 py-2 text-sm border border-zinc-700 rounded-md text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all",
          className
        )}
        onClick={onClick}
      >
        <ExternalLink size={13} />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200",
        className
      )}
      onClick={onClick}
    >
      <ExternalLink size={15} />
      {label}
    </a>
  );
}
