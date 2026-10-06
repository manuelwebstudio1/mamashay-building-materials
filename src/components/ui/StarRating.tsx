import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'

export function StarRating({
  rating,
  count,
  size = 'sm',
}: {
  rating: number
  count?: number
  size?: 'sm' | 'md'
}) {
  const icon = size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={cn(icon, index < Math.round(rating) ? 'fill-orange text-orange' : 'text-line')}
          />
        ))}
      </div>
      {typeof count === 'number' && (
        <span className="text-[11px] text-muted">({count})</span>
      )}
    </div>
  )
}
