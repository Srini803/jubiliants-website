import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GenAIVisual } from "@/components/Visuals";

export const metadata = {
  title: "Generative AI Solutions | LLM Applications & RAG Systems | Jubiliants",
  description: "Enterprise Generative AI applications: RAG-based knowledge systems, LLM-powered automation, AI document processing, and custom GPT solutions on Azure OpenAI, Claude, and Gemini.",
};

const useCases = [
  { title: "Enterprise Knowledge Assistant", desc: "Deploy an AI assistant that answers questions from your internal documents, SOPs, product manuals, and knowledge bases — with citations and access controls." },
  { title: "AI Document Processing", desc: "Automatically extract, summarise, classify, and route information from contracts, invoices, RFPs, reports, and forms using LLMs and structured extraction." },
  { title: "Customer-facing AI Products", desc: "Build AI-powered product features — smart search, content generation, personalised recommendations, and conversational interfaces for your end users." },
  { title: "Code Generation & Review", desc: "Accelerate developer productivity with AI pair-programming tools, automated code review, test generation, and documentation drafting." },
  { title: "Report & Content Generation", desc: "Automate the creation of management reports, client proposals, compliance documents, and marketing content from structured business data." },
  { title: "LLM Fine-tuning", desc: "Fine-tune open-source models (Llama, Mistral) on your domain-specific data for tasks where general-purpose models underperform." },
];

const models = [
  { name: "OpenAI GPT-4o", use: "Complex reasoning, vision, function calling" },
  { name: "Anthropic Claude 3.5", use: "Long context, safety-critical enterprise apps" },
  { name: "Google Gemini Pro", use: "Multimodal, Google ecosystem integration" },
  { name: "Llama 3 / Mistral", use: "On-premise & private deployment" },
  { name: "Azure OpenAI Service", use: "Enterprise compliance, VNET isolation" },
  { name: "AWS Bedrock", use: "AWS-native workloads, multi-model access" },
];

export default function GenerativeAI() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Generative AI Applications That Deliver Business Value</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build production-grade Generative AI applications on GPT-4o, Claude, and Gemini — RAG-powered knowledge systems, document intelligence, and AI-native product features — with the enterprise controls your organisation requires.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn btn-primary">Book an AI Consultation</Link>
                <Link href="/case-studies" className="btn btn-secondary">View AI Case Studies</Link>
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><GenAIVisual /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Use cases</div>
              <h2 className="t-h2">How businesses are applying Generative AI today</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {useCases.map((uc, i) => (
              <RevealOnScroll key={uc.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{uc.title}</h3>
                  <p className="t-small">{uc.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ display: "grid", gap: "5rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="section-label">Enterprise-grade delivery</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>AI that's accurate, safe, and auditable</h2>
                <p className="t-body" style={{ marginBottom: "1.5rem" }}>We don't just wrap an API. Every Generative AI system we build includes hallucination guards, source citations, access controls, audit logging, and human-in-the-loop escalation — because enterprise AI needs to be trustworthy, not just impressive.</p>
                <ul className="check-list">
                  {["Retrieval-Augmented Generation (RAG) for factual accuracy", "Source citations — every answer is traceable", "Role-based data access within AI responses", "Full audit log of every query and response", "Prompt injection and jailbreak protection", "PII redaction and data residency controls"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div style={{ display: "grid", gap: "1rem" }}>
                {models.map((m, i) => (
                  <RevealOnScroll key={m.name} delay={i * 60}>
                    <div className="card-flat" style={{ padding: "1.25rem" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.875rem", color: "var(--blue-light)", marginBottom: "0.375rem" }}>{m.name}</div>
                      <p className="t-small">{m.use}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
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
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>AI Content Generation</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Digital</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Fathom Digital</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>90% reduction in content drafting time</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built a generative AI platform that produces campaign briefs, ad copy, and social content at scale — trained on brand guidelines and integrated with the content management workflow.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Technical Documentation AI</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Manufacturing</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Proto Labs</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>4x faster technical specification generation</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Deployed a GenAI system that reads CAD metadata and customer inputs to auto-generate manufacturing specs, quality checklists, and shipping documents — cutting documentation time from hours to minutes.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>AI Report Generation</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Agri-Science</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Bayer Crop Science</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>75% faster regulatory reporting</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Created a generative AI pipeline that ingests field trial data, applies regulatory reporting templates, and produces compliance-ready crop science reports for multiple European authorities.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to build your Generative AI application?" sub="Let's identify the highest-ROI use case in your business and build a working prototype in 3 weeks." primary="Book a Free GenAI Consultation" secondary="View AI Case Studies" />
    </>
  );
}
