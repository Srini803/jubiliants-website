"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; text: string };

// ── Knowledge base — rule-based responses ──────────────────
const qa: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello","hi","hey","good morning","good afternoon","good evening","start","help"],
    answer: "Hello! Welcome to Jubiliants Consulting. I can answer questions about our services, team, case studies, offices, and how to get in touch. What would you like to know?",
  },
  {
    keywords: ["service","offer","provide","do you","what you","build","develop","solutions"],
    answer: "Jubiliants offers two main areas:\n\n🖥 Software Solutions: Custom Software, Web Applications, Mobile Apps (iOS/Android/Flutter), ERP Systems, SaaS Development, Cloud Solutions, and Digital Transformation.\n\n🤖 AI Solutions: Agentic AI, AI Automation, Generative AI, Computer Vision, AI Chatbots, Machine Learning, and AI-powered Digital Transformation.\n\nWhich area would you like to know more about?",
  },
  {
    keywords: ["ai","artificial intelligence","machine learning","automation","chatbot","generative","agentic","llm","gpt"],
    answer: "Our AI practice covers: Agentic AI systems, Intelligent Process Automation, Generative AI (LLM-powered apps), Computer Vision (including CCTV intelligence), AI Chatbots, and Machine Learning models.\n\nWe've deployed AI for healthcare, logistics, manufacturing, and financial services clients. Contact us at info@jubiliants.com to discuss your AI project.",
  },
  {
    keywords: ["mobile","app","android","ios","flutter","react native","cross platform"],
    answer: "We build cross-platform mobile apps using Flutter, and native apps for iOS (Swift) and Android (Kotlin). Our mobile portfolio includes healthcare portals, logistics field apps, education platforms, and enterprise tools. Head of Mobile: Arjun Mehta. Email info@jubiliants.com to discuss your app.",
  },
  {
    keywords: ["erp","enterprise resource","planning","manufacturing software","inventory","procurement"],
    answer: "We build custom ERP systems for manufacturing, healthcare, education, and logistics — replacing spreadsheet-based processes with integrated platforms for procurement, inventory, finance, HR, and reporting. Our ERP for Varun Industries eliminated 12 manual spreadsheet processes. Contact info@jubiliants.com for a consultation.",
  },
  {
    keywords: ["web","website","portal","web application","webapp","dashboard"],
    answer: "We build high-performance web applications using React/Next.js, Angular, and Vue.js on the frontend, with .NET, Node.js, Python, and Java backends. All apps include role-based access, real-time dashboards, SSO integration, and automated testing. Visit jubiliants.com/software-solutions/web-applications to learn more.",
  },
  {
    keywords: ["cloud","azure","aws","gcp","migration","infrastructure","devops","kubernetes","docker"],
    answer: "Our cloud practice covers Azure, AWS, and GCP — including cloud migrations, multi-cloud architecture, DevOps pipelines, Kubernetes deployments, and cost optimisation. Head of Cloud: Ravi Shankar (AWS & Azure certified). Email info@jubiliants.com to get started.",
  },
  {
    keywords: ["cctv","camera","surveillance","security","video","vision","detection","monitor"],
    answer: "We built an AI-based CCTV intelligence platform for Alfanar Engineering (UAE) — monitoring 200+ cameras simultaneously with 94% incident detection accuracy. The system detects intrusions, safety violations, fire/smoke, and equipment anomalies with automated alerts in under 5 seconds. Contact us to discuss a similar solution.",
  },
  {
    keywords: ["voice","assistant","voice bot","speech","call","telephony","ivr"],
    answer: "We built a multilingual AI voice assistant for Weidmüller GmbH (Germany) that automated 70% of inbound service calls in English and German — handling ticket creation, status updates, and field technician coordination. Contact info@jubiliants.com to discuss a voice AI solution for your business.",
  },
  {
    keywords: ["case study","project","example","portfolio","work","client","delivered","built"],
    answer: "Some of our key projects:\n\n🔹 AI CCTV Intelligence — Alfanar Engineering (94% detection accuracy)\n🔹 Voice Assistant — Weidmüller GmbH (70% calls automated)\n🔹 Hospital Management — Apollo Health Group (500+ patients/day)\n🔹 ERP — Varun Industries (12 processes eliminated)\n🔹 AI Customer Service — FinServe (65% ticket deflection)\n🔹 Student Portal — Narayana Group (15,000 students)\n\nVisit jubiliants.com/case-studies for full details.",
  },
  {
    keywords: ["price","cost","charge","fee","budget","quote","rate","pricing","how much"],
    answer: "We offer two engagement models:\n\n💼 Fixed-Price — ideal for well-defined projects with clear scope\n⏱ Time & Material — ideal for evolving projects and long-term partnerships\n\nPricing depends on project scope, technology, and timeline. Email info@jubiliants.com or visit jubiliants.com/contact for a free consultation and custom quote.",
  },
  {
    keywords: ["how long","timeline","duration","time","how fast","deliver","weeks","months"],
    answer: "Timelines vary by project:\n• Mobile app: 3–6 months\n• Web application: 2–5 months\n• ERP system: 6–12 months\n• AI automation: 4–8 weeks for a working pilot\n• Custom software: depends on scope\n\nWe provide detailed timelines during the scoping phase. Contact us at info@jubiliants.com to discuss your project.",
  },
  {
    keywords: ["team","engineer","developer","staff","people","founder","ceo","who","leadership"],
    answer: "Our leadership team:\n\n👤 Praveen Dinavahi — Founder & CEO\n👤 Priya Nair — VP Engineering\n👤 Sreekar Pattaswami — Head of AI Practice\n👤 Deepa Sharma — Head of Delivery\n👤 Srinivas Raju — Head of Business Development\n👤 Ravi Shankar — Head of Cloud\n👤 Meera Krishnan — Head of QA\n👤 Arjun Mehta — Head of Mobile\n\n80+ engineers and specialists in total.",
  },
  {
    keywords: ["industry","sector","healthcare","manufacturing","education","logistics","fintech","agriculture"],
    answer: "We serve 8 industries:\n🏥 Healthcare • 🏭 Manufacturing • 🎓 Education • 🚚 Logistics • 💰 FinTech • 🌾 Agriculture • ⚙️ Industrial/Engineering • 🏢 Facilities Management\n\nWe have deep domain expertise in each — our developers have worked within your industry, not just for it.",
  },
  {
    keywords: ["about","company","jubiliants","who are you","tell me","background","history","founded","since"],
    answer: "Jubiliants Consulting is a custom software and AI solutions company founded in 2015 by Praveen Dinavahi. We are headquartered in Hyderabad, India, and a subsidiary of Telcomet Global Solutions.\n\n📊 300+ projects delivered\n👥 200+ clients globally\n👨‍💻 80+ engineers & AI specialists\n⭐ 95% client retention rate\n🌍 Serving clients in India, UK, UAE, Germany, US, Singapore & Australia",
  },
  {
    keywords: ["address","location","office","where","hyderabad","gachibowli","begumpet","headquarters","hq"],
    answer: "Our offices:\n\n🏢 Registered Office (HQ):\n08th Floor, SLN Terminus, Survey No. 133, Beside Botanical Gardens, Gachibowli, Hyderabad 500032\n\n🏬 Branch Office:\nB-8, Indian Airlines Colony, Prakash Nagar, Begumpet, Hyderabad 500016\n\nA subsidiary of Telcomet Global Solutions.",
  },
  {
    keywords: ["contact","email","phone","reach","talk","speak","enquiry","enquire","get in touch","call"],
    answer: "You can reach us at:\n\n📧 info@jubiliants.com\n🌐 jubiliants.com/contact\n\nFill in the contact form and a senior consultant will respond within 4 business hours. We offer a free initial consultation — no commitment required.",
  },
  {
    keywords: ["telcomet","parent","subsidiary","group"],
    answer: "Jubiliants Consulting is a subsidiary of Telcomet Global Solutions, operating as an independent software and AI delivery company headquartered in Hyderabad, India.",
  },
  {
    keywords: ["technology","tech stack","language","framework","react","node","python","java","dotnet",".net","nextjs","typescript"],
    answer: "Our technology stack:\n\n🖥 Frontend: React/Next.js, Angular, Vue.js, TypeScript\n⚙️ Backend: .NET/C#, Node.js, Python/FastAPI, Java/Spring Boot\n📱 Mobile: Flutter, Swift (iOS), Kotlin (Android)\n🗄 Database: PostgreSQL, SQL Server, MongoDB\n☁️ Cloud: Azure, AWS, GCP\n🤖 AI/ML: OpenAI, Claude, LangChain, TensorFlow\n🚀 DevOps: Docker, Kubernetes, GitHub Actions",
  },
  {
    keywords: ["support","maintenance","after","post launch","sla","uptime","warranty"],
    answer: "All Jubiliants projects include post-launch support. We offer:\n✅ Dedicated support SLA agreements\n✅ 99.9% uptime SLA for production systems\n✅ Enhancement and maintenance plans\n✅ Direct developer access\n✅ Weekly health check reports\n\nContact info@jubiliants.com to discuss a support plan.",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of qa) {
    if (item.keywords.some(k => lower.includes(k))) {
      return item.answer;
    }
  }
  return "I'm not sure about that specific question. For detailed information, please:\n\n📧 Email us at info@jubiliants.com\n🌐 Visit jubiliants.com/contact\n\nA consultant will respond within 4 business hours. You can also ask me about our services, team, case studies, pricing, or office locations!";
}

// ── Component ──────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! 👋 I'm the Jubiliants Assistant. I can answer questions about our services, team, case studies, and how to get in touch.\n\nWhat would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const reply = getResponse(text);
    setMessages(prev => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: reply },
    ]);
  };

  const suggestions = ["What services do you offer?", "Tell me about your AI solutions", "How can I contact you?", "Share some case studies"];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position:"fixed", bottom:"1.5rem", right:"1.5rem", zIndex:1000,
          width:"56px", height:"56px", borderRadius:"50%",
          background:"linear-gradient(135deg,#2563EB,#1D4ED8)",
          border:"none", cursor:"pointer",
          boxShadow:"0 4px 20px rgba(37,99,235,0.5)",
          display:"flex", alignItems:"center", justifyContent:"center",
          transition:"transform .2s,box-shadow .2s",
        }}
        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.1)";}}
        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1)";}}
      >
        {open
          ? <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
          : <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.55-1.25l-.32-.2-3.02.8.82-2.96-.22-.34A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.5-5.5c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.07-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.36-.78-1.86-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.3-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.3 3.78.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
        }
      </button>

      {/* Unread dot */}
      {!open && (
        <span style={{position:"fixed",bottom:"2.75rem",right:"1.5rem",zIndex:1001,width:"10px",height:"10px",borderRadius:"50%",background:"#22C55E",border:"2px solid #0F172A"}} />
      )}

      {/* Chat window */}
      {open && (
        <div style={{
          position:"fixed", bottom:"5rem", right:"1.5rem", zIndex:999,
          width:"360px", maxWidth:"calc(100vw - 2rem)",
          background:"#0F172A", border:"1px solid #1E293B",
          borderRadius:"16px", boxShadow:"0 24px 60px rgba(0,0,0,0.7)",
          display:"flex", flexDirection:"column", overflow:"hidden",
        }}>
          {/* Header */}
          <div style={{background:"linear-gradient(135deg,#1E3A8A,#1D4ED8)",padding:"1rem 1.25rem",display:"flex",alignItems:"center",gap:"0.75rem"}}>
            <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem"}}>✦</div>
            <div>
              <div style={{fontWeight:700,color:"white",fontSize:"0.9375rem"}}>Jubiliants Assistant</div>
              <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",gap:"0.375rem"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E",display:"inline-block"}}/>
                Always online · Ask me anything
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{flex:1,overflowY:"auto",padding:"1rem",display:"flex",flexDirection:"column",gap:"0.75rem",maxHeight:"360px"}}>
            {messages.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                <div style={{
                  maxWidth:"88%", padding:"0.625rem 0.875rem",
                  borderRadius:m.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",
                  background:m.role==="user"?"#2563EB":"#1E293B",
                  color:m.role==="user"?"white":"#E2E8F0",
                  fontSize:"0.8125rem", lineHeight:1.6,
                  whiteSpace:"pre-line",
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef}/>
          </div>

          {/* Quick suggestions — show only before first user message */}
          {messages.length === 1 && (
            <div style={{padding:"0 0.75rem 0.75rem",display:"flex",flexWrap:"wrap",gap:"0.375rem"}}>
              {suggestions.map(s=>(
                <button key={s} onClick={()=>{setInput(s);}} style={{
                  background:"#1E293B",border:"1px solid #334155",borderRadius:"999px",
                  padding:"0.3125rem 0.75rem",fontSize:"0.75rem",color:"#93C5FD",
                  cursor:"pointer",whiteSpace:"nowrap",
                }}>{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{padding:"0.75rem",borderTop:"1px solid #1E293B",display:"flex",gap:"0.5rem"}}>
            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
              placeholder="Ask about our services..."
              style={{
                flex:1,background:"#1E293B",border:"1px solid #334155",
                borderRadius:"10px",padding:"0.625rem 0.875rem",
                color:"#E2E8F0",fontSize:"0.875rem",outline:"none",
              }}
            />
            <button onClick={send} disabled={!input.trim()} style={{
              background:"#2563EB",border:"none",borderRadius:"10px",
              width:"40px",height:"40px",cursor:!input.trim()?"not-allowed":"pointer",
              opacity:!input.trim()?0.5:1,
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
            }}>
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
