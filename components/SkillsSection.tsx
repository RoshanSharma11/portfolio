'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SkillCard from "./SkillCard";
import { mainSkills, additionalSkills } from "@/constants/skills";
import { cn } from "@/libs/utils";

export default function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <section id="skills" className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
      <AnimateOnScroll>
        <h2 className="text-3xl sm:text-3xl font-semibold mb-8 sm:mb-12">Skills</h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {mainSkills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} delay={index * 80}>
            <SkillCard skill={skill} />
          </AnimateOnScroll>
        ))}
      </div>

      {showAllSkills && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {additionalSkills.map((skill, index) => (
            <AnimateOnScroll key={skill.name} delay={index * 60} variant="fade-in">
              <SkillCard skill={skill} />
            </AnimateOnScroll>
          ))}
        </div>
      )}

      <AnimateOnScroll delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
          <div className="hidden sm:block flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent max-w-3xl" />
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="px-6 py-2.5 text-sm border border-zinc-800 rounded-md hover:bg-zinc-950 hover:border-zinc-700 transition-all flex items-center gap-2 whitespace-nowrap"
            aria-label={showAllSkills ? "Show fewer skills" : "View all technical skills"}
            aria-expanded={showAllSkills}
          >
            {showAllSkills ? "Show Less" : "View All Skills"}
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-300",
                showAllSkills && "rotate-180"
              )}
            />
          </button>
          <div className="hidden sm:block flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent max-w-3xl" />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
