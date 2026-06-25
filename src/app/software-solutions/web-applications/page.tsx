import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { WebAppVisual, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "Web Application Development | Enterprise Web Apps | Jubiliants",
  description: "Custom web application development: enterprise portals, CRM platforms, e-commerce systems, and SaaS products. Built on modern stacks with React, Next.js, .NET and Node.js.",
};

const capabilities = [
  { title: "Enterprise Business Portals", desc: "Role-based multi-user platforms — customer portals, partner portals, employee self-service — with granular permissions, audit trails, and SSO integration." },
  { title: "CRM & Sales Platforms", desc: "Custom CRM systems with pipeline management, lead scoring, activity tracking, email integration, and sales reporting dashboards." },
  { title: "E-Commerce Platforms", desc: "Scalable product catalogues, cart and checkout flows, payment gateway integration, inventory sync, and order management — built for volume." },
  { title: "Business Intelligence Dashboards", desc: "Executive dashboards, automated reporting, and data visualisation tools connecting to multiple data sources in real time." },
  { title: "Workflow & Approval Systems", desc: "Replace email chains and spreadsheet tracking with digital workflows — automated routing, SLA monitoring, and full audit trails." },
  { title: "Progressive Web Apps (PWA)", desc: "Web apps that feel native on mobile — offline capability, push notifications, home screen installation, and app-store-free distribution." },
];

const techStack = [
  { cat: "Frontend", items: ["React / Next.js", "Angular", "Vue.js / Nuxt", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { cat: "Backend", items: [".NET / C# (ASP.NET)", "Node.js / Express", "Python / FastAPI", "Java / Spring Boot", "GraphQL APIs"] },
  { cat: "Database", items: ["PostgreSQL", "Microsoft SQL Server", "MongoDB", "Redis (cache)", "Elasticsearch"] },
  { cat: "DevOps & Cloud", items: ["Microsoft Azure", "AWS", "Docker / Kubernetes", "CI/CD — GitHub Actions", "Terraform (IaC)"] },
];

const features = [
  "Mobile-first, responsive design (WCAG 2.1 AA)",
  "Role-based access control (RBAC)",
  "SSO / OAuth 2.0 / SAML integration",
  "Real-time notifications (WebSockets)",
  "Multi-language & multi-currency support",
  "99.9% uptime SLA on production deployments",
  "Automated testing — unit, integration, E2E",
  "Performance-optimised — Lighthouse 90+",
];

export default function WebApplications() {
  return (
    <>
      {/* Hero with Web App Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Enterprise Web Applications That Scale With Your Business</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build high-performance web applications that replace manual processes, unify scattered data, and give your team a single platform to run the business — designed to handle thousands of users and years of data growth.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["150+", "Web apps delivered"], ["10+", "Years experience"], ["99.9%", "Uptime SLA"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><WebAppVisual /></div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">What we build</div>
              <h2 className="t-h2">Web application types we specialise in</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{c.title}</h3>
                  <p className="t-small">{c.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Tech Stack two-col */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gap: "5rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Included as standard</div>
                <h2 className="t-h2" style={{ marginBottom: "1.25rem" }}>Enterprise-grade, out of the box</h2>
                <p className="t-body" style={{ marginBottom: "1.5rem" }}>These aren't optional extras — they're part of every web application we deliver.</p>
                <ul className="check-list">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div>
                <div className="section-label">Technology stack</div>
                <h2 className="t-h2" style={{ marginBottom: "1.25rem" }}>Modern, proven, and maintainable</h2>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {techStack.map(t => (
                    <div key={t.cat} className="card-flat" style={{ padding: "1.25rem" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "0.75rem" }}>{t.cat}</div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {t.items.map(item => <li key={item} style={{ fontSize: "0.8125rem", color: "var(--text-2)" }}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Our delivery process</div>
              <h2 className="t-h2">From brief to live — a structured approach</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Requirements", d: "Stakeholder interviews, UX discovery, data modelling, and technical specification." },
              { n: "02", t: "Architecture", d: "System design, API contracts, security model, infrastructure plan, and tech stack selection." },
              { n: "03", t: "Agile Build", d: "2-week sprints, weekly demos, live staging environment. You can test at every stage." },
              { n: "04", t: "Go-Live and Support", d: "Load-tested deployment, user training, monitoring setup, and ongoing enhancement SLA." },
            ].map((p, i) => (
              <RevealOnScroll key={p.n} delay={i * 80}>
                <div className="card-flat" style={{ padding: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.5rem", color: "var(--blue-light)", marginBottom: "0.5rem" }}>{p.n}</div>
                  <h4 className="t-h4" style={{ marginBottom: "0.5rem" }}>{p.t}</h4>
                  <p className="t-small">{p.d}</p>
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
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Web Platform</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>FinTech</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>FinServe Solutions</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>3× faster transaction processing</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built a multi-tenant web platform handling 800+ daily transactions with role-based access, audit trails, and real-time compliance dashboards.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Student Portal</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Education</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Narayana Group of Schools</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>15,000 students on one platform</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Developed a comprehensive student information web portal integrating admissions, attendance, fee collection, and parent communication into a single interface.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Operations Dashboard</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Manufacturing</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Mayville Engineering</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>100% real-time production visibility</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Created a web-based operations dashboard connecting shop-floor data to management reporting — eliminating daily manual status calls and Excel-based tracking.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to build your web application?" sub="Share your requirements and we'll scope it, price it, and build it — on time and on budget." primary="Start the Conversation" secondary="View Case Studies" />
    </>
  );
}
