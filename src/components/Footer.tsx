import Wordmark from './Wordmark'

export default function Footer() {
  return (
    <footer className="border-t border-ink-rule py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Wordmark size="small" />
        <div className="text-sm text-ink-hint font-body">
          <p>Methodology rooted in sport nutrition fundamentals.</p>
        </div>
      </div>
    </footer>
  )
}
