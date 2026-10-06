import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { UiProvider } from './context/UiContext'
import { Layout } from './components/layout/Layout'
import { ErrorBoundary } from './components/ErrorBoundary'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrderSuccessPage } from './pages/OrderSuccessPage'
import { AccountPage } from './pages/AccountPage'
import { FaqsPage, PrivacyPage, ReturnsPage, ShippingPage, TermsPage } from './pages/InfoPages'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <UiProvider>
          <CartProvider>
            <WishlistProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/product/:slug" element={<ProductDetailsPage />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-success" element={<OrderSuccessPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/faqs" element={<FaqsPage />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                  <Route path="/returns" element={<ReturnsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </WishlistProvider>
          </CartProvider>
        </UiProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
