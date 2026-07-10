import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Jubiliants Software Solutions | Custom Software, Enterprise Apps & AI Solutions",
  description: "Jubiliants builds custom software, enterprise applications, mobile apps, ERP systems, and AI solutions for businesses across industries. 300+ projects, 200+ customers since 2015.",
};

/* ── Enterprise Dashboard Hero Composition ───────────── */
const HeroDashboard = () => (
  <div className="hero-vis-wrap">
    <svg
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-svg"
    >
      {/* ── MAIN DASHBOARD PANEL ─────────────────────── */}
      <g className="hv-g1">
        {/* Window */}
        <rect x="0" y="0" width="430" height="380" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5"/>
        {/* Chrome bar */}
        <rect x="0" y="0" width="430" height="44" rx="14" fill="#263349"/>
        <rect x="0" y="30" width="430" height="14" fill="#263349"/>
        {/* Traffic lights */}
        <circle cx="20" cy="22" r="6" fill="#EF4444" opacity=".85"/>
        <circle cx="38" cy="22" r="6" fill="#F7941D" opacity=".85"/>
        <circle cx="56" cy="22" r="6" fill="#22C55E" opacity=".85"/>
        {/* App title */}
        <text x="74" y="26" fontSize="10" fontWeight="600" fill="#8FD4F2" fontFamily="Inter,sans-serif">Jubiliants Enterprise Platform</text>
        {/* Live indicator */}
        <circle cx="408" cy="22" r="5" fill="#22C55E" className="hv-pulse"/>
        <text x="390" y="26" fontSize="7" fill="#86EFAC" fontFamily="Inter,sans-serif" textAnchor="end">Live</text>
        
        {/* Sidebar */}
        <rect x="0" y="44" width="72" height="336" fill="#0F172A"/>
        {[
          {icon:"▦", y:70, active:true},
          {icon:"↗", y:104, active:false},
          {icon:"◎", y:138, active:false},
          {icon:"≡", y:172, active:false},
          {icon:"⚙", y:206, active:false},
        ].map((item,i)=>(
          <g key={i}>
            {item.active && <rect x="2" y={item.y-14} width="68" height="28" rx="6" fill="#14548C" opacity=".5"/>}
            <text x="36" y={item.y+1} fontSize="14" fill={item.active?"#2E9BD6":"#475569"} textAnchor="middle" fontFamily="Inter,sans-serif">{item.icon}</text>
          </g>
        ))}

        {/* Top KPI strip */}
        {[
          {label:"Revenue",val:"₹4.2Cr",sub:"▲ 18.4%",sc:"#22C55E",x:80},
          {label:"Projects",val:"300+",sub:"▲ 12.0%",sc:"#22C55E",x:192},
          {label:"Users",val:"12,841",sub:"▲ 6.2%",sc:"#22C55E",x:304},
        ].map(k=>(
          <g key={k.x}>
            <rect x={k.x} y="52" width="104" height="64" rx="8" fill="#263349"/>
            <text x={k.x+10} y="70" fontSize="7.5" fill="#94A3B8" fontFamily="Inter,sans-serif">{k.label}</text>
            <text x={k.x+10} y="90" fontSize="17" fontWeight="700" fill="#F8FAFC" fontFamily="Inter,sans-serif">{k.val}</text>
            <text x={k.x+10} y="108" fontSize="7.5" fill={k.sc} fontFamily="Inter,sans-serif">{k.sub}</text>
          </g>
        ))}
        {/* SLA card */}
        <rect x="80" y="124" width="104" height="30" rx="6" fill="#052E16" stroke="#14532D" strokeWidth=".5"/>
        <text x="90" y="138" fontSize="7" fill="#86EFAC" fontFamily="Inter,sans-serif">● 99.9% Uptime SLA</text>
        <text x="90" y="148" fontSize="6" fill="#065F46" fontFamily="Inter,sans-serif">All systems operational</text>

        {/* Revenue bar chart */}
        <text x="80" y="172" fontSize="9" fontWeight="600" fill="#CBD5E1" fontFamily="Inter,sans-serif">Revenue by Quarter</text>
        <line x1="80" y1="280" x2="340" y2="280" stroke="#334155" strokeWidth="1"/>
        <line x1="80" y1="172" x2="80" y2="280" stroke="#334155" strokeWidth="1"/>
        {[
          {h:56,x:90},{h:70,x:118},{h:62,x:146},{h:88,x:174},
          {h:74,x:202},{h:100,x:230},{h:86,x:258},{h:112,x:286},
        ].map((b,i)=>(
          <g key={i} className={`bar-anim b${(i%6)+1}`}>
            <rect x={b.x} y={280-b.h} width="22" height={b.h} rx="3.5"
              fill={i>5?"#29ABE2":i>3?"#2E9BD6":"#1B75BB"}
              opacity={0.55+(i/8)*0.45}/>
          </g>
        ))}
        {/* Trend line */}
        <polyline
          points="101,224 129,210 157,218 185,192 213,206 241,180 269,194 297,168"
          stroke="#8FD4F2" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".85"/>
        <circle cx="297" cy="168" r="4" fill="#2E9BD6"/>
        {/* X labels */}
        {["Q1","Q2","Q3","Q4","Q1","Q2","Q3","Q4"].map((q,i)=>(
          <text key={i} x={97+i*28} y="294" fontSize="7" fill="#475569" fontFamily="Inter,sans-serif" textAnchor="middle">{q}</text>
        ))}

        {/* Donut chart */}
        <circle cx="385" cy="208" r="44" fill="none" stroke="#263349" strokeWidth="14"/>
        <circle cx="385" cy="208" r="44" fill="none" stroke="#1B75BB" strokeWidth="14"
          strokeDasharray="110 167" strokeLinecap="round"/>
        <circle cx="385" cy="208" r="44" fill="none" stroke="#2E9BD6" strokeWidth="14"
          strokeDasharray="55 222" strokeDashoffset="-110" strokeLinecap="round" opacity=".7"/>
        <circle cx="385" cy="208" r="44" fill="none" stroke="#29ABE2" strokeWidth="14"
          strokeDasharray="32 245" strokeDashoffset="-165" strokeLinecap="round" opacity=".45"/>
        <text x="385" y="203" fontSize="14" fontWeight="700" fill="#F8FAFC" fontFamily="Inter,sans-serif" textAnchor="middle">63%</text>
        <text x="385" y="218" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif" textAnchor="middle">Software</text>
        {[
          {c:"#1B75BB",l:"Software Dev",y:262},
          {c:"#2E9BD6",l:"AI & Automation",y:274},
          {c:"#29ABE2",l:"Mobile & Cloud",y:286},
        ].map(lg=>(
          <g key={lg.l}>
            <rect x="348" y={lg.y-7} width="8" height="8" rx="2" fill={lg.c}/>
            <text x="360" y={lg.y} fontSize="7.5" fill="#94A3B8" fontFamily="Inter,sans-serif">{lg.l}</text>
          </g>
        ))}

        {/* Activity rows */}
        <line x1="80" y1="304" x2="422" y2="304" stroke="#334155" strokeWidth="1"/>
        <text x="80" y="318" fontSize="8.5" fontWeight="600" fill="#CBD5E1" fontFamily="Inter,sans-serif">Active Engagements</text>
        {[
          {n:"ERP Platform — Varun Industries",s:"Live",sc:"#22C55E",bg:"rgba(34,197,94,.1)",y:330},
          {n:"AI Agent — FinServe Solutions",s:"Testing",sc:"#F7941D",bg:"rgba(245,158,11,.1)",y:348},
          {n:"HIMS — Apollo Health Group",s:"Live",sc:"#22C55E",bg:"rgba(34,197,94,.1)",y:366},
        ].map(r=>(
          <g key={r.y}>
            <text x="80" y={r.y} fontSize="8" fill="#CBD5E1" fontFamily="Inter,sans-serif">{r.n}</text>
            <rect x="356" y={r.y-11} width="52" height="16" rx="8" fill={r.bg}/>
            <text x="382" y={r.y} fontSize="7" fill={r.sc} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">{r.s}</text>
          </g>
        ))}
      </g>

      {/* ── AI INSIGHTS CARD (floats top-right, larger) ── */}
      <g className="hv-g3 hv-float" style={{transformOrigin:"540px 60px"}}>
        <rect x="446" y="10" width="186" height="158" rx="14" fill="#1E293B" stroke="#1B75BB" strokeWidth="1.5" strokeOpacity=".6"/>
        <rect x="446" y="10" width="186" height="42" rx="14" fill="#0D1F3C"/>
        <rect x="446" y="38" width="186" height="14" fill="#0D1F3C"/>
        {/* Icon */}
        <rect x="458" y="20" width="18" height="18" rx="5" fill="#1B75BB" opacity=".7"/>
        <text x="467" y="33" fontSize="10" textAnchor="middle" fill="white" fontFamily="Inter,sans-serif">✦</text>
        <text x="482" y="34" fontSize="9" fontWeight="600" fill="#8FD4F2" fontFamily="Inter,sans-serif">AI Insights Engine</text>
        <circle cx="620" cy="29" r="5.5" fill="#22C55E" className="hv-pulse"/>
        {/* Content */}
        <text x="458" y="64" fontSize="7" fill="#475569" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".08em">ANOMALY DETECTED</text>
        <text x="458" y="78" fontSize="10" fontWeight="600" fill="#F8FAFC" fontFamily="Inter,sans-serif">Invoice spike +340%</text>
        <text x="458" y="92" fontSize="7.5" fill="#94A3B8" fontFamily="Inter,sans-serif">Above baseline · Auto-routing active</text>
        {/* Sparkline */}
        <rect x="458" y="102" width="164" height="44" rx="6" fill="#0F172A"/>
        <polyline
          points="466,138 480,130 494,134 510,120 526,124 542,110 558,114 574,104 588,108 606,96"
          stroke="#2E9BD6" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="606" cy="96" r="3.5" fill="#29ABE2"/>
        <text x="458" y="156" fontSize="7" fill="#475569" fontFamily="Inter,sans-serif">847 events/min · Real-time</text>
      </g>

      {/* ── MOBILE APP SCREEN (bottom-right float) ── */}
      <g className="hv-g4 hv-float2" style={{transformOrigin:"540px 420px"}}>
        <rect x="446" y="194" width="120" height="216" rx="18" fill="#1E293B" stroke="#334155" strokeWidth="1.5"/>
        <rect x="470" y="204" width="72" height="8" rx="4" fill="#334155"/>
        <rect x="452" y="220" width="108" height="184" rx="10" fill="#0F172A"/>
        {/* App header */}
        <rect x="452" y="220" width="108" height="32" rx="10" fill="#14548C"/>
        <text x="506" y="240" fontSize="9.5" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">Portal</text>
        <circle cx="550" cy="236" r="8" fill="#EF4444"/>
        <text x="550" y="239.5" fontSize="7.5" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">3</text>
        {/* KPI mini */}
        <rect x="456" y="258" width="46" height="40" rx="6" fill="#1E293B" stroke="#334155" strokeWidth=".5"/>
        <text x="479" y="272" fontSize="6.5" fill="#64748B" textAnchor="middle" fontFamily="Inter,sans-serif">Tickets</text>
        <text x="479" y="288" fontSize="14" fontWeight="700" fill="#F8FAFC" textAnchor="middle" fontFamily="Inter,sans-serif">142</text>
        <rect x="508" y="258" width="46" height="40" rx="6" fill="#1E293B" stroke="#334155" strokeWidth=".5"/>
        <text x="531" y="272" fontSize="6.5" fill="#64748B" textAnchor="middle" fontFamily="Inter,sans-serif">SLA</text>
        <text x="531" y="288" fontSize="14" fontWeight="700" fill="#22C55E" textAnchor="middle" fontFamily="Inter,sans-serif">95%</text>
        {/* Mini chart */}
        <rect x="456" y="306" width="98" height="52" rx="6" fill="#1E293B" stroke="#334155" strokeWidth=".5"/>
        <text x="462" y="318" fontSize="6.5" fill="#94A3B8" fontFamily="Inter,sans-serif">Weekly Activity</text>
        {[{x:462,h:20},{x:477,h:26},{x:492,h:22},{x:507,h:30},{x:522,h:25},{x:537,h:28}].map((b,i)=>(
          <rect key={i} x={b.x} y={350-b.h} width="11" height={b.h} rx="2.5"
            fill={i>3?"#2E9BD6":"#1B75BB"} opacity={.55+i*.07}/>
        ))}
        {/* CTA button */}
        <rect x="456" y="364" width="98" height="26" rx="7" fill="#1B75BB"/>
        <text x="505" y="381" fontSize="8.5" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">View Report</text>
        {/* Home bar */}
        <rect x="484" y="400" width="44" height="5" rx="2.5" fill="#334155"/>
      </g>

      {/* ── TECH BADGES (bottom strip) ── */}
      <g className="hv-g5">
        {[
          {label:"React / Next.js",x:0},
          {label:"Azure AI",x:133},
          {label:".NET / Node.js",x:217},
          {label:"Flutter",x:343},
          {label:"PostgreSQL",x:420},
          {label:"Docker / K8s",x:518},
        ].map(b=>(
          <g key={b.label}>
            <rect x={b.x} y="492" width={b.label.length*7+16} height="20" rx="10"
              fill="#FFFFFF" stroke="rgba(35,39,111,0.22)" strokeWidth=".75"/>
            <text x={b.x+(b.label.length*7+16)/2} y="505.5" fontSize="7" fill="#6A6D8E"
              fontFamily="Inter,sans-serif" textAnchor="middle">{b.label}</text>
          </g>
        ))}
      </g>
    </svg>
  </div>
);

const services = [
  { label:"Software Solutions", title:"Custom Software Development", desc:"Enterprise web apps, ERP systems, CRM platforms, customer portals, and workflow automation — built to your exact specifications.", href:"/software-solutions/custom-software-development", tags:["Web Apps","ERP","CRM","SaaS"] },
  { label:"Mobile Development", title:"Mobile Applications", desc:"High-performance iOS, Android, and cross-platform mobile apps that drive engagement and operational efficiency.", href:"/software-solutions/mobile-applications", tags:["iOS","Android","Flutter","React Native"] },
  { label:"Artificial Intelligence", title:"Agentic AI & Automation", desc:"Autonomous AI agents, intelligent process automation, and machine learning solutions that work around the clock for your business.", href:"/artificial-intelligence/agentic-ai", tags:["AI Agents","LLMs","Automation","ML"] },
  { label:"Digital Transformation", title:"Digital Transformation", desc:"End-to-end modernisation: strategy, legacy migration, cloud adoption, and data-driven decision-making platforms.", href:"/software-solutions/cloud-solutions", tags:["Cloud","Migration","Analytics","Strategy"] },
];

const stats = [
  {num:"300+",label:"Projects Delivered",sub:"Across 8 industries"},
  {num:"200+",label:"Customers Served",sub:"Globally"},
  {num:"10+",label:"Years of Experience",sub:"Since 2015"},
  {num:"95%",label:"Client Retention",sub:"Repeat & referral"},
];

const testimonials = [
  {quote:"Jubiliants delivered our ERP platform on time and within budget. The system has transformed how we manage production planning, inventory, and reporting across all our facilities.",name:"James Hartley",title:"VP Operations",company:"Mayville Engineering",initials:"JH",color:"#2E3192"},
  {quote:"Their team built our field service management system from scratch and integrated it with our existing supply chain tools. The visibility we now have into our operations is outstanding.",name:"Stefan Brandt",title:"Head of Digital Solutions",company:"Schmalz GmbH",initials:"SB",color:"#1B75BB"},
  {quote:"We deployed an AI-powered automation system with Jubiliants and reduced our manual processing time by over 70%. The quality and speed of delivery exceeded our expectations.",name:"Michael Rourke",title:"Chief Technology Officer",company:"Powell Industries",initials:"MR",color:"#D97706"},
  {quote:"The custom platform they built for us handles thousands of transactions daily, seamlessly. Our operations team and clients all love how intuitive it is. Exceptional work.",name:"David Tennant",title:"Director of Technology",company:"Dutco Tennant LLC",initials:"DT",color:"#14548C"},
];

const industries = [
  {name:"Healthcare",icon:"🏥",desc:"Hospital management, patient portals, clinical systems"},
  {name:"Education",icon:"🎓",desc:"Student info systems, LMS, admission platforms"},
  {name:"Manufacturing",icon:"🏭",desc:"ERP, production planning, inventory management"},
  {name:"Retail & E-Commerce",icon:"🛒",desc:"Commerce platforms, inventory, loyalty systems"},
  {name:"Logistics",icon:"🚚",desc:"Fleet management, tracking, supply chain apps"},
  {name:"Financial Services",icon:"🏦",desc:"FinTech apps, compliance tools, reporting systems"},
  {name:"Professional Services",icon:"💼",desc:"CRM, project management, billing platforms"},
  {name:"Government",icon:"🏛️",desc:"Citizen portals, workflow automation, GIS systems"},
];

const logos = ["Jyoti CNC","Elgi Equipments","ACE","Mayville Engineering","Proto Labs","Fathom Digital","Al Shirawi Equipment Co.","Saudi Mechanical","Dutco Tennant LLC","Schmalz GmbH","Nuziveedu Seeds","Advanta Seeds","Sahyadri Farms","Plenty Unlimited","Bowery Farming","Indigo Ag","Al Dahra Agriculture","NADEC","Barfoots","Agrifirm","Pennar Industries","MTAR Technologies","Walchandnagar Industries","Astec Industries","Powell Industries","NN Inc.","Alfanar Engineering","Emirates Electrical Engineering","Weidmüller GmbH","Spirax Group"];

const whyUs = [
  {title:"Business-first thinking",desc:"We begin with your business problem, not a technology preference. Every decision is justified by measurable impact."},
  {title:"End-to-end ownership",desc:"From discovery and architecture to launch, maintenance, and enhancements — one team, full accountability."},
  {title:"Transparent process",desc:"Weekly demos, shared project boards, and clear milestones. You always know where your project stands."},
  {title:"Deep domain expertise",desc:"Our developers have worked across healthcare, manufacturing, logistics, and finance. We know your industry."},
  {title:"Scalable architecture",desc:"We build for where your business is going, not just where it is today. No expensive rewrites down the road."},
  {title:"Long-term partnership",desc:"80% of our customers expand scope or return for new projects. We measure our success by yours."},
];

const caseHighlights = [
  {industry:"AI / Security",title:"AI-based CCTV intelligence platform for industrial monitoring",metric:"94%",metricLabel:"incident detection accuracy",desc:"Deployed real-time AI video analytics across 200+ cameras for Alfanar Engineering — detecting intrusions, safety violations, and equipment anomalies with automated alerts in under 5 seconds.",href:"/case-studies"},
  {industry:"AI / Operations",title:"Virtual voice assistant automates 70% of service calls",metric:"70%",metricLabel:"calls handled autonomously",desc:"Built a multilingual AI voice assistant for Weidmüller GmbH handling inbound service requests, ticket creation, and field technician updates in English and German.",href:"/case-studies"},
  {industry:"AI / FinTech",title:"AI agent handles 65% of support tickets",metric:"65%",metricLabel:"ticket deflection",desc:"Deployed an agentic AI customer service system integrated with CRM, reducing response time from hours to seconds.",href:"/case-studies"},
];

const process = [
  {step:"01",title:"Discovery",desc:"We spend time understanding your business, users, and constraints before writing a line of code."},
  {step:"02",title:"Architecture",desc:"We design the right system — scalable, secure, and maintainable — and align on tech stack."},
  {step:"03",title:"Build & Iterate",desc:"Agile sprints with fortnightly demos. You see progress and can steer throughout."},
  {step:"04",title:"Launch & Scale",desc:"Zero-downtime deployment, user training, and ongoing enhancement support."},
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            {/* Left copy */}
            <div>
              <div className="hero-badge" style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"rgba(251,176,64,0.14)",border:"1px solid rgba(247,148,29,0.35)",borderRadius:"999px",padding:"0.3125rem 0.875rem",marginBottom:"1.5rem"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--orange)",display:"block"}}></span>
                <span style={{fontSize:"0.75rem",fontWeight:600,color:"var(--orange-deep)"}}>Trusted by 200+ businesses since 2015</span>
              </div>
              <h1 className="t-hero" style={{marginBottom:"1.25rem"}}>
                Building Intelligent Software Solutions That{" "}
                <span className="t-accent">Drive Business Growth</span>
              </h1>
              <p className="t-body-lg" style={{marginBottom:"2rem",maxWidth:"500px"}}>
                From custom enterprise applications and mobile platforms to AI-powered automation — Jubiliants delivers software that solves real business problems. Based in Hyderabad, working globally.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem",marginBottom:"2.5rem"}}>
                <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
                <Link href="/case-studies" className="btn btn-secondary btn-lg">View Case Studies</Link>
              </div>
              <div style={{display:"flex",gap:"2rem",paddingTop:"1.75rem",borderTop:"1px solid var(--border)"}}>
                {[["300+","Projects"],["200+","Clients"],["10+","Years"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"1.375rem",color:"var(--text-1)",lineHeight:1}}>{n}</div>
                    <div style={{fontSize:"0.75rem",color:"var(--text-4)",marginTop:"0.25rem"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — enterprise dashboard composition */}
            <div className="hidden lg:flex hero-visual-col">
              <HeroDashboard/>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO TICKER ── */}
      <section style={{background:"var(--bg-surface)",borderBottom:"1px solid var(--border)",padding:"1.125rem 0",overflow:"hidden"}}>
        <div style={{marginBottom:"0.5rem",textAlign:"center"}}>
          <span className="t-label">Trusted by leading organisations across India</span>
        </div>
        <div style={{overflow:"hidden"}}>
          <div className="ticker-track" style={{display:"flex",gap:"0"}}>
            {[...logos,...logos].map((name,i)=>(
              <div key={i} style={{flexShrink:0,padding:"0 2rem",display:"flex",alignItems:"center",justifyContent:"center",minWidth:"180px",height:"38px",borderRight:"1px solid var(--border)"}}>
                <span style={{fontSize:"0.875rem",fontWeight:500,color:"var(--text-4)",whiteSpace:"nowrap"}}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{maxWidth:"600px",marginBottom:"3rem"}}>
              <div className="section-label">What we build</div>
              <h2 className="t-h1" style={{marginBottom:"0.875rem"}}>End-to-end technology solutions for your business</h2>
              <p className="t-body-lg">We cover the full technology stack — custom software, mobile, AI, and cloud — so you can work with one trusted partner instead of four.</p>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-2">
            {services.map((s,i)=>(
              <RevealOnScroll key={s.title} delay={i*80}>
                <Link href={s.href} style={{display:"block",height:"100%"}}>
                  <div className="card" style={{padding:"1.75rem",height:"100%"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                      <span className="chip chip-blue">{s.label}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#1B75BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="t-h3" style={{marginBottom:"0.625rem"}}>{s.title}</h3>
                    <p className="t-body" style={{marginBottom:"1.25rem"}}>{s.desc}</p>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                      {s.tags.map(t=><span key={t} className="chip">{t}</span>)}
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={200}>
            <div style={{marginTop:"1.5rem",textAlign:"center"}}>
              <Link href="/software-solutions/custom-software-development" className="btn btn-ghost">Explore all services →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
        <div className="wrap" style={{padding:"3.5rem 1.5rem"}}>
          <div style={{display:"grid",gap:"2rem",textAlign:"center"}} className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s,i)=>(
              <RevealOnScroll key={s.label} delay={i*80}>
                <div>
                  <div className="stat-num">{s.num}</div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.9375rem",color:"var(--text-1)",marginTop:"0.375rem"}}>{s.label}</div>
                  <div className="stat-label">{s.sub}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE HIGHLIGHTS ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2.5rem",flexWrap:"wrap",gap:"1rem"}}>
              <div>
                <div className="section-label">Proven results</div>
                <h2 className="t-h2">Measurable impact across every project</h2>
              </div>
              <Link href="/case-studies" className="btn btn-secondary btn-sm">All case studies →</Link>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-3">
            {caseHighlights.map((c,i)=>(
              <RevealOnScroll key={c.title} delay={i*100}>
                <div className="card-flat" style={{padding:"1.75rem",height:"100%",display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem"}}>
                    <span className="chip chip-blue">{c.industry}</span>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"1.75rem",color:"var(--text-1)",lineHeight:1,letterSpacing:"-0.01em"}}>{c.metric}</div>
                      <div style={{fontSize:"0.6875rem",color:"var(--text-4)"}}>{c.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="t-h4" style={{marginBottom:"0.625rem"}}>{c.title}</h3>
                  <p className="t-small" style={{flex:1,marginBottom:"1.25rem"}}>{c.desc}</p>
                  <Link href={c.href} className="btn btn-ghost" style={{fontSize:"0.875rem",fontWeight:500}}>Read case study →</Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>How we work</div>
              <h2 className="t-h2">A process built for predictable delivery</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.5rem"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p,i)=>(
              <RevealOnScroll key={p.step} delay={i*80}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
                    <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"var(--blue-dim)",border:"1px solid rgba(27,117,187,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8125rem",fontFamily:"var(--font-heading)",fontWeight:600,color:"var(--blue-light)",flexShrink:0}}>{p.step}</div>
                    {i<3&&<div style={{flex:1,height:"1px",background:"var(--border)"}}></div>}
                  </div>
                  <h4 className="t-h4" style={{marginBottom:"0.5rem"}}>{p.title}</h4>
                  <p className="t-small">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JUBILIANTS ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <div style={{display:"grid",gap:"5rem",alignItems:"center"}} className="grid grid-cols-1 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <div className="section-label">Why Jubiliants</div>
                <h2 className="t-h2" style={{marginBottom:"1rem"}}>We don't just build software — we solve business problems</h2>
                <p className="t-body" style={{marginBottom:"2rem"}}>Since 2015, Jubiliants has partnered with organisations ranging from 10-person startups to 5,000-employee enterprises. Our difference is in how we think about every engagement.</p>
                <ul className="check-list">
                  {["Industry-certified developers with domain expertise","Dedicated project manager and direct developer access","Fixed-price or time & material — your choice","95% client retention rate — we rarely lose customers","Post-launch support and enhancement plans"].map(item=>(
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div style={{marginTop:"2rem"}}><Link href="/about" className="btn btn-secondary">Learn about our team →</Link></div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div style={{display:"grid",gap:"1rem"}}>
                {whyUs.map(w=>(
                  <div key={w.title} className="card-flat" style={{padding:"1.25rem"}}>
                    <div style={{width:"28px",height:"28px",borderRadius:"6px",background:"var(--blue-dim)",border:"1px solid rgba(27,117,187,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.75rem"}}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#1B75BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{fontFamily:"var(--font-heading)",fontSize:"0.875rem",fontWeight:600,color:"var(--text-1)",marginBottom:"0.25rem"}}>{w.title}</div>
                    <p className="t-small">{w.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",marginBottom:"3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Client testimonials</div>
              <h2 className="t-h2">What our customers say</h2>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((t,i)=>(
              <RevealOnScroll key={t.name} delay={i*80}>
                <div className="testimonial-card">
                  <div style={{display:"flex",marginBottom:"1rem",gap:"2px"}}>
                    {[1,2,3,4,5].map(s=><svg key={s} width="14" height="14" viewBox="0 0 16 16" fill="#F7941D"><path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.1l-4.3 2.4.8-4.8L1 6.3l4.8-.8z"/></svg>)}
                  </div>
                  <p style={{fontSize:"0.9375rem",lineHeight:1.7,color:"var(--text-2)",marginBottom:"1.25rem"}}>"{t.quote}"</p>
                  <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                    <div style={{width:"38px",height:"38px",borderRadius:"50%",background:t.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8125rem",fontFamily:"var(--font-heading)",fontWeight:600,color:"white",flexShrink:0}}>{t.initials}</div>
                    <div>
                      <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.875rem",color:"var(--text-1)"}}>{t.name}</div>
                      <div style={{fontSize:"0.75rem",color:"var(--text-4)"}}>{t.title} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 3rem"}}>
              <div className="section-label" style={{justifyContent:"center"}}>Industries we serve</div>
              <h2 className="t-h2">Deep domain expertise across key sectors</h2>
              <p className="t-body" style={{marginTop:"0.75rem"}}>Our developers and consultants bring industry-specific knowledge — so we speak your language from day one.</p>
            </div>
          </RevealOnScroll>
          <div style={{display:"grid",gap:"0.875rem"}} className="grid grid-cols-2 md:grid-cols-4">
            {industries.map((ind,i)=>(
              <RevealOnScroll key={ind.name} delay={i*60}>
                <div className="industry-pill">
                  <span style={{fontSize:"1.375rem",flexShrink:0}}>{ind.icon}</span>
                  <div>
                    <div style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.875rem",color:"var(--text-1)"}}>{ind.name}</div>
                    <div style={{fontSize:"0.6875rem",color:"var(--text-4)",marginTop:"0.125rem"}}>{ind.desc}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="wrap" style={{padding:"4.5rem 1.5rem",textAlign:"center"}}>
          <RevealOnScroll>
            <div style={{maxWidth:"640px",margin:"0 auto"}}>
              <div className="section-label" style={{justifyContent:"center",marginBottom:"1rem"}}>Ready to start?</div>
              <h2 className="t-h1" style={{marginBottom:"1rem"}}>Let's turn your idea into a working product</h2>
              <p className="t-body-lg" style={{marginBottom:"2.5rem"}}>Book a free 30-minute consultation. We'll review your requirements, suggest an approach, and give you a rough timeline and budget estimate — no strings attached.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.875rem",justifyContent:"center"}}>
                <Link href="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
                <a href="mailto:srini@jubiliants.com" className="btn btn-secondary btn-lg">Email Us Directly</a>
              </div>
              <p style={{fontSize:"0.8125rem",color:"var(--text-4)",marginTop:"1.5rem"}}>Response within 4 business hours · No commitment required</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
