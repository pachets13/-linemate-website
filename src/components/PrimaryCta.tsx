interface PrimaryCtaProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function PrimaryCta({ label, onClick, type = 'button' }: PrimaryCtaProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center gap-[10px] bg-blood text-cream px-[22px] py-[14px] font-body text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-[120ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-[0.92] hover:translate-y-[1px] active:translate-y-[1px]"
    >
      <span className="w-[7px] h-[7px] rounded-full bg-cream" aria-hidden="true" />
      {label}
    </button>
  )
}
