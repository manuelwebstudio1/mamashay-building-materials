import { ProductGrid } from '../product/ProductGrid'
import { SectionHeader } from '../ui/SectionHeader'
import { getBestSellers } from '../../data/products'

export function BestSellers() {
  return (
    <section className="bg-white py-14">
      <div className="container-site">
        <SectionHeader
          title="Best sellers"
          subtitle="The products contractors and homeowners order most often."
          actionTo="/shop?sort=rating"
          actionLabel="Shop top rated"
        />
        <ProductGrid products={getBestSellers().slice(0, 8)} />
      </div>
    </section>
  )
}
