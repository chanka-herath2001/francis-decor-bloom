import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { navLinks } from '../../data/site'
import MobileMenu from './MobileMenu'

// Floating cream pill with the logo on a scalloped badge.
export default function Navbar() {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setHidden(y > 300 && y > (scrollY.getPrevious() ?? 0) && !open)
  })

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-3 px-3 sm:top-4 ${open ? 'z-[56]' : 'z-50'}`}
        animate={{ y: hidden ? '-140%' : '0%' }}
        transition={{ duration: 0.35 }}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-crimson/15 bg-cream/90 py-1.5 pl-2 pr-3 shadow-[0_8px_30px_rgba(92,14,32,.18)] backdrop-blur-md sm:pr-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Frances Decor home">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-inner ring-2 ring-blush sm:h-14 sm:w-14">
              <img src="/images/logo.png" alt="" className="h-10 sm:h-12" />
            </span>
            <span className="hidden font-script text-3xl text-crimson min-[380px]:inline">Frances Decor</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end
                  className={({ isActive }) => `relative block rounded-full px-4 py-2 eyebrow transition-colors ${isActive ? 'text-cream' : 'text-crimson hover:bg-blush/60'}`}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-crimson" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                      <span className="relative">{l.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-crimson md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-cream" />
            <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-cream" />
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
