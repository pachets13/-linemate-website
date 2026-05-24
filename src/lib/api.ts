const COACH_API_URL = import.meta.env.VITE_COACH_API_URL || 'http://localhost:8787/api/coach'

export interface CoachMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface CoachResponse {
  reply?: string
  turnsRemaining?: number
  error?: 'limit_reached' | 'rate_limited' | 'internal_error'
  message?: string
}

export async function sendCoachMessage(messages: CoachMessage[], sessionId: string): Promise<CoachResponse> {
  const res = await fetch(COACH_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, sessionId }),
  })
  return res.json()
}

// TODO: Replace with real backend. Currently simulates success after 800ms.
export async function submitWaitlist(email: string, source: string): Promise<void> {
  console.log('Waitlist submission:', { email, source })
  await new Promise(resolve => setTimeout(resolve, 800))
}
