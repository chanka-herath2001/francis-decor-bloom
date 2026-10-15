import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Field from './Field'
import { WaxSeal } from '../ui/Decor'
import { contact } from '../../data/site'

const SERVICES = ['Ceremony arch', 'Reception styling', 'Bridal florals', 'Aisle & entrance', 'Signage & details']

// RSVP-style inquiry. Opens the visitor's email app with everything filled in.
export default function RsvpForm({ date }) {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', guests: '', venue: '', message: '' })
  const [attending, setAttending] = useState('Wedding')
  const [picked, setPicked] = useState([])
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  const submit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.first} ${form.last}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Celebration: ${attending}`,
      `Date: ${date ? date.toDateString() : 'Not decided yet'}`,
      `Venue: ${form.venue || '—'}`,
      `Guests: ${form.guests || '—'}`,
      `Dreaming of: ${picked.join(', ') || '—'}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`${attending} inquiry — ${form.first}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="sent" className="flex min-h-[460px] flex-col items-center justify-center text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <motion.div initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 180, damping: 10 }}>
            <WaxSeal className="h-24 w-24" />
          </motion.div>
          <h3 className="mt-6 font-script text-6xl text-crimson">Thank you!</h3>
          <p className="mt-2 max-w-sm text-lg italic text-cocoa/80">Your email app should have opened with your note ready to send. We can’t wait to hear more.</p>
          <button onClick={() => setSent(false)} className="mt-6 font-mono text-sm text-crimson underline underline-offset-4">edit my note</button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
          <h3 className="font-script text-6xl text-crimson">RSVP</h3>
          <p className="eyebrow mt-1 text-cocoa/60">Let us know what you’re planning</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Wedding', 'Engagement', 'Other celebration'].map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => setAttending(a)}
                className={`rounded-[50%] border px-5 py-2 font-mono text-sm transition-colors ${attending === a ? 'border-crimson bg-crimson text-cream' : 'border-crimson/30 text-cocoa hover:border-crimson'}`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="grid gap-x-6 sm:grid-cols-2">
            <Field label="First name" value={form.first} onChange={set('first')} required autoComplete="given-name" />
            <Field label="Last name" value={form.last} onChange={set('last')} autoComplete="family-name" />
            <Field label="Email" type="email" value={form.email} onChange={set('email')} required autoComplete="email" />
            <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
            <Field label="Venue (if known)" value={form.venue} onChange={set('venue')} />
            <Field label="Number of guests" type="number" min="1" value={form.guests} onChange={set('guests')} />
          </div>

          <p className="eyebrow mt-7 text-cocoa/60">I’m dreaming of</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SERVICES.map((s, i) => (
              <motion.button
                type="button"
                key={s}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggle(s)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition ${picked.includes(s) ? 'bg-crimson text-cream' : `${['bg-blush', 'bg-sky', 'bg-butter', 'bg-sage', 'bg-blush'][i]} text-cocoa hover:brightness-95`}`}
              >
                {picked.includes(s) ? '✓ ' : '+ '}
                {s}
              </motion.button>
            ))}
          </div>

          <Field label="Message to Frances" as="textarea" value={form.message} onChange={set('message')} />
          <p className="mt-4 font-mono text-sm text-cocoa/70">
            Date: <span className="font-hand text-xl text-crimson">{date ? date.toDateString() : 'pick one on the calendar'}</span>
          </p>
          <button type="submit" className="mt-6 bg-cocoa px-10 py-3.5 eyebrow text-cream transition hover:bg-crimson">
            Send RSVP
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
