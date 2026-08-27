"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/constants/projects";
import { useScrollSpy } from "@/libs/useScrollSpy";
import { cn } from "@/libs/utils";

const featuredProjects = [projects[0], projects[1], projects[2]];

function getShortName(title: string) {
  return title.split(/\s[—–-]\s/)[0].trim();
}

function getTags(project: Project) {
  const categories = project.category.split("/").map((s) => s.trim());
  const tech = project.techStack.slice(0, 2);
  return [...categories, ...tech].join(" / ");
}

export default function FeaturedProjectsScroll() {
  const { activeIndex, setPanelRef } = useScrollSpy(featuredProjects.length);

  return (
    <>
      {/* Desktop — sticky scroll */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
        <div>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={setPanelRef(index)}
              className="flex min-h-[85vh] flex-col justify-center py-20 pr-12 xl:pr-16"
            >
              <ProjectContent project={project} isActive={activeIndex === index} />
            </div>
          ))}
        </div>

        <div className="sticky top-24 self-start w-full pt-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900/40 ring-1 ring-white/5">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  activeIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
                )}
                aria-hidden={activeIndex !== index}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="50vw"
                  className="object-cover object-top"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — stacked */}
      <div className="flex flex-col gap-16 lg:hidden">
        {featuredProjects.map((project) => (
          <article key={project.id} className="group">
            <Link
              href={`/projects/${project.id}`}
              className="relative mb-6 block aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900/40 ring-1 ring-white/5"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <ProjectContent project={project} isActive />
          </article>
        ))}
      </div>
    </>
  );
}

function ProjectContent({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  const shortName = getShortName(project.title);
  const tags = getTags(project);
  const href = `/projects/${project.id}`;

  return (
    <div
      className="transition-opacity duration-500"
      style={{ opacity: isActive ? 1 : 0.35 }}
    >
      <div className="mb-10 flex items-center gap-4 border-b border-zinc-800/80 pb-4">
        <span className="text-sm font-medium text-zinc-300">{shortName}</span>
        <span className="h-px flex-1 bg-zinc-800" />
        <span className="text-xs uppercase tracking-wider text-zinc-500">
          {project.category.split("/")[0].trim()}
        </span>
        <Link
          href={href}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700/80 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
          aria-label={`View ${shortName} case study`}
        >
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <Link href={href} className="group block">
        <h3 className="mb-8 max-w-lg text-2xl font-semibold leading-snug tracking-tight text-zinc-100 transition-colors group-hover:text-blue-400 sm:text-3xl">
          {project.description}
        </h3>
      </Link>

      <p className="text-sm leading-relaxed text-zinc-500">{tags}</p>
    </div>
  );
}
