export interface Category {
  slug: string
  name: string
  description: string
  short: string
  image: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductReview {
  id: string
  name: string
  rating: number
  date: string
  title: string
  body: string
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  price: number
  oldPrice?: number
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  badge?: string
  images: string[]
  description: string
  shortDescription: string
  specs: ProductSpec[]
  tags: string[]
  featured?: boolean
  bestSeller?: boolean
  newArrival?: boolean
  dealOfWeek?: boolean
  deliveryNote?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  quote: string
  rating: number
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface CheckoutDetails {
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  city: string
  region: string
  notes: string
  paymentMethod: 'momo' | 'bank' | 'cod'
}

export interface PlacedOrder {
  id: string
  createdAt: string
  items: Array<{
    productId: string
    name: string
    image: string
    price: number
    quantity: number
  }>
  customer: CheckoutDetails
  subtotal: number
  delivery: number
  total: number
}

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating'
