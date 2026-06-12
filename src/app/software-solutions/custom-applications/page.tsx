import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Custom Application Development | Jubiliants Software Solutions",
  description: "Jubiliants develops custom web applications, ERP, CRM, portals and workflow automation solutions tailored to your unique business requirements. 300+ projects delivered since 2015.",
};

const webApps = ["Enterprise Business Applications","CRM Solutions","ERP Systems","Customer Self-Service Portals","E-commerce Platforms","Workflow Automation Systems","Healthcare & Hospital Management Systems","Education Management Platforms"];
const mobileApps = ["Android Applications","iOS Applications","Cross-Platform Applications","Customer Engagement Apps","Employee Productivity Apps","Field Service Applications"];
const benefits = ["Tailored to your business processes","Scalable architecture for future growth","Secure and reliable solutions","Enhanced productivity and operational efficiency","Improved customer experience"];

export default function CustomApplications() {
  return (
    <>
      <PageHero
        eyebrow="Software Solutions"
        title="Custom Software Built Around Your Business"
        subtitle="Every organization is unique. Off-the-shelf software often creates limitations instead of solving problems. At Jubiliants, we design and develop tailor-made software applications that align perfectly with your business workflows, objectives, and growth plans."
        cta1={{ label: "Discuss Your Project", href: "/contact" }}
        cta2={{ label: "View Case Studies", href: "/case-studies" }}
      />

      {/* Stats band */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["300+","Projects Delivered"],["200+","Happy Customers"],["10+","Years Experience"],["95%+","Client Retention"]].map(([n,l]) => (
              <div key={l}>
                <div className="stat-number">{n}</div>
                <div className="text-sm mt-1" style={{color:"var(--slate-muted)"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">What We Build</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Comprehensive Software Development Services</h2>
            </div>
          </RevealOnScroll>
          <div className="grid lg:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">🖥</div>
                  <h3 className="font-display text-xl font-700 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Custom Web Applications</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {webApps.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{color:"var(--slate-light)"}}>
                      <span className="mt-1 flex-shrink-0" style={{color:"var(--cyan-accent)"}}>✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">📱</div>
                  <h3 className="font-display text-xl font-700 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Mobile Application Development</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {mobileApps.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{color:"var(--slate-light)"}}>
                      <span className="mt-1 flex-shrink-0" style={{color:"var(--cyan-accent)"}}>✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Benefits */}
          <RevealOnScroll delay={100}>
            <div className="mt-8 glass rounded-2xl p-8 glow-border">
              <h3 className="font-display text-xl font-700 text-white mb-6" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Why Custom-Built?</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(0,194,255,0.1)"}}>
                      <span style={{color:"var(--cyan-accent)"}}>✓</span>
                    </div>
                    <span className="text-sm" style={{color:"var(--slate-light)"}}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Industries</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Solutions Across Sectors</h2>
            </div>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare","Education","Manufacturing","Retail & E-Commerce","Logistics","Financial Services","Professional Services","Government"].map((ind, i) => (
              <RevealOnScroll key={ind} delay={i * 60}>
                <div className="glass-light px-5 py-2.5 rounded-full text-sm border" style={{borderColor:"rgba(0,194,255,0.12)",color:"var(--slate-light)"}}>{ind}</div>
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
              <div className="eyebrow justify-center">Ready to Build?</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Let's Build Your Custom Solution</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>From startups to enterprises, we deliver scalable software solutions that solve real business challenges.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Start Your Project →</Link>
                <Link href="/case-studies" className="btn-secondary">View Success Stories</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
