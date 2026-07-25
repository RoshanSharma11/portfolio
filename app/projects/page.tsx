import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProjectsScroll from "@/components/ProjectsScroll";
import ProjectsCta from "@/components/ProjectsCta";
import { projects } from "@/constants/projects";
import { breadcrumbSchema } from "@/libs/structured-data";

export const metadata: Metadata = {
  title: "Projects — Software Development, Backend & Systems Engineering",
  description:
    "Explore software engineering projects by Roshan Sharma — high-performance backends, web platforms, real-time collaboration tools, and scalable system design.",
  keywords: [
    "Roshan Sharma Projects",
    "Software Developer Portfolio",
    "Backend Engineering Projects",
    "System Design Projects",
    "Software Engineering Case Studies",
    "React Next.js Projects",
  ],
  alternates: {
    canonical: "https://roshansharma.net/projects",
  },
  openGraph: {
    title: "Projects — Roshan Sharma",
    description:
      "A collection of software development, backend, and systems engineering projects showcasing production-ready software.",
    url: "https://roshansharma.net/projects",
  },
};

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Projects" }];

export default function ProjectsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://roshansharma.net" },
          { name: "Projects", url: "https://roshansharma.net/projects" },
        ])}
      />
      <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="animate-hero text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-4 tracking-tight">
          Projects by Roshan Sharma
        </h1>
        <p className="animate-hero animate-hero-delay-1 text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-4">
          A collection of projects showcasing expertise in software development,
          system design, and building scalable applications.
        </p>
        <p className="animate-hero animate-hero-delay-2 mb-12 text-sm text-zinc-600">
          {projects.length} projects · scroll to explore
        </p>

        <AnimateOnScroll>
          <ProjectsScroll />
        </AnimateOnScroll>
        <ProjectsCta />
      </section>
    </PageShell>
  );
}
