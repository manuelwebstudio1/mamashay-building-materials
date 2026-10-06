import { formatPrice } from '../../lib/utils'
import { getCartProducts } from '../../lib/catalog'
import { useCart } from '../../context/CartContext'
import { SafeImage } from '../ui/SafeImage'

export function OrderSummary() {
  const { items, subtotal, delivery, total } = useCart()
  const lines = getCartProducts(items)

  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <h2 className="text-lg font-extrabold text-navy">Order summary</h2>
      <ul className="mt-4 space-y-3">
        {lines.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-lg bg-surface">
              <SafeImage src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-muted">Qty {quantity}</p>
            </div>
            <p className="text-sm font-semibold">{formatPrice(product.price * quantity)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Delivery</span>
          <span>{delivery === 0 ? 'Free' : formatPrice(delivery)}</span>
        </div>
        <div className="flex justify-between text-base font-extrabold text-navy">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  )
}
