import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Heart, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { formatPrice } from '../../lib/utils'
import type { Product } from '../../types'
import { SafeImage } from '../ui/SafeImage'
import { StarRating } from '../ui/StarRating'
import { Button } from '../ui/Button'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { toggle, has } = useWishlist()
  const [added, setAdded] = useState(false)
  const wished = has(product.id)

  function handleAdd() {
    if (!product.inStock) return
    addItem(product.id, 1)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,31,58,0.10)]">
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Link to={`/product/${product.slug}`} className="block h-full w-full">
          <SafeImage
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded bg-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded bg-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Out of stock
          </span>
        )}
        <button
          type="button"
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => toggle(product.id)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-muted shadow-sm hover:text-orange"
        >
          <Heart className={`h-4 w-4 ${wished ? 'fill-orange text-orange' : ''}`} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{product.brand}</p>
        <Link to={`/product/${product.slug}`} className="mt-0.5 line-clamp-2 font-semibold text-navy hover:text-orange">
          {product.name}
        </Link>
        <p className="mt-0.5 text-[11px] text-muted">{product.category.replace('-', ' ')}</p>
        <div className="mt-2">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-extrabold text-orange">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <Button
          className="mt-3 w-full"
          size="sm"
          disabled={!product.inStock}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added to cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" /> Add to cart
            </>
          )}
        </Button>
      </div>
    </article>
  )
}
