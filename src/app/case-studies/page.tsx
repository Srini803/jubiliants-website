import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CaseStudiesDashVisual, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "Case Studies | Proven Client Outcomes | Jubiliants Software Solutions",
  description: "How Jubiliants has helped healthcare, manufacturing, education, logistics, and financial services organisations achieve measurable outcomes with custom software and AI.",
};

const cases = [
  {
    industry: "Healthcare", client: "Apollo Health Group",
    title: "Integrated hospital management system for a 5-hospital group",
    challenge: "Five hospitals on different disconnected systems — patient data fragmented, billing delayed by 3–5 days, management unable to see real-time operational metrics.",
    solution: "Unified HIMS covering patient registration, OPD/IPD management, billing, pharmacy, inventory, and management dashboards. Single sign-on across all five sites.",
    results: [{ n: "60%", l: "reduction in admin workload" }, { n: "500+", l: "patients processed daily" }, { n: "Real-time", l: "cross-hospital visibility" }, { n: "2 weeks", l: "faster monthly close" }],
    tags: ["Custom Software", "Healthcare", "ERP"], duration: "9 months",
  },
  {
    industry: "Manufacturing", client: "Varun Industries",
    title: "End-to-end ERP replacing 12 spreadsheet-based processes",
    challenge: "Production planning, inventory, purchasing, and finance tracked in separate Excel files. Errors were common, reporting took days, and management had no real-time visibility.",
    solution: "Custom ERP integrating procurement, production planning, inventory, quality control, sales, and financial reporting. Live management dashboard with KPIs.",
    results: [{ n: "45%", l: "fewer inventory discrepancies" }, { n: "3×", l: "faster management reporting" }, { n: "12", l: "spreadsheet processes eliminated" }, { n: "100%", l: "real-time production visibility" }],
    tags: ["ERP", "Manufacturing", "Data Analytics"], duration: "11 months",
  },
  {
    industry: "FinTech / AI", client: "FinServe Solutions",
    title: "AI customer service agent deflects 65% of support tickets",
    challenge: "Growing support ticket volumes — over 800 tickets per day — overwhelming a team of 15 agents. Response times exceeded 4 hours. Customer satisfaction declining.",
    solution: "Agentic AI customer service system integrated with Salesforce CRM and knowledge base. Agent handles tier-1 and tier-2 queries autonomously, escalates with full context.",
    results: [{ n: "65%", l: "ticket deflection rate" }, { n: "< 30s", l: "average first response time" }, { n: "40%", l: "CSAT score improvement" }, { n: "₹1.2Cr", l: "annual support cost saving" }],
    tags: ["Agentic AI", "Automation", "FinTech"], duration: "6 weeks",
  },
  {
    industry: "Education", client: "Narayana Group of Schools",
    title: "Student information system and mobile app for 15,000 students",
    challenge: "Admissions, attendance, fee management, and parent communication handled through disconnected tools and manual registers. Parent complaint volumes rising.",
    solution: "Comprehensive SIMS with Android and iOS mobile apps for students, parents, and teachers. Integrated payment gateway for fee collection.",
    results: [{ n: "15,000", l: "students on the platform" }, { n: "90%", l: "reduction in late fee collection" }, { n: "4.7/5", l: "parent app satisfaction" }, { n: "Zero", l: "paper registers in daily ops" }],
    tags: ["Custom Software", "Mobile App", "Education"], duration: "7 months",
  },
  {
    industry: "Logistics", client: "FastTrack Logistics",
    title: "Field service management app for 200 delivery agents",
    challenge: "Field agents used WhatsApp for task assignments. Proof of delivery was paper-based. Managers had no real-time visibility and customer complaints went unresolved for days.",
    solution: "Android mobile app with offline capability, GPS tracking, digital proof of delivery, and automated customer notifications. Live operations dashboard for managers.",
    results: [{ n: "35%", l: "improvement in on-time delivery" }, { n: "200", l: "agents on the platform" }, { n: "Real-time", l: "delivery status tracking" }, { n: "80%", l: "reduction in customer queries" }],
    tags: ["Mobile App", "Logistics", "Operations"], duration: "5 months",
  },
  {
    industry: "Healthcare / AI", client: "MedCare Diagnostics",
    title: "AI-powered invoice and claims processing automation",
    challenge: "Finance team manually processed 600+ insurance claim forms per day. High error rate, delays caused payment hold-ups, staff burning out.",
    solution: "Intelligent document processing using computer vision and LLMs to extract, validate, and route claim data. Integrated with billing system and insurer APIs.",
    results: [{ n: "75%", l: "reduction in processing time" }, { n: "98%", l: "data extraction accuracy" }, { n: "600+", l: "documents processed daily" }, { n: "₹80L", l: "annual salary cost avoided" }],
    tags: ["AI Automation", "Document Processing", "Healthcare"], duration: "4 months",
  },
  {
    industry: "AI / Security", client: "Alfanar Engineering",
    title: "AI-based CCTV intelligence platform for industrial facility monitoring",
    challenge: "A large industrial facility with 200+ CCTV cameras relied on manual monitoring by security staff working in shifts. Incidents such as unauthorised access, safety violations, and equipment anomalies were often missed or reported with significant delays, creating safety and compliance risks.",
    solution: "Deployed a real-time AI video analytics platform integrating with the existing CCTV infrastructure. The system uses computer vision models to detect intrusions, safety gear violations (helmets, vests), fire and smoke, crowd density anomalies, and equipment idle states. Automated alerts are sent to security and operations teams via SMS, email, and an operations dashboard. All incidents are logged with timestamped video clips for audit and compliance.",
    results: [{ n: "94%", l: "incident detection accuracy" }, { n: "< 5s", l: "real-time alert response time" }, { n: "200+", l: "cameras monitored simultaneously" }, { n: "60%", l: "reduction in security staffing cost" }],
    tags: ["Computer Vision", "AI", "Industrial Security"], duration: "6 months",
  },
  {
    industry: "AI / Operations", client: "Weidmüller GmbH",
    title: "Virtual voice assistant to automate customer service and field operations",
    challenge: "A global industrial connectivity solutions company handling 1,000+ daily service requests struggled with high call centre volumes, slow ticket creation, and coordination delays between customer-facing staff and field technicians. Manual call handling was costly and response times were lagging SLA targets.",
    solution: "Built a multilingual AI voice assistant integrated with the company's service management platform. The assistant handles inbound customer calls to log service requests, provides status updates on existing tickets, and routes urgent escalations to human agents. For field operations, a voice-enabled mobile interface allows technicians to update job status, request parts, and access work order details hands-free. Natural language understanding supports English and German.",
    results: [{ n: "70%", l: "of service calls handled autonomously" }, { n: "3×", l: "faster ticket creation vs manual" }, { n: "English + German", l: "multilingual voice support" }, { n: "€1.4M", l: "annual call centre cost saving" }],
    tags: ["Voice AI", "Agentic AI", "Operations Automation"], duration: "7 months",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero with dashboard visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Case Studies</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Real Projects. Measurable Outcomes.</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We don't showcase concept demos or stock-photography mockups. Every case study here is a production system, used daily by real businesses — with numbers to back them up. Six of the most impactful below.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Become Our Next Success Story</Link>
                <Link href="/about" className="btn btn-secondary">About Jubiliants</Link>
              </div>
            </div>
            <div className="flex hero-visual-col"><CaseStudiesDashVisual /></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "300+", label: "Projects Delivered", sub: "Across 8 industries globally" },
              { val: "58%", label: "Avg Efficiency Gain", sub: "Across all client deployments" },
              { val: "₹180Cr+", label: "Business Value Created", sub: "Estimated client outcomes" },
              { val: "95%", label: "Client Retention", sub: "Customers who return for more work" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Case study cards */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 3rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Selected case studies</div>
              <h2 className="t-h2">Eight projects that changed how businesses operate</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {cases.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 60}>
                <div className="card-flat" style={{ padding: "2rem" }}>
                  <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                      <span className="chip chip-blue">{c.industry}</span>
                      {c.tags.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-4)", whiteSpace: "nowrap" }}>{c.duration}</span>
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-4)", fontWeight: 500, marginBottom: "0.375rem" }}>{c.client}</div>
                  <h3 className="t-h3" style={{ marginBottom: "1.25rem" }}>{c.title}</h3>
                  <div style={{ display: "grid", gap: "2rem", marginBottom: "1.5rem" }} className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-4)", marginBottom: "0.375rem" }}>THE PROBLEM</div>
                      <p className="t-body">{c.challenge}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-4)", marginBottom: "0.375rem" }}>THE SOLUTION</div>
                      <p className="t-body">{c.solution}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                    <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "#22C55E", marginBottom: "0.875rem" }}>OUTCOMES</div>
                    <div style={{ display: "grid", gap: "1rem" }} className="grid grid-cols-2 lg:grid-cols-4">
                      {c.results.map(r => (
                        <div key={r.l} style={{ textAlign: "center", padding: "0.875rem 0.5rem", background: "var(--bg-base)", borderRadius: "10px", border: "1px solid var(--border)" }}>
                          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "var(--text-1)", letterSpacing: "-0.01em", lineHeight: 1 }}>{r.n}</div>
                          <div style={{ fontSize: "0.6875rem", color: "var(--text-4)", marginTop: "0.25rem", lineHeight: 1.4 }}>{r.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's make you our next success story" sub="Share your challenge and we'll tell you how we'd approach it — in a free 30-minute call." primary="Book Free Consultation" secondary="Learn About Us" />
    </>
  );
}
