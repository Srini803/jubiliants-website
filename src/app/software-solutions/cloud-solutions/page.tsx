import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CloudArchVisual, StatCallout } from "@/components/Visuals";

export const metadata = {
  title: "Cloud Solutions | Cloud Migration & Architecture | Jubiliants",
  description: "Enterprise cloud migration, cloud-native architecture, and managed cloud services on Azure, AWS, and Google Cloud. Reduce costs by 40% and achieve 99.99% uptime.",
};

const cloudServices = [
  { title: "Cloud Migration Assessment", desc: "We audit your current infrastructure, score workloads for cloud-readiness, estimate total cost of ownership, and produce a phased migration roadmap." },
  { title: "Lift & Shift Migration", desc: "Replicate existing workloads to the cloud with minimal disruption — ideal for legacy applications where re-architecture isn't justified." },
  { title: "Cloud-native Re-architecture", desc: "Modernise applications to leverage containers, serverless, managed databases, and auto-scaling — reducing operational overhead and cost." },
  { title: "Multi-cloud & Hybrid Strategy", desc: "Design resilient architectures that span on-premise, Azure, and AWS — with unified security, identity, and observability across environments." },
  { title: "DevOps & CI/CD Implementation", desc: "Implement infrastructure-as-code, automated testing pipelines, container orchestration, and zero-downtime deployment processes." },
  { title: "Cloud Security & Compliance", desc: "Zero-trust network design, identity and access management, encryption at rest and in transit, and compliance for SOC 2, ISO 27001, and GDPR." },
];

const cloudPlatforms = [
  { name: "Microsoft Azure", services: ["Azure Kubernetes Service", "Azure SQL PaaS", "Azure OpenAI", "Azure DevOps", "Entra ID (AAD)"] },
  { name: "Amazon Web Services", services: ["EKS / ECS", "RDS / Aurora", "AWS Bedrock (AI)", "CodePipeline", "Cognito"] },
  { name: "Google Cloud Platform", services: ["GKE", "Cloud SQL", "Vertex AI", "Cloud Build", "Firebase"] },
];

export default function CloudSolutions() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">Software Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Cloud Migration and Architecture That Reduces Cost and Risk</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We design and execute cloud migrations and cloud-native architectures on Azure, AWS, and GCP — reducing infrastructure cost by up to 40%, improving uptime to 99.99%, and eliminating on-premise maintenance burden.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Book a Cloud Assessment</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["40%", "Cost reduction"], ["99.99%", "Uptime SLA"], ["< 4hr", "Disaster recovery"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><CloudArchVisual /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Cloud services</div>
              <h2 className="t-h2">From assessment to optimisation</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {cloudServices.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p className="t-small">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Cloud platforms</div>
              <h2 className="t-h2">Certified expertise on all three major clouds</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.5rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {cloudPlatforms.map((p, i) => (
              <RevealOnScroll key={p.name} delay={i * 80}>
                <div className="card-flat" style={{ padding: "1.75rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem", color: "var(--text-1)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>{p.name}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {p.services.map(s => (
                      <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-2)" }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M3 8l3 3 7-7" stroke="#1B75BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
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
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Azure Migration</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Industrial Automation</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Emerson Electric</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>40% infrastructure cost reduction</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Migrated 14 on-premise workloads to Azure, re-architected the integration layer, and implemented auto-scaling — cutting annual infrastructure spend while improving system availability to 99.95%.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>AWS Multi-Region</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Agri-Tech</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Bowery Farming</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>99.98% uptime across 5 regions</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Designed and deployed a multi-region AWS architecture for real-time farm environment monitoring — ensuring zero data loss and sub-second failover across US and EU growing facilities.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Cloud-Native Platform</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Energy</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Spirax Group</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>60% faster release cycle</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Re-platformed a legacy industrial monitoring system to a cloud-native GCP architecture — containerising 40+ microservices, implementing CI/CD, and enabling weekly deployments.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to move to the cloud?" sub="Start with a free cloud assessment. We'll map your workloads, estimate costs, and build a migration plan." primary="Book Free Cloud Assessment" secondary="View Case Studies" />
    </>
  );
}
