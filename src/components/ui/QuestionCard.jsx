import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Tape } from './Decor'
import { contact } from '../../data/site'

// "Do you have any question?" taped card over candy stripes.
export default function QuestionCard() {
  return (
    <section className="relative overflow-hidden stripes py-24" style={{ '--s1': '#f6c9cf', '--s2': '#fbf3e6' }}>
      <motion.div
        className="relative mx-auto max-w-md bg-crimson px-8 py-12 text-center text-cream shadow-2xl"
        initial={{ y: 60, rotate: -4, opacity: 0 }}
        whileInView={{ y: 0, rotate: 1.5, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 90, damping: 13 }}
      >
        <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" color="bg-cream/80" />
        <h2 className="font-script text-5xl">Do you have any question?</h2>
        <p className="mt-4 text-lg italic text-cream/85">
          Send us a message at anytime and we’ll get back to you as soon as possible.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <a href={`mailto:${contact.email}`} className="font-mono text-sm underline decoration-blush underline-offset-4">{contact.email}</a>
          <Link to="/contact" className="rounded-[50%] border border-cream/70 px-7 py-2.5 eyebrow transition hover:bg-cream hover:text-crimson">
            Ask away
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
