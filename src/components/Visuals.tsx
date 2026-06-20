/* ────────────────────────────────────────────────────
   Jubiliants — Shared Visual Component Library
   All SVG illustrations, dashboards, diagrams, mockups
   Used across every service page for visual storytelling
──────────────────────────────────────────────────────── */

/* ── Shared panel chrome ─────────────────────────── */
export const PanelChrome = ({
  width = 480, height = 300, title = "", subtitle = "",
  children, accent = "#2563EB"
}: {
  width?: number; height?: number; title?: string; subtitle?: string;
  children: React.ReactNode; accent?: string;
}) => (
  <svg viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg"
    style={{ width: "100%", height: "auto" }}>
    <rect width={width} height={height} rx="12" fill="#253347" stroke="#3D5068" strokeWidth="1" />
    <rect width={width} height={36} rx="12" fill="#2D3D55" />
    <rect y={24} width={width} height={12} fill="#2D3D55" />
    <circle cx={16} cy={18} r={4.5} fill="#EF4444" opacity=".7" />
    <circle cx={29} cy={18} r={4.5} fill="#F59E0B" opacity=".7" />
    <circle cx={42} cy={18} r={4.5} fill="#22C55E" opacity=".7" />
    {title && <text x={58} y={22} fontSize={8} fontWeight={600} fill="#93C5FD" fontFamily="Inter,sans-serif">{title}</text>}
    {subtitle && <text x={width - 10} y={22} fontSize={7} fill="#5A6E85" fontFamily="Inter,sans-serif" textAnchor="end">{subtitle}</text>}
    {children}
  </svg>
);

/* ── Card helpers ────────────────────────────────── */
export const MetricCard = ({
  x, y, w = 88, h = 56, label, value, sub, subColor = "#22C55E"
}: {
  x: number; y: number; w?: number; h?: number;
  label: string; value: string; sub: string; subColor?: string;
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={7} fill="#2D3D55" />
    <text x={x + 8} y={y + 16} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif">{label}</text>
    <text x={x + 8} y={y + 34} fontSize={15} fontWeight={700} fill="#F8FAFC" fontFamily="Inter,sans-serif">{value}</text>
    <text x={x + 8} y={y + 47} fontSize={6.5} fill={subColor} fontFamily="Inter,sans-serif">{sub}</text>
  </g>
);

export const StatusBadge = ({
  x, y, label, color, bg
}: { x: number; y: number; label: string; color: string; bg: string }) => (
  <g>
    <rect x={x} y={y} width={label.length * 5.5 + 16} height={14} rx={7} fill={bg} />
    <text x={x + 8} y={y + 9.5} fontSize={6.5} fontWeight={600} fill={color} fontFamily="Inter,sans-serif">{label}</text>
  </g>
);

export const BarChart = ({
  x, y, bars, w = 14, gap = 6, maxH = 60
}: {
  x: number; y: number;
  bars: { h: number; color?: string }[];
  w?: number; gap?: number; maxH?: number;
}) => (
  <g>
    {bars.map((b, i) => (
      <rect
        key={i}
        x={x + i * (w + gap)}
        y={y - b.h}
        width={w}
        height={b.h}
        rx={3}
        fill={b.color || "#2563EB"}
        opacity={0.5 + (i / bars.length) * 0.5}
        className={`bar-anim b${(i % 6) + 1}`}
      />
    ))}
  </g>
);

/* ═══════════════════════════════════════════════════
   WEB APPLICATIONS — Browser + Responsive Layout
═══════════════════════════════════════════════════ */
export const WebAppVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Enterprise Web Application" subtitle="jubiliants-erp.app">
      {/* Nav bar */}
      <g>
        <rect x={0} y={36} width={520} height={32} fill="#141F35" />
        <rect x={12} y={44} width={60} height={16} rx={4} fill="#2563EB" opacity={.25} />
        <text x={20} y={56} fontSize={7.5} fontWeight={600} fill="#93C5FD" fontFamily="Inter,sans-serif">Dashboard</text>
        {["Reports","Projects","Analytics","Users"].map((t, i) => (
          <text key={t} x={84 + i * 66} y={56} fontSize={7.5} fill="#5A6E85" fontFamily="Inter,sans-serif">{t}</text>
        ))}
        <rect x={430} y={43} width={78} height={18} rx={9} fill="#2563EB" />
        <text x={448} y={55} fontSize={7.5} fontWeight={600} fill="white" fontFamily="Inter,sans-serif">+ New Project</text>
      </g>
      {/* Sidebar */}
      <g>
        <rect x={0} y={68} width={80} height={272} fill="#141F35" />
        {[
          { label: "Overview", active: true },
          { label: "Customers" },
          { label: "Invoices" },
          { label: "Inventory" },
          { label: "Reports" },
          { label: "Settings" },
        ].map((item, i) => (
          <g key={item.label}>
            {item.active && <rect x={2} y={80 + i * 34} width={76} height={26} rx={5} fill="#1D4ED8" opacity={.4} />}
            <rect x={10} y={87 + i * 34} width={10} height={10} rx={2} fill={item.active ? "#3B82F6" : "#334155"} />
            <text x={26} y={96 + i * 34} fontSize={7} fill={item.active ? "#93C5FD" : "#475569"} fontFamily="Inter,sans-serif">{item.label}</text>
          </g>
        ))}
      </g>
      {/* Main content */}
      <g>
        <text x={92} y={84} fontSize={9} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Good morning, Srinivas</text>
        <text x={92} y={95} fontSize={7} fill="#5A6E85" fontFamily="Inter,sans-serif">Here's what's happening across your business today</text>
        {/* KPI strip */}
        <MetricCard x={92} y={102} label="Total Revenue" value="₹42L" sub="▲ 18% vs last month" />
        <MetricCard x={188} y={102} label="Active Projects" value="24" sub="▲ 3 this week" />
        <MetricCard x={284} y={102} label="Pending Invoices" value="₹8.2L" sub="12 awaiting approval" subColor="#F59E0B" />
        <MetricCard x={380} y={102} label="Team Utilisation" value="87%" sub="Within target range" subColor="#3B82F6" />
        {/* Chart area */}
        <rect x={92} y={165} width={260} height={130} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={102} y={182} fontSize={7.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Revenue Trend — FY 2025</text>
        <BarChart x={102} y={285} bars={[
          { h: 40 }, { h: 52 }, { h: 44 }, { h: 68 }, { h: 56 }, { h: 80 }, { h: 72 }, { h: 92 }, { h: 84 }, { h: 96 }, { h: 88 }, { h: 104 }
        ]} w={14} gap={5} />
        <polyline points="109,245 130,233 151,239 172,220 193,228 214,208 235,214 256,201 277,207 298,196 319,201 340,191"
          stroke="#60A5FA" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={.8} />
        {/* Activity feed */}
        <rect x={362} y={165} width={146} height={130} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={372} y={182} fontSize={7.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Recent Activity</text>
        {[
          { t: "Invoice #1042 approved", c: "#22C55E", time: "2m ago" },
          { t: "New order from Apollo", c: "#3B82F6", time: "14m ago" },
          { t: "Low stock alert: Item A", c: "#F59E0B", time: "1h ago" },
          { t: "Report generated", c: "#22C55E", time: "2h ago" },
          { t: "User Priya logged in", c: "#94A3B8", time: "3h ago" },
        ].map((a, i) => (
          <g key={i}>
            <circle cx={376} cy={195 + i * 20} r={3} fill={a.c} />
            <text x={384} y={198 + i * 20} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{a.t}</text>
            <text x={492} y={198 + i * 20} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif" textAnchor="end">{a.time}</text>
          </g>
        ))}
      </g>
      {/* Responsive preview strip */}
      <g>
        <rect x={92} y={300} width={420} height={30} rx={6} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={102} y={312} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">Responsive Design</text>
        {[
          { w: 60, h: 18, label: "Desktop", x: 155 },
          { w: 32, h: 18, label: "Tablet", x: 230 },
          { w: 20, h: 18, label: "Mobile", x: 285 },
        ].map(d => (
          <g key={d.label}>
            <rect x={d.x} y={304} width={d.w} height={d.h} rx={2} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
            <rect x={d.x + 2} y={306} width={d.w - 4} height={d.h - 4} rx={1} fill="#2D3D55" opacity={.5} />
            <text x={d.x + d.w / 2} y={328} fontSize={5.5} fill="#5A6E85" fontFamily="Inter,sans-serif" textAnchor="middle">{d.label}</text>
          </g>
        ))}
        <text x={360} y={316} fontSize={6.5} fill="#3B82F6" fontFamily="Inter,sans-serif">✓ Mobile-first · WCAG 2.1 · PWA-ready</text>
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   SAAS DEVELOPMENT — Multi-tenant SaaS platform
═══════════════════════════════════════════════════ */
export const SaaSVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="SaaS Platform Architecture" subtitle="Multi-tenant · Cloud-native">
      {/* Architecture layers */}
      {/* Layer 1: Users */}
      <g className="hv-g1">
        <text x={16} y={54} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>USER LAYER</text>
        {[
          { label: "Web App", x: 16, icon: "🌐" },
          { label: "iOS App", x: 106, icon: "📱" },
          { label: "Android", x: 196, icon: "📱" },
          { label: "API Client", x: 286, icon: "⚙" },
          { label: "Admin Panel", x: 376, icon: "🖥" },
        ].map(u => (
          <g key={u.label}>
            <rect x={u.x} y={58} width={82} height={40} rx={7} fill="#1D4ED8" stroke="#2563EB" strokeWidth={.5} strokeOpacity={.4} />
            <text x={u.x + 41} y={76} fontSize={12} textAnchor="middle" fontFamily="Inter,sans-serif">{u.icon}</text>
            <text x={u.x + 41} y={90} fontSize={6.5} fill="#93C5FD" fontFamily="Inter,sans-serif" textAnchor="middle">{u.label}</text>
          </g>
        ))}
        {/* Arrows down */}
        {[57, 147, 237, 327, 417].map(x => (
          <line key={x} x1={x} y1={98} x2={x} y2={110} stroke="#1E3A8A" strokeWidth={1} strokeDasharray="3 2" />
        ))}
      </g>
      {/* Layer 2: API Gateway */}
      <g className="hv-g2">
        <text x={16} y={120} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>API GATEWAY &amp; AUTH</text>
        <rect x={16} y={124} width={486} height={28} rx={7} fill="#141F35" stroke="#3D5068" strokeWidth={1} />
        {["Auth / JWT", "Rate Limiting", "Request Routing", "Load Balancing", "TLS Termination", "Logging"].map((s, i) => (
          <g key={s}>
            <rect x={24 + i * 80} y={129} width={72} height={18} rx={4} fill="#253347" />
            <text x={60 + i * 80} y={141} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif" textAnchor="middle">{s}</text>
          </g>
        ))}
        <line x1={258} y1={152} x2={258} y2={162} stroke="#1E3A8A" strokeWidth={1} strokeDasharray="3 2" />
      </g>
      {/* Layer 3: Services */}
      <g className="hv-g3">
        <text x={16} y={172} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>MICROSERVICES</text>
        {[
          { label: "User Service", x: 16 },
          { label: "Billing Service", x: 110 },
          { label: "Analytics Engine", x: 204 },
          { label: "Notification Svc", x: 298 },
          { label: "File Storage Svc", x: 392 },
        ].map(s => (
          <g key={s.label}>
            <rect x={s.x} y={176} width={86} height={38} rx={7} fill="#142240" stroke="#2563EB" strokeWidth={.5} strokeOpacity={.5} />
            <rect x={s.x} y={176} width={4} height={38} rx={2} fill="#2563EB" opacity={.6} />
            <text x={s.x + 12} y={192} fontSize={6.5} fontWeight={600} fill="#93C5FD" fontFamily="Inter,sans-serif">{s.label}</text>
            <text x={s.x + 12} y={204} fontSize={5.5} fill="#5A6E85" fontFamily="Inter,sans-serif">Node.js / .NET</text>
          </g>
        ))}
      </g>
      {/* Layer 4: Data */}
      <g className="hv-g4">
        <text x={16} y={228} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>DATA &amp; INFRASTRUCTURE</text>
        {[
          { label: "PostgreSQL", sub: "Primary DB", x: 16 },
          { label: "Redis Cache", sub: "Sessions / Cache", x: 126 },
          { label: "Elasticsearch", sub: "Search & Logs", x: 236 },
          { label: "Azure Blob", sub: "File Storage", x: 346 },
        ].map(d => (
          <g key={d.label}>
            <rect x={d.x} y={232} width={102} height={36} rx={6} fill="#253347" stroke="#3D5068" strokeWidth={.75} />
            <text x={d.x + 10} y={247} fontSize={7} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{d.label}</text>
            <text x={d.x + 10} y={260} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif">{d.sub}</text>
          </g>
        ))}
      </g>
      {/* SaaS metrics */}
      <g className="hv-g5">
        <rect x={16} y={280} width={486} height={48} rx={7} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={26} y={296} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>PLATFORM METRICS</text>
        {[
          { label: "Uptime SLA", val: "99.99%", x: 26 },
          { label: "Tenants Supported", val: "500+", x: 140 },
          { label: "API Latency", val: "< 80ms", x: 254 },
          { label: "Deployments/day", val: "CI/CD", x: 368 },
        ].map(m => (
          <g key={m.label}>
            <text x={m.x} y={312} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">{m.label}</text>
            <text x={m.x} y={322} fontSize={9} fontWeight={700} fill="#3B82F6" fontFamily="Inter,sans-serif">{m.val}</text>
          </g>
        ))}
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   CLOUD SOLUTIONS — Migration & architecture
═══════════════════════════════════════════════════ */
export const CloudArchVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Cloud Migration Architecture" subtitle="Azure · AWS · GCP">
      {/* On-premise side */}
      <g className="hv-g1">
        <text x={16} y={54} fontSize={7} fill="#EF4444" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>ON-PREMISE (LEGACY)</text>
        <rect x={16} y={58} width={148} height={220} rx={9} fill="#2A1010" stroke="#4B1111" strokeWidth={1} />
        {[
          { label: "Physical Servers", sub: "EOL hardware" },
          { label: "SQL Server 2012", sub: "Unsupported" },
          { label: "Manual Backups", sub: "Weekly tape" },
          { label: "VPN Access", sub: "Slow & unreliable" },
          { label: "On-call IT team", sub: "24/7 maintenance" },
        ].map((item, i) => (
          <g key={item.label}>
            <rect x={24} y={68 + i * 40} width={132} height={32} rx={5} fill="#1E0A0A" stroke="#4B1111" strokeWidth={.5} />
            <text x={34} y={82 + i * 40} fontSize={7} fill="#FCA5A5" fontFamily="Inter,sans-serif" fontWeight={600}>{item.label}</text>
            <text x={34} y={93 + i * 40} fontSize={6} fill="#7F1D1D" fontFamily="Inter,sans-serif">{item.sub}</text>
          </g>
        ))}
        <text x={90} y={292} fontSize={7} fill="#EF4444" fontFamily="Inter,sans-serif" textAnchor="middle">⚠ High Risk</text>
      </g>
      {/* Migration flow */}
      <g className="hv-g3">
        <text x={192} y={54} fontSize={7} fill="#F59E0B" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>MIGRATION PATHWAY</text>
        {["Assess", "Plan", "Migrate", "Optimise"].map((step, i) => (
          <g key={step}>
            <rect x={170} y={62 + i * 52} width={72} height={34} rx={6} fill="#1C1307" stroke="#92400E" strokeWidth={.75} />
            <text x={190} y={77 + i * 52} fontSize={6.5} fontWeight={700} fill="#FCD34D" fontFamily="Inter,sans-serif">{`0${i + 1}`}</text>
            <text x={190} y={88 + i * 52} fontSize={7} fill="#F59E0B" fontFamily="Inter,sans-serif">{step}</text>
            {i < 3 && <path d="M206 96 L206 114" stroke="#92400E" strokeWidth={1} strokeDasharray="3 2" markerEnd="url(#arr)" />}
          </g>
        ))}
      </g>
      {/* Cloud side */}
      <g className="hv-g2">
        <text x={262} y={54} fontSize={7} fill="#22C55E" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>CLOUD PLATFORM (MODERN)</text>
        <rect x={262} y={58} width={242} height={220} rx={9} fill="#073D1C" stroke="#14532D" strokeWidth={1} />
        {[
          { label: "Auto-scaling VMs", sub: "Azure / AWS compute", color: "#22C55E" },
          { label: "Managed SQL PaaS", sub: "Azure SQL · RDS", color: "#3B82F6" },
          { label: "Geo-redundant Backup", sub: "99.999% durability", color: "#22C55E" },
          { label: "Zero-trust Network", sub: "Private endpoints", color: "#3B82F6" },
          { label: "Managed Services", sub: "No infra overhead", color: "#22C55E" },
        ].map((item, i) => (
          <g key={item.label}>
            <rect x={270} y={68 + i * 40} width={226} height={32} rx={5} fill="#064E3B" stroke="#14532D" strokeWidth={.5} />
            <rect x={270} y={68 + i * 40} width={4} height={32} rx={2} fill={item.color} opacity={.7} />
            <text x={282} y={82 + i * 40} fontSize={7} fill="#6EE7B7" fontFamily="Inter,sans-serif" fontWeight={600}>{item.label}</text>
            <text x={282} y={93 + i * 40} fontSize={6} fill="#065F46" fontFamily="Inter,sans-serif">{item.sub}</text>
          </g>
        ))}
        <text x={383} y={292} fontSize={7} fill="#22C55E" fontFamily="Inter,sans-serif" textAnchor="middle">● 99.99% Uptime Guaranteed</text>
      </g>
      {/* Bottom comparison */}
      <g className="hv-g5">
        <rect x={16} y={292} width={486} height={36} rx={7} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        {[
          { label: "Cost Reduction", val: "40%", x: 28 },
          { label: "Deployment Time", val: "10× faster", x: 140 },
          { label: "Security Incidents", val: "↓ 70%", x: 270 },
          { label: "Recovery Time", val: "< 4 hours", x: 390 },
        ].map(m => (
          <g key={m.label}>
            <text x={m.x} y={306} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">{m.label}</text>
            <text x={m.x} y={320} fontSize={9} fontWeight={700} fill="#22C55E" fontFamily="Inter,sans-serif">{m.val}</text>
          </g>
        ))}
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   GENERATIVE AI — LLM pipeline & app architecture
═══════════════════════════════════════════════════ */
export const GenAIVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Generative AI Application Platform" subtitle="RAG · Fine-tuning · Agents">
      {/* Chat interface mockup */}
      <g className="hv-g1">
        <rect x={16} y={44} width={226} height={284} rx={9} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <rect x={16} y={44} width={226} height={28} rx={9} fill="#253347" />
        <rect x={16} y={60} width={226} height={12} fill="#253347" />
        <text x={26} y={62} fontSize={8} fontWeight={600} fill="#93C5FD" fontFamily="Inter,sans-serif">AI Assistant — Enterprise</text>
        <circle cx={228} cy={58} r={5} fill="#22C55E" className="hv-pulse" />
        {/* Chat bubbles */}
        {[
          { text: "Show me Q3 revenue breakdown", role: "user", y: 82 },
          { text: "Based on your ERP data, Q3 revenue\nwas ₹14.2Cr — up 22% YoY. Top\nperformer: Healthcare segment (38%)", role: "ai", y: 116 },
          { text: "Which clients are overdue on invoices?", role: "user", y: 178 },
          { text: "3 invoices totalling ₹4.1Cr are overdue:\nApollo Health (45 days), Varun Ind\n(32 days), NSE Foundation (28 days)", role: "ai", y: 212 },
          { text: "Draft a follow-up email to Apollo", role: "user", y: 274 },
        ].map((msg, i) => (
          <g key={i}>
            {msg.role === "user" ? (
              <g>
                <rect x={80} y={msg.y} width={152} height={msg.text.length > 40 ? 28 : 20} rx={8} fill="#1D4ED8" />
                <text x={86} y={msg.y + 13} fontSize={6.5} fill="#93C5FD" fontFamily="Inter,sans-serif">{msg.text.substring(0, 38)}{msg.text.length > 38 ? "…" : ""}</text>
              </g>
            ) : (
              <g>
                <rect x={24} y={msg.y} width={168} height={msg.text.split("\n").length * 14 + 8} rx={8} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
                {msg.text.split("\n").map((line, li) => (
                  <text key={li} x={30} y={msg.y + 13 + li * 13} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{line}</text>
                ))}
              </g>
            )}
          </g>
        ))}
        {/* Input bar */}
        <rect x={20} y={312} width={218} height={12} rx={6} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
        <text x={26} y={321} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif">Ask anything about your business…</text>
      </g>
      {/* RAG Pipeline */}
      <g className="hv-g2">
        <text x={260} y={54} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>RAG PIPELINE</text>
        {[
          { label: "Document Ingestion", sub: "PDF, DOCX, DB, APIs", y: 58, color: "#1D4ED8" },
          { label: "Chunking & Embedding", sub: "OpenAI text-embedding-3", y: 106, color: "#2563EB" },
          { label: "Vector Store", sub: "Pinecone / Weaviate", y: 154, color: "#3B82F6" },
          { label: "LLM Reasoning", sub: "GPT-4o / Claude 3.5", y: 202, color: "#1D4ED8" },
          { label: "Response Generation", sub: "Grounded · Cited · Safe", y: 250, color: "#22C55E" },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={258} y={step.y} width={244} height={38} rx={7} fill="#142240" stroke={step.color} strokeWidth={.5} strokeOpacity={.5} />
            <rect x={258} y={step.y} width={4} height={38} rx={2} fill={step.color} opacity={.7} />
            <text x={270} y={step.y + 15} fontSize={7.5} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{step.label}</text>
            <text x={270} y={step.y + 28} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif">{step.sub}</text>
            {i < 4 && (
              <path d={`M380 ${step.y + 38} L380 ${step.y + 48}`} stroke="#1E3A8A" strokeWidth={1} strokeDasharray="3 2" />
            )}
          </g>
        ))}
        <rect x={258} y={298} width={244} height={32} rx={7} fill="#073D1C" stroke="#14532D" strokeWidth={.5} />
        <text x={268} y={312} fontSize={7} fontWeight={600} fill="#86EFAC" fontFamily="Inter,sans-serif">Accuracy · Hallucination Guard · Audit Log</text>
        <text x={268} y={323} fontSize={6} fill="#065F46" fontFamily="Inter,sans-serif">Enterprise-grade safety controls built-in</text>
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   COMPUTER VISION — Detection & analysis pipeline
═══════════════════════════════════════════════════ */
export const ComputerVisionVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="CCTV Intelligence Platform" subtitle="Real-time · 200+ cameras">
      {/* Camera feed mockup */}
      <g className="hv-g1">
        <rect x={16} y={44} width={200} height={150} rx={7} fill="#141F35" stroke="#3D5068" strokeWidth={1} />
        <text x={24} y={58} fontSize={8.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">LIVE FEED — Camera 14, Perimeter Gate</text>
        {/* Simulated night surveillance scene */}
        <rect x={20} y={62} width={192} height={128} rx={4} fill="#0B1220" />
        {/* Fence/perimeter line */}
        <line x1={20} y1={170} x2={212} y2={170} stroke="#253347" strokeWidth={1.5} />
        {[0,20,40,60,80,100,120,140,160,180].map(x => (
          <line key={x} x1={22+x} y1={150} x2={22+x} y2={170} stroke="#253347" strokeWidth={1} />
        ))}
        {/* Building silhouette */}
        <rect x={140} y={90} width={60} height={60} rx={2} fill="#162033" />
        <rect x={150} y={100} width={12} height={14} fill="#1E3A8A" opacity={.5} />
        <rect x={170} y={100} width={12} height={14} fill="#1E3A8A" opacity={.5} />
        {/* Person silhouette - intrusion detection target */}
        <circle cx={70} cy={130} r={5} fill="#374151" />
        <rect x={66} y={134} width={8} height={18} rx={2} fill="#374151" />
        {/* Detection box around person */}
        <rect x={58} y={122} width={26} height={36} rx={1} fill="none" stroke="#EF4444" strokeWidth={1.5} className="hv-pulse" />
        <text x={58} y={120} fontSize={7.8} fill="#EF4444" fontFamily="Inter,sans-serif" fontWeight={600}>INTRUSION 96%</text>
        {/* Scanning overlay */}
        <line x1={20} y1={95} x2={212} y2={95} stroke="#3B82F6" strokeWidth={1} opacity={.5} className="hv-dash" />
        <text x={116} y={76} fontSize={9.1} fill="#3B82F6" fontFamily="Inter,sans-serif" textAnchor="middle">Monitoring…</text>
        {/* Stats overlay */}
        <rect x={20} y={62} width={88} height={30} rx={0} fill="rgba(0,0,0,.7)" />
        <text x={24} y={74} fontSize={7.8} fill="#94A3B8" fontFamily="Inter,sans-serif">22:14 · Night vision</text>
        <text x={24} y={85} fontSize={7.8} fill="#94A3B8" fontFamily="Inter,sans-serif">Cam 14 of 200+</text>
      </g>
      {/* Detection results panel */}
      <g className="hv-g2">
        <rect x={226} y={44} width={278} height={150} rx={7} fill="#141F35" stroke="#3D5068" strokeWidth={1} />
        <text x={236} y={60} fontSize={9.8} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Security Alerts — Live</text>
        <MetricCard x={236} y={64} w={80} h={48} label="Cameras Active" value="204" sub="All online" subColor="#3B82F6" />
        <MetricCard x={324} y={64} w={80} h={48} label="Alerts Today" value="7" sub="2 critical" subColor="#EF4444" />
        <MetricCard x={412} y={64} w={84} h={48} label="Detection Acc." value="94.2%" sub="↑ vs manual watch" subColor="#22C55E" />
        {/* Detection categories */}
        {[
          { label: "Perimeter intrusion", count: 3, color: "#EF4444" },
          { label: "PPE non-compliance", count: 9, color: "#F59E0B" },
          { label: "Fire / smoke risk", count: 1, color: "#EF4444" },
          { label: "Loitering detected", count: 4, color: "#F59E0B" },
        ].map((cat, i) => (
          <g key={cat.label}>
            <text x={236} y={126 + i * 14} fontSize={9.1} fill="#94A3B8" fontFamily="Inter,sans-serif">{cat.label}</text>
            <rect x={340} y={118 + i * 14} width={100} height={6} rx={3} fill="#253347" />
            <rect x={340} y={118 + i * 14} width={cat.count * 9} height={6} rx={3} fill={cat.color} opacity={.7} />
            <text x={448} y={126 + i * 14} fontSize={8.5} fill={cat.color} fontFamily="Inter,sans-serif">{cat.count}</text>
          </g>
        ))}
        <text x={236} y={186} fontSize={8.5} fill="#3B82F6" fontFamily="Inter,sans-serif">⚡ Avg alert response: 4.2s · Auto-routed to security team</text>
      </g>
      {/* Use cases grid */}
      <g className="hv-g3">
        <text x={16} y={212} fontSize={9.1} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>MONITORING CATEGORIES</text>
        {[
          { label: "Perimeter Security", sub: "Intrusion & breach detection", x: 16 },
          { label: "Safety Compliance", sub: "PPE & helmet detection", x: 144 },
          { label: "Fire & Smoke", sub: "Early visual detection", x: 272 },
          { label: "Access Control", sub: "Face recognition · ANPR", x: 400 },
        ].map(uc => (
          <g key={uc.label}>
            <rect x={uc.x} y={216} width={120} height={44} rx={7} fill="#253347" stroke="#3D5068" strokeWidth={.75} />
            <text x={uc.x + 10} y={232} fontSize={9.1} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{uc.label}</text>
            <text x={uc.x + 10} y={246} fontSize={7.8} fill="#5A6E85" fontFamily="Inter,sans-serif">{uc.sub}</text>
          </g>
        ))}
      </g>
      {/* Pipeline */}
      <g className="hv-g4">
        <text x={16} y={274} fontSize={9.1} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>DETECTION PIPELINE</text>
        {["Camera Feed", "Frame Capture", "AI Inference", "Risk Scoring", "Alert / Action"].map((step, i) => (
          <g key={step}>
            <rect x={16 + i * 102} y={278} width={94} height={28} rx={6} fill="#142240" stroke="#2563EB" strokeWidth={.4} strokeOpacity={.5} />
            <text x={63 + i * 102} y={292} fontSize={8.5} fill="#93C5FD" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight={500}>{step}</text>
            <text x={63 + i * 102} y={301} fontSize={7.2} fill="#5A6E85" fontFamily="Inter,sans-serif" textAnchor="middle">{["RTSP / ONVIF", "Resize·Norm", "YOLOv8 · Edge GPU", "Confidence·Rules", "SMS·Email·Webhook"][i]}</text>
            {i < 4 && <path d={`M${110 + i * 102} 292 L${118 + i * 102} 292`} stroke="#3D5068" strokeWidth={1} />}
          </g>
        ))}
      </g>
      {/* Bottom latency bar */}
      <g className="hv-g5">
        <rect x={16} y={316} width={486} height={16} rx={5} fill="#141F35" stroke="#2D3D55" strokeWidth={.5} />
        <text x={24} y={327} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">Inference latency:</text>
        <text x={112} y={327} fontSize={6.5} fill="#22C55E" fontFamily="Inter,sans-serif" fontWeight={600}>12ms avg · Edge GPU</text>
        <text x={250} y={327} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">Model: YOLOv8-L · mAP: 94.3%</text>
        <text x={420} y={327} fontSize={6.5} fill="#3B82F6" fontFamily="Inter,sans-serif">ONNX Optimised</text>
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   AI CHATBOTS — Conversation flow & integration
═══════════════════════════════════════════════════ */
export const ChatbotVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Enterprise AI Chatbot Platform" subtitle="Omnichannel · NLP · Integrated">
      {/* Left: Chat window */}
      <g className="hv-g1">
        <rect x={16} y={44} width={210} height={284} rx={9} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <rect x={16} y={44} width={210} height={32} rx={9} fill="#1D4ED8" />
        <rect x={16} y={64} width={210} height={12} fill="#1D4ED8" />
        <circle cx={34} cy={60} r={9} fill="#2563EB" />
        <text x={34} y={64} fontSize={9} textAnchor="middle" fontFamily="Inter,sans-serif">🤖</text>
        <text x={48} y={58} fontSize={8} fontWeight={600} fill="white" fontFamily="Inter,sans-serif">Jubiliants AI Support</text>
        <text x={48} y={69} fontSize={6} fill="#93C5FD" fontFamily="Inter,sans-serif">● Online · Typically replies instantly</text>

        {/* Conversation */}
        {[
          { text: "Hi! I need to check my order status", role: "user", y: 84 },
          { text: "Hello! I can help with that. Could you share your order ID?", role: "bot", y: 110 },
          { text: "Order #JB-20241", role: "user", y: 148 },
          { text: "Order #JB-20241 is confirmed ✓\nEstimated delivery: Dec 18\nTracking: FX994712IN", role: "bot", y: 168 },
          { text: "Can I reschedule delivery?", role: "user", y: 222 },
          { text: "Of course! Select a date:", role: "bot", y: 244 },
        ].map((msg, i) => (
          <g key={i}>
            {msg.role === "user" ? (
              <g>
                <rect x={100} y={msg.y} width={118} height={msg.text.length > 30 ? 26 : 18} rx={8} fill="#1D4ED8" />
                <text x={106} y={msg.y + 12} fontSize={6.5} fill="#93C5FD" fontFamily="Inter,sans-serif">{msg.text.substring(0, 28)}{msg.text.length > 28 ? "…" : ""}</text>
              </g>
            ) : (
              <g>
                <rect x={22} y={msg.y} width={132} height={msg.text.split("\n").length * 14 + 6} rx={8} fill="#253347" />
                {msg.text.split("\n").map((line, li) => (
                  <text key={li} x={28} y={msg.y + 12 + li * 13} fontSize={6.5} fill="#E2E8F0" fontFamily="Inter,sans-serif">{line}</text>
                ))}
              </g>
            )}
          </g>
        ))}

        {/* Quick reply buttons */}
        <rect x={22} y={270} width={60} height={16} rx={8} fill="#253347" stroke="#2563EB" strokeWidth={.5} />
        <text x={52} y={281} fontSize={6} fill="#93C5FD" textAnchor="middle" fontFamily="Inter,sans-serif">Dec 20</text>
        <rect x={88} y={270} width={60} height={16} rx={8} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
        <text x={118} y={281} fontSize={6} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">Dec 21</text>
        <rect x={154} y={270} width={60} height={16} rx={8} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
        <text x={184} y={281} fontSize={6} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">Dec 22</text>

        {/* Input */}
        <rect x={20} y={295} width={172} height={20} rx={10} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
        <text x={28} y={308} fontSize={6.5} fill="#5A6E85" fontFamily="Inter,sans-serif">Type a message…</text>
        <rect x={196} y={295} width={20} height={20} rx={10} fill="#2563EB" />
        <text x={206} y={308} fontSize={8} textAnchor="middle" fontFamily="Inter,sans-serif" fill="white">↑</text>
      </g>

      {/* Right: Platform info */}
      <g className="hv-g2">
        <text x={242} y={54} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>OMNICHANNEL INTEGRATION</text>
        {[
          { label: "Website Widget", icon: "🌐", status: "Active", x: 242, y: 58 },
          { label: "WhatsApp Business", icon: "💬", status: "Active", x: 370, y: 58 },
          { label: "MS Teams Bot", icon: "🔷", status: "Active", x: 242, y: 110 },
          { label: "Email / Helpdesk", icon: "📧", status: "Active", x: 370, y: 110 },
          { label: "Slack Integration", icon: "⚡", status: "Active", x: 242, y: 162 },
          { label: "Mobile SDK", icon: "📱", status: "Active", x: 370, y: 162 },
        ].map(ch => (
          <g key={ch.label}>
            <rect x={ch.x} y={ch.y} width={120} height={44} rx={7} fill="#253347" stroke="#3D5068" strokeWidth={.75} />
            <text x={ch.x + 10} y={ch.y + 18} fontSize={11} fontFamily="Inter,sans-serif">{ch.icon}</text>
            <text x={ch.x + 26} y={ch.y + 18} fontSize={7} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{ch.label}</text>
            <text x={ch.x + 26} y={ch.y + 30} fontSize={6} fill="#22C55E" fontFamily="Inter,sans-serif">● {ch.status}</text>
          </g>
        ))}
      </g>

      {/* NLP metrics */}
      <g className="hv-g3">
        <text x={242} y={222} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>PERFORMANCE METRICS</text>
        {[
          { label: "Intent Accuracy", val: "96.4%", color: "#22C55E" },
          { label: "Containment Rate", val: "73%", color: "#3B82F6" },
          { label: "Avg CSAT Score", val: "4.7/5", color: "#22C55E" },
          { label: "Languages Supported", val: "12+", color: "#3B82F6" },
        ].map((m, i) => (
          <g key={m.label}>
            <rect x={242 + (i % 2) * 132} y={226 + Math.floor(i / 2) * 52} width={124} height={42} rx={7} fill="#141F35" stroke="#2D3D55" strokeWidth={.5} />
            <text x={252 + (i % 2) * 132} y={242 + Math.floor(i / 2) * 52} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">{m.label}</text>
            <text x={252 + (i % 2) * 132} y={258 + Math.floor(i / 2) * 52} fontSize={13} fontWeight={700} fill={m.color} fontFamily="Inter,sans-serif">{m.val}</text>
          </g>
        ))}
      </g>

      {/* Bottom integrations */}
      <g className="hv-g5">
        
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   MACHINE LEARNING — Model training & deployment
═══════════════════════════════════════════════════ */
export const MLVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Machine Learning Platform" subtitle="MLOps · AutoML · Production">
      {/* Model performance chart */}
      <g className="hv-g1">
        <rect x={16} y={44} width={236} height={140} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={26} y={60} fontSize={7.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Model Accuracy — Training Curve</text>
        {/* Training vs validation */}
        <line x1={26} y1={168} x2={244} y2={168} stroke="#2D3D55" strokeWidth={1} />
        <line x1={26} y1={72} x2={26} y2={168} stroke="#2D3D55" strokeWidth={1} />
        {/* Training curve */}
        <polyline points="26,168 52,155 78,140 104,124 130,112 156,104 182,99 208,96 234,94"
          stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" />
        {/* Validation curve */}
        <polyline points="26,168 52,158 78,148 104,134 130,124 156,118 182,115 208,113 234,112"
          stroke="#22C55E" strokeWidth={2} fill="none" strokeLinecap="round" strokeDasharray="4 2" />
        <text x={30} y={165} fontSize={6} fill="#3B82F6" fontFamily="Inter,sans-serif">Training: 97.2%</text>
        <text x={30} y={174} fontSize={6} fill="#22C55E" fontFamily="Inter,sans-serif">Validation: 94.8%</text>
        <text x={200} y={88} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">Epoch 50</text>
      </g>

      {/* Feature importance */}
      <g className="hv-g2">
        <rect x={262} y={44} width={242} height={140} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={272} y={60} fontSize={7.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Feature Importance</text>
        {[
          { label: "Purchase History", pct: 0.84 },
          { label: "Customer Segment", pct: 0.71 },
          { label: "Product Category", pct: 0.63 },
          { label: "Seasonal Pattern", pct: 0.58 },
          { label: "Price Sensitivity", pct: 0.44 },
          { label: "Geographic Region", pct: 0.31 },
        ].map((f, i) => (
          <g key={f.label}>
            <text x={272} y={76 + i * 17} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif">{f.label}</text>
            <rect x={370} y={68 + i * 17} width={110} height={7} rx={3.5} fill="#253347" />
            <rect x={370} y={68 + i * 17} width={110 * f.pct} height={7} rx={3.5} fill="#2563EB" opacity={0.5 + f.pct * 0.5} />
            <text x={486} y={76 + i * 17} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">{(f.pct * 100).toFixed(0)}%</text>
          </g>
        ))}
      </g>

      {/* MLOps pipeline */}
      <g className="hv-g3">
        <text x={16} y={200} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>MLOPS PIPELINE</text>
        {["Data Prep", "Feature Eng.", "Model Train", "Evaluation", "Registry", "Serve / API", "Monitor"].map((step, i) => (
          <g key={step}>
            <rect x={16 + i * 72} y={204} width={65} height={36} rx={6} fill="#142240" stroke="#2563EB" strokeWidth={.4} strokeOpacity={.5} />
            <text x={48 + i * 72} y={219} fontSize={6} fill="#93C5FD" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight={500}>{step}</text>
            {i < 6 && <path d={`M${81 + i * 72} 222 L${88 + i * 72} 222`} stroke="#3D5068" strokeWidth={1} />}
          </g>
        ))}
      </g>

      {/* Use cases + model registry */}
      <g className="hv-g4">
        <text x={16} y={258} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>DEPLOYED MODELS</text>
        {[
          { name: "Demand Forecast v3.2", acc: "96.1%", type: "Time-series", status: "#22C55E", x: 16 },
          { name: "Churn Predictor v2.0", acc: "91.4%", type: "Classification", status: "#22C55E", x: 180 },
          { name: "Fraud Detector v1.8", acc: "99.1%", type: "Anomaly Detection", status: "#22C55E", x: 344 },
        ].map(m => (
          <g key={m.name}>
            <rect x={m.x} y={262} width={156} height={50} rx={7} fill="#253347" stroke="#3D5068" strokeWidth={.75} />
            <text x={m.x + 10} y={278} fontSize={7} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{m.name}</text>
            <text x={m.x + 10} y={290} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">{m.type}</text>
            <text x={m.x + 10} y={303} fontSize={8} fontWeight={700} fill="#22C55E" fontFamily="Inter,sans-serif">{m.acc}</text>
            <circle cx={m.x + 142} cy={275} r={4} fill={m.status} className="hv-pulse" />
          </g>
        ))}
      </g>

      {/* Bottom tech */}
      <g className="hv-g5">
        <rect x={16} y={322} width={486} height={10} rx={5} fill="#141F35" stroke="#2D3D55" strokeWidth={.5} />
        <text x={24} y={330} fontSize={6.5} fill="#5A6E85" fontFamily="Inter,sans-serif">Stack: Python · scikit-learn · XGBoost · PyTorch · MLflow · Kubeflow · Azure ML · FastAPI</text>
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   ERP SOLUTIONS — Unified operations dashboard
═══════════════════════════════════════════════════ */
export const ERPDashVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={340} title="Enterprise Resource Planning — Unified Dashboard" subtitle="Manufacturing Module">
      {/* Module nav */}
      <g className="hv-g1">
        <rect x={0} y={36} width={520} height={24} fill="#141F35" />
        {["Finance", "HR & Payroll", "Procurement", "Inventory", "Production", "Sales", "Reports"].map((tab, i) => (
          <g key={tab}>
            {i === 3 && <rect x={14 + i * 72} y={36} width={66} height={24} fill="#1D4ED8" opacity={.3} />}
            <text x={47 + i * 72} y={52} fontSize={7} fill={i === 3 ? "#93C5FD" : "#475569"} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight={i === 3 ? 600 : 400}>{tab}</text>
          </g>
        ))}
      </g>
      {/* KPIs */}
      <g className="hv-g2">
        <MetricCard x={16} y={66} w={112} h={56} label="Total Stock Value" value="₹2.4Cr" sub="Across 3 warehouses" subColor="#3B82F6" />
        <MetricCard x={136} y={66} w={112} h={56} label="Items Below Reorder" value="14" sub="⚠ Action needed" subColor="#F59E0B" />
        <MetricCard x={256} y={66} w={112} h={56} label="Pending POs" value="₹38L" sub="7 orders in transit" subColor="#94A3B8" />
        <MetricCard x={376} y={66} w={128} h={56} label="Stock Accuracy" value="99.1%" sub="Post last audit" subColor="#22C55E" />
      </g>
      {/* Inventory table */}
      <g className="hv-g3">
        <text x={16} y={138} fontSize={7.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Stock Ledger — Top Items</text>
        <rect x={16} y={142} width={486} height={16} rx={0} fill="#141F35" />
        {["Item Code", "Description", "Warehouse", "Qty On Hand", "Reorder Qty", "Value", "Status"].map((h, i) => (
          <text key={h} x={[18, 80, 200, 290, 355, 415, 468][i]} y={154} fontSize={6.5} fontWeight={600} fill="#5A6E85" fontFamily="Inter,sans-serif">{h}</text>
        ))}
        {[
          { code: "RM-1042", desc: "Stainless Steel Sheet", wh: "WH-A", qty: "2,840", req: "500", val: "₹14.2L", status: "OK", sc: "#22C55E", bg: "rgba(34,197,94,.08)" },
          { code: "RM-2018", desc: "Aluminium Alloy 6061", wh: "WH-A", qty: "124", req: "200", val: "₹3.1L", status: "Low", sc: "#F59E0B", bg: "rgba(245,158,11,.08)" },
          { code: "FG-3301", desc: "Precision Gear Set", wh: "WH-B", qty: "1,650", req: "300", val: "₹8.8L", status: "OK", sc: "#22C55E", bg: "rgba(34,197,94,.08)" },
          { code: "RM-4055", desc: "Copper Wire Spool", wh: "WH-C", qty: "48", req: "100", val: "₹0.9L", status: "Critical", sc: "#EF4444", bg: "rgba(239,68,68,.08)" },
          { code: "FG-5122", desc: "Control Panel Assembly", wh: "WH-B", qty: "210", req: "50", val: "₹21.0L", status: "OK", sc: "#22C55E", bg: "rgba(34,197,94,.08)" },
        ].map((row, i) => (
          <g key={row.code}>
            <rect x={16} y={158 + i * 22} width={486} height={20} rx={0} fill={i % 2 === 0 ? "rgba(255,255,255,.01)" : "transparent"} />
            <text x={18} y={172 + i * 22} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">{row.code}</text>
            <text x={80} y={172 + i * 22} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{row.desc}</text>
            <text x={200} y={172 + i * 22} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif">{row.wh}</text>
            <text x={290} y={172 + i * 22} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{row.qty}</text>
            <text x={355} y={172 + i * 22} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif">{row.req}</text>
            <text x={415} y={172 + i * 22} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{row.val}</text>
            <rect x={466} y={162 + i * 22} width={32} height={12} rx={6} fill={row.bg} />
            <text x={482} y={172 + i * 22} fontSize={6} fill={row.sc} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight={600}>{row.status}</text>
          </g>
        ))}
      </g>
      {/* Module integration map */}
      <g className="hv-g5">
        <line x1={16} y1={270} x2={502} y2={270} stroke="#2D3D55" strokeWidth={1} />
        <text x={16} y={283} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>INTEGRATED MODULES</text>
        {["Finance", "HR & Payroll", "Procurement", "Manufacturing", "Quality Control", "CRM & Sales"].map((mod, i) => (
          <g key={mod}>
            <rect x={16 + i * 84} y={286} width={78} height={26} rx={5} fill="#253347" stroke="#3D5068" strokeWidth={.5} />
            <text x={55 + i * 84} y={303} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif" textAnchor="middle">{mod}</text>
          </g>
        ))}
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   MOBILE APPLICATIONS — App screens gallery
═══════════════════════════════════════════════════ */
export const MobileScreensVisual = () => (
  <div style={{ position: "relative", width: "100%", display: "flex", gap: "1rem", justifyContent: "center" }}>
    <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="hero-svg" style={{ width: "100%", height: "auto" }}>
      {/* Phone 1 — Healthcare app */}
      <g className="hv-g1">
        <rect x={16} y={10} width={118} height={220} rx={14} fill="#253347" stroke="#3D5068" strokeWidth={1} />
        <rect x={40} y={18} width={70} height={6} rx={3} fill="#334155" />
        <rect x={22} y={30} width={106} height={194} rx={8} fill="#141F35" />
        <rect x={22} y={30} width={106} height={28} rx={8} fill="#1D4ED8" />
        <text x={75} y={48} fontSize={8} fontWeight={600} fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">MedConnect</text>
        <circle cx={75} cy={82} r={20} fill="#1D4ED8" opacity={.3} />
        <text x={75} y={87} fontSize={20} textAnchor="middle" fontFamily="Inter,sans-serif">👨‍⚕️</text>
        <text x={75} y={108} fontSize={7.5} fontWeight={600} fill="#E2E8F0" textAnchor="middle" fontFamily="Inter,sans-serif">Dr. Priya Sharma</text>
        <text x={75} y={118} fontSize={6} fill="#7A8EA8" textAnchor="middle" fontFamily="Inter,sans-serif">Cardiology · Apollo</text>
        <rect x={30} y={124} width={96} height={18} rx={9} fill="#2563EB" />
        <text x={78} y={137} fontSize={7} fontWeight={600} fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">Book Appointment</text>
        {[{ t: "Today 2:00 PM", s: "Confirmed ✓", c: "#22C55E" }, { t: "Tomorrow 10:30 AM", s: "Pending…", c: "#F59E0B" }].map((apt, i) => (
          <g key={i}>
            <rect x={26} y={148 + i * 28} width={98} height={22} rx={5} fill="#253347" />
            <text x={32} y={159 + i * 28} fontSize={6} fill="#CBD5E1" fontFamily="Inter,sans-serif">{apt.t}</text>
            <text x={32} y={168 + i * 28} fontSize={5.5} fill={apt.c} fontFamily="Inter,sans-serif">{apt.s}</text>
          </g>
        ))}
        <rect x={44} y={216} width={62} height={4} rx={2} fill="#334155" />
        <text x={75} y={238} fontSize={7} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">Healthcare App</text>
      </g>
      {/* Phone 2 — Field service app (larger, centre) */}
      <g className="hv-g2">
        <rect x={156} y={0} width={138} height={250} rx={16} fill="#253347" stroke="#3D5068" strokeWidth={1} />
        <rect x={184} y={10} width={82} height={7} rx={3.5} fill="#334155" />
        <rect x={162} y={24} width={126} height={220} rx={10} fill="#141F35" />
        <rect x={162} y={24} width={126} height={30} rx={10} fill="#2D3D55" />
        <text x={225} y={43} fontSize={9} fontWeight={600} fill="#F8FAFC" textAnchor="middle" fontFamily="Inter,sans-serif">Field Manager</text>
        {/* Map placeholder */}
        <rect x={166} y={58} width={118} height={70} rx={5} fill="#142240" />
        {/* Simplified map grid */}
        {[0, 1, 2, 3].map(i => <line key={i} x1={166} y1={68 + i * 17} x2={284} y2={68 + i * 17} stroke="#1E3A8A" strokeWidth={.5} />)}
        {[0, 1, 2, 3, 4].map(i => <line key={i} x1={186 + i * 24} y1={58} x2={186 + i * 24} y2={128} stroke="#1E3A8A" strokeWidth={.5} />)}
        <circle cx={210} cy={86} r={7} fill="#2563EB" />
        <text x={210} y={90} fontSize={8} textAnchor="middle" fontFamily="Inter,sans-serif">📍</text>
        <circle cx={248} cy={100} r={5} fill="#22C55E" opacity={.8} />
        <circle cx={270} cy={72} r={5} fill="#F59E0B" opacity={.8} />
        {/* Task cards */}
        {[
          { t: "Job #4421 — HVAC Service", s: "In Progress", c: "#3B82F6", bg: "rgba(59,130,246,.1)" },
          { t: "Job #4438 — Inspection", s: "Scheduled", c: "#F59E0B", bg: "rgba(245,158,11,.1)" },
          { t: "Job #4419 — Completed ✓", s: "Done", c: "#22C55E", bg: "rgba(34,197,94,.1)" },
        ].map((job, i) => (
          <g key={i}>
            <rect x={166} y={132 + i * 30} width={118} height={26} rx={5} fill={job.bg} stroke="#2D3D55" strokeWidth={.5} />
            <text x={172} y={143 + i * 30} fontSize={6.5} fill="#E2E8F0" fontFamily="Inter,sans-serif">{job.t}</text>
            <text x={172} y={153 + i * 30} fontSize={6} fill={job.c} fontFamily="Inter,sans-serif">{job.s}</text>
          </g>
        ))}
        {/* Bottom nav */}
        <rect x={162} y={222} width={126} height={22} rx={5} fill="#253347" />
        {["🗺", "📋", "⚡", "👤"].map((icon, i) => (
          <text key={i} x={180 + i * 30} y={237} fontSize={10} textAnchor="middle" fontFamily="Inter,sans-serif" opacity={i === 0 ? 1 : .5}>{icon}</text>
        ))}
        <rect x={168} y={244} width={108} height={4} rx={2} fill="#334155" />
        <text x={225} y={262} fontSize={7} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">Field Service App</text>
      </g>
      {/* Phone 3 — Education app */}
      <g className="hv-g3">
        <rect x={316} y={10} width={118} height={220} rx={14} fill="#253347" stroke="#3D5068" strokeWidth={1} />
        <rect x={340} y={18} width={70} height={6} rx={3} fill="#334155" />
        <rect x={322} y={30} width={106} height={194} rx={8} fill="#141F35" />
        <rect x={322} y={30} width={106} height={28} rx={8} fill="#0D3B86" />
        <text x={375} y={48} fontSize={8} fontWeight={600} fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">EduPortal</text>
        {/* Stats row */}
        <rect x={326} y={62} width={46} height={36} rx={5} fill="#253347" />
        <text x={349} y={76} fontSize={10} fontWeight={700} fill="#3B82F6" textAnchor="middle" fontFamily="Inter,sans-serif">94%</text>
        <text x={349} y={87} fontSize={5.5} fill="#7A8EA8" textAnchor="middle" fontFamily="Inter,sans-serif">Attendance</text>
        <rect x={378} y={62} width={46} height={36} rx={5} fill="#253347" />
        <text x={401} y={76} fontSize={10} fontWeight={700} fill="#22C55E" textAnchor="middle" fontFamily="Inter,sans-serif">A+</text>
        <text x={401} y={87} fontSize={5.5} fill="#7A8EA8" textAnchor="middle" fontFamily="Inter,sans-serif">Avg Grade</text>
        {/* Timetable */}
        <text x={328} y={110} fontSize={6.5} fontWeight={600} fill="#CBD5E1" fontFamily="Inter,sans-serif">Today's Schedule</text>
        {[
          { t: "09:00 — Mathematics", r: "Rm 204" },
          { t: "11:00 — Physics", r: "Lab 1" },
          { t: "14:00 — English Lit", r: "Rm 108" },
          { t: "16:00 — Sports", r: "Ground" },
        ].map((cls, i) => (
          <g key={i}>
            <rect x={326} y={114 + i * 24} width={96} height={19} rx={4} fill="#253347" />
            <rect x={326} y={114 + i * 24} width={3} height={19} rx={1} fill="#2563EB" opacity={.7} />
            <text x={334} y={124 + i * 24} fontSize={6.5} fill="#CBD5E1" fontFamily="Inter,sans-serif">{cls.t}</text>
            <text x={334} y={130 + i * 24} fontSize={5.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">{cls.r}</text>
          </g>
        ))}
        <rect x={344} y={216} width={62} height={4} rx={2} fill="#334155" />
        <text x={375} y={238} fontSize={7} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">Education App</text>
      </g>
      {/* Phone 4 — E-commerce */}
      <g className="hv-g4">
        <rect x={452} y={30} width={52} height={100} rx={8} fill="#253347" stroke="#3D5068" strokeWidth={1} />
        <rect x={455} y={38} width={46} height={86} rx={5} fill="#141F35" />
        <rect x={455} y={38} width={46} height={16} rx={5} fill="#1D4ED8" />
        <text x={478} y={50} fontSize={6} fontWeight={600} fill="white" textAnchor="middle" fontFamily="Inter,sans-serif">ShopNow</text>
        <rect x={459} y={58} width={38} height={28} rx={3} fill="#2D3D55" />
        <text x={478} y={77} fontSize={12} textAnchor="middle" fontFamily="Inter,sans-serif">🛍</text>
        <rect x={459} y={90} width={38} height={14} rx={7} fill="#2563EB" />
        <text x={478} y={100} fontSize={5.5} fill="white" textAnchor="middle" fontWeight={600} fontFamily="Inter,sans-serif">Buy Now</text>
        <text x={478} y={145} fontSize={6} fill="#94A3B8" textAnchor="middle" fontFamily="Inter,sans-serif">E-Commerce</text>
      </g>
      {/* Tech labels */}
      <g className="hv-g5">
        <rect x={16} y={270} width={486} height={60} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        <text x={26} y={286} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.06}>MOBILE TECHNOLOGY STACK</text>
        {[
          { label: "Flutter / Dart", sub: "Cross-platform", x: 26 },
          { label: "React Native", sub: "JS-based hybrid", x: 140 },
          { label: "Swift / SwiftUI", sub: "Native iOS", x: 254 },
          { label: "Kotlin / Jetpack", sub: "Native Android", x: 368 },
        ].map(t => (
          <g key={t.label}>
            <text x={t.x} y={304} fontSize={7.5} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{t.label}</text>
            <text x={t.x} y={316} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif">{t.sub}</text>
          </g>
        ))}
      </g>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════
   CUSTOM SOFTWARE — Architecture overview
═══════════════════════════════════════════════════ */
export const CustomSWArchVisual = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <PanelChrome width={520} height={300} title="Enterprise Software Architecture" subtitle="3-tier · Microservices · Cloud-native">
      {/* Presentation tier */}
      <g className="hv-g1">
        <text x={16} y={54} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>PRESENTATION TIER</text>
        {["Web Browser", "Mobile App", "Admin Portal", "API Consumers"].map((c, i) => (
          <g key={c}>
            <rect x={16 + i * 124} y={58} width={116} height={30} rx={6} fill="#1D4ED8" stroke="#2563EB" strokeWidth={.5} strokeOpacity={.5} />
            <text x={74 + i * 124} y={77} fontSize={7.5} fill="#93C5FD" textAnchor="middle" fontFamily="Inter,sans-serif">{c}</text>
          </g>
        ))}
        {/* Arrows */}
        {[74, 198, 322, 446].map(x => (
          <line key={x} x1={x} y1={88} x2={x} y2={100} stroke="#3D5068" strokeWidth={1} strokeDasharray="3 2" />
        ))}
      </g>
      {/* Application tier */}
      <g className="hv-g2">
        <text x={16} y={110} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>APPLICATION TIER</text>
        <rect x={16} y={114} width={486} height={70} rx={8} fill="#141F35" stroke="#2D3D55" strokeWidth={1} />
        {["Auth Service", "Business Logic", "API Gateway", "Notification Svc", "Report Engine", "Integration Hub"].map((svc, i) => (
          <g key={svc}>
            <rect x={24 + i * 80} y={122} width={72} height={54} rx={6} fill="#142240" stroke="#2563EB" strokeWidth={.4} strokeOpacity={.4} />
            <rect x={24 + i * 80} y={122} width={72} height={4} rx={2} fill="#2563EB" opacity={.6} />
            <text x={60 + i * 80} y={148} fontSize={6.5} fill="#93C5FD" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight={500}>{svc.split(" ")[0]}</text>
            <text x={60 + i * 80} y={160} fontSize={6.5} fill="#93C5FD" textAnchor="middle" fontFamily="Inter,sans-serif">{svc.split(" ").slice(1).join(" ")}</text>
            <text x={60 + i * 80} y={170} fontSize={5.5} fill="#334155" textAnchor="middle" fontFamily="Inter,sans-serif">Node / .NET</text>
          </g>
        ))}
        {/* Arrows down */}
        {[60, 140, 220, 300, 380, 460].map(x => (
          <line key={x} x1={x} y1={184} x2={x} y2={196} stroke="#3D5068" strokeWidth={1} strokeDasharray="3 2" />
        ))}
      </g>
      {/* Data tier */}
      <g className="hv-g3">
        <text x={16} y={206} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif" fontWeight={600} letterSpacing={.08}>DATA TIER</text>
        {[
          { label: "PostgreSQL", sub: "Transactional DB", color: "#2563EB", x: 16 },
          { label: "Redis", sub: "Cache & Sessions", color: "#EF4444", x: 132 },
          { label: "Elasticsearch", sub: "Search & Analytics", color: "#F59E0B", x: 248 },
          { label: "Blob Storage", sub: "Files & Attachments", color: "#3B82F6", x: 364 },
        ].map(d => (
          <g key={d.label}>
            <rect x={d.x} y={210} width={108} height={44} rx={7} fill="#253347" stroke="#3D5068" strokeWidth={.75} />
            <rect x={d.x} y={210} width={108} height={4} rx={2} fill={d.color} opacity={.6} />
            <text x={d.x + 10} y={228} fontSize={7.5} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{d.label}</text>
            <text x={d.x + 10} y={242} fontSize={6} fill="#5A6E85" fontFamily="Inter,sans-serif">{d.sub}</text>
          </g>
        ))}
      </g>
      {/* DevOps strip */}
      <g className="hv-g5">
        <rect x={16} y={266} width={486} height={22} rx={6} fill="#141F35" stroke="#2D3D55" strokeWidth={.5} />
        <text x={24} y={278} fontSize={6.5} fill="#5A6E85" fontFamily="Inter,sans-serif">CI/CD:</text>
        <text x={54} y={278} fontSize={6.5} fill="#3B82F6" fontFamily="Inter,sans-serif">GitHub Actions</text>
        <text x={145} y={278} fontSize={6.5} fill="#5A6E85" fontFamily="Inter,sans-serif">| Deploy:</text>
        <text x={185} y={278} fontSize={6.5} fill="#3B82F6" fontFamily="Inter,sans-serif">Azure / AWS / Docker / K8s</text>
        <text x={340} y={278} fontSize={6.5} fill="#5A6E85" fontFamily="Inter,sans-serif">| Monitoring:</text>
        <text x={396} y={278} fontSize={6.5} fill="#3B82F6" fontFamily="Inter,sans-serif">Datadog · Sentry</text>
      </g>
    </PanelChrome>
  </div>
);

/* ═══════════════════════════════════════════════════
   AI AUTOMATION — Process automation workflow
═══════════════════════════════════════════════════ */
export const AIAutomationVisual = () => (
  <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg" style={{ width: "100%", height: "auto" }}>
    <rect width="520" height="340" rx="12" fill="#253347" stroke="#3D5068" strokeWidth="1" />
    <rect width="520" height="36" rx="12" fill="#2D3D55" />
    <rect y="24" width="520" height="12" fill="#2D3D55" />
    <circle cx="16" cy="18" r="4.5" fill="#EF4444" opacity=".7" />
    <circle cx="29" cy="18" r="4.5" fill="#F59E0B" opacity=".7" />
    <circle cx="42" cy="18" r="4.5" fill="#22C55E" opacity=".7" />
    <text x="58" y="22" fontSize="10.4" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">Intelligent Process Automation — Live Monitor</text>
    <circle cx="490" cy="18" r="4" fill="#22C55E" className="hv-pulse" />
    <text x="470" y="22" fontSize="8.5" fill="#86EFAC" fontFamily="Inter,sans-serif">Live</text>

    {/* Before / After comparison */}
    <text x="16" y="54" fontSize="9.1" fill="#EF4444" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".08em">BEFORE AUTOMATION</text>
    <text x="280" y="54" fontSize="9.1" fill="#22C55E" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".08em">AFTER AUTOMATION</text>
    <line x1="258" y1="44" x2="258" y2="320" stroke="#3D5068" strokeWidth="1" strokeDasharray="4 3" />

    {/* Before column — manual steps */}
    {[
      { label: "📥 Email arrives", time: "0 min", note: "Manual inbox monitoring" },
      { label: "👁 Agent reads & classifies", time: "+12 min", note: "Human judgment required" },
      { label: "🔍 Looks up customer record", time: "+18 min", note: "CRM search, copy-paste" },
      { label: "✍ Drafts response", time: "+35 min", note: "Template selection, editing" },
      { label: "✅ Manager approves", time: "+50 min", note: "Approval queue wait" },
      { label: "📤 Sends reply", time: "+58 min", note: "Manual send + logging" },
    ].map((step, i) => (
      <g key={i}>
        <rect x="14" y={62 + i * 38} width="234" height="30" rx="5" fill="#2A1010" stroke="#4B1111" strokeWidth=".5" />
        <text x="22" y={75 + i * 38} fontSize="9.1" fill="#FCA5A5" fontFamily="Inter,sans-serif">{step.label}</text>
        <text x="22" y={86 + i * 38} fontSize="7.8" fill="#7F1D1D" fontFamily="Inter,sans-serif">{step.note}</text>
        <text x="236" y={79 + i * 38} fontSize="8.5" fill="#EF4444" fontFamily="Inter,sans-serif" textAnchor="end" fontWeight="600">{step.time}</text>
      </g>
    ))}
    <rect x="14" y="296" width="234" height="20" rx="5" fill="#2A1010" stroke="#4B1111" strokeWidth=".5" />
    <text x="22" y="310" fontSize="9.8" fontWeight="700" fill="#EF4444" fontFamily="Inter,sans-serif">Total: 58 minutes per ticket</text>

    {/* After column — automated */}
    {[
      { label: "📥 Email arrives", time: "0s", note: "Auto-captured by AI listener" },
      { label: "🤖 AI classifies intent", time: "+0.8s", note: "NLP intent detection 96.4%" },
      { label: "🔗 CRM auto-lookup", time: "+1.2s", note: "API call, full history loaded" },
      { label: "✍ AI drafts response", time: "+2.1s", note: "LLM with customer context" },
      { label: "✅ Rule-based auto-approval", time: "+2.4s", note: "Policy engine validates" },
      { label: "📤 Response sent + logged", time: "+2.9s", note: "CRM updated, ticket closed" },
    ].map((step, i) => (
      <g key={i}>
        <rect x="266" y={62 + i * 38} width="240" height="30" rx="5" fill="#073D1C" stroke="#14532D" strokeWidth=".5" />
        <text x="274" y={75 + i * 38} fontSize="9.1" fill="#6EE7B7" fontFamily="Inter,sans-serif">{step.label}</text>
        <text x="274" y={86 + i * 38} fontSize="7.8" fill="#065F46" fontFamily="Inter,sans-serif">{step.note}</text>
        <text x="498" y={79 + i * 38} fontSize="8.5" fill="#22C55E" fontFamily="Inter,sans-serif" textAnchor="end" fontWeight="600">{step.time}</text>
      </g>
    ))}
    <rect x="266" y="296" width="240" height="20" rx="5" fill="#073D1C" stroke="#14532D" strokeWidth=".5" />
    <text x="274" y="310" fontSize="9.8" fontWeight="700" fill="#22C55E" fontFamily="Inter,sans-serif">Total: 2.9 seconds per ticket</text>
  </svg>
);

/* ═══════════════════════════════════════════════════
   DIGITAL TRANSFORMATION WITH AI — AI Enterprise Stack
═══════════════════════════════════════════════════ */
export const AITransformVisual = () => (
  <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg" style={{ width: "100%", height: "auto" }}>
    <rect width="520" height="340" rx="12" fill="#141F35" stroke="#2D3D55" strokeWidth="1" />
    <rect width="520" height="36" rx="12" fill="#253347" />
    <rect y="24" width="520" height="12" fill="#253347" />
    <text x="16" y="22" fontSize="11.1" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">AI-Powered Enterprise Platform</text>
    <text x="16" y="54" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">BUSINESS INTELLIGENCE LAYER</text>

    {/* Top BI cards */}
    {[
      { label: "Revenue Forecast", val: "₹52.4Cr", trend: "▲ 22%", x: 16 },
      { label: "Customer Churn Risk", val: "4.2%", trend: "▼ 1.8%", x: 152, tc: "#22C55E" },
      { label: "Demand Prediction", val: "94.1% acc", trend: "ML Model v3", x: 288, tc: "#3B82F6" },
      { label: "Cost Optimisation", val: "₹8.1Cr saved", trend: "This quarter", x: 384, tc: "#22C55E" },
    ].map((c, i) => (
      <g key={i}>
        <rect x={c.x} y={58} width={i === 0 ? 128 : i < 3 ? 128 : 120} height={52} rx={7} fill="#253347" stroke="#3D5068" strokeWidth=".5" />
        <text x={c.x + 8} y={74} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">{c.label}</text>
        <text x={c.x + 8} y={90} fontSize={13} fontWeight={700} fill="#F8FAFC" fontFamily="Inter,sans-serif">{c.val}</text>
        <text x={c.x + 8} y={103} fontSize={6} fill={c.tc || "#22C55E"} fontFamily="Inter,sans-serif">{c.trend}</text>
      </g>
    ))}

    {/* AI Processing Core */}
    <text x="16" y="128" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">AI PROCESSING CORE</text>
    <rect x="16" y="132" width="488" height="80" rx="9" fill="#142240" stroke="#2563EB" strokeWidth=".75" strokeOpacity=".5" />
    {[
      { label: "Natural Language Processing", sub: "Intent · Sentiment · Extraction", x: 24 },
      { label: "Predictive Analytics", sub: "Forecasting · Scoring · Ranking", x: 148 },
      { label: "Process Automation", sub: "RPA · Workflow · Decisions", x: 272 },
      { label: "Computer Vision", sub: "Detection · Classification · OCR", x: 382 },
    ].map((mod) => (
      <g key={mod.label}>
        <rect x={mod.x} y={140} width={114} height={64} rx={6} fill="#141F35" stroke="#2563EB" strokeWidth=".4" strokeOpacity=".4" />
        <rect x={mod.x} y={140} width={114} height={4} rx={2} fill="#2563EB" opacity=".6" />
        <text x={mod.x + 8} y={158} fontSize={7} fontWeight={600} fill="#93C5FD" fontFamily="Inter,sans-serif">{mod.label}</text>
        <text x={mod.x + 8} y={170} fontSize={5.5} fill="#5A6E85" fontFamily="Inter,sans-serif">{mod.sub.split(" · ")[0]}</text>
        <text x={mod.x + 8} y={180} fontSize={5.5} fill="#5A6E85" fontFamily="Inter,sans-serif">{mod.sub.split(" · ").slice(1).join(" · ")}</text>
        <text x={mod.x + 8} y={198} fontSize={5.5} fill="#22C55E" fontFamily="Inter,sans-serif">● Active</text>
      </g>
    ))}

    {/* Data sources */}
    <text x="16" y="230" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">CONNECTED DATA SOURCES</text>
    {[
      { label: "ERP System", records: "2.4M records", x: 16 },
      { label: "CRM Platform", records: "84K contacts", x: 120 },
      { label: "Financial DB", records: "Real-time", x: 224 },
      { label: "IoT Sensors", records: "1.2K devices", x: 328 },
      { label: "External APIs", records: "12 sources", x: 432 },
    ].map((src) => (
      <g key={src.label}>
        <rect x={src.x} y={234} width={96} height={36} rx={6} fill="#253347" stroke="#3D5068" strokeWidth=".5" />
        <text x={src.x + 8} y={249} fontSize={7} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{src.label}</text>
        <text x={src.x + 8} y={262} fontSize={5.5} fill="#5A6E85" fontFamily="Inter,sans-serif">{src.records}</text>
        <line x1={src.x + 48} y1={270} x2={src.x + 48} y2={280} stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 2" />
      </g>
    ))}

    {/* Outcomes */}
    <rect x="16" y="280" width="488" height="48" rx="7" fill="#073D1C" stroke="#14532D" strokeWidth=".5" />
    <text x="26" y="296" fontSize="9.1" fontWeight="600" fill="#86EFAC" fontFamily="Inter,sans-serif">AI-DRIVEN OUTCOMES</text>
    {[
      { val: "40%", label: "Operational efficiency gain", x: 26 },
      { val: "60%", label: "Faster decision-making", x: 158 },
      { val: "30%", label: "Cost reduction", x: 290 },
      { val: "99%", label: "Data accuracy", x: 392 },
    ].map((o) => (
      <g key={o.label}>
        <text x={o.x} y={312} fontSize={11} fontWeight={700} fill="#22C55E" fontFamily="Inter,sans-serif">{o.val}</text>
        <text x={o.x} y={322} fontSize={5.5} fill="#065F46" fontFamily="Inter,sans-serif">{o.label}</text>
      </g>
    ))}
  </svg>
);

/* ═══════════════════════════════════════════════════
   CASE STUDIES — Results dashboard
═══════════════════════════════════════════════════ */
export const CaseStudiesDashVisual = () => (
  <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg" style={{ width: "100%", height: "auto" }}>
    <rect width="520" height="320" rx="12" fill="#253347" stroke="#3D5068" strokeWidth="1" />
    <rect width="520" height="36" rx="12" fill="#2D3D55" />
    <rect y="24" width="520" height="12" fill="#2D3D55" />
    <text x="16" y="22" fontSize="11.1" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">Project Outcomes — 300+ Delivered</text>
    <text x="390" y="22" fontSize="9.1" fill="#7A8EA8" fontFamily="Inter,sans-serif">FY 2015–2025</text>

    {/* Aggregate stats */}
    {[
      { val: "300+", label: "Projects", x: 16 },
      { val: "200+", label: "Customers", x: 120 },
      { val: "8", label: "Industries", x: 224 },
      { val: "95%", label: "Retention", x: 310 },
      { val: "₹180Cr+", label: "Client value unlocked", x: 384 },
    ].map((s) => (
      <g key={s.label}>
        <text x={s.x} y={58} fontSize={16} fontWeight={700} fill="#F8FAFC" fontFamily="Inter,sans-serif">{s.val}</text>
        <text x={s.x} y={70} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif">{s.label}</text>
      </g>
    ))}

    {/* Industry breakdown bar */}
    <text x="16" y="86" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">PROJECTS BY INDUSTRY</text>
    {[
      { label: "Healthcare", pct: 28, color: "#3B82F6" },
      { label: "Manufacturing", pct: 22, color: "#2563EB" },
      { label: "Education", pct: 18, color: "#1D4ED8" },
      { label: "Logistics", pct: 14, color: "#60A5FA" },
      { label: "FinTech", pct: 10, color: "#93C5FD" },
      { label: "Others", pct: 8, color: "#334155" },
    ].map((ind, i) => {
      const barW = ind.pct * 4.8;
      return (
        <g key={ind.label}>
          <text x={16} y={100 + i * 18} fontSize={7} fill="#94A3B8" fontFamily="Inter,sans-serif">{ind.label}</text>
          <rect x={105} y={92 + i * 18} width={280} height={9} rx={4.5} fill="#2D3D55" />
          <rect x={105} y={92 + i * 18} width={barW} height={9} rx={4.5} fill={ind.color} opacity={.8} />
          <text x={392} y={100 + i * 18} fontSize={6.5} fill="#94A3B8" fontFamily="Inter,sans-serif">{ind.pct}%</text>
        </g>
      );
    })}

    {/* Impact metrics grid */}
    <text x="16" y="210" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">AVERAGE CLIENT OUTCOMES</text>
    {[
      { icon: "⚡", label: "Efficiency Gain", val: "58%", sub: "avg across all projects", color: "#22C55E", x: 16, y: 214 },
      { icon: "💰", label: "Cost Reduction", val: "35%", sub: "operational savings", color: "#3B82F6", x: 148, y: 214 },
      { icon: "🎯", label: "Error Reduction", val: "74%", sub: "vs manual baseline", color: "#22C55E", x: 280, y: 214 },
      { icon: "⏱", label: "Faster Delivery", val: "3×", sub: "process speed increase", color: "#3B82F6", x: 400, y: 214 },
    ].map((m) => (
      <g key={m.label}>
        <rect x={m.x} y={m.y} width={118} height={64} rx={7} fill="#141F35" stroke="#2D3D55" strokeWidth=".5" />
        <text x={m.x + 10} y={m.y + 20} fontSize={14} fontFamily="Inter,sans-serif">{m.icon}</text>
        <text x={m.x + 10} y={m.y + 36} fontSize={16} fontWeight={700} fill={m.color} fontFamily="Inter,sans-serif">{m.val}</text>
        <text x={m.x + 10} y={m.y + 48} fontSize={6.5} fill="#7A8EA8" fontFamily="Inter,sans-serif">{m.label}</text>
        <text x={m.x + 10} y={m.y + 58} fontSize={5.5} fill="#334155" fontFamily="Inter,sans-serif">{m.sub}</text>
      </g>
    ))}

    {/* Technology mix */}
    <text x="16" y="294" fontSize="9.1" fill="#5A6E85" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing=".07em">TECHNOLOGIES DELIVERED</text>
    {["Custom ERP", "Web Portals", "Mobile Apps", "AI Agents", "ML Models", "Cloud Migrations", "SaaS Products", "BI Dashboards"].map((t, i) => (
      <g key={t}>
        <rect x={16 + (i % 4) * 124} y={298 + Math.floor(i / 4) * 16} width={116} height={12} rx={3} fill="#253347" stroke="#3D5068" strokeWidth=".3" />
        <text x={74 + (i % 4) * 124} y={308 + Math.floor(i / 4) * 16} fontSize={6} fill="#7A8EA8" fontFamily="Inter,sans-serif" textAnchor="middle">{t}</text>
      </g>
    ))}
  </svg>
);

/* ═══════════════════════════════════════════════════
   PROCESS FLOW — Generic reusable numbered steps
═══════════════════════════════════════════════════ */
export const ProcessFlowVisual = ({ steps }: {
  steps: { n: string; title: string; desc: string; color?: string }[]
}) => (
  <div style={{ width: "100%", overflowX: "auto" }}>
    <svg viewBox={`0 0 ${Math.max(520, steps.length * 130)} 140`} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", minWidth: "400px" }}>
      {steps.map((step, i) => {
        const x = 20 + i * 130;
        const color = step.color || "#2563EB";
        return (
          <g key={i}>
            {/* Connector line */}
            {i < steps.length - 1 && (
              <line x1={x + 60} y1={35} x2={x + 125} y2={35}
                stroke="#3D5068" strokeWidth="1.5" strokeDasharray="4 3" />
            )}
            {/* Step circle */}
            <circle cx={x + 35} cy={35} r={22} fill="#142240" stroke={color} strokeWidth="1.5" strokeOpacity=".6" />
            <text x={x + 35} y={31} fontSize={11} fontWeight={700} fill={color} textAnchor="middle" fontFamily="Inter,sans-serif">{step.n}</text>
            <text x={x + 35} y={44} fontSize={6.5} fill={color} textAnchor="middle" fontFamily="Inter,sans-serif" opacity={.6}>STEP</text>
            {/* Title */}
            <text x={x + 35} y={72} fontSize={8.5} fontWeight={600} fill="#E2E8F0" textAnchor="middle" fontFamily="Inter,sans-serif">{step.title}</text>
            {/* Desc — wrap at ~14 chars */}
            {step.desc.match(/.{1,20}(\s|$)/g)?.slice(0, 3).map((line, li) => (
              <text key={li} x={x + 35} y={84 + li * 12} fontSize={7} fill="#7A8EA8" textAnchor="middle" fontFamily="Inter,sans-serif">{line.trim()}</text>
            ))}
          </g>
        );
      })}
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════
   STAT CALLOUT BAND — inline proof points
═══════════════════════════════════════════════════ */
export const StatCallout = ({ stats }: {
  stats: { val: string; label: string; sub?: string; color?: string }[]
}) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
    gap: "1px",
    background: "var(--border)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    overflow: "hidden",
  }}>
    {stats.map((s) => (
      <div key={s.label} style={{
        background: "var(--bg-raised)",
        padding: "1.75rem 1.25rem",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "2rem",
          color: s.color || "var(--text-1)",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}>{s.val}</div>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "var(--text-1)",
          marginTop: "0.375rem",
        }}>{s.label}</div>
        {s.sub && <div style={{ fontSize: "0.75rem", color: "var(--text-4)", marginTop: "0.25rem" }}>{s.sub}</div>}
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   INDUSTRY GRID — visual sector cards
═══════════════════════════════════════════════════ */
export const IndustryGrid = ({ industries }: {
  industries: { icon: string; name: string; desc: string; metric?: string }[]
}) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
    {industries.map((ind) => (
      <div key={ind.name} className="industry-grid-card" style={{
        background: "var(--bg-raised)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "1.125rem",
        display: "flex",
        gap: "0.875rem",
        alignItems: "flex-start",
        transition: "border-color .2s",
      }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "8px",
          background: "var(--blue-dim)", border: "1px solid rgba(37,99,235,.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.125rem", flexShrink: 0,
        }}>{ind.icon}</div>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.875rem", color: "var(--text-1)", marginBottom: "0.25rem" }}>{ind.name}</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-4)", lineHeight: 1.5 }}>{ind.desc}</div>
          {ind.metric && <div style={{ fontSize: "0.75rem", color: "var(--blue-light)", marginTop: "0.375rem", fontWeight: 600 }}>{ind.metric}</div>}
        </div>
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   COMPARISON TABLE — Before/After or vs competitors
═══════════════════════════════════════════════════ */
export const ComparisonTable = ({ rows, colA, colB }: {
  rows: { feature: string; a: boolean | string; b: boolean | string }[];
  colA: string;
  colB: string;
}) => (
  <div style={{
    background: "var(--bg-raised)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    overflow: "hidden",
  }}>
    {/* Header */}
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
      background: "var(--bg-surface)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ padding: "0.875rem 1.25rem", fontSize: "0.8125rem", color: "var(--text-4)", fontWeight: 600 }}>Feature</div>
      <div style={{ padding: "0.875rem 1.25rem", fontSize: "0.8125rem", color: "#FCA5A5", fontWeight: 600, borderLeft: "1px solid var(--border)", textAlign: "center" }}>{colA}</div>
      <div style={{ padding: "0.875rem 1.25rem", fontSize: "0.8125rem", color: "#86EFAC", fontWeight: 600, borderLeft: "1px solid var(--border)", textAlign: "center" }}>{colB}</div>
    </div>
    {rows.map((row, i) => (
      <div key={i} style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
        background: i % 2 === 1 ? "rgba(255,255,255,.01)" : "transparent",
      }}>
        <div style={{ padding: "0.75rem 1.25rem", fontSize: "0.875rem", color: "var(--text-2)" }}>{row.feature}</div>
        <div style={{ padding: "0.75rem 1.25rem", borderLeft: "1px solid var(--border)", textAlign: "center" }}>
          {typeof row.a === "boolean"
            ? <span style={{ fontSize: "1rem" }}>{row.a ? "✗" : "—"}</span>
            : <span style={{ fontSize: "0.8125rem", color: "var(--text-3)" }}>{row.a}</span>}
        </div>
        <div style={{ padding: "0.75rem 1.25rem", borderLeft: "1px solid var(--border)", textAlign: "center" }}>
          {typeof row.b === "boolean"
            ? <span style={{ color: "#22C55E", fontSize: "1rem" }}>{row.b ? "✓" : "—"}</span>
            : <span style={{ fontSize: "0.8125rem", color: "#6EE7B7", fontWeight: 500 }}>{row.b}</span>}
        </div>
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   TECH STACK VISUAL — logos/pills grid
═══════════════════════════════════════════════════ */
export const TechStackGrid = ({ categories }: {
  categories: { name: string; tools: string[] }[]
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
    {categories.map((cat) => (
      <div key={cat.name}>
        <div style={{
          fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.07em",
          textTransform: "uppercase", color: "var(--blue-light)",
          marginBottom: "0.625rem",
        }}>{cat.name}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {cat.tools.map((tool) => (
            <span key={tool} style={{
              padding: "0.3125rem 0.75rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              fontSize: "0.8125rem",
              color: "var(--text-2)",
              fontWeight: 500,
            }}>{tool}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   CUSTOM APPLICATIONS VISUAL — App type overview
═══════════════════════════════════════════════════ */
export const CustomAppsVisual = () => (
  <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg" style={{ width: "100%", height: "auto" }}>
    <rect width="520" height="320" rx="12" fill="#253347" stroke="#3D5068" strokeWidth="1" />
    <rect width="520" height="36" rx="12" fill="#2D3D55" />
    <rect y="24" width="520" height="12" fill="#2D3D55" />
    <circle cx="16" cy="18" r="4.5" fill="#EF4444" opacity=".7" />
    <circle cx="29" cy="18" r="4.5" fill="#F59E0B" opacity=".7" />
    <circle cx="42" cy="18" r="4.5" fill="#22C55E" opacity=".7" />
    <text x="58" y="22" fontSize="11.1" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">Application Portfolio Overview</text>

    {/* App type cards in a 2x3 grid */}
    {[
      { icon: "🏥", name: "Hospital MIS", type: "Healthcare ERP", users: "2,400 users", status: "Live", sc: "#22C55E", bg: "rgba(34,197,94,.08)", x: 14, y: 44 },
      { icon: "🎓", name: "Student Portal", type: "Education Platform", users: "15,000 students", status: "Live", sc: "#22C55E", bg: "rgba(34,197,94,.08)", x: 186, y: 44 },
      { icon: "🏭", name: "Manufacturing ERP", type: "Operations Suite", users: "450 users", status: "Live", sc: "#22C55E", bg: "rgba(34,197,94,.08)", x: 358, y: 44 },
      { icon: "🚚", name: "Fleet Manager", type: "Logistics Platform", users: "200 drivers", status: "Live", sc: "#22C55E", bg: "rgba(34,197,94,.08)", x: 14, y: 164 },
      { icon: "🏦", name: "Loan Origination", type: "FinTech System", users: "120 staff", status: "Testing", sc: "#F59E0B", bg: "rgba(245,158,11,.08)", x: 186, y: 164 },
      { icon: "🛒", name: "B2B E-Commerce", type: "Commerce Platform", users: "8,200 buyers", status: "Build", sc: "#3B82F6", bg: "rgba(59,130,246,.08)", x: 358, y: 164 },
    ].map((app) => (
      <g key={app.name}>
        <rect x={app.x} y={app.y} width={158} height={112} rx={8} fill={app.bg} stroke="#3D5068" strokeWidth=".75" />
        <text x={app.x + 12} y={app.y + 24} fontSize={20} fontFamily="Inter,sans-serif">{app.icon}</text>
        <text x={app.x + 12} y={app.y + 48} fontSize={9} fontWeight={600} fill="#E2E8F0" fontFamily="Inter,sans-serif">{app.name}</text>
        <text x={app.x + 12} y={app.y + 62} fontSize={7} fill="#7A8EA8" fontFamily="Inter,sans-serif">{app.type}</text>
        <text x={app.x + 12} y={app.y + 78} fontSize={7} fill="#94A3B8" fontFamily="Inter,sans-serif">👤 {app.users}</text>
        <rect x={app.x + 104} y={app.y + 8} width={44} height={14} rx={7} fill={`${app.bg}`} stroke={app.sc} strokeWidth=".5" />
        <text x={app.x + 126} y={app.y + 18.5} fontSize={6.5} fill={app.sc} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight={600}>{app.status}</text>
        {/* Mini bar chart */}
        {[12, 18, 14, 22, 16, 20].map((h, i) => (
          <rect key={i} x={app.x + 12 + i * 18} y={app.y + 100 - h} width={12} height={h} rx={2}
            fill="#2563EB" opacity={.3 + i * .1} />
        ))}
      </g>
    ))}

    {/* Bottom summary */}
    <rect x="14" y="286" width="492" height="24" rx="6" fill="#141F35" stroke="#2D3D55" strokeWidth=".5" />
    <text x="24" y="297" fontSize="9.1" fill="#7A8EA8" fontFamily="Inter,sans-serif">Total active applications: 6</text>
    <text x="24" y="305" fontSize="8.5" fill="#7A8EA8" fontFamily="Inter,sans-serif">Combined user base: 26,370+ · Avg SLA: 99.7%</text>
    <text x="390" y="301" fontSize="9.1" fill="#3B82F6" fontFamily="Inter,sans-serif">◉ All production systems healthy</text>
  </svg>
);


/* ═══════════════════════════════════════════════════
   DIGITAL TRANSFORMATION — Legacy → Modern (v2, larger + brighter)
═══════════════════════════════════════════════════ */
export const TransformationJourneyV2 = () => (
  <svg viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg">
    <rect width="640" height="480" rx="14" fill="#141F35" stroke="#3D5068" strokeWidth="1.5"/>
    
    {/* Phase headers */}
    <rect width="640" height="40" rx="14" fill="#1D2D45"/>
    <rect y="26" width="640" height="14" fill="#1D2D45"/>
    <text x="106" y="25" fontSize="11.7" fill="#F87171" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing=".1em" textAnchor="middle">LEGACY STATE</text>
    <text x="320" y="25" fontSize="11.7" fill="#FCD34D" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing=".1em" textAnchor="middle">TRANSFORMATION</text>
    <text x="534" y="25" fontSize="11.7" fill="#34D399" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing=".1em" textAnchor="middle">MODERN ENTERPRISE</text>
    <line x1="213" y1="0" x2="213" y2="480" stroke="#3D5068" strokeWidth="1" strokeDasharray="6 4" opacity=".6"/>
    <line x1="427" y1="0" x2="427" y2="480" stroke="#3D5068" strokeWidth="1" strokeDasharray="6 4" opacity=".6"/>

    {/* ── LEGACY (left) ── */}
    {[
      {label:"📊 Spreadsheets",note:"Manual data entry · Error-prone",y:52,err:true},
      {label:"📄 Paper Processes",note:"No audit trail · Slow approval",y:148,err:true},
      {label:"🖥 Legacy Database",note:"SQL Server 2008 · End of life",y:244,err:true},
      {label:"📧 Email Workflows",note:"Untracked · No SLA monitoring",y:340,err:true},
    ].map((item)=>(
      <g key={item.y}>
        <rect x="14" y={item.y} width="192" height="84" rx="9" fill="#1E0F0F" stroke="#6B2121" strokeWidth="1"/>
        <text x="24" y={item.y+24} fontSize="14.3" fill="#FCA5A5" fontFamily="Inter,sans-serif" fontWeight="600">{item.label}</text>
        <text x="24" y={item.y+42} fontSize="11.1" fill="#7F3131" fontFamily="Inter,sans-serif">{item.note}</text>
        {/* Error bars */}
        {[0,1,2,3].map(i=><rect key={i} x="24" y={item.y+54+i*7} width={[140,100,120,80][i]} height="5" rx="2.5" fill="#4B1C1C"/>)}
        <text x="24" y={item.y+78} fontSize="9.1" fill="#EF4444" fontFamily="Inter,sans-serif" fontWeight="600">⚠ High Risk · Manual Process</text>
      </g>
    ))}

    {/* ── MIGRATION ARROWS ── */}
    {[94,190,286,382].map((y)=>(
      <g key={y}>
        <line x1="207" y1={y} x2="423" y2={y} stroke="#1E3A8A" strokeWidth="10" strokeLinecap="round" opacity=".15"/>
        <line x1="207" y1={y} x2="423" y2={y} stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 5" className="hv-dash" opacity=".7"/>
        <text x="315" y={y+4} fontSize="10.4" fill="#60A5FA" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">→ Migrating</text>
      </g>
    ))}

    {/* ── TRANSFORMATION PILLARS (centre) ── */}
    {[
      {label:"☁ Cloud Migration",sub:"Azure / AWS multi-region",color:"#3B82F6",y:52},
      {label:"🔗 Data Integration",sub:"Unified real-time data layer",color:"#8B5CF6",y:148},
      {label:"⚡ Process Automation",sub:"AI-powered workflows",color:"#F59E0B",y:244},
      {label:"🔒 Security & IAM",sub:"Zero-trust · SOC 2 design",color:"#22C55E",y:340},
    ].map((p)=>(
      <g key={p.y}>
        <rect x="220" y={p.y} width="200" height="84" rx="9" fill="#0F172A" stroke={p.color} strokeWidth="1.5" strokeOpacity=".6"/>
        <rect x="220" y={p.y} width="5" height="84" rx="2.5" fill={p.color} opacity=".8"/>
        <text x="234" y={p.y+24} fontSize="14.3" fontWeight="700" fill="#E2E8F0" fontFamily="Inter,sans-serif">{p.label}</text>
        <text x="234" y={p.y+42} fontSize="11.1" fill="#94A3B8" fontFamily="Inter,sans-serif">{p.sub}</text>
        {/* Progress bar */}
        <rect x="234" y={p.y+54} width="176" height="8" rx="4" fill="#1E293B"/>
        <rect x="234" y={p.y+54} width={[152,168,140,176][["☁","🔗","⚡","🔒"].indexOf(p.label[0])]} height="8" rx="4" fill={p.color} opacity=".7"/>
        <text x="234" y={p.y+76} fontSize="9.8" fill="#64748B" fontFamily="Inter,sans-serif">Phase {["2/3","3/3","2/4","1/3"][["☁","🔗","⚡","🔒"].indexOf(p.label[0])]} complete</text>
      </g>
    ))}

    {/* ── MODERN ENTERPRISE (right) ── */}
    {[
      {label:"🏗 Unified ERP Platform",note:"Finance · HR · Ops · CRM integrated",outcome:"₹2.4Cr monthly visibility",color:"#22C55E",y:52},
      {label:"📊 Real-time Analytics",note:"Executive dashboards · Auto-reports",outcome:"Decision speed: 3× faster",color:"#3B82F6",y:148},
      {label:"🤖 AI & Automation",note:"65% tasks automated · 24/7 ops",outcome:"₹1.2Cr annual saving",color:"#8B5CF6",y:244},
      {label:"☁ Cloud Infrastructure",note:"99.99% uptime · Auto-scaling",outcome:"40% infra cost reduction",color:"#22C55E",y:340},
    ].map((item)=>(
      <g key={item.y}>
        <rect x="434" y={item.y} width="192" height="84" rx="9" fill="#07200F" stroke="#14532D" strokeWidth="1"/>
        <rect x="434" y={item.y} width="5" height="84" rx="2.5" fill={item.color} opacity=".8"/>
        <text x="448" y={item.y+24} fontSize="13.7" fill="#6EE7B7" fontFamily="Inter,sans-serif" fontWeight="600">{item.label}</text>
        <text x="448" y={item.y+40} fontSize="10.4" fill="#065F46" fontFamily="Inter,sans-serif">{item.note}</text>
        <rect x="448" y={item.y+50} width="168" height="16" rx="4" fill="#052E16"/>
        <text x="532" y={item.y+62} fontSize="10.4" fill={item.color} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">{item.outcome}</text>
        <text x="448" y={item.y+78} fontSize="9.1" fill="#22C55E" fontFamily="Inter,sans-serif" fontWeight="600">● Live · Production</text>
      </g>
    ))}

    {/* Bottom status */}
    <rect x="14" y="436" width="612" height="36" rx="8" fill="#0D1A2E" stroke="#3D5068" strokeWidth=".5"/>
    {[
      {label:"Migration Progress",val:"78%",x:28},
      {label:"Systems Unified",val:"8 of 12",x:178},
      {label:"Processes Automated",val:"24 of 31",x:328},
      {label:"Annual ROI",val:"₹8.1Cr",x:498},
    ].map(s=>(
      <g key={s.x}>
        <text x={s.x} y="450" fontSize="9.1" fill="#7A8EA8" fontFamily="Inter,sans-serif">{s.label}</text>
        <text x={s.x} y="464" fontSize="13" fontWeight="700" fill="#E2E8F0" fontFamily="Inter,sans-serif">{s.val}</text>
      </g>
    ))}
  </svg>
);


/* ═══════════════════════════════════════════════════
   GLOBAL DELIVERY — World map + team + credentials
═══════════════════════════════════════════════════ */
export const GlobalDeliveryVisual = () => (
  <svg viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="hero-svg">
    <rect width="640" height="480" rx="14" fill="#141F35" stroke="#3D5068" strokeWidth="1.5"/>
    <rect width="640" height="40" rx="14" fill="#1D2D45"/>
    <rect y="26" width="640" height="14" fill="#1D2D45"/>
    <text x="16" y="25" fontSize="13" fontWeight="600" fill="#93C5FD" fontFamily="Inter,sans-serif">Jubiliants Software Solutions · Global Delivery Network</text>
    <rect x="540" y="12" width="86" height="16" rx="8" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.4)" strokeWidth=".75"/>
    <circle cx="552" cy="20" r="4" fill="#22C55E" className="hv-pulse"/>
    <text x="558" y="24" fontSize="9.8" fill="#86EFAC" fontFamily="Inter,sans-serif">Est. 2015</text>

    {/* Simplified world map */}
    <g opacity=".18">
      {/* Asia */}
      <path d="M370 100 Q410 85 440 110 Q470 130 460 160 Q445 185 420 188 Q395 190 375 172 Q352 150 360 125 Z" fill="#3D5068"/>
      {/* Europe */}
      <path d="M272 85 Q296 78 308 95 Q318 112 306 126 Q290 133 272 120 Q256 105 262 90 Z" fill="#3D5068"/>
      {/* Africa */}
      <path d="M278 135 Q302 128 318 148 Q332 172 322 205 Q308 228 288 232 Q268 230 258 208 Q248 182 256 158 Q264 136 278 135 Z" fill="#3D5068"/>
      {/* N.Americas */}
      <path d="M96 92 Q122 83 142 100 Q158 118 150 148 Q140 172 120 180 Q98 184 82 162 Q64 138 76 112 Q86 96 96 92 Z" fill="#3D5068"/>
      {/* S.Americas */}
      <path d="M118 190 Q138 182 152 202 Q162 225 150 252 Q136 272 116 272 Q96 268 86 248 Q75 225 86 206 Q98 190 118 190 Z" fill="#3D5068"/>
      {/* Australia */}
      <path d="M468 220 Q492 212 510 228 Q524 247 515 265 Q502 280 482 278 Q463 274 454 257 Q446 240 458 225 Z" fill="#3D5068"/>
    </g>

    {/* HQ — Hyderabad (prominent) */}
    <circle cx="404" cy="160" r="14" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="2"/>
    <circle cx="404" cy="160" r="7" fill="#60A5FA"/>
    <circle cx="404" cy="160" r="20" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity=".4" className="hv-pulse"/>
    <circle cx="404" cy="160" r="28" fill="none" stroke="#3B82F6" strokeWidth="1" opacity=".2" className="hv-pulse" style={{animationDelay:".8s"}}/>
    <rect x="362" y="134" width="84" height="18" rx="5" fill="#1D2D45" stroke="#3D5068" strokeWidth=".5"/>
    <text x="404" y="146" fontSize="10.4" fontWeight="700" fill="#93C5FD" fontFamily="Inter,sans-serif" textAnchor="middle">HQ · Hyderabad</text>

    {/* Client nodes */}
    {[
      {cx:282,cy:104,label:"London, UK",lx:240,ly:96},
      {cx:338,cy:148,label:"Dubai, UAE",lx:296,ly:140},
      {cx:470,cy:196,label:"Singapore",lx:478,ly:188},
      {cx:122,cy:126,label:"New York, US",lx:80,ly:118},
      {cx:492,cy:244,label:"Sydney, AU",lx:500,ly:236},
    ].map((n,i)=>(
      <g key={i}>
        <line x1={n.cx} y1={n.cy} x2="404" y2="160" stroke="#1E3A8A" strokeWidth="1.5" strokeDasharray="6 4" opacity=".5"/>
        <circle cx={n.cx} cy={n.cy} r="7" fill="#1D2D45" stroke="#3B82F6" strokeWidth="1.5"/>
        <circle cx={n.cx} cy={n.cy} r="4" fill="#3B82F6" opacity=".8"/>
        <rect x={n.lx} y={n.ly-10} width={n.label.length*6.5+10} height="15" rx="4" fill="#1D2D45" stroke="#3D5068" strokeWidth=".5"/>
        <text x={n.lx+5} y={n.ly} fontSize="9.8" fill="#7A8EA8" fontFamily="Inter,sans-serif">{n.label}</text>
      </g>
    ))}

    {/* Team composition */}
    <rect x="14" y="300" width="286" height="164" rx="10" fill="#1D2D45" stroke="#3D5068" strokeWidth=".75"/>
    <text x="24" y="322" fontSize="13" fontWeight="600" fill="#CBD5E1" fontFamily="Inter,sans-serif">Our Team · 80+ specialists</text>
    {[
      {label:"Software Engineers", pct:55, color:"#2563EB"},
      {label:"AI & ML Specialists", pct:20, color:"#8B5CF6"},
      {label:"QA & DevOps",        pct:15, color:"#06B6D4"},
      {label:"Project Managers",   pct:10, color:"#22C55E"},
    ].map((r,i)=>(
      <g key={r.label}>
        <text x="24" y={340+i*28} fontSize="11.1" fill="#7A8EA8" fontFamily="Inter,sans-serif">{r.label}</text>
        <rect x="24" y={344+i*28} width="256" height="10" rx="5" fill="#253347"/>
        <rect x="24" y={344+i*28} width={256*r.pct/100} height="10" rx="5" fill={r.color} opacity=".8"/>
        <text x="286" y={353+i*28} fontSize="10.4" fill="#7A8EA8" fontFamily="Inter,sans-serif" textAnchor="end">{r.pct}%</text>
      </g>
    ))}
    <text x="24" y="450" fontSize="10.4" fill="#475569" fontFamily="Inter,sans-serif">Average experience: 7+ years per engineer</text>

    {/* Track record */}
    <rect x="314" y="300" width="312" height="164" rx="10" fill="#1D2D45" stroke="#3D5068" strokeWidth=".75"/>
    <text x="324" y="322" fontSize="13" fontWeight="600" fill="#CBD5E1" fontFamily="Inter,sans-serif">Delivery Track Record</text>
    {[
      {icon:"🏆",label:"300+ Projects Delivered",  sub:"On time · On budget",         y:338},
      {icon:"🌍",label:"5 Countries Active",        sub:"India · UK · UAE · SG · US",  y:376},
      {icon:"🏭",label:"8 Industries Served",       sub:"Deep domain expertise",        y:414},
      {icon:"⭐",label:"95% Client Retention",      sub:"Repeat & referral business",   y:452},
    ].map(c=>(
      <g key={c.label}>
        <text x="328" y={c.y} fontSize="20.8" fontFamily="Inter,sans-serif">{c.icon}</text>
        <text x="350" y={c.y} fontSize="11.7" fontWeight="600" fill="#E2E8F0" fontFamily="Inter,sans-serif">{c.label}</text>
        <text x="350" y={c.y+14} fontSize="9.8" fill="#5A6E85" fontFamily="Inter,sans-serif">{c.sub}</text>
      </g>
    ))}
  </svg>
);
