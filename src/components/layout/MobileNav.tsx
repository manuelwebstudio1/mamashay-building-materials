import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { categories } from '../../data/categories'
import { useUi } from '../../context/UiContext'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { siteConfig } from '../../data/siteConfig'
import { getWhatsAppUrl } from '../../data/siteConfig'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/cart', label: 'Cart' },
  { to: '/account', label: 'Account' },
]

export function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUi()
  if (!mobileNavOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button type="button" className="absolute inset-0 bg-navy/50" aria-label="Close menu" onClick={closeMobileNav} />
      <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl animate-[slide-in-left_0.25s_ease]">
        <div className="flex items-center justify-between border-b border-line px-4 py-4">
          <Logo compact />
          <button type="button" onClick={closeMobileNav} aria-label="Close menu" className="grid h-10 w-10 place-items-center">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileNav}
              className={({ isActive }) =>
                `block rounded-md px-3 py-3 text-sm font-semibold ${isActive ? 'bg-orange-soft text-orange' : 'text-navy'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <p className="mt-5 px-3 text-xs font-bold uppercase tracking-wider text-muted">Shop by category</p>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              onClick={closeMobileNav}
              className="block rounded-md px-3 py-2.5 text-sm text-navy"
            >
              {category.name}
            </NavLink>
          ))}
        </nav>
        <div className="space-y-2 border-t border-line p-4">
          <Button to="/shop" className="w-full" onClick={closeMobileNav}>
            Shop now
          </Button>
          <Button href={getWhatsAppUrl()} variant="navy" className="w-full">
            WhatsApp us
          </Button>
          <p className="text-center text-xs text-muted">{siteConfig.phone}</p>
        </div>
      </div>
    </div>
  )
}
