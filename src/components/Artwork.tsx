/**
 * Decorative device mockups and light effects drawn in SVG/CSS, so the
 * site ships without stock renders. Everything here is aria-hidden.
 * `uid` keeps SVG gradient ids unique when a screen appears more than once.
 */

function DashboardScreen({ uid }: { uid: string }) {
  const bars = [38, 52, 44, 66, 58, 74, 62, 88, 70, 96, 82, 104];
  return (
    <svg viewBox="0 0 640 400" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#071630" />
          <stop offset="1" stopColor="#030a18" />
        </linearGradient>
        <linearGradient id={`${uid}-bar`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4cc4ff" />
          <stop offset="1" stopColor="#1f6bff" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b8cff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2b8cff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-tile`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f8bff" />
          <stop offset="1" stopColor="#0a3fb8" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#${uid}-bg)`} />

      {/* sidebar */}
      <rect x="0" y="0" width="56" height="400" fill="#04101f" />
      <circle cx="28" cy="28" r="9" fill="#1f8bff" />
      {[80, 112, 144, 176, 208].map((y, i) => (
        <rect key={y} x="18" y={y} width="20" height="6" rx="3" fill={i === 1 ? "#4cc4ff" : "#1b2c4a"} />
      ))}

      {/* top bar */}
      <rect x="76" y="20" width="120" height="10" rx="5" fill="#d9e6ff" opacity="0.85" />
      <rect x="76" y="38" width="80" height="6" rx="3" fill="#3a4e72" />
      <rect x="520" y="20" width="96" height="24" rx="8" fill="#0f2648" />
      <circle cx="536" cy="32" r="5" fill="#38b6ff" />

      {/* KPI tiles */}
      {[
        { x: 76, v: "24.8k", hl: true },
        { x: 212, v: "+38%", hl: false },
        { x: 348, v: "1,204", hl: false },
        { x: 484, v: "4.9", hl: false },
      ].map((t) => (
        <g key={t.x}>
          <rect
            x={t.x}
            y="62"
            width="124"
            height="70"
            rx="10"
            fill={t.hl ? `url(#${uid}-tile)` : "#0b1d38"}
            stroke="#1e3a66"
            strokeOpacity={t.hl ? 0 : 1}
          />
          <rect x={t.x + 14} y="76" width="46" height="5" rx="2.5" fill={t.hl ? "#bfe0ff" : "#3a4e72"} />
          <text x={t.x + 14} y="112" fill="#f4f7fc" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">
            {t.v}
          </text>
          <path
            d={`M${t.x + 78} 116 l10 -8 l8 4 l14 -14`}
            fill="none"
            stroke={t.hl ? "#ffffff" : "#38b6ff"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* bar chart */}
      <rect x="76" y="148" width="336" height="232" rx="12" fill="#081a33" stroke="#163055" />
      <rect x="94" y="164" width="90" height="7" rx="3.5" fill="#cfe0ff" opacity="0.8" />
      {[210, 250, 290, 330].map((y) => (
        <line key={y} x1="94" x2="394" y1={y} y2={y} stroke="#15294a" strokeDasharray="3 5" />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={98 + i * 24.5} y={362 - h * 1.5} width="14" height={h * 1.5} rx="3" fill={`url(#${uid}-bar)`} />
      ))}

      {/* line chart */}
      <rect x="428" y="148" width="188" height="110" rx="12" fill="#081a33" stroke="#163055" />
      <path
        d="M440 232 C460 220 470 236 490 214 S520 196 540 204 S575 176 604 168 V246 H440 Z"
        fill={`url(#${uid}-area)`}
      />
      <path
        d="M440 232 C460 220 470 236 490 214 S520 196 540 204 S575 176 604 168"
        fill="none"
        stroke="#4cc4ff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="604" cy="168" r="4" fill="#fff" stroke="#38b6ff" strokeWidth="2" />

      {/* donut */}
      <rect x="428" y="270" width="188" height="110" rx="12" fill="#081a33" stroke="#163055" />
      <circle cx="478" cy="325" r="30" fill="none" stroke="#132a4d" strokeWidth="10" />
      <circle
        cx="478"
        cy="325"
        r="30"
        fill="none"
        stroke="#2b8cff"
        strokeWidth="10"
        strokeDasharray="140 189"
        strokeLinecap="round"
        transform="rotate(-90 478 325)"
      />
      <rect x="524" y="306" width="72" height="6" rx="3" fill="#cfe0ff" opacity="0.8" />
      <rect x="524" y="322" width="52" height="5" rx="2.5" fill="#3a4e72" />
      <rect x="524" y="336" width="62" height="5" rx="2.5" fill="#3a4e72" />
    </svg>
  );
}

function WebsiteScreen({ uid, title = "Explore Beyond" }: { uid: string; title?: string }) {
  return (
    <svg viewBox="0 0 640 400" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c2a5a" />
          <stop offset="0.6" stopColor="#3d6fb0" />
          <stop offset="1" stopColor="#9cc3e8" />
        </linearGradient>
        <linearGradient id={`${uid}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a7fae" />
          <stop offset="1" stopColor="#24406a" />
        </linearGradient>
        <linearGradient id={`${uid}-near`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14284a" />
          <stop offset="1" stopColor="#050c1a" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="#f5f8fd" />
      {/* nav */}
      <rect x="24" y="16" width="56" height="8" rx="4" fill="#0b1220" />
      {[400, 448, 496].map((x) => (
        <rect key={x} x={x} y="18" width="34" height="5" rx="2.5" fill="#8a97ad" />
      ))}
      <rect x="548" y="12" width="68" height="16" rx="5" fill="#1f8bff" />
      {/* hero */}
      <g>
        <rect x="0" y="40" width="640" height="250" fill={`url(#${uid}-sky)`} />
        <path d="M0 220 L90 140 L150 180 L240 90 L330 170 L400 120 L500 190 L560 150 L640 200 V290 H0 Z" fill={`url(#${uid}-far)`} />
        <path d="M240 90 L262 110 L250 108 L240 118 L228 106 Z" fill="#e8f1ff" opacity="0.85" />
        <path d="M0 260 L120 190 L210 240 L300 200 L420 250 L520 210 L640 250 V290 H0 Z" fill={`url(#${uid}-near)`} />
        <text x="40" y="128" fill="#fff" fontSize="34" fontWeight="700" fontFamily="Inter, sans-serif">
          {title}
        </text>
        <rect x="40" y="144" width="150" height="6" rx="3" fill="#d6e6ff" opacity="0.85" />
        <rect x="40" y="158" width="110" height="6" rx="3" fill="#d6e6ff" opacity="0.6" />
        <rect x="40" y="178" width="72" height="20" rx="6" fill="#1f8bff" />
      </g>
      {/* cards */}
      {[24, 176, 328, 480].map((x, i) => (
        <g key={x}>
          <rect x={x} y="306" width="136" height="80" rx="8" fill={i % 2 ? "#dfe9f7" : "#e8eff9"} />
          <path
            d={`M${x} ${360} l40 -26 l30 18 l36 -24 l30 20 V386 H${x} Z`}
            fill={i % 2 ? "#2d5a96" : "#3a6aa8"}
            opacity="0.85"
          />
        </g>
      ))}
    </svg>
  );
}

/** Soft blue light pooling under a device. */
function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full bg-[radial-gradient(closest-side,rgb(31_139_255/0.55),rgb(10_92_255/0.18)_55%,transparent)] blur-2xl motion-safe:animate-pulse-glow ${className}`}
    />
  );
}

/** Flowing light ribbons used along the bottom edge of heroes and sections. */
export function GlowWave({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id="wave-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a5cff" stopOpacity="0" />
          <stop offset="0.55" stopColor="#1f8bff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4cc4ff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="wave-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a5cff" stopOpacity="0" />
          <stop offset="0.7" stopColor="#0a5cff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#1f8bff" stopOpacity="0.7" />
        </linearGradient>
        <filter id="wave-blur" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path d="M0 380 C300 360 520 300 760 250 S1080 170 1200 120 V400 H0 Z" fill="url(#wave-b)" opacity="0.5" />
      <path d="M0 400 C340 380 600 330 820 290 S1100 230 1200 210 V400 H0 Z" fill="url(#wave-b)" opacity="0.8" />
      <path
        d="M0 370 C300 350 520 300 760 250 S1080 170 1200 120"
        fill="none"
        stroke="url(#wave-a)"
        strokeWidth="6"
        filter="url(#wave-blur)"
      />
      <path d="M0 370 C300 350 520 300 760 250 S1080 170 1200 120" fill="none" stroke="url(#wave-a)" strokeWidth="1.5" />
      <path d="M200 400 C480 370 700 330 900 300 S1130 250 1200 240" fill="none" stroke="url(#wave-a)" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}

/** Service pages: two browser windows floating in depth. */
export function BrowserStackArt({ className = "", title }: { className?: string; title?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none relative select-none ${className}`}>
      <Glow className="inset-[10%]" />
      <div className="relative [perspective:1400px]">
        <div className="absolute top-[14%] right-0 w-[70%] opacity-70 [transform:rotateY(-20deg)]">
          <BrowserFrame>
            <DashboardScreen uid="bs-back" />
          </BrowserFrame>
        </div>
        <div className="relative w-[84%] motion-safe:animate-float [transform:rotateY(-14deg)_rotateX(3deg)]">
          <BrowserFrame glow>
            <WebsiteScreen uid="bs-front" title={title} />
          </BrowserFrame>
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children, glow }: { children: React.ReactNode; glow?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-[12px] border border-accent/40 bg-[#0a1222] ${
        glow ? "shadow-[0_0_80px_-10px_rgb(31_139_255/0.8)]" : "shadow-2xl"
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="ml-3 h-3 w-1/3 rounded-full bg-white/10" />
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  );
}

/** Flat laptop for content blocks such as "What's included". */
export function LaptopArt({ className = "", title }: { className?: string; title?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none relative select-none ${className}`}>
      <div className="mx-auto w-[86%]">
        <div className="rounded-t-[12px] border border-white/10 bg-[#0a0f1a] p-[1.8%]">
          <div className="aspect-[16/10] overflow-hidden rounded-[5px]">
            <WebsiteScreen uid="la" title={title} />
          </div>
        </div>
        <div className="relative mx-[-7%] h-3 rounded-b-[12px] bg-gradient-to-b from-[#c7cfdd] to-[#7d879a] shadow-[0_24px_40px_-12px_rgb(0_0_0/0.8)]">
          <div className="absolute top-0 left-1/2 h-1.5 w-[16%] -translate-x-1/2 rounded-b-md bg-[#8d97a8]" />
        </div>
      </div>
    </div>
  );
}

/** Our Work hero: an open laptop seen at an angle. */
export function ShowcaseArt({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none relative select-none ${className}`}>
      <Glow className="inset-x-[5%] top-[10%] bottom-0" />
      <div className="relative [perspective:1500px]">
        <div className="mx-auto w-[90%] [transform:rotateY(-22deg)_rotateX(8deg)]">
          <div className="rounded-t-[14px] border border-accent/30 bg-[#070c16] p-[1.6%] shadow-[0_0_90px_-10px_rgb(31_139_255/0.7)]">
            <div className="aspect-[16/10] overflow-hidden rounded-[6px]">
              <WebsiteScreen uid="sc" title="Built to grow" />
            </div>
          </div>
          <div className="mx-[-6%] h-3 rounded-b-[14px] bg-gradient-to-b from-[#2c3a55] to-[#0f1624] shadow-[0_30px_50px_-10px_rgb(31_139_255/0.45)]" />
        </div>
      </div>
    </div>
  );
}
