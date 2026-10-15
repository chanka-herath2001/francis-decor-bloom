// Curved paper cut-out shapes (flower, scalloped oval, wavy card, starburst sticker).
// Shapes are generated as polar/edge curves in a 200×200 box and stretched to fit.

function polar(fn, n = 240) {
  let d = ''
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * Math.PI * 2
    const r = fn(t)
    d += `${i ? 'L' : 'M'}${(100 + Math.cos(t) * r).toFixed(2)} ${(100 + Math.sin(t) * r).toFixed(2)}`
  }
  return d + 'Z'
}

function wavyRect(waves = 9, amp = 3.2) {
  const pts = []
  const edge = (x0, y0, x1, y1, nx, ny) => {
    for (let i = 0; i < 60; i++) {
      const k = i / 60
      const w = Math.sin(k * Math.PI * 2 * waves) * amp
      pts.push([x0 + (x1 - x0) * k + nx * w, y0 + (y1 - y0) * k + ny * w])
    }
  }
  const m = 6
  edge(m, m, 200 - m, m, 0, -1)
  edge(200 - m, m, 200 - m, 200 - m, 1, 0)
  edge(200 - m, 200 - m, m, 200 - m, 0, 1)
  edge(m, 200 - m, m, m, -1, 0)
  return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join('') + 'Z'
}

export const SHAPES = {
  flower: polar((t) => 74 + 22 * Math.cos(4 * t)),
  bloom: polar((t) => 80 + 14 * Math.abs(Math.cos(3 * t))),
  scallop: polar((t) => 92 + 4 * Math.cos(28 * t)),
  oval: polar((t) => 90 + 5 * Math.cos(12 * t) + 3 * Math.cos(2 * t)),
  star: polar((t) => (Math.round((t / (Math.PI * 2)) * 48) % 2 ? 78 : 96), 48),
  wavy: wavyRect(),
  arch: 'M6 194V90C6 40 48 6 100 6s94 34 94 84v104Z',
}

export default function Cutout({ shape = 'flower', color = '#fbf3e6', stroke, shadow = true, className = '', children, as = 'div', ...rest }) {
  const Tag = as
  return (
    <Tag className={`${className.split(' ').some((c) => c === 'absolute' || c === 'fixed') ? '' : 'relative'} ${className}`} {...rest}>
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full overflow-visible ${shadow ? 'drop-shadow-[0_10px_18px_rgba(74,42,31,0.28)]' : ''}`}
        aria-hidden
      >
        <path d={SHAPES[shape]} fill={color} stroke={stroke} strokeWidth={stroke ? 1.2 : 0} vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="relative">{children}</div>
    </Tag>
  )
}
