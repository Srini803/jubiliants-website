"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const softwareSubs = [
  { label: "Digital Transformation", href: "/software-solutions/digital-transformation", icon: "⚡" },
  { label: "Custom Applications", href: "/software-solutions/custom-applications", icon: "🖥" },
  { label: "Mobile Applications", href: "/software-solutions/mobile-applications", icon: "📱" },
];

const aiSubs = [
  { label: "Agentic AI", href: "/artificial-intelligence/agentic-ai", icon: "🤖" },
  { label: "Automation with AI", href: "/artificial-intelligence/automation-with-ai", icon: "⚙️" },
  { label: "Digital Transformation with AI", href: "/artificial-intelligence/digital-transformation-with-ai", icon: "🚀" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-main">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg" style={{background:"linear-gradient(135deg,#1E6FD9,#00C2FF)"}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3" fill="white"/>
                  <circle cx="4" cy="5" r="2" fill="white" opacity="0.7"/>
                  <circle cx="16" cy="5" r="2" fill="white" opacity="0.7"/>
                  <circle cx="4" cy="15" r="2" fill="white" opacity="0.7"/>
                  <circle cx="16" cy="15" r="2" fill="white" opacity="0.7"/>
                  <line x1="10" y1="10" x2="4" y2="5" stroke="white" strokeWidth="1" opacity="0.5"/>
                  <line x1="10" y1="10" x2="16" y2="5" stroke="white" strokeWidth="1" opacity="0.5"/>
                  <line x1="10" y1="10" x2="4" y2="15" stroke="white" strokeWidth="1" opacity="0.5"/>
                  <line x1="10" y1="10" x2="16" y2="15" stroke="white" strokeWidth="1" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="font-display font-800 text-white text-lg leading-tight" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Jubiliants</div>
              <div className="text-xs" style={{color:"var(--slate-muted)",fontFamily:"Inter,sans-serif",lineHeight:1}}>Software Solutions</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-white" style={{color:"var(--slate-light)",fontFamily:"Inter,sans-serif"}}>Home</Link>

            {/* Software Solutions Dropdown */}
            <div className="nav-item relative px-4 py-2 cursor-pointer">
              <span className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-white" style={{color:"var(--slate-light)",fontFamily:"Inter,sans-serif"}}>
                Software Solutions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4"/></svg>
              </span>
              <div className="dropdown-menu">
                {softwareSubs.map(s => (
                  <Link key={s.href} href={s.href} className="dropdown-item">
                    <span className="icon text-xs">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Dropdown */}
            <div className="nav-item relative px-4 py-2 cursor-pointer">
              <span className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-white" style={{color:"var(--slate-light)",fontFamily:"Inter,sans-serif"}}>
                Artificial Intelligence
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4"/></svg>
              </span>
              <div className="dropdown-menu">
                {aiSubs.map(s => (
                  <Link key={s.href} href={s.href} className="dropdown-item">
                    <span className="icon text-xs">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/case-studies" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-white" style={{color:"var(--slate-light)",fontFamily:"Inter,sans-serif"}}>Case Studies</Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-white" style={{color:"var(--slate-light)",fontFamily:"Inter,sans-serif"}}>About Us</Link>
            <Link href="/contact" className="btn-primary ml-3 text-sm py-2.5 px-5">Contact Us</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t" style={{borderColor:"rgba(0,194,255,0.1)"}}>
            <div className="flex flex-col gap-1 pt-4">
              <Link href="/" className="px-4 py-2.5 text-sm rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileOpen(false)}>Home</Link>
              
              <button className="px-4 py-2.5 text-sm text-left flex justify-between items-center rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileExpanded(mobileExpanded === 'sw' ? null : 'sw')}>
                Software Solutions <span>{mobileExpanded === 'sw' ? '−' : '+'}</span>
              </button>
              {mobileExpanded === 'sw' && (
                <div className="pl-4 flex flex-col gap-1">
                  {softwareSubs.map(s => <Link key={s.href} href={s.href} className="px-4 py-2 text-sm rounded-lg" style={{color:"var(--cyan-accent)"}} onClick={() => setMobileOpen(false)}>{s.icon} {s.label}</Link>)}
                </div>
              )}

              <button className="px-4 py-2.5 text-sm text-left flex justify-between items-center rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileExpanded(mobileExpanded === 'ai' ? null : 'ai')}>
                Artificial Intelligence <span>{mobileExpanded === 'ai' ? '−' : '+'}</span>
              </button>
              {mobileExpanded === 'ai' && (
                <div className="pl-4 flex flex-col gap-1">
                  {aiSubs.map(s => <Link key={s.href} href={s.href} className="px-4 py-2 text-sm rounded-lg" style={{color:"var(--cyan-accent)"}} onClick={() => setMobileOpen(false)}>{s.icon} {s.label}</Link>)}
                </div>
              )}

              <Link href="/case-studies" className="px-4 py-2.5 text-sm rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link href="/about" className="px-4 py-2.5 text-sm rounded-lg" style={{color:"var(--slate-light)"}} onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contact" className="btn-primary mt-2 text-center justify-center" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
