import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Category } from '../../types'
import { SafeImage } from '../ui/SafeImage'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="group overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,31,58,0.10)]"
    >
      <div className="relative h-40 overflow-hidden sm:h-44">
        <SafeImage
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-navy">{category.name}</h3>
        <p className="mt-1 text-sm text-muted">{category.short}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">
          Shop category
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
