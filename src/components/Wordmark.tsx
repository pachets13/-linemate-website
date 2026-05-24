interface WordmarkProps {
  size?: 'default' | 'small'
  color?: 'dark' | 'light'
}

export default function Wordmark({ size = 'default', color = 'dark' }: WordmarkProps) {
  const fill = color === 'dark' ? 'var(--puck)' : 'var(--cream)'
  const lineW = size === 'small' ? 14 : 22
  const lineH = size === 'small' ? 1.5 : 2
  const gap = size === 'small' ? 2 : 3
  const textSize = size === 'small' ? 'text-sm' : 'text-lg'

  return (
    <a href="/" className="flex items-center gap-[10px] no-underline" aria-label="Linemate home">
      <svg
        width={lineW}
        height={lineH * 2 + gap}
        viewBox={`0 0 ${lineW} ${lineH * 2 + gap}`}
        fill="none"
        aria-hidden="true"
      >
        <rect width={lineW} height={lineH} fill={fill} />
        <rect y={lineH + gap} width={lineW} height={lineH} fill={fill} />
      </svg>
      <span
        className={`font-display font-medium tracking-[0.01em] uppercase ${textSize}`}
        style={{ color: fill }}
      >
        LINEMATE
      </span>
    </a>
  )
}
