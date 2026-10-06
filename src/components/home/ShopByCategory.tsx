import { CategoryCard } from '../category/CategoryCard'
import { CategoryGrid } from '../category/CategoryGrid'
import { SectionHeader } from '../ui/SectionHeader'
import { categories } from '../../data/categories'

export function ShopByCategory() {
  return (
    <section className="bg-white py-14">
      <div className="container-site">
        <SectionHeader
          title="Shop by category"
          subtitle="Everything you need for your next project."
          actionTo="/categories"
          actionLabel="View all categories"
        />
        <div className="hidden sm:block">
          <CategoryGrid />
        </div>
        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:hidden">
          {categories.map((category) => (
            <div key={category.slug} className="w-[78%] min-w-[260px] shrink-0">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
