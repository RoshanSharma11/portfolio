'use client';

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

interface ContactFormProps {
  onSuccess?: () => void;
}

const inputClassName =
  "w-full px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 bg-zinc-950/80 border border-zinc-700/80 rounded-xl focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed";

const labelClassName =
  "block text-sm font-medium mb-2 text-zinc-200";

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
      setMessage({ type: 'success', text: "Message sent successfully! I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
      onSuccess?.();
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to send message. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {message && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm leading-relaxed ${
            message.type === 'success'
              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25'
              : 'bg-red-500/10 text-red-300 border border-red-500/25'
          }`}
        >
          {message.text}
        </div>
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            disabled={isSubmitting}
            className={inputClassName}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            disabled={isSubmitting}
            className={inputClassName}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            disabled={isSubmitting}
            className={`${inputClassName} resize-none leading-relaxed`}
            placeholder="Tell me about your project, timeline, and goals..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isSubmitting ? 'Sending message' : 'Send message to Roshan Sharma'}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}
