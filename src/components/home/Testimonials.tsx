import { testimonials } from '../../data/testimonials'
import { SectionHeader } from '../ui/SectionHeader'
import { StarRating } from '../ui/StarRating'

export function Testimonials() {
  return (
    <section className="bg-surface py-14">
      <div className="container-site">
        <SectionHeader
          title="What customers say"
          subtitle="Feedback from contractors, plumbers and homeowners using Mamashay for live jobs."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="rounded-2xl border border-line bg-white p-5">
              <StarRating rating={item.rating} />
              <p className="mt-3 text-sm leading-6 text-navy">“{item.quote}”</p>
              <footer className="mt-4">
                <p className="text-sm font-bold text-navy">{item.name}</p>
                <p className="text-xs text-muted">
                  {item.role} · {item.location}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
