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
  commands?: boolean
  specialFeature?: boolean
  exports?: { client?: boolean; server?: boolean }
  editableFiles?: { client?: boolean; server?: boolean }
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
  /** Internal tracking flag: marked true once documentation is fully audited */
  audited?: boolean
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
  scripts: 'Scripts Catalog',
  weapons: 'Weapons'
}

export const RESOURCES: ResourceEntry[] = [
  {
    slug: 'bodybag',
    name: 'Bodybag',
    repo: 'fs_bodybag',
    category: 'scripts',
    seoKeywords: 'FiveM bodybag script ESX QBCore',
    audited: true
  },
  {
    slug: 'burger-shop',
    name: 'Burger Shop',
    repo: 'fs_burgershop',
    category: 'scripts',
    seoKeywords: 'FiveM burger shop job script',
    audited: true
  },
  {
    slug: 'carwipe',
    name: 'Carwipe',
    repo: 'fs_carwipe',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM car wipe admin script'
  },
  {
    slug: 'chopshop',
    name: 'ChopShop',
    repo: 'fs_chopshop',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM chop shop script ESX QBCore'
  },
  {
    slug: 'duty-system',
    name: 'Duty System',
    repo: 'fs_dutysystem',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM duty system ESX QBCore Qbox'
  },
  {
    slug: 'fraud-v1',
    name: 'Fraud System v1',
    repo: 'fs_fraud_v1',
    category: 'scripts',
    family: 'fraud',
    familyLabel: 'Fraud',
    audited: true,
    seoKeywords: 'FiveM fraud script v1 ESX QBCore'
  },
  {
    slug: 'fraud-v2',
    name: 'Fraud System v2',
    repo: 'fs_fraud',
    category: 'scripts',
    family: 'fraud',
    familyLabel: 'Fraud',
    audited: true,
    seoKeywords: 'FiveM fraud script v2 ESX QBCore Qbox'
  },
  {
    slug: 'gun-jamming',
    name: 'Gun Jamming',
    repo: 'fs_gunjamming',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM gun jamming script'
  },
  {
    slug: 'icebox',
    name: 'Icebox',
    repo: 'fs_icebox',
    category: 'scripts',
    family: 'icebox',
    familyLabel: 'Icebox',
    audited: true,
    seoKeywords: 'FiveM icebox jewelry script'
  },
  {
    slug: 'clothing-as-item',
    name: 'Clothing As Item',
    repo: 'fs_clothingitem',
    category: 'scripts',
    family: 'icebox',
    familyLabel: 'Icebox',
    audited: true,
    seoKeywords: 'FiveM clothing as item jewelry wardrobe script'
  },
  {
    slug: 'lashes-saloon',
    name: 'Lashes Saloon',
    repo: 'fs_lashessaloon',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM lashes saloon script'
  },
  {
    slug: 'loading-screen',
    name: 'Loading Screen',
    repo: 'fs_loadingscreen',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM loading screen FWB Studio'
  },
  {
    slug: 'nails-saloon',
    name: 'Nails Saloon',
    repo: 'fs_nailssaloon',
    category: 'scripts',
    audited: true,
    seoKeywords: 'FiveM nails saloon script ESX QBCore'
  },
  {
    slug: 'npc-medic',
    name: 'NPC Medic',
    repo: 'fs_npcmedic',
    category: 'scripts',
    seoKeywords: 'FiveM NPC medic script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'notify',
    name: 'Notify',
    repo: 'fs_notify',
    category: 'scripts',
    seoKeywords: 'FiveM notification system custom notify ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'outfitbag',
    name: 'Outfit Bag',
    repo: 'fs_outfitbag',
    category: 'scripts',
    seoKeywords: 'FiveM outfit bag portable wardrobe clothing script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'pizza-shop',
    name: 'Pizza Shop',
    repo: 'fs_pizzashop',
    category: 'scripts',
    seoKeywords: 'FiveM pizza shop job script',
    audited: true
  },
  {
    slug: 'items-placeables',
    name: 'Items Placeables',
    repo: 'fs_placeables',
    category: 'scripts',
    seoKeywords: 'FiveM placeable items physical prop placement script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'portable-parking',
    name: 'Portable Parking',
    repo: 'fs_portableparking',
    category: 'scripts',
    seoKeywords: 'FiveM portable parking garage anywhere impound script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'safezone-creator',
    name: 'Safezone Creator',
    repo: 'fs_safezonecreator',
    category: 'scripts',
    seoKeywords: 'FiveM safezone creator in-game zone editor script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'shoes-robbery',
    name: 'Shoes Robbery',
    repo: 'fs_shoesrobbery',
    category: 'scripts',
    seoKeywords: 'FiveM shoes robbery sneaker store heist script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'skitz-shoes-store',
    name: 'Skitz Shoes Store',
    repo: 'fs_skitz',
    category: 'scripts',
    seoKeywords: 'FiveM Skitz shoes store sneaker crafting business script ESX QBCore Qbox',
    audited: true
  },
  /*
  {
    slug: 'starter-pack',
    name: 'Starter Pack',
    repo: 'fs_starterpack',
    category: 'scripts',
    seoKeywords: 'FiveM starter pack script'
  },
  */
  {
    slug: 'switch',
    name: 'Switch',
    repo: 'fs_switch',
    category: 'scripts',
    seoKeywords: 'FiveM weapon switch glock full auto script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'tranquilizer',
    name: 'Tranquilizer',
    repo: 'fs_tranquilizer',
    category: 'scripts',
    seoKeywords: 'FiveM tranquilizer dart dead player medical script ESX QBCore Qbox',
    audited: true
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
    slug: 'weave-wear',
    name: 'Wig Craft & Sell',
    repo: 'fs_weavewear',
    category: 'scripts',
    seoKeywords: 'FiveM wigs craft and sell weave wear salon hair business script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'white-widow',
    name: 'White Widow',
    repo: 'fs_whitewidow',
    category: 'scripts',
    family: 'white-widow',
    familyLabel: 'White Widow',
    seoKeywords: 'FiveM White Widow weed shop dispensary farming script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'smoking',
    name: 'Smoking',
    repo: 'fs_smoking',
    category: 'scripts',
    family: 'white-widow',
    familyLabel: 'White Widow',
    seoKeywords: 'FiveM smoking weed joints vape script ESX QBCore Qbox',
    audited: true
  },
  {
    slug: 'wigs-bundle',
    name: 'WigsBundle Business',
    repo: 'fs_wigsbundles',
    category: 'scripts',
    seoKeywords: 'FiveM wigs bundle salon business enterprise script ESX QBCore Qbox',
    audited: true
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
      collapsed: false,
      items: buildScriptsSidebar()
    },
    {
      text: '⚔️ Weapons',
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

  if (pages.commands) {
    items.push({ text: 'Commands', link: `${base}/commands` })
  }

  if (pages.specialFeature) {
    items.push({ text: 'Special Feature', link: `${base}/special-feature` })
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

  if (pages.editableFiles?.client || pages.editableFiles?.server) {
    const editItems: SidebarItem[] = []
    if (pages.editableFiles.client) editItems.push({ text: 'Client', link: `${base}/editable-files/client` })
    if (pages.editableFiles.server) editItems.push({ text: 'Server', link: `${base}/editable-files/server` })
    if (editItems.length === 1) {
      items.push({ text: 'Editable Files', link: editItems[0].link })
    } else {
      items.push({ text: 'Editable Files', collapsed: true, items: editItems })
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
