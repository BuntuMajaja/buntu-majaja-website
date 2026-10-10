import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footer, nav, social } from '@/content/site'
import { icons } from '@/lib/icons'

/** Weighted-random globe for the closing signature (design system: 50% / 30% / 20%). */
function pickGlobe() {
  const r = Math.random()
  return r < 0.5 ? '🌍' : r < 0.8 ? '🌏' : '🌎'
}

export function SocialLinks({ className = '', tone = 'ink' }) {
  const color = tone === 'paper' ? 'text-paper/70 hover:text-paper' : 'text-ink/55 hover:text-ink'
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {social.map((item) => {
        const Icon = icons[item.icon]
        return (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${color}`}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Footer() {
  const [globe] = useState(pickGlobe)
  return (
    <footer className="gutter pb-10 pt-32 sm:pt-44">
      <p className="t-h2 max-w-[18ch]">
        {footer.signature} <span aria-hidden="true">{globe}</span>
      </p>
      <div className="mt-16 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2 text-[15px]">
          <Link to="/" className="text-ink/70 hover:text-ink">Home</Link>
          {nav.map((item) => (
            <Link key={item.path} to={item.path} className="text-ink/70 hover:text-ink">{item.name}</Link>
          ))}
          <Link to="/explore" className="text-ink/70 hover:text-ink">Explore</Link>
          <Link to="/book-buntu" className="text-ink/70 hover:text-ink">Book Buntu</Link>
          <Link to="/privacy" className="text-ink/70 hover:text-ink">Privacy Policy</Link>
        </nav>
        <SocialLinks className="-ml-3 md:ml-0" />
      </div>
      <p className="t-small mt-6">
        © {new Date().getFullYear()} Majaja Corp (Pty) Ltd t/a {footer.copyrightHolder} Johannesburg. {footer.line}
      </p>
    </footer>
  )
}
