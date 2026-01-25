import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function RecentProjects() {
  const recentProjects = projects.slice(0, 2);

  return (
    <section className="px-4 sm:px-8 lg:px-16 pt-20 pb-5">
      <h2 className="text-3xl sm:text-3xl font-semibold mb-8 sm:mb-12">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {recentProjects.map((project) => (
          <Link href="/projects" key={project.id}>
            <div
              className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={project.image}
                alt={`${project.title} - Recent software development project by Roshan Sharma`}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent max-w-3xl"></div>
        <Link href="/projects">
          <button 
            className="px-6 py-2.5 text-sm border border-zinc-700 rounded-md hover:bg-zinc-900 hover:border-zinc-600 transition-all whitespace-nowrap"
            aria-label="View all projects by Roshan Sharma"
          >
            View All Projects →
          </button>
        </Link>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent max-w-3xl"></div>
      </div>
    </section>
  );
}
