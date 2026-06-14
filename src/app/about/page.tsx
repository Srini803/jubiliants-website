import { GlobalDeliveryVisual } from "@/components/Visuals";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "About Jubiliants | Custom Software & AI Company | Hyderabad, India",
  description: "Jubiliants Software Solutions — founded in Hyderabad in 2015. Custom software development, enterprise applications, and AI solutions. 200+ customers, 300+ projects globally.",
};

/* ── Global Delivery & Team Visual ─────────────────────
   Shows: Hyderabad HQ, global delivery reach, team composition
   Communicates: Established company with global capability
──────────────────────────────────────────────────────── */
const timeline = [
  {year:"2015",title:"Founded in Hyderabad",desc:"Started with a focus on custom enterprise software development for local businesses. First three customers were in healthcare and manufacturing."},
  {year:"2017",title:"Expanded to enterprise platforms",desc:"Grew the team to 20 engineers. Built our first multi-tenant ERP platform and delivered projects for clients in logistics and professional services."},
  {year:"2019",title:"First international projects",desc:"Delivered projects for clients in the UK, UAE, and Singapore. Reached the milestone of 100 projects completed."},
  {year:"2021",title:"Mobile centre of excellence",desc:"Built a dedicated mobile development team. Launched flagship iOS and Android apps for three major education and healthcare clients."},
  {year:"2023",title:"AI & automation practice launched",desc:"Invested in building a formal AI practice. Deployed our first Agentic AI system — a customer service agent handling 65% of tickets autonomously."},
  {year:"2025",title:"300+ projects, 200+ customers",desc:"A team of 80+ engineers, AI specialists, and consultants. Serving clients across India, UK, UAE, Singapore, and the US."},
];

const values = [
  {t:"Outcomes over outputs",d:"We measure our success by what changes in your business, not by lines of code written or hours billed."},
  {t:"Direct and honest",d:"We'll tell you when your idea needs refinement. We'd rather have that conversation early than deliver the wrong thing."},
  {t:"Long-term thinking",d:"We architect for where you're going, not just where you are. This prevents expensive rewrites and technical debt."},
  {t:"Ownership mentality",d:"Every developer on your project treats it as if it were their own business. No finger-pointing, no hand-offs."},
  {t:"Quality without compromise",d:"Code reviews, automated testing, security scans, and performance benchmarking are standard practice on every project."},
  {t:"Partnership, not vendor",d:"We work best when we're embedded in your team — in your planning meetings, understanding your customers."},
];

const leadership = [
  {name:"Srinivas Reddy",role:"Founder & CEO",initials:"SR",color:"#1D4ED8",bio:"20+ years in enterprise software. Led digital transformation programmes for manufacturing and healthcare organisations before founding Jubiliants in 2015."},
  {name:"Priya Nair",role:"VP Engineering",initials:"PN",color:"#0E7490",bio:"Former Infosys architect with deep expertise in distributed systems and cloud infrastructure. Leads Jubiliants' engineering standards and delivery practices."},
  {name:"Arjun Kumar",role:"Head of AI Practice",initials:"AK",color:"#6D28D9",bio:"AI/ML specialist with a background in NLP and agentic systems. Worked on enterprise AI adoption at TCS before joining Jubiliants to build the AI practice."},
  {name:"Deepa Sharma",role:"Head of Delivery",initials:"DS",color:"#065F46",bio:"PMP-certified delivery manager. Has led 80+ enterprise software projects. Responsible for on-time, on-budget delivery across all client engagements."},
];

export default function About() {
  return (
    <>
      {/* ── HERO with Global Delivery Visual ── */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{display:"grid",gridTemplateColumns:"45% 55%",gap:"3rem",alignItems:"center"}} className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left copy */}
            <div>
              <div className="section-label">About Jubiliants</div>
              <h1 className="t-h1" style={{marginBottom:"1rem"}}>Turning business problems into working software since 2015</h1>
              <p className="t-body-lg" style={{marginBottom:"1.75rem",maxWidth:"440px"}}>We are a custom software and AI solutions company headquartered in Hyderabad, India. 80+ engineers. 10 years. 200+ customers. Our mission: build software that makes your business measurably better.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem",marginBottom:"2rem"}}>
                <Link href="/contact" className="btn btn-primary">Work With Us</Link>
                <Link href="/case-studies" className="btn btn-secondary">See Our Work</Link>
              </div>
              {/* Global presence tags */}
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                {["🇮🇳 Hyderabad HQ","🇬🇧 London","🇦🇪 Dubai","🇸🇬 Singapore","🇺🇸 New York"].map(loc=>(
                  <span key={loc} className="chip" style={{fontSize:"0.75rem"}}>{loc}</span>
                ))}
              </div>
            </div>
            {/* Right — global delivery visual */}
            <div className="hidden lg:block" style={{minHeight:"520px",display:"flex",alignItems:"center"}}><GlobalDeliveryVisual/></div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Our story</div>
                <h2 className="t-h2" style={{marginBottom:"1.25rem"}}>Built by engineers, run like a business</h2>
                <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                  <p className="t-body">Jubiliants was founded by Srinivas Reddy in 2015, after a decade leading technology programmes at large enterprises. He saw the same pattern repeatedly: businesses paying for expensive, inflexible software that didn't actually fit how their teams worked.</p>
                  <p className="t-body">The original idea was simple — build a firm that thinks about business outcomes first, and technology second. That principle has guided every hiring decision, every architecture choice, and every client conversation since.</p>
                  <p className="t-body">Today, we're a team of 80+ engineers, AI specialists, designers, and project managers. We've delivered 300+ projects across healthcare, manufacturing, education, logistics, and financial services — and 95% of our customers stay with us for additional work.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
                {[["80+","Engineers & specialists"],["300+","Projects delivered"],["200+","Active customers"],["10","Years of experience"],["8","Industries served"],["95%","Client retention rate"]].map(([n,l])=>(
                  <div key={l} className="card-flat" style={{padding:"1.25rem",textAlign:"center"}}>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"1.75rem",color:"var(--text-1)",letterSpacing:"-0.01em",lineHeight:1}}>{n}</div>
                    <div style={{fontSize:"0.75rem",color:"var(--text-4)",marginTop:"0.375rem",lineHeight:1.4}}>{l}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"}} className="grid grid-cols-1 md:grid-cols-2">
            <RevealOnScroll>
              <div className="card-flat" style={{padding:"2rem",height:"100%",borderLeft:"3px solid var(--blue)"}}>
                <div style={{fontSize:"0.6875rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--blue-light)",marginBottom:"0.875rem"}}>Our Mission</div>
                <h3 className="t-h3" style={{marginBottom:"0.875rem"}}>Build software that makes businesses measurably better</h3>
                <p className="t-body">Every project we take on should make your team more productive, your customers better served, or your operations more efficient. If it doesn't, we've failed — and we hold ourselves to that standard on every engagement.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="card-flat" style={{padding:"2rem",height:"100%",borderLeft:"3px solid var(--blue)"}}>
                <div style={{fontSize:"0.6875rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--blue-light)",marginBottom:"0.875rem"}}>Our Vision</div>
                <h3 className="t-h3" style={{marginBottom:"0.875rem"}}>Be the most trusted technology partner for mid-market businesses in Asia</h3>
                <p className="t-body">We want to be the company that mid-market businesses in India and Asia turn to when they need technology done right — known for delivery quality, long-term partnerships, and honest advice.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"520px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Our journey</div>
              <h2 className="t-h2">A decade of growth and learning</h2>
            </div>
          </RevealOnScroll>
          <div style={{maxWidth:"700px",margin:"0 auto"}}>
            {timeline.map((t,i)=>(
              <RevealOnScroll key={t.year} delay={i*80}>
                <div style={{display:"flex",gap:"1.5rem",marginBottom:"1.75rem",paddingBottom:"1.75rem",borderBottom:i<timeline.length-1?"1px solid var(--border)":"none"}}>
                  <div style={{flexShrink:0,width:"64px",textAlign:"right"}}>
                    <span style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.9375rem",color:"var(--blue-light)"}}>{t.year}</span>
                  </div>
                  <div>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"1rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>{t.title}</div>
                    <p className="t-body">{t.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Our values</div>
              <h2 className="t-h2">How we think and how we work</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
            {values.map((v,i)=>(
              <RevealOnScroll key={v.t} delay={i*70}>
                <div className="card" style={{padding:"1.5rem"}}>
                  <h4 className="t-h4" style={{marginBottom:"0.5rem"}}>{v.t}</h4>
                  <p className="t-small">{v.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section id="team" className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"520px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Leadership team</div>
              <h2 className="t-h2">The people responsible for your project</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.25rem"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l,i)=>(
              <RevealOnScroll key={l.name} delay={i*80}>
                <div className="card-flat" style={{padding:"1.5rem",textAlign:"center"}}>
                  <div style={{width:"56px",height:"56px",borderRadius:"50%",background:l.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.125rem",fontFamily:"var(--font-heading)",fontWeight:600,color:"white",margin:"0 auto 1rem"}}>{l.initials}</div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.25rem"}}>{l.name}</div>
                  <div style={{fontSize:"0.8125rem",color:"var(--blue-light)",marginBottom:"0.875rem"}}>{l.role}</div>
                  <p className="t-small">{l.bio}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Industries we serve</div>
              <h2 className="t-h2">Deep domain expertise across 8 sectors</h2>
              <p className="t-body" style={{maxWidth:"500px",margin:"0.75rem auto 0"}}>We hire developers who understand your industry — not just your technology stack.</p>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.875rem"}} className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {n:"Healthcare",i:"🏥"},{n:"Manufacturing",i:"🏭"},{n:"Education",i:"🎓"},
              {n:"Retail & E-Commerce",i:"🛒"},{n:"Logistics",i:"🚚"},{n:"Financial Services",i:"🏦"},
              {n:"Professional Services",i:"💼"},{n:"Government",i:"🏛️"},
            ].map((ind,i)=>(
              <RevealOnScroll key={ind.n} delay={i*50}>
                <div className="industry-pill">
                  <span style={{fontSize:"1.25rem"}}>{ind.i}</span>
                  <span style={{fontFamily:"var(--font-heading)",fontWeight:500,fontSize:"0.875rem",color:"var(--text-2)"}}>{ind.n}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's build something together" sub="Whether you have a detailed spec or just a business problem — book a call and let's figure out the right approach." primary="Book a Free Call" secondary="View Case Studies"/>
    </>
  );
}
