import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Digital Transformation Services | Jubiliants Software Solutions",
  description: "Jubiliants helps businesses modernize operations, eliminate inefficiencies, and unlock new growth through technology-driven transformation. Serving 200+ customers since 2015.",
};

const whatWeDo = [
  { icon: "🔄", title: "Business Process Modernization", desc: "Replace manual and fragmented processes with integrated digital systems that improve efficiency, transparency, and productivity." },
  { icon: "🏗️", title: "Legacy System Modernization", desc: "Migrate from outdated applications and spreadsheets to scalable, cloud-enabled business platforms." },
  { icon: "⚙️", title: "Workflow Automation", desc: "Automate repetitive business activities to reduce human effort, minimize errors, and accelerate execution." },
  { icon: "🖥", title: "Enterprise Software Development", desc: "Design and develop custom business applications tailored to organizational requirements and growth objectives." },
  { icon: "📊", title: "Data-Driven Decision Making", desc: "Create centralized reporting and analytics platforms that enable leadership to make informed, real-time decisions." },
  { icon: "🤖", title: "AI-Powered Transformation", desc: "Integrate AI and automation into business processes to improve operational efficiency and customer engagement." },
];

const steps = [
  { num: "01", title: "Understand the Business", desc: "We begin by understanding your business objectives, challenges, customer expectations, and operational workflows." },
  { num: "02", title: "Identify Opportunities", desc: "Our consultants identify areas where technology can improve efficiency, reduce costs, and create competitive advantages." },
  { num: "03", title: "Build the Transformation Roadmap", desc: "We develop a phased roadmap that prioritizes high-impact initiatives while ensuring smooth adoption." },
  { num: "04", title: "Implement & Integrate", desc: "Our team develops and integrates digital solutions into existing business environments." },
  { num: "05", title: "Measure & Optimize", desc: "Transformation is an ongoing journey. We continuously monitor performance metrics and optimize systems for maximum value." },
];

const caseStudies = [
  { title: "Multi-Hospital Digital Transformation", industry: "Healthcare", challenge: "Managing patient registrations, appointments, billing, inventory, and reporting through disconnected systems and manual processes.", solution: "Developed an integrated Hospital Information Management System (HIMS) with centralized reporting and workflow automation.", results: ["60% reduction in administrative workload","Improved patient service efficiency","Real-time operational visibility","Faster decision-making through analytics"] },
  { title: "Manufacturing Operations Modernization", industry: "Manufacturing", challenge: "Heavy reliance on spreadsheets and manual reporting for production planning and inventory management.", solution: "Developed a centralized ERP platform integrating procurement, inventory, production, quality control, and management reporting.", results: ["Increased operational visibility","Reduced inventory discrepancies","Improved production planning accuracy","Enhanced reporting efficiency"] },
  { title: "Educational Institution Digital Transformation", industry: "Education", challenge: "Challenges managing admissions, student records, attendance, fee management, and communication.", solution: "Implemented a comprehensive Student Information Management System (SIMS) with mobile access for all stakeholders.", results: ["Streamlined admissions process","Improved student engagement","Automated administrative workflows","Enhanced stakeholder communication"] },
];

const highlights = [
  { stat: "10+", label: "Years Experience", desc: "Proven experience since 2015 navigating digital transformation across diverse industries." },
  { stat: "300+", label: "Projects Delivered", desc: "Extensive portfolio demonstrating ability to solve complex business challenges through technology." },
  { stat: "End-to-End", label: "Transformation Partner", desc: "From strategy and consulting to development, deployment, AI integration, and ongoing support." },
];

export default function DigitalTransformation() {
  return (
    <>
      <PageHero
        eyebrow="Software Solutions"
        title="Accelerating Digital Transformation Through Technology Innovation"
        subtitle="In today's rapidly evolving business landscape, organizations need more than software — they need a strategic digital transformation partner. Jubiliants helps businesses modernize operations, eliminate inefficiencies, and unlock new growth opportunities through technology-driven transformation."
        cta1={{ label: "Schedule a Transformation Assessment", href: "/contact" }}
        cta2={{ label: "Talk to Our Experts", href: "/contact" }}
      />

      {/* Highlights */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <RevealOnScroll key={h.label} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="stat-number mb-1">{h.stat}</div>
                  <div className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{h.label}</div>
                  <p className="text-sm" style={{color:"var(--slate-muted)"}}>{h.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">What We Do</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Transforming Businesses for the Digital Age</h2>
              <p className="max-w-2xl mx-auto" style={{color:"var(--slate-muted)"}}>Digital transformation is about reimagining business processes, improving customer experiences, and creating operational excellence through intelligent use of technology.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-6 glow-border h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach – 5 Steps */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Our Approach</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>A Structured Framework for Successful Digital Transformation</h2>
            </div>
          </RevealOnScroll>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 100}>
                <div className="flex gap-6 items-start glass rounded-2xl p-6 glow-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-800 text-sm" style={{background:"rgba(0,194,255,0.1)",color:"var(--cyan-accent)",fontFamily:"Syne,sans-serif",fontWeight:800}}>{step.num}</div>
                  <div>
                    <h3 className="font-display font-700 text-white mb-1" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{step.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Success Stories</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Real Transformation, Real Results</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <RevealOnScroll key={cs.title} delay={i * 100}>
                <div className="glass rounded-2xl p-7 glow-border h-full flex flex-col">
                  <div className="inline-flex px-3 py-1 rounded-full text-xs font-600 mb-4" style={{background:"rgba(0,194,255,0.1)",color:"var(--cyan-accent)",fontWeight:600}}>{cs.industry}</div>
                  <h3 className="font-display font-700 text-white mb-3 text-lg" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{cs.title}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-700 mb-1" style={{color:"var(--cyan-accent)",fontWeight:700}}>CHALLENGE</p>
                    <p className="text-sm" style={{color:"var(--slate-muted)"}}>{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-700 mb-1" style={{color:"var(--cyan-accent)",fontWeight:700}}>SOLUTION</p>
                    <p className="text-sm" style={{color:"var(--slate-muted)"}}>{cs.solution}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs font-700 mb-2" style={{color:"var(--cyan-accent)",fontWeight:700}}>RESULTS</p>
                    <ul className="space-y-1">
                      {cs.results.map(r => (
                        <li key={r} className="flex items-start gap-2 text-sm" style={{color:"var(--slate-light)"}}>
                          <span style={{color:"var(--cyan-accent)"}}>✓</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{background:"linear-gradient(135deg, #0D1F3C 0%, #050D1A 100%)"}}>
        <div className="container-main text-center">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto">
              <div className="eyebrow justify-center">Get Started</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Begin Your Digital Transformation Journey?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>Technology should enable growth, not create complexity. Let Jubiliants help you transform operations and build a future-ready organization.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Request a Consultation →</Link>
                <Link href="/contact" className="btn-secondary">Discuss Your Goals</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
