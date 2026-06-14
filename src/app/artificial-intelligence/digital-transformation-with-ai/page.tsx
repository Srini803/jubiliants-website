import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { AITransformVisual, StatCallout, ProcessFlowVisual, IndustryGrid } from "@/components/Visuals";

export const metadata = {
  title: "Digital Transformation with AI | AI-Powered Business Innovation | Jubiliants",
  description: "AI-powered digital transformation: intelligent automation, predictive analytics, AI enterprise applications, and data-driven decision making. 40% efficiency gains on average.",
};

const solutions = [
  { title: "AI-Powered Business Process Transformation", desc: "Transform manual and semi-automated processes into intelligent workflows — document AI, decision engines, and multi-agent orchestration replacing human-heavy operations." },
  { title: "Intelligent Enterprise Applications", desc: "Rebuild your ERP, CRM, and operational platforms with embedded AI — predictive recommendations, anomaly detection, and natural language interfaces built in." },
  { title: "Predictive Analytics & BI", desc: "Move from historical reporting to forward-looking intelligence — demand forecasting, churn prediction, revenue modelling, and real-time operational dashboards." },
  { title: "AI-Driven Customer Experience", desc: "Personalised journeys at scale — AI assistants, recommendation engines, dynamic pricing, and sentiment-based service routing across every touchpoint." },
  { title: "Workforce Augmentation with AI", desc: "Empower every employee with AI tools — knowledge assistants, smart search, automated reporting, and AI-assisted decision support." },
  { title: "Data Mesh & AI-Ready Infrastructure", desc: "Build the data foundation your AI strategy needs — unified data lakes, real-time pipelines, feature stores, and governed ML platforms." },
];

const whyJubiliants = [
  { icon: "🎯", name: "Business outcomes first", desc: "Every AI initiative tied to measurable KPIs and financial impact", metric: "Avg 40% efficiency gain" },
  { icon: "🔗", name: "End-to-end delivery", desc: "Strategy → build → deploy → optimise — one team, full accountability", metric: "No handoff gaps" },
  { icon: "🏭", name: "Industry domain depth", desc: "AI specialists with experience in your specific sector and workflows", metric: "8 industries served" },
  { icon: "🔒", name: "Enterprise-grade safety", desc: "Hallucination guards, audit trails, access controls, and compliance built-in", metric: "SOC 2 design" },
  { icon: "📊", name: "Proven track record", desc: "300+ technology projects, 200+ customers, 10+ years of delivery", metric: "95% retention rate" },
  { icon: "🚀", name: "Speed to value", desc: "First AI prototype in 2–3 weeks, production deployment in 6–12 weeks", metric: "Fast ROI realisation" },
];

export default function DigitalTransformationWithAI() {
  return (
    <>
      {/* Hero with AI Platform Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Reimagine Your Business with AI-Powered Digital Transformation</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>AI-powered transformation goes beyond chatbots. We help organisations rebuild their operations, decision-making, and customer experiences around intelligent systems — delivering measurable outcomes from day one.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Start Your AI Transformation</Link>
                <Link href="/contact" className="btn btn-secondary">Schedule a Strategy Call</Link>
              </div>
            </div>
            <div className="flex hero-visual-col"><AITransformVisual /></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "40%", label: "Operational efficiency gain", sub: "Average across AI transformation clients" },
              { val: "60%", label: "Faster decision-making", sub: "Real-time AI insights vs delayed reporting" },
              { val: "30%", label: "Reduction in operating costs", sub: "Automation + process optimisation" },
              { val: "6 wks", label: "To first AI in production", sub: "Pilot to live deployment average" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Solutions */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">What we deliver</div>
              <h2 className="t-h2">AI transformation across every layer of your business</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {solutions.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p className="t-small">{s.desc}</p>
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
              <div className="section-label" style={{ justifyContent: "center" }}>Our framework</div>
              <h2 className="t-h2">A structured path from AI ambition to business value</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <ProcessFlowVisual steps={[
              { n: "1", title: "Discover", desc: "AI opportunity mapping — where is the highest ROI?" },
              { n: "2", title: "Design", desc: "AI architecture, data strategy, and roadmap" },
              { n: "3", title: "Build", desc: "Develop, test, and validate AI solutions" },
              { n: "4", title: "Scale", desc: "Roll out across departments and geographies" },
              { n: "5", title: "Optimise", desc: "Continuous improvement as models and data evolve" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Jubiliants */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Why Jubiliants</div>
              <h2 className="t-h2">A unique combination of software engineering and AI expertise</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <IndustryGrid industries={whyJubiliants} />
          </RevealOnScroll>
        </div>
      </section>

      <CTABand title="Ready to build an AI-powered enterprise?" sub="Let Jubiliants help you transform through intelligent automation, predictive insights, and AI-powered applications." primary="Book an AI Transformation Assessment" secondary="View AI Case Studies" />
    </>
  );
}
