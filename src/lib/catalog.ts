import { products } from '../data/products'
import { siteConfig } from '../data/siteConfig'
import type { CartItem, Product, SortOption } from '../types'

export function getCartProducts(items: CartItem[]) {
  return items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId)
      if (!product) return null
      return { product, quantity: item.quantity }
    })
    .filter((entry): entry is { product: Product; quantity: number } => entry !== null)
}

export function getSubtotal(items: CartItem[]) {
  return getCartProducts(items).reduce((sum, item) => sum + item.product.price * item.quantity, 0)
}

export function getDeliveryFee(subtotal: number) {
  if (subtotal === 0) return 0
  if (subtotal >= siteConfig.freeDeliveryFrom) return 0
  return siteConfig.deliveryFee
}

export function getCartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export function matchesQuery(product: Product, query: string) {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  const haystack = [
    product.name,
    product.brand,
    product.category,
    product.description,
    product.shortDescription,
    ...product.tags,
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(needle)
}

export function sortProducts(list: Product[], sort: SortOption) {
  const next = [...list]
  switch (sort) {
    case 'newest':
      return next.reverse()
    case 'price-asc':
      return next.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return next.sort((a, b) => b.price - a.price)
    case 'rating':
      return next.sort((a, b) => b.rating - a.rating)
    default:
      return next.sort((a, b) => Number(b.featured) - Number(a.featured) || b.reviewCount - a.reviewCount)
  }
}

export function filterProducts(options: {
  query?: string
  categories?: string[]
  minPrice?: number
  maxPrice?: number
  availability?: 'all' | 'in' | 'out'
  sort?: SortOption
}) {
  let list = products.filter((product) => matchesQuery(product, options.query ?? ''))

  if (options.categories && options.categories.length > 0) {
    list = list.filter((product) => options.categories?.includes(product.category))
  }
  if (typeof options.minPrice === 'number') {
    list = list.filter((product) => product.price >= options.minPrice!)
  }
  if (typeof options.maxPrice === 'number') {
    list = list.filter((product) => product.price <= options.maxPrice!)
  }
  if (options.availability === 'in') list = list.filter((product) => product.inStock)
  if (options.availability === 'out') list = list.filter((product) => !product.inStock)

  return sortProducts(list, options.sort ?? 'featured')
}
