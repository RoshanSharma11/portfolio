'use client';

import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      
      <main className="ml-0 lg:ml-[270px] flex-1 text-white">
        <HeroSection />
        <RecentProjects />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
