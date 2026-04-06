import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VantaHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    import("vanta/dist/vanta.cells.min").then((mod) => {
      if (cancelled || !containerRef.current) return;
      const CELLS = mod.default;
      effectRef.current = CELLS({
        el: containerRef.current,
        THREE,
        color1: 0xa9caf7,
        color2: 0xddeeff,
        size: 2.5,
        speed: 0.6,
      });
    });

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="vanta-hero">
      <div className="vanta-content">{children}</div>
    </div>
  );
}
