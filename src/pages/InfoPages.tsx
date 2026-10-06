import type { ReactNode } from 'react'
import { Seo } from '../components/ui/Seo'
import { faqs } from '../data/faqs'
import { siteConfig } from '../data/siteConfig'

export function InfoPage({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="bg-surface py-10">
      <Seo title={`${title} | Mamashay`} description={description} />
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy">{title}</h1>
        <div className="prose-mamashay mt-6 space-y-4 text-sm leading-7 text-muted">{children}</div>
      </div>
    </div>
  )
}

export function FaqsPage() {
  return (
    <InfoPage title="FAQs" description="Common questions about ordering from Mamashay.">
      {faqs.map((item) => (
        <article key={item.question} className="rounded-xl border border-line bg-white p-5">
          <h2 className="font-bold text-navy">{item.question}</h2>
          <p className="mt-2">{item.answer}</p>
        </article>
      ))}
    </InfoPage>
  )
}

export function ShippingPage() {
  return (
    <InfoPage title="Shipping" description="Delivery information for Mamashay orders in Ghana.">
      <p>Delivery in Accra is GHS {siteConfig.deliveryFee}. Orders of GHS {siteConfig.freeDeliveryFrom.toLocaleString()} and above qualify for free delivery in this demo.</p>
      <p>Outside Accra, delivery timing and fees should be confirmed on WhatsApp before dispatch. Collection is available from {siteConfig.address} during {siteConfig.openingHours}.</p>
    </InfoPage>
  )
}

export function ReturnsPage() {
  return (
    <InfoPage title="Returns" description="Return guidelines for Mamashay products.">
      <p>Unused items in original packaging can be discussed for return within 7 days of collection or delivery, subject to inspection.</p>
      <p>Cut pipe, mixed paint, installed sanitary ware and electrical items that have been terminated are not returnable. Confirm sizes before cutting or installing.</p>
    </InfoPage>
  )
}

export function PrivacyPage() {
  return (
    <InfoPage title="Privacy" description="How this Mamashay demo storefront uses information.">
      <p>This demo stores cart, wishlist, account email and order history in your browser only. No customer database is connected.</p>
      <p>A live website would publish a full privacy notice covering orders, delivery addresses and payment records.</p>
    </InfoPage>
  )
}

export function TermsPage() {
  return (
    <InfoPage title="Terms" description="Terms of use for the Mamashay demo storefront.">
      <p>Product images, prices and specifications are representative for demonstration. Confirm live stock, warranty and specifications with the sales team before a contractual purchase.</p>
      <p>Checkout simulates order placement and does not charge a card or mobile money wallet.</p>
    </InfoPage>
  )
}
