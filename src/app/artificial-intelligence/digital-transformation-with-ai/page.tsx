import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Digital Transformation with AI | AI-Powered Business Innovation | Jubiliants",
  description: "Jubiliants helps organizations accelerate digital transformation through AI, intelligent automation, predictive analytics, and AI-powered business applications. Serving 200+ customers since 2015.",
};

const solutions = [
  { icon: "🧠", title: "AI-Powered Business Process Transformation", desc: "Transform manual processes into intelligent workflows that continuously improve efficiency.", examples: ["Intelligent Workflow Automation","AI-Assisted Decision Making","Smart Document Processing","Process Optimization"] },
  { icon: "🎯", title: "AI-Driven Customer Experience", desc: "Deliver personalized and responsive customer experiences across digital channels.", examples: ["AI Customer Assistants","Personalized Recommendations","Customer Behavior Analytics","Omnichannel Engagement"] },
  { icon: "🏢", title: "Intelligent Enterprise Applications", desc: "Build next-generation business applications that leverage AI to improve productivity.", examples: ["AI-Enabled ERP Systems","Smart CRM Platforms","Predictive Maintenance","Intelligent Healthcare Platforms"] },
  { icon: "📊", title: "Data & Analytics Transformation", desc: "Convert business data into actionable intelligence using AI and advanced analytics.", examples: ["Predictive Analytics","Demand Forecasting","Risk Assessment","BI Dashboards","Performance Optimization"] },
  { icon: "👷", title: "Workforce Transformation with AI", desc: "Empower employees with AI tools that improve productivity and reduce administrative burden.", examples: ["AI Knowledge Assistants","Employee Support Agents","Intelligent Search Platforms","Productivity Automation"] },
];

export default function DigitalTransformationWithAI() {
  return (
    <>
      <PageHero
        eyebrow="Artificial Intelligence"
        title="Reimagine Your Business with AI-Powered Digital Transformation"
        subtitle="The future belongs to organizations that can intelligently adapt, automate, and innovate. AI-Powered Digital Transformation enables businesses to make smarter decisions, automate complex workflows, predict outcomes, and create exceptional customer experiences. Jubiliants helps organizations harness the power of AI to transform operations, empower employees, and unlock new growth opportunities."
        cta1={{ label: "Start Your AI Transformation Journey", href: "/contact" }}
        cta2={{ label: "Schedule an AI Strategy Consultation", href: "/contact" }}
      />

      {/* Impact Stats */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "40%", label: "Increase in Operational Efficiency", desc: "AI-powered systems streamline workflows, eliminate bottlenecks, and improve productivity." },
              { stat: "60%", label: "Faster Decision-Making", desc: "Real-time analytics and AI-driven insights enable leaders to make informed decisions faster." },
              { stat: "30%", label: "Reduction in Operating Costs", desc: "Automation and intelligent process optimization reduce manual effort and operational expenses." },
            ].map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="stat-number">{item.stat}</div>
                  <div className="font-display font-700 text-white mt-1 mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.label}</div>
                  <p className="text-sm" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">What We Do</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Transforming Businesses Through Intelligence, Automation & Innovation</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-7 glow-border h-full">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color:"var(--slate-muted)"}}>{s.desc}</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {s.examples.map(ex => (
                      <div key={ex} className="flex items-center gap-1.5 text-xs" style={{color:"var(--slate-light)"}}>
                        <span style={{color:"var(--cyan-accent)"}}>›</span>{ex}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
            {/* Approach card spanning 2 cols */}
            <RevealOnScroll delay={400}>
              <div className="service-card glass rounded-2xl p-7 glow-border">
                <div className="text-3xl mb-4">🗺️</div>
                <h3 className="font-display font-700 text-white mb-3" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Our AI Transformation Framework</h3>
                <div className="space-y-3">
                  {["Discover → Identify opportunities","Design → Create AI transformation blueprint","Build → Implement AI-powered solutions","Scale → Expand across departments","Optimize → Continuously improve performance"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm" style={{color:"var(--slate-light)"}}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{background:"rgba(0,194,255,0.15)",color:"var(--cyan-accent)"}}>{i+1}</div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Jubiliants */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Why Jubiliants</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>A Unique Blend of Software, AI & Transformation Expertise</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "End-to-End AI Transformation Partner", desc: "From strategy and consulting to implementation and optimization, we support every stage of your journey." },
              { title: "Business-Driven AI Solutions", desc: "We focus on measurable outcomes, operational improvements, and ROI — not just technology implementation." },
              { title: "Proven Delivery Experience", desc: "300+ successful projects and 200+ customers — we understand how to deliver technology solutions that create lasting value." },
              { title: "Scalable & Future-Ready Architecture", desc: "Our solutions are designed to evolve as technologies, markets, and business needs change." },
              { title: "Unique Software + AI Expertise", desc: "Unlike traditional software vendors, we combine deep technology expertise with business transformation capabilities." },
              { title: "Industry-Specific Knowledge", desc: "Deep domain expertise across healthcare, education, manufacturing, logistics, and more." },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="service-card glass rounded-xl p-6 glow-border">
                  <h3 className="font-display font-700 text-white mb-2 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.title}</h3>
                  <p className="text-sm" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{background:"linear-gradient(135deg,#0D1F3C,#050D1A)"}}>
        <div className="container-main text-center">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto">
              <div className="eyebrow justify-center">Transform Today</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Build an AI-Powered Enterprise?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>The organizations leading tomorrow are investing in AI today. Let Jubiliants help you transform through intelligent automation, predictive insights, and AI-powered applications.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Book an AI Transformation Assessment →</Link>
                <Link href="/contact" className="btn-secondary">Talk to Our AI Experts</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
