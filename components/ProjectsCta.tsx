import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ProjectsCta() {
  return (
    <AnimateOnScroll variant="scale-in">
      <section className="mt-20 rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-950 ring-1 ring-white/5 shadow-lg shadow-black/30">
        <div className="flex min-h-[380px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[420px] sm:px-12 sm:py-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            Let&apos;s build something
          </p>

          <h2 className="mb-5 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
            Interested in working
            <span className="mt-1 block font-normal text-zinc-400">
              together?
            </span>
          </h2>

          <p className="mb-10 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
            I&apos;m available for freelance projects, contract work, and remote
            engineering roles.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-3.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-950"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
