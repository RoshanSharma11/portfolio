import Image from "next/image";
import { Skill } from "@/constants/skills";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 to-zinc-950 p-8 ring-1 ring-white/5 hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 cursor-pointer">
      <div className="relative w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={skill.icon}
          alt={`${skill.name} - ${skill.category} technology icon`}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-zinc-400">{skill.category}</p>
    </div>
  );
}
