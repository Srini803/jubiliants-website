"use client";
import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Jubiliants Assistant, a helpful AI for Jubiliants Consulting — a custom software and AI solutions company headquartered in Hyderabad, India, and a subsidiary of Telcomet Global Solutions.

ABOUT JUBILIANTS:
- Founded in 2015 by Praveen Dinavahi
- 80+ engineers, AI specialists, and consultants
- 300+ projects delivered across 8 industries
- 200+ customers globally
- 95% client retention rate
- Offices: 08th Floor, SLN Terminus, Survey No. 133, Beside Botanical Gardens, Gachibowli, Hyderabad 500032 (HQ) and B-8, Indian Airlines Colony, Prakash Nagar, Begumpet, Hyderabad 500016 (Branch)
- Email: info@jubiliants.com
- Website: jubiliants.com

SERVICES:
Software Solutions:
- Custom Software Development — tailored enterprise applications
- Web Applications — scalable web platforms and portals
- Mobile Applications — iOS, Android & cross-platform (Flutter)
- ERP Solutions — integrated enterprise resource planning
- SaaS Development — cloud-native SaaS products
- Cloud Solutions — Azure, AWS, GCP cloud migration and architecture
- Digital Transformation — end-to-end modernisation

AI Solutions:
- Agentic AI — autonomous AI agent systems
- AI Automation — intelligent process automation
- Generative AI — LLM-powered applications
- Computer Vision — AI-based image/video analysis (including CCTV intelligence)
- AI Chatbots — conversational AI assistants
- Machine Learning — predictive analytics and ML models
- Digital Transformation with AI — AI-powered business transformation

INDUSTRIES SERVED: Healthcare, Manufacturing, Education, Logistics, FinTech, Agriculture, Industrial/Engineering, Facilities Management

KEY TEAM:
- Praveen Dinavahi — Founder & CEO
- Priya Nair — VP Engineering
- Sreekar Pattaswami — Head of AI Practice
- Deepa Sharma — Head of Delivery
- Srinivas Raju — Head of Business Development
- Ravi Shankar — Head of Cloud & Infrastructure
- Meera Krishnan — Head of Quality Assurance
- Arjun Mehta — Head of Mobile Practice

CASE STUDY HIGHLIGHTS:
- AI-based CCTV intelligence for Alfanar Engineering: 200+ cameras, 94% detection accuracy, alerts in <5s
- Virtual voice assistant for Weidmüller GmbH: 70% calls automated, English+German
- Hospital management system for Apollo Health Group: 500+ patients/day, 60% admin reduction
- ERP for Varun Industries: 12 spreadsheet processes eliminated
- AI customer service agent for FinServe Solutions: 65% ticket deflection
- Student information system for Narayana Group: 15,000 students

INSTRUCTIONS:
- Answer questions about Jubiliants' services, team, case studies, pricing approach, and process
- Be helpful, professional, and concise
- For pricing: explain that Jubiliants offers both fixed-price and time & material models, and encourage visitors to contact for a custom quote
- For project enquiries: always end by suggesting they fill the contact form at jubiliants.com/contact or email info@jubiliants.com
- Keep responses brief (2-4 sentences max) unless more detail is specifically requested
- If asked something outside Jubiliants' scope, politely redirect to what Jubiliants can help with`;

type Message = { role: "user" | "assistant"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! I'm the Jubiliants Assistant. Ask me anything about our services, case studies, or how we can help your business." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "Sorry, I couldn't get a response. Please email info@jubiliants.com." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please email us at info@jubiliants.com." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1000,
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          border: "none", cursor: "pointer",
          boxShadow: "0 4px 20px rgba(37,99,235,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform .2s, box-shadow .2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {open ? (
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.55-1.25l-.32-.2-3.02.8.82-2.96-.22-.34A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.5-5.5c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.07-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.36-.78-1.86-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.3-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.3 3.78.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "5rem", right: "1.5rem", zIndex: 999,
          width: "360px", maxWidth: "calc(100vw - 2rem)",
          background: "#0F172A", border: "1px solid #1E293B",
          borderRadius: "16px", boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #1E3A8A, #1D4ED8)",
            padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem"
          }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: "1.1rem"
            }}>✦</div>
            <div>
              <div style={{ fontWeight: 700, color: "white", fontSize: "0.9375rem" }}>Jubiliants Assistant</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                Online · Powered by AI
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "380px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "0.625rem 0.875rem",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? "#2563EB" : "#1E293B",
                  color: m.role === "user" ? "white" : "#E2E8F0",
                  fontSize: "0.875rem", lineHeight: 1.55,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: "#1E293B", borderRadius: "16px 16px 16px 4px", padding: "0.75rem 1rem", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#64748B", display: "inline-block", animation: `bounce 1.2s ease-in-out ${i*0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "0.75rem", borderTop: "1px solid #1E293B", display: "flex", gap: "0.5rem" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask about our services..."
              style={{
                flex: 1, background: "#1E293B", border: "1px solid #334155",
                borderRadius: "10px", padding: "0.625rem 0.875rem",
                color: "#E2E8F0", fontSize: "0.875rem", outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: "#2563EB", border: "none", borderRadius: "10px",
                width: "40px", height: "40px", cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                opacity: loading || !input.trim() ? 0.5 : 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
