import { ProductCard } from './ProductCard'
import type { Product } from '../../types'

export function ProductGrid({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? 'grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4'
          : 'grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
