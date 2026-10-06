import { CategoryCard } from './CategoryCard'
import { categories } from '../../data/categories'

export function CategoryGrid({ limit }: { limit?: number }) {
  const list = limit ? categories.slice(0, limit) : categories
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  )
}
