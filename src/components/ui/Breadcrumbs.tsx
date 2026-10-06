import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ items }: { items: Array<{ label: string; to?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          {item.to ? (
            <Link to={item.to} className="hover:text-orange">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-navy">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
