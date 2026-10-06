import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function SectionHeader({
  title,
  subtitle,
  actionTo,
  actionLabel,
  className,
}: {
  title: string
  subtitle?: string
  actionTo?: string
  actionLabel?: string
  className?: string
}) {
  return (
    <div className={cn('mb-8 flex flex-wrap items-end justify-between gap-3', className)}>
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-[28px]">{title}</h2>
        {subtitle && <p className="mt-1.5 max-w-xl text-sm text-muted">{subtitle}</p>}
      </div>
      {actionTo && actionLabel && (
        <Link to={actionTo} className="text-sm font-semibold text-navy hover:text-orange">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
