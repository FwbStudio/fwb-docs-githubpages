---
title: Pizza Shop Configuration | FWB Studio Docs
description: Configure Pizza Shop — config files and key options.
---


# Pizza Shop — Configuration

Edit the config files inside `fs_pizzashop_V1/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
Config.target = true -- if this enable then please use config/config_target.lua file for zone changes

Config.format = {
	currency = 'USD', -- This is the format of the currency, so that your currency sign appears correctly
	location = 'en-US' -- This is the location of your country, to format the decimal places according to your standard
}

Config.Bill = {
	enable = true,
	keybind = 'F6'
}

Config.AdminCommand = { -- /pizzashop is command to open admin menu to refill
	admingroups = {
		['admin'] = true
	},
	aces = {
		--add this in server cfg
		--add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "pizzashop" allow #Capy
		['pizzashop'] = true,

	},
	identifiers = {
		['license:wdwdwdw66916161w6d1w64d98w4d'] = true,
		['discord:wdwdwdw66916161w6d1w64d98w4d'] = true,
	},
	characters = {
		['char1:wdwdwdw66916161w6d1w64d98w4d'] = true,
		['char2:wdwdwdw66916161w6d1w64d98w4d'] = true,
	},
}

Config.Default = {
	stock = 300,
	price = 500
```

