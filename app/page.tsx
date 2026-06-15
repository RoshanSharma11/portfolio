import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="ml-0 lg:ml-[270px] flex-1 text-white flex flex-col">
        <HeroSection />
        <RecentProjects />
        <SkillsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
