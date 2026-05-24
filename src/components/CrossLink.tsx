import { Link } from 'react-router-dom'

interface CrossLinkProps {
  label: string
  to: string
}

export default function CrossLink({ label, to }: CrossLinkProps) {
  return (
    <div className="border-t border-ink-rule py-6 md:py-8">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <p className="text-base text-ink-quiet">
          {label}{' '}
          <Link
            to={to}
            className="text-ink text-[13px] font-body tracking-[0.02em] underline underline-offset-[3px] decoration-ink decoration-[1px] transition-opacity duration-200 hover:opacity-75"
          >
            {to} →
          </Link>
        </p>
      </div>
    </div>
  )
}
