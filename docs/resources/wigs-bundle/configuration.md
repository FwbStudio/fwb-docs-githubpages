---
title: WigsBundle Business Configuration | FWB Studio Docs
description: Configure WigsBundle Business — config files and key options.
---


# WigsBundle Business — Configuration

Edit the config files inside `fs_wigsbundles/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
-- if no wig on player then these hair will be set
-- if no wig on player then these hair will be set
config.NonWig = {
	male = { hair_id = 0, hair_texture = 0, hair_color = 0, hair_highlight = 0 },
	female = { hair_id = 83, hair_texture = 0, hair_color = 0, hair_highlight = 0 }
}

config.AutoRefill = { -- only use if you want shop should automatic refill on purchase
	enable = true,
	quantity = 2,     -- how much quantitiy refill every 2 mint
}

config.Default = {
	stock = 300,
	price = 500
}

config.restriction = {
	phone = {
		enable = false,         -- make it true if u want to restrict phone to female or male only
		allowed_ped = {         -- only keep that peds which you want to allowed to use phone
			[`mp_f_freemode_01`] = true, -- female ped
			--	[`mp_m_freemode_01`] = true   -- male ped
		}
	},
	table = {
		enable = true,          -- make it true if u want to restrict table to female or male only
		allowed_ped = {         -- only keep that peds which you want to allowed to use table
			[`mp_f_freemode_01`] = true, -- female ped
			[`mp_m_freemode_01`] = true -- male ped
		}
	}
}

config.job = 'wigsbundles'
```

