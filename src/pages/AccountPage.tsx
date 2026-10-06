import { useState, type FormEvent } from 'react'
import { Seo } from '../components/ui/Seo'
import { Button } from '../components/ui/Button'
import { formatPrice } from '../lib/utils'
import type { PlacedOrder } from '../types'

const ACCOUNT_KEY = 'mamashay-account'

export function AccountPage() {
  const [email, setEmail] = useState(localStorage.getItem(ACCOUNT_KEY) ?? '')
  const [saved, setSaved] = useState(Boolean(localStorage.getItem(ACCOUNT_KEY)))
  const orders: PlacedOrder[] = (() => {
    try {
      return JSON.parse(localStorage.getItem('mamashay-orders') ?? '[]') as PlacedOrder[]
    } catch {
      return []
    }
  })()

  function submit(event: FormEvent) {
    event.preventDefault()
    localStorage.setItem(ACCOUNT_KEY, email)
    setSaved(true)
  }

  return (
    <div className="bg-surface py-10">
      <Seo title="My Account | Mamashay" description="Sign in to this demo storefront and review orders saved on your device." />
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy">My account</h1>
        <p className="mt-2 text-sm text-muted">
          This is a frontend demo. There is no password server. Your email is stored only in this browser so returning visitors can see local order history.
        </p>
        <form onSubmit={submit} className="mt-6 rounded-2xl border border-line bg-white p-6">
          <label className="text-sm font-medium">
            Email
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 h-11 w-full rounded-md border border-line px-3" />
          </label>
          <Button type="submit" className="mt-4">
            {saved ? 'Update account' : 'Save account'}
          </Button>
        </form>
        <h2 className="mt-10 text-xl font-extrabold text-navy">Orders on this device</h2>
        {orders.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No orders yet. Place a demo checkout to see it here.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((order) => (
              <li key={order.id} className="rounded-xl border border-line bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-orange">{formatPrice(order.total)}</p>
                </div>
                <p className="text-xs text-muted">{new Date(order.createdAt).toLocaleString()}</p>
                <p className="mt-1 text-sm">{order.items.map((item) => `${item.name} × ${item.quantity}`).join(', ')}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
