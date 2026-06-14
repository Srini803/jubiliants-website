import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ERPDashVisual, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "ERP Solutions | Enterprise Resource Planning Development | Jubiliants",
  description: "Custom ERP systems integrating finance, HR, procurement, production, inventory and reporting. Purpose-built for your industry. Proven across manufacturing, healthcare and logistics.",
};

const modules = [
  { t: "Finance & Accounting", d: "General ledger, AP/AR, budgeting, tax management, automated financial reporting, and multi-currency support." },
  { t: "HR & Payroll", d: "Employee records, attendance, leave management, payroll processing, PF/ESI, and TDS compliance." },
  { t: "Procurement & Purchasing", d: "Purchase requisitions, vendor management, POs, GRN, three-way matching, and supplier scorecards." },
  { t: "Inventory Management", d: "Multi-warehouse stock control, real-time tracking, reorder automation, and batch/serial number management." },
  { t: "Production Planning", d: "Bill of materials, production orders, MRP, capacity planning, and quality control integration." },
  { t: "Sales & Distribution", d: "Order management, invoicing, delivery tracking, customer portals, commissions, and sales analytics." },
  { t: "Quality Management", d: "Incoming and outgoing quality inspections, non-conformance tracking, corrective actions, and audit management." },
  { t: "Management Reporting", d: "Executive dashboards, consolidated P&L, KPI scorecards, and scheduled management reports with drill-down." },
];

const industries = [
  { name: "Manufacturing", items: ["Discrete & process manufacturing", "Production scheduling & MRP", "Quality control & compliance", "Batch tracking & traceability"] },
  { name: "Healthcare & Pharma", items: ["Hospital management", "Pharmacy & inventory control", "Insurance billing & claims", "GMP compliance & audit trails"] },
  { name: "Logistics & Distribution", items: ["Warehouse management (WMS)", "Fleet & route management", "3PL billing & reconciliation", "Customer delivery portals"] },
];

export default function ERPSolutions() {
  return (
    <>
      {/* Hero with ERP Dashboard Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>ERP Systems That Unify Every Aspect of Your Business</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>Disconnected systems create blind spots and slow decisions. Our custom ERP implementations give you a single source of truth across finance, operations, supply chain, and HR — built for the way your business actually works, not how a software vendor thinks it should.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Request an ERP Demo</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["45%", "Fewer errors post-go-live"], ["3×", "Faster month-end close"], ["100%", "Cross-dept visibility"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex hero-visual-col"><ERPDashVisual /></div>
          </div>
        </div>
      </section>

      {/* The problem with off-the-shelf ERP */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gap: "5rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Why custom ERP?</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>SAP and Oracle weren't built for your industry</h2>
                <p className="t-body" style={{ marginBottom: "1.25rem" }}>Generic ERP platforms are expensive, inflexible, and require your team to adapt their workflows to the software. Implementation projects run over budget and over time — and you still end up with workarounds.</p>
                <p className="t-body" style={{ marginBottom: "1.5rem" }}>Jubiliants builds ERP systems designed around your processes from day one. We interview your operations team, map your workflows, and build a system your staff actually want to use.</p>
                <ul className="check-list">
                  {["No per-user licensing fees — one-time build investment", "Integrates with your existing tools and databases", "Configured for your industry-specific regulations", "Faster time-to-value than SAP/Oracle implementations", "Full source code ownership — no vendor lock-in"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { stat: "45%", label: "Average reduction in inventory discrepancies after go-live" },
                  { stat: "3×", label: "Faster month-end close compared to manual processes" },
                  { stat: "100%", label: "Cross-department operational visibility in real time" },
                  { stat: "60%", label: "Reduction in administrative workload — typical ERP client" },
                ].map(s => (
                  <div key={s.label} className="card-flat" style={{ padding: "1.25rem", borderLeft: "3px solid var(--blue)", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.75rem", color: "var(--text-1)", letterSpacing: "-0.01em", lineHeight: 1, minWidth: "56px" }}>{s.stat}</div>
                    <div style={{ fontSize: "0.9375rem", color: "var(--text-2)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">ERP modules</div>
              <h2 className="t-h2">Comprehensive coverage across your business</h2>
              <p className="t-body" style={{ marginTop: "0.75rem" }}>Implement the modules you need today, and add more as your business grows. Every module integrates natively — no middleware required.</p>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1rem" }} className="grid grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <RevealOnScroll key={m.t} delay={i * 60}>
                <div className="card" style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-1)", marginBottom: "0.5rem" }}>{m.t}</h3>
                  <p className="t-small">{m.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industry expertise */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Industry expertise</div>
              <h2 className="t-h2">ERP built for your sector — not a generic template</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.5rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {industries.map((ind, i) => (
              <RevealOnScroll key={ind.name} delay={i * 80}>
                <div className="card-flat" style={{ padding: "1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.0625rem", color: "var(--text-1)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>{ind.name}</div>
                  <ul className="check-list" style={{ gap: "0.5rem" }}>
                    {ind.items.map(item => <li key={item} style={{ fontSize: "0.875rem" }}>{item}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's build your ERP system" sub="Start with a process audit. We'll identify where you're losing time and money, and design an ERP that solves it." primary="Schedule a Discovery Call" secondary="View Manufacturing Case Study" />
    </>
  );
}
