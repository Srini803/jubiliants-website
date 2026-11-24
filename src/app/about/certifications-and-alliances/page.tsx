import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Certifications & Alliances | Jubiliants Software Solutions",
  description: "Information security, quality, AI governance and data-protection standards, plus the cloud and AI alliances behind Jubiliants' software and AI delivery.",
};

/* ── Logo marks (inline SVG, no image files) ───────────── */
const IsoBadge = ({ prefix, code, year }: { prefix: string; code: string; year: string }) => (
  <svg width="120" height="56" viewBox="0 0 120 56" role="img" aria-label={`${prefix} ${code}:${year}`}>
    <rect x="1" y="1" width="118" height="54" rx="10" fill="none" stroke="#2E3192" strokeWidth="2" />
    <text x="60" y="17" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="#1B75BB" style={{ fontFamily: "inherit" }}>{prefix}</text>
    <text x="60" y="38" textAnchor="middle" fontSize="21" fontWeight="700" fill="#2E3192" style={{ fontFamily: "inherit" }}>{code}</text>
    <text x="60" y="50" textAnchor="middle" fontSize="9" fill="#6A6D8E" style={{ fontFamily: "inherit" }}>{year}</text>
  </svg>
);

const markText = { fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.15 } as const;

const MarkAndName = ({ mark, name, color }: { mark: ReactNode; name: string; color: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
    {mark}
    <span style={{ ...markText, color }}>{name}</span>
  </div>
);

const EuStars = (
  <svg width="40" height="40" viewBox="0 0 24 24" role="img" aria-label="European Union stars">
    <path fill="#003399" d="M11.373 1.94 10.36 1.2h1.253L12 0l.387 1.2h1.253l-1.013.74.386 1.207L12 2.4l-1.013.747Zm1.254 20.86.386 1.2L12 23.26l-1.013.74.386-1.2-1.013-.74h1.253L12 20.853l.387 1.207h1.253ZM1.64 12.8l-1.013.747.386-1.2L0 11.627h1.253l.387-1.2.387 1.2h1.26l-1.02.746.386 1.2-1.013-.746Zm5.807-9.467.386 1.2L6.82 3.8l-1.013.74.386-1.2L5.18 2.6h1.253l.387-1.2.387 1.2H8.46Zm-4.78 3.08.386-1.2.394 1.2h1.22l-1.014.747.387 1.2-1.02-.747L2 8.36l.387-1.2-1.014-.747ZM1.387 16.84h1.28l.386-1.2.394 1.2h1.22l-1.014.747.387 1.2-1.02-.74-1.02.74.387-1.2-1.014-.747Zm4.806 4.56-1.013-.733h1.253l.387-1.2.387 1.2H8.46l-1.013.733.386 1.2-1.013-.74-1.013.74Zm16.794-9.027.386 1.2-1.013-.746-1.027.746.387-1.2-1.02-.746H22l.387-1.2.386 1.2H24Zm-6.434-9.04L15.54 2.6h1.253l.387-1.2.387 1.2h1.253l-1.013.733.386 1.2L17.18 3.8l-1.013.74.386-1.2Zm4 3.074.394-1.2.386 1.2h1.254l-.987.753.387 1.2-1.014-.747-1.02.747.387-1.2-1.007-.747Zm.78 10.433h1.254l-.987.747.387 1.2-1.014-.74-1.02.74.387-1.2-1.007-.747h1.254l.393-1.2.387 1.2zm-2.513 3.827-1.013.733.386 1.2-1.013-.74-1.013.74.386-1.2-1.013-.733h1.253l.387-1.2.387 1.2z" />
  </svg>
);

const GdprMark = (
  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
    {EuStars}
    <div style={{ lineHeight: 1.15 }}>
      <div style={{ ...markText, color: "#003399" }}>GDPR</div>
      <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#6A6D8E" }}>UK GDPR</div>
    </div>
  </div>
);

const AnthropicMark = (
  <svg width="30" height="30" viewBox="0 0 24 24" role="img" aria-label="Anthropic">
    <path fill="#191919" d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
  </svg>
);

const DatabricksMark = (
  <svg width="30" height="30" viewBox="0 0 24 24" role="img" aria-label="Databricks">
    <path fill="#FF3621" d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z" />
  </svg>
);

const MicrosoftMark = (
  <svg width="28" height="28" viewBox="0 0 23 23" role="img" aria-label="Microsoft">
    <rect x="0" y="0" width="11" height="11" fill="#F25022" />
    <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
    <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
    <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
  </svg>
);

type Item = { chip: string; chipClass: string; title: string; desc: string; logo: ReactNode };

const standards: Item[] = [
  { chip: "Certification", chipClass: "chip chip-blue", title: "ISO/IEC 27001:2022", desc: "The international standard for information security management. It governs how client data, source code and infrastructure are protected.", logo: <IsoBadge prefix="ISO/IEC" code="27001" year="2022" /> },
  { chip: "Certification", chipClass: "chip chip-blue", title: "ISO 9001:2015", desc: "The quality management standard. It covers how software and services are planned, delivered and continuously improved.", logo: <IsoBadge prefix="ISO" code="9001" year="2015" /> },
  { chip: "Certification", chipClass: "chip chip-blue", title: "ISO/IEC 42001:2023", desc: "The management-system standard for artificial intelligence. It covers AI governance, risk management and responsible use.", logo: <IsoBadge prefix="ISO/IEC" code="42001" year="2023" /> },
  { chip: "Compliance", chipClass: "chip chip-green", title: "GDPR and UK GDPR", desc: "European and UK data-protection law. It governs how personal data of people in the EU and UK is collected, processed and protected.", logo: GdprMark },
];

const alliances: Item[] = [
  { chip: "Alliance", chipClass: "chip", title: "AWS Partner Network", desc: "Cloud architecture, migration and delivery on Amazon Web Services.", logo: <span style={{ ...markText, color: "#232F3E" }}>Amazon Web Services</span> },
  { chip: "Alliance", chipClass: "chip", title: "Microsoft AI Cloud Partner Program", desc: "Azure, Azure OpenAI and Microsoft ecosystem delivery for enterprise applications and AI.", logo: <MarkAndName mark={MicrosoftMark} name="Microsoft" color="#5E5E5E" /> },
  { chip: "Alliance", chipClass: "chip", title: "Anthropic Claude Partner Network", desc: "Claude-powered assistants, agents and enterprise AI applications.", logo: <MarkAndName mark={AnthropicMark} name="Anthropic" color="#191919" /> },
  { chip: "Alliance", chipClass: "chip", title: "Databricks", desc: "A data and AI platform for analytics, data engineering and machine learning solutions.", logo: <MarkAndName mark={DatabricksMark} name="Databricks" color="#1B3139" /> },
];

const Grid = ({ items }: { items: Item[] }) => (
  <div style={{ display: "grid", gap: "1.5rem" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {items.map((it, i) => (
      <RevealOnScroll key={it.title} delay={i * 80} className="h-full">
        <div className="card-flat" style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ minHeight: "88px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "0.75rem", marginBottom: "1.25rem" }}>
            {it.logo}
          </div>
          <div style={{ marginBottom: "0.625rem" }}>
            <span className={it.chipClass} style={{ fontSize: "0.6875rem" }}>{it.chip}</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-1)", marginBottom: "0.5rem" }}>{it.title}</div>
          <p className="t-body" style={{ lineHeight: 1.7, fontSize: "0.9rem" }}>{it.desc}</p>
        </div>
      </RevealOnScroll>
    ))}
  </div>
);

export default function CertificationsAndAlliances() {
  return (
    <>
      <PageHero
        eyebrow="Certifications and alliances"
        title="Standards we build to. Partners we build with."
        subtitle="Information security, quality, AI governance and data-protection standards, plus the cloud and AI alliances behind our delivery."
        cta1={{ label: "Talk to Our Team", href: "/contact" }}
      />

      <section className="section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Standards and compliance</div>
            <h2 className="t-h2">Certifications and compliance</h2>
          </div>
          <Grid items={standards} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Technology alliances</div>
            <h2 className="t-h2">Partners behind our cloud and AI work</h2>
          </div>
          <Grid items={alliances} />
        </div>
      </section>

      <CTABand title="Reviewing us as a vendor?" sub="Tell us what your procurement or security team needs and we will point you to the right details." primary="Contact Us" secondary="View Case Studies" />
    </>
  );
}
