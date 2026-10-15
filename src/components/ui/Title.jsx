import Reveal from './Reveal'

// Script heading with a small spaced subtitle, as in the red invitation template.
export default function Title({ script, sub, align = 'center', tone = 'text-crimson', subTone = 'text-cocoa/70', className = '', size = 'text-6xl sm:text-7xl' }) {
  const a = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col gap-2 ${a} ${className}`}>
      <h2 className={`font-script leading-[1.05] ${size} ${tone}`}>{script}</h2>
      {sub && <p className={`eyebrow ${subTone}`}>{sub}</p>}
    </Reveal>
  )
}
