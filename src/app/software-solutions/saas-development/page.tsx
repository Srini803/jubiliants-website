import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SaaSVisual } from "@/components/Visuals";

export const metadata = {
  title: "SaaS Product Development | Cloud-Native SaaS Platform | Jubiliants",
  description: "End-to-end SaaS product development — multi-tenant architecture, subscription billing, self-service onboarding, and enterprise security. Built to scale from 10 to 10,000 customers.",
};

const saasCapabilities = [
  { title: "Multi-tenant Architecture", desc: "Single codebase, fully isolated tenant data. Each customer gets their own secure data silo, custom subdomain, and configuration — without separate infrastructure." },
  { title: "Subscription & Billing Engine", desc: "Stripe-powered subscription management — plans, trials, upgrades, proration, invoices, and dunning flows — integrated directly into your product." },
  { title: "Self-service Onboarding", desc: "Frictionless sign-up, guided product tours, sample data, and email nurture sequences. New customers activated without any sales involvement." },
  { title: "Admin & Analytics Dashboard", desc: "Tenant management, feature flags, usage analytics, MRR tracking, churn analysis, and health scores — all in a single operator console." },
  { title: "SSO & Enterprise Auth", desc: "SAML 2.0, OAuth 2.0, Microsoft Entra, Google Workspace, and Okta integration — enterprise customers can onboard their own identity providers." },
  { title: "White-label & Customisation", desc: "Per-tenant branding, custom domains, configurable feature sets, and API-first design so your customers can extend the platform themselves." },
];

const metrics = [
  { val: "99.99%", label: "Uptime SLA", sub: "Multi-region redundancy" },
  { val: "< 80ms", label: "API P95 Latency", sub: "Globally distributed" },
  { val: "500+", label: "Tenants Supported", sub: "Per single deployment" },
  { val: "SOC 2", label: "Security Standard", sub: "Audit-ready by design" },
];

export default function SaaSDevelopment() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: "3rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>SaaS Products Built to Scale From Day One</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We design and build cloud-native SaaS platforms with multi-tenant architecture, subscription billing, enterprise security, and the operational tooling you need to grow — without rewriting your platform every 18 months.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Start Your SaaS Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><SaaSVisual /></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-raised)", borderBottom: "1px solid var(--border)" }}>
        <div className="wrap" style={{ padding: "3rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }} className="grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <RevealOnScroll key={m.label} delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div className="stat-num">{m.val}</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-1)", marginTop: "0.375rem" }}>{m.label}</div>
                  <div className="stat-label">{m.sub}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Core SaaS capabilities</div>
              <h2 className="t-h2">Everything you need to run a scalable SaaS business</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {saasCapabilities.map((c, i) => (
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

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="section-label">Why build custom vs white-label</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>Own your platform. Own your margins.</h2>
                <p className="t-body" style={{ marginBottom: "1.25rem" }}>Off-the-shelf SaaS builders cap your customisation and take a percentage of your revenue. A custom-built SaaS platform gives you full control over features, pricing, integrations, and data — with no per-seat fees eating your margins.</p>
                <ul className="check-list">
                  {["No revenue share — you keep 100% of subscription income", "Unlimited customisation as your product evolves", "Full data ownership and portability", "Competitive differentiation through unique features", "Build on your own IP — increases company valuation"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { stage: "MVP", time: "8–12 weeks", desc: "Core functionality, basic billing, self-service onboarding. Enough to validate product-market fit with early customers." },
                  { stage: "Growth", time: "12–20 weeks", desc: "Enterprise SSO, advanced analytics, API access, white-labelling, and multi-region deployment." },
                  { stage: "Scale", time: "Ongoing", desc: "Performance engineering, ML features, marketplace integrations, and compliance certifications." },
                ].map((s, i) => (
                  <RevealOnScroll key={s.stage} delay={i * 80}>
                    <div className="card-flat" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ width: "60px", flexShrink: 0 }}>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem", color: "var(--blue-light)" }}>{s.stage}</div>
                        <div style={{ fontSize: "0.6875rem", color: "var(--text-4)" }}>{s.time}</div>
                      </div>
                      <p className="t-small">{s.desc}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABand title="Ready to build your SaaS product?" sub="Tell us your idea. We'll scope the MVP, define the architecture, and start building in weeks." primary="Book a SaaS Discovery Call" secondary="View Our Work" />
    </>
  );
}
