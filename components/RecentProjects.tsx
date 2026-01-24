import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
}

const recentProjects: Project[] = [
  {
    title: "PDF Actions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Invoice Suite",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

export default function RecentProjects() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 pt-20 pb-5">
      <h2 className="text-3xl sm:text-3xl font-semibold mb-8 sm:mb-12">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {recentProjects.map((project) => (
          <div
            key={project.title}
            className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <Image
              src={project.image}
              alt={`${project.title} Project`}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent max-w-3xl"></div>
        <Link href="/projects">
          <button className="px-6 py-2.5 text-sm border border-zinc-700 rounded-md hover:bg-zinc-900 hover:border-zinc-600 transition-all whitespace-nowrap">
            View All Projects →
          </button>
        </Link>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent max-w-3xl"></div>
      </div>
    </section>
  );
}
