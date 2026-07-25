import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/libs/structured-data";

export const metadata: Metadata = {
  title: "Contact Roshan Sharma — Hire a Software Engineer",
  description:
    "Get in touch with Roshan Sharma for software engineering projects, freelance work, or remote contract roles. Based in India, working worldwide.",
  keywords: [
    "Contact Roshan Sharma",
    "Hire Software Engineer",
    "Freelance Developer Contact",
    "Remote Software Engineer",
  ],
  alternates: {
    canonical: "https://roshansharma.net/contact",
  },
  openGraph: {
    title: "Contact Roshan Sharma",
    description:
      "Reach out for software engineering projects, freelance work, or remote contract roles.",
    url: "https://roshansharma.net/contact",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theroshansharma",
  },
  {
    label: "GitHub",
    href: "https://github.com/RoshanSharma11",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/RoshanS25033",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://roshansharma.net" },
          { name: "Contact", url: "https://roshansharma.net/contact" },
        ])}
      />
      <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl">
          <div className="space-y-8">
            <div>
              <h1 className="animate-hero text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
                Contact Roshan Sharma
              </h1>
              <p className="animate-hero animate-hero-delay-1 text-zinc-400 text-base sm:text-lg leading-relaxed">
                Whether you need a software developer for a product build, backend
                architecture help, or a freelance contract — send a message and
                I&apos;ll respond within 1–2 business days.
              </p>
            </div>

            <AnimateOnScroll delay={160}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 to-zinc-950 p-5 ring-1 ring-white/5 transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Clock size={16} strokeWidth={2.25} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Available
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-200 leading-snug">
                    Open for remote and freelance work
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 to-zinc-950 p-5 ring-1 ring-white/5 transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <MapPin size={16} strokeWidth={2.25} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Location
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-200 leading-snug">
                    India (IST) — working with global teams
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={240}>
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/50 p-5 sm:p-6 ring-1 ring-white/5">
                <h2 className="text-sm font-semibold text-zinc-100 mb-4">
                  Also find me on
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-700/80 bg-zinc-950/60 text-sm font-medium text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight size={14} className="text-zinc-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={320}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 rounded-xl hover:bg-zinc-950 hover:border-zinc-700 transition-colors text-sm font-semibold text-zinc-200"
              >
                View Services
                <ArrowUpRight size={16} />
              </Link>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={200} variant="scale-in">
            <div className="rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-950 p-6 sm:p-8 ring-1 ring-white/5 shadow-lg shadow-black/30">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-zinc-500 mb-8">
                Share a few details about your project and I&apos;ll follow up soon.
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
