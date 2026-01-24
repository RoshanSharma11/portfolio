'use client';

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function ContactSection() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <section id="contact" className="h-[80vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 sm:mb-12">Let's Connect!</h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 sm:mb-12">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors text-base font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
}
