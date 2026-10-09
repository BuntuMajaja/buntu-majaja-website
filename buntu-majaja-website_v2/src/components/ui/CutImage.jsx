import { cn } from '@/lib/utils'

/**
 * Photo with the site's signature cut corner. `corner` is 'tr' (top right) or 'bl' (bottom left);
 * `cut` is the notch size in px. The wrapper sets the aspect ratio, so there is no layout shift.
 */
export default function CutImage({ src, alt, corner = 'tr', cut = 56, ratio = '4 / 5', className, imgClassName, priority, ...props }) {
  return (
    <div
      className={cn('relative overflow-hidden bg-manila', corner === 'bl' ? 'cut-bl' : 'cut', className)}
      style={{ '--cut': `${cut}px`, aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={cn('absolute inset-0 h-full w-full object-cover', imgClassName)}
        {...props}
      />
    </div>
  )
}
