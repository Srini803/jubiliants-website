import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ComputerVisionVisual } from "@/components/Visuals";

export const metadata = {
  title: "AI-Based CCTV Intelligence Platform | Smart Surveillance | Jubiliants",
  description: "AI-powered CCTV intelligence: real-time intrusion detection, safety compliance monitoring, fire/smoke alerts, and automated security analytics across 200+ camera deployments. Built on YOLO and edge inference.",
};

const applications = [
  { industry: "Industrial Sites", icon: "🏭", title: "Intrusion & Perimeter Detection", desc: "Detect unauthorised access, perimeter breaches, and after-hours movement across large facilities in real time — with instant alerts to security teams." },
  { industry: "Manufacturing", icon: "🦺", title: "Safety Gear Compliance", desc: "Automatically verify helmets, vests, and PPE compliance on factory floors and construction sites. Flag violations the moment they happen, not after an incident." },
  { industry: "Facilities", icon: "🔥", title: "Fire & Smoke Detection", desc: "Visual fire and smoke detection that works alongside traditional sensors — catching early-stage incidents in large open spaces where heat sensors are slow to react." },
  { industry: "Commercial", icon: "👥", title: "Crowd Density & Loitering", desc: "Monitor crowd density in real time, detect loitering near sensitive areas, and identify queue build-ups — without storing personally identifiable footage." },
  { industry: "Operations", icon: "⚙️", title: "Equipment Idle & Anomaly Detection", desc: "Identify idle machinery, blocked walkways, and unusual equipment behaviour automatically — reducing downtime and safety incidents." },
  { industry: "Retail & Offices", icon: "🔐", title: "Access Control & Surveillance", desc: "Face recognition for secure access, after-hours monitoring, and automated incident logging with timestamped video clips for compliance and audit." },
];

export default function ComputerVision() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>AI-Based CCTV Intelligence That Never Blinks</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We turn your existing CCTV infrastructure into an intelligent monitoring system — detecting intrusions, safety violations, and anomalies in real time, so nothing gets missed during a shift change or a long night.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Discuss Your CCTV Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["94%", "Detection accuracy"], ["< 5s", "Alert response time"], ["200+", "Cameras per deployment"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><ComputerVisionVisual /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">What it monitors</div>
              <h2 className="t-h2">One platform, every camera, every risk</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {applications.map((app, i) => (
              <RevealOnScroll key={app.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{app.icon}</span>
                    <span className="chip chip-blue" style={{ fontSize: "0.6875rem" }}>{app.industry}</span>
                  </div>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{app.title}</h3>
                  <p className="t-small">{app.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>How it works</div>
              <h2 className="t-h2">Transform Your Existing CCTV into an AI-Powered Intelligence Platform</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1rem" }} className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { cat: "Connect Cameras", items: ["Existing CCTV Compatible", "RTSP & ONVIF Support", "Cloud or On-Premise", "No Hardware Replacement"] },
              { cat: "AI Detection", items: ["Detect Risks in Real Time", "PPE & Safety Compliance", "Fire, Smoke & Intrusion Detection", "Custom AI Models"] },
              { cat: "Smart Alerts", items: ["Instant Notifications", "Email, SMS & Mobile Alerts", "Timestamped Video Evidence", "Escalation Workflows"] },
              { cat: "Actionable Insights", items: ["Centralized Dashboard", "Incident Analytics", "Compliance Reports", "Audit-Ready Logs"] },
            ].map((t, i) => (
              <RevealOnScroll key={t.cat} delay={i * 80}>
                <div className="card-flat" style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "0.875rem" }}>{t.cat}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {t.items.map(it => <li key={it} style={{ fontSize: "0.8125rem", color: "var(--text-2)" }}>{it}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"520px",marginBottom:"2.5rem"}}>
              <div className="section-label">Client results</div>
              <h2 className="t-h2">What we have delivered</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Perimeter Security</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Industrial</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Alfanar Engineering</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>94% incident detection accuracy</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Deployed AI video analytics across 200+ cameras for real-time intrusion detection, safety violations, and equipment anomaly alerts — with automated notifications in under 5 seconds.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Quality Inspection</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Precision Manufacturing</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>NN Inc.</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>99.2% defect detection rate</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built a computer vision inspection system that identifies dimensional defects, surface flaws, and assembly errors at 120 parts per minute on the production line — replacing manual QC.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Site Safety Monitoring</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Construction</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Fluor Corporation</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>62% reduction in safety incidents</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Implemented AI-powered CCTV monitoring across large construction sites to detect PPE non-compliance, restricted zone breaches, and near-miss events — triggering real-time supervisor alerts.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to make your CCTV intelligent?" sub="Share your camera setup and facility layout. We'll assess feasibility and propose a pilot deployment within weeks." primary="Book a CCTV Consultation" secondary="View Case Studies" />
    </>
  );
}
