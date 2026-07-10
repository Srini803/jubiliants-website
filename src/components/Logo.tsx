/* Jubiliants brand lockup — original mark artwork (from logo.jpg,
   background removed) + themed wordmark text. */

const MARK_ASPECT = 318 / 512;

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt=""
      width={Math.round(size * MARK_ASPECT)}
      height={size}
      style={{ display: "block", width: size * MARK_ASPECT, height: size }}
    />
  );
}

export default function Logo({ size = 44, light = false }: { size?: number; light?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem" }}>
      <LogoMark size={size} />
      <span style={{ display: "block" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-heading)",
            fontSize: size * 0.5,
            fontWeight: 600,
            letterSpacing: "0.005em",
            lineHeight: 1,
            color: light ? "var(--paper)" : "var(--indigo-deep)",
          }}
        >
          Jubiliants
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-body)",
            fontSize: Math.max(size * 0.19, 8),
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: light ? "var(--gold)" : "var(--orange-deep)",
            marginTop: size * 0.11,
          }}
        >
          Delivering Success
        </span>
      </span>
    </span>
  );
}
