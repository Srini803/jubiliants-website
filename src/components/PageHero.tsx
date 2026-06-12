interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
}

export default function PageHero({ eyebrow, title, highlight, subtitle, cta1, cta2 }: PageHeroProps) {
  const fullTitle = highlight ? title.replace(highlight, `<span class="text-gradient">${highlight}</span>`) : title;

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{
      paddingTop:"6rem",
      background:"linear-gradient(135deg, #050D1A 0%, #0A1628 60%, #0D1F3C 100%)"
    }}>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle, rgba(30,111,217,0.1) 0%, transparent 70%)", filter:"blur(60px)"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none" style={{background:"radial-gradient(circle, rgba(0,194,255,0.07) 0%, transparent 70%)", filter:"blur(50px)"}}></div>

      <div className="container-main w-full py-20">
        <div className="max-w-3xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="font-display text-4xl lg:text-5xl font-800 leading-tight mb-6 text-white" style={{fontFamily:"Syne,sans-serif",fontWeight:800}} dangerouslySetInnerHTML={{__html: fullTitle}}></h1>
          <p className="text-lg leading-relaxed mb-8" style={{color:"var(--slate-light)"}}>{subtitle}</p>
          {(cta1 || cta2) && (
            <div className="flex flex-wrap gap-4">
              {cta1 && <a href={cta1.href} className="btn-primary">{cta1.label} →</a>}
              {cta2 && <a href={cta2.href} className="btn-secondary">{cta2.label}</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
