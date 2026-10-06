import type { Category } from '../types'
import { categoryImages } from './images'

export const categories: Category[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    short: 'Pipes, fittings, valves and accessories.',
    description:
      'Complete plumbing supplies including PVC, PPR and GI pipes, fittings, valves and connectors for residential and commercial projects.',
    image: categoryImages.plumbing,
  },
  {
    slug: 'sanitary-ware',
    name: 'Sanitary Ware',
    short: 'Toilets, sinks, showers and bathroom fittings.',
    description:
      'Bathroom suites, mixers, basins, showers and kitchen sanitary fittings selected for durability and everyday use.',
    image: categoryImages.sanitary,
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    short: 'Cement, blocks, iron rods and more.',
    description:
      'Core construction materials including cement, steel, roofing and finishing supplies for building and renovation work.',
    image: categoryImages.building,
  },
  {
    slug: 'power-tools',
    name: 'Power Tools',
    short: 'Drills, grinders, saws and tool accessories.',
    description:
      'Professional power tools for drilling, cutting, grinding and site work, with brands trusted on Ghanaian job sites.',
    image: categoryImages.power,
  },
  {
    slug: 'hand-tools',
    name: 'Hand Tools',
    short: 'Reliable tools for everyday work.',
    description:
      'Hammers, wrenches, measuring tools and site essentials that tradespeople rely on every day.',
    image: categoryImages.hand,
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    short: 'Cables, switches, sockets and accessories.',
    description:
      'Cables, distribution boards, lighting and electrical accessories for safe residential and commercial installations.',
    image: categoryImages.electrical,
  },
  {
    slug: 'water-systems',
    name: 'Water Systems',
    short: 'Pumps, tanks, pipes and water management.',
    description:
      'Water pumps, storage tanks and pressure systems for homes, sites and commercial water supply.',
    image: categoryImages.water,
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    short: 'Locks, hinges, fasteners and fittings.',
    description:
      'Door hardware, fasteners, locks and general fittings to complete construction and maintenance jobs.',
    image: categoryImages.hardware,
  },
]

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}
