export const siteConfig = {
  brandName: 'MAMASHAY',
  businessName: 'Mamashay Plumbing & Building Materials',
  tagline: 'Quality plumbing, building materials, tools and construction essentials.',
  announcement: 'QUALITY PLUMBING & BUILDING MATERIALS • AVAILABLE NOW',
  phone: '053 909 5954',
  phoneHref: 'tel:+233539095954',
  whatsapp: '+233539095954',
  whatsappMessage: 'Hello Mamashay, I would like to enquire about your products.',
  email: 'info@mamashay.com',
  location: 'Madina, Accra, Ghana',
  address: 'Behind Madina NPP Office, Madina taxi station, Accra',
  openingHours: 'Mon–Sat, 8:00 AM–6:00 PM',
  openingHoursShort: 'Mon–Sat 8:00 AM–6:00 PM',
  deliveryFee: 50,
  freeDeliveryFrom: 1500,
  currency: 'GHS',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    youtube: 'https://youtube.com',
  },
} as const

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  const digits = siteConfig.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
