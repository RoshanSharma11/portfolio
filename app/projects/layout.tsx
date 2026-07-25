import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects by Roshan Sharma - Software Development Portfolio',
  description: 'Explore projects by Roshan Sharma showcasing expertise in software development, system design, scalable applications, and production-ready platforms. View real-world software engineering work.',
  keywords: [
    'Roshan Sharma Projects',
    'Software Developer Portfolio',
    'Software Engineering Projects',
    'React Projects',
    'Next.js Projects',
    'Python Projects',
    'Backend Projects',
    'System Design Projects',
    'Web Development Portfolio',
  ],
  alternates: {
    canonical: 'https://roshansharma.net/projects',
  },
  openGraph: {
    title: 'Projects by Roshan Sharma - Software Development Portfolio',
    description: 'Explore projects by Roshan Sharma showcasing expertise in software development, system design, and scalable applications.',
    url: 'https://roshansharma.net/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
