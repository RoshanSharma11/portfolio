'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Home, User, Briefcase, Star, Mail, Github, Linkedin, Instagram, Menu, X, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/', type: 'page' },
    { id: 'about', icon: User, label: 'About', href: '/about', type: 'page' },
    { id: 'projects', icon: Briefcase, label: 'Projects', href: '/projects', type: 'page' },
    { id: 'skills', icon: Star, label: 'Skills', href: '/#skills', type: 'scroll' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '/#contact', type: 'scroll' },
  ];

  const getActiveItem = () => {
    if (pathname === '/about') return 'about';
    if (pathname === '/projects') return 'projects';
    return activeSection;
  };

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.type === 'page') {
      setActiveSection(item.id);
      router.push(item.href);
    } else if (item.type === 'scroll') {
      if (pathname !== '/') {
        router.push(item.href);
      } else {
        setActiveSection(item.id);
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const socialIcons = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/RoshanSharma11' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/theroshansharma' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/roshansharma_11/' },
    { name: 'Resume', icon: FileText, href: '/resume.pdf' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900 rounded-lg text-white"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`w-[270px] h-screen bg-black border-r border-zinc-800 flex flex-col fixed left-0 top-0 z-40 transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
      {/* Profile Section */}
      <div className="flex flex-col items-center pt-12 pb-6 px-6">
        <div className="w-44 h-44 rounded-lg overflow-hidden mb-4 bg-zinc-800">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={176}
            height={176}
            className="object-cover "
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-500 text-sm font-medium">Available for Work</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 transition-colors ${
                getActiveItem() === item.id
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 py-6 px-6">
        {socialIcons.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
              aria-label={social.name}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
    </>
  );
}
