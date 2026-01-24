import Image from "next/image";
import { Skill } from "@/constants/skills";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors cursor-pointer">
      <div className="w-14 h-14 flex items-center justify-center mb-4">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={56}
          height={56}
          className="w-14 h-14 object-contain"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-zinc-400">{skill.category}</p>
    </div>
  );
}
