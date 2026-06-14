interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  badge?: string;
}
export default function PageHero({ eyebrow, title, subtitle, cta1, cta2, badge }: PageHeroProps) {
  return (
    <section style={{background:"var(--bg-base)",borderBottom:"1px solid var(--border)",padding:"4.5rem 0 4rem"}}>
      <div className="wrap">
        <div style={{maxWidth:"720px"}}>
          {badge && (
            <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"var(--blue-dim)",border:"1px solid rgba(37,99,235,0.25)",borderRadius:"999px",padding:"0.3125rem 0.875rem",marginBottom:"1.25rem"}}>
              <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--blue-light)",display:"block"}}></span>
              <span style={{fontSize:"0.75rem",fontWeight:600,color:"#93C5FD"}}>{badge}</span>
            </div>
          )}
          <div className="section-label">{eyebrow}</div>
          <h1 className="t-h1" style={{marginBottom:"1rem"}}>{title}</h1>
          <p className="t-body-lg" style={{marginBottom:"2rem",maxWidth:"600px"}}>{subtitle}</p>
          {(cta1 || cta2) && (
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}}>
              {cta1 && <a href={cta1.href} className="btn btn-primary">{cta1.label}</a>}
              {cta2 && <a href={cta2.href} className="btn btn-secondary">{cta2.label}</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
