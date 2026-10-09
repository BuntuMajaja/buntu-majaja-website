import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge class names, letting later Tailwind classes override earlier ones. */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** Smooth-scroll to an element by CSS selector (e.g. '#about'). */
export function scrollToSection(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

/** URL-safe slug used for portfolio deep links (?project=<slug>). Must stay stable. */
export function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
}
