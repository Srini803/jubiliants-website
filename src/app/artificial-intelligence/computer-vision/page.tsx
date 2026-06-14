import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ComputerVisionVisual } from "@/components/Visuals";

export const metadata = {
  title: "Computer Vision Solutions | Visual AI & Image Analysis | Jubiliants",
  description: "Enterprise Computer Vision: quality control, defect detection, facial recognition, document digitisation, and retail analytics. Real-time edge and cloud inference on YOLO, EfficientNet, and custom models.",
};

const applications = [
  { industry: "Manufacturing", icon: "🏭", title: "Quality Control & Defect Detection", desc: "Inspect products at line speed — detect surface defects, dimensional errors, contamination, and packaging faults with 99%+ accuracy. Replace slow, inconsistent manual inspection." },
  { industry: "Retail", icon: "🛒", title: "Shopper Analytics & Loss Prevention", desc: "Analyse customer movement patterns, measure dwell time, detect queue lengths, and identify suspicious behaviour — without storing personal data." },
  { industry: "Healthcare", icon: "🏥", title: "Medical Image Analysis", desc: "Assist radiologists with anomaly detection in X-rays, CT scans, and pathology slides. AI as a second-opinion tool — not a replacement for clinical judgment." },
  { industry: "Logistics", icon: "🚚", title: "Package & Barcode Reading", desc: "Automated parcel scanning, damage detection, label verification, and ANPR for vehicle identification — integrated with WMS and TMS systems." },
  { industry: "Security", icon: "🔐", title: "Access Control & Surveillance", desc: "Face recognition for office access, crowd density monitoring, perimeter breach detection, and PPE compliance checking on construction sites." },
  { industry: "Agriculture", icon: "🌾", title: "Crop & Field Analysis", desc: "Drone-based crop health monitoring, disease identification, yield estimation, and irrigation planning using multispectral and RGB imagery." },
];

export default function ComputerVision() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: "3rem", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Computer Vision That Sees What Your Team Can't</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build production Computer Vision systems that inspect, identify, and analyse visual data at machine speed — delivering quality control, process automation, and business intelligence that humans simply can't achieve at scale.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Discuss Your CV Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["99%+", "Detection accuracy"], ["12ms", "Inference latency"], ["60fps", "Real-time processing"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><ComputerVisionVisual /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Industry applications</div>
              <h2 className="t-h2">Computer Vision across key sectors</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {applications.map((app, i) => (
              <RevealOnScroll key={app.title} delay={i * 70}>
                <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{app.icon}</span>
                    <span className="chip chip-blue" style={{ fontSize: "0.6875rem" }}>{app.industry}</span>
                  </div>
                  <h3 className="t-h4" style={{ marginBottom: "0.5rem" }}>{app.title}</h3>
                  <p className="t-small">{app.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              <div className="section-label" style={{ justifyContent: "center" }}>Technology</div>
              <h2 className="t-h2">Models and infrastructure we deploy</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }} className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { cat: "Detection Models", items: ["YOLOv8 / YOLOv9", "EfficientDet", "Faster R-CNN", "DETR (Transformer)"] },
              { cat: "Classification", items: ["EfficientNet", "ResNet / ViT", "ConvNeXt", "Custom fine-tuned"] },
              { cat: "Deployment", items: ["ONNX Runtime", "TensorRT (GPU)", "Edge — NVIDIA Jetson", "Cloud — Azure AI Vision"] },
              { cat: "Annotation & MLOps", items: ["Roboflow", "Label Studio", "MLflow tracking", "DVC (data versioning)"] },
            ].map((t, i) => (
              <RevealOnScroll key={t.cat} delay={i * 80}>
                <div className="card-flat" style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "0.875rem" }}>{t.cat}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {t.items.map(it => <li key={it} style={{ fontSize: "0.8125rem", color: "var(--text-2)" }}>{it}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready to deploy Computer Vision?" sub="Share your use case. We'll assess feasibility, recommend a model architecture, and build a proof-of-concept." primary="Book a CV Consultation" secondary="View Case Studies" />
    </>
  );
}
