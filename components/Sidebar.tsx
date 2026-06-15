"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Star,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  FileText,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/libs/utils";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "home", icon: Home, label: "Home", href: "/", type: "page" as const },
    { id: "about", icon: User, label: "About", href: "/about", type: "page" as const },
    {
      id: "services",
      icon: Wrench,
      label: "Services",
      href: "/services",
      type: "page" as const,
    },
    {
      id: "projects",
      icon: Briefcase,
      label: "Projects",
      href: "/projects",
      type: "page" as const,
    },
    {
      id: "skills",
      icon: Star,
      label: "Skills",
      href: "/#skills",
      type: "scroll" as const,
    },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      href: "/contact",
      type: "page" as const,
    },
  ];

  const getActiveItem = () => {
    if (pathname === "/about") return "about";
    if (pathname === "/services") return "services";
    if (pathname.startsWith("/projects")) return "projects";
    if (pathname === "/contact") return "contact";
    if (pathname === "/faq") return "contact";
    return activeSection;
  };

  const handleScrollClick = (item: (typeof menuItems)[number]) => {
    if (pathname !== "/") {
      router.push(item.href);
    } else {
      setActiveSection(item.id);
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const socialIcons = [
    { name: "Resume", icon: FileText, href: "/resume-v2.pdf" },
    { name: "GitHub", icon: Github, href: "https://github.com/RoshanSharma11" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/theroshansharma",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/roshansharma_11/",
    },
  ];

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--sidebar)] backdrop-blur-md border border-white/5 rounded-lg text-zinc-300"
        aria-label={
          mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={cn(
          "w-[270px] h-screen sidebar-panel fixed left-0 top-0 z-40 transition-transform duration-300",
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="sidebar-tone absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="sidebar-grain-coarse absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="sidebar-grain-fine absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-col items-center pt-12 pb-6 px-6">
          <Link href="/" className="relative w-44 h-44 rounded-lg overflow-hidden mb-4 bg-zinc-900/60 ring-1 ring-white/10">
            <Image
              src="/profile.jpeg"
              alt="Roshan Sharma - Full Stack Software Engineer profile picture"
              fill
              sizes="176px"
              priority
              className="object-cover"
            />
          </Link>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-500 text-sm font-medium">
              Available for Work
            </span>
          </div>
        </div>

        <nav className="flex-1 px-6" aria-label="Main navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = getActiveItem() === item.id;

            if (item.type === "page") {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 transition-colors",
                    isActive
                      ? "bg-zinc-900/90 text-white ring-1 ring-white/10"
                      : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={20} />
                  <span className="text-base">{item.label}</span>
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleScrollClick(item)}
                className={cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 transition-colors",
                  isActive
                    ? "bg-zinc-900/90 text-white ring-1 ring-white/10"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white",
                )}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon size={20} />
                <span className="text-base">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex justify-center gap-4 py-6 px-6">
          {socialIcons.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-950/80 ring-1 ring-white/5 hover:bg-zinc-900/80 transition-colors"
                aria-label={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}
