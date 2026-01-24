'use client';

import { X, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { Project } from "@/constants/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-2xl max-w-5xl w-full relative h-[90vh] overflow-hidden border border-zinc-800/50 shadow-2xl shadow-blue-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - positioned absolutely over image */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-white hover:bg-white/10 transition-all z-50 rounded-full p-2.5 bg-black/40 backdrop-blur-md border border-white/10"
        >
          <X size={20} />
        </button>

        {/* Project Image - Full width without padding */}
        <div className="relative h-[350px] bg-zinc-950 overflow-hidden">
          {/* Strong dark overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-zinc-900 z-10" />
          <div className="absolute inset-0 bg-black/30 z-[5]" />
          
          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Content overlay on image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-blue-500/90 backdrop-blur-md text-white rounded-lg text-sm font-bold border border-blue-400/30 shadow-lg">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-2xl">{project.title}</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(90vh-350px-80px)] custom-scrollbar">
          <div className="p-8 sm:p-10 pb-4">
            {/* Description */}
            <div className="mb-8">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">{project.longDescription}</p>
            </div>

          {/* Key Highlights */}
          <div className="mb-8 bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-blue-500 to-blue-600 rounded-full"></span>
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base">
                  <span className="shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-blue-500 to-blue-600 rounded-full"></span>
              Tech Stack
            </h3>
            <div className="flex gap-3 flex-wrap">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2.5 bg-zinc-800/80 rounded-lg text-sm text-zinc-200 border border-zinc-700/50 font-medium hover:border-blue-500/30 hover:bg-zinc-800 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Fixed Footer with Links */}
        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/50 px-6 py-4">
          <div className="flex flex-wrap gap-4">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 text-[15px] bg-white text-black rounded-xl hover:bg-zinc-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 text-[15px] bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
