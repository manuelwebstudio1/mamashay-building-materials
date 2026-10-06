import { useState } from 'react'
import { SafeImage } from '../ui/SafeImage'

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <div className="aspect-square">
          <SafeImage src={current} alt={alt} className="h-full w-full object-contain p-6 sm:p-10" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((image, index) => (
          <button
            key={image + index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1}`}
            className={`overflow-hidden rounded-lg border bg-white ${
              active === index ? 'border-orange ring-2 ring-orange/30' : 'border-line'
            }`}
          >
            <SafeImage src={image} alt="" className="aspect-square object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
