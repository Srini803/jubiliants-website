import Link from "next/link";

const cols = [
  { heading: "Software Solutions", links: [
    { label: "Custom Software Development", href: "/software-solutions/custom-software-development" },
    { label: "Web Applications", href: "/software-solutions/web-applications" },
    { label: "Mobile Applications", href: "/software-solutions/mobile-applications" },
    { label: "ERP Solutions", href: "/software-solutions/erp-solutions" },
    { label: "SaaS Development", href: "/software-solutions/saas-development" },
    { label: "Cloud Solutions", href: "/software-solutions/cloud-solutions" },
  ]},
  { heading: "AI Solutions", links: [
    { label: "Agentic AI", href: "/artificial-intelligence/agentic-ai" },
    { label: "AI Automation", href: "/artificial-intelligence/ai-automation" },
    { label: "Generative AI", href: "/artificial-intelligence/generative-ai" },
    { label: "Computer Vision", href: "/artificial-intelligence/computer-vision" },
    { label: "AI Chatbots", href: "/artificial-intelligence/ai-chatbots" },
    { label: "Machine Learning", href: "/artificial-intelligence/machine-learning" },
  ]},
  { heading: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries We Serve", href: "/about#industries" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ]},
];

export default function Footer() {
  return (
    <footer style={{background:"#080F1C",borderTop:"1px solid var(--border)"}}>
      <div className="wrap" style={{padding:"4rem 1.5rem 2rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.4fr repeat(3, 1fr)",gap:"3rem",marginBottom:"3rem"}} className="lg:grid-cols-4 grid grid-cols-1 md:grid-cols-2">
          {/* Brand col */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1rem"}}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#2563EB"/><path d="M8 16L14 10L20 16L26 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 22L14 16L20 22L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
              <span style={{fontWeight:700,color:"var(--text-1)"}}>Jubiliants</span>
            </div>
            <p style={{fontSize:"0.875rem",color:"var(--text-3)",lineHeight:1.65,marginBottom:"1.25rem"}}>Custom software development and AI solutions company. Building intelligent software that drives business growth since 2015.</p>
            <div style={{fontSize:"0.8125rem",color:"var(--text-4)",lineHeight:1.7}}>
              <div>B-8, Indian Airlines Colony</div>
              <div>Begumpet, Hyderabad 500016</div>
              <div>Telangana, India</div>
              <a href="mailto:srini@jubiliants.com" style={{color:"var(--blue-light)",marginTop:"0.5rem",display:"block"}}>srini@jubiliants.com</a>
            </div>
          </div>
          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <div style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--text-3)",marginBottom:"1rem"}}>{col.heading}</div>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                {col.links.map(l => <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid var(--border)",paddingTop:"1.5rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"0.75rem"}}>
          <p style={{fontSize:"0.8125rem",color:"var(--text-4)"}}>© {new Date().getFullYear()} Jubiliants Software Solutions Pvt. Ltd. All rights reserved.</p>
          <p style={{fontSize:"0.8125rem",color:"var(--text-4)"}}>Founded 2015 · Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
