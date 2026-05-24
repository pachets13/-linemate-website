interface SecondaryCtaProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'dark' | 'light'
}

export default function SecondaryCta({ label, href, onClick, variant = 'dark' }: SecondaryCtaProps) {
  const colorClass = variant === 'light'
    ? 'text-cream decoration-cream'
    : 'text-ink decoration-ink'

  const className = `${colorClass} text-[13px] font-body tracking-[0.02em] underline underline-offset-[3px] decoration-[1px] transition-opacity duration-200 hover:opacity-75`

  if (href) {
    return <a href={href} className={className}>{label}</a>
  }

  return <button type="button" onClick={onClick} className={className}>{label}</button>
}
