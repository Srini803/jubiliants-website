import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "About Us | Jubiliants Software Solutions | Founded 2015, Hyderabad",
  description: "Founded in Hyderabad in 2015, Jubiliants Software Solutions delivers custom software, mobile applications, AI solutions, and digital transformation services globally. 200+ customers, 300+ projects.",
};

const journey = [
  { year: "2015", desc: "Jubiliants Software Solutions was founded in Hyderabad, India, with a focus on custom software development and enterprise applications." },
  { year: "2017", desc: "Expanded capabilities into web-based enterprise platforms, workflow automation, and business management solutions." },
  { year: "2019", desc: "Successfully delivered projects across multiple industries and expanded customer relationships internationally." },
  { year: "2021", desc: "Strengthened mobile application development capabilities, delivering Android and iOS solutions for businesses and consumers." },
  { year: "2023", desc: "Entered the Artificial Intelligence and Intelligent Automation space, helping organizations leverage AI-driven transformation." },
  { year: "Today", desc: "Serving 200+ customers worldwide with 300+ successful projects delivered across software development, mobile apps, AI solutions, and digital transformation." },
];

const values = [
  { icon: "⚖️", title: "Integrity", desc: "We conduct business with honesty, transparency, and accountability." },
  { icon: "💡", title: "Innovation", desc: "We embrace emerging technologies and continuously seek better ways to solve business challenges." },
  { icon: "🏆", title: "Excellence", desc: "We strive for the highest standards in quality, delivery, and customer service." },
  { icon: "🤝", title: "Collaboration", desc: "We work closely with our customers to build solutions that align with their goals." },
  { icon: "🌟", title: "Customer Success", desc: "Our success is measured by the success of our customers." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Jubiliants"
        title="Transforming Ideas into Digital Success Since 2015"
        subtitle="Founded in Hyderabad, India, Jubiliants Software Solutions has grown into a trusted technology partner for organizations across the globe. Since 2015, we have been helping businesses embrace innovation, streamline operations, and accelerate growth through Custom Software Development, Mobile Applications, Artificial Intelligence, and Digital Transformation solutions."
        cta1={{ label: "Let's Build Together", href: "/contact" }}
        cta2={{ label: "Explore Our Success Stories", href: "/case-studies" }}
      />

      {/* Stats */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[["10+","Years Experience"],["300+","Projects Delivered"],["200+","Satisfied Customers"],["Global","Delivery Reach"]].map(([n,l]) => (
              <div key={l} className="text-center">
                <div className="stat-number">{n}</div>
                <div className="text-sm mt-1" style={{color:"var(--slate-muted)"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <div className="eyebrow">Who We Are</div>
                <h2 className="font-display text-3xl font-800 text-white mb-6" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>A Technology Partner Focused on Business Outcomes</h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>
                  <p>Jubiliants Software Solutions was established with a simple vision — to help organizations leverage technology as a catalyst for growth and innovation.</p>
                  <p>What began as a software development initiative in Hyderabad has evolved into a technology company delivering cutting-edge solutions to clients across multiple countries and industries.</p>
                  <p>We believe technology should solve business challenges, simplify operations, and create measurable value. This philosophy drives every solution we design, develop, and deliver.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Software Solutions", desc: "Custom web applications, enterprise software, portals, ERP, CRM, and workflow automation." },
                  { title: "Mobile Applications", desc: "Android, iOS, and cross-platform apps that enhance engagement and workforce productivity." },
                  { title: "AI Solutions", desc: "Agentic AI, intelligent automation, AI decision-making, and enterprise AI solutions." },
                  { title: "Digital Transformation", desc: "Modernize operations, digitize workflows, optimize processes, and build future-ready organizations." },
                ].map((service, i) => (
                  <div key={service.title} className="glass rounded-xl p-5 glow-border">
                    <h3 className="font-display font-700 text-white mb-2 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{service.title}</h3>
                    <p className="text-xs leading-relaxed" style={{color:"var(--slate-muted)"}}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Our Journey</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Growing Through Innovation & Customer Success</h2>
            </div>
          </RevealOnScroll>
          <div className="max-w-2xl mx-auto">
            {journey.map((item, i) => (
              <RevealOnScroll key={item.year} delay={i * 100}>
                <div className="timeline-item mb-8">
                  <div className="font-display text-sm font-700 mb-1" style={{color:"var(--cyan-accent)",fontFamily:"Syne,sans-serif",fontWeight:700}}>{item.year}</div>
                  <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="text-4xl mb-4">🎯</div>
                <div className="eyebrow">Our Mission</div>
                <h2 className="font-display text-2xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Empowering Businesses Through Technology</h2>
                <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>Our mission is to help organizations leverage technology to improve efficiency, enhance customer experiences, and achieve sustainable growth. We strive to deliver innovative, scalable, and future-ready solutions that create lasting value for our customers, employees, and partners.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="glass rounded-2xl p-8 glow-border">
                <div className="text-4xl mb-4">🌐</div>
                <div className="eyebrow">Our Vision</div>
                <h2 className="font-display text-2xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Becoming a Globally Trusted Transformation Partner</h2>
                <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>Our vision is to be recognized as a leading provider of software, AI, and digital transformation solutions, helping businesses worldwide navigate change, embrace innovation, and unlock their full potential. We aim to build long-term partnerships based on trust, innovation, and measurable business success.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{background:"var(--navy-900)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Our Values</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>The Principles That Guide Us</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 80}>
                <div className="service-card glass rounded-2xl p-5 glow-border text-center">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-display font-700 text-white mb-2 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{color:"var(--slate-muted)"}}>{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="eyebrow justify-center">Industries We Serve</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Deep Domain Expertise Across Sectors</h2>
            </div>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare","Education","Manufacturing","Logistics & Supply Chain","Retail & E-Commerce","Professional Services","Financial Services","Hospitality","Government & Public Sector","Telecommunications"].map((ind, i) => (
              <RevealOnScroll key={ind} delay={i * 50}>
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
              <div className="eyebrow justify-center">Let's Collaborate</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Let's Build the Future Together</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>Technology is transforming the way businesses operate, compete, and grow. At Jubiliants, we are committed to helping organizations harness that transformation through innovative software, mobile applications, and AI services.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Schedule a Consultation →</Link>
                <Link href="/case-studies" className="btn-secondary">View Our Work</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
