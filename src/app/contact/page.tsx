"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  "Custom Web Application Development",
  "Mobile Application Development (Android & iOS)",
  "Agentic AI Solutions",
  "AI-Powered Business Automation",
  "Digital Transformation Consulting",
  "Enterprise Software Development",
  "Workflow Automation Solutions",
  "Product Development & Technology Consulting",
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{
        paddingTop:"6rem",
        background:"linear-gradient(135deg, #050D1A 0%, #0A1628 60%, #0D1F3C 100%)",
        minHeight:"40vh"
      }}>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle, rgba(30,111,217,0.1) 0%, transparent 70%)", filter:"blur(60px)"}}></div>
        <div className="container-main w-full py-16">
          <div className="max-w-3xl">
            <div className="eyebrow">Contact Us</div>
            <h1 className="font-display text-4xl lg:text-5xl font-800 leading-tight mb-4 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-lg" style={{color:"var(--slate-light)"}}>
              Whether you're looking to build custom software, develop a mobile app, implement AI solutions, or embark on a digital transformation journey — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad" style={{background:"var(--navy-950)"}}>
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <RevealOnScroll>
                <div className="glass rounded-2xl p-6 glow-border">
                  <h3 className="font-display font-700 text-white mb-5" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(0,194,255,0.1)"}}>📍</div>
                      <div>
                        <p className="text-sm font-600 text-white mb-1" style={{fontWeight:600}}>Office Address</p>
                        <p className="text-sm" style={{color:"var(--slate-muted)"}}>B-8, Indian Airlines Colony<br/>Prakash Nagar, Begumpet<br/>Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(0,194,255,0.1)"}}>📧</div>
                      <div>
                        <p className="text-sm font-600 text-white mb-1" style={{fontWeight:600}}>Email Us</p>
                        <a href="mailto:srini@jubiliants.com" className="text-sm" style={{color:"var(--cyan-accent)"}}>srini@jubiliants.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(37,211,102,0.1)"}}>💬</div>
                      <div>
                        <p className="text-sm font-600 text-white mb-1" style={{fontWeight:600}}>WhatsApp</p>
                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="text-sm" style={{color:"#25D366"}}>Chat with us on WhatsApp</a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <div className="glass rounded-2xl p-6 glow-border">
                  <h3 className="font-display font-700 text-white mb-4 text-sm" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>How Can We Help?</h3>
                  <ul className="space-y-2">
                    {services.slice(0,6).map(s => (
                      <li key={s} className="flex items-start gap-2 text-xs" style={{color:"var(--slate-light)"}}>
                        <span style={{color:"var(--cyan-accent)"}}>›</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {[["300+","Projects"],["200+","Customers"],["10+","Years"],["95%+","Retention"]].map(([n,l]) => (
                    <div key={l} className="glass rounded-xl p-4 glow-border text-center">
                      <div className="font-display font-800 text-lg" style={{fontFamily:"Syne,sans-serif",fontWeight:800,color:"var(--cyan-accent)"}}>{n}</div>
                      <div className="text-xs" style={{color:"var(--slate-muted)"}}>{l}</div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll>
                <div className="glass rounded-2xl p-8 glow-border">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="font-display text-2xl font-800 text-white mb-3" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Thank You!</h3>
                      <p style={{color:"var(--slate-muted)"}}>Your message has been sent. Our team will get back to you within 24 hours.</p>
                      <p className="mt-2 text-sm" style={{color:"var(--cyan-accent)"}}>srini@jubiliants.com</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display font-700 text-white mb-6 text-xl" style={{fontFamily:"Syne,sans-serif",fontWeight:700}}>Schedule a Free Consultation</h2>
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Full Name *</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="form-input" required />
                          </div>
                          <div>
                            <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Company Name</label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="form-input" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Email Address *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="form-input" required />
                          </div>
                          <div>
                            <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Service Interested In</label>
                          <select name="service" value={formData.service} onChange={handleChange} className="form-input">
                            <option value="">Select a service...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-600 mb-1.5" style={{color:"var(--slate-light)",fontWeight:600}}>Message *</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, requirements, or questions..." className="form-input" rows={5} required></textarea>
                        </div>
                        <button
                          onClick={handleSubmit}
                          disabled={loading}
                          className="btn-primary w-full justify-center text-base py-4"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" fill="none" strokeDasharray="30" strokeDashoffset="10"/></svg>
                              Sending...
                            </span>
                          ) : "Send Message →"}
                        </button>
                        <p className="text-xs text-center" style={{color:"var(--slate-muted)"}}>Or email us directly at <a href="mailto:srini@jubiliants.com" style={{color:"var(--cyan-accent)"}}>srini@jubiliants.com</a></p>
                      </div>
                    </>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{background:"var(--navy-900)"}}>
        <div className="container-main pb-16">
          <RevealOnScroll>
            <div className="rounded-2xl overflow-hidden glow-border" style={{height:"350px"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.219745756743!2d78.4566!3d17.4438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzM3LjciTiA3OMKwMjcnMjMuOCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{border:0,filter:"invert(90%) hue-rotate(180deg)"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jubiliants Office Location - Begumpet, Hyderabad"
              ></iframe>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad" style={{background:"linear-gradient(135deg,#0D1F3C,#050D1A)"}}>
        <div className="container-main text-center">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto">
              <div className="eyebrow justify-center">Ready to Transform?</div>
              <h2 className="font-display text-3xl font-800 text-white mb-4" style={{fontFamily:"Syne,sans-serif",fontWeight:800}}>Let's Build Something Great Together.</h2>
              <p className="text-sm mb-6" style={{color:"var(--slate-muted)"}}>From Custom Applications and Mobile Apps to AI Solutions and Digital Transformation, Jubiliants is your trusted technology partner.</p>
              <a href="mailto:srini@jubiliants.com" className="btn-primary">Email Us Today →</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
