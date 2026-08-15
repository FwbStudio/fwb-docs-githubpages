---
title: Icebox Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Icebox script (fs_icebox) — framework, crafting recipes, materials, and store settings.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426486" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Icebox — Configuration

Edit `fs_icebox/config/Config.lua` to configure framework settings, billing keybinds, store coordinates, crafting recipes, storage replenishment, and market items.

---

## Complete `config/Config.lua` Reference

```lua
Config = {}

-- Framework Settings ('esx', 'qb', or 'qbox')
Config.Framework = 'esx'

-- Locale & Currency Format
Config.Locale = "en"
Config.format = {
    currency = 'USD',   -- Currency symbol display format
    location = 'en-US' -- Location code for decimal & comma formatting
}

-- F6 Billing System Settings
Config.Bill = {
    enable = true,
    keybind = 'F6'
}

-- Admin Permission Groups (for in-game management commands)
Config.AdminGroups = {
    admin = true,
    superadmin = true,
}

-- Default Stock & Pricing Parameters
Config.Default = {
    stock = 300,
    price = 500
}

-- Shop Settings & Business Locations
Config.Shop = {
    blip = { enable = true, name = 'IceBox', sprite = 617, color = 3, size = 1.0, radius = 0.0, radius_color = 4 },
    boss_action = vector3(-779.9202, -609.2521, 30.2791),
    management = vector3(-784.5740, -609.1632, 30.2791),
    managementRankFor = {
        price = 2,
        stock = 2,
    },
    crafting = {
        menu = vector3(-783.0508, -613.7780, 30.2791),
        data = {
            -- Chains Crafting
            chain_is = {
                reward = 1,
                required = {
                    { item = 'gold_bar',    quantity = 1,  willremove = true },
                    { item = 'fs_chain',    quantity = 1,  willremove = true },
                    { item = 'white_stone', quantity = 25, willremove = true },
                },
                steps = {
                    { pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...', anim = { dict = 'timetable@tracy@ig_5@idle_a', clip = 'idle_a' } },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...', anim = { scenario = 'PROP_HUMAN_BBQ' } },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                }
            },
            chain_medal = {
                reward = 1,
                required = {
                    { item = 'gold_bar', quantity = 1, willremove = true },
                    { item = 'fs_chain', quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                }
            },
            chain_ls = {
                reward = 1,
                required = {
                    { item = 'gold_bar',    quantity = 1,  willremove = true },
                    { item = 'fs_chain',    quantity = 1,  willremove = true },
                    { item = 'white_stone', quantity = 25, willremove = true },
                },
                steps = {
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                }
            },
            chain_triangle = {
                reward = 1,
                required = {
                    { item = 'platinum_bar', quantity = 1, willremove = true },
                    { item = 'fs_chain',     quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                }
            },
            chain_dogtag = {
                reward = 1,
                required = {
                    { item = 'gold_bar', quantity = 1, willremove = true },
                    { item = 'fs_chain', quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...' },
                }
            },
            chain_richman = {
                reward = 1,
                required = {
                    { item = 'gold_bar',     quantity = 1, willremove = true },
                    { item = 'diamond',      quantity = 1, willremove = true },
                    { item = 'fs_chain',     quantity = 1, willremove = true },
                    { item = 'platinum_bar', quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...' },
                }
            },

            -- Earrings Crafting
            casino_earrings = {
                reward = 1,
                required = {
                    { item = 'earring_material', quantity = 1, willremove = true },
                    { item = 'platinum_bar',     quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                }
            },
            diagold_earrings = {
                reward = 1,
                required = {
                    { item = 'gold_bar',         quantity = 1,  willremove = true },
                    { item = 'diamond',          quantity = 1,  willremove = true },
                    { item = 'white_stone',      quantity = 15, willremove = true },
                    { item = 'earring_material', quantity = 1,  willremove = true },
                },
                steps = {
                    { pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.4758, -615.5659, 30.2791, 173.4628), delay = 10, msg = 'Working...' },
                }
            },

            -- Bracelet Crafting
            skull_bracelet = {
                reward = 1,
                required = {
                    { item = 'platinum_bar', quantity = 2, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.9863, -612.6027, 30.2791, 271.0766), delay = 10, msg = 'Working...' },
                    { pos = vector4(-784.0729, -611.6122, 30.2791, 309.3564), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.5042, -615.7595, 30.2791, 164.8279), delay = 10, msg = 'Working...' },
                }
            },

            -- Necklaces Crafting
            necklace_family = {
                reward = 1,
                required = {
                    { item = 'gold_bar', quantity = 2, willremove = true },
                    { item = 'fs_chain', quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-785.4087, -613.8218, 30.2791, 87.9513),  delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9635, -611.6165, 30.2791, 325.2242), delay = 10, msg = 'Working...' },
                    { pos = vector4(-785.3977, -615.6696, 30.2791, 163.2412), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9635, -611.6165, 30.2791, 325.2242), delay = 10, msg = 'Working...' },
                }
            },

            -- Watches Crafting
            crowex_black = {
                reward = 1,
                required = {
                    { item = 'platinum_bar',   quantity = 1, willremove = true },
                    { item = 'watch_material', quantity = 1, willremove = true },
                },
                steps = {
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...' },
                    { pos = vector4(-783.8964, -612.7284, 30.2791, 268.5814), delay = 10, msg = 'Working...' },
                }
            },
        }
    },
    storage = {
        pos = vector4(-779.7474, -612.2902, 30.2791, 267.1196),
        prop = nil,
        items = {
            diamond          = { name = 'Diamond', price = 10, slots = 20, available = 20, regeneration = 1 },
            gold_bar         = { name = 'Gold Bar', price = 10, slots = 20, available = 20, regeneration = 1 },
            platinum_bar     = { name = 'platinum Bar', price = 10, slots = 20, available = 20, regeneration = 1 },
            watch_material   = { name = 'Watch Material', price = 10, slots = 20, available = 20, regeneration = 1 },
            blue_stone       = { name = 'Blue Stone', price = 10, slots = 20, available = 20, regeneration = 1 },
            green_stone      = { name = 'Green Stone', price = 10, slots = 20, available = 20, regeneration = 1 },
            red_stone        = { name = 'Red Stone', price = 10, slots = 20, available = 20, regeneration = 1 },
            white_stone      = { name = 'White Stone', price = 10, slots = 20, available = 20, regeneration = 1 },
            fs_chain         = { name = 'chain', price = 10, slots = 20, available = 20, regeneration = 1 },
            black_stone      = { name = 'black Stone', price = 10, slots = 20, available = 20, regeneration = 1 },
            earring_material = { name = 'earring base', price = 10, slots = 20, available = 20, regeneration = 1 },
        }
    },
    sell_coords = {
        vector3(-783.9969, -606.9702, 30.2791),
        vector3(-782.1405, -607.0060, 30.2791),
        vector3(-780.0462, -607.0831, 30.2791),
    },
    data = {
        market_items = {
            chain_is        = { name = "Chain IS", page = 0, process = true },
            chain_medal     = { name = "Chain Medal", page = 0, process = true },
            chain_ls        = { name = "Chain LS", page = 0, process = true },
            chain_richman   = { name = "Chain Richman", page = 0, process = true },
            chain_dogtag    = { name = "Chain Dogtag", page = 0, process = true },
            chain_triangle  = { name = "Chain Triangle", page = 0, process = true },
            necklace_family = { name = "Necklace Family", page = 1, process = true },
            necklace_dogtag = { name = "Necklace Dogtag", page = 1, process = true },
            casino_earrings = { name = "Casino Earrings", page = 2, process = true },
            diagold_earrings= { name = "Diagold Earrings", page = 2, process = true },
            covgari_gold    = { name = "Covgari Gold", page = 3, process = true },
            crowex_black    = { name = "Crowex Black", page = 3, process = true },
            skull_bracelet  = { name = "Skull Bracelet", page = 4, process = true },
        },
        pagination = {
            [0] = { name = "Chains", icon = 'fa-link' },
            [1] = { name = "Necklace", icon = 'fa-gem' },
            [2] = { name = "Earrings", icon = 'fa-assistive-listening-systems' },
            [3] = { name = "Watches", icon = 'fa-clock' },
            [4] = { name = "Breshlet", icon = 'fa-hand-sparkles' },
        },
    }
}
```
