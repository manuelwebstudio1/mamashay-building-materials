import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'mamashay-wishlist'

interface WishlistContextValue {
  ids: string[]
  toggle: (productId: string) => void
  has: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextValue | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      setIds(raw ? (JSON.parse(raw) as string[]) : [])
    } catch {
      setIds([])
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids, ready])

  const toggle = useCallback((productId: string) => {
    setIds((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId],
    )
  }, [])

  const has = useCallback((productId: string) => ids.includes(productId), [ids])

  const value = useMemo(() => ({ ids, toggle, has }), [ids, toggle, has])
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used within WishlistProvider')
  return context
}
