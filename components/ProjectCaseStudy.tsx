import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/constants/projects";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProjectLiveLink from "@/components/ProjectLiveLink";
import { getShortName } from "@/libs/project-themes";
import { getAdjacentProjects } from "@/libs/projects";
import { hasLiveLink } from "@/libs/project-links";
import ProjectsCta from "@/components/ProjectsCta";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const shortName = getShortName(project.title);
  const { prev, next } = getAdjacentProjects(project.id);

  return (
    <>
      <header className="mb-12 sm:mb-16">
        <div className="animate-hero mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
            {project.category}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Case Study
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-12 xl:gap-16">
          <div>
            <h1 className="animate-hero animate-hero-delay-1 mb-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px]">
              {shortName}
            </h1>
            <p className="animate-hero animate-hero-delay-2 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {project.description}
            </p>
          </div>

          <AnimateOnScroll delay={200} variant="scale-in">
            <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950 ring-1 ring-white/5">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 1024px) 672px, 520px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16 xl:gap-20">
        <div>
          <AnimateOnScroll>
            <SectionLabel>Overview</SectionLabel>
            <p className="mb-14 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {project.longDescription}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <SectionLabel>Key Highlights</SectionLabel>
          </AnimateOnScroll>
          <div className="mb-14 border-t border-zinc-800/70">
            {project.highlights.map((highlight, highlightIndex) => (
              <AnimateOnScroll
                key={highlight}
                as="article"
                delay={highlightIndex * 80}
                className="grid grid-cols-1 gap-3 border-b border-zinc-800/70 py-6 sm:grid-cols-[minmax(0,3rem)_minmax(0,1fr)] sm:gap-8 sm:py-7"
              >
                <span className="text-xs tabular-nums text-zinc-600">
                  {String(highlightIndex + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {highlight}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll delay={160} variant="scale-in">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-6 ring-1 ring-white/5 sm:p-7">
              <SectionLabel>Tech Stack</SectionLabel>
              <div className="mb-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-700/50 bg-zinc-800/50 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3 border-t border-zinc-800/60 pt-6">
                {hasLiveLink(project) && <ProjectLiveLink project={project} />}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700/80 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-950/50"
                  >
                    <Github size={15} />
                    View Code
                  </a>
                )}
                <Link
                  href="/projects"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
                >
                  <ArrowLeft size={15} />
                  All Projects
                </Link>
              </div>
            </div>
          </aside>
        </AnimateOnScroll>
      </div>

      {(prev || next) && (
        <AnimateOnScroll>
          <nav
            aria-label="Project navigation"
            className="mt-16 grid grid-cols-1 gap-4 border-t border-zinc-800/70 pt-10 sm:grid-cols-2 sm:gap-6"
          >
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                className="group rounded-xl border border-zinc-800/70 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-950/50"
              >
                <span className="mb-2 flex items-center gap-1.5 text-xs text-zinc-500">
                  <ArrowLeft size={13} />
                  Previous
                </span>
                <p className="font-semibold text-zinc-200 transition-colors group-hover:text-blue-400">
                  {getShortName(prev.title)}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.id}`}
                className="group rounded-xl border border-zinc-800/70 p-5 text-left transition-colors hover:border-zinc-700 hover:bg-zinc-950/50 sm:text-right"
              >
                <span className="mb-2 flex items-center gap-1.5 text-xs text-zinc-500 sm:justify-end">
                  Next
                  <ArrowRight size={13} />
                </span>
                <p className="font-semibold text-zinc-200 transition-colors group-hover:text-blue-400">
                  {getShortName(next.title)}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll delay={120}>
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Interested in similar work?
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </AnimateOnScroll>

      <ProjectsCta />
    </>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
      {children}
    </p>
  );
}
