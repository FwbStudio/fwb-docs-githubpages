---
title: WigsBundle Business Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM WigsBundle Business script (fs_wigsbundles) — salon management, multi-step crafting, and wearable wig hair codes.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426494" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# WigsBundle Business — Configuration

Edit `fs_wigsbundles/config/config.lua` to define salon coordinates, boss rank settings, supply store auto-replenishment, multi-step assembly stations, and wearable hair component mappings.

---

## Configuration Reference Overview

```lua
-- Fallback natural hair restored when player takes off any wig
config.NonWig = {
	male = { hair_id = 0, hair_texture = 0, hair_color = 0, hair_highlight = 0 },
	female = { hair_id = 83, hair_texture = 0, hair_color = 0, hair_highlight = 0 }
}

-- Automatic supply storage replenishment
config.AutoRefill = {
	enable = true,
	quantity = 2, -- Restock count every 2 minutes
}

config.Default = {
	stock = 300,
	price = 500
}

config.job = 'wigsbundles'
config.job_label = 'Wigs Bundles'

-- Salon Coordinates & Boss Management
config.Shop = {
	blip = { enable = true, name = 'Wigs Shop', sprite = 71, color = 8, size = 1.0 },
	boss_action = vector3(117.2508, -214.2887, 54.5879),
	management = vector3(120.1331, -208.9287, 54.5879),
	managementRankFor = {
		price = 2,
		stock = 2,
	},
	crafting = {
		menu = vector3(108.2197, -211.4352, 54.5879),
		data = {
			spotlight_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 40, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
		}
	},
	storage = {
		pos = vector4(115.6470, -214.6580, 54.5879, 89.7745),
		items = {
			wigtable = { name = 'wigtable', price = 10, slots = 20, available = 20, regeneration = 1 },
			sewinkit = { name = 'sewinkit', price = 10, slots = 20, available = 20, regeneration = 1 },
			wigcap = { name = 'wigcap', price = 10, slots = 20, available = 20, regeneration = 1 },
			hairbundles = { name = 'hairbundles', price = 10, slots = 20, available = 20, regeneration = 1 },
		}
	},
	sell_coords = {
		vector3(118.3519, -207.1002, 54.5877),
	},
	data = {
		market_items = {
			spotlight_wig = {
				name = "Spotlight Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = { price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
					delivery = { price = { min = 1, max = 20 }, quantity = { min = 1, max = 40 } },
					female = { hair_id = 0, hair_texture = 0, hair_color = 1, hair_highlight = 1 },
				}
			},
		}
	}
}
```

---

## Configuration Parameter Details

* **`config.NonWig`**: Defines the default bald or baseline hair IDs restored when a character un-equips any wig item.
* **`config.Shop.crafting.data`**: Configures multi-station assembly stages (`steps`), required supplies (`wigcap`, `sewinkit`, `hairbundles`), and payout counts.
* **`item_data.female` / `item_data.male`**: Links specific GTA V hair IDs and texture palette indexes to the wearable wig items.
