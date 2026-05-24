import { useState } from 'react'
import { submitWaitlist } from '../lib/api'

interface WaitlistFormProps {
  buttonLabel: string
  successMessage: string
  source: string
  variant?: 'light' | 'dark'
}

export default function WaitlistForm({ buttonLabel, successMessage, source, variant = 'dark' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    await submitWaitlist(email, source)
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <p className={variant === 'dark' ? 'text-cream-muted text-base' : 'text-ink-muted text-base'}>
        {successMessage}
      </p>
    )
  }

  const borderColor = variant === 'dark' ? 'border-cream-rule' : 'border-ink-rule'

  return (
    <form onSubmit={handleSubmit} className={`flex max-w-[440px] border ${borderColor}`}>
      <label className="sr-only" htmlFor={`email-${source}`}>Email address</label>
      <input
        id={`email-${source}`}
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 px-2 py-[14px] bg-transparent border-none outline-none text-base font-body placeholder:opacity-50 ${
          variant === 'dark' ? 'text-cream placeholder:text-cream' : 'text-ink placeholder:text-ink'
        }`}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blood text-cream px-[22px] py-[14px] font-body text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-[120ms] hover:opacity-[0.92] hover:translate-y-[1px] disabled:opacity-50"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
