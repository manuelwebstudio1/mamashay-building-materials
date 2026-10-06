import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnnouncementBar } from './AnnouncementBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { CartDrawer } from './CartDrawer'
import { MobileNav } from './MobileNav'
import { useUi } from '../../context/UiContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export function Layout() {
  const { cartOpen, mobileNavOpen, closeCart, closeMobileNav, closeSearch } = useUi()
  const { pathname } = useLocation()

  useEffect(() => {
    closeCart()
    closeMobileNav()
    closeSearch()
  }, [pathname, closeCart, closeMobileNav, closeSearch])

  useEffect(() => {
    document.body.style.overflow = cartOpen || mobileNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, mobileNavOpen])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
      <MobileNav />
    </div>
  )
}
