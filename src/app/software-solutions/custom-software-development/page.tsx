import Link from "next/link";
import { CustomSWArchVisual, StatCallout } from "@/components/Visuals";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Custom Software Development | Enterprise Applications | Jubiliants",
  description: "Jubiliants builds custom enterprise software including web apps, CRM, ERP, portals, and workflow automation. 300+ projects delivered. Get a free consultation.",
};

const solutions = [
  { title: "Enterprise Web Applications", desc: "Multi-user business platforms with role-based access, real-time dashboards, integrations, and audit trails. Built for thousands of concurrent users." },
  { title: "CRM Systems", desc: "Customer relationship management platforms that track leads, manage pipelines, automate follow-ups, and integrate with email and telephony systems." },
  { title: "ERP Platforms", desc: "Integrated enterprise resource planning covering finance, HR, procurement, inventory, production, and reporting in a single unified system." },
  { title: "Customer & Partner Portals", desc: "Self-service portals that reduce support costs and improve customer experience — document access, order tracking, ticketing, and account management." },
  { title: "Workflow Automation Systems", desc: "Replace manual approval chains, email-based processes, and spreadsheet tracking with automated, auditable digital workflows." },
  { title: "Data & Reporting Platforms", desc: "Centralised BI dashboards, automated reports, and executive scorecards that give leadership teams real-time visibility into business performance." },
];

const techStack = [
  { cat: "Frontend", items: ["React","Next.js","Angular","Vue.js","TypeScript"] },
  { cat: "Backend", items: [".NET / C#","Node.js","Java Spring","Python / Django","REST & GraphQL APIs"] },
  { cat: "Database", items: ["PostgreSQL","SQL Server","MySQL","MongoDB","Redis"] },
  { cat: "Infrastructure", items: ["Microsoft Azure","AWS","Docker","Kubernetes","CI/CD Pipelines"] },
];

export default function CustomSoftwareDevelopment() {
  return (
    <>
      {/* Hero with Architecture Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: "3rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Custom Software Built Around Your Business</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>Off-the-shelf software forces your team to adapt to the tool. We build the tool around your team — tailor-made applications that fit your workflows, integrate with your systems, and scale as you grow.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Get a Free Consultation</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ padding: "0.875rem", background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,.25)", borderRadius: "8px", fontSize: "0.8125rem", color: "#93C5FD" }}>
                ✓ 300+ enterprise applications delivered since 2015
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><CustomSWArchVisual /></div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"600px",marginBottom:"2.5rem"}}>
              <div className="section-label">What we build</div>
              <h2 className="t-h2">Application types we specialise in</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
            {solutions.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--blue-dim)",border:"1px solid rgba(37,99,235,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.875rem"}}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" fill="#3B82F6"/><rect x="9" y="2" width="5" height="5" rx="1" fill="#3B82F6" opacity="0.6"/><rect x="2" y="9" width="5" height="5" rx="1" fill="#3B82F6" opacity="0.6"/><rect x="9" y="9" width="5" height="5" rx="1" fill="#3B82F6" opacity="0.3"/></svg>
                  </div>
                  <h3 className="t-h4" style={{marginBottom:"0.5rem"}}>{s.title}</h3>
                  <p className="t-small">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Our process</div>
              <h2 className="t-h2">How we deliver custom software</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.25rem",maxWidth:"800px",margin:"0 auto"}} className="grid grid-cols-1 md:grid-cols-2">
            {[
              { n:"1", t:"Requirements & Discovery", d:"We interview stakeholders, map workflows, identify integration points, and document functional and non-functional requirements before scoping the project." },
              { n:"2", t:"Architecture & Design", d:"System design, data modelling, API contracts, UI/UX wireframes, and security architecture are agreed before development begins." },
              { n:"3", t:"Agile Development", d:"Two-week sprints with working software at every milestone. Regular demos ensure alignment and give you control over priorities." },
              { n:"4", t:"Testing & Delivery", d:"Functional, performance, and security testing before every release. We handle cloud deployment, user training, and go-live support." },
            ].map((p, i) => (
              <RevealOnScroll key={p.n} delay={i * 80}>
                <div className="card-flat" style={{padding:"1.5rem",display:"flex",gap:"1rem"}}>
                  <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"var(--blue-dim)",border:"1px solid rgba(37,99,235,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:700,color:"var(--blue-light)",flexShrink:0}}>{p.n}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>{p.t}</div>
                    <p className="t-small">{p.d}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Technology</div>
              <h2 className="t-h2">Modern stack, pragmatic choices</h2>
              <p className="t-body" style={{maxWidth:"500px",margin:"0.75rem auto 0"}}>We recommend the best tool for your specific requirements — not the one we're most comfortable with.</p>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.25rem"}} className="grid grid-cols-2 lg:grid-cols-4">
            {techStack.map((t, i) => (
              <RevealOnScroll key={t.cat} delay={i * 80}>
                <div className="card-flat" style={{padding:"1.25rem"}}>
                  <div style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--blue-light)",marginBottom:"0.875rem"}}>{t.cat}</div>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                    {t.items.map(item => <li key={item} style={{fontSize:"0.875rem",color:"var(--text-2)"}}>{item}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center"}} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Why choose us</div>
                <h2 className="t-h2" style={{marginBottom:"1rem"}}>Software that fits. Not software you fit around.</h2>
                <p className="t-body" style={{marginBottom:"1.5rem"}}>Generic software creates workarounds. Workarounds create inefficiency. We build applications that match exactly how your team works today — and evolve as you scale.</p>
                <ul className="check-list">
                  {["Source code ownership — it's yours, always","No vendor lock-in on licensing or infrastructure","Fixed-price projects available for well-defined scope","95% client retention rate — we rarely lose customers","Direct access to the developers building your system"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                {[
                  { metric: "300+", label: "Custom applications delivered" },
                  { metric: "60%", label: "Average reduction in manual process time" },
                  { metric: "10+", label: "Years of enterprise development experience" },
                  { metric: "4 hrs", label: "Average response time to support requests" },
                ].map(m => (
                  <div key={m.label} className="card-flat" style={{padding:"1.25rem",display:"flex",alignItems:"center",gap:"1.25rem"}}>
                    <div style={{fontWeight:700,fontSize:"1.75rem",color:"var(--text-1)",letterSpacing:"-0.01em",minWidth:"70px"}}>{m.metric}</div>
                    <div style={{fontSize:"0.9375rem",color:"var(--text-2)"}}>{m.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTABand title="Ready to build your custom application?" sub="Tell us what you need. We'll scope it, price it, and build it — on time and on budget." primary="Start the Conversation" secondary="View Our Work" />
    </>
  );
}
