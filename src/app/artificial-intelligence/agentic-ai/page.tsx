import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StatCallout, ProcessFlowVisual } from "@/components/Visuals";

export const metadata = {
  title: "Agentic AI Solutions | Autonomous AI Agents | Jubiliants",
  description: "Jubiliants builds autonomous AI agents that handle business processes, support customers, qualify leads, and assist employees — 24/7 without human intervention.",
};

/* ── AI Workflow Hero Illustration ─────────────────────
   Shows: Input → AI Orchestrator → Multiple agent types → Business outcomes
   Communicates: AI agents working autonomously for enterprise operations
──────────────────────────────────────────────────────── */
const AIWorkflowDiagram = () => (
  <div style={{position:"relative",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
    <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{width:"100%",maxWidth:"520px",filter:"drop-shadow(0 20px 40px rgba(0,0,0,.5))"}}>

      {/* ── TITLE BAR ── */}
      <g className="hv-g1">
        <rect x="0" y="0" width="520" height="380" rx="14" fill="#111827" stroke="#1F2937" strokeWidth="1"/>
        <rect x="0" y="0" width="520" height="36" rx="14" fill="#1E293B"/>
        <rect x="0" y="24" width="520" height="12" fill="#1E293B"/>
        <circle cx="18" cy="18" r="5" fill="#EF4444" opacity=".7"/>
        <circle cx="32" cy="18" r="5" fill="#F59E0B" opacity=".7"/>
        <circle cx="46" cy="18" r="5" fill="#22C55E" opacity=".7"/>
        <text x="64" y="22" fontSize="8.5" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">Jubiliants Agentic AI Platform</text>
        <rect x="400" y="10" width="108" height="16" rx="8" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.3)" strokeWidth=".5"/>
        <circle cx="410" cy="18" r="3" fill="#22C55E" className="hv-pulse"/>
        <text x="416" y="22" fontSize="7" fill="#86EFAC" fontFamily="Inter,sans-serif" fontWeight="500">All agents running</text>
      </g>

      {/* ── INPUTS (left column) ── */}
      <g className="hv-g2">
        <text x="14" y="58" fontSize="7" fill="#64748B" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".08em">INPUTS</text>
        {[
          {y:68, label:"Customer Email", icon:"✉"},
          {y:104,label:"Support Ticket", icon:"🎫"},
          {y:140,label:"Sales Lead Form", icon:"📋"},
          {y:176,label:"HR Request",     icon:"👤"},
          {y:212,label:"Invoice Upload",  icon:"📄"},
        ].map(item=>(
          <g key={item.y}>
            <rect x="10" y={item.y} width="108" height="28" rx="6" fill="#1E293B" stroke="#334155" strokeWidth=".75"/>
            <text x="22" y={item.y+18} fontSize="8" fill="#CBD5E1" fontFamily="Inter,sans-serif">{item.icon}  {item.label}</text>
          </g>
        ))}
      </g>

      {/* ── FLOW LINES from inputs to orchestrator ── */}
      <g className="hv-g2" opacity=".5">
        {[82,118,154,190,226].map((y,i)=>(
          <line key={i} x1="118" y1={y} x2="180" y2="190" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
        ))}
      </g>

      {/* ── ORCHESTRATOR (centre) ── */}
      <g className="hv-g3">
        <rect x="178" y="152" width="116" height="76" rx="10" fill="#1E3A8A" stroke="#2563EB" strokeWidth="1"/>
        {/* Animated ring */}
        <circle cx="236" cy="176" r="24" fill="none" stroke="#2563EB" strokeWidth="1" opacity=".3" className="hv-spin"/>
        <circle cx="236" cy="176" r="18" fill="none" stroke="#3B82F6" strokeWidth="1" opacity=".4"/>
        <circle cx="236" cy="176" r="10" fill="#2563EB" opacity=".8"/>
        <circle cx="236" cy="176" r="5"  fill="#93C5FD"/>
        <text x="200" y="216" fontSize="7.5" fontWeight="700" fill="#93C5FD" fontFamily="Inter,sans-serif">AI Orchestrator</text>
        <text x="202" y="227" fontSize="6"   fill="#475569" fontFamily="Inter,sans-serif">GPT-4o · Claude · Gemini</text>
      </g>

      {/* ── FLOW LINES from orchestrator to agents ── */}
      <g className="hv-g3" opacity=".5">
        {[74,112,154,196,240,282].map((y,i)=>(
          <line key={i} x1="294" y1="190" x2="340" y2={y+14} stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
        ))}
      </g>

      {/* ── AGENT CARDS (right column) ── */}
      <g className="hv-g4">
        <text x="340" y="58" fontSize="7" fill="#64748B" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".08em">AI AGENTS</text>
        {[
          {y:64,  label:"Customer Support Agent",  status:"142 resolved today", sc:"#22C55E",bg:"rgba(34,197,94,.08)"},
          {y:104, label:"Sales Development Agent", status:"38 leads qualified",  sc:"#3B82F6",bg:"rgba(59,130,246,.08)"},
          {y:144, label:"HR & Recruitment Agent",  status:"12 CVs screened",    sc:"#8B5CF6",bg:"rgba(139,92,246,.08)"},
          {y:184, label:"IT Helpdesk Agent",        status:"99% tickets auto",   sc:"#06B6D4",bg:"rgba(6,182,212,.08)"},
          {y:224, label:"Knowledge Assistant",     status:"500+ queries/hr",    sc:"#F59E0B",bg:"rgba(245,158,11,.08)"},
          {y:264, label:"Finance Automation Agent",status:"₹ 2.4Cr processed",  sc:"#22C55E",bg:"rgba(34,197,94,.08)"},
        ].map(a=>(
          <g key={a.y}>
            <rect x="338" y={a.y} width="168" height="32" rx="7" fill={a.bg} stroke="#1F2937" strokeWidth=".75"/>
            <rect x="346" y={a.y+9} width="8" height="14" rx="2" fill={a.sc} opacity=".7"/>
            <text x="360" y={a.y+16} fontSize="7.5" fontWeight="600" fill="#E2E8F0" fontFamily="Inter,sans-serif">{a.label}</text>
            <text x="360" y={a.y+26} fontSize="6" fill="#64748B" fontFamily="Inter,sans-serif">{a.status}</text>
          </g>
        ))}
      </g>

      {/* ── OUTPUT ROW (bottom) ── */}
      <g className="hv-g5">
        <line x1="14" y1="318" x2="506" y2="318" stroke="#1F2937" strokeWidth="1"/>
        <text x="14" y="334" fontSize="7" fill="#64748B" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".06em">BUSINESS OUTCOMES</text>
        {[
          {x:14,  label:"65%",      sub:"Ticket deflection"},
          {x:100, label:"24/7",     sub:"Operations coverage"},
          {x:186, label:"< 3s",     sub:"Response time"},
          {x:272, label:"70%",      sub:"Manual work reduced"},
          {x:358, label:"₹1.2Cr",   sub:"Annual cost saving"},
          {x:444, label:"99%",      sub:"SLA compliance"},
        ].map(o=>(
          <g key={o.x}>
            <text x={o.x} y={354} fontSize="13" fontWeight="700" fill="#F8FAFC" fontFamily="Inter,sans-serif">{o.label}</text>
            <text x={o.x} y={367} fontSize="6"   fill="#475569" fontFamily="Inter,sans-serif">{o.sub}</text>
          </g>
        ))}
      </g>
    </svg>
  </div>
);

const agentTypes = [
  {t:"Customer Support Agents",d:"Handle tier-1 and tier-2 support queries, process refunds, check order status, and escalate complex cases — integrated with your CRM and ticketing system."},
  {t:"Sales Development Agents",d:"Qualify inbound leads, engage prospects via email and chat, answer product questions, and schedule demos for your sales team automatically."},
  {t:"HR & Recruitment Agents",d:"Screen CVs, shortlist candidates, schedule interviews, answer policy questions, and guide new hires through onboarding."},
  {t:"IT Helpdesk Agents",d:"Reset passwords, diagnose common issues, create tickets, retrieve knowledge base answers, and escalate to human agents with full context."},
  {t:"Knowledge Assistants",d:"Let employees instantly retrieve information from your SOPs, policies, product documentation, and knowledge bases via natural language."},
  {t:"Operations Agents",d:"Monitor workflows, detect exceptions, route approvals, trigger actions in connected systems, and surface anomalies to managers proactively."},
];

export default function AgenticAI() {
  return (
    <>
      {/* ── HERO with AI Workflow Visual ── */}
      <section className="hero-section hero-section-inner">
        <div className="wrap">
          <div className="hero-grid">
            {/* Left copy */}
            <div>
              <div className="hero-badge" style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"var(--blue-dim)",border:"1px solid rgba(37,99,235,0.25)",borderRadius:"999px",padding:"0.3125rem 0.875rem",marginBottom:"1.25rem"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E",display:"block"}} className="hv-pulse"></span>
                <span style={{fontSize:"0.75rem",fontWeight:600,color:"#86EFAC"}}>Up to 70% reduction in manual task volume</span>
              </div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{marginBottom:"1rem"}}>AI Agents That Work Autonomously Across Your Business</h1>
              <p className="t-body-lg" style={{marginBottom:"1.75rem",maxWidth:"460px"}}>Beyond chatbots — Agentic AI systems that understand goals, access your business systems, make decisions, and execute multi-step tasks with minimal human oversight.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}}>
                <Link href="/contact" className="btn btn-primary">Book an AI Consultation</Link>
                <Link href="/case-studies" className="btn btn-secondary">View AI Case Studies</Link>
              </div>
            </div>
            {/* Right — AI workflow diagram */}
            <div className="hidden lg:flex hero-visual-col"><AIWorkflowDiagram/></div>
          </div>
        </div>
      </section>

      {/* Stats callout */}
      <section style={{ background: "var(--bg-base)", padding: "3rem 0" }}>
        <div className="wrap">
          <RevealOnScroll>
            <StatCallout stats={[
              { val: "70%", label: "Reduction in manual task volume", sub: "Average across AI agent deployments" },
              { val: "24/7", label: "Continuous operations", sub: "Agents never sleep, never take leave" },
              { val: "65%", label: "Ticket deflection rate", sub: "In production healthcare deployment" },
              { val: "< 3s", label: "Average response time", sub: "vs hours for human agents" },
            ]} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT IS AGENTIC AI ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{display:"grid",gap:"5rem",alignItems:"center"}} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="section-label">What is Agentic AI?</div>
                <h2 className="t-h2" style={{marginBottom:"1rem"}}>AI that acts, not just answers</h2>
                <p className="t-body" style={{marginBottom:"1.25rem"}}>Traditional AI tools respond to queries. Agentic AI takes it further — these are systems that can be given a goal and will autonomously plan the steps, access the right tools, execute actions, and report outcomes.</p>
                <p className="t-body" style={{marginBottom:"1.5rem"}}>Think of them as digital colleagues that work 24/7: they can log into your CRM, pull customer records, send emails, create tickets, update databases, and loop in a human only when genuinely needed.</p>
                <ul className="check-list">
                  {["Integrated with your existing software stack","Handles multi-step, conditional workflows","Escalates with full context when humans are needed","Continuously improves from feedback and outcomes","Built on enterprise-grade LLMs (GPT-4o, Claude, Gemini)"].map(l=><li key={l}>{l}</li>)}
                </ul>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                {[
                  {s:"70%",l:"Reduction in repetitive manual task volume"},
                  {s:"24/7",l:"Availability — agents never sleep or take leave"},
                  {s:"65%",l:"Ticket deflection achieved in healthcare deployment"},
                  {s:"< 3s",l:"Average agent response time vs hours for human agents"},
                ].map(m=>(
                  <div key={m.l} className="card-flat" style={{padding:"1.25rem",borderLeft:"3px solid var(--blue)",display:"flex",alignItems:"center",gap:"1.25rem"}}>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"1.625rem",color:"var(--text-1)",letterSpacing:"-0.01em",minWidth:"68px"}}>{m.s}</div>
                    <div style={{fontSize:"0.9375rem",color:"var(--text-2)"}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── AGENT TYPES ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"600px",marginBottom:"2.5rem"}}>
              <div className="section-label">Agent types</div>
              <h2 className="t-h2">Purpose-built agents for every business function</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
            {agentTypes.map((a,i)=>(
              <RevealOnScroll key={a.t} delay={i*70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <h3 className="t-h4" style={{marginBottom:"0.5rem"}}>{a.t}</h3>
                  <p className="t-small">{a.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 2.5rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Technology</div>
              <h2 className="t-h2">Enterprise-grade AI infrastructure</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1rem"}} className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {cat:"LLM Models",items:["OpenAI GPT-4o","Anthropic Claude","Google Gemini","Open Source (Llama)"]},
              {cat:"Agent Frameworks",items:["LangGraph","CrewAI","AutoGen","LangChain"]},
              {cat:"Integrations",items:["Salesforce, HubSpot","ServiceNow, Jira","SAP, Oracle","Custom REST APIs"]},
              {cat:"Infrastructure",items:["Azure OpenAI","AWS Bedrock","Google Cloud AI","On-premise deploy"]},
            ].map((t,i)=>(
              <RevealOnScroll key={t.cat} delay={i*80}>
                <div className="card-flat" style={{padding:"1.25rem"}}>
                  <div style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--blue-light)",marginBottom:"0.875rem"}}>{t.cat}</div>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                    {t.items.map(it=><li key={it} style={{fontSize:"0.8125rem",color:"var(--text-2)"}}>{it}</li>)}
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
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>AI Operations Agent</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Facilities</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Dutco Tennant LLC</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>70% of service calls automated</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built an agentic voice and workflow system that logs service requests, assigns field technicians, updates job status, and notifies customers — without human intervention.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Procurement Agent</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Energy</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Powell Industries</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>3x faster purchase order processing</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>An agentic AI system monitors stock levels, raises purchase requisitions, gets multi-tier approvals, and sends orders to suppliers — reducing procurement cycle time from days to hours.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Compliance Agent</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Engineering</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Bureau Veritas</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>85% of audit prep steps automated</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Deployed an AI agent that collects inspection data from field teams, validates against regulatory checklists, flags non-conformances, and generates draft audit reports ready for sign-off.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to deploy your first AI agent?" sub="We'll identify the highest-impact automation in your business and build a working prototype in 4 weeks." primary="Start with a Free AI Audit" secondary="View AI Case Studies"/>
    </>
  );
}
