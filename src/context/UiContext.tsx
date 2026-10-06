import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

interface UiContextValue {
  cartOpen: boolean
  mobileNavOpen: boolean
  searchOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  openMobileNav: () => void
  closeMobileNav: () => void
  openSearch: () => void
  closeSearch: () => void
}

const UiContext = createContext<UiContextValue | null>(null)

export function UiProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const value = useMemo(
    () => ({
      cartOpen,
      mobileNavOpen,
      searchOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      toggleCart: () => setCartOpen((open) => !open),
      openMobileNav: () => setMobileNavOpen(true),
      closeMobileNav: () => setMobileNavOpen(false),
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
    }),
    [cartOpen, mobileNavOpen, searchOpen],
  )

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export function useUi() {
  const context = useContext(UiContext)
  if (!context) throw new Error('useUi must be used within UiProvider')
  return context
}
