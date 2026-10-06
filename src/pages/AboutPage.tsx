import { Seo } from '../components/ui/Seo'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { images } from '../data/images'
import { Button } from '../components/ui/Button'

const values = [
  { title: 'Quality first', text: 'We list products that tradespeople can install with confidence, with honest descriptions rather than inflated claims.' },
  { title: 'Clear pricing', text: 'Prices are shown in Ghana cedis so you can budget a job before you call.' },
  { title: 'Practical support', text: 'If a fitting, trap type or pump size is unclear, ask. Better to confirm than to return a wrong part.' },
]

export function AboutPage() {
  return (
    <div>
      <Seo
        title="About Mamashay | Plumbing & Building Materials"
        description="Learn about Mamashay Plumbing & Building Materials — a Ghanaian supplier of plumbing, tools and construction essentials."
      />
      <section className="relative isolate min-h-[320px] overflow-hidden bg-navy text-white">
        <img src={images.aboutHero} alt="Construction site" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="container-site relative py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">About Mamashay</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">BUILDING WITH QUALITY. SERVING WITH PURPOSE.</h1>
        </div>
      </section>
      <div className="container-site py-12">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={images.aboutStory} alt="Team on a construction project" className="h-80 w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Our story</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Mamashay Plumbing & Building Materials is a Ghanaian supplier built to make it easier to buy plumbing products,
              sanitary ware, tools and construction materials from one organised catalogue. This website is a professional
              demonstration of how the business can present stock, prices and project support online.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Business details such as years of operation can be updated in the site configuration when the live company
              information is confirmed. Until then, we keep claims factual and useful.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-navy p-8 text-white">
            <h2 className="text-xl font-extrabold">Our mission</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Help homeowners, plumbers and contractors specify the right materials quickly — with prices, categories and
              contact routes that match how jobs actually get bought in Ghana.
            </p>
          </article>
          <article className="rounded-2xl border border-line p-8">
            <h2 className="text-xl font-extrabold text-navy">Why customers choose us</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              One shop for pipes, sanitary ware, power tools and hardware. WhatsApp for fast questions. A checkout that
              shows delivery clearly. Support that talks in product sizes, not marketing slogans.
            </p>
          </article>
        </div>
        <h2 className="mt-14 text-2xl font-extrabold text-navy">Our values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button to="/contact">Let's talk about your project</Button>
        </div>
      </div>
    </div>
  )
}
