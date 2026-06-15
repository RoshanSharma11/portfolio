import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FeaturedProjectsScroll from "@/components/FeaturedProjectsScroll";

export default function FeaturedProjectCard() {
  return (
    <AnimateOnScroll>
      <div className="mb-20">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Featured Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <FeaturedProjectsScroll />
      </div>
    </AnimateOnScroll>
  );
}
