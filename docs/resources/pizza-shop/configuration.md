---
title: Pizza Shop Configuration | FWB Studio Docs
description: Configure Pizza Shop — config files and key options.
---


# Pizza Shop — Configuration

Edit `fs_pizzashop_V1/config/config.lua` in your download.

<div class="fwb-config-block">

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
}

Config.Progbar_circle = false             -- if this is true then it will show circle progress bar else it will show line progress bar
Config.Progbar_circle_position = 'bottom' -- if you want to show circle progress bar then you can set position of it. middle, bottom

Config.Notification = { title = 'Pizza Shop', duration = 5000, icon = 'fa-solid fa-pizza-slice', iconColor = nil }
Config.TextUi_Options = { -- you can make it nil if you don't want to pass anyu options with textui
	position = 'right',
	icon = 'fa-solid fa-pizza-slice',
	style = {
		borderRadius = 10,
		backgroundColor = "rgba(80, 230, 230, 0.589)",
		color = 'white',
	}
}

Config.AutoRefill = {
	enable = false, -- if this is true then it will refill stock automatically
	interval = 5, -- each 5 mint will refill
	stock = 4,   -- how many stock will refill according to upper time
	max_stock = 300 -- max stock refill limit
}

Config.Markers = { -- only work when config.target = false
	['boss_action'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 22,
		marker_color = { r = 255, g = 0, b = 0, a = 100 },
		marker_draw_distance = 4.0,
		marker_access_distance = 1.0
	},
	['management'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 20,
		marker_color = { r = 255, g = 0, b = 0, a = 100 },
		marker_draw_distance = 4.0,
		marker_access_distance = 1.0
	},
	['crafting'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 24,
		marker_color = { r = 0, g = 255, b = 0, a = 255 },
		marker_draw_distance = 4.0,
		marker_access_distance = 1.0
	},
	['storage'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 20,
		marker_color = { r = 255, g = 0, b = 0, a = 100 },
		marker_draw_distance = 4.0,
		marker_access_distance = 1.0
	},
	['sell_coords'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 21,
		marker_color = { r = 255, g = 0, b = 0, a = 100 },
		marker_draw_distance = 4.0,
		marker_access_distance = 1.0
	},
	['delivery'] = {
		enable = true, -- make it true or false to enable or disable marker preview
		marker_id = 21,
		marker_color = { r = 255, g = 0, b = 0, a = 100 },
		marker_draw_distance = 10.0,
		marker_access_distance = 1.0
	},
}

Config.Shop = {
	blip = { enable = true, name = 'Pizza Shop', sprite = 267, color = 31, size = 1.0, radius = 0.0, radius_color = 4 },
	boss_action = vector3(-1385.1554, -908.9008, 11.2301),
	management = vector3(-1381.0981, -921.9841, 11.2497),
	managementRankFor = {
		price = 2,
		stock = 2,
	},
	crafting = {
		menu = vector3(-1378.8514, -919.2130, 11.2493),
		data = {

			['fs_d_buffalo_chicken'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					-- botom commented lines are example of if you want to override animation or scenario
					-- {pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...', anim = { dict = 'timetable@tracy@ig_5@idle_a', clip = 'idle_a' }},	-- x, y, z, heading, second, message
					-- {pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...', anim = {dict = 'random@shop_tattoo', clip = '_idle_a'}},	-- x, y, z, heading, second, message
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_cali_chicken_bacon'] = { -- reward item name
				reward = 1,        -- reward item amount
				required = {       -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_extra_vagan_zza'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_honolulu_hawaiian'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {      -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_meat_zza'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_memphis_bbq_chicken'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_pacific_veggie'] = { -- reward item name
				reward = 1,    -- reward item amount
				required = {   -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_philly_cheese_steak'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_pizza_deluxe'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_spinach_feta'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_ultimate_pepperoni'] = { -- reward item name
				reward = 1,        -- reward item amount
				required = {       -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_wisconsin_cheese'] = { -- reward item name
				reward = 1,      -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_dough', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_toppings', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_chicken_bacon_ranch'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_bacon', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_chicken_parm'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_chicken_habanero'] = { -- reward item name
				reward = 1,      -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_italian_sandwich'] = { -- reward item name
				reward = 1,      -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_mediterranean_veggie'] = { -- reward item name
				reward = 1,          -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_philly_cheese_sandwich'] = { -- reward item name
				reward = 1,            -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_burger_buns', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1376.4630, -921.6383, 11.2496, 225.8771), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_chicken_carbonara'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_pasta', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_italian_sausage_marinara'] = { -- reward item name
				reward = 1,              -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_pasta', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_p_chicken_alfredo'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_pasta', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
					{item = 'fs_d_chicken', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_pasta_primavera'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {     -- required items for crafting
					{item = 'fs_d_pasta', quantity = 1, willremove = true},
					{item = 'fs_d_cheese', quantity = 1, willremove = true},
					{item = 'fs_d_vegetables', quantity = 1, willremove = true},
					{item = 'fs_d_sauce', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1374.7096, -919.9312, 11.2481, 318.9742), delay = 10, msg = 'Working...', anim = { dict = 'random@shop_tattoo', clip = '_idle_a' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_coca_cola'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					  {item = 'fs_d_carbonated_water', quantity = 1, willremove = true},
					  {item = 'fs_d_flavor', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1378.2283, -924.5917, 11.2496, 305.0302), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_dr_pepper'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					  {item = 'fs_d_carbonated_water', quantity = 1, willremove = true},
					  {item = 'fs_d_flavor', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1378.2283, -924.5917, 11.2496, 305.0302), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_fanta_orange'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					  {item = 'fs_d_carbonated_water', quantity = 1, willremove = true},
					  {item = 'fs_d_flavor', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1378.2283, -924.5917, 11.2496, 305.0302), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_fruit_punch'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					  {item = 'fs_d_carbonated_water', quantity = 1, willremove = true},
					  {item = 'fs_d_flavor', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1378.2283, -924.5917, 11.2496, 305.0302), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_d_sprite'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					  {item = 'fs_d_carbonated_water', quantity = 1, willremove = true},
					  {item = 'fs_d_flavor', quantity = 1, willremove = true},
				},
				steps = {
					{ pos = vector4(-1378.2283, -924.5917, 11.2496, 305.0302), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},




		}
	},
	storage = {
		pos = vector4(-1381.4829, -915.7298, 11.2489, 128.9511), -- x, y, z, heading
		prop = nil,                                        --"prop_paints_can07", -- prop spawn name
		items = {
			fs_d_dough = {
			    name = 'Dough',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_toppings = {
			    name = 'Toppings',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_cheese = {
			    name = 'Cheese',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_burger_buns = {
			    name = 'Burger Buns',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_vegetables = {
			    name = 'Vegetables',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_chicken = {
			    name = 'Chicken',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_pasta = {
			    name = 'Pasta',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_sauce = {
			    name = 'Sauce',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_bacon = {
			    name = 'Bacon',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_flavor = {
			    name = 'Flavor',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},
			fs_d_carbonated_water = {
			    name = 'Carbonated Water',                        		-- item name
			    price = 0,                                     -- price of the item. set it 0 if you don't want to buy with society money
			    slots = 20,                                     -- container size
			    available = 20,                                 -- available in stock
			    regeneration = 1,                              -- in minute
			},


		}
	},
	sell_coords = { -- The coordinates where customes will buy things on this store (coordinates composed of x, y, z)
		vector3(-1384.1284, -921.3237, 11.2646),
		vector3(-1382.1570, -923.7496, 11.2578),
		vector3(-1380.3414, -925.8734, 11.2518),
	},
	data = {
		market_items = {        -- Here you configure the items definitions
			['fs_d_buffalo_chicken'] = { -- The item ID
				name = "Buffalo Chicken", -- The item display name
				page = 0,       -- Set on which page this item will appear
				process = true,
			},
			['fs_d_cali_chicken_bacon'] = { -- The item ID
				name = "Cali Chicken Bacon", -- The item display name
				page = 0,          -- Set on which page this item will appear
				process = true,
			},
			['fs_d_extra_vagan_zza'] = { -- The item ID
				name = "Extra Vagan", -- The item display name
				page = 0,       -- Set on which page this item will appear
				process = true,
			},
			['fs_d_honolulu_hawaiian'] = { -- The item ID
				name = "Honolulu Hawaiian", -- The item display name
				page = 0,         -- Set on which page this item will appear
				process = true,
			},
			['fs_d_meat_zza'] = { -- The item ID
				name = "Meat Zza", -- The item display name
				page = 0, -- Set on which page this item will appear
				process = true,
			},
			['fs_d_memphis_bbq_chicken'] = { -- The item ID
				name = "BBQ Chicken", -- The item display name
				page = 0,           -- Set on which page this item will appear
				process = true,
			},
			['fs_d_pacific_veggie'] = { -- The item ID
				name = "Pacific Veggie", -- The item display name
				page = 0,      -- Set on which page this item will appear
				process = true,
			},
			['fs_d_philly_cheese_steak'] = { -- The item ID
				name = "Philly Cheese", -- The item display name
				page = 0,           -- Set on which page this item will appear
				process = true,
			},
			['fs_d_pizza_deluxe'] = { -- The item ID
				name = "Pizza Deluxe", -- The item display name
				page = 0,    -- Set on which page this item will appear
				process = true,
			},
			['fs_d_spinach_feta'] = { -- The item ID
				name = "Spinach Feta", -- The item display name
				page = 0,    -- Set on which page this item will appear
				process = true,
			},
			['fs_d_ultimate_pepperoni'] = { -- The item ID
				name = "Ultimate Pepperoni", -- The item display name
				page = 0,          -- Set on which page this item will appear
				process = true,
			},
			['fs_d_wisconsin_cheese'] = { -- The item ID
				name = "Wisconsin Cheese", -- The item display name
				page = 0,        -- Set on which page this item will appear
				process = true,
			},
			['fs_d_chicken_bacon_ranch'] = { -- The item ID
				name = "Bacon Ranch", -- The item display name
				page = 1,           -- Set on which page this item will appear
				process = true,
			},
			['fs_d_chicken_habanero'] = { -- The item ID
				name = "Chicken Habanero", -- The item display name
				page = 1,        -- Set on which page this item will appear
				process = true,
			},
			['fs_d_chicken_parm'] = { -- The item ID
				name = "Chicken Parm", -- The item display name
				page = 1,    -- Set on which page this item will appear
				process = true,
			},
			['fs_d_italian_sandwich'] = { -- The item ID
				name = "Italian Sandwich", -- The item display name
				page = 1,        -- Set on which page this item will appear
				process = true,
			},
			['fs_d_mediterranean_veggie'] = { -- The item ID
				name = "Mediterranean Veggie", -- The item display name
				page = 1,            -- Set on which page this item will appear
				process = true,
			},
			['fs_d_philly_cheese_sandwich'] = { -- The item ID
				name = "Cheese Sandwich", -- The item display name
				page = 1,              -- Set on which page this item will appear
				process = true,
			},
			['fs_d_chicken_carbonara'] = { -- The item ID
				name = "Chicken Carbonara", -- The item display name
				page = 2,         -- Set on which page this item will appear
				process = true,
			},
			['fs_d_italian_sausage_marinara'] = { -- The item ID
				name = "Italian Marinara", -- The item display name
				page = 2,                -- Set on which page this item will appear
				process = true,
			},
			['fs_d_p_chicken_alfredo'] = { -- The item ID
				name = "Chicken Alfredo", -- The item display name
				page = 2,         -- Set on which page this item will appear
				process = true,
			},
			['fs_d_pasta_primavera'] = { -- The item ID
				name = "Pasta Promavera", -- The item display name
				page = 2,       -- Set on which page this item will appear
				process = true,
			},
			['fs_d_coca_cola'] = { -- The item ID
				name = "Coca Cola", -- The item display name
				page = 3, -- Set on which page this item will appear
				process = true,
			},
			['fs_d_dr_pepper'] = { -- The item ID
				name = "Dr Pepper", -- The item display name
				page = 3, -- Set on which page this item will appear
				process = true,
			},
			['fs_d_fanta_orange'] = { -- The item ID
				name = "Fanta", -- The item display name
				page = 3,    -- Set on which page this item will appear
				process = true,
			},
			['fs_d_fruit_punch'] = { -- The item ID
				name = "Fruit Punch", -- The item display name
				page = 3,   -- Set on which page this item will appear
				process = true,
			},
			['fs_d_sprite'] = { -- The item ID
				name = "Sprite", -- The item display name
				page = 3, -- Set on which page this item will appear
				process = true,
			},


		},
		pagination = { -- Create pages to your market items (max 10 pages)
			[0] = { name = "Pizza", icon = "fa-solid fa-pizza-slice" },
			[1] = { name = "Burger", icon = "fa-solid fa-burger" },
			[2] = { name = "Pasta", icon = "fa-solid fa-bowl-rice" },
			[3] = { name = "Drinks", icon = "fa-solid fa-glass-water" },
		},
	}
}
```

</div>
