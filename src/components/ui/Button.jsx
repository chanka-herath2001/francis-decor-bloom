import { Link } from 'react-router-dom'

const styles = {
  crimson: 'bg-crimson text-cream hover:bg-wine',
  cream: 'bg-cream text-crimson hover:bg-blush',
  outline: 'border border-current hover:bg-current/10',
}

// Oval pill button like "Сайт разработан" / "Agenda la fecha" in the references.
export default function Button({ to, href, children, variant = 'crimson', className = '', ...rest }) {
  const cls = `group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[50%] px-6 py-3.5 eyebrow sm:px-9 transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
