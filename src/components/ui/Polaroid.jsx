import { motion } from 'motion/react'

// Straight-edged instant photo with a handwritten caption and optional washi tape.
export default function Polaroid({ src, alt = '', caption, tape = true, tapeColor = 'bg-blush/80', className = '', imgClass = 'aspect-square', rotate = 0, hover = true, onClick }) {
  const Tag = onClick ? motion.button : motion.div
  return (
    <Tag
      onClick={onClick}
      className={`relative block bg-[#fffdf8] p-2.5 pb-0 text-left shadow-[0_12px_28px_rgba(74,42,31,0.28)] sm:p-3 sm:pb-0 ${className}`}
      style={{ rotate }}
      whileHover={hover ? { rotate: 0, y: -8, scale: 1.03 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {tape && (
        <span className={`absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-3 ${tapeColor} shadow-sm [clip-path:polygon(4%_0,96%_6%,100%_100%,0_94%)]`} />
      )}
      <div className={`overflow-hidden bg-cocoa/10 ${imgClass}`}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <p className="truncate px-1 py-2 text-center font-hand text-xl text-cocoa sm:py-3 sm:text-2xl">{caption ?? ' '}</p>
    </Tag>
  )
}
