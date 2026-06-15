'use client';

import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 px-4">
      <div className="rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-950 p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto ring-1 ring-white/5 shadow-2xl shadow-black/60">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close contact form"
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <ContactForm
          onSuccess={() => {
            setTimeout(() => {
              onClose();
            }, 2000);
          }}
        />
      </div>
    </div>
  );
}
