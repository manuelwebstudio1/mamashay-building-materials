import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { heroSlides } from '../../data/images'

export function Hero() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length

  const goTo = useCallback((next: number) => {
    setIndex((next + total) % total)
  }, [total])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % total)
    }, 4000)
    return () => window.clearTimeout(timer)
  }, [index, total])

  return (
    <section
      className="relative isolate min-h-[520px] overflow-hidden bg-navy text-white lg:min-h-[560px]"
      aria-roledescription="carousel"
      aria-label="Featured Mamashay showroom images"
    >
      {heroSlides.map((slide, slideIndex) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slideIndex === index ? slide.alt : ''}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            slideIndex === index ? 'z-0 opacity-100' : 'z-0 opacity-0'
          } ${slideIndex === 0 ? 'object-[center_40%]' : 'object-center'}`}
          fetchPriority={slideIndex === 0 ? 'high' : 'low'}
        />
      ))}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy/88 via-navy/55 to-navy/25" />

      <div className="container-site relative z-[2] flex min-h-[520px] items-center py-12 lg:min-h-[560px] lg:py-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold tracking-[0.22em] text-orange">QUALITY • RELIABILITY • VALUE</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[56px]">
            EVERYTHING YOU NEED
            <br />
            TO BUILD WITH{' '}
            <span className="text-orange">CONFIDENCE.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            Shop quality plumbing, building materials, tools and construction essentials—all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/shop" size="lg">
              Shop products
            </Button>
            <Button to="/contact" variant="outlineLight" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 z-[3] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/55 text-white backdrop-blur-sm transition hover:bg-orange sm:left-5"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 z-[3] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/55 text-white backdrop-blur-sm transition hover:bg-orange sm:right-5"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-[3] flex -translate-x-1/2 gap-2" role="tablist" aria-label="Hero slides">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-label={`Show slide ${slideIndex + 1}`}
            aria-selected={slideIndex === index}
            onClick={() => goTo(slideIndex)}
            className={`h-2.5 rounded-full transition-all ${
              slideIndex === index ? 'w-8 bg-orange' : 'w-2.5 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
