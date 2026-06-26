import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { MobileScreensVisual, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "Mobile App Development | iOS, Android & Cross-Platform | Jubiliants",
  description: "Custom mobile application development for iOS, Android, and cross-platform (Flutter, React Native). Customer apps, enterprise mobility, field service, and healthcare apps since 2015.",
};

const appTypes = [
  { title: "Customer Engagement Apps", desc: "Branded iOS and Android apps for loyalty, booking, e-commerce, and self-service — native performance with a UI your customers will want to open." },
  { title: "Enterprise Mobility Apps", desc: "Field service, sales force automation, inspection tools, and employee self-service — with offline mode for teams working in low-connectivity environments." },
  { title: "Healthcare Mobile Apps", desc: "Patient engagement, appointment booking, teleconsultation, and clinical workflow apps — built with privacy and security at the centre." },
  { title: "Education Apps", desc: "Student information systems, learning management, attendance, fee payments, and parent communication in a single mobile experience." },
  { title: "Logistics & Delivery Apps", desc: "Driver apps, delivery tracking, proof-of-delivery, route optimisation, and real-time dispatch management — with live GPS and barcode scanning." },
  { title: "E-Commerce Apps", desc: "Product browsing, cart, checkout, payment integration, order tracking, and push notification marketing — built for conversion." },
];

const platforms = [
  { p: "Native iOS", items: ["Swift / SwiftUI", "Xcode", "App Store deployment", "Apple HIG compliance"] },
  { p: "Native Android", items: ["Kotlin / Java", "Jetpack Compose", "Google Play deployment", "Material Design 3"] },
  { p: "Flutter (Cross-platform)", items: ["Single Dart codebase", "iOS + Android", "Near-native performance", "Rapid iteration"] },
  { p: "React Native", items: ["JavaScript / TypeScript", "iOS + Android", "Expo ecosystem", "OTA updates"] },
];

const deliveryProcess = [
  { n: "01", t: "Discovery & UX", d: "User research, journey mapping, wireframing, and UX prototype. Validated with real users before development begins." },
  { n: "02", t: "UI Design", d: "Pixel-perfect designs in Figma — platform-appropriate, on-brand, and accessibility-compliant." },
  { n: "03", t: "Agile Development", d: "2-week sprints. TestFlight / Play Console builds at every milestone. You test on real devices continuously." },
  { n: "04", t: "QA & Store Launch", d: "Device matrix testing, performance profiling, App Store / Play Store submission, and post-launch monitoring." },
];

export default function MobileApplications() {
  return (
    <>
      {/* Hero with Mobile Screens Visual */}
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Mobile Applications That Drive Engagement and Efficiency</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build high-performance iOS, Android, and Flutter mobile applications — customer-facing apps, enterprise mobility tools, and field service solutions — with the UX quality users expect from global products.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Get a Free App Estimate</Link>
                <Link href="/case-studies" className="btn btn-secondary">View App Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["80+", "Apps delivered"], ["4.7★", "Avg store rating"], ["iOS+Android", "Full coverage"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.125rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><MobileScreensVisual /></div>
          </div>
        </div>
      </section>

      {/* App types */}
      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">App categories</div>
              <h2 className="t-h2">Mobile solutions across every use case</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {appTypes.map((a, i) => (
              <RevealOnScroll key={a.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p className="t-small">{a.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms + Process */}
      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gap: "5rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Platform expertise</div>
                <h2 className="t-h2" style={{ marginBottom: "1.5rem" }}>Native or cross-platform — we advise based on your needs</h2>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {platforms.map((p, i) => (
                    <div key={p.p} className="card-flat" style={{ padding: "1.25rem" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "0.75rem" }}>{p.p}</div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {p.items.map(it => <li key={it} style={{ fontSize: "0.8125rem", color: "var(--text-2)" }}>{it}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div>
                <div className="section-label">Delivery process</div>
                <h2 className="t-h2" style={{ marginBottom: "1.5rem" }}>From concept to App Store in 12–16 weeks</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {deliveryProcess.map(p => (
                    <div key={p.n} className="card-flat" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--blue-light)", flexShrink: 0, width: "36px" }}>{p.n}</div>
                      <div>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-1)", marginBottom: "0.25rem" }}>{p.t}</div>
                        <p className="t-small">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"520px",marginBottom:"2.5rem"}}>
              <div className="section-label">Client results</div>
              <h2 className="t-h2">What we have delivered</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Harvest Management App</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Agriculture</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Barfoots</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>Real-time tracking across 20+ farm sites</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Developed a mobile app for harvest supervisors to log crop volumes, assign pickers, track daily targets, and generate packing reports — reducing end-of-day admin by 3 hours.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Field Inspector App</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Infrastructure</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Stantec</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>70% faster site inspection reporting</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built an iOS and Android app for field inspectors to capture site data, photos, measurements, and compliance checklists offline — auto-generating structured reports on sync.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Precision Farming App</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Agri-Tech</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Trimble Inc.</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>3x increase in farmer data capture rate</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Developed a mobile companion app for precision agriculture hardware — letting farmers view field maps, log observations, review sensor data, and receive AI-driven planting recommendations.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to build your mobile app?" sub="Share your idea. We'll scope it and give you a realistic timeline and cost within 48 hours." primary="Get App Estimate" secondary="View Case Studies" />
    </>
  );
}
