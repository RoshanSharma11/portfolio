import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { projects } from "@/constants/projects";

export default function RecentProjects() {
  const recentProjects = [projects[0], projects[1]];

  return (
    <section className="px-4 sm:px-8 lg:px-16 pt-20 pb-5">
      <AnimateOnScroll>
        <h2 className="text-3xl sm:text-3xl font-semibold mb-8 sm:mb-12">
          Recent Projects
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {recentProjects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 120} variant="scale-in">
            <Link href={`/projects/${project.id}`}>
              <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden relative group cursor-pointer border border-zinc-800/40 transition-all duration-500 hover:border-zinc-600/60 hover:shadow-xl hover:shadow-black/30">
                <Image
                  src={project.image}
                  alt={`${project.title} - Recent software development project by Roshan Sharma`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, calc((100vw - 270px) / 2)"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll delay={240}>
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent max-w-3xl" />
          <Link
            href="/projects"
            className="px-6 py-2.5 text-sm border border-zinc-800 rounded-md hover:bg-zinc-950 hover:border-zinc-700 transition-all whitespace-nowrap"
            aria-label="View all projects by Roshan Sharma"
          >
            View All Projects →
          </Link>
          <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent max-w-3xl" />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
