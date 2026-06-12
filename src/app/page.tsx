import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const stats = [
  { number: "300+", label: "Projects Delivered" },
  { number: "200+", label: "Happy Customers" },
  { number: "10+", label: "Years of Innovation" },
  { number: "95%+", label: "Client Retention" },
];

const services = [
  {
    icon: "⚡",
    title: "Digital Transformation",
    desc: "Modernize operations, eliminate inefficiencies, and unlock new growth opportunities through technology-driven transformation.",
    href: "/software-solutions/digital-transformation",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: "🖥",
    title: "Custom Applications",
    desc: "Tailor-made web applications, ERP, CRM, and portals that align perfectly with your business workflows and growth plans.",
    href: "/software-solutions/custom-applications",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    desc: "High-performance Android, iOS, and cross-platform apps that connect, engage, and grow your business.",
    href: "/software-solutions/mobile-applications",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    icon: "🤖",
    title: "Agentic AI",
    desc: "Deploy intelligent AI agents that autonomously handle business processes, support customers, and enable smarter decisions.",
    href: "/artificial-intelligence/agentic-ai",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "⚙️",
    title: "Automation with AI",
    desc: "Transform repetitive manual tasks into intelligent workflows — faster, more accurate, and cost-effective.",
    href: "/artificial-intelligence/automation-with-ai",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: "🚀",
    title: "Digital Transformation with AI",
    desc: "Reimagine your business with AI-powered insights, predictive analytics, and next-generation enterprise solutions.",
    href: "/artificial-intelligence/digital-transformation-with-ai",
    gradient: "from-green-500 to-cyan-500",
  },
];

const whyUs = [
  { icon: "🎯", title: "Business-First Approach", desc: "We focus on understanding business objectives before recommending technology solutions." },
  { icon: "🌐", title: "Global Delivery Capability", desc: "Headquartered in Hyderabad, we successfully deliver projects for customers across the globe." },
  { icon: "🔧", title: "End-to-End Expertise", desc: "From consulting and strategy to development, deployment, and support." },
  { icon: "💡", title: "Innovation-Driven Culture", desc: "Continuously investing in AI, Automation, Cloud, and Advanced Analytics." },
  { icon: "🤝", title: "Customer-Centric Philosophy", desc: "Every project executed with a strong focus on customer success and long-term value." },
];

const industries = ["Healthcare","Manufacturing","Education","Retail & E-Commerce","Logistics & Supply Chain","Professional Services","Government & Public Sector","Financial Services"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden" style={{paddingTop:"5rem",background:"linear-gradient(135deg, #050D1A 0%, #0A1628 50%, #0D1F3C 100%)"}}>
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle, rgba(30,111,217,0.12) 0%, transparent 70%)", filter:"blur(60px)"}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{background:"radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 70%)", filter:"blur(60px)"}}></div>

        <div className="container-main w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="eyebrow">Jubiliants Software Solutions</div>
              <h1 className="font-display text-5xl lg:text-6xl font-800 leading-tight mb-6" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>
                Transforming Businesses Through{" "}
                <span className="text-gradient">Custom Software & AI Innovation</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{color:"var(--slate-light)"}}>
                Since 2015, we've been helping organizations accelerate growth, streamline operations, and embrace digital transformation through custom-built web applications, mobile apps, and next-generation AI solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Schedule a Consultation →</Link>
                <Link href="/software-solutions/digital-transformation" className="btn-secondary">Explore Our Solutions</Link>
              </div>
              {/* Quick stats */}
              <div className="flex gap-8 mt-12 pt-8" style={{borderTop:"1px solid rgba(0,194,255,0.1)"}}>
                {[["300+","Projects"],["200+","Customers"],["Since 2015","Experience"]].map(([n,l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>{n}</div>
                    <div className="text-xs" style={{color:"var(--slate-muted)"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Node/AI graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Pulse rings */}
                {[1,2,3].map(i => (
                  <div key={i} className="pulse-ring absolute" style={{
                    width:"120px", height:"120px",
                    top:"50%", left:"50%",
                    animationDelay:`${(i-1)*1}s`,
                  }}></div>
                ))}
                {/* Center node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center glow-border" style={{background:"linear-gradient(135deg,rgba(30,111,217,0.3),rgba(0,194,255,0.2))"}}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="6" fill="#00C2FF"/>
                      <circle cx="8" cy="10" r="4" fill="#2E86FF" opacity="0.8"/>
                      <circle cx="40" cy="10" r="4" fill="#2E86FF" opacity="0.8"/>
                      <circle cx="8" cy="38" r="4" fill="#2E86FF" opacity="0.8"/>
                      <circle cx="40" cy="38" r="4" fill="#2E86FF" opacity="0.8"/>
                      <circle cx="24" cy="6" r="3" fill="#00C2FF" opacity="0.6"/>
                      <circle cx="24" cy="42" r="3" fill="#00C2FF" opacity="0.6"/>
                      <line x1="24" y1="24" x2="8" y2="10" stroke="#1E6FD9" strokeWidth="1.5" opacity="0.6"/>
                      <line x1="24" y1="24" x2="40" y2="10" stroke="#1E6FD9" strokeWidth="1.5" opacity="0.6"/>
                      <line x1="24" y1="24" x2="8" y2="38" stroke="#1E6FD9" strokeWidth="1.5" opacity="0.6"/>
                      <line x1="24" y1="24" x2="40" y2="38" stroke="#1E6FD9" strokeWidth="1.5" opacity="0.6"/>
                      <line x1="24" y1="24" x2="24" y2="6" stroke="#00C2FF" strokeWidth="1.5" opacity="0.4"/>
                      <line x1="24" y1="24" x2="24" y2="42" stroke="#00C2FF" strokeWidth="1.5" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
                {/* Orbit labels */}
                {[
                  {label:"AI",top:"5%",left:"40%"},
                  {label:"Mobile",top:"30%",left:"5%"},
                  {label:"Cloud",top:"30%",left:"78%"},
                  {label:"ERP",top:"65%",left:"5%"},
                  {label:"Data",top:"65%",left:"75%"},
                  {label:"Web",top:"87%",left:"38%"},
                ].map(({label,top,left}) => (
                  <div key={label} className="absolute text-xs font-display font-600 px-2 py-1 rounded-md glass" style={{top,left,fontFamily:"Syne,sans-serif",fontWeight:700,color:"var(--cyan-accent)",fontSize:"0.7rem"}}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{background:"var(--navy-800)",borderTop:"1px solid rgba(0,194,255,0.08)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="stat-card">
                  <div className="stat-number">{s.number}</div>
                  <div className="mt-1 text-sm" style={{color:"var(--slate-muted)"}}>{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="eyebrow justify-center">What We Do</div>
              <h2 className="font-display text-4xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>
                End-to-End Technology Solutions
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{color:"var(--slate-muted)"}}>
                From custom software to intelligent AI — every solution built around your business goals.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 80}>
                <Link href={s.href} className="block">
                  <div className="service-card glass rounded-2xl p-7 h-full glow-border">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{background:"rgba(0,194,255,0.08)"}}>
                      {s.icon}
                    </div>
                    <h3 className="font-display text-lg font-700 text-white mb-3" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{s.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color:"var(--slate-muted)"}}>{s.desc}</p>
                    <span className="text-sm font-600" style={{color:"var(--cyan-accent)",fontWeight:600}}>Learn more →</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE SECTION */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <RevealOnScroll>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="eyebrow">Software Solutions</div>
                <h3 className="font-display text-2xl font-800 text-white mb-3" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Custom Software Built Around Your Business</h3>
                <p className="text-sm leading-relaxed mb-6" style={{color:"var(--slate-muted)"}}>Every organization is unique. At Jubiliants, we design and develop tailor-made software that aligns with your business workflows, objectives, and growth plans.</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Enterprise Web Apps","CRM Solutions","ERP Systems","Customer Portals","E-Commerce Platforms","Workflow Automation"].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm" style={{color:"var(--slate-light)"}}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:"var(--cyan-accent)"}}></div>
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/software-solutions/custom-applications" className="btn-primary mt-6 inline-flex">Learn More →</Link>
              </div>
            </RevealOnScroll>

            {/* Right visual */}
            <RevealOnScroll delay={200}>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="eyebrow">AI Solutions</div>
                <h3 className="font-display text-2xl font-800 text-white mb-3" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Intelligent AI That Works for Your Business</h3>
                <p className="text-sm leading-relaxed mb-6" style={{color:"var(--slate-muted)"}}>AI is no longer a future concept — it's a business necessity. We help organizations unlock AI through practical, result-oriented solutions.</p>
                <div className="space-y-3">
                  {[
                    {label:"Agentic AI", pct:90},
                    {label:"Process Automation", pct:85},
                    {label:"Business Intelligence", pct:80},
                  ].map(({label, pct}) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1" style={{color:"var(--slate-light)"}}>
                        <span>{label}</span><span style={{color:"var(--cyan-accent)"}}>{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{background:"rgba(0,194,255,0.1)"}}>
                        <div className="h-full rounded-full" style={{width:`${pct}%`,background:"linear-gradient(90deg,#1E6FD9,#00C2FF)"}}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/artificial-intelligence/agentic-ai" className="btn-primary mt-6 inline-flex">Explore AI Solutions →</Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* WHY JUBILIANTS */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Why Choose Us</div>
              <h2 className="font-display text-4xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Your Technology Partner for Growth</h2>
              <p className="max-w-xl mx-auto" style={{color:"var(--slate-muted)"}}>We don't just build software — we solve business challenges with deep technical expertise and industry knowledge.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 glow-border service-card">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
            {/* Proven record card */}
            <RevealOnScroll delay={500}>
              <div className="glass rounded-2xl p-6 glow-border service-card sm:col-span-2 lg:col-span-2 flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{background:"rgba(0,194,255,0.08)"}}>🏆</div>
                <div>
                  <h3 className="font-display font-700 text-white mb-1" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Proven Delivery Record</h3>
                  <p className="text-sm" style={{color:"var(--slate-muted)"}}>300+ successful projects and 200+ customers worldwide across healthcare, education, manufacturing, logistics, and more.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad" style={{background:"var(--navy-800)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Industries We Serve</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Deep Domain Expertise Across Sectors</h2>
            </div>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <RevealOnScroll key={ind} delay={i * 60}>
                <div className="glass-light px-5 py-2.5 rounded-full text-sm font-500 border" style={{borderColor:"rgba(0,194,255,0.12)",color:"var(--slate-light)"}}>
                  {ind}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad" style={{background:"linear-gradient(135deg, #0D1F3C 0%, #050D1A 100%)"}}>
        <div className="container-main text-center">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow justify-center">Get Started</div>
              <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-6" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>
                Ready to Accelerate Your <span className="text-gradient">Digital Transformation?</span>
              </h2>
              <p className="text-lg mb-10" style={{color:"var(--slate-muted)"}}>
                Whether you're looking to build a custom software solution, develop a mobile application, automate business processes, or implement AI-powered systems — Jubiliants is ready to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary text-lg py-4 px-8">Book a Free Consultation →</Link>
                <Link href="/case-studies" className="btn-secondary text-lg py-4 px-8">View Case Studies</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
