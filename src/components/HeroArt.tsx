/**
 * Gold ribbon sculpture from the approved design. Purely decorative: hidden
 * from assistive technology. The left edge fades out so text can sit over it.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-sculpture.jpg"
        alt=""
        width={1060}
        height={1176}
        fetchPriority="high"
        className="h-full w-full object-cover object-[center_40%]"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 30%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 30%)",
        }}
      />
    </div>
  );
}
