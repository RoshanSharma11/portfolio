"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowUpRight, Home, RefreshCw } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <section className="flex flex-col items-center justify-center min-h-[calc(100dvh-10rem)] px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="w-full max-w-2xl mx-auto text-center rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-950 ring-1 ring-white/5 shadow-lg shadow-black/30 px-6 sm:px-12 py-16 sm:py-24">
          <p className="animate-hero text-6xl sm:text-8xl font-semibold text-zinc-800 mb-4 tracking-tighter">
            Error
          </p>
          <h1 className="animate-hero animate-hero-delay-1 text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
            Something went wrong
          </h1>
          <p className="animate-hero animate-hero-delay-2 text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-md mx-auto">
            An unexpected error occurred. You can try again or head back to the
            homepage.
          </p>
          <div className="animate-hero animate-hero-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors font-semibold text-sm"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-800 rounded-xl hover:bg-zinc-950 hover:border-zinc-700 transition-colors text-sm text-zinc-300"
            >
              <Home size={16} />
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-800 rounded-xl hover:bg-zinc-950 hover:border-zinc-700 transition-colors text-sm text-zinc-300"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
