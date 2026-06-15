'use client';

import Link from "next/link";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactModal from "./ContactModal";

export default function ContactSection() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <section id="contact" className="h-[80vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 sm:mb-12">
              Let&apos;s Connect!
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 sm:mb-12">
              Open to remote software engineering roles and freelance projects
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={240}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors text-base font-semibold"
              >
                Contact Page
              </Link>
              <button
                onClick={() => setShowContactModal(true)}
                className="px-6 py-3 border border-zinc-800 rounded-lg hover:bg-zinc-950 hover:border-zinc-700 transition-colors text-base font-semibold"
                aria-label="Open contact form to get in touch with Roshan Sharma"
              >
                Quick Message
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
}
