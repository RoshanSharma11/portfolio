import Sidebar from "@/components/Sidebar";
import SiteFooter from "@/components/SiteFooter";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-0 lg:ml-[270px] flex-1 text-white flex flex-col">
        {children}
        <SiteFooter />
      </main>
    </div>
  );
}
