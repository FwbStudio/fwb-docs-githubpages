export interface TebexMediaEntry {
  packageId: number
  videos: Array<{ title: string; youtubeId: string }>
  tagline?: string
}

/** Scraped from fwbstudio.tebex.io — refresh with scripts/scrape-tebex-media.mjs */
export const TEBEX_MEDIA: Record<string, TebexMediaEntry> = {
  bodybag: {
    packageId: 7426479,
    videos: [{ title: 'Showcase', youtubeId: 'OIK9g4ycFME' }]
  },
  'burger-shop': {
    packageId: 7426480,
    videos: [{ title: 'Showcase', youtubeId: 'yPy5xDvjka8' }]
  },
  carwipe: {
    packageId: 7426481,
    videos: [{ title: 'Showcase', youtubeId: 'Bi8wVT_fhUA' }]
  },
  chopshop: {
    packageId: 7426482,
    videos: [{ title: 'Showcase', youtubeId: '4xEzaqSHHwc' }]
  },
  'duty-system': {
    packageId: 7426483,
    videos: [{ title: 'Showcase', youtubeId: 'fcUtho7Jd5E' }]
  },
  'fraud-v1': {
    packageId: 7426478,
    videos: [{ title: 'Showcase', youtubeId: 'AKcZx05pLXo' }]
  },
  'fraud-v2': {
    packageId: 7426477,
    videos: [{ title: 'Showcase', youtubeId: 'fPM5CGw-SFA' }]
  },
  'gun-jamming': {
    packageId: 7426484,
    videos: [{ title: 'Showcase', youtubeId: '3czXFYjad70' }]
  },
  icebox: {
    packageId: 7426486,
    videos: [
      { title: 'Icebox showcase', youtubeId: 'Yis97PjU9L8' },
      { title: 'Icebox preview 2', youtubeId: '5FuORpsor6M' },
      { title: 'Icebox preview 3', youtubeId: 'ZsqB3cCNkys' }
    ]
  },
  'lashes-saloon': {
    packageId: 7426488,
    videos: [{ title: 'Showcase', youtubeId: 'jgDaFJBHCjk' }]
  },
  'loading-screen': {
    packageId: 7426475,
    videos: [{ title: 'Showcase', youtubeId: 'Y0nqJhBtOuc' }]
  },
  'nails-saloon': {
    packageId: 7426489,
    videos: [{ title: 'Showcase', youtubeId: '2eIBnDhC0Bo' }]
  },
  'npc-medic': {
    packageId: 7459663,
    videos: [{ title: 'Showcase', youtubeId: '2irMGhuv9As' }]
  },
  notify: {
    packageId: 7464228,
    videos: [{ title: 'Showcase', youtubeId: '2L2ZN-ZmCyY' }]
  },
  outfitbag: {
    packageId: 7426474,
    videos: [{ title: 'Showcase', youtubeId: 'm-iskvGgPtY' }]
  },
  'pizza-shop': {
    packageId: 7426490,
    videos: [{ title: 'Showcase', youtubeId: 'dLJkJgZOkWQ' }]
  },
  'items-placeables': {
    packageId: 7426487,
    videos: [{ title: 'Showcase', youtubeId: 'MrrTtj-wuro' }]
  },
  'portable-parking': {
    packageId: 7431940,
    videos: [{ title: 'Showcase', youtubeId: '-gg2KnKF_uE' }]
  },
  'safezone-creator': {
    packageId: 7426491,
    videos: [{ title: 'Showcase', youtubeId: '3mNkOPNkg5E' }]
  },
  'shoes-robbery': {
    packageId: 7426476,
    videos: [{ title: 'Showcase', youtubeId: 'nQJjRztYqiY' }]
  },
  'skitz-shoes-store': {
    packageId: 7426492,
    videos: [{ title: 'Showcase', youtubeId: 'CBItKoHiZCc' }]
  },
  smoking: {
    packageId: 7426496,
    videos: [{ title: 'Smoking showcase', youtubeId: '2iYqOx_Pka8' }]
  },
  switch: {
    packageId: 7426485,
    videos: [{ title: 'Showcase', youtubeId: 'ilRQLepOyJM' }]
  },
  tranquilizer: {
    packageId: 7444827,
    videos: [{ title: 'Showcase', youtubeId: 'sKomYHBtmlw' }]
  },
  'trap-phone-v1': {
    packageId: 7490289,
    videos: [{ title: 'Showcase', youtubeId: 'hS-WSK7XKzo' }]
  },
  'trap-phone-v2': {
    packageId: 7426493,
    videos: [{ title: 'Showcase', youtubeId: '107jI4LZB4Q' }]
  },
  'useable-foods': {
    packageId: 7426480,
    videos: [{ title: 'Useable Foods (Burger Shop bundle)', youtubeId: 'yPy5xDvjka8' }]
  },
  'weave-wear': {
    packageId: 7426495,
    videos: [{ title: 'Showcase', youtubeId: '33Rf9b7dZVk' }]
  },
  'white-widow': {
    packageId: 7426496,
    videos: [{ title: 'White Widow showcase', youtubeId: 'h5InDmjlQ-E' }]
  },
  'wigs-bundle': {
    packageId: 7426494,
    videos: [{ title: 'Showcase', youtubeId: '107jI4LZB4Q' }]
  },
  'automatic-pistol-pack': {
    packageId: 6835149,
    videos: [{ title: 'Showcase', youtubeId: 'ePsV_DO-TAQ' }]
  },
  'weapon-pack-v1': {
    packageId: 7005106,
    videos: [{ title: 'Showcase', youtubeId: 'xE49womRTLc' }]
  }
}

/** No Tebex package found yet — add when listed */
export const TEBEX_MEDIA_MISSING = ['starter-pack'] as const

export function tebexPackageUrl(packageId: number) {
  return `https://fwbstudio.tebex.io/package/${packageId}`
}
