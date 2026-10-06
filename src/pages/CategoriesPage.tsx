import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { CategoryGrid } from '../components/category/CategoryGrid'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CategoryCardSkeleton } from '../components/ui/Skeleton'
import { useRouteLoading } from '../hooks/useRouteLoading'

export function CategoriesPage() {
  const loading = useRouteLoading(220)
  return (
    <div className="bg-surface py-10">
      <Seo
        title="Product Categories | Mamashay"
        description="Shop plumbing, sanitary ware, building materials, power tools, electrical, water systems and hardware."
      />
      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Categories' }]} />
        <SectionHeader
          title="Shop by category"
          subtitle="Eight core ranges covering a typical Ghanaian building and plumbing job."
        />
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <CategoryGrid />
        )}
      </div>
    </div>
  )
}
