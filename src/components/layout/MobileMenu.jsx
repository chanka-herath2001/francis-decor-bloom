import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { navLinks, contact } from '../../data/site'
import { stopScroll } from './SmoothScroll'
import Cutout from '../ui/Cutout'

const colors = ['#f6c9cf', '#a9c8e6', '#f4d58d', '#a8bd9b']

// Full-screen menu: each link is a colourful paper cut-out that drops in.
export default function MobileMenu({ onClose }) {
  useEffect(() => {
    stopScroll(true)
    return () => stopScroll(false)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[55] flex flex-col justify-center gap-4 overflow-hidden bg-crimson stripes px-8 pt-20 md:hidden"
      style={{ '--s1': '#a3192f', '--s2': '#9b1b30' }}
      initial={{ clipPath: 'circle(0% at 90% 6%)' }}
      animate={{ clipPath: 'circle(150% at 90% 6%)' }}
      exit={{ clipPath: 'circle(0% at 90% 6%)' }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      {navLinks.map((l, i) => (
        <motion.div
          key={l.to}
          initial={{ opacity: 0, y: -40, rotate: i % 2 ? 6 : -6 }}
          animate={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
          transition={{ delay: 0.25 + i * 0.08, type: 'spring', stiffness: 200, damping: 14 }}
          className={i % 2 ? 'self-end' : 'self-start'}
        >
          <Cutout shape={i % 2 ? 'oval' : 'wavy'} color={colors[i]} className="px-10 py-4">
            <NavLink to={l.to} end onClick={onClose} className="block font-script text-5xl text-wine">
              {l.label}
            </NavLink>
          </Cutout>
        </motion.div>
      ))}
      <motion.div className="mt-8 text-center text-cream/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <a href={`mailto:${contact.email}`} className="eyebrow block">{contact.email}</a>
        <a href={`tel:${contact.phoneIntl}`} className="eyebrow mt-2 block">{contact.phone}</a>
      </motion.div>
    </motion.div>
  )
}
