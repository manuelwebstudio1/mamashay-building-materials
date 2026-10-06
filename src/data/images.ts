const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  {
    src: '/hero-yard.png',
    alt: 'Mamashay plumbing and building materials yard with pipes, pumps and tanks',
  },
  {
    src: '/hero-heaters.png',
    alt: 'Bosston electric water heaters on display at Mamashay',
  },
  {
    src: '/hero-vanities.png',
    alt: 'Bathroom vanities, basins and mirrors on display at Mamashay',
  },
] as const

export const images = {
  hero: heroSlides[0].src,
  promo: unsplash('photo-1504307651254-35680f356dfd', 1800),
  aboutHero: unsplash('photo-1541888946425-d81bb19240f5', 1800),
  aboutStory: unsplash('photo-1581094794329-c8112a89af12', 1200),
  contactHero: unsplash('photo-1504307651254-35680f356dfd', 1800),
  worker: unsplash('photo-1504307651254-35680f356dfd', 1200),
  project1: unsplash('photo-1503387762-592deb58ef4e', 1000),
  project2: unsplash('photo-1484154214963-b2ca54fba3b8', 1000),
  project3: unsplash('photo-1621905251189-08b45d6a269e', 1000),
  project4: unsplash('photo-1503387762-592deb58ef4e', 1000),
  map: unsplash('photo-1524661135-423995f22d0b', 1400),
  why: unsplash('photo-1503387762-592deb58ef4e', 1200),
}

export const productImages = {
  drill: unsplash('photo-1504148455328-c376907d081c'),
  drillAlt: unsplash('photo-1572981779307-38b8cabb2407'),
  pump: unsplash('photo-1581092160607-ee22621dd758'),
  pipes: unsplash('photo-1558618666-fcd25c85cd64'),
  valve: unsplash('photo-1607472586893-53e4e3390ea2'),
  tap: unsplash('photo-1584622650111-993a426fbf0a'),
  grinder: unsplash('photo-1572981779307-38b8cabb2407'),
  tank: unsplash('photo-1581092918056-0c4c3acd3789'),
  toilet: unsplash('photo-1584622781564-1d987fb49561'),
  saw: unsplash('photo-1504148455328-c376907d081c'),
  hammerTool: unsplash('photo-1572981779307-38b8cabb2407'),
  heatGun: unsplash('photo-1530124566582-a618bc2615dc'),
  submersible: unsplash('photo-1581092160562-40aa08e78837'),
  pressure: unsplash('photo-1581092160607-ee22621dd758'),
  elbow: unsplash('photo-1558618666-fcd25c85cd64'),
  giPipe: unsplash('photo-1621905252472-943afaa20e20'),
  connector: unsplash('photo-1607472586893-53e4e3390ea2'),
  ppr: unsplash('photo-1558618666-fcd25c85cd64'),
  basin: unsplash('photo-1584622650111-993a426fbf0a'),
  shower: unsplash('photo-1507652313519-d4e9174996dd'),
  sink: unsplash('photo-1556912173-46c336c7fd55'),
  cement: unsplash('photo-1517581177682-a085bb7ffb15'),
  ironRod: unsplash('photo-1504307651254-35680f356dfd'),
  roofing: unsplash('photo-1482731215275-a1f25257005a'),
  clawHammer: unsplash('photo-1586864387967-d02ef85d93e8'),
  tape: unsplash('photo-1530124566582-a618bc2615dc'),
  level: unsplash('photo-1504148455328-c376907d081c'),
  cable: unsplash('photo-1558346490-a72e53ae2d4f'),
  board: unsplash('photo-1558346490-a72e53ae2d4f'),
  floodlight: unsplash('photo-1565814636199-ae6021552600'),
  padlock: unsplash('photo-1558002038-1055907df827'),
  hinges: unsplash('photo-1558002038-1055907df827'),
  bolt: unsplash('photo-1530124566582-a618bc2615dc'),
  wrench: unsplash('photo-1530124566582-a618bc2615dc'),
  tiles: unsplash('photo-1552321554-5fefe8c9ef14'),
  paint: unsplash('photo-1562259929-b4e1fd3aef09'),
  gloves: unsplash('photo-1504307651254-35680f356dfd'),
  helmet: unsplash('photo-1504307651254-35680f356dfd'),
  screwdriver: unsplash('photo-1530124566582-a618bc2615dc'),
  pliers: unsplash('photo-1530124566582-a618bc2615dc'),
  switch: unsplash('photo-1558346490-a72e53ae2d4f'),
  socket: unsplash('photo-1558346490-a72e53ae2d4f'),
}

export const categoryImages = {
  plumbing: unsplash('photo-1621905251189-08b45d6a269e', 900),
  sanitary: unsplash('photo-1552321554-5fefe8c9ef14', 900),
  building: unsplash('photo-1503387762-592deb58ef4e', 900),
  power: unsplash('photo-1504148455328-c376907d081c', 900),
  hand: unsplash('photo-1586864387967-d02ef85d93e8', 900),
  electrical: unsplash('photo-1558346490-a72e53ae2d4f', 900),
  water: unsplash('photo-1581092160607-ee22621dd758', 900),
  hardware: unsplash('photo-1558002038-1055907df827', 900),
}
