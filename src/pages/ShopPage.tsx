import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ProductGrid } from '../components/product/ProductGrid'
import { ProductFilters, type FilterState } from '../components/product/ProductFilters'
import { ProductCardSkeleton } from '../components/ui/Skeleton'
import { EmptyState } from '../components/ui/EmptyState'
import { filterProducts } from '../lib/catalog'
import { useRouteLoading } from '../hooks/useRouteLoading'
import type { SortOption } from '../types'
import { Button } from '../components/ui/Button'

const sorts: Array<{ value: SortOption; label: string }> = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price low → high' },
  { value: 'price-desc', label: 'Price high → low' },
  { value: 'rating', label: 'Highest rated' },
]

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const loading = useRouteLoading()

  const query = params.get('q') ?? ''
  const selected = (params.get('category') ?? '').split(',').filter(Boolean)
  const sort = (params.get('sort') as SortOption) || 'featured'
  const availability = (params.get('availability') as FilterState['availability']) || 'all'
  const maxPrice = Number(params.get('max') ?? 5000)

  const filterValue: FilterState = {
    query,
    selected,
    minPrice: 0,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : 5000,
    availability,
  }

  const selectedKey = selected.join(',')
  const results = useMemo(
    () =>
      filterProducts({
        query,
        categories: selectedKey ? selectedKey.split(',') : [],
        minPrice: 0,
        maxPrice: filterValue.maxPrice,
        availability,
        sort,
      }),
    [query, selectedKey, availability, sort, filterValue.maxPrice],
  )

  function applyFilters(next: FilterState) {
    const nextParams = new URLSearchParams(params)
    if (next.query) nextParams.set('q', next.query)
    else nextParams.delete('q')
    if (next.selected.length) nextParams.set('category', next.selected.join(','))
    else nextParams.delete('category')
    if (next.availability !== 'all') nextParams.set('availability', next.availability)
    else nextParams.delete('availability')
    if (next.maxPrice !== 5000) nextParams.set('max', String(next.maxPrice))
    else nextParams.delete('max')
    setParams(nextParams)
    setFiltersOpen(false)
  }

  function onFilterChange(next: FilterState) {
    applyFilters(next)
  }

  return (
    <div className="bg-surface py-8 sm:py-10">
      <Seo
        title="Shop All Products | Mamashay Plumbing & Building Materials"
        description="Browse plumbing supplies, building materials, tools and sanitary ware. Filter by category, price and availability."
      />
      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold text-navy">Shop all products</h1>
            <p className="mt-1 text-sm text-muted">Quality materials, tools and plumbing products for every project.</p>
          </div>
          <p className="text-sm text-muted">{results.length} products found</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <ProductFilters value={filterValue} onChange={onFilterChange} />
          </div>
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <Button variant="outline" className="lg:hidden" onClick={() => setFiltersOpen(true)}>
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              <label className="ml-auto flex items-center gap-2 text-sm">
                <span className="text-muted">Sort by</span>
                <select
                  value={sort}
                  onChange={(event) => {
                    const next = new URLSearchParams(params)
                    next.set('sort', event.target.value)
                    setParams(next)
                  }}
                  className="h-10 rounded-md border border-line bg-white px-3"
                >
                  {sorts.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {loading ? (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3">
                {Array.from({ length: 9 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : results.length === 0 ? (
              <EmptyState
                title="No products found"
                message="Try searching for another product or category."
                actionTo="/shop"
                actionLabel="Clear search"
              />
            ) : (
              <ProductGrid products={results} compact />
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" className="absolute inset-0 bg-navy/50" aria-label="Close filters" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-extrabold text-navy">Filters</h2>
              <button type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <ProductFilters value={filterValue} onChange={onFilterChange} onApply={() => setFiltersOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
