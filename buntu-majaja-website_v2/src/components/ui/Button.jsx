import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40'

const variants = {
  solid: 'bg-ink text-paper hover:bg-earth',
  light: 'bg-paper text-ink hover:bg-white',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  ghostLight: 'border border-paper/40 text-paper hover:bg-paper hover:text-ink',
}

/**
 * Pill button. `to` renders an internal router link, `href` an anchor
 * (absolute http links open in a new tab unless `external={false}`), otherwise a <button>.
 */
export default function Button({ variant = 'solid', to, href, external, className, children, ...props }) {
  const classes = cn(base, variants[variant], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    const newTab = external ?? /^https?:\/\//.test(href)
    return (
      <a href={href} className={classes} {...(newTab && { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
