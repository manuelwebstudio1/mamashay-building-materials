import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { OrderSummary } from '../components/cart/OrderSummary'
import { EmptyState } from '../components/ui/EmptyState'
import { useCart } from '../context/CartContext'
import { getCartProducts } from '../lib/catalog'
import type { CheckoutDetails, PlacedOrder } from '../types'

const regions = ['Greater Accra', 'Ashanti', 'Eastern', 'Central', 'Western', 'Volta', 'Northern']

export function CheckoutPage() {
  const { items, subtotal, delivery, total, clear } = useCart()
  const lines = getCartProducts(items)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [form, setForm] = useState<CheckoutDetails>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Accra',
    region: 'Greater Accra',
    notes: '',
    paymentMethod: 'momo',
  })

  function update<K extends keyof CheckoutDetails>(key: K, value: CheckoutDetails[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    if (lines.length === 0) return
    if (!form.firstName || !form.lastName || !form.phone || !form.email || !form.address) {
      setError('Please complete the required billing and delivery fields.')
      return
    }
    const order: PlacedOrder = {
      id: `MS-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      items: lines.map(({ product, quantity }) => ({
        productId: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        quantity,
      })),
      customer: form,
      subtotal,
      delivery,
      total,
    }
    sessionStorage.setItem('mamashay-last-order', JSON.stringify(order))
    const historyRaw = localStorage.getItem('mamashay-orders')
    const history = historyRaw ? (JSON.parse(historyRaw) as PlacedOrder[]) : []
    localStorage.setItem('mamashay-orders', JSON.stringify([order, ...history].slice(0, 20)))
    clear()
    navigate('/order-success')
  }

  if (lines.length === 0) {
    return (
      <div className="container-site py-16">
        <EmptyState
          title="Your cart is empty"
          message="Add products before checking out."
          actionTo="/shop"
          actionLabel="Shop products"
        />
      </div>
    )
  }

  return (
    <div className="bg-surface py-10">
      <Seo title="Checkout | Mamashay" description="Complete your Mamashay order with Mobile Money, bank transfer or cash on delivery." />
      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart', to: '/cart' }, { label: 'Checkout' }]} />
        <h1 className="mb-6 text-3xl font-extrabold text-navy">Checkout</h1>
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="text-lg font-extrabold text-navy">Billing / delivery</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="First name" value={form.firstName} onChange={(value) => update('firstName', value)} />
                <Field label="Last name" value={form.lastName} onChange={(value) => update('lastName', value)} />
                <Field label="Phone" value={form.phone} onChange={(value) => update('phone', value)} />
                <Field label="Email" type="email" value={form.email} onChange={(value) => update('email', value)} />
                <label className="text-sm font-medium sm:col-span-2">
                  Address
                  <input required value={form.address} onChange={(event) => update('address', event.target.value)} className="mt-1 h-11 w-full rounded-md border border-line px-3" />
                </label>
                <Field label="City" value={form.city} onChange={(value) => update('city', value)} />
                <label className="text-sm font-medium">
                  Region
                  <select value={form.region} onChange={(event) => update('region', event.target.value)} className="mt-1 h-11 w-full rounded-md border border-line px-3">
                    {regions.map((region) => (
                      <option key={region}>{region}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Notes
                  <textarea value={form.notes} onChange={(event) => update('notes', event.target.value)} rows={3} className="mt-1 w-full rounded-md border border-line px-3 py-2" placeholder="Gate instructions, preferred delivery window..." />
                </label>
              </div>
            </section>
            <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="text-lg font-extrabold text-navy">Payment method</h2>
              <div className="mt-4 space-y-3">
                {[
                  ['momo', 'Mobile Money', 'Pay via MTN MoMo, Telecel or AirtelTigo. Instructions after order.'],
                  ['bank', 'Bank transfer', 'Transfer to the Mamashay account shared on confirmation.'],
                  ['cod', 'Cash on delivery', 'Pay when the order arrives in Accra.'],
                ].map(([key, label, hint]) => (
                  <label key={key} className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${form.paymentMethod === key ? 'border-orange bg-orange-soft' : 'border-line'}`}>
                    <input
                      type="radio"
                      name="pay"
                      checked={form.paymentMethod === key}
                      onChange={() => update('paymentMethod', key as CheckoutDetails['paymentMethod'])}
                      className="mt-1 accent-orange"
                    />
                    <span>
                      <span className="block font-semibold text-navy">{label}</span>
                      <span className="text-sm text-muted">{hint}</span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Demo checkout — no live payment gateway is connected.</p>
            </section>
          </div>
          <div>
            <OrderSummary />
            {error && <p className="mt-3 text-sm text-orange">{error}</p>}
            <Button type="submit" className="mt-4 w-full">
              Place order
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <input required type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 h-11 w-full rounded-md border border-line px-3" />
    </label>
  )
}
