import { Button } from '../ui/Button'
import { images } from '../../data/images'

export function PromoBanner() {
  return (
    <section className="container-site py-6">
      <div className="relative overflow-hidden rounded-2xl">
        <img src={images.promo} alt="Construction professional on site" className="h-56 w-full object-cover sm:h-72" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            BUILD BETTER.
            <br />
            <span className="text-orange">BUILD SMARTER.</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/80">
            Get quality materials and professional tools at competitive prices.
          </p>
          <Button to="/shop" className="mt-5 w-fit">
            Explore products
          </Button>
        </div>
      </div>
    </section>
  )
}
