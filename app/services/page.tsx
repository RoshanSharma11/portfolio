import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WorkProcessTimeline from "@/components/WorkProcessTimeline";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ServicesCta from "@/components/ServicesCta";
import { services } from "@/constants/services";
import { breadcrumbSchema } from "@/libs/structured-data";

export const metadata: Metadata = {
  title: "Software Engineering Services - Full Stack, Backend & Mobile",
  description:
    "Hire Roshan Sharma for full-stack web development, backend APIs, mobile apps, and system design. Remote software engineer available for freelance and contract work.",
  keywords: [
    "Software Engineering Services",
    "Hire Full Stack Developer",
    "Freelance Software Engineer",
    "Remote Software Developer",
    "Backend Developer for Hire",
    "Web Application Development",
    "Roshan Sharma Services",
  ],
  alternates: {
    canonical: "https://roshansharma.net/services",
  },
  openGraph: {
    title: "Software Engineering Services — Roshan Sharma",
    description:
      "Full-stack web platforms, backend APIs, mobile apps, and system design. Remote and freelance software engineering.",
    url: "https://roshansharma.net/services",
  },
};

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://roshansharma.net" },
          { name: "Services", url: "https://roshansharma.net/services" },
        ])}
      />
      <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="animate-hero text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-4 tracking-tight">
          Software Engineering Services
        </h1>
        <p className="animate-hero animate-hero-delay-1 text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
          I help teams and founders ship production-ready software, from MVPs to
          scalable platforms. Available for remote engineering roles, freelance
          projects, and contract engagements.
        </p>

        <div className="mb-20 border-t border-zinc-800/70">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              as="article"
              delay={index * 80}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-3 md:gap-14 py-8 sm:py-9 border-b border-zinc-800/70"
            >
              <div className="flex items-baseline gap-4 md:block">
                <span className="text-xs tabular-nums text-zinc-600 md:mb-3 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-md text-zinc-400 leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {service.highlights.join(" · ")}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <FeaturedProjectCard />
        <WorkProcessTimeline />
        <ServicesCta />
      </section>
    </PageShell>
  );
}
