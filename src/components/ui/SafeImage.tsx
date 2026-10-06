import { useState } from 'react'
import { cn } from '../../lib/utils'

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function SafeImage({ src, alt, className, imgClassName }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn('grid place-items-center bg-surface text-muted', className)}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-xs font-medium uppercase tracking-wider">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn('h-full w-full object-cover', imgClassName, className)}
    />
  )
}
