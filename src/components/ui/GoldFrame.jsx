// Ornate gilded picture frame built from layered gradients (no image assets needed).
const gold = 'linear-gradient(135deg,#8a6420 0%,#f3d98b 22%,#b8862f 45%,#fbe7a6 62%,#9c7224 82%,#e9c86f 100%)'

export default function GoldFrame({ src, alt = '', className = '', imgClass = 'aspect-[4/5]', oval = false, children }) {
  const round = oval ? 'rounded-[50%]' : 'rounded-sm'
  return (
    <div className={`${className.split(' ').some((c) => c === 'absolute' || c === 'fixed') ? '' : 'relative'} p-3 shadow-[0_18px_40px_rgba(60,20,10,0.35)] sm:p-4 ${round} ${className}`} style={{ background: gold }}>
      <div className={`p-1.5 ${round}`} style={{ background: 'linear-gradient(135deg,#5e4214,#d9b45c,#6d4c18)' }}>
        <div className={`relative overflow-hidden shadow-[inset_0_0_12px_rgba(0,0,0,.5)] ${round} ${imgClass}`}>
          {src ? <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" /> : children}
        </div>
      </div>
      {!oval &&
        ['-left-2 -top-2', '-right-2 -top-2', '-bottom-2 -left-2', '-bottom-2 -right-2'].map((pos) => (
          <span key={pos} className={`absolute ${pos} h-6 w-6 rounded-full shadow-md`} style={{ background: 'radial-gradient(circle at 35% 35%,#fff3c4,#c9a24a 45%,#7a5518)' }} />
        ))}
    </div>
  )
}
