import Link from "next/link";
import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { faqItems } from "@/constants/faq";
import { breadcrumbSchema, faqSchema } from "@/libs/structured-data";

export const metadata: Metadata = {
  title: "FAQ — Hiring Roshan Sharma as a Software Engineer",
  description:
    "Frequently asked questions about hiring Roshan Sharma for software engineering, freelance work, tech stack, remote collaboration, and project fit.",
  keywords: [
    "Hire Software Engineer FAQ",
    "Freelance Developer Questions",
    "Remote Software Engineer",
    "Roshan Sharma FAQ",
  ],
  alternates: {
    canonical: "https://roshansharma.net/faq",
  },
  openGraph: {
    title: "FAQ — Roshan Sharma Software Engineer",
    description:
      "Questions about software engineering services, freelance availability, and how to work together.",
    url: "https://roshansharma.net/faq",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbSchema([
        { name: "Home", url: "https://roshansharma.net" },
        { name: "FAQ", url: "https://roshansharma.net/faq" },
      ]), faqSchema(faqItems)]} />
      <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="animate-hero text-3xl sm:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="animate-hero animate-hero-delay-1 text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
          Common questions about my software engineering work, availability for
          freelance and contract roles, and how we can collaborate.
        </p>

        <div className="max-w-3xl space-y-6">
          {faqItems.map((item, index) => (
            <AnimateOnScroll
              key={item.question}
              as="article"
              delay={index * 70}
              className="border border-zinc-800/60 rounded-xl p-6 bg-linear-to-br from-zinc-900/80 to-zinc-950/90 ring-1 ring-white/5 transition-all duration-300 hover:border-zinc-700/80"
            >
              <h2 className="text-lg font-semibold mb-3">{item.question}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-semibold text-sm"
            >
              Still have questions? Contact me
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </PageShell>
  );
}
