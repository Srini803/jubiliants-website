import Link from "next/link";
interface CTABandProps { title: string; sub?: string; primary?: string; secondary?: string; }
export default function CTABand({ title, sub, primary="Book Free Consultation", secondary="View Case Studies" }: CTABandProps) {
  return (
    <section className="cta-band">
      <div className="wrap" style={{padding:"4.5rem 1.5rem",textAlign:"center"}}>
        <div style={{maxWidth:"600px",margin:"0 auto"}}>
          <h2 className="t-h2" style={{marginBottom:"0.875rem"}}>{title}</h2>
          {sub && <p className="t-body" style={{marginBottom:"2rem"}}>{sub}</p>}
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.875rem",justifyContent:"center"}}>
            <Link href="/contact" className="btn btn-primary btn-lg">{primary}</Link>
            <Link href="/case-studies" className="btn btn-secondary btn-lg">{secondary}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
