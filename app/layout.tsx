import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/libs/structured-data";
import { Analytics } from "@vercel/analytics/next";
import SiteBackground from "@/components/SiteBackground";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roshansharma.net'),
  title: {
    default: 'Roshan Sharma - Full Stack Software Engineer | Hire Expert Developer',
    template: '%s | Roshan Sharma',
  },
  description: 'Roshan Sharma — Full Stack Software Engineer specializing in scalable backend architecture, system design, and production-ready web platforms. Expert in Python, TypeScript, Go, Node.js, React, and Next.js. Available for remote and freelance software engineering work.',
  keywords: [
    'Roshan Sharma',
    'Full Stack Developer',
    'Software Engineer',
    'Freelance Software Engineer',
    'Backend Developer',
    'Frontend Developer',
    'Hire Full Stack Developer',
    'Remote Software Engineer',
    'Python Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'React Developer',
    'Next.js Developer',
    'System Design',
    'Scalable Architecture',
    'Distributed Systems',
    'Full Stack Engineer for Hire',
    'Software Developer Portfolio',
    'Web Development Expert',
  ],
  authors: [{ name: 'Roshan Sharma' }],
  creator: 'Roshan Sharma',
  publisher: 'Roshan Sharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://roshansharma.net',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roshansharma.net',
    title: 'Roshan Sharma - Full Stack Software Engineer | Hire Expert Developer',
    description: 'Full Stack Software Engineer specializing in scalable backend architecture, system design, and production-ready web platforms. Available for remote and freelance work.',
    siteName: 'Roshan Sharma Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roshan Sharma - Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshan Sharma - Full Stack Software Engineer | Hire Expert Developer',
    description: 'Full Stack Software Engineer specializing in scalable backend architecture, system design, and production-ready web platforms. Available for remote and freelance work.',
    creator: '@RoshanS25033',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        <SiteBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
