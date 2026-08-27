"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/constants/projects";
import ProjectLiveLink from "@/components/ProjectLiveLink";
import { getShortName, getTheme } from "@/libs/project-themes";
import { useScrollSpy } from "@/libs/useScrollSpy";
import { cn } from "@/libs/utils";

export default function ProjectsScroll() {
  const { activeIndex, setPanelRef } = useScrollSpy(projects.length);

  return (
    <>
      {/* Desktop — sticky scroll */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
        <div className="relative">
          <div className="absolute left-[11px] top-8 bottom-8 w-px bg-linear-to-b from-blue-500 via-zinc-700 to-zinc-800" />

          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              ref={setPanelRef(index)}
              className="flex min-h-[75vh] flex-col justify-center py-16 pr-12 xl:pr-16"
            >
              <ProjectPanel
                project={project}
                index={index}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>

        <div className="sticky top-24 self-start w-full pt-4">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-900/40 ring-1 ring-white/5">
            {projects.map((project, index) => {
              const theme = getTheme(index);

              return (
                <div
                  key={project.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out",
                    activeIndex === index
                      ? "z-10 scale-100 opacity-100"
                      : "z-0 scale-[1.02] opacity-0"
                  )}
                  aria-hidden={activeIndex !== index}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="50vw"
                    className="object-cover object-top"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-zinc-950/10 to-transparent" />
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl",
                      theme.glow
                    )}
                  />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <span
                      className={cn(
                        "inline-block rounded-lg px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm",
                        theme.badge
                      )}
                    >
                      {project.category.split("/")[0].trim()}
                    </span>
                    <span className="text-xs tabular-nums text-zinc-400">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="relative max-w-xl lg:hidden">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-blue-500 via-zinc-700 to-zinc-800" />

        <div className="space-y-14">
          {projects.map((project, index) => {
            const theme = getTheme(index);

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="relative pl-1"
              >
                <div className="relative flex gap-6">
                  <div
                    className={cn(
                      "relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950",
                      theme.dotBorder
                    )}
                  >
                    <span
                      className={cn("h-1.5 w-1.5 rounded-full", theme.dotFill)}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/projects/${project.id}`}
                      className="group relative mb-5 block aspect-16/10 overflow-hidden rounded-xl bg-zinc-900/40 ring-1 ring-white/5"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
                      <span
                        className={cn(
                          "absolute bottom-4 left-4 inline-block rounded-lg px-2.5 py-1 text-xs font-semibold text-white",
                          theme.badge
                        )}
                      >
                        {project.category.split("/")[0].trim()}
                      </span>
                    </Link>

                    <ProjectPanel
                      project={project}
                      index={index}
                      isActive
                      compact
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ProjectPanel({
  project,
  index,
  isActive,
  compact = false,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  compact?: boolean;
}) {
  const theme = getTheme(index);
  const shortName = getShortName(project.title);
  const href = `/projects/${project.id}`;

  return (
    <div
      className={cn(
        "transition-opacity duration-500",
        !compact && "flex items-start gap-6"
      )}
      style={{ opacity: compact || isActive ? 1 : 0.35 }}
    >
      {!compact && (
        <div
          className={cn(
            "relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950 transition-all duration-500",
            isActive
              ? cn("ring-4", theme.dotBorder, theme.dotRing)
              : "border-zinc-700"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-colors duration-500",
              isActive ? theme.dotFill : "bg-zinc-600"
            )}
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="text-xs tabular-nums text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p
            className={cn(
              "text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500",
              isActive ? theme.accent : "text-zinc-500"
            )}
          >
            {project.category}
          </p>
        </div>

        <div className="mb-5 flex items-center gap-4 border-b border-zinc-800/80 pb-4">
          <Link href={href} className="group/title min-w-0">
            <h2
              className={cn(
                "font-semibold tracking-tight transition-colors duration-500 group-hover/title:text-blue-400",
                compact ? "text-xl" : "text-2xl sm:text-3xl",
                isActive ? "text-zinc-100" : "text-zinc-400"
              )}
            >
              {shortName}
            </h2>
          </Link>
          <span className="hidden h-px flex-1 bg-zinc-800 sm:block" />
          <Link
            href={href}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
            aria-label={`View ${shortName} case study`}
          >
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <Link href={href} className="group block">
          <p
            className={cn(
              "leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300",
              compact ? "mb-4 text-sm" : "mb-5 max-w-lg text-base"
            )}
          >
            {project.description}
          </p>
        </Link>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, compact ? 3 : 4).map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs font-medium",
                isActive
                  ? theme.tag
                  : "border-zinc-700/50 bg-zinc-800/50 text-zinc-400"
              )}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (compact ? 3 : 4) && (
            <span className="rounded-md border border-zinc-700/30 bg-zinc-800/30 px-2.5 py-1 text-xs text-zinc-500">
              +{project.techStack.length - (compact ? 3 : 4)}
            </span>
          )}
        </div>

        {!compact && project.highlights[0] && (
          <p className="mb-6 max-w-md text-sm leading-relaxed text-zinc-600">
            {project.highlights[0]}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={href}
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-medium transition-all",
              isActive
                ? "text-blue-400 hover:gap-2.5"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            Case Study
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
              Code
            </a>
          )}

          <ProjectLiveLink
            project={project}
            variant="inline"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
}
