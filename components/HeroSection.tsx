import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center px-4 sm:px-8 lg:px-16 pt-20 pb-5"
    >
      <div className="max-w-4xl">
        <h1 className="animate-hero text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8">
          Hello Everyone! I&apos;m Roshan Sharma.
        </h1>
        <p className="animate-hero animate-hero-delay-1 text-base sm:text-lg text-zinc-400 leading-relaxed mb-4 max-w-3xl">
          I&apos;m a full-stack software engineer focused on building scalable
          systems and high-performance web platforms. I enjoy designing clean
          architectures, reliable backends, and intuitive products that can grow
          from early prototypes to production-scale systems.
        </p>
        <p className="animate-hero animate-hero-delay-2 text-base sm:text-lg text-zinc-500 leading-relaxed mb-8 max-w-3xl">
          Available for remote software engineering roles and freelance projects
          — web platforms, backend services, mobile apps, and system design.
        </p>
        <div className="animate-hero animate-hero-delay-3 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="px-6 py-2.5 text-sm bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-semibold"
            aria-label="Learn more about Roshan Sharma"
          >
            More about Me →
          </Link>
          {/* <Link
            href="/services"
            className="px-6 py-2.5 text-sm border border-zinc-800 rounded-lg hover:bg-zinc-950 hover:border-zinc-700 transition-all text-zinc-300"
            aria-label="View software engineering services"
          >
            Services →
          </Link> */}
        </div>
      </div>
    </section>
  );
}
