import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-900/80 px-4 sm:px-8 lg:px-16 py-8">
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-4 text-xs text-zinc-600">
        © {new Date().getFullYear()} Roshan Sharma — Software Developer.
        Available for remote and freelance work.
      </p>
    </footer>
  );
}
