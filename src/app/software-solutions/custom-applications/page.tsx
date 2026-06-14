import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CustomAppsVisual, ComparisonTable, TechStackGrid, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "Custom Application Development | Enterprise Software | Jubiliants",
  description: "Custom web and mobile application development: enterprise portals, CRM, ERP, healthcare platforms, education systems, and logistics software. 300+ applications delivered since 2015.",
};

const appCategories = [
  { title: "Enterprise Web Applications", desc: "Multi-user business platforms with role-based access, real-time dashboards, audit trails, and SSO — built for thousands of concurrent users across multiple locations." },
  { title: "CRM & Sales Platforms", desc: "Custom CRM systems with pipeline management, lead scoring, activity tracking, email integration, and executive reporting — built around your sales process, not a vendor's idea of it." },
  { title: "Healthcare Platforms", desc: "Hospital information systems, patient portals, clinical workflow tools, and healthcare analytics — with HIPAA-aware design and compliance built in from day one." },
  { title: "Education Management Systems", desc: "Student information systems, learning management platforms, admission portals, fee management, and parent communication tools for schools and universities." },
  { title: "Logistics & Operations Software", desc: "Fleet management, delivery tracking, warehouse systems, route optimisation, and field service platforms that replace fragmented WhatsApp-and-spreadsheet operations." },
  { title: "Workflow Automation Platforms", desc: "Replace email-based approvals, paper forms, and manual handoffs with digital workflows — automated routing, SLA tracking, escalation rules, and full audit trails." },
];

const compRows = [
  { feature: "Fits your exact workflows", a: false, b: true },
  { feature: "No per-user licensing fees", a: false, b: true },
  { feature: "Integrates with existing tools", a: "Limited", b: "Full API integration" },
  { feature: "Source code ownership", a: false, b: true },
  { feature: "Vendor lock-in risk", a: "High", b: "Zero" },
  { feature: "Time to customise", a: "Months + cost", b: "Included in build" },
  { feature: "Industry-specific logic", a: "Generic", b: "Purpose-built" },
  { feature: "Data portability", a: "Restricted", b: "Full ownership" },
];

export default function CustomApplications() {
  return (
    <>
      {/* Hero with App Portfolio Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Applications Built for Your Business — Not a Generic Template</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>Every organisation is different. Off-the-shelf software creates workarounds. We build purpose-made applications that fit your processes, your data, and your team — from healthcare platforms and education systems to logistics software and enterprise portals.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ padding: "0.875rem", background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,.25)", borderRadius: "8px", fontSize: "0.8125rem", color: "#93C5FD" }}>
                ✓ 300+ custom applications delivered across 8 industries since 2015
              </div>
            </div>
            <div className="flex hero-visual-col"><CustomAppsVisual /></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "300+", label: "Applications Delivered", sub: "Web, mobile, and enterprise" },
              { val: "200+", label: "Active Customers", sub: "Across India and globally" },
              { val: "99.7%", label: "Average SLA Uptime", sub: "Production systems" },
              { val: "95%", label: "Client Retention", sub: "Customers who return for more" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Application categories */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Application types</div>
              <h2 className="t-h2">Custom software across every industry vertical</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {appCategories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{cat.title}</h3>
                  <p className="t-small">{cat.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <div className="section-label" style={{ justifyContent: "center" }}>Custom vs off-the-shelf</div>
                <h2 className="t-h2">Why custom-built wins every time</h2>
                <p className="t-body" style={{ marginTop: "0.75rem" }}>Generic platforms force your team to work around the software. Custom-built applications are designed around your team.</p>
              </div>
              <ComparisonTable
                colA="Off-the-shelf (SAP / Salesforce)"
                colB="Jubiliants Custom Build"
                rows={compRows}
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gap: "5rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">What's included in every project</div>
                <h2 className="t-h2" style={{ marginBottom: "1.25rem" }}>Enterprise-grade, out of the box</h2>
                <ul className="check-list">
                  {[
                    "Full source code and IP ownership",
                    "Role-based access control and SSO integration",
                    "Automated testing — unit, integration, end-to-end",
                    "Performance benchmarking (Lighthouse 90+)",
                    "Security scanning and OWASP compliance",
                    "Dedicated project manager, weekly demos",
                    "Post-launch support and SLA agreement",
                    "Documentation and user training included",
                  ].map(l => <li key={l}>{l}</li>)}
                </ul>
                <div style={{ marginTop: "2rem" }}>
                  <Link href="/contact" className="btn btn-primary">Start Your Project →</Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="section-label" style={{ marginBottom: "1.25rem" }}>Technology we build with</div>
              <TechStackGrid categories={[
                { name: "Frontend", tools: ["React / Next.js", "Angular 17", "Vue.js / Nuxt", "TypeScript", "Tailwind CSS"] },
                { name: "Backend", tools: [".NET / C#", "Node.js", "Python / FastAPI", "Java / Spring Boot"] },
                { name: "Mobile", tools: ["Flutter (cross-platform)", "Swift (iOS)", "Kotlin (Android)", "React Native"] },
                { name: "Database & Cloud", tools: ["PostgreSQL", "SQL Server", "MongoDB", "Azure", "AWS"] },
              ]} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTABand title="Ready to build your custom application?" sub="Tell us what you need. We'll scope it, price it, and build it — on time and on budget." primary="Start the Conversation" secondary="View Our Work" />
    </>
  );
}
