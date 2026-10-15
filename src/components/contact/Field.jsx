import { useId } from 'react'

// Underlined input with a floating label that lifts when focused or filled.
export default function Field({ label, as = 'input', className = '', ...props }) {
  const id = useId()
  const Tag = as
  return (
    <div className={`relative mt-6 ${className}`}>
      <Tag
        id={id}
        placeholder=" "
        rows={as === 'textarea' ? 4 : undefined}
        className="peer w-full resize-none border-b border-crimson/30 bg-transparent pb-2 pt-5 font-serif text-lg text-crimson outline-none transition-colors focus:border-crimson"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-5 origin-left text-sm text-crimson/60 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.25em]"
      >
        {label}
      </label>
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-crimson transition-transform duration-500 peer-focus:scale-x-100" />
    </div>
  )
}
