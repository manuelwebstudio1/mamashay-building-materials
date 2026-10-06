import { siteConfig } from '../data/siteConfig'
import type { Product, ProductReview } from '../types'

const authors = ['Kwame A.', 'Ama S.', 'Yaw Boateng', 'Nana Adwoa', 'Emmanuel T.', 'Afia Mensah']

export function getProductReviews(product: Product): ProductReview[] {
  const count = Math.min(4, Math.max(2, Math.round(product.reviewCount / 8)))
  return Array.from({ length: count }, (_, index) => ({
    id: `${product.id}-r${index}`,
    name: authors[(index + product.name.length) % authors.length],
    rating: index === count - 1 && product.rating < 4.6 ? 4 : 5,
    date: ['12 Mar 2026', '28 Feb 2026', '9 Jan 2026', '19 Dec 2025'][index],
    title: index === 0 ? 'Good value for site work' : 'As described',
    body:
      index === 0
        ? `${product.name} arrived in good condition and matched the listing. Useful for our ${product.category.replace('-', ' ')} jobs around Accra.`
        : `Solid quality for the price. I would buy ${product.brand} again from ${siteConfig.brandName}.`,
  }))
}
