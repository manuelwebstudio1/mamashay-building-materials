import { images } from '../../data/images'
import { SectionHeader } from '../ui/SectionHeader'

const projects = [
  { title: 'Residential plumbing fit-out', image: images.project1, place: 'Accra' },
  { title: 'Bathroom renovation', image: images.project2, place: 'East Legon' },
  { title: 'Water supply upgrade', image: images.project3, place: 'Tema' },
  { title: 'Commercial site package', image: images.project4, place: 'Kumasi' },
]

export function ProjectShowcase() {
  return (
    <section className="bg-white py-14">
      <div className="container-site">
        <SectionHeader
          title="Project showcase"
          subtitle="Materials specified for homes, bathrooms and commercial sites."
          actionTo="/contact"
          actionLabel="Talk about your project"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-xl">
              <div className="relative h-56">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-orange">{project.place}</p>
                  <h3 className="mt-1 font-bold">{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
