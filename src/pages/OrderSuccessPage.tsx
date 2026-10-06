import { useMemo } from 'react'
import { Seo } from '../components/ui/Seo'
import { Button } from '../components/ui/Button'
import { formatPrice } from '../lib/utils'
import type { PlacedOrder } from '../types'
import { siteConfig } from '../data/siteConfig'

export function OrderSuccessPage() {
  const order = useMemo(() => {
    try {
      const raw = sessionStorage.getItem('mamashay-last-order')
      return raw ? (JSON.parse(raw) as PlacedOrder) : null
    } catch {
      return null
    }
  }, [])

  return (
    <div className="bg-surface py-12">
      <Seo title="Order Received | Mamashay" description="Thank you for shopping with Mamashay." />
      <div className="container-site max-w-3xl">
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Order received</p>
          <h1 className="mt-2 text-3xl font-extrabold text-navy">Thank you for shopping with Mamashay.</h1>
          <p className="mt-3 text-sm text-muted">Your order has been received. This is a demo confirmation — no payment was taken.</p>
          {order ? (
            <div className="mt-6 space-y-4">
              <p className="text-sm">
                <span className="font-semibold">Order number:</span> {order.id}
              </p>
              <ul className="divide-y divide-line rounded-xl border border-line">
                {order.items.map((item) => (
                  <li key={item.productId} className="flex justify-between px-4 py-3 text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-extrabold text-navy">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
              <div className="rounded-xl bg-surface p-4 text-sm text-muted">
                <p className="font-semibold text-navy">Delivery</p>
                <p>
                  {order.customer.firstName} {order.customer.lastName}, {order.customer.address}, {order.customer.city},{' '}
                  {order.customer.region}
                </p>
                <p className="mt-1">{order.customer.phone} · {order.customer.email}</p>
                <p className="mt-1">
                  Payment: {order.customer.paymentMethod === 'momo' ? 'Mobile Money' : order.customer.paymentMethod === 'bank' ? 'Bank transfer' : 'Cash on delivery'}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">No recent order was found on this device.</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/shop">Continue shopping</Button>
            <Button to="/contact" variant="navy">
              Contact us
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted">Questions? Call {siteConfig.phone} or use WhatsApp.</p>
        </div>
      </div>
    </div>
  )
}
