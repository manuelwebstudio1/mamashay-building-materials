import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { EmptyState } from '../components/ui/EmptyState'
import { SafeImage } from '../components/ui/SafeImage'
import { OrderSummary } from '../components/cart/OrderSummary'
import { useCart } from '../context/CartContext'
import { getCartProducts } from '../lib/catalog'
import { formatPrice } from '../lib/utils'

export function CartPage() {
  const { items, setQuantity, removeItem } = useCart()
  const lines = getCartProducts(items)

  return (
    <div className="bg-surface py-10">
      <Seo title="Your Cart | Mamashay" description="Review plumbing and building materials in your Mamashay cart." />
      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
        <h1 className="mb-6 text-3xl font-extrabold text-navy">Your cart</h1>
        {lines.length === 0 ? (
          <EmptyState
            title="Your cart is empty"
            message="Start shopping to find products for your next project."
            actionTo="/shop"
            actionLabel="Shop products"
          />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="rounded-2xl border border-line bg-white p-4 sm:p-6">
              <ul className="divide-y divide-line">
                {lines.map(({ product, quantity }) => (
                  <li key={product.id} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
                    <Link to={`/product/${product.slug}`} className="h-24 w-24 overflow-hidden rounded-lg bg-surface">
                      <SafeImage src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link to={`/product/${product.slug}`} className="font-semibold text-navy hover:text-orange">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-sm font-bold text-orange">{formatPrice(product.price)}</p>
                    </div>
                    <QuantitySelector value={quantity} onChange={(value) => setQuantity(product.id, value)} />
                    <p className="w-24 text-sm font-bold sm:text-right">{formatPrice(product.price * quantity)}</p>
                    <button type="button" aria-label={`Remove ${product.name}`} onClick={() => removeItem(product.id)} className="text-muted hover:text-orange">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
              <Link to="/shop" className="mt-4 inline-block text-sm font-semibold text-navy hover:text-orange">
                ← Continue shopping
              </Link>
            </div>
            <div>
              <OrderSummary />
              <Button to="/checkout" className="mt-4 w-full">
                Proceed to checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
