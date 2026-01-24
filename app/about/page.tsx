import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import TimelineSection from "@/components/TimelineSection";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const experienceData = [
  {
    title: "Mobile App Developer",
    highlight: "GenZFit",
    highlightColor: "text-blue-400",
    description: "Built and shipped a production-ready fitness & nutrition mobile app with real-time features and subscriptions",
    date: "Sep 2025 - Nov 2025",
    isActive: true,
  },
  {
    title: "Full Stack Developer",
    highlight: "ToolSnitch",
    highlightColor: "text-zinc-300",
    description: "Developed scalable seller and user portals with role-based access, payments, and automated workflows",
    date: "Sep 2024 - Nov 2024",
  },
];


  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering ",
      highlight: "8.25 GPA",
      highlightColor: "text-blue-400",
      description: "Netaji Subhas Institute of Technology",
      date: "2024 - 2028",
      isActive: true,
    },
    {
      title: "Class XII",
      highlight: "94.8%",
      highlightColor: "text-zinc-300",
      description: "Veda Vyasa DAV Public School",
      date: "2024",
    },
    {
      title: "Class XII",
      highlight: "91.0%",
      highlightColor: "text-zinc-300",
      description: "Veda Vyasa DAV Public School",
      date: "2022",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />

      <main className="ml-0 lg:ml-[270px] flex-1 text-white">
        <section
          id="about"
          className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12">
            Get to Know Me
          </h2>
          <p className="text-base sm:text-lg  text-zinc-400 leading-relaxed mb-8 sm:mb-12 max-w-4xl">
            I'm a full-stack software engineer with a strong focus on system
            design, scalable backend architecture, and building production-ready
            web platforms.
            <br />
            <br />
            I enjoy working on problems where engineering quality matters —
            designing clean APIs, reliable data models, and systems that can
            handle growth without breaking. My experience spans building
            end-to-end products: from backend services and databases to modern
            frontends and performance-optimized user experiences.
            <br />
            <br />
            Over time, I've worked on a variety of ambitious projects including
            large-scale SaaS platforms, data-intensive applications, developer
            tools, and startup-grade systems. I’m particularly interested in
            backend architecture, distributed system fundamentals, and designing
            systems that are simple, maintainable, and scalable.
            <br />
            Beyond writing code, I enjoy thinking deeply about system design
            trade-offs, performance bottlenecks, and how products evolve from
            MVPs into robust platforms used by real users.
            <br />
            <br />
            I'm always excited to work on challenging engineering problems,
            collaborate with strong teams, and build software that has
            real-world impact.
            <br />
            <br />
            📍 Based in India — open to remote and global software engineering
            opportunities.
          </p>
          <div className="flex items-center gap-8 mb-16">
            <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent"></div>
          </div>

          <TimelineSection 
            title="Experience" 
            items={experienceData} 
            icon={Briefcase}
          />

          <TimelineSection 
            title="Education" 
            items={educationData} 
            icon={GraduationCap}
          />
        </section>
      </main>
    </div>
  );
}
