import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Agentic AI Solutions | Intelligent AI Agents | Jubiliants",
  description: "Jubiliants builds Agentic AI solutions that automate workflows, enhance customer experiences, and improve business productivity. Deploy AI agents for sales, support, HR, knowledge management, and enterprise operations.",
};

const agents = [
  { icon: "💬", title: "AI Customer Support Agents", desc: "24/7 intelligent conversational agents handling inquiries, resolving issues, and escalating complex cases.", capabilities: ["Customer Query Resolution","Multilingual Conversations","Knowledge Base Access","Ticket Creation & Tracking","Appointment Scheduling"] },
  { icon: "📈", title: "AI Sales Agents", desc: "Empower sales teams with AI assistants that qualify leads, engage prospects, and nurture opportunities.", capabilities: ["Lead Qualification","Prospect Engagement","Follow-Up Automation","Meeting Scheduling","CRM Updates"] },
  { icon: "🎫", title: "AI Helpdesk Agents", desc: "Reduce IT and service desk workloads by deploying intelligent support agents.", capabilities: ["Password Reset Assistance","Ticket Management","Knowledge Retrieval","SLA Monitoring","Incident Escalation"] },
  { icon: "👥", title: "AI HR & Recruitment Agents", desc: "Automate candidate screening, employee onboarding, policy assistance, and HR support activities.", capabilities: ["Resume Screening","Candidate Shortlisting","Interview Scheduling","Employee Query Resolution","Onboarding Assistance"] },
  { icon: "📚", title: "AI Knowledge Assistants", desc: "Enable employees to instantly access information across documents, systems, and organizational knowledge.", capabilities: ["Enterprise Search","Knowledge Retrieval","Policy Guidance","Document Summarization","Research Assistance"] },
  { icon: "🏭", title: "Industry-Specific AI Agents", desc: "Specialized AI agents tailored to unique industry workflows and operational requirements.", capabilities: ["Healthcare AI Assistants","Educational AI Advisors","Financial Service Agents","Manufacturing Assistants","Customer Service Agents"] },
];

const techCapabilities = [
  { category: "Large Language Models", items: ["OpenAI GPT","Claude","Gemini","Open Source Models"] },
  { category: "AI Agent Frameworks", items: ["LangGraph","CrewAI","AutoGen","LangChain"] },
  { category: "Integrations", items: ["CRM Systems","ERP Platforms","Ticketing Tools","Databases","Cloud Services"] },
  { category: "Cloud Platforms", items: ["Microsoft Azure AI","AWS AI Services","Google Cloud AI"] },
];

export default function AgenticAI() {
  return (
    <>
      <PageHero
        eyebrow="Artificial Intelligence"
        title="Intelligent AI Agents That Think, Act, and Deliver Results"
        subtitle="The next evolution of AI is here. Beyond answering questions, modern AI systems can now perform tasks, make decisions, execute workflows, and collaborate with humans to achieve business objectives. Jubiliants helps organizations deploy AI Agents that autonomously handle business processes, support customers, and enable smarter decision-making."
        cta1={{ label: "Book an AI Consultation", href: "/contact" }}
        cta2={{ label: "Explore Agentic AI", href: "/contact" }}
      />

      {/* Stats */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "70%", label: "Reduction in Manual Tasks", desc: "AI agents automate routine activities so employees focus on strategic work." },
              { stat: "24/7", label: "Business Operations", desc: "AI agents work continuously without downtime, ensuring faster responses." },
              { stat: "50%", label: "Faster Decision Support", desc: "AI assistants analyze large volumes of information and provide insights in seconds." },
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

      {/* Agents Grid */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">What We Build</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>AI Agents That Work Like Digital Team Members</h2>
              <p className="max-w-2xl mx-auto" style={{color:"var(--slate-muted)"}}>Jubiliants develops customized AI Agents that operate across departments, applications, and workflows — helping organizations achieve greater efficiency and scalability.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <RevealOnScroll key={agent.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-7 glow-border h-full">
                  <div className="text-3xl mb-4">{agent.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2 text-lg" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{agent.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color:"var(--slate-muted)"}}>{agent.desc}</p>
                  <ul className="space-y-1.5">
                    {agent.capabilities.map(cap => (
                      <li key={cap} className="flex items-start gap-2 text-xs" style={{color:"var(--slate-light)"}}>
                        <span style={{color:"var(--cyan-accent)"}}>›</span>{cap}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Delivering Practical AI That Creates Measurable Business Value</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "Discover", desc: "Identify repetitive, time-consuming activities suitable for AI automation." },
              { step: "Design", desc: "Create intelligent agent workflows aligned with business objectives." },
              { step: "Integrate", desc: "Connect AI agents with enterprise systems, data sources, and workflows." },
              { step: "Deploy", desc: "Launch AI agents in controlled environments with monitoring and governance." },
              { step: "Optimize", desc: "Continuously improve performance through analytics and learning mechanisms." },
            ].map((item, i) => (
              <RevealOnScroll key={item.step} delay={i * 80}>
                <div className="glass rounded-2xl p-5 glow-border text-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-800 mx-auto mb-3" style={{background:"rgba(0,194,255,0.15)",color:"var(--cyan-accent)",fontFamily:"Syne,sans-serif",fontWeight:800}}>{i+1}</div>
                  <h3 className="font-display font-700 text-white mb-2 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.step}</h3>
                  <p className="text-xs leading-relaxed" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Technology</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Technology Capabilities</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techCapabilities.map((tech, i) => (
              <RevealOnScroll key={tech.category} delay={i * 100}>
                <div className="glass rounded-2xl p-6 glow-border">
                  <h3 className="font-display font-700 text-sm mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:700,color:"var(--cyan-accent)"}}>{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map(item => (<li key={item} className="text-sm" style={{color:"var(--slate-light)"}}>{item}</li>))}
                  </ul>
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
              <div className="eyebrow justify-center">Ready to Deploy AI?</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Build Your AI Workforce?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>Empower your organization with intelligent AI agents that work alongside your teams, automate routine activities, and accelerate business growth.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Schedule an AI Strategy Session →</Link>
                <Link href="/contact" className="btn-secondary">Explore AI Opportunities</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
