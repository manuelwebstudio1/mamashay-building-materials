import { ProductGrid } from '../product/ProductGrid'
import { SectionHeader } from '../ui/SectionHeader'
import { getFeaturedProducts } from '../../data/products'

export function FeaturedProducts() {
  return (
    <section className="bg-surface py-14">
      <div className="container-site">
        <SectionHeader
          title="Featured products"
          subtitle="Quality products. Competitive prices. Built for the job."
          actionTo="/shop"
          actionLabel="View all products"
        />
        <ProductGrid products={getFeaturedProducts().slice(0, 8)} />
      </div>
    </section>
  )
}
