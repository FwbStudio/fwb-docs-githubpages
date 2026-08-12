---
title: Burger Shop Configuration | FWB Studio Docs
description: Configure Burger Shop — config files and key options.
---


# Burger Shop — Configuration

Edit `fs_burgershop_V1/config/config.lua` in your download.

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

Config.AdminCommand = { -- /burgershop is command to open admin menu to refill
	admingroups = {
		['admin'] = true
	},
	aces = {
		--add this in server cfg
		--add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "burgershop" allow #Capy
		['burgershop'] = true,

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

Config.Notification = { title = 'Burger Shop', duration = 5000, icon = 'fa-solid fa-burger', iconColor = nil }
Config.TextUi_Options = { -- you can make it nil if you don't want to pass anyu options with textui
	position = 'right',
	icon = 'fa-solid fa-burger',
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
	blip = { enable = true, name = 'Burger Shop', sprite = 106, color = 5, size = 1.0, radius = 0.0, radius_color = 4 },
	boss_action = vector3(-814.8870, -811.4341, 19.8723),
	management = vector3(-826.7899, -804.1658, 19.8710),
	managementRankFor = {
		price = 2,
		stock = 2,
	},
	crafting = {
		menu = vector3(-816.6198, -802.9443, 19.8720),
		data = {

			['fs_b_bacon_double_cheeseburger'] = { -- reward item name
				reward = 1,               -- reward item amount
				required = {              -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_bacon',       quantity = 1, willremove = true },
				},
				steps = {
					-- botom commented lines are example of if you want to override animation or scenario
					-- {pos = vector4(-785.6154, -613.6817, 30.2791, 94.3735),  delay = 10, msg = 'Working...', anim = { dict = 'timetable@tracy@ig_5@idle_a', clip = 'idle_a' }},	-- x, y, z, heading, second, message
					-- {pos = vector4(-783.9978, -611.5065, 30.2791, 317.2552), delay = 10, msg = 'Working...', anim = {dict = 'random@shop_tattoo', clip = '_idle_a'}},	-- x, y, z, heading, second, message
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_bacon_ham_sausage'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {      -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_bacon',       quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_bacon_king'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_bacon',       quantity = 2, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_barqs_diet_beer'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_big_fish'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_fried_fish',  quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_barqs_beer'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_cafe_decaf'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_raw_coffee', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_chicken_jr'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_coca_cola'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_diet_coke'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_dr_pepper'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_fanta_orange'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_fruit_punch'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_hamburger'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_iced_tea'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_raw_tea', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_mozzarella_sticks'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {      -- required items for crafting

					{ item = 'fs_d_cheese',       quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_sprite'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_sprite_zero'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_yello_mello'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_cheesy_tots'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_d_cheese',       quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_chicken_fries'] = { -- reward item name
				reward = 1,   -- reward item amount
				required = {  -- required items for crafting
					{ item = 'fs_b_chicken',      quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_chicken_nuggets'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{ item = 'fs_b_chicken',      quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_chocolate_cookie_shake'] = { -- reward item name
				reward = 1,            -- reward item amount
				required = {           -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_chocolate_shake'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_cookie_shake'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_double_cheeseburger'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 2, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_double_sausage_biscuit'] = { -- reward item name
				reward = 1,            -- reward item amount
				required = {           -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 2, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_egg_normous_burrito'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{ item = 'fs_b_cheese',     quantity = 1, willremove = true },
					{ item = 'fs_b_flour',      quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables', quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',      quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',    quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_family_bundle_classic'] = { -- reward item name
				reward = 1,           -- reward item amount
				required = {          -- required items for crafting
					{ item = 'fs_b_cheese',           quantity = 4, willremove = true },
					{ item = 'fs_b_burger_buns',      quantity = 4, willremove = true },
					{ item = 'fs_b_vegetables',       quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',            quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',          quantity = 2, willremove = true },
					{ item = 'fs_b_potato',           quantity = 2, willremove = true },
					{ item = 'fs_b_carbonated_water', quantity = 2, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_jalapeno_cheddar_bites'] = { -- reward item name
				reward = 1,            -- reward item amount
				required = {           -- required items for crafting
					{ item = 'fs_b_cheese',       quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_original_chicken_sandwich'] = { -- reward item name
				reward = 1,               -- reward item amount
				required = {              -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_pancake_sausage_platter'] = { -- reward item name
				reward = 1,             -- reward item amount
				required = {            -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
					{ item = 'fs_b_flour',  quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_pink_lemonade'] = { -- reward item name
				reward = 1,   -- reward item amount
				required = {  -- required items for crafting
					{ item = 'fs_d_carbonated_water', quantity = 1, willremove = true },
					{ item = 'fs_b_flavor',           quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_plain_iced_coffee'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {      -- required items for crafting
					{ item = 'fs_b_raw_coffee', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_rodeo_burger'] = { -- reward item name
				reward = 1,  -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_potato',       quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns',  quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',        quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',      quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_small_classic_fries'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{ item = 'fs_b_potato', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_small_hash_browns'] = { -- reward item name
				reward = 1,       -- reward item amount
				required = {      -- required items for crafting
					{ item = 'fs_b_potato',       quantity = 1, willremove = true },
					{ item = 'fs_b_bread_crumbs', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_soft_serve_cone'] = { -- reward item name
				reward = 1,     -- reward item amount
				required = {    -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_soft_serve_cup'] = { -- reward item name
				reward = 1,    -- reward item amount
				required = {   -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_spicy_deluxe_sandwich'] = { -- reward item name
				reward = 1,           -- reward item amount
				required = {          -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_strawberry_shake'] = { -- reward item name
				reward = 1,      -- reward item amount
				required = {     -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_sundae_pie'] = { -- reward item name
				reward = 1, -- reward item amount
				required = { -- required items for crafting
					{ item = 'fs_b_flour',  quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_texas_double_whopper'] = { -- reward item name
				reward = 1,          -- reward item amount
				required = {         -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_vanilla_shake'] = { -- reward item name
				reward = 1,   -- reward item amount
				required = {  -- required items for crafting
					{ item = 'fs_b_milk',   quantity = 1, willremove = true },
					{ item = 'fs_b_flavor', quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-822.4120, -799.2883, 19.8711, 354.0674), delay = 10, msg = 'Working...' }, -- x, y, z, heading, second, message
				}
			},
			['fs_b_whopper_with_cheese'] = { -- reward item name
				reward = 1,         -- reward item amount
				required = {        -- required items for crafting
					{ item = 'fs_b_cheese',      quantity = 1, willremove = true },
					{ item = 'fs_b_burger_buns', quantity = 1, willremove = true },
					{ item = 'fs_b_vegetables',  quantity = 1, willremove = true },
					{ item = 'fs_b_sauce',       quantity = 1, willremove = true },
					{ item = 'fs_b_chicken',     quantity = 1, willremove = true },
				},
				steps = {
					{ pos = vector4(-819.1113, -805.2896, 19.8717, 179.0076), delay = 10, msg = 'Working...', anim = { scenario = 'prop_human_bbq' } }, -- x, y, z, heading, second, message
				}
			},

		}
	},
	storage = {
		pos = vector4(-813.5227, -803.0497, 19.8725, 0.0), -- x, y, z, heading
		prop = nil,                                  --"prop_paints_can07", -- prop spawn name
		items = {
			fs_b_cheese = {
				name = 'Cheese', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_burger_buns = {
				name = 'Burger Buns', -- item name
				price = 0,   -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20,  -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_vegetables = {
				name = 'Vegetables', -- item name
				price = 0,  -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_chicken = {
				name = 'Chicken', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_sauce = {
				name = 'Sauce', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_bacon = {
				name = 'Bacon', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_flavor = {
				name = 'Flavor', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_carbonated_water = {
				name = 'Carbonated Water', -- item name
				price = 0,        -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20,       -- container size
				available = 20,   -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_milk = {
				name = 'Milk', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_bread_crumbs = {
				name = 'Bread Crumbs', -- item name
				price = 0,    -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20,   -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_flour = {
				name = 'Flour', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_fried_fish = {
				name = 'Fried Fish', -- item name
				price = 0,  -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_raw_coffee = {
				name = 'Raw Coffee', -- item name
				price = 0,  -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_raw_tea = {
				name = 'Raw Tea', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			fs_b_potato = {
				name = 'Potato', -- item name
				price = 0, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},

		}
	},
	sell_coords = { -- The coordinates where customes will buy things on this store (coordinates composed of x, y, z)
		vector3(-829.0488, -804.7988, 19.8709),
		vector3(-829.1146, -801.0811, 19.8709),
		vector3(-829.1124, -799.1459, 19.8709),
	},
	data = {
		market_items = {                  -- Here you configure the items definitions
			['fs_b_bacon_double_cheeseburger'] = { -- The item ID
				name = "Double Cheese Burger", -- The item display name
				page = 0,                 -- Set on which page this item will appear
				process = true,
			},
			['fs_b_bacon_ham_sausage'] = { -- The item ID
				name = "Ham Sausage", -- The item display name
				page = 0,         -- Set on which page this item will appear
				process = true,
			},
			['fs_b_bacon_king'] = { -- The item ID
				name = "Bacon King", -- The item display name
				page = 0,  -- Set on which page this item will appear
				process = true,
			},
			['fs_b_barqs_diet_beer'] = { -- The item ID
				name = "Barqs Diet Beer", -- The item display name
				page = 1,       -- Set on which page this item will appear
				process = true,
			},
			['fs_b_big_fish'] = { -- The item ID
				name = "Big Fish", -- The item display name
				page = 0, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_barqs_beer'] = { -- The item ID
				name = "Barqs Beer", -- The item display name
				page = 1,  -- Set on which page this item will appear
				process = true,
			},
			['fs_b_cafe_decaf'] = { -- The item ID
				name = "Cafe Decaf", -- The item display name
				page = 1,  -- Set on which page this item will appear
				process = true,
			},
			['fs_b_chicken_jr'] = { -- The item ID
				name = "Chicken Jr", -- The item display name
				page = 0,  -- Set on which page this item will appear
				process = true,
			},
			['fs_b_coca_cola'] = { -- The item ID
				name = "Coca Cola", -- The item display name
				page = 1, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_diet_coke'] = { -- The item ID
				name = "Diet Coke", -- The item display name
				page = 1, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_dr_pepper'] = { -- The item ID
				name = "Dr Pepper", -- The item display name
				page = 1, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_fanta_orange'] = { -- The item ID
				name = "Fanta Orange", -- The item display name
				page = 1,    -- Set on which page this item will appear
				process = true,
			},
			['fs_b_fruit_punch'] = { -- The item ID
				name = "Fruit Punch", -- The item display name
				page = 1,   -- Set on which page this item will appear
				process = true,
			},
			['fs_b_hamburger'] = { -- The item ID
				name = "Hamburger", -- The item display name
				page = 0, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_iced_tea'] = { -- The item ID
				name = "Iced Tea", -- The item display name
				page = 1, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_mozzarella_sticks'] = { -- The item ID
				name = "Mozzarella Sticks", -- The item display name
				page = 2,         -- Set on which page this item will appear
				process = true,
			},
			['fs_b_sprite'] = { -- The item ID
				name = "Sprite", -- The item display name
				page = 1, -- Set on which page this item will appear
				process = true,
			},
			['fs_b_sprite_zero'] = { -- The item ID
				name = "Sprite Zero", -- The item display name
				page = 1,   -- Set on which page this item will appear
				process = true,
			},
			['fs_b_yello_mello'] = { -- The item ID
				name = "Yello Mello", -- The item display name
				page = 1,   -- Set on which page this item will appear
				process = true,
			},
			['fs_b_cheesy_tots'] = { -- The item ID
				name = "Cheesy tots", -- The item display name
				page = 2,   -- Set on which page this item will appear
				process = true,
			},
			['fs_b_chicken_fries'] = { -- The item ID
				name = "Chicken Fries", -- The item display name
				page = 2,     -- Set on which page this item will appear
				process = true,
			},
			['fs_b_chicken_nuggets'] = { -- The item ID
				name = "Chicken Nuggets", -- The item display name
				page = 2,       -- Set on which page this item will appear
				process = true,
			},
			['fs_b_chocolate_cookie_shake'] = { -- The item ID
				name = "Chocolate Cookie Shake", -- The item display name
				page = 1,              -- Set on which page this item will appear
				process = true,
			},
			['fs_b_chocolate_shake'] = { -- The item ID
				name = "Chocolate Shake", -- The item display name
				page = 1,       -- Set on which page this item will appear
				process = true,
			},
			['fs_b_cookie_shake'] = { -- The item ID
				name = "Cookie Shake", -- The item display name
				page = 1,    -- Set on which page this item will appear
				process = true,
			},
			['fs_b_double_cheeseburger'] = { -- The item ID
				name = "Double Cheeseburger", -- The item display name
				page = 0,           -- Set on which page this item will appear
				process = true,
			},
			['fs_b_double_sausage_biscuit'] = { -- The item ID
				name = "Double Sausage Biscuit", -- The item display name
				page = 0,              -- Set on which page this item will appear
				process = true,
			},
			['fs_b_egg_normous_burrito'] = { -- The item ID
				name = "Normous Burrito", -- The item display name
				page = 2,           -- Set on which page this item will appear
				process = true,
			},
			['fs_b_family_bundle_classic'] = { -- The item ID
				name = "Family Bundle", -- The item display name
				page = 2,             -- Set on which page this item will appear
				process = true,
			},
			['fs_b_jalapeno_cheddar_bites'] = { -- The item ID
				name = "Jalapeno Cheddar Bites", -- The item display name
				page = 2,              -- Set on which page this item will appear
				process = true,
			},
			['fs_b_original_chicken_sandwich'] = { -- The item ID
				name = "Original Chicken Sandwich", -- The item display name
				page = 0,                 -- Set on which page this item will appear
				process = true,
			},
			['fs_b_pancake_sausage_platter'] = { -- The item ID
				name = "Pancake Sausage Platter", -- The item display name
				page = 2,               -- Set on which page this item will appear
				process = true,
			},
			['fs_b_pink_lemonade'] = { -- The item ID
				name = "Pink Lemonade", -- The item display name
				page = 1,     -- Set on which page this item will appear
				process = true,
			},
			['fs_b_plain_iced_coffee'] = { -- The item ID
				name = "Plain Iced Coffee", -- The item display name
				page = 1,         -- Set on which page this item will appear
				process = true,
			},
			['fs_b_rodeo_burger'] = { -- The item ID
				name = "Rodeo Burger", -- The item display name
				page = 0,    -- Set on which page this item will appear
				process = true,
			},

			['fs_b_small_classic_fries'] = { -- The item ID
				name = "Small Classic Fries", -- The item display name
				page = 2,           -- Set on which page this item will appear
				process = true,
			},
			['fs_b_small_hash_browns'] = { -- The item ID
				name = "Small Hash Browns", -- The item display name
				page = 2,         -- Set on which page this item will appear
				process = true,
			},
			['fs_b_soft_serve_cone'] = { -- The item ID
				name = "Soft Serve Cone", -- The item display name
				page = 2,       -- Set on which page this item will appear
				process = true,
			},
			['fs_b_soft_serve_cup'] = { -- The item ID
				name = "Soft Serve Cup", -- The item display name
				page = 2,      -- Set on which page this item will appear
				process = true,
			},
			['fs_b_spicy_deluxe_sandwich'] = { -- The item ID
				name = "Spicy Deluxe Sandwich", -- The item display name
				page = 0,             -- Set on which page this item will appear
				process = true,
			},
			['fs_b_strawberry_shake'] = { -- The item ID
				name = "Strawberry Shake", -- The item display name
				page = 1,        -- Set on which page this item will appear
				process = true,
			},
			['fs_b_sundae_pie'] = { -- The item ID
				name = "Sundae Pie", -- The item display name
				page = 2,  -- Set on which page this item will appear
				process = true,
			},
			['fs_b_texas_double_whopper'] = { -- The item ID
				name = "Texas Double Whopper", -- The item display name
				page = 0,            -- Set on which page this item will appear
				process = true,
			},
			['fs_b_vanilla_shake'] = { -- The item ID
				name = "Vanilla Shake", -- The item display name
				page = 1,     -- Set on which page this item will appear
				process = true,
			},
			['fs_b_whopper_with_cheese'] = { -- The item ID
				name = "Cheese Whopper", -- The item display name
				page = 0,           -- Set on which page this item will appear
				process = true,
			},

		},
		pagination = { -- Create pages to your market items (max 10 pages)
			[0] = { name = "Burger", icon = "fa-solid fa-burger" },
			[1] = { name = "Drinks", icon = "fa-solid fa-glass-water" },
			[2] = { name = "Extra", icon = "fa-solid fa-utensils" },

		},
	}
}
```

</div>
