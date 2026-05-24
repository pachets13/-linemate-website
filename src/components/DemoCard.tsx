import { useState, useRef } from 'react'
import { sendCoachMessage, type CoachMessage } from '../lib/api'
import Wordmark from './Wordmark'

const SCRIPTED_FIRST_MESSAGE = "Hey — I'm Linemate. Before I can actually be useful, tell me one thing: when's your next game, and what does the day before it usually look like for you?"

const SUGGESTED_PROMPTS = [
  "I felt heavy in the third last night.",
  "I'm in a billet. They cook dinner but I'm on my own for the rest.",
  "Long bus trip Saturday. What do I do?",
]

const CLOSING_MESSAGE = "This is where the demo wraps. The real version remembers what we just talked about and picks up next time. Want in?"

export default function DemoCard() {
  const [messages, setMessages] = useState<CoachMessage[]>([
    { role: 'assistant', content: SCRIPTED_FIRST_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [turnsUsed, setTurnsUsed] = useState(0)
  const [loading, setLoading] = useState(false)
  const [ended, setEnded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const sessionId = useRef(crypto.randomUUID())
  const lastSendTime = useRef(0)

  const turnsLeft = 3 - turnsUsed

  const send = async (text: string) => {
    if (!text.trim() || loading || ended) return
    if (text.length > 1000) return

    const now = Date.now()
    if (now - lastSendTime.current < 2000) return
    lastSendTime.current = now

    const userMessage: CoachMessage = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setError(null)
    setLoading(true)

    const newTurnsUsed = turnsUsed + 1

    if (newTurnsUsed >= 3) {
      setTurnsUsed(3)
      setMessages([...newMessages, { role: 'assistant', content: CLOSING_MESSAGE }])
      setEnded(true)
      setLoading(false)
      return
    }

    try {
      const response = await sendCoachMessage(newMessages, sessionId.current)

      if (response.error) {
        if (response.error === 'limit_reached') {
          setMessages([...newMessages, { role: 'assistant', content: CLOSING_MESSAGE }])
          setEnded(true)
        } else if (response.error === 'rate_limited') {
          setError("One sec — give the coach a moment.")
        } else {
          setError("The demo's having a moment. Try again, or hop on the waiting list below.")
        }
      } else if (response.reply) {
        setMessages([...newMessages, { role: 'assistant', content: response.reply }])
        setTurnsUsed(newTurnsUsed)
        if (response.turnsRemaining !== undefined && response.turnsRemaining <= 0) {
          setEnded(true)
        }
      }
    } catch {
      setError("The demo's having a moment. Try again, or hop on the waiting list below.")
    }

    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  return (
    <section id="demo" className="border-t border-ink-rule py-15 md:py-15">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10 flex justify-center">
        <div className="w-full max-w-[520px] bg-white p-3" style={{ border: '0.5px solid var(--ink-rule)' }}>
          {/* Header */}
          <div className="flex items-center justify-between pb-2" style={{ borderBottom: '0.5px solid var(--ink-hair)' }}>
            <Wordmark size="small" />
            <span className="text-sm text-ink-quiet font-body">
              {turnsLeft} turn{turnsLeft !== 1 ? 's' : ''} left
            </span>
          </div>

          {/* Messages */}
          <div className="py-3 space-y-2 max-h-[360px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-2 py-1.5 text-base rounded-[6px] ${
                    msg.role === 'user'
                      ? 'bg-ink text-cream max-w-[80%]'
                      : 'bg-cream text-ink max-w-[90%]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-cream text-ink-quiet px-2 py-1.5 rounded-[6px] text-base">
                  ...
                </div>
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-ink-muted px-1 pb-1.5">{error}</p>
          )}

          {/* Suggested prompts */}
          {turnsUsed === 0 && !loading && (
            <div className="flex flex-wrap gap-1 pb-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="font-body text-[12px] text-ink px-[10px] py-[6px] transition-colors"
                  style={{
                    border: '0.5px solid var(--ink-rule)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(20,22,26,0.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input area or CTA */}
          {ended ? (
            <div className="pt-2" style={{ borderTop: '0.5px solid var(--ink-hair)' }}>
              <a
                href="#cta"
                className="inline-flex items-center gap-[10px] bg-blood text-cream px-[22px] py-[14px] font-body text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-[120ms] hover:opacity-[0.92] hover:translate-y-[1px]"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-cream" aria-hidden="true" />
                Join the waiting list
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-2 flex gap-1.5" style={{ borderTop: '0.5px solid var(--ink-hair)' }}>
              <label className="sr-only" htmlFor="demo-input">Your message</label>
              <input
                id="demo-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="Type a message..."
                disabled={loading}
                className="flex-1 bg-transparent border-none outline-none text-base font-body text-ink placeholder:text-ink-quiet"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-puck text-cream px-2 py-[6px] rounded-[2px] text-[12px] font-body font-medium tracking-[0.06em] uppercase disabled:opacity-40"
              >
                Send
              </button>
            </form>
          )}

          {/* Ephemeral notice */}
          <p className="mt-2 text-[11px] text-ink-hint text-center font-body tracking-[0.02em]">
            This is a 60-second taste. Your conversation isn't saved.
          </p>
        </div>
      </div>
    </section>
  )
}
