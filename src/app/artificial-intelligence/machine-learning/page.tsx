import Link from "next/link";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";
import { MLVisual } from "@/components/Visuals";

export const metadata = {
  title: "Machine Learning Solutions | Predictive Analytics & MLOps | Jubiliants",
  description: "Enterprise Machine Learning: demand forecasting, churn prediction, fraud detection, recommendation engines, and predictive maintenance. MLOps pipelines with MLflow, Kubeflow, and Azure ML.",
};

const mlUseCases = [
  { title: "Demand Forecasting", desc: "Predict product demand, staffing requirements, and inventory needs — reducing stockouts by 40% and overstock by 30%. Trained on your historical data with seasonal and promotional factors." },
  { title: "Customer Churn Prediction", desc: "Identify at-risk customers 30–60 days before they leave. Score every customer daily and trigger targeted retention workflows in your CRM automatically." },
  { title: "Fraud & Anomaly Detection", desc: "Real-time transaction scoring, unusual behaviour detection, and automated flagging — reducing fraud losses while minimising false positives that frustrate genuine customers." },
  { title: "Recommendation Engine", desc: "Personalised product, content, and service recommendations based on behaviour, preferences, and similar user patterns — increasing average order value and engagement." },
  { title: "Predictive Maintenance", desc: "Predict equipment failure before it happens using sensor data, maintenance history, and environmental factors — reducing unplanned downtime by up to 50%." },
  { title: "Price Optimisation", desc: "Dynamic pricing models that respond to demand, competition, inventory levels, and customer segments — maximising revenue without manual price management." },
];

export default function MachineLearning() {
  return (
    <>
      <section className="hero-section hero-section-inner">
        <div className="wrap" style={{width:"100%"}}>
          <div className="hero-grid">
            <div>
              <div className="section-label">AI Solutions</div>
              <h1 className="t-h1" style={{ marginBottom: "1rem" }}>Machine Learning Models That Predict, Optimise, and Automate</h1>
              <p className="t-body-lg" style={{ marginBottom: "1.75rem", maxWidth: "460px" }}>We build, deploy, and maintain production ML systems — demand forecasting, churn prediction, fraud detection, and recommendation engines — with the MLOps infrastructure to keep models accurate as your data evolves.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                <Link href="/contact" className="btn btn-primary">Discuss Your ML Project</Link>
                <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {[["96%+", "Model accuracy"], ["4 wks", "To first model in prod"], ["MLOps", "Continuous retraining"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.25rem", color: "var(--text-1)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex hero-visual-col"><MLVisual /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-base)" }}>
        <div className="wrap">
          <RevealOnScroll>
            <div style={{ maxWidth: "600px", marginBottom: "2.5rem" }}>
              <div className="section-label">Use cases</div>
              <h2 className="t-h2">ML solutions across every business function</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: "grid", gap: "1.25rem" }} className="grid grid-cols-1 md:grid-cols-3">
            {mlUseCases.map((uc, i) => (
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
                <div className="section-label">Why MLOps matters</div>
                <h2 className="t-h2" style={{ marginBottom: "1rem" }}>A model is only valuable if it stays accurate</h2>
                <p className="t-body" style={{ marginBottom: "1.25rem" }}>Most ML projects fail not at training, but at deployment and maintenance. Data drifts. Business conditions change. Without proper MLOps, your 96% accurate model becomes 82% accurate six months later — and nobody notices until it's causing real damage.</p>
                <p className="t-body" style={{ marginBottom: "1.5rem" }}>We implement full MLOps pipelines — automated retraining triggers, performance monitoring dashboards, A/B testing infrastructure, and rollback controls — so your models stay sharp without manual intervention.</p>
                <ul className="check-list">
                  {["Automated retraining on data drift detection", "Model performance dashboards — accuracy, precision, recall", "Champion-challenger A/B testing framework", "One-click model rollback if metrics degrade", "Full feature store and experiment tracking with MLflow"].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { cat: "Languages and Frameworks", items: ["Python, scikit-learn, XGBoost", "PyTorch, TensorFlow, Keras", "HuggingFace Transformers", "RAPIDS (GPU-accelerated)"] },
                  { cat: "MLOps Platforms", items: ["MLflow (experiment tracking)", "Kubeflow Pipelines", "Azure Machine Learning", "AWS SageMaker"] },
                  { cat: "Data Engineering", items: ["Apache Spark, dbt", "Apache Kafka (streaming)", "Great Expectations (DQ)", "Feast (feature store)"] },
                ].map((stack, i) => (
                  <RevealOnScroll key={stack.cat} delay={i * 80}>
                    <div className="card-flat" style={{ padding: "1.25rem" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "0.625rem" }}>{stack.cat}</div>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.6 }}>{stack.items.join(" · ")}</p>
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
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Fraud Detection ML</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>FinTech</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>FinServe Solutions</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>99.1% fraud detection accuracy</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Deployed an anomaly detection ML model on transaction data — identifying fraudulent patterns in real time and reducing false positives by 60% versus the previous rule-based system.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Crop Yield Prediction</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Agriculture</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Indigo Ag</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>23% improvement in yield forecasting accuracy</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Built a machine learning pipeline ingesting satellite imagery, soil, and weather data to predict crop yields per field — enabling precision input planning for large-scale farms.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={70}>
                <div className="card" style={{padding:"1.5rem",height:"100%"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.875rem"}}>
                    <span className="chip chip-blue" style={{fontSize:"0.6875rem"}}>Demand Forecasting</span>
                    <span className="chip" style={{fontSize:"0.6875rem"}}>Manufacturing</span>
                  </div>
                  <div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"0.9375rem",color:"var(--text-1)",marginBottom:"0.375rem"}}>Mayville Engineering</div>
                  <div style={{fontSize:"0.8125rem",fontWeight:600,color:"var(--blue-light)",marginBottom:"0.625rem"}}>18% reduction in inventory holding costs</div>
                  <p style={{fontSize:"0.8125rem",color:"var(--text-3)",lineHeight:1.65}}>Developed a time-series ML model for demand forecasting across 500+ SKUs — reducing overstock, improving procurement planning, and cutting inventory holding costs significantly.</p>
                </div>
              </RevealOnScroll>
          </div>
        </div>
      </section>

<CTABand title="Ready to build your Machine Learning solution?" sub="Start with a data assessment. We'll evaluate your data quality, identify the best use case, and build a proof of value in 3 weeks." primary="Book a Free ML Assessment" secondary="View AI Case Studies" />
    </>
  );
}
