import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ChatbotVisual } from "@/components/Visuals";

export const metadata = {
  title: "AI Chatbots | Enterprise Conversational AI | Jubiliants",
  description: "Enterprise AI chatbots for customer support, internal helpdesk, sales qualification, and HR assistance. NLP-powered, omnichannel, integrated with your CRM and ticketing systems.",
};

const chatbotTypes = [
  { title: "Customer Support Chatbot", desc: "Handle 60–75% of inbound support queries autonomously — order tracking, refund requests, account queries, FAQs — integrated with your CRM and helpdesk." },
  { title: "Internal IT Helpdesk Bot", desc: "Password resets, software access requests, ticket creation, knowledge base lookups, and incident reporting — available 24/7 on Teams, Slack, or your intranet." },
  { title: "HR Policy Assistant", desc: "Instant answers to leave policies, payroll queries, benefits information, and onboarding guidance — reducing HR admin time by up to 50%." },
  { title: "Sales Qualification Bot", desc: "Engage website visitors, qualify leads with structured questions, capture contact details, and book meetings directly into your CRM and calendar." },
  { title: "E-Commerce Assistant", desc: "Product recommendations, order status, return initiation, size guidance, and promotional offers — boosting conversion and reducing cart abandonment." },
  { title: "Banking & Finance Bot", desc: "Balance enquiries, transaction history, loan status, fraud alerts, and appointment booking — with strict compliance and data security controls." },
];

const channels = [
  { name: "Website Live Chat", icon: "🌐" },
  { name: "WhatsApp Business", icon: "💬" },
  { name: "Microsoft Teams", icon: "🔷" },
  { name: "Slack", icon: "⚡" },
  { name: "Email Inbox", icon: "📧" },
  { name: "iOS & Android SDK", icon: "📱" },
  { name: "Facebook Messenger", icon: "💙" },
  { name: "Instagram DM", icon: "📸" },
];

export default function AIChatbots() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: "3rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,0.25)", borderRadius: "999px", padding: "0.3125rem 0.875rem", marginBottom: "1.25rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "block" }}></span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#86EFAC" }}>73% avg containment rate</span>
              </div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>AI Chatbots That Resolve Queries, Not Just Answer Them</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build AI chatbots that integrate with your systems — CRM, ERP, ticketing, knowledge base — and take actions, not just provide generic responses. Available on every channel your customers and employees already use.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Build Your AI Chatbot</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><ChatbotVisual /></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-raised)", borderBottom: "1px solid var(--border)" }}>
        <div className="wrap" style={{ padding: "3rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem", textAlign: "center" }} className="grid grid-cols-2 lg:grid-cols-4">
            {[["73%", "Avg containment rate"], ["96.4%", "Intent accuracy"], ["4.7/5", "Customer CSAT"], ["12+", "Languages supported"]].map(([n, l], i) => (
              <RevealOnScroll key={l} delay={i * 80}>
                <div><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Chatbot types</div>
              <h2 className="t-h2">Purpose-built for your industry and use case</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {chatbotTypes.map((ct, i) => (
              <RevealOnScroll key={ct.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{ct.title}</h3>
                  <p className="t-small">{ct.desc}</p>
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
                <div className="section-label">Omnichannel deployment</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>Deploy once, available everywhere</h2>
                <p className="t-body" style={{ marginBottom: "1.5rem" }}>Your customers and employees shouldn't need to learn a new tool. We deploy your AI chatbot across every channel they already use — with a unified conversation history and consistent personality.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {channels.map((ch, i) => (
                    <div key={ch.name} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.75rem", background: "var(--bg-surface)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                      <span style={{ fontSize: "1.125rem" }}>{ch.icon}</span>
                      <span style={{ fontSize: "0.875rem", color: "var(--text-2)", fontWeight: 500 }}>{ch.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-label">What makes ours different</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>Built to integrate, not just converse</h2>
                <ul className="check-list">
                  {["Deep CRM integration — reads and writes customer records", "Live inventory, order, and account data lookups", "Escalates to human agents with full conversation context", "Learns from every interaction via feedback loops", "Multilingual — auto-detects language, responds in kind", "GDPR-compliant data handling and retention controls", "Custom personality, tone, and brand voice"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABand title="Ready to build your AI chatbot?" sub="We'll design a chatbot that fits your workflows, tone, and systems — and have a working prototype ready in 2 weeks." primary="Build Your Chatbot" secondary="View Case Studies" />
    </>
  );
}
