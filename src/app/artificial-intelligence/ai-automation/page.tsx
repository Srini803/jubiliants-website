import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { AIAutomationVisual, StatCallout, ProcessFlowVisual, TechStackGrid } from "@/components/Visuals";

export const metadata = {
  title: "AI Automation | Intelligent Process Automation | Jubiliants",
  description: "AI-powered process automation for document processing, HR, finance, customer service, and operations. Reduce manual work by up to 80% with production-ready automation.",
};

const automations = [
  { title: "Document Processing", desc: "Extract, classify, validate, and route data from invoices, contracts, purchase orders, and forms — eliminating manual data entry with 90%+ accuracy.", stat: "75% faster" },
  { title: "Email Triage & Response", desc: "AI reads, categorises, prioritises, and routes inbound emails. Drafts responses for human review or sends templated replies autonomously.", stat: "90% sorted" },
  { title: "HR Process Automation", desc: "CV screening, interview scheduling, onboarding checklists, leave approvals, and policy query resolution — end-to-end automation.", stat: "60% less admin" },
  { title: "Finance & AP Automation", desc: "Invoice processing, expense approvals, payment reconciliation, and financial report generation — accurate, audit-ready, and on time.", stat: "3× faster close" },
  { title: "Customer Service Ops", desc: "Tier-1 query resolution, ticket creation and routing, status updates, and SLA monitoring — without increasing headcount.", stat: "65% deflection" },
  { title: "Sales & Marketing Ops", desc: "Lead qualification, CRM data enrichment, follow-up sequences, and pipeline reporting — all running 24/7 without manual intervention.", stat: "40% more pipeline" },
];

export default function AIAutomation() {
  return (
    <>
      {/* Hero with Before/After Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: "3rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,.25)", borderRadius: "999px", padding: "0.3125rem 0.875rem", marginBottom: "1.25rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "block" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#86EFAC" }}>58 minutes → 2.9 seconds per process</span>
              </div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Automate Smarter. Work Faster. Grow Stronger.</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>AI-powered automation eliminates repetitive manual tasks, streamlines operations, reduces costs, and improves productivity across every department. We identify your highest-impact automation opportunities and build production-ready systems that integrate with your existing software.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Book a Free Automation Audit</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Results</Link>
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><AIAutomationVisual /></div>
          </div>
        </div>
      </section>

      {/* Stat callout */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "80%", label: "Reduction in manual processing", sub: "Average across all automation types" },
              { val: "90%", label: "Data accuracy improvement", sub: "vs error-prone manual entry" },
              { val: "60%", label: "Faster process execution", sub: "From submission to resolution" },
              { val: "4 wks", label: "To first live automation", sub: "Pilot to production timeline" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Automation areas */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">What we automate</div>
              <h2 className="t-h2">High-impact automation across every business function</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {automations.map((a, i) => (
              <RevealOnScroll key={a.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <h3 className="t-h4">{a.title}</h3>
                    <span className="chip chip-green" style={{ flexShrink: 0, marginLeft: "0.5rem", fontSize: "0.6875rem" }}>{a.stat}</span>
                  </div>
                  <p className="t-small">{a.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps visual */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Our approach</div>
              <h2 className="t-h2">ROI-first methodology — we quantify before we build</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <ProcessFlowVisual steps={[
              { n: "1", title: "Process Audit", desc: "Map workflows, quantify manual effort and error rates" },
              { n: "2", title: "ROI Calculation", desc: "Project time savings, cost reduction, and payback period" },
              { n: "3", title: "Pilot Build", desc: "Working automation in production within 3–4 weeks" },
              { n: "4", title: "Full Rollout", desc: "Integrate, test, train staff, and go live at scale" },
              { n: "5", title: "Optimise", desc: "Monitor KPIs, retrain models, continuously improve" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Why our approach works</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>We start with ROI, not technology</h2>
                <p className="t-body" style={{ marginBottom: "1.25rem" }}>Most automation projects fail because they start with a technology and try to find a use case. We do the opposite — we quantify where your business is losing time and money, then build the automation that delivers the fastest payback.</p>
                <ul className="check-list">
                  {["Source code and IP ownership — always yours","Integrates with your existing ERP, CRM, and tools","Compliant with GDPR, SOC 2, and industry regulations","Human-in-the-loop escalation for edge cases","Continuous monitoring with performance dashboards","No process too small or too complex to automate"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="section-label" style={{ marginBottom: "1.25rem" }}>Technology we deploy</div>
              <TechStackGrid categories={[
                { name: "AI & ML", tools: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Azure AI Document Intelligence", "AWS Textract"] },
                { name: "Automation Frameworks", tools: ["LangChain", "LangGraph", "Robotic Process Automation (RPA)", "Apache Airflow"] },
                { name: "Integrations", tools: ["Salesforce", "SAP", "Microsoft 365", "ServiceNow", "Jira", "REST APIs"] },
                { name: "Infrastructure", tools: ["Azure", "AWS Lambda", "Docker", "Kubernetes", "GitHub Actions CI/CD"] },
              ]} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTABand title="Let's find your biggest automation win" sub="A 30-minute call to identify which processes in your business are ripe for AI automation — and the ROI you can expect." primary="Book Free Automation Audit" secondary="View Case Studies" />
    </>
  );
}
