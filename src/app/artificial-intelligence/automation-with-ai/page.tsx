import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "AI Automation Solutions | Intelligent Process Automation | Jubiliants",
  description: "Jubiliants helps businesses automate workflows, document processing, customer service, HR, finance, and operations using Artificial Intelligence. Improve efficiency with AI-powered automation.",
};

const automationAreas = [
  { icon: "📄", title: "Document Processing Automation", desc: "Automatically extract, validate, classify, and process information from invoices, contracts, KYC docs, and claims.", examples: ["Invoice Processing","Purchase Orders","Contracts","KYC Documents","Claims Processing","Application Forms"] },
  { icon: "📧", title: "Email & Communication Automation", desc: "AI systems that read, categorize, prioritize, and respond to emails while routing requests appropriately.", examples: ["Customer Inquiry Management","Email Classification","Automated Responses","Lead Routing","Appointment Scheduling"] },
  { icon: "👤", title: "HR Process Automation", desc: "Reduce administrative workload and improve employee experiences through intelligent HR workflows.", examples: ["Resume Screening","Candidate Shortlisting","Employee Onboarding","Leave Management","Employee Helpdesk"] },
  { icon: "💰", title: "Finance & Accounts Automation", desc: "Automate repetitive finance processes to improve accuracy and operational efficiency.", examples: ["Invoice Verification","Expense Management","Payment Processing","Reconciliation","Financial Reporting"] },
  { icon: "🎧", title: "Customer Service Automation", desc: "Improve service quality and response times through AI-powered customer support systems.", examples: ["Customer Query Resolution","Ticket Creation","Case Routing","Service Request Tracking","Feedback Collection"] },
  { icon: "🔄", title: "Business Workflow Automation", desc: "Automate end-to-end business processes across departments and systems.", examples: ["Approval Workflows","Procurement Processes","Vendor Onboarding","Compliance Management","Service Delivery"] },
];

export default function AutomationWithAI() {
  return (
    <>
      <PageHero
        eyebrow="Artificial Intelligence"
        title="Automate Smarter. Work Faster. Grow Stronger."
        subtitle="Businesses today face increasing pressure to do more with fewer resources. AI-powered automation enables organizations to eliminate repetitive manual tasks, streamline operations, reduce costs, and improve productivity across every department. Jubiliants helps organizations transform business processes into intelligent workflows that operate faster, more accurately, and with minimal human intervention."
        cta1={{ label: "Schedule an Automation Consultation", href: "/contact" }}
        cta2={{ label: "Explore Automation Opportunities", href: "/contact" }}
      />

      {/* Impact Stats */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "80%", label: "Reduction in Manual Processing", desc: "AI automation significantly reduces the effort required to complete repetitive business tasks." },
              { stat: "90%", label: "Improvement in Data Accuracy", desc: "Automated processing minimizes human errors and improves consistency across workflows." },
              { stat: "60%", label: "Faster Process Execution", desc: "Organizations can accelerate approvals, service delivery, and operational workflows." },
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

      {/* Automation Areas */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">What We Automate</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Transforming Business Processes Through Intelligent Automation</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationAreas.map((area, i) => (
              <RevealOnScroll key={area.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-7 glow-border h-full">
                  <div className="text-3xl mb-4">{area.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{area.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color:"var(--slate-muted)"}}>{area.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {area.examples.map(ex => (
                      <div key={ex} className="flex items-center gap-1.5 text-xs" style={{color:"var(--slate-light)"}}>
                        <span style={{color:"var(--cyan-accent)"}}>›</span>{ex}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Our Approach</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>A Practical Framework for Successful AI Automation</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Assess","Prioritize","Automate","Monitor","Optimize"].map((step, i) => (
              <RevealOnScroll key={step} delay={i * 80}>
                <div className="glass rounded-2xl p-5 glow-border text-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-800 mx-auto mb-3" style={{background:"rgba(0,194,255,0.15)",color:"var(--cyan-accent)",fontFamily:"Syne,sans-serif",fontWeight:800}}>{i+1}</div>
                  <div className="font-display font-700 text-white text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{step}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Benefits</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Business Benefits of AI Automation</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Reduced Operational Costs","Improved Productivity","Faster Service Delivery","Enhanced Customer Experience","Greater Process Accuracy","Better Compliance & Governance","Increased Employee Satisfaction","Improved Business Agility"].map((benefit, i) => (
              <RevealOnScroll key={benefit} delay={i * 50}>
                <div className="glass-light rounded-xl p-4 border text-center" style={{borderColor:"rgba(0,194,255,0.1)"}}>
                  <p className="text-sm font-500" style={{color:"var(--slate-light)"}}>{benefit}</p>
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
              <div className="eyebrow justify-center">Get Started</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Eliminate Manual Work and Unlock Productivity?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>AI-powered automation can help your organization reduce costs, improve efficiency, and accelerate business growth. Let Jubiliants identify opportunities and build intelligent workflows that deliver measurable results.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Book an Automation Assessment →</Link>
                <Link href="/contact" className="btn-secondary">Talk to an AI Expert</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
