"use client";

import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "@/constants/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 rounded-xl max-w-2xl w-full border border-zinc-800/60 shadow-2xl shadow-black/60 max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-zinc-800/60">
          <div className="flex-1 pr-4 min-w-0">
            <span className="inline-block px-2.5 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs font-medium border border-blue-500/20 mb-2">
              {project.category}
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-all"
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Compact image strip */}
          <div className="relative h-44 bg-zinc-900 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent" />
          </div>

          <div className="px-6 py-5 space-y-5">
            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Key Highlights */}
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed"
                  >
                    <span className="shrink-0 w-1 h-1 bg-blue-500 rounded-full mt-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-zinc-800/60">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-sm border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all"
            >
              <Github size={13} />
              View Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-sm border border-zinc-700 rounded-md text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
