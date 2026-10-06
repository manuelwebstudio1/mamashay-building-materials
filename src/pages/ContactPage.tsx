import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { images } from '../data/images'
import { getWhatsAppUrl, siteConfig } from '../data/siteConfig'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  const cards = [
    { icon: Phone, title: 'Phone', value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: Phone, title: 'WhatsApp', value: siteConfig.phone, href: getWhatsAppUrl() },
    { icon: Mail, title: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, title: 'Location', value: siteConfig.address },
    { icon: Clock, title: 'Opening hours', value: siteConfig.openingHours },
  ]

  return (
    <div>
      <Seo
        title="Contact Mamashay | Let's Talk About Your Project"
        description="Call, WhatsApp or email Mamashay Plumbing & Building Materials in Accra. Send a project enquiry."
      />
      <section className="relative isolate min-h-[280px] overflow-hidden bg-navy text-white">
        <img src={images.contactHero} alt="Construction professional" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container-site relative py-16">
          <h1 className="text-4xl font-black sm:text-5xl">LET'S TALK ABOUT YOUR PROJECT</h1>
          <p className="mt-3 max-w-xl text-white/75">Phone, WhatsApp or send a message. We help match pipes, fittings, sanitary ware and tools to the job.</p>
        </div>
      </section>
      <div className="container-site py-12">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-line bg-white p-4">
              <card.icon className="h-5 w-5 text-orange" />
              <h2 className="mt-3 text-sm font-bold text-navy">{card.title}</h2>
              {card.href ? (
                <a href={card.href} className="mt-1 block text-sm text-muted hover:text-orange">{card.value}</a>
              ) : (
                <p className="mt-1 text-sm text-muted">{card.value}</p>
              )}
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-xl font-extrabold text-navy">Send a message</h2>
            {sent ? (
              <p className="mt-4 rounded-md bg-orange-soft p-4 text-sm font-semibold text-orange">
                Message recorded on this demo. For a live enquiry, use WhatsApp or call {siteConfig.phone}.
              </p>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium sm:col-span-1">
                  Name
                  <input required name="name" className="mt-1 h-11 w-full rounded-md border border-line px-3" />
                </label>
                <label className="text-sm font-medium">
                  Phone
                  <input required name="phone" className="mt-1 h-11 w-full rounded-md border border-line px-3" />
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Email
                  <input required type="email" name="email" className="mt-1 h-11 w-full rounded-md border border-line px-3" />
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Subject
                  <input required name="subject" className="mt-1 h-11 w-full rounded-md border border-line px-3" />
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Message
                  <textarea required name="message" rows={5} className="mt-1 w-full rounded-md border border-line px-3 py-2" />
                </label>
                <Button type="submit" className="sm:col-span-2">Send message</Button>
              </div>
            )}
          </form>
          <div className="overflow-hidden rounded-2xl border border-line">
            <img src={images.map} alt="Map-style view of Accra" className="h-64 w-full object-cover lg:h-full" />
            <div className="bg-white p-4">
              <p className="font-semibold text-navy">{siteConfig.address}</p>
              <p className="text-sm text-muted">Map placeholder for the live store location. Replace with Google Maps when the address is confirmed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
