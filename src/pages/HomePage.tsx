import { Seo } from '../components/ui/Seo'
import { Hero } from '../components/home/Hero'
import { TrustStrip } from '../components/home/TrustStrip'
import { ShopByCategory } from '../components/home/ShopByCategory'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { PromoBanner } from '../components/home/PromoBanner'
import { BestSellers } from '../components/home/BestSellers'
import { WhyChoose } from '../components/home/WhyChoose'
import { ProjectShowcase } from '../components/home/ProjectShowcase'
import { DealOfTheWeek } from '../components/home/DealOfTheWeek'
import { Testimonials } from '../components/home/Testimonials'
import { FinalCta } from '../components/home/FinalCta'

export function HomePage() {
  return (
    <>
      <Seo
        title="Mamashay Plumbing & Building Materials | Quality Building Supplies in Ghana"
        description="Shop quality plumbing supplies, building materials, tools, sanitary ware and construction essentials from Mamashay."
      />
      <Hero />
      <TrustStrip />
      <ShopByCategory />
      <FeaturedProducts />
      <PromoBanner />
      <BestSellers />
      <WhyChoose />
      <ProjectShowcase />
      <DealOfTheWeek />
      <Testimonials />
      <FinalCta />
    </>
  )
}
