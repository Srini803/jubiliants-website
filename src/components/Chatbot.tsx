"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; text: string };


// ── Component ──────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! 👋 I'm the Jubiliants Assistant. I can answer questions about our services, team, case studies, and how to get in touch.\n\nWhat would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "Sorry, please email info@jubiliants.com." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please email info@jubiliants.com." }]);
    }
    setLoading(false);
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
          : <svg width="26" height="26" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C7.03 3 3 6.58 3 11c0 2.13.9 4.06 2.37 5.47L4 21l4.7-1.55C9.99 19.8 10.98 20 12 20c4.97 0 9-3.58 9-8s-4.03-9-9-9z" fill="white" opacity="0.95"/>
              <circle cx="8.5" cy="11" r="1.2" fill="#1D4ED8"/>
              <circle cx="12" cy="11" r="1.2" fill="#1D4ED8"/>
              <circle cx="15.5" cy="11" r="1.2" fill="#1D4ED8"/>
            </svg>
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
            {loading && (
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <div style={{background:"#1E293B",borderRadius:"16px 16px 16px 4px",padding:"0.75rem 1rem",display:"flex",gap:"4px",alignItems:"center"}}>
                  {[0,1,2].map(i=>(
                    <span key={i} style={{width:"6px",height:"6px",borderRadius:"50%",background:"#64748B",display:"inline-block",animation:`bounce 1.2s ease-in-out ${i*0.2}s infinite`}}/>
                  ))}
                </div>
              </div>
            )}
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
            <button onClick={send} disabled={!input.trim()||loading} style={{
              background:"#2563EB",border:"none",borderRadius:"10px",
              width:"40px",height:"40px",cursor:(!input.trim()||loading)?"not-allowed":"pointer",
              opacity:(!input.trim()||loading)?0.5:1,
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
            }}>
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      <style>{`@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}`}</style>
    </>
  );
}
