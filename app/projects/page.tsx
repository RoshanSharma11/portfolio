'use client';

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/constants/projects";
import { useState } from "react";
import { Star, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/constants/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* <ParticlesBackground /> */}
      <Sidebar />
      
      <main className="ml-0 lg:ml-[270px] flex-1 text-white">
        <section id="projects" className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-4">My Remarkable Projects</h2>
            <p className="text-zinc-400 text-lg max-w-3xl">
              A collection of projects showcasing my expertise in full-stack development, system design, and building scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm flex flex-col"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="aspect-video bg-zinc-950 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1.5 bg-blue-500/90 backdrop-blur-sm text-white rounded-lg text-xs font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/50 rounded-md text-xs text-zinc-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/30 rounded-md text-xs text-zinc-500 font-medium">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links - Pushed to bottom with mt-auto */}
                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50 mt-auto">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-400 transition-colors font-medium"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-400 transition-colors font-medium"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    <div className="ml-auto flex items-center gap-1.5 text-xs text-blue-400 font-semibold group-hover:gap-2.5 transition-all">
                      Details
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
