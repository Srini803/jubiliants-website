import { TransformationJourneyV2 } from "@/components/Visuals";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Digital Transformation Services | Jubiliants Software Solutions",
  description: "End-to-end digital transformation: legacy modernisation, process digitisation, cloud adoption, and AI integration. 10+ years experience, 300+ projects.",
};

/* ── Enterprise Transformation Journey Visual ───────────
   Shows legacy → cloud migration → modern digital enterprise
   Left: silos / paper / legacy   Centre: migration flow   Right: unified platform
──────────────────────────────────────────────────────── */
const services = [
  {t:"Legacy System Modernisation",d:"Replace spreadsheets, outdated applications, and paper-based processes with scalable, cloud-enabled digital systems."},
  {t:"Process Digitisation",d:"Map, redesign, and digitise manual workflows — creating transparent, auditable, and automatable business processes."},
  {t:"Cloud Adoption",d:"Migrate applications and data to Azure, AWS, or Google Cloud — improving reliability, scalability, and cost efficiency."},
  {t:"Data & Analytics",d:"Centralised dashboards, executive reporting, and business intelligence platforms that turn data into decisions."},
  {t:"Systems Integration",d:"Connect siloed applications via APIs — eliminating double data entry and creating a unified view of your operations."},
  {t:"AI Integration",d:"Embed AI capabilities into existing workflows: automation, intelligent search, predictive analytics, and smart assistants."},
];

export default function DigitalTransformation() {
  return (
    <>
      {/* ── HERO with Transformation Journey Visual ── */}
      <section className="hero-section hero-section-inner">
        <div className="wrap">
          <div className="hero-grid">
            {/* Left copy */}
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{marginBottom:"1rem"}}>Digital Transformation That Delivers Tangible Business Outcomes</h1>
              <p className="t-body-lg" style={{marginBottom:"1.75rem",maxWidth:"440px"}}>Transformation isn't about technology for its own sake. We help organisations modernise operations, eliminate inefficiencies, and build a foundation for growth — at a pace that works for your business.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}}>
                <Link href="/contact" className="btn btn-primary">Book a Transformation Assessment</Link>
                <Link href="/case-studies" className="btn btn-secondary">See Case Studies</Link>
              </div>
              {/* Quick proof points */}
              <div style={{display:"grid",gap:"0.75rem",marginTop:"2rem"}}>
                {[["300+","Projects delivered"],["10+","Years experience"],["60%","Avg efficiency gain"],["95%","Client retention"]].map(([n,l])=>(
                  <div key={l} style={{padding:"0.875rem",background:"var(--bg-raised)",borderRadius:"8px",border:"1px solid var(--border)"}}>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"1.25rem",color:"var(--text-1)",lineHeight:1}}>{n}</div>
                    <div style={{fontSize:"0.75rem",color:"var(--text-4)",marginTop:"0.25rem"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — transformation journey diagram */}
            <div className="flex hero-visual-col"><TransformationJourneyV2/></div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"600px",marginBottom:"2.5rem"}}>
              <div className="section-label">Service areas</div>
              <h2 className="t-h2">How we support your transformation</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s,i)=>(
              <RevealOnScroll key={s.t} delay={i*70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <h3 className="t-h4" style={{marginBottom:"0.5rem"}}>{s.t}</h3>
                  <p className="t-small">{s.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JUBILIANTS ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 2.5rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Why choose us</div>
              <h2 className="t-h2">A structured approach that minimises risk</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1rem"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {step:"01",t:"Assess",d:"Map your current state — systems, processes, data flows, and pain points."},
              {step:"02",t:"Roadmap",d:"Define a phased transformation plan aligned to business priorities and budget."},
              {step:"03",t:"Execute",d:"Build and deploy in controlled phases, with continuous validation and feedback."},
              {step:"04",t:"Optimise",d:"Monitor outcomes, iterate on systems, and drive continuous improvement."},
            ].map((p,i)=>(
              <RevealOnScroll key={p.step} delay={i*80}>
                <div className="card-flat" style={{padding:"1.5rem"}}>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"1.375rem",color:"var(--blue-light)",marginBottom:"0.5rem"}}>{p.step}</div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"1rem",color:"var(--text-1)",marginBottom:"0.5rem"}}>{p.t}</div>
                  <p className="t-small">{p.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready to start your transformation?" sub="Book a free assessment. We'll map your current state and identify the highest-impact improvement areas." primary="Book Free Assessment" secondary="View Case Studies"/>
    </>
  );
}
