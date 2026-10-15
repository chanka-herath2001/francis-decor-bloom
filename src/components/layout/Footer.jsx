import { Link } from 'react-router-dom'
import { contact, navLinks, tagline } from '../../data/site'
import { WaveEdge, WaxSeal } from '../ui/Decor'
import { Coupe } from '../ui/LineArt'
import Reveal from '../ui/Reveal'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine pt-20 text-cream">
      <WaveEdge color="var(--color-cream)" />
      <Coupe className="absolute -right-10 bottom-6 hidden w-64 text-cream/15 md:block" />
      <div className="relative mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <WaxSeal className="h-16 w-16" color="#d9475f" />
          <p className="mt-4 font-script text-6xl">Frances Decor</p>
          <p className="mt-2 font-serif text-lg italic text-blush/90">{tagline}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-3 text-butter">Wander</p>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block font-serif text-xl text-cream/85 transition hover:text-blush">{l.label}</Link>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-3 text-butter">Say hello</p>
            <a href={`mailto:${contact.email}`} className="block font-serif text-xl text-cream/85 hover:text-blush">{contact.email}</a>
            <a href={`tel:${contact.phoneIntl}`} className="block font-serif text-xl text-cream/85 hover:text-blush">{contact.phone}</a>
          </div>
          <div>
            <p className="eyebrow mb-3 text-butter">Follow along</p>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="block font-serif text-xl text-cream/85 hover:text-blush">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" className="block font-serif text-xl text-cream/85 hover:text-blush">Facebook</a>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <span className="rounded-[50%] border border-cream/50 px-8 py-3 eyebrow text-cream/80">Made with love · Frances Decor</span>
        </div>
        <p className="mt-6 text-center font-mono text-xs text-cream/50">© {new Date().getFullYear()} Frances Decor. All rights reserved.</p>
      </div>
    </footer>
  )
}
