import { motion } from 'motion/react'

// Hand-drawn style line icons that draw themselves in when scrolled into view.
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i = 0) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.6, delay: i * 0.12 }, opacity: { duration: 0.2, delay: i * 0.12 } } }),
}

export function Line({ children, viewBox = '0 0 64 64', className = 'h-16 w-16', strokeWidth = 1.6 }) {
  return (
    <motion.svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      aria-hidden
    >
      {children}
    </motion.svg>
  )
}

const P = ({ d, i = 0 }) => <motion.path d={d} variants={draw} custom={i} />

const ICONS = {
  letter: ['M10 20h44v30H10z', 'M10 20l22 17 22-17', 'M27 44a5 5 0 1 0 10 0a5 5 0 1 0-10 0'],
  coffee: ['M14 26h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z', 'M44 30h4a6 6 0 0 1 0 12h-5', 'M22 12c-3 4 3 6 0 10M30 10c-3 4 3 6 0 10M38 12c-3 4 3 6 0 10', 'M10 56h40'],
  palette: ['M32 10C18 10 8 20 8 32s10 22 22 22c4 0 5-3 3-6-2-4 0-7 4-7h6c8 0 13-5 13-12 0-11-11-19-24-19z', 'M20 26a3 3 0 1 0 6 0a3 3 0 1 0-6 0M30 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0M41 24a3 3 0 1 0 6 0a3 3 0 1 0-6 0'],
  bouquet: ['M32 34L24 58M32 34l8 24M32 34v24', 'M24 22a6 6 0 1 0 12 0a6 6 0 1 0-12 0M16 30a6 6 0 1 0 12 0a6 6 0 1 0-12 0M36 30a6 6 0 1 0 12 0a6 6 0 1 0-12 0', 'M22 46c4-2 16-2 20 0l-4 6H26z'],
  arch: ['M14 58V30a18 18 0 0 1 36 0v28', 'M8 58h48', 'M14 30c4-2 6 2 4 5M50 30c-4-2-6 2-4 5M28 13c2 3 6 3 8 0', 'M26 58v-8h4v8M34 58v-8h4v8'],
  glasses: ['M18 10h12l-2 16a4 4 0 0 1-8 0z', 'M34 10h12l-2 16a4 4 0 0 1-8 0z', 'M24 30v18M40 30v18M18 48h12M34 48h12', 'M30 8l4 4M32 4v4'],
  rings: ['M14 38a12 12 0 1 0 24 0a12 12 0 1 0-24 0', 'M28 34a12 12 0 1 0 24 0a12 12 0 1 0-24 0', 'M22 22l4-6 4 6'],
  camera: ['M8 22h48v30H8z', 'M22 22l4-8h12l4 8', 'M22 37a10 10 0 1 0 20 0a10 10 0 1 0-20 0', 'M48 28h3'],
}

export function Icon({ name, className }) {
  return (
    <Line className={className}>
      {ICONS[name].map((d, i) => (
        <P key={i} d={d} i={i} />
      ))}
    </Line>
  )
}

// Champagne coupe tied with a bow — the big cut-out illustration from the invitation reference.
export function Coupe({ className = 'w-64 text-cream' }) {
  return (
    <Line viewBox="0 0 220 240" className={className} strokeWidth={2}>
      <P i={0} d="M20 40c0 40 40 62 90 62s90-22 90-62z" />
      <P i={1} d="M20 40c20-10 160-10 180 0" />
      <P i={2} d="M40 52c20 6 120 6 140 0M60 70c30 8 70 8 100 0" />
      <P i={3} d="M110 102v96" />
      <P i={4} d="M60 222c10-20 90-20 100 0z" />
      <P i={5} d="M110 130c-20-18-56-22-62-6-5 14 30 20 62 6zM110 130c20-18 56-22 62-6 5 14-30 20-62 6z" />
      <P i={6} d="M104 136c-14 18-34 50-46 66M116 136c14 18 34 50 46 66" />
      <P i={7} d="M150 30c8-12 22-14 26-4M164 18c4-8 14-8 16 0" />
    </Line>
  )
}

// Pair of doves, as on the "wedding details" flower card.
export function Doves({ className = 'w-24 text-crimson' }) {
  return (
    <Line viewBox="0 0 120 70" className={className}>
      <P i={0} d="M58 40c-10-2-20-10-24-20 10 2 18 0 24 6 2-10 10-16 20-14-6 4-8 10-6 16-4 8-8 12-14 12z" />
      <P i={1} d="M62 40c10-2 20-10 24-20-10 2-18 0-24 6" />
      <P i={2} d="M34 20c-8-6-18-8-28-4 8 2 14 8 18 14M86 20c8-6 18-8 28-4-8 2-14 8-18 14" />
      <P i={3} d="M56 46c-4 6-12 10-20 10M64 46c4 6 12 10 20 10" />
    </Line>
  )
}
