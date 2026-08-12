export interface TebexMediaEntry {
  packageId: number
  videos: Array<{ title: string; youtubeId: string }>
  tagline?: string
  image?: string
}

/** Scraped from fwbstudio.tebex.io — refresh with scripts/scrape-tebex-media.mjs */
export const TEBEX_MEDIA: Record<string, TebexMediaEntry> = {
  bodybag: {
    packageId: 7426479,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/727d65ed3cb705c1dc82fa7bded90ef1f0d328f5.png',
    videos: [{ title: 'Showcase', youtubeId: 'OIK9g4ycFME' }]
  },
  'burger-shop': {
    packageId: 7426480,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/1e6f2fb53b7e98a7fbd7a42112ad51e2457897a6.png',
    videos: [{ title: 'Showcase', youtubeId: 'yPy5xDvjka8' }]
  },
  carwipe: {
    packageId: 7426481,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/dd9a9a6f7e8b6cb10ab7643882691000a6253763.jpg',
    videos: [{ title: 'Showcase', youtubeId: 'Bi8wVT_fhUA' }]
  },
  chopshop: {
    packageId: 7426482,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/6367a5f0f459d8643d07729aea7edc2728e6a413.png',
    videos: [{ title: 'Showcase', youtubeId: '4xEzaqSHHwc' }]
  },
  'duty-system': {
    packageId: 7426483,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/d2d9810d43c66dd2737b54bfdc13486c3ca6eb2f.png',
    videos: [{ title: 'Showcase', youtubeId: 'fcUtho7Jd5E' }]
  },
  'fraud-v1': {
    packageId: 7426478,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/391b574a2a1b743311e0534937000454eebb6db8.jpg',
    videos: [{ title: 'Showcase', youtubeId: 'AKcZx05pLXo' }]
  },
  'fraud-v2': {
    packageId: 7426477,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/8e76b62804b2dca1d0b0a8613068d33f3366120e.png',
    videos: [{ title: 'Showcase', youtubeId: 'fPM5CGw-SFA' }]
  },
  'gun-jamming': {
    packageId: 7426484,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/8209fb1207687593f0041694890677608b4f41db.png',
    videos: [{ title: 'Showcase', youtubeId: '3czXFYjad70' }]
  },
  icebox: {
    packageId: 7426486,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/ff6eb3697a49530f7962adca142fe3136f3aea03.png',
    videos: [
      { title: 'Icebox showcase', youtubeId: 'Yis97PjU9L8' },
      { title: 'Icebox preview 2', youtubeId: '5FuORpsor6M' },
      { title: 'Icebox preview 3', youtubeId: 'ZsqB3cCNkys' }
    ]
  },
  'lashes-saloon': {
    packageId: 7426488,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/5dca5e375b4ca576c892d5c164fbb1ca01776cf9.png',
    videos: [{ title: 'Showcase', youtubeId: 'jgDaFJBHCjk' }]
  },
  'loading-screen': {
    packageId: 7426475,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/3f538b9f43136ef01845ce367221dd510d149fc2.webp',
    videos: [{ title: 'Showcase', youtubeId: 'Y0nqJhBtOuc' }]
  },
  'nails-saloon': {
    packageId: 7426489,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/0586d2dd29707e2966227134ae763e053ab467b4.jpg',
    videos: [{ title: 'Showcase', youtubeId: '2eIBnDhC0Bo' }]
  },
  'npc-medic': {
    packageId: 7459663,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/551ff2d47c98567f385dde8d415cae9e1e895efc.png',
    videos: [{ title: 'Showcase', youtubeId: '2irMGhuv9As' }]
  },
  notify: {
    packageId: 7464228,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/47c30f56cb8039fcf41b3d9c5757c901f7cec7a1.webp',
    videos: [{ title: 'Showcase', youtubeId: '2L2ZN-ZmCyY' }]
  },
  outfitbag: {
    packageId: 7426474,
    image: 'https://i.ibb.co/Wv9FcCK9/maxresdefault-3.webp',
    videos: [{ title: 'Showcase', youtubeId: 'm-iskvGgPtY' }]
  },
  'pizza-shop': {
    packageId: 7426490,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/a51b53be50b80a389b74bf8415c09fabec5a85e7.png',
    videos: [{ title: 'Showcase', youtubeId: 'dLJkJgZOkWQ' }]
  },
  'items-placeables': {
    packageId: 7426487,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/6928e00f29acdac4a0434cc9b75d91123377d76e.png',
    videos: [{ title: 'Showcase', youtubeId: 'MrrTtj-wuro' }]
  },
  'portable-parking': {
    packageId: 7431940,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/8f28ad13283aaeebfd24080d75c9f95c34b07845.png',
    videos: [{ title: 'Showcase', youtubeId: '-gg2KnKF_uE' }]
  },
  'safezone-creator': {
    packageId: 7426491,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/dac5bcb1c89eaa8027d3e39f95698484026df3b4.png',
    videos: [{ title: 'Showcase', youtubeId: '3mNkOPNkg5E' }]
  },
  'shoes-robbery': {
    packageId: 7426476,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/db8d6de7642cbe06625bf79bf9032105edca8c45.png',
    videos: [{ title: 'Showcase', youtubeId: 'nQJjRztYqiY' }]
  },
  'skitz-shoes-store': {
    packageId: 7426492,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/cdc6ccbe32d17c9f6bc3c58337dd26de117a9581.png',
    videos: [{ title: 'Showcase', youtubeId: 'CBItKoHiZCc' }]
  },
  smoking: {
    packageId: 7426496,
    image: 'https://i.ibb.co/v4SWwH7k/jbjbj.webp',
    videos: [{ title: 'Smoking showcase', youtubeId: '2iYqOx_Pka8' }]
  },
  switch: {
    packageId: 7426485,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/5372bd2596f9ba74fda059be177b47726c510b1a.png',
    videos: [{ title: 'Showcase', youtubeId: 'ilRQLepOyJM' }]
  },
  tranquilizer: {
    packageId: 7444827,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/63998b1d9cc3639dd010af16d9f3bdab186641b9.jpeg',
    videos: [{ title: 'Showcase', youtubeId: 'sKomYHBtmlw' }]
  },
  'trap-phone-v1': {
    packageId: 7490289,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/e7a3a22f4b444dc65c9836120cbeb4af6b9b7161.webp',
    videos: [{ title: 'Showcase', youtubeId: 'hS-WSK7XKzo' }]
  },
  'trap-phone-v2': {
    packageId: 7426493,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/984813bdc4c647f36617288680025b6a99557cbe.jpg',
    videos: [{ title: 'Showcase', youtubeId: '107jI4LZB4Q' }]
  },
  'useable-foods': {
    packageId: 7426480,
    videos: [{ title: 'Useable Foods (Burger Shop bundle)', youtubeId: 'yPy5xDvjka8' }]
  },
  'weave-wear': {
    packageId: 7426495,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/eb1250bc400b763ec364966baf58f7524c651681.png',
    videos: [{ title: 'Showcase', youtubeId: '33Rf9b7dZVk' }]
  },
  'white-widow': {
    packageId: 7426496,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/9a2095b4be89ccc380dfac97278f16f64719bd87.png',
    videos: [{ title: 'White Widow showcase', youtubeId: 'h5InDmjlQ-E' }]
  },
  'wigs-bundle': {
    packageId: 7426494,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/b0ec2ed853be91d030e7c49c90d0e091299d6df4.jpg',
    videos: [{ title: 'Showcase', youtubeId: '107jI4LZB4Q' }]
  },
  'automatic-pistol-pack': {
    packageId: 6835149,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/9288d4a9a1870b800ea66ab241f8f974b8fd46af.png',
    videos: [{ title: 'Showcase', youtubeId: 'ePsV_DO-TAQ' }]
  },
  'weapon-pack-v1': {
    packageId: 7005106,
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/7b44f58dcfbf4e8d8e7dc751895e2ee17c136a74.png',
    videos: [{ title: 'Showcase', youtubeId: 'xE49womRTLc' }]
  }
}

/** No Tebex package found yet — add when listed */
export const TEBEX_MEDIA_MISSING = ['starter-pack'] as const

export function tebexPackageUrl(packageId: number) {
  return `https://fwbstudio.tebex.io/package/${packageId}`
}
