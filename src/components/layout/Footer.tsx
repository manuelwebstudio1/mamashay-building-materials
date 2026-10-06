import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Logo } from '../ui/Logo'
import { getWhatsAppUrl, siteConfig } from '../../data/siteConfig'

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange">
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Plumbing & Building Materials. Quality supplies for homes, contractors and project teams across Ghana.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={siteConfig.socialLinks.facebook} label="Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M14 9h3V6h-3c-1.7 0-3 1.4-3 3v2H9v3h2v7h3v-7h2.6L17 11h-3V9z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={siteConfig.socialLinks.instagram} label="Instagram">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm8 1.8H8A2.2 2.2 0 0 0 5.8 8v8A2.2 2.2 0 0 0 8 18.2h8A2.2 2.2 0 0 0 18.2 16V8A2.2 2.2 0 0 0 16 5.8zM12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4zm0 1.6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm4.1-2.7a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={siteConfig.socialLinks.youtube} label="YouTube">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M23 12.2s0-3.4-.4-5c-.2-1.1-1.1-2-2.2-2.2C18.2 4.6 12 4.6 12 4.6s-6.2 0-8.4.4C2.5 5.2 1.6 6.1 1.4 7.2.9 8.8.9 12.2.9 12.2s0 3.4.5 5c.2 1.1 1.1 2 2.2 2.2 2.2.4 8.4.4 8.4.4s6.2 0 8.4-.4c1.1-.2 2-1.1 2.2-2.2.4-1.6.4-5 .4-5zM9.8 15.5V8.9l6.2 3.3-6.2 3.3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/shop" className="hover:text-orange">Shop</Link></li>
            <li><Link to="/categories" className="hover:text-orange">Categories</Link></li>
            <li><Link to="/about" className="hover:text-orange">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">Customer service</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/faqs" className="hover:text-orange">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-orange">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-orange">Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-orange">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-orange">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-orange" /> {siteConfig.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-orange" /> {siteConfig.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-orange" /> {siteConfig.email}</li>
            <li>{siteConfig.openingHours}</li>
          </ul>
          <a href={getWhatsAppUrl()} className="mt-4 inline-flex text-sm font-semibold text-orange hover:underline">
            WhatsApp the team
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p>Demo storefront for client presentation. Product specs are representative.</p>
        </div>
      </div>
    </footer>
  )
}
