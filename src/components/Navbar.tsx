"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const softwareSubs = [
  { label: "Custom Software Development", href: "/software-solutions/custom-software-development", desc: "Tailored enterprise applications" },
  { label: "Web Applications", href: "/software-solutions/web-applications", desc: "Scalable web platforms & portals" },
  { label: "Mobile Applications", href: "/software-solutions/mobile-applications", desc: "iOS, Android & cross-platform" },
  { label: "ERP Solutions", href: "/software-solutions/erp-solutions", desc: "Integrated enterprise resource planning" },
  { label: "SaaS Development", href: "/software-solutions/saas-development", desc: "Cloud-native SaaS products" },
  { label: "Cloud Solutions", href: "/software-solutions/cloud-solutions", desc: "Cloud migration & architecture" },
];
const aiSubs = [
  { label: "Agentic AI", href: "/artificial-intelligence/agentic-ai", desc: "Autonomous AI agent systems" },
  { label: "AI Automation", href: "/artificial-intelligence/ai-automation", desc: "Intelligent process automation" },
  { label: "Generative AI", href: "/artificial-intelligence/generative-ai", desc: "LLM-powered applications" },
  { label: "AI CCTV Intelligence", href: "/artificial-intelligence/computer-vision", desc: "Smart surveillance & monitoring" },
  { label: "AI Chatbots", href: "/artificial-intelligence/ai-chatbots", desc: "Conversational AI assistants" },
  { label: "Machine Learning", href: "/artificial-intelligence/machine-learning", desc: "Predictive analytics & ML models" },
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEx, setMobileEx] = useState<string|null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        {/* Logo */}
        <Link href="/" aria-label="Jubiliants — home" style={{display:"flex",alignItems:"center",textDecoration:"none"}}>
          <Logo size={46} />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex" style={{alignItems:"center",gap:"0.25rem"}}>
          <Link href="/" className="nav-link">Home</Link>

          <div className="nav-item" style={{display:"flex",alignItems:"center"}}>
            <span className="nav-link" style={{display:"flex",alignItems:"center",gap:"0.3rem",cursor:"default"}}>
              Software Solutions <ChevronDown/>
            </span>
            <div className="nav-dropdown" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minWidth:"440px"}}>
              {softwareSubs.map(s => (
                <Link key={s.href} href={s.href} className="nav-dd-item">
                  <span className="nav-dd-icon">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" fill="#1B75BB"/><rect x="9" y="2" width="5" height="5" rx="1" fill="#1B75BB" opacity="0.55"/><rect x="2" y="9" width="5" height="5" rx="1" fill="#1B75BB" opacity="0.55"/><rect x="9" y="9" width="5" height="5" rx="1" fill="#F7941D" opacity="0.8"/></svg>
                  </span>
                  <div><div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-1)"}}>{s.label}</div><div style={{fontSize:"0.7rem",color:"var(--text-4)"}}>{s.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item" style={{display:"flex",alignItems:"center"}}>
            <span className="nav-link" style={{display:"flex",alignItems:"center",gap:"0.3rem",cursor:"default"}}>
              AI Solutions <ChevronDown/>
            </span>
            <div className="nav-dropdown" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minWidth:"440px"}}>
              {aiSubs.map(s => (
                <Link key={s.href} href={s.href} className="nav-dd-item">
                  <span className="nav-dd-icon">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#29ABE2"/><circle cx="3" cy="5" r="1.5" fill="#29ABE2" opacity="0.6"/><circle cx="13" cy="5" r="1.5" fill="#29ABE2" opacity="0.6"/><circle cx="3" cy="11" r="1.5" fill="#29ABE2" opacity="0.6"/><circle cx="13" cy="11" r="1.5" fill="#29ABE2" opacity="0.6"/><line x1="8" y1="8" x2="3" y2="5" stroke="#29ABE2" strokeWidth="0.8" opacity="0.5"/><line x1="8" y1="8" x2="13" y2="5" stroke="#29ABE2" strokeWidth="0.8" opacity="0.5"/><line x1="8" y1="8" x2="3" y2="11" stroke="#29ABE2" strokeWidth="0.8" opacity="0.5"/><line x1="8" y1="8" x2="13" y2="11" stroke="#29ABE2" strokeWidth="0.8" opacity="0.5"/></svg>
                  </span>
                  <div><div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-1)"}}>{s.label}</div><div style={{fontSize:"0.7rem",color:"var(--text-4)"}}>{s.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/case-studies" className="nav-link">Case Studies</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="hidden lg:flex" style={{alignItems:"center",gap:"0.75rem"}}>
          <Link href="/contact" className="btn btn-primary btn-sm">Get a Free Consultation</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden" style={{color:"var(--text-2)",padding:"0.5rem"}} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M5 5l12 12M17 5l-12 12"/> : <path d="M3 7h18M3 12h18M3 17h18"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu-panel lg:hidden" style={{position:"absolute",left:0,right:0,background:"var(--bg-raised)",borderBottom:"1px solid var(--border)",boxShadow:"0 24px 48px -16px rgba(25,28,82,0.2)",padding:"1rem",maxHeight:"80vh",overflowY:"auto"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"0.25rem"}}>
            <Link href="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

            <button className="nav-link" style={{textAlign:"left",display:"flex",justifyContent:"space-between"}} onClick={() => setMobileEx(mobileEx==="sw"?null:"sw")}>
              Software Solutions <ChevronDown/>
            </button>
            {mobileEx === "sw" && (
              <div style={{paddingLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.25rem"}}>
                {softwareSubs.map(s => <Link key={s.href} href={s.href} className="nav-link" style={{fontSize:"0.875rem",color:"var(--text-3)"}} onClick={() => setMobileOpen(false)}>{s.label}</Link>)}
              </div>
            )}

            <button className="nav-link" style={{textAlign:"left",display:"flex",justifyContent:"space-between"}} onClick={() => setMobileEx(mobileEx==="ai"?null:"ai")}>
              AI Solutions <ChevronDown/>
            </button>
            {mobileEx === "ai" && (
              <div style={{paddingLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.25rem"}}>
                {aiSubs.map(s => <Link key={s.href} href={s.href} className="nav-link" style={{fontSize:"0.875rem",color:"var(--text-3)"}} onClick={() => setMobileOpen(false)}>{s.label}</Link>)}
              </div>
            )}

            <Link href="/case-studies" className="nav-link" onClick={() => setMobileOpen(false)}>Case Studies</Link>
            <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/contact" className="btn btn-primary" style={{marginTop:"0.5rem",justifyContent:"center"}} onClick={() => setMobileOpen(false)}>Get a Free Consultation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
