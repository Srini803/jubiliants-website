"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  "Custom Web Application Development",
  "Mobile Application Development (iOS / Android)",
  "ERP System Development",
  "SaaS Product Development",
  "Cloud Architecture & Migration",
  "Agentic AI Solutions",
  "AI Process Automation",
  "Generative AI Applications",
  "Computer Vision",
  "AI Chatbots",
  "Machine Learning & Predictive Analytics",
  "Digital Transformation Consulting",
  "Other / Not Sure Yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", budget:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(f => ({...f, [k]: e.target.value}));

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xrbzgqkw", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
          _replyto: form.email,
          _subject: `New enquiry from ${form.name} — ${form.company || "jubiliants.com"}`,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please email us directly at info@jubiliants.com");
      }
    } catch {
      alert("Network error. Please email us directly at info@jubiliants.com");
    }
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-section-inner" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <div style={{maxWidth:"620px"}}>
            <div className="hero-badge" style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"var(--blue-dim)",border:"1px solid rgba(37,99,235,0.25)",borderRadius:"999px",padding:"0.3125rem 0.875rem",marginBottom:"1.25rem"}}>
              <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--green)",display:"block"}}></span>
              <span style={{fontSize:"0.75rem",fontWeight:600,color:"#86EFAC"}}>Response within 4 business hours</span>
            </div>
            <div className="section-label">Contact Us</div>
            <h1 className="t-h1" style={{marginBottom:"1rem"}}>Let's talk about your project</h1>
            <p className="t-body-lg">Fill in the form and one of our senior consultants will reach out — usually within the same business day. No sales pitch, just a genuine conversation about your requirements.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{background:"var(--bg-base)"}}>
        <div className="wrap">
          <div className="contact-grid">

            {/* Form - spans 2 */}
            <div style={{gridColumn:"span 2"} as React.CSSProperties}>
              <RevealOnScroll>
                {sent ? (
                  <div style={{padding:"3rem",textAlign:"center",background:"var(--bg-raised)",borderRadius:"var(--radius-xl)",border:"1px solid var(--border)"}}>
                    <div style={{width:"56px",height:"56px",borderRadius:"50%",background:"rgba(34,197,94,0.12)",border:"1px solid rgba(34,197,94,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.25rem"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="t-h3" style={{marginBottom:"0.75rem"}}>Message sent — thank you!</h3>
                    <p className="t-body">We've received your enquiry and a consultant will be in touch within 4 business hours. You'll also receive a copy at <strong style={{color:"var(--text-1)"}}>{form.email}</strong>.</p>
                    <p style={{marginTop:"1rem",fontSize:"0.875rem",color:"var(--text-3)"}}>Can't wait? Email us directly at <a href="mailto:info@jubiliants.com" style={{color:"var(--blue-light)"}}>info@jubiliants.com</a></p>
                  </div>
                ) : (
                  <div style={{background:"var(--bg-raised)",borderRadius:"var(--radius-xl)",border:"1px solid var(--border)",padding:"2.5rem"}}>
                    <h2 className="t-h3" style={{marginBottom:"0.5rem"}}>Send us a message</h2>
                    <p className="t-small" style={{marginBottom:"2rem"}}>All fields marked * are required.</p>
                    <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
                      <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                          <label className="field-label">Full Name *</label>
                          <input type="text" value={form.name} onChange={set("name")} placeholder="Your full name" className="field-input" required />
                        </div>
                        <div>
                          <label className="field-label">Company Name</label>
                          <input type="text" value={form.company} onChange={set("company")} placeholder="Your organisation" className="field-input" />
                        </div>
                      </div>
                      <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                          <label className="field-label">Email Address *</label>
                          <input type="email" value={form.email} onChange={set("email")} placeholder="work@company.com" className="field-input" required />
                        </div>
                        <div>
                          <label className="field-label">Phone Number</label>
                          <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" className="field-input" />
                        </div>
                      </div>
                      <div style={{display:"grid",gap:"1.25rem"}} className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                          <label className="field-label">Service Required</label>
                          <select value={form.service} onChange={set("service")} className="field-input">
                            <option value="">Select a service…</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="field-label">Estimated Budget</label>
                          <select value={form.budget} onChange={set("budget")} className="field-input">
                            <option value="">Prefer not to say</option>
                            <option>Under ₹10 Lakhs</option>
                            <option>₹10–25 Lakhs</option>
                            <option>₹25–50 Lakhs</option>
                            <option>₹50 Lakhs – ₹1 Crore</option>
                            <option>Above ₹1 Crore</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="field-label">Tell us about your project *</label>
                        <textarea value={form.message} onChange={set("message")} placeholder="Describe what you're trying to build, the problem you're solving, and any constraints or timelines we should know about." className="field-input" rows={5} required style={{resize:"vertical"}}></textarea>
                      </div>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
                        <button onClick={submit} disabled={loading || !form.name || !form.email || !form.message} className="btn btn-primary btn-lg" style={{opacity:(!form.name || !form.email || !form.message) ? 0.5 : 1}}>
                          {loading ? (
                            <span style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                              <svg width="16" height="16" viewBox="0 0 16 16" style={{animation:"spin 1s linear infinite"}}><circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" fill="none" strokeDasharray="28" strokeDashoffset="10"/></svg>
                              Sending…
                            </span>
                          ) : "Send Message →"}
                        </button>
                        <p style={{fontSize:"0.75rem",color:"var(--text-4)"}}>Or email <a href="mailto:info@jubiliants.com" style={{color:"var(--blue-light)"}}>info@jubiliants.com</a></p>
                      </div>
                    </div>
                  </div>
                )}
              </RevealOnScroll>
            </div>

            {/* Sidebar info */}
            <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
              <RevealOnScroll delay={100}>
                <div style={{background:"var(--bg-raised)",border:"1px solid var(--border)",borderRadius:"var(--radius-lg)",padding:"1.5rem"}}>
                  <div style={{fontSize:"0.6875rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--text-3)",marginBottom:"1.25rem"}}>Contact Details</div>
                  <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                    <div style={{display:"flex",gap:"0.75rem"}}>
                      <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"var(--blue-dim)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5A4.5 4.5 0 0113.5 6c0 3-4.5 8.5-5.5 8.5S2.5 9 2.5 6A4.5 4.5 0 018 1.5z" stroke="#3B82F6" strokeWidth="1.25"/><circle cx="8" cy="6" r="1.5" stroke="#3B82F6" strokeWidth="1.25"/></svg>
                      </div>
                      <div>
                        <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--text-1)",marginBottom:"0.25rem"}}>Office Address</div>
                        <div style={{marginBottom:"1rem"}}>
                          <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--blue-light)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"0.375rem"}}>Registered Office</div>
                          <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.6}}>08th Floor, SLN Terminus, Survey No. 133<br/>Beside Botanical Gardens, Gachibowli<br/>Hyderabad, Telangana 500032, India</p>
                        </div>
                        <div>
                          <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--text-4)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"0.375rem"}}>Branch Office</div>
                          <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.6}}>B-8, Indian Airlines Colony<br/>Prakash Nagar, Begumpet<br/>Hyderabad, Telangana 500016, India</p>
                        </div>
                        <p style={{fontSize:"0.75rem",color:"var(--text-4)",marginTop:"1rem",borderTop:"1px solid var(--border)",paddingTop:"0.75rem"}}>A subsidiary of <strong style={{color:"var(--text-3)"}}>Telcomet Global Solutions</strong></p>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:"0.75rem"}}>
                      <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"var(--blue-dim)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12v10H2z" rx="1" stroke="#3B82F6" strokeWidth="1.25"/><path d="M2 4l6 5 6-5" stroke="#3B82F6" strokeWidth="1.25"/></svg>
                      </div>
                      <div>
                        <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--text-1)",marginBottom:"0.25rem"}}>Email</div>
                        <a href="mailto:info@jubiliants.com" style={{fontSize:"0.875rem",color:"var(--blue-light)"}}>info@jubiliants.com</a>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:"0.75rem"}}>
                      <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"rgba(37,211,102,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#25D366"><path d="M8 1C4.14 1 1 4.14 1 8c0 1.23.34 2.39.92 3.38L1 15l3.71-.91A6.97 6.97 0 008 15c3.86 0 7-3.14 7-7S11.86 1 8 1zm3.6 9.8c-.15.42-.88.8-1.21.85-.31.05-.7.07-1.13-.07a10.3 10.3 0 01-1.02-.38c-1.8-.78-2.98-2.59-3.07-2.71-.09-.12-.74-.98-.74-1.87s.47-1.33.64-1.51c.17-.18.37-.22.5-.22.12 0 .24 0 .35.01.11 0 .27-.04.41.31.15.37.51 1.25.55 1.34.05.09.08.2.02.32-.06.12-.09.2-.18.31-.09.11-.18.24-.26.33-.09.09-.18.19-.08.37.1.18.45.74.97 1.2.66.59 1.22.77 1.4.86.18.09.28.07.39-.04.11-.12.45-.52.57-.71.12-.18.24-.15.4-.09.16.06 1.05.49 1.23.58.18.09.3.14.34.21.04.07.04.43-.11.85z"/></svg>
                      </div>
                      <div>
                        <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--text-1)",marginBottom:"0.25rem"}}>WhatsApp</div>
                        <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noreferrer" style={{fontSize:"0.875rem",color:"#4ADE80"}}>Chat on WhatsApp</a>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:"0.75rem"}}>
                      <div style={{width:"36px",height:"36px",borderRadius:"8px",background:"var(--blue-dim)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#3B82F6" strokeWidth="1.25"/><path d="M8 4v4l3 3" stroke="#3B82F6" strokeWidth="1.25" strokeLinecap="round"/></svg>
                      </div>
                      <div>
                        <div style={{fontSize:"0.75rem",fontWeight:600,color:"var(--text-1)",marginBottom:"0.125rem"}}>Response Time</div>
                        <p style={{fontSize:"0.8125rem",color:"var(--text-3)"}}>Within 4 business hours<br/><span style={{color:"var(--green)"}}>●</span> Mon–Sat, 9 AM–7 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={150}>
                <div style={{background:"var(--bg-raised)",border:"1px solid var(--border)",borderRadius:"var(--radius-lg)",padding:"1.5rem"}}>
                  <div style={{fontSize:"0.6875rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--text-3)",marginBottom:"1rem"}}>Why Book a Call?</div>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.625rem"}}>
                    {["Free 30-minute consultation — no obligation","Get a rough timeline and budget estimate","Talk directly to a senior consultant","Get our honest assessment of your approach","Understand what's technically possible"].map(item => (
                      <li key={item} style={{display:"flex",alignItems:"flex-start",gap:"0.5rem",fontSize:"0.8125rem",color:"var(--text-2)"}}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{marginTop:"1px",flexShrink:0}}><path d="M3 8l3 3 7-7" stroke="#22C55E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div style={{background:"var(--bg-raised)",border:"1px solid var(--border)",borderRadius:"var(--radius-lg)",padding:"1.5rem"}}>
                  <div style={{fontSize:"0.6875rem",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color:"var(--text-3)",marginBottom:"1rem"}}>Services We Offer</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                    {["Custom Software","Web Apps","Mobile Apps","ERP","SaaS","AI Agents","AI Automation","Gen AI","Computer Vision","ML","Chatbots"].map(s => (
                      <span key={s} className="chip" style={{fontSize:"0.6875rem"}}>{s}</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{background:"var(--bg-raised)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap" style={{padding:"2rem 1.5rem 3rem"}}>
          <RevealOnScroll>
            <h3 className="t-h4" style={{marginBottom:"1rem"}}>Find us in Hyderabad</h3>
            <div style={{borderRadius:"var(--radius-xl)",overflow:"hidden",border:"1px solid var(--border)",height:"300px"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.3613!3d17.4401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ef3e2c6c71%3A0x8a9e7e4f5f2b1a2c!2sSLN+Terminus%2C+Gachibowli%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{border:0,filter:"invert(92%) hue-rotate(180deg) saturate(0.9)"}}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Jubiliants Office — Gachibowli, Hyderabad"
              ></iframe>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
