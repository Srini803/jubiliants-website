import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"var(--navy-950)",borderTop:"1px solid rgba(0,194,255,0.08)"}}>
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"linear-gradient(135deg,#1E6FD9,#00C2FF)"}}>
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
              <div>
                <div className="font-display font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Jubiliants</div>
                <div className="text-xs" style={{color:"var(--slate-muted)"}}>Software Solutions</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{color:"var(--slate-muted)"}}>Transforming businesses through custom software & AI innovation since 2015.</p>
            <div className="text-sm" style={{color:"var(--slate-muted)"}}>
              <div>B-8, Indian Airlines Colony</div>
              <div>Prakash Nagar, Begumpet</div>
              <div>Hyderabad, Telangana, India</div>
              <a href="mailto:srini@jubiliants.com" className="mt-2 block" style={{color:"var(--cyan-accent)"}}>srini@jubiliants.com</a>
            </div>
          </div>

          {/* Software Solutions */}
          <div>
            <h4 className="font-display font-600 text-white mb-4 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700,letterSpacing:"0.05em"}}>Software Solutions</h4>
            <ul className="space-y-2.5">
              {[
                ["Digital Transformation", "/software-solutions/digital-transformation"],
                ["Custom Applications", "/software-solutions/custom-applications"],
                ["Mobile Applications", "/software-solutions/mobile-applications"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm transition-colors hover:text-white" style={{color:"var(--slate-muted)"}}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div>
            <h4 className="font-display font-600 text-white mb-4 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700,letterSpacing:"0.05em"}}>Artificial Intelligence</h4>
            <ul className="space-y-2.5">
              {[
                ["Agentic AI", "/artificial-intelligence/agentic-ai"],
                ["Automation with AI", "/artificial-intelligence/automation-with-ai"],
                ["Digital Transformation with AI", "/artificial-intelligence/digital-transformation-with-ai"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm transition-colors hover:text-white" style={{color:"var(--slate-muted)"}}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-white mb-4 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700,letterSpacing:"0.05em"}}>Company</h4>
            <ul className="space-y-2.5">
              {[
                ["Case Studies", "/case-studies"],
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm transition-colors hover:text-white" style={{color:"var(--slate-muted)"}}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gradient"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{color:"var(--slate-muted)"}}>© {new Date().getFullYear()} Jubiliants Software Solutions. All rights reserved.</p>
          <p className="text-sm" style={{color:"var(--slate-muted)"}}>Founded 2015 · Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
