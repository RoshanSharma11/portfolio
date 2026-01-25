import Sidebar from "@/components/Sidebar";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      
      <main className="ml-0 lg:ml-[270px] flex-1 text-white">
        <section id="projects" className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-4">My Remarkable Projects</h2>
            <p className="text-zinc-400 text-lg max-w-3xl">
              A collection of projects showcasing my expertise in full-stack development, system design, and building scalable applications.
            </p>
          </div>

          <ProjectsGrid />
        </section>
      </main>
    </div>
  );
}
