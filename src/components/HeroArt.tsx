/**
 * Original decorative "sculptural ribbon" artwork drawn in SVG, standing in for
 * commissioned imagery. Purely decorative: hidden from assistive technology.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  const rings = [
    { rx: 210, ry: 92, rotate: -24, width: 26, opacity: 0.95 },
    { rx: 180, ry: 150, rotate: 38, width: 18, opacity: 0.8 },
    { rx: 235, ry: 60, rotate: 12, width: 12, opacity: 0.65 },
    { rx: 150, ry: 120, rotate: -62, width: 22, opacity: 0.9 },
    { rx: 120, ry: 200, rotate: 70, width: 8, opacity: 0.5 },
  ];

  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 600 600" className="h-full w-full motion-safe:animate-drift">
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff3d6" />
            <stop offset="0.35" stopColor="#e8bd72" />
            <stop offset="0.6" stopColor="#7a5524" />
            <stop offset="0.8" stopColor="#f3d29b" />
            <stop offset="1" stopColor="#3b2a12" />
          </linearGradient>
          <linearGradient id="ribbon-edge" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fffaf0" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#fffaf0" stopOpacity="0" />
            <stop offset="1" stopColor="#fffaf0" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#e8bd72" stopOpacity="0.35" />
            <stop offset="1" stopColor="#e8bd72" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        <circle cx="300" cy="300" r="290" fill="url(#glow)" />
        <g transform="translate(300 300)" filter="url(#soft)">
          {rings.map((r, i) => (
            <g key={i} transform={`rotate(${r.rotate})`} opacity={r.opacity}>
              <ellipse rx={r.rx} ry={r.ry} fill="none" stroke="url(#ribbon)" strokeWidth={r.width} />
              <ellipse
                rx={r.rx}
                ry={r.ry}
                fill="none"
                stroke="url(#ribbon-edge)"
                strokeWidth={Math.max(1, r.width / 8)}
                transform={`translate(0 ${-r.width / 3})`}
              />
            </g>
          ))}
          <circle r="70" fill="#0a0a0b" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}
