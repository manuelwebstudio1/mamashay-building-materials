import { Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-[11px] font-medium tracking-[0.14em] text-white sm:text-xs">
      <div className="container-site flex h-9 items-center justify-between gap-4">
        <p className="truncate">{siteConfig.announcement}</p>
        <a href={siteConfig.phoneHref} className="hidden shrink-0 items-center gap-1.5 sm:inline-flex">
          <Phone className="h-3.5 w-3.5 text-orange" />
          Call Us: {siteConfig.phone}
        </a>
      </div>
    </div>
  )
}
