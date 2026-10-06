import { BadgeCheck, Headphones, Timer, Wallet } from 'lucide-react'

const items = [
  {
    icon: BadgeCheck,
    title: 'Quality products',
    text: 'Reliable materials for every project.',
  },
  {
    icon: Wallet,
    title: 'Affordable prices',
    text: 'Competitive prices for professionals and homeowners.',
  },
  {
    icon: Timer,
    title: 'Fast service',
    text: 'Quick response and convenient ordering.',
  },
  {
    icon: Headphones,
    title: 'Expert support',
    text: 'Get help choosing the right products.',
  },
]

function TrustItems({ suffix }: { suffix: string }) {
  return (
    <>
      {items.map((item) => (
        <div key={`${item.title}-${suffix}`} className="flex min-w-[280px] items-center gap-3 px-6 sm:min-w-[340px]">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-orange/30 text-orange">
            <item.icon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wide text-navy sm:text-sm">{item.title}</h3>
            <p className="text-xs text-muted sm:text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export function TrustStrip() {
  return (
    <section className="overflow-hidden border-t border-line bg-white" aria-label="Why shop with Mamashay">
      <div className="flex w-max animate-marquee py-3 hover:[animation-play-state:paused]">
        <div className="flex">
          <TrustItems suffix="a" />
        </div>
        <div className="flex" aria-hidden="true">
          <TrustItems suffix="b" />
        </div>
      </div>
    </section>
  )
}
