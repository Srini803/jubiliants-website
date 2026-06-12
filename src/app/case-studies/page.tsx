import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Case Studies | Success Stories | Jubiliants Software Solutions",
  description: "Discover how Jubiliants has helped organizations across healthcare, education, manufacturing, and more achieve measurable business outcomes through custom software, mobile apps, and AI solutions.",
};

const caseStudies = [
  {
    category: "Healthcare", title: "Multi-Hospital Digital Transformation Initiative",
    challenge: "A growing healthcare group was managing patient registrations, appointments, billing, inventory, and reporting through disconnected systems and manual processes.",
    solution: "Jubiliants developed and implemented an integrated Hospital Information Management System (HIMS) with centralized reporting and workflow automation.",
    results: ["60% reduction in administrative workload","Improved patient service efficiency","Real-time operational visibility","Faster decision-making through analytics"],
    tags: ["Digital Transformation","ERP","Healthcare"],
  },
  {
    category: "Manufacturing", title: "Manufacturing Operations Modernization",
    challenge: "A manufacturing company relied heavily on spreadsheets and manual reporting for production planning and inventory management.",
    solution: "Jubiliants developed a centralized ERP platform integrating procurement, inventory, production, quality control, and management reporting.",
    results: ["Increased operational visibility","Reduced inventory discrepancies","Improved production planning accuracy","Enhanced reporting efficiency"],
    tags: ["ERP","Custom Software","Manufacturing"],
  },
  {
    category: "Education", title: "Educational Institution Digital Transformation",
    challenge: "An educational institution faced challenges managing admissions, student records, attendance, fee management, and communication.",
    solution: "Jubiliants implemented a comprehensive Student Information Management System (SIMS) with mobile access for students, parents, and faculty.",
    results: ["Streamlined admissions process","Improved student engagement","Automated administrative workflows","Enhanced stakeholder communication"],
    tags: ["Mobile App","Digital Transformation","Education"],
  },
  {
    category: "Healthcare", title: "Hospital Patient Engagement Mobile App",
    challenge: "A healthcare provider wanted to improve patient communication, appointment management, and access to healthcare services through mobile devices.",
    solution: "Jubiliants developed a patient engagement mobile application enabling appointment scheduling, access to medical records, online consultations, and digital payments.",
    results: ["Improved patient satisfaction","Reduced appointment no-shows","Enhanced patient engagement","Streamlined healthcare access"],
    tags: ["Mobile App","Healthcare","iOS & Android"],
  },
  {
    category: "Education", title: "Student & Parent Mobile Application",
    challenge: "An educational institution required a mobile platform to improve communication between students, parents, and faculty while simplifying academic management.",
    solution: "Jubiliants developed a comprehensive mobile application providing attendance tracking, academic updates, fee management, examination results, and communication tools.",
    results: ["Improved parent engagement","Faster communication","Enhanced student experience","Reduced administrative workload"],
    tags: ["Mobile App","Education","Cross-Platform"],
  },
  {
    category: "Field Services", title: "Field Service Management Mobile Application",
    challenge: "A service organization faced difficulties managing field technicians, work orders, inspections, and customer updates in real time.",
    solution: "Jubiliants developed a mobile workforce management application with task assignments, GPS tracking, digital forms, photo uploads, and real-time reporting.",
    results: ["Increased technician productivity","Faster service delivery","Improved customer satisfaction","Real-time operational visibility"],
    tags: ["Mobile App","Field Service","Enterprise"],
  },
  {
    category: "Agentic AI", title: "AI Customer Service Agent for Healthcare",
    challenge: "A healthcare organization struggled with high volumes of appointment-related inquiries, patient support requests, and repetitive customer service interactions.",
    solution: "Jubiliants implemented an AI-powered customer support agent integrated with scheduling and patient management systems.",
    results: ["65% reduction in support workload","Faster patient response times","Improved service availability","Enhanced patient satisfaction"],
    tags: ["Agentic AI","Healthcare","Automation"],
  },
  {
    category: "AI", title: "AI Sales Assistant for Lead Qualification",
    challenge: "A growing business received hundreds of inquiries every month but lacked the resources to engage every lead promptly.",
    solution: "Jubiliants deployed an AI sales agent capable of engaging prospects, qualifying opportunities, answering questions, and scheduling meetings automatically.",
    results: ["Increased lead engagement","Faster response times","Improved sales productivity","Higher conversion opportunities"],
    tags: ["Agentic AI","Sales","CRM"],
  },
  {
    category: "AI Automation", title: "AI-Powered Invoice Processing Automation",
    challenge: "A finance department manually processed hundreds of invoices every month, resulting in delays, errors, and high administrative effort.",
    solution: "Jubiliants implemented an AI-driven document processing system capable of extracting, validating, and routing invoice data automatically.",
    results: ["75% reduction in processing time","Improved data accuracy","Faster approvals","Reduced operational costs"],
    tags: ["AI Automation","Finance","Document Processing"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Delivering Measurable Business Outcomes"
        subtitle="Explore how Jubiliants has partnered with organizations across industries to solve complex challenges, modernize operations, and drive meaningful results through custom software, mobile applications, and AI solutions."
        cta1={{ label: "Start Your Project", href: "/contact" }}
      />

      {/* Stats */}
      <section style={{background:"var(--navy-800)",borderBottom:"1px solid rgba(0,194,255,0.08)"}}>
        <div className="container-main py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["300+","Projects Delivered"],["200+","Happy Customers"],["10+","Years Experience"],["95%+","Client Retention"]].map(([n,l]) => (
              <div key={l}><div className="stat-number">{n}</div><div className="text-sm mt-1" style={{color:"var(--slate-muted)"}}>{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="eyebrow justify-center">Success Stories</div>
              <h2 className="font-display text-3xl font-800 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Real Projects, Real Results</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <RevealOnScroll key={cs.title} delay={i * 60}>
                <div className="glass rounded-2xl p-7 glow-border h-full flex flex-col service-card">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-600" style={{background:"rgba(0,194,255,0.1)",color:"var(--cyan-accent)",fontWeight:600}}>{cs.category}</span>
                  </div>
                  <h3 className="font-display font-700 text-white mb-3 text-base leading-snug" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>{cs.title}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-700 mb-1" style={{color:"var(--blue-bright)",fontWeight:700,letterSpacing:"0.06em"}}>CHALLENGE</p>
                    <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-700 mb-1" style={{color:"var(--blue-bright)",fontWeight:700,letterSpacing:"0.06em"}}>SOLUTION</p>
                    <p className="text-sm leading-relaxed" style={{color:"var(--slate-muted)"}}>{cs.solution}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs font-700 mb-2" style={{color:"var(--cyan-accent)",fontWeight:700,letterSpacing:"0.06em"}}>RESULTS</p>
                    <ul className="space-y-1 mb-4">
                      {cs.results.map(r => (
                        <li key={r} className="flex items-start gap-2 text-sm" style={{color:"var(--slate-light)"}}>
                          <span className="flex-shrink-0" style={{color:"var(--cyan-accent)"}}>✓</span>{r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded" style={{background:"rgba(30,111,217,0.15)",color:"var(--slate-light)"}}>{t}</span>
                      ))}
                    </div>
                  </div>
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
              <div className="eyebrow justify-center">Your Success Story Awaits</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Ready to Become Our Next Success Story?</h2>
              <p className="mb-8" style={{color:"var(--slate-muted)"}}>Every great project starts with a conversation. Let's discuss your business goals and build something great together.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Start Your Project →</Link>
                <Link href="/about" className="btn-secondary">Learn About Us</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
