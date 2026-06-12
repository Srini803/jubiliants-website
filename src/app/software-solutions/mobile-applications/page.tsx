import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Mobile App Development | Android, iOS & Cross-Platform | Jubiliants",
  description: "Jubiliants develops Android, iOS, and cross-platform mobile applications for businesses across industries. Delivering secure, scalable mobile solutions since 2015.",
};

const appTypes = ["Customer Engagement Apps","E-Commerce Applications","Healthcare Apps","Service Booking Apps","Enterprise Productivity Apps","Field Service Apps","Consumer Applications","Business Productivity Apps","Employee Self-Service Apps","CRM Mobile Applications","Loyalty & Rewards Apps","Delivery & Logistics Apps"];
const techStack = [
  { category: "Native Mobile", items: ["Android (Java, Kotlin)","iOS (Swift)"] },
  { category: "Cross-Platform", items: ["Flutter","React Native","Ionic"] },
  { category: "Backend Integration", items: [".NET","Node.js","Java","Python"] },
  { category: "Cloud & APIs", items: ["Microsoft Azure","AWS","Google Cloud","Third-Party APIs"] },
];
const steps = [
  { icon: "🔍", title: "Business & User Discovery", desc: "We begin by understanding your business goals, target audience, and user expectations." },
  { icon: "🎨", title: "UI/UX Design", desc: "Our designers create intuitive, engaging mobile experiences focused on usability and customer satisfaction." },
  { icon: "⚙️", title: "Agile Development", desc: "Applications are built in iterative phases with continuous collaboration and feedback." },
  { icon: "✅", title: "Testing & QA", desc: "Every app undergoes rigorous testing across devices and operating systems." },
  { icon: "🚀", title: "Deployment", desc: "We manage publishing on Google Play Store and Apple App Store." },
  { icon: "🔧", title: "Ongoing Support", desc: "Continuous support, upgrades, and enhancements to keep your app competitive." },
];

export default function MobileApplications() {
  return (
    <>
      <PageHero
        eyebrow="Software Solutions"
        title="Mobile Applications That Connect, Engage, and Grow Your Business"
        subtitle="In today's mobile-first world, customers and employees expect seamless digital experiences anytime, anywhere. Jubiliants designs and develops high-performance mobile applications that help organizations enhance customer engagement, streamline operations, and unlock new business opportunities."
        cta1={{ label: "Build Your Mobile App", href: "/contact" }}
        cta2={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      {/* Highlights */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title:"Android & iOS Expertise", desc:"Native and cross-platform apps delivering exceptional experiences across all major platforms."},
              {title:"Business-Focused Mobility", desc:"Applications designed to achieve measurable outcomes: increased engagement, productivity, and revenue."},
              {title:"Secure & Scalable Apps", desc:"Every mobile application built with security, scalability, and long-term business growth in mind."},
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="text-center p-6">
                  <h3 className="font-display font-700 text-white mb-2 text-lg" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.title}</h3>
                  <p className="text-sm" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Our Process</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Delivering Mobile Applications That Users Love</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-6 glow-border">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">App Categories</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Types of Mobile Applications We Develop</h2>
            </div>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {appTypes.map((app, i) => (
              <RevealOnScroll key={app} delay={i * 40}>
                <div className="glass-light px-4 py-2.5 rounded-full text-sm border" style={{borderColor:"rgba(0,194,255,0.12)",color:"var(--slate-light)"}}>{app}</div>
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
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Our Technology Expertise</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <RevealOnScroll key={tech.category} delay={i * 100}>
                <div className="glass rounded-2xl p-6 glow-border">
                  <h3 className="font-display font-700 text-sm mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:700,color:"var(--cyan-accent)"}}>{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map(item => (
                      <li key={item} className="text-sm" style={{color:"var(--slate-light)"}}>{item}</li>
                    ))}
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
              <div className="eyebrow justify-center">Start Building</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Turn Your Mobile App Idea into Reality?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>Whether you're launching a customer-facing app or empowering your workforce with enterprise mobility solutions, Jubiliants is your trusted technology partner.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Request a Free Consultation →</Link>
                <Link href="/contact" className="btn-secondary">Discuss Your App Project</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
