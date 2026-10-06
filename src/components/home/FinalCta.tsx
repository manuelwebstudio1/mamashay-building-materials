import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import { getWhatsAppUrl } from '../../data/siteConfig'

export function FinalCta() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <section className="bg-white py-14">
      <div className="container-site overflow-hidden rounded-2xl bg-navy px-6 py-10 text-white sm:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Need materials for a live project?</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">
              Send a list on WhatsApp or browse the shop. Our team can help you match pipes, fittings, sanitary ware and tools before you order.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/shop">Shop products</Button>
              <Button href={getWhatsAppUrl()} variant="outlineLight">
                WhatsApp us
              </Button>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-xl bg-white p-5 text-navy">
            <h3 className="font-extrabold">Project updates</h3>
            <p className="mt-1 text-sm text-muted">Get restock notes and trade offers. Demo form — nothing is emailed.</p>
            {done ? (
              <p className="mt-4 rounded-md bg-orange-soft px-3 py-3 text-sm font-semibold text-orange">
                Thank you. Your interest has been recorded on this device.
              </p>
            ) : (
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-11 flex-1 rounded-md border border-line px-3 text-sm outline-none focus:border-orange"
                />
                <Button type="submit">Join list</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
