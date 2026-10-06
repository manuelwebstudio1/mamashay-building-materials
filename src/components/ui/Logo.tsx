import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center" aria-label="Mamashay home">
      <img
        src="/logo.png"
        alt="Mamashay Plumbing & Building Materials"
        className={cn(
          'w-auto object-contain object-left',
          compact ? 'h-9 max-w-[150px] sm:h-10 sm:max-w-[210px]' : 'h-10 max-w-[180px] sm:h-11 sm:max-w-[260px] lg:h-12 lg:max-w-[300px]',
          light && 'rounded-md bg-white p-1.5',
        )}
      />
    </Link>
  )
}
