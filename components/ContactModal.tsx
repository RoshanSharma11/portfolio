'use client';

import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
