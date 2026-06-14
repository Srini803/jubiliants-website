import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { AIAutomationVisual, StatCallout, ProcessFlowVisual } from "@/components/Visuals";

export const metadata = {
  title: "Automation with AI | Intelligent Business Process Automation | Jubiliants",
  description: "Transform repetitive manual tasks into intelligent AI-powered workflows. Document processing, HR automation, finance automation, and customer service automation. 80% reduction in manual effort.",
};

const automationAreas = [
  { title: "Document Processing Automation", desc: "Extract, classify, validate, and route data from invoices, contracts, purchase orders, and forms — no manual data entry, 90%+ accuracy.", examples: ["Invoice processing", "Purchase orders", "Contracts & agreements", "KYC documents", "Claims processing"] },
  { title: "Email & Communication Automation", desc: "AI reads, categorises, prioritises, and routes inbound emails while drafting responses or sending templated replies autonomously.", examples: ["Customer inquiry management", "Email classification", "Automated responses", "Lead routing", "Appointment scheduling"] },
  { title: "HR Process Automation", desc: "Reduce administrative workload through intelligent HR workflows — from recruitment to onboarding and ongoing employee support.", examples: ["Resume screening", "Candidate shortlisting", "Employee onboarding", "Leave management", "Employee helpdesk"] },
  { title: "Finance & Accounts Automation", desc: "Automate repetitive finance processes to improve accuracy and operational efficiency across the entire financial lifecycle.", examples: ["Invoice verification", "Expense management", "Payment reconciliation", "Financial reporting"] },
  { title: "Customer Service Automation", desc: "Improve service quality and response times through AI-powered customer support that resolves tier-1 and tier-2 queries automatically.", examples: ["Customer query resolution", "Ticket creation & routing", "Service request tracking", "Feedback collection"] },
  { title: "Business Workflow Automation", desc: "Automate end-to-end business processes — approval chains, procurement cycles, vendor onboarding, and compliance workflows.", examples: ["Approval workflows", "Procurement processes", "Vendor onboarding", "Compliance management"] },
];

export default function AutomationWithAI() {
  return (
    <>
      {/* Hero with Before/After Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,.25)", borderRadius: "999px", padding: "0.3125rem 0.875rem", marginBottom: "1.25rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "block" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#86EFAC" }}>Up to 80% reduction in manual processing time</span>
              </div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Automate the Work. Amplify the People.</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>AI-powered automation eliminates repetitive manual tasks, streamlines operations, reduces costs, and improves productivity across every department. We identify your highest-impact automation opportunities and build production-ready solutions that integrate with your existing software.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Schedule an Automation Consultation</Link>
                <Link href="/contact" className="btn btn-secondary">Explore Opportunities</Link>
              </div>
            </div>
            <div className="flex hero-visual-col"><AIAutomationVisual /></div>
          </div>
        </div>
      </section>

      {/* Stats callout */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "80%", label: "Reduction in manual processing time", sub: "Average across automation deployments" },
              { val: "90%", label: "Improvement in data accuracy", sub: "vs manual entry baselines" },
              { val: "60%", label: "Faster process execution", sub: "From submission to completion" },
              { val: "4 wks", label: "To first live automation", sub: "Pilot to production timeline" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* What we automate */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">What we automate</div>
              <h2 className="t-h2">Transforming business processes through intelligent automation</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {automationAreas.map((area, i) => (
              <RevealOnScroll key={area.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.625rem" }}>{area.title}</h3>
                  <p className="t-small" style={{ marginBottom: "1rem" }}>{area.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {area.examples.map(ex => (
                      <li key={ex} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-3)" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--blue-light)", display: "block", flexShrink: 0 }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Our approach</div>
              <h2 className="t-h2">A practical framework for successful AI automation</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <ProcessFlowVisual steps={[
              { n: "1", title: "Assess", desc: "Map current workflows, quantify manual effort and error rates" },
              { n: "2", title: "Prioritise", desc: "Rank by ROI — highest impact automations built first" },
              { n: "3", title: "Automate", desc: "Build, integrate, and test the automation solution" },
              { n: "4", title: "Monitor", desc: "Track performance, SLA metrics, and accuracy in real time" },
              { n: "5", title: "Optimise", desc: "Continuously improve accuracy and expand automation scope" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Why + benefits */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ display: "grid", gap: "5rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="section-label">Our approach</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>We start with ROI, not technology</h2>
                <p className="t-body" style={{ marginBottom: "1.25rem" }}>Most automation projects fail because they start with a technology looking for a use case. We do the opposite — quantify where your business is losing time and money, then build automation that delivers the fastest payback.</p>
                <ul className="check-list">
                  {["Process audit — map and quantify current manual effort", "ROI calculation before any code is written", "Working pilot in 3–4 weeks", "Integrates with your existing ERP, CRM, and tools", "Human-in-the-loop escalation for edge cases", "GDPR and compliance controls built in"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "Reduced Operational Costs", icon: "💰" },
                  { label: "Improved Process Accuracy", icon: "🎯" },
                  { label: "Faster Service Delivery", icon: "⚡" },
                  { label: "Enhanced Customer Experience", icon: "⭐" },
                  { label: "Better Compliance & Audit Trails", icon: "🔒" },
                  { label: "Increased Employee Satisfaction", icon: "😊" },
                ].map((b, i) => (
                  <div key={b.label} className="card-flat" style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span style={{ fontSize: "1.125rem" }}>{b.icon}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--text-1)" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABand title="Let's find your biggest automation win" sub="A 30-minute call to identify which processes in your business are ripe for AI automation — and the ROI you can expect." primary="Book Free Automation Audit" secondary="View Case Studies" />
    </>
  );
}
