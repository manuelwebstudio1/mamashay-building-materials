import { useState } from 'react'
import type { Product } from '../../types'
import { getProductReviews } from '../../lib/reviews'
import { StarRating } from '../ui/StarRating'
import { cn } from '../../lib/utils'

const tabs = ['Description', 'Specifications', 'Reviews', 'Delivery Information'] as const

export function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Description')
  const reviews = getProductReviews(product)

  return (
    <div className="mt-10 rounded-2xl border border-line bg-white">
      <div className="flex gap-1 overflow-x-auto border-b border-line px-3 pt-3 no-scrollbar">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={cn(
              'shrink-0 rounded-t-md px-4 py-2.5 text-sm font-semibold',
              tab === item ? 'bg-surface text-navy' : 'text-muted hover:text-navy',
            )}
          >
            {item}
            {item === 'Reviews' ? ` (${product.reviewCount})` : ''}
          </button>
        ))}
      </div>
      <div className="p-5 sm:p-6">
        {tab === 'Description' && (
          <p className="max-w-3xl text-sm leading-7 text-muted">{product.description}</p>
        )}
        {tab === 'Specifications' && (
          <dl className="grid gap-3 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 rounded-lg bg-surface px-4 py-3">
                <dt className="text-sm text-muted">{spec.label}</dt>
                <dd className="text-sm font-semibold text-navy">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {tab === 'Reviews' && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-xl border border-line p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-navy">{review.name}</p>
                  <span className="text-xs text-muted">{review.date}</span>
                </div>
                <div className="mt-1">
                  <StarRating rating={review.rating} />
                </div>
                <h3 className="mt-2 text-sm font-semibold">{review.title}</h3>
                <p className="mt-1 text-sm text-muted">{review.body}</p>
              </article>
            ))}
          </div>
        )}
        {tab === 'Delivery Information' && (
          <div className="max-w-3xl space-y-3 text-sm leading-7 text-muted">
            <p>
              Delivery in Accra is GHS 50. Orders of GHS 1,500 and above qualify for free delivery in this demo
              checkout. {product.deliveryNote ?? 'In-stock items are prepared for dispatch after order confirmation.'}
            </p>
            <p>Collection can be arranged from our Accra location. Bring your order number.</p>
            <p>Confirm trap type, pipe class and electrical rating with the team before a critical install.</p>
          </div>
        )}
      </div>
    </div>
  )
}
