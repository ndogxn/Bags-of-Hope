import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BagOfHopeLogo from "./BagOfHopeLogo";

const navLinks = [
  { label: "What We Do", href: "#what-we-do", activeColor: "text-sky" },
  { label: "How It Works", href: "#how-it-works", activeColor: "text-tertiary" },
  { label: "Why", href: "#why", activeColor: "text-rose" },
  { label: "Write a Letter", href: "#write-a-letter", activeColor: "text-sky" },
  { label: "Donate", href: "#donate", activeColor: "text-secondary" },
  { label: "Contact", href: "#contact", activeColor: "text-primary" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-rose">
          <BagOfHopeLogo className="w-12 h-12" />
          <span className="font-heading text-xl font-bold text-foreground">Bags of Hope</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body font-medium transition-colors ${activeSection === link.href ? link.activeColor : "text-muted-foreground hover:text-foreground"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-body font-medium py-2 ${activeSection === link.href ? link.activeColor : "text-muted-foreground"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
