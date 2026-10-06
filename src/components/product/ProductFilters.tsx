import { useEffect, useId, useMemo, useState } from 'react'
import { categories } from '../../data/categories'
import { products } from '../../data/products'
import { Button } from '../ui/Button'

export interface FilterState {
  query: string
  selected: string[]
  minPrice: number
  maxPrice: number
  availability: 'all' | 'in' | 'out'
}

export function ProductFilters({
  value,
  onChange,
  onApply,
}: {
  value: FilterState
  onChange: (next: FilterState) => void
  onApply?: () => void
}) {
  const formId = useId()
  const [local, setLocal] = useState(value)

  const selectedKey = value.selected.join(',')
  useEffect(() => {
    setLocal({
      query: value.query,
      selected: value.selected,
      minPrice: value.minPrice,
      maxPrice: value.maxPrice,
      availability: value.availability,
    })
  }, [value.query, value.maxPrice, value.availability, selectedKey, value.minPrice, value.selected])
  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const product of products) {
      map[product.category] = (map[product.category] ?? 0) + 1
    }
    return map
  }, [])

  function update(partial: Partial<FilterState>) {
    const next = { ...local, ...partial }
    setLocal(next)
    onChange(next)
  }

  function toggleCategory(slug: string) {
    const selected = local.selected.includes(slug)
      ? local.selected.filter((item) => item !== slug)
      : [...local.selected, slug]
    update({ selected })
  }

  const inStock = products.filter((product) => product.inStock).length
  const outStock = products.length - inStock

  return (
    <aside className="rounded-2xl border border-line bg-white p-5">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-navy">Search products</h2>
      <input
        type="search"
        value={local.query}
        onChange={(event) => update({ query: event.target.value })}
        placeholder="Search products..."
        className="mt-3 h-11 w-full rounded-md border border-line px-3 text-sm outline-none focus:border-orange"
      />

      <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wide text-navy">Categories</h3>
      <ul className="mt-3 space-y-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <label className="flex cursor-pointer items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={local.selected.includes(category.slug)}
                  onChange={() => toggleCategory(category.slug)}
                  className="accent-orange"
                />
                {category.name}
              </span>
              <span className="text-muted">({counts[category.slug] ?? 0})</span>
            </label>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wide text-navy">Price range</h3>
      <div className="mt-3 flex items-center justify-between text-xs text-muted">
        <span>GHS 0</span>
        <span>GHS {local.maxPrice}</span>
      </div>
      <input
        type="range"
        min={0}
        max={5000}
        step={50}
        value={local.maxPrice}
        onChange={(event) => update({ maxPrice: Number(event.target.value) })}
        className="mt-2 w-full accent-orange"
        aria-label="Maximum price"
      />

      <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wide text-navy">Availability</h3>
      <div className="mt-3 space-y-2 text-sm">
        {(
          [
            ['all', `All (${products.length})`],
            ['in', `In stock (${inStock})`],
            ['out', `Out of stock (${outStock})`],
          ] as const
        ).map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={`availability-${formId}`}
              checked={local.availability === key}
              onChange={() => update({ availability: key })}
              className="accent-orange"
            />
            {label}
          </label>
        ))}
      </div>

      <Button className="mt-6 w-full" onClick={onApply}>
        Apply filters
      </Button>
    </aside>
  )
}
