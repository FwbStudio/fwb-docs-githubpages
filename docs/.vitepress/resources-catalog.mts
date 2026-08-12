export type ResourceCategory = 'scripts' | 'weapons'

import { TEBEX_MEDIA, tebexPackageUrl } from './tebex-media.mts'
import { RESOURCE_PAGES } from './resource-pages.mts'

export interface ResourceVideo {
  title: string
  /** YouTube video ID (the part after watch?v=) */
  youtubeId: string
}

export interface ResourcePages {
  configuration?: boolean
  exports?: { client?: boolean; server?: boolean }
  functions?: { client?: boolean; server?: boolean }
  integrations?: boolean
  commonErrors?: boolean
  questions?: boolean
}

export interface ResourceEntry {
  slug: string
  name: string
  repo: string
  category: ResourceCategory
  /** Short SEO keyword phrase */
  seoKeywords: string
  /** One-line product pitch for Preview page */
  tagline?: string
  /** Tebex package URL — defaults to main store */
  tebexUrl?: string
  /** Preview / showcase videos */
  videos?: ResourceVideo[]
  /** Group versioned products under one sidebar family (e.g. fraud → Fraud v1 + v2) */
  family?: string
  familyLabel?: string
  /** Override auto-detected pages (see resource-pages.mts) */
  pages?: ResourcePages
}

export const DEFAULT_TEBEX_STORE = 'https://fwbstudio.tebex.io/'

export const RESOURCE_CATEGORIES: Record<ResourceCategory, string> = {
  scripts: 'Scripts',
  weapons: 'Weapons'
}

export const RESOURCES: ResourceEntry[] = [
  {
    slug: 'bodybag',
    name: 'Bodybag',
    repo: 'fs_bodybag',
    category: 'scripts',
    seoKeywords: 'FiveM bodybag script ESX QBCore'
  },
  {
    slug: 'burger-shop',
    name: 'Burger Shop',
    repo: 'fs_burgershop_V1',
    category: 'scripts',
    seoKeywords: 'FiveM burger shop job script'
  },
  {
    slug: 'carwipe',
    name: 'Carwipe',
    repo: 'fs_carwipe',
    category: 'scripts',
    seoKeywords: 'FiveM car wipe admin script'
  },
  {
    slug: 'chopshop',
    name: 'ChopShop',
    repo: 'fs_chopshop',
    category: 'scripts',
    seoKeywords: 'FiveM chop shop script ESX QBCore'
  },
  {
    slug: 'duty-system',
    name: 'Duty System',
    repo: 'fs_dutysystem',
    category: 'scripts',
    seoKeywords: 'FiveM duty system ESX QBCore Qbox'
  },
  {
    slug: 'fraud-v1',
    name: 'Fraud System v1',
    repo: 'fs_fraud_v1',
    category: 'scripts',
    family: 'fraud',
    familyLabel: 'Fraud',
    seoKeywords: 'FiveM fraud script v1 ESX QBCore'
  },
  {
    slug: 'fraud-v2',
    name: 'Fraud System v2',
    repo: 'fs_fraud_v2',
    category: 'scripts',
    family: 'fraud',
    familyLabel: 'Fraud',
    seoKeywords: 'FiveM fraud script v2 ESX QBCore Qbox'
  },
  {
    slug: 'gun-jamming',
    name: 'Gun Jamming',
    repo: 'fs_gunjamming',
    category: 'scripts',
    seoKeywords: 'FiveM gun jamming script'
  },
  {
    slug: 'icebox',
    name: 'Icebox',
    repo: 'fs_icebox',
    category: 'scripts',
    seoKeywords: 'FiveM icebox jewelry script'
  },
  {
    slug: 'lashes-saloon',
    name: 'Lashes Saloon',
    repo: 'fs_lashessaloon',
    category: 'scripts',
    seoKeywords: 'FiveM lashes saloon script'
  },
  {
    slug: 'loading-screen',
    name: 'Loading Screen v1',
    repo: 'fs_loadingscreen',
    category: 'scripts',
    seoKeywords: 'FiveM loading screen FWB Studio'
  },
  {
    slug: 'nails-saloon',
    name: 'Nails Saloon',
    repo: 'fs_nailssaloon',
    category: 'scripts',
    seoKeywords: 'FiveM nails saloon script ESX QBCore'
  },
  {
    slug: 'npc-medic',
    name: 'Npc Medic',
    repo: 'fs_npcmedic',
    category: 'scripts',
    seoKeywords: 'FiveM NPC medic script'
  },
  {
    slug: 'notify',
    name: 'Notify',
    repo: 'fs_notify',
    category: 'scripts',
    seoKeywords: 'FiveM notify system FWB Studio'
  },
  {
    slug: 'outfitbag',
    name: 'Outfitbag',
    repo: 'fs_outfitbag',
    category: 'scripts',
    seoKeywords: 'FiveM outfit bag wardrobe script'
  },
  {
    slug: 'pizza-shop',
    name: 'Pizza Shop',
    repo: 'fs_pizzashop_V1',
    category: 'scripts',
    seoKeywords: 'FiveM pizza shop job script'
  },
  {
    slug: 'items-placeables',
    name: 'Items Placeables',
    repo: 'fs_placeables',
    category: 'scripts',
    seoKeywords: 'FiveM placeable items script'
  },
  {
    slug: 'portable-parking',
    name: 'Portable Parking',
    repo: 'fs_portableparking',
    category: 'scripts',
    seoKeywords: 'FiveM portable parking script'
  },
  {
    slug: 'safezone-creator',
    name: 'Safezone Creator',
    repo: 'fs_safezonecreator',
    category: 'scripts',
    seoKeywords: 'FiveM safezone creator script'
  },
  {
    slug: 'shoes-robbery',
    name: 'Shoes Robbery',
    repo: 'fs_shoesrobbery',
    category: 'scripts',
    seoKeywords: 'FiveM shoes robbery script'
  },
  {
    slug: 'skitz-shoes-store',
    name: 'Skitz Shoes Store',
    repo: 'fs_skitz_V1',
    category: 'scripts',
    seoKeywords: 'FiveM Skitz shoes store script'
  },
  {
    slug: 'smoking',
    name: 'Smoking',
    repo: 'fs_smoking',
    category: 'scripts',
    seoKeywords: 'FiveM smoking script ESX QBCore'
  },
  {
    slug: 'starter-pack',
    name: 'Starter Pack',
    repo: 'fs_starterpack',
    category: 'scripts',
    seoKeywords: 'FiveM starter pack script'
  },
  {
    slug: 'switch',
    name: 'Switch',
    repo: 'fs_switch',
    category: 'scripts',
    seoKeywords: 'FiveM gun switch script'
  },
  {
    slug: 'tranquilizer',
    name: 'Tranquilizer',
    repo: 'fs_tranquilizer',
    category: 'scripts',
    seoKeywords: 'FiveM tranquilizer script'
  },
  {
    slug: 'trap-phone-v1',
    name: 'Trap Phone v1',
    repo: 'fs_trapphone_v1',
    category: 'scripts',
    family: 'trap-phone',
    familyLabel: 'Trap Phone',
    seoKeywords: 'FiveM trap phone v1 drug script'
  },
  {
    slug: 'trap-phone-v2',
    name: 'Trap Phone v2',
    repo: 'fs_trapphone_v2',
    category: 'scripts',
    family: 'trap-phone',
    familyLabel: 'Trap Phone',
    seoKeywords: 'FiveM trap phone v2 drug script'
  },
  {
    slug: 'useable-foods',
    name: 'Useable Foods',
    repo: 'fs_useablefoods',
    category: 'scripts',
    seoKeywords: 'FiveM useable food items script'
  },
  {
    slug: 'weave-wear',
    name: 'Weave Wear Wig Carting',
    repo: 'fs_weavewear_V1',
    category: 'scripts',
    seoKeywords: 'FiveM weave wear wig script'
  },
  {
    slug: 'white-widow',
    name: 'White Widow',
    repo: 'fs_whitewidow',
    category: 'scripts',
    seoKeywords: 'FiveM White Widow weed shop script'
  },
  {
    slug: 'wigs-bundle',
    name: 'WigsBundle Business',
    repo: 'fs_wigsbundles',
    category: 'scripts',
    seoKeywords: 'FiveM wigs bundle business script'
  },
  {
    slug: 'automatic-pistol-pack',
    name: 'Automatic Pistol Pack',
    repo: 'fs_weapons_gangautopistol_v1',
    category: 'weapons',
    seoKeywords: 'FiveM automatic pistol weapon pack install'
  },
  {
    slug: 'weapon-pack-v1',
    name: 'Weapon Pack v1',
    repo: 'fs_weapons_v1',
    category: 'weapons',
    seoKeywords: 'FiveM weapon pack v1 install ESX QBCore'
  }
]

export function applyTebexMedia(entry: ResourceEntry): ResourceEntry {
  const media = TEBEX_MEDIA[entry.slug]
  if (!media) return entry
  return {
    ...entry,
    tebexUrl: tebexPackageUrl(media.packageId),
    videos: media.videos,
    tagline: media.tagline ?? entry.tagline
  }
}

/** Catalog entries merged with Tebex purchase URLs + preview videos */
export const RESOURCES_PUBLISHED = RESOURCES.map(applyTebexMedia)

function getPages(resource: ResourceEntry): ResourcePages {
  return (
    RESOURCE_PAGES[resource.slug] ??
    resource.pages ?? {
      configuration: resource.category === 'scripts',
      commonErrors: resource.category === 'scripts' && resource.slug !== 'notify',
      questions: resource.slug === 'notify'
    }
  )
}

export function buildScriptsSidebar() {
  const scripts = RESOURCES_PUBLISHED.filter((r) => r.category === 'scripts')
  return buildScriptSidebarItems(scripts)
}

export function buildWeaponsSidebar() {
  const weapons = RESOURCES_PUBLISHED.filter((r) => r.category === 'weapons')
  return weapons.map((r) => buildResourceGroup(r))
}

/** Flat sidebar: Get Started + Bridge groups, then Scripts/Weapons section headings + products */
export function buildDocsSidebar(): SidebarItem[] {
  return [
    {
      text: '🚀 Get Started',
      collapsed: false,
      items: [
        { text: 'Docs Home', link: '/' },
        { text: 'Install FWB Scripts', link: '/install-fwb-scripts' },
        { text: 'Basic Server Knowledge', link: '/basic-server-knowledge' }
      ]
    },
    {
      text: '🌉 Bridge',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/bridge/' },
        { text: 'Supported', link: '/bridge/supported' },
        {
          text: 'Script Overrides',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/bridge/script-overrides' },
            { text: 'Client', link: '/bridge/overrides/client' },
            { text: 'Server', link: '/bridge/overrides/server' }
          ]
        },
        {
          text: 'Configuration',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/bridge/configuration/' },
            { text: 'Shared Config', link: '/bridge/configuration/shared-config' },
            { text: 'Client Config', link: '/bridge/configuration/client-config' },
            { text: 'Server Config', link: '/bridge/configuration/server-config' }
          ]
        }
      ]
    },
    {
      text: '🧩 Scripts',
      link: '/fwb-section-scripts',
      collapsed: false,
      items: buildScriptsSidebar()
    },
    {
      text: '⚔️ Weapons',
      link: '/fwb-section-weapons',
      collapsed: false,
      items: buildWeaponsSidebar()
    }
  ]
}

type SidebarItem =
  | { text: string; link: string; collapsed?: boolean; items?: SidebarItem[] }
  | { text: string; collapsed: boolean; items: SidebarItem[] }

/** Versioned families (Fraud, Trap Phone) nest under a parent; others show pages directly */
function buildScriptSidebarItems(scripts: ResourceEntry[]): SidebarItem[] {
  const items: SidebarItem[] = []
  let i = 0

  while (i < scripts.length) {
    const current = scripts[i]

    if (current.family && current.familyLabel) {
      const familyKey = current.family
      const familyLabel = current.familyLabel
      const members: SidebarItem[] = []

      while (i < scripts.length && scripts[i].family === familyKey) {
        members.push(buildResourceGroup(scripts[i]))
        i++
      }

      items.push({
        text: familyLabel,
        collapsed: true,
        items: members
      })
    } else {
      items.push(buildResourceGroup(current))
      i++
    }
  }

  return items
}

function buildResourceGroup(resource: ResourceEntry): SidebarItem {
  const base = `/resources/${resource.slug}`
  const pages = getPages(resource)
  const items: SidebarItem[] = [
    { text: 'Preview', link: `${base}/` },
    { text: 'Overview', link: `${base}/overview` },
    { text: 'Installation', link: `${base}/installation` }
  ]

  if (pages.configuration) {
    items.push({ text: 'Configuration', link: `${base}/configuration` })
  }

  if (pages.exports?.client || pages.exports?.server) {
    const exportItems: SidebarItem[] = []
    if (pages.exports.client) exportItems.push({ text: 'Client', link: `${base}/exports/client` })
    if (pages.exports.server) exportItems.push({ text: 'Server', link: `${base}/exports/server` })
    if (exportItems.length === 1) {
      items.push({ text: 'Exports', link: exportItems[0].link })
    } else {
      items.push({ text: 'Exports', collapsed: true, items: exportItems })
    }
  }

  if (pages.functions?.client || pages.functions?.server) {
    const fnItems: SidebarItem[] = []
    if (pages.functions.client) fnItems.push({ text: 'Client', link: `${base}/functions/client` })
    if (pages.functions.server) fnItems.push({ text: 'Server', link: `${base}/functions/server` })
    if (fnItems.length === 1) {
      items.push({ text: 'Functions', link: fnItems[0].link })
    } else {
      items.push({ text: 'Functions', collapsed: true, items: fnItems })
    }
  }

  if (pages.commonErrors) {
    items.push({ text: 'Common Errors', link: `${base}/common-errors` })
  }

  if (pages.questions) {
    items.push({ text: 'Questions', link: `${base}/questions` })
  }

  return {
    text: resource.name,
    collapsed: true,
    items
  }
}
