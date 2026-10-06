import { Button } from './Button'
import type { ReactNode } from 'react'

export function EmptyState({
  title,
  message,
  actionTo,
  actionLabel,
  icon,
}: {
  title: string
  message: string
  actionTo?: string
  actionLabel?: string
  icon?: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-line bg-white px-6 py-16 text-center">
      {icon && <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-orange-soft text-orange">{icon}</div>}
      <h2 className="text-xl font-extrabold uppercase tracking-wide text-navy">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{message}</p>
      {actionTo && actionLabel && (
        <Button to={actionTo} className="mt-6">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
