import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Projects() {
  const projects = [
    {
      title: "PDF Actions",
      description: "A comprehensive PDF manipulation tool with features for merging, splitting, and editing PDFs",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "TypeScript", "PDF.js"],
    },
    {
      title: "Invoice Suite",
      description: "Full-featured invoice management system with analytics and automated billing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory and payment processing",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "AWS"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Tailwind"],
    },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      
      <main className="ml-0 lg:ml-[270px] flex-1 text-white">
        <section id="projects" className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-12 sm:mb-16">My Remarkable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
