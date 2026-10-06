import { useState } from 'react'
import { Check, ShoppingCart } from 'lucide-react'
import { getDealOfTheWeek } from '../../data/products'
import { formatPrice } from '../../lib/utils'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'
import { SafeImage } from '../ui/SafeImage'
import { StarRating } from '../ui/StarRating'
import { Link } from 'react-router-dom'

export function DealOfTheWeek() {
  const product = getDealOfTheWeek()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <section className="bg-navy py-14 text-white">
      <div className="container-site grid items-center gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white p-6">
          <SafeImage src={product.images[0]} alt={product.name} className="mx-auto aspect-square max-h-[380px] object-contain" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Deal of the week</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{product.name}</h2>
          <div className="mt-3">
            <StarRating rating={product.rating} count={product.reviewCount} />
          </div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">{product.shortDescription}</p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-black text-orange">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-white/50 line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() => {
                addItem(product.id, 1)
                setAdded(true)
                window.setTimeout(() => setAdded(false), 1600)
              }}
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
            <Button to={`/product/${product.slug}`} variant="outlineLight">
              View details
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/50">
            Limited demo promotion. <Link to="/shop" className="underline">Browse the full catalogue</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
