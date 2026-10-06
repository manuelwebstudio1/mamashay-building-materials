import { Link } from 'react-router-dom'
import { Trash2, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useUi } from '../../context/UiContext'
import { getCartProducts } from '../../lib/catalog'
import { formatPrice } from '../../lib/utils'
import { Button } from '../ui/Button'
import { QuantitySelector } from '../ui/QuantitySelector'
import { SafeImage } from '../ui/SafeImage'

export function CartDrawer() {
  const { cartOpen, closeCart } = useUi()
  const { items, setQuantity, removeItem, subtotal, delivery, total } = useCart()
  const lines = getCartProducts(items)

  if (!cartOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-navy/50" aria-label="Close cart" onClick={closeCart} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl animate-[slide-in-right_0.25s_ease]">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-lg font-extrabold text-navy">Your cart</h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="grid h-10 w-10 place-items-center">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-extrabold uppercase tracking-wide text-navy">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted">Start shopping to find products for your next project.</p>
              <Button to="/shop" className="mt-6" onClick={closeCart}>
                Shop products
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 border-b border-line pb-4">
                  <Link to={`/product/${product.slug}`} onClick={closeCart} className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface">
                    <SafeImage src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/product/${product.slug}`} onClick={closeCart} className="text-sm font-semibold text-navy">
                        {product.name}
                      </Link>
                      <button type="button" aria-label="Remove" onClick={() => removeItem(product.id)} className="text-muted hover:text-orange">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm font-bold text-orange">{formatPrice(product.price)}</p>
                    <div className="mt-2">
                      <QuantitySelector value={quantity} onChange={(value) => setQuantity(product.id, value)} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {lines.length > 0 && (
          <div className="border-t border-line p-5">
            <div className="mb-4 space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted">Delivery</span><span>{delivery === 0 ? 'Free' : formatPrice(delivery)}</span></div>
              <div className="flex justify-between text-base font-extrabold text-navy"><span>Total</span><span>{formatPrice(total)}</span></div>
            </div>
            <Button to="/checkout" className="w-full" onClick={closeCart}>
              Proceed to checkout
            </Button>
            <Button to="/cart" variant="outline" className="mt-2 w-full" onClick={closeCart}>
              View cart
            </Button>
          </div>
        )}
      </aside>
    </div>
  )
}
