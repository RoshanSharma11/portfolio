import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="flex items-center px-4 sm:px-8 lg:px-16 pt-20 pb-5">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8">
          Hello Everyone! I'm Roshan Sharma.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 sm:mb-8 max-w-3xl">
          I'm a full-stack software engineer focused on building scalable systems and high-performance web platforms. I enjoy designing clean architectures, reliable backends, and intuitive products that can grow from early prototypes to production-scale systems.
        </p>
        <Link href="/about">
          <button 
            className="px-6 py-2.5 text-sm border border-zinc-700 rounded-md hover:bg-zinc-900 hover:border-zinc-600 transition-all"
            aria-label="Learn more about Roshan Sharma"
          >
            More about Me →
          </button>
        </Link>
      </div>
    </section>
  );
}
