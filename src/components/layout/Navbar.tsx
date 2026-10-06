import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { useCart } from '../../context/CartContext'
import { useUi } from '../../context/UiContext'
import { categories } from '../../data/categories'
import { products } from '../../data/products'
import { matchesQuery } from '../../lib/catalog'
import { cn } from '../../lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories', children: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { count } = useCart()
  const { openCart, openMobileNav, searchOpen, openSearch, closeSearch } = useUi()
  const [compact, setCompact] = useState(false)
  const [query, setQuery] = useState('')
  const [catsOpen, setCatsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const suggestions = useMemo(() => {
    if (query.trim().length < 2) return []
    return products.filter((product) => matchesQuery(product, query)).slice(0, 6)
  }, [query])

  function submitSearch(event: FormEvent) {
    event.preventDefault()
    closeSearch()
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className={cn('container-site flex items-center gap-3 transition-all', compact ? 'h-[64px]' : 'h-[76px]')}>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-navy lg:hidden"
          aria-label="Open menu"
          onClick={openMobileNav}
        >
          <Menu className="h-6 w-6" />
        </button>

        <Logo compact={compact} />

        <nav className="ml-6 hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setCatsOpen(true)}
                onMouseLeave={() => setCatsOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center gap-1 text-sm font-medium',
                      isActive ? 'text-orange' : 'text-navy hover:text-orange',
                    )
                  }
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
                {catsOpen && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-xl border border-line bg-white p-3 shadow-lg">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/shop?category=${category.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-surface hover:text-orange"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn('text-sm font-medium', isActive ? 'text-orange' : 'text-navy hover:text-orange')
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <form onSubmit={submitSearch} className="relative ml-auto hidden min-w-[220px] flex-1 max-w-sm lg:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products..."
            className="h-10 w-full rounded-full border border-line bg-surface pl-9 pr-4 text-sm outline-none focus:border-orange focus:bg-white"
            aria-label="Search products"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-[calc(100%+6px)] z-50 w-full overflow-hidden rounded-xl border border-line bg-white shadow-lg">
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="block px-4 py-2.5 text-sm hover:bg-surface"
                  onClick={() => setQuery('')}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </form>

        <div className="ml-auto flex items-center gap-1 lg:ml-3">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md text-navy lg:hidden"
            aria-label="Search"
            onClick={openSearch}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/account" className="grid h-10 w-10 place-items-center rounded-md text-navy" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-md text-navy"
            aria-label={`Cart, ${count} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-orange px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <Button to="/shop" size="sm" className="ml-1 hidden sm:inline-flex">
            Shop now
          </Button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line bg-white p-3 lg:hidden">
          <form onSubmit={submitSearch} className="flex items-center gap-2">
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for products..."
              className="h-11 flex-1 rounded-md border border-line px-3 text-sm outline-none focus:border-orange"
            />
            <button type="button" onClick={closeSearch} aria-label="Close search" className="grid h-11 w-11 place-items-center">
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </header>
  )
}
