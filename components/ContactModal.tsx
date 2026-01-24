'use client';

import { X } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = await sendContactEmail(data);

    if (result.success) {
      setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 2000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to send message. Please try again.' });
    }

    setIsSubmitting(false);
  };

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
        {message && (
          <div className={`mb-4 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
            {message.text}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Name</label>
            <input
              type="text"
              name="name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Email</label>
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-300">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
