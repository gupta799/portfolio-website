const PERIOD = 120;
const PERIODS = 24;
const TOTAL_H = PERIOD * PERIODS;
const CX = 40;
const W = 80;

function strandPath(amplitude: number, phase: number): string {
  const pts: string[] = [];
  for (let y = 0; y <= TOTAL_H; y += 3) {
    const x = CX + amplitude * Math.sin((y / PERIOD) * Math.PI * 2 + phase);
    pts.push(`${pts.length === 0 ? "M" : "L"}${x.toFixed(1)},${y}`);
  }
  return pts.join(" ");
}

function BasePairs({ amplitude }: { amplitude: number }) {
  const pairs: React.ReactNode[] = [];
  for (let y = PERIOD / 4; y < TOTAL_H; y += PERIOD / 2) {
    const angle = (y / PERIOD) * Math.PI * 2;
    const x1 = CX + amplitude * Math.sin(angle);
    const x2 = CX - amplitude * Math.sin(angle);
    if (Math.abs(x1 - x2) > amplitude * 0.6) {
      pairs.push(<line key={y} x1={x1.toFixed(1)} y1={y} x2={x2.toFixed(1)} y2={y} />);
    }
  }
  return <>{pairs}</>;
}

export function DnaBackground() {
  return (
    <div className="dna-bg" aria-hidden="true">
      <svg className="dna-strand dna-strand-a" width={W} height={TOTAL_H} viewBox={`0 0 ${W} ${TOTAL_H}`}>
        <g stroke="var(--accent)" fill="none" strokeLinecap="round">
          <path d={strandPath(28, 0)} strokeWidth={0.9} />
          <path d={strandPath(28, Math.PI)} strokeWidth={0.9} />
          <g strokeWidth={0.7}><BasePairs amplitude={28} /></g>
        </g>
      </svg>
      <svg className="dna-strand dna-strand-b" width={W} height={TOTAL_H} viewBox={`0 0 ${W} ${TOTAL_H}`}>
        <g stroke="var(--accent)" fill="none" strokeLinecap="round">
          <path d={strandPath(22, 0)} strokeWidth={0.7} />
          <path d={strandPath(22, Math.PI)} strokeWidth={0.7} />
        </g>
      </svg>
    </div>
  );
}
