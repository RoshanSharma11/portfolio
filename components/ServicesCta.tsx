import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesCta() {
  return (
    <AnimateOnScroll variant="scale-in">
      <section className="rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-950 ring-1 ring-white/5 shadow-lg shadow-black/30">
        <div className="flex flex-col items-center justify-center text-center px-6 sm:px-12 py-16 sm:py-24 lg:py-28 min-h-[420px] sm:min-h-[460px]">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-medium mb-5">
            Let&apos;s work together
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5 max-w-2xl">
            Have a project
            <span className="block text-zinc-400 font-normal mt-1">
              in mind?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-4 max-w-md">
            Tell me about your product, timeline, and goals.
          </p>
          <p className="text-sm text-zinc-500 mb-10 max-w-sm">
            I respond to serious inquiries within 1–2 business days.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors font-semibold text-sm"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-zinc-800 rounded-xl hover:bg-zinc-950 hover:border-zinc-700 transition-colors text-sm text-zinc-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
