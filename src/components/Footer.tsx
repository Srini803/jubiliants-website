import Link from "next/link";
import Logo from "@/components/Logo";

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
    { label: "AI CCTV Intelligence", href: "/artificial-intelligence/computer-vision" },
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
    <footer style={{background:"var(--ink)",borderTop:"3px solid var(--gold)"}}>
      <div className="wrap" style={{padding:"4rem 1.5rem 2rem"}}>
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div style={{marginBottom:"1.25rem"}}>
              <Logo size={46} light />
            </div>
            <p style={{fontSize:"0.875rem",color:"rgba(245,242,234,0.62)",lineHeight:1.65,marginBottom:"1.25rem"}}>Custom software development and AI solutions company. Building intelligent software that drives business growth since 2015.</p>
            <div style={{fontSize:"0.8125rem",color:"rgba(245,242,234,0.45)",lineHeight:1.7}}>
              <div>08th Floor, SLN Terminus, Survey No. 133</div>
              <div>Beside Botanical Gardens, Gachibowli</div>
              <div>Hyderabad, Telangana 500032, India</div>
              <a href="mailto:info@jubiliants.com" style={{color:"var(--sky)",marginTop:"0.5rem",display:"block"}}>info@jubiliants.com</a>
            </div>
          </div>
          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <div style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1rem"}}>{col.heading}</div>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                {col.links.map(l => <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(245,242,234,0.12)",paddingTop:"1.5rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"0.75rem"}}>
          <p style={{fontSize:"0.8125rem",color:"rgba(245,242,234,0.45)"}}>&copy; 2015 Jubiliants Software Solutions. All rights reserved.</p>
          <p style={{fontFamily:"var(--font-heading)",fontStyle:"italic",fontSize:"0.875rem",color:"rgba(245,242,234,0.55)"}}>Delivering Success<span style={{color:"var(--gold)"}}> ✦</span></p>
        </div>
      </div>
    </footer>
  );
}
