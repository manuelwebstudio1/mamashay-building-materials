import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { CartItem } from '../types'
import { getCartCount, getDeliveryFee, getSubtotal } from '../lib/catalog'

const STORAGE_KEY = 'mamashay-cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

interface CartContextValue {
  items: CartItem[]
  count: number
  subtotal: number
  delivery: number
  total: number
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setItems(loadCart())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, ready])

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId)
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { productId, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId))
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.productId !== productId)
      return current.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    })
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const subtotal = getSubtotal(items)
    const delivery = getDeliveryFee(subtotal)
    return {
      items,
      count: getCartCount(items),
      subtotal,
      delivery,
      total: subtotal + delivery,
      addItem,
      removeItem,
      setQuantity,
      clear,
    }
  }, [items, addItem, removeItem, setQuantity, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
