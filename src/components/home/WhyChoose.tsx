import { CheckCircle2 } from 'lucide-react'
import { images } from '../../data/images'
import { Button } from '../ui/Button'

const reasons = [
  'Clear prices in Ghana cedis',
  'Plumbing, tools and materials in one catalogue',
  'Help matching pipes, fittings and sanitary ware',
  'WhatsApp support for project lists',
  'Delivery options across Accra',
  'Stock that contractors can actually use on site',
]

export function WhyChoose() {
  return (
    <section className="bg-surface py-14">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={images.aboutStory} alt="Project team reviewing construction work" className="h-full min-h-[320px] w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Why Mamashay</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy">A supplier built around real project work.</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Mamashay brings plumbing, sanitary ware, tools and building materials together so homeowners and contractors
            can specify, compare and order without bouncing between three different shops.
          </p>
          <ul className="mt-6 space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-sm text-navy">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {reason}
              </li>
            ))}
          </ul>
          <Button to="/about" className="mt-7">
            About Mamashay
          </Button>
        </div>
      </div>
    </section>
  )
}
