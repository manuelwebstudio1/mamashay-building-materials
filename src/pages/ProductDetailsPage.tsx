import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { flushSync } from 'react-dom'
import { Check, ShoppingCart } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, getDiscountPercent } from '../data/products'
import { getCategory } from '../data/categories'
import { formatPrice } from '../lib/utils'
import { useCart } from '../context/CartContext'
import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { StarRating } from '../components/ui/StarRating'
import { ProductGallery } from '../components/product/ProductGallery'
import { ProductTabs } from '../components/product/ProductTabs'
import { ProductGrid } from '../components/product/ProductGrid'
import { ProductDetailsSkeleton } from '../components/ui/Skeleton'
import { EmptyState } from '../components/ui/EmptyState'
import { useRouteLoading } from '../hooks/useRouteLoading'

export function ProductDetailsPage() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const loading = useRouteLoading(280)
  const { addItem } = useCart()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (loading) {
    return (
      <div className="container-site py-10">
        <ProductDetailsSkeleton />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container-site py-16">
        <EmptyState
          title="Product not found"
          message="This product is unavailable or the link is incorrect."
          actionTo="/shop"
          actionLabel="Back to shop"
        />
      </div>
    )
  }

  const active = product
  const category = getCategory(active.category)
  const discount = getDiscountPercent(active)
  const related = getRelatedProducts(active, 4)

  function add(goCheckout = false) {
    flushSync(() => {
      addItem(active.id, qty)
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
    if (goCheckout) navigate('/checkout')
  }

  return (
    <div className="bg-surface pb-24 lg:pb-12">
      <Seo
        title={`${product.name} | Mamashay`}
        description={product.shortDescription}
      />
      <div className="container-site py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Shop', to: '/shop' },
            { label: category?.name ?? 'Product', to: `/shop?category=${product.category}` },
            { label: product.name },
          ]}
        />
        <div className="grid gap-8 rounded-2xl bg-white p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
          <ProductGallery images={product.images} alt={product.name} />
          <div>
            {discount > 0 && (
              <span className="inline-flex rounded bg-orange px-2 py-0.5 text-[11px] font-bold text-white">{discount}% OFF</span>
            )}
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted">{product.brand}</p>
            <h1 className="mt-1 text-3xl font-extrabold text-navy">{product.name}</h1>
            <div className="mt-2">
              <StarRating rating={product.rating} count={product.reviewCount} size="md" />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-orange">{formatPrice(product.price)}</span>
              {product.oldPrice && <span className="text-muted line-through">{formatPrice(product.oldPrice)}</span>}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{product.shortDescription}</p>
            <ul className="mt-4 space-y-1 text-sm text-navy">
              {product.specs.slice(0, 4).map((spec) => (
                <li key={spec.label}>• {spec.label}: {spec.value}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              {product.inStock ? (
                <span className="font-semibold text-emerald-600">In stock · {product.stockCount} available</span>
              ) : (
                <span className="font-semibold text-orange">Currently out of stock</span>
              )}
            </p>
            <div className="mt-6 hidden items-center gap-3 lg:flex">
              <QuantitySelector value={qty} onChange={setQty} />
              <Button className="min-w-40" disabled={!product.inStock} onClick={() => add(false)}>
                {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingCart className="h-4 w-4" /> Add to cart</>}
              </Button>
              <Button variant="navy" disabled={!product.inStock} onClick={() => add(true)}>
                Buy now
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">Need a project quotation? <Link to="/contact" className="font-semibold text-orange">Contact us</Link>.</p>
          </div>
        </div>
        <ProductTabs product={product} />
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-extrabold text-navy">You may also like</h2>
          <ProductGrid products={related} />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white p-3 lg:hidden">
        <div className="flex items-center gap-3">
          <p className="font-extrabold text-orange">{formatPrice(product.price)}</p>
          <QuantitySelector value={qty} onChange={setQty} />
          <Button className="flex-1" disabled={!product.inStock} onClick={() => add(false)}>
            {added ? 'Added' : 'Add to cart'}
          </Button>
        </div>
      </div>
    </div>
  )
}
