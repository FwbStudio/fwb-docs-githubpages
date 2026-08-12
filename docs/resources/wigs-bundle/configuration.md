---
title: WigsBundle Business Configuration | FWB Studio Docs
description: Configure WigsBundle Business — config files and key options.
---


# WigsBundle Business — Configuration

Edit `fs_wigsbundles/config/config.lua` in your download.

<div class="fwb-config-block">

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
config.job_label = 'Wigs Bundles'

config.Shop = {
	blip = { enable = true, name = 'Wigs Shop', sprite = 71, color = 8, size = 1.0, radius = 0.0, radius_color = 4 },
	boss_action = vector3(117.2508, -214.2887, 54.5879),
	management = vector3(120.1331, -208.9287, 54.5879),
	managementRankFor = {
		price = 2,
		stock = 2,
	},
	crafting = {
		menu = vector3(108.2197, -211.4352, 54.5879),
		data = {
			------------------------------------------------------------------------------------------------------------------------
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
			------------------------------------------------------------------------------------------------------------------------
			chulita_wig = {
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
			------------------------------------------------------------------------------------------------------------------------
			classy_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 20, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			fiesta_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			diva_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			sweetheart_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			moviestar_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			brooke_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			jenna_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			princess_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			luvme_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			owntheroom_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			icon_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			mirage_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			luxury_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			mila_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			star_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			flirt_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			ignite_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			risk_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			crowdpleaser_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			upstage_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			bossbabe_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			shortwaves_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			play_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			bonita_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			reyna_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			goddess_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			babygirl_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			luna_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			prettyplease_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			wavebabe_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			sparkle_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------

			---- Male Wigs
			m_backstage_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_blake_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_boss_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_bravo_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_edge_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_freshbraids_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_ghant_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_highfashion_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_jasper_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_knockout_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_rockstar_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_star_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_wavy_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_weekend_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			m_wildchild_wig = {
				reward = 20,
				required = {
					{ item = 'wigcap',      quantity = 1,  willremove = true },
					{ item = 'sewinkit',    quantity = 1,  willremove = true },
					{ item = 'hairbundles', quantity = 10, willremove = true },
				},
				steps = {
					{ pos = vector4(107.9262, -211.2260, 54.5882, 162.3454), delay = 5, msg = 'Working...' },
					{ pos = vector4(110.9501, -212.3490, 54.5879, 166.5708), delay = 5, msg = 'Working...' },
				}
			},
			
			------------------------------------------------------------------------------------------------------------------------
			
			 
		}
	},
	storage = {
		pos = vector4(115.6470, -214.6580, 54.5879, 89.7745), -- x, y, z, heading
		prop = nil,
		items = {
			wigtable = {
				name = 'wigtable',
				price = 10, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			sewinkit = {
				name = 'sewinkit', -- item name
				price = 10, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			wigcap = {
				name = 'wigcap', -- item name
				price = 10, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},
			hairbundles = {
				name = 'hairbundles', -- item name
				price = 10, -- price of the item. set it 0 if you don't want to buy with society money
				slots = 20, -- container size
				available = 20, -- available in stock
				regeneration = 1, -- in minute
			},

		}
	},
	sell_coords = {
		vector3(118.3519, -207.1002, 54.5877),
		 
	},
	data = {
		market_items = {
			------------------------------------------------------------------------------------------------------------------------
			spotlight_wig = {
				name = "Spotlight Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 0, hair_texture = 0, hair_color = 1, hair_highlight = 1 },

					whitelist = { -- template of if you want to add a whitelist for items
						admingroups = {
							['admin'] = true
						},
						jobgroups = {
							['police'] = 0
						},

						aces = {
							['spotlight_wig'] = true,
						},
						identifiers = {
							['lic:asasasa'] = true,
							['discord:asasas'] = true,
						},
						characters = {
							['char1:asasasasas'] = true,
							['char2:asasasasas'] = true,
						}
					}
				}
			},

			------------------------------------------------------------------------------------------------------------------------
			chulita_wig = {
				name = "Chulita Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 1, hair_texture = 1, hair_color = 1, hair_highlight = 1 },
				}
			},
			------------------------------------------------------------------------------------------------------------------------
			classy_wig = {
				name = "classy Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 2, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			fiesta_wig = {
				name = "Fiesta Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 3, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			diva_wig = {
				name = "Diva Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 4, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			sweetheart_wig = {
				name = "SweetHeart Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 5, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			moviestar_wig = {
				name = "Mirage Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 6, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			brooke_wig = {
				name = "Brooke Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 7, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			jenna_wig = {
				name = "Wig 5",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 8, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			princess_wig = {
				name = "Princess Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 9, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			luvme_wig = {
				name = "Luvme Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 10, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			owntheroom_wig = {
				name = "Own The Room Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 11, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			icon_wig = {
				name = "Icon Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 12, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			mirage_wig = {
				name = "Mirage Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 13, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			luxury_wig = {
				name = "Luxury Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 14, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			mila_wig = {
				name = "Mila Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 15, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			star_wig = {
				name = "Star Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 16, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			flirt_wig = {
				name = "Flirt Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 17, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			ignite_wig = {
				name = "Ignite Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 18, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			risk_wig = {
				name = "Risk Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 19, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			crowdpleaser_wig = {
				name = "Crowd Pleaser Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 20, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			upstage_wig = {
				name = "Upstage  Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 21, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			bossbabe_wig = {
				name = "Boss Babe Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 22, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			shortwaves_wig = {
				name = "Short Waves Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 23, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			play_wig = {
				name = "Play Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 24, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------

			bonita_wig = {
				name = "Bonita Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 26, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			reyna_wig = {
				name = "Reyna Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 27, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			goddess_wig = {
				name = "Goddess Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 44, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			babygirl_wig = {
				name = "Babygirl wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 45, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			luna_wig = {
				name = "Luna Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 46, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			prettyplease_wig = {
				name = "Pretty Please Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 47, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			wavebabe_wig = {
				name = "Wave Babe Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 48, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			sparkle_wig = {
				name = "Sparkle Wig",
				page = 0,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					female = { hair_id = 56, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			-- Male Wigs
			m_rockstar_wig = {
				name = "Rockstar Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 1, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_star_wig = {
				name = "Star Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 2, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_backstage_wig = {
				name = "Backstage Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 3, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_wavy_wig = {
				name = "Wavy Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 4, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_bravo_wig = {
				name = "Bravo Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 5, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_ghant_wig = {
				name = "Ghant Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 6, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_boss_wig = {
				name = "Boss Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 7, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_knockout_wig = {
				name = "Knockout Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 8, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_highfashion_wig = {
				name = "HIgh Fashion Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 9, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_jasper_wig = {
				name = "Jasper Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 10, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_edge_wig = {
				name = "Edge Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 11, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_freshbraids_wig = {
				name = "Fresh braids Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 12, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_blake_wig = {
				name = "Blake Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 13, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_weekend_wig = {
				name = "Weekend Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 15, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			m_wildchild_wig = {
				name = "Wild Child Wig",
				page = 1,
				process = true,
				item_data = {
					single_sell = {
						price = { min = 1, max = 10 },
						quantity = { min = 1, max = 10 },
					},
					delivery = {
						price = { min = 1, max = 20 },
						quantity = { min = 1, max = 40 }
					},
					male = { hair_id = 15, hair_texture = 0, hair_color = 1, hair_highlight = 1 }
				}

			},
			------------------------------------------------------------------------------------------------------------------------
			-- Add here new items whic you can create from admin command /wigitem
 



		},

		pagination = { -- Create pages to your market items (max 10 pages)
			[0] = { name = "Female Wigs", icon = "fa-solid fa-person-dress" },
			[1] = { name = "Male Wigs", icon = "fa-solid fa-person" },
		},
	}
}



config.format = {
	currency = 'USD', -- This is the format of the currency, so that your currency sign appears correctly
	location = 'en-US' -- This is the location of your country, to format the decimal places according to your standard
}

config.Bill = {
	enable = true,
	keybind = 'F6'
}


config.wigsrob = {
	enable = true,
	handusp_needed = true,
	command = 'robwig',
	key = 'h'
}

config.remove_own_wig = {
	enable = true,
	command = 'removewig'
}

-- /wigsbundles is command to open admin menu to refill
config.AdminMenu = {
	command = 'wigsbundles',
	permissions = {

		admingroups = {
			['admin'] = true
		},
		-- support job according to ur framework
		jobgroups = {
			--    ['police'] = 0
		},

		--add this in server cfg
		--add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "fs_wigsbundles" allow #Capy
		aces = {
			['fs_wigsbundles'] = true,
		},
		-- support default identifier
		identifiers = {
			['lic:asasasa'] = true,
			['discord:asasas'] = true,
		},
		-- support according to ur framework identifier
		characters = {
			['char1:asasasasas'] = true,
			['char2:asasasasas'] = true,
		}
	}
}
-- /wigitem is command to open item creation menu
config.itemcreation = {
	command = 'wigitem', -- command to create wig item template for config
	permissions = {
		-- support admin groups according to ur framework
		admingroups = {
			['admin'] = true,
			['dev'] = true
		},
		-- support job according to ur framework
		jobgroups = {
			--	['police'] = 0
		},
		-- for ace put like this in server.cfg and change lic to use lic
		-- add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "fs_wigitem" allow
		aces = {
			['fs_wigitem'] = true,
		},
		-- support default identifier
		identifiers = {
			['lic:asasasa'] = true,
			['discord:asasas'] = true,
		},
		-- support according to ur framework identifier
		characters = {
			['char1:asasasasas'] = true,
			['char2:asasasasas'] = true,
		}
	}
}


config.selling = {
	phone = {
		item = {
			enable = true, --- make it enable = false to use disable item to open phone
			item = 'wigphone',
		},
		command = {
			enable = false, --- make it enable = true to use command to open phone
			command = 'wigphone',
		}
	},
	peds = {            -- for buyers app only
		max_activepeds = 5, -- max active peds at a time
		generateped = {
			time = 4000, -- generate a new ped after every 4000 = 4seconds
			count = 1,  -- count = 1 means create 1 ped after every 4000 = 4 seconds only if active peds are less then max_activepeds
			ped_timeout = 30000, -- if ped is not near player after 30 seconds then delete that ped
		}
	},
	delivery_product_count = 2 -- how many different products to deliver at a time
}

config.table = {
	prop = `fs_prop_table_queens`,
	item = 'wigtable',
	nearby_distance = 2.0, --if using bigger table then increase it basically it is distance from where center of table to player distance is less then this value then u will able to access that table
	-- crafting animaton of items
	animtion = { dict = 'mini@repair', clip = 'fixing_a_ped' },
	crafting_time = 5, -- craft time in second

	-- if create_serverside = true then table will stay even after plyaer leave game or go far from table}
	-- if create_serverside = false then table will might remove after player leave game or go far from table
	create_serverside = false, --{recommened to keep it false}


	progress_circle = {
		-- enable = true, -- if you want to show ox_lib circle progressbar then make it true
		-- enable = false, -- if you you wnat to use ox_lib simple progressbar then do falsea
		enable = false,
		position = 'bottom', -- 'bottom' or 'middle' {only needed if enable = true}
	}
}

config.circle_progressbar = true

config.Delivery_Points = {
	vec3(373.8328, 427.9720, 144.6843),
	vec3(315.6384, 501.9844, 152.1798),
	vec3(128.2986, 566.0015, 182.9800),
	vec3(-516.7256, 433.3788, 96.8078),
	vec3(-968.6490, 436.8183, 79.5717),
	vec3(-1052.1809, 432.2358, 76.0639),
	vec3(-1122.7089, 485.7752, 81.1607),
	vec3(-728.7547, -879.7343, 21.7109),
	vec3(443.2751, -1707.2467, 28.7086),
	vec3(1229.2198, -725.3958, 59.7989),
	vec3(1251.2645, -621.3680, 68.4132),
	vec3(952.6441, -252.3502, 66.9664),
	vec3(-448.8238, -132.6289, 38.0829),
	vec3(-534.3204, -166.3404, 37.3248),
	vec3(-1098.2153, -346.1143, 36.8035),
	vec3(-716.3690, -864.7014, 22.1834),
	vec3(-668.2289, -971.5549, 21.3408),
	vec3(-706.1187, -1036.4200, 15.4240),
	vec3(-986.5771, -1199.3740, 5.0735),
	vec3(-1126.1855, -1171.8801, 1.3576),
	vec3(-1122.2983, -1046.33421, 1.1504),
	vec3(-1351.0392, -1128.5168, 3.1545),
	vec3(-1269.7740, -1296.4608, 3.0042),
}

config.peds = {
	'ig_abigail',
	'csb_abigail',
	'u_m_y_abner',
	'a_m_m_afriamer_01',
	'ig_mp_agent14',
	'csb_mp_agent14',
	'csb_agent',
	's_f_y_airhostess_01',
	's_m_y_airworker',
	'u_m_m_aldinapoli',
	'ig_amandatownley',
	'cs_amandatownley',
	's_m_y_ammucity_01',
}

config.offset = {
	[1] = { x = 0.0, y = 15.0 },
	[2] = { x = 0.0, y = -15.0 },
	[3] = { x = 15.0, y = 0.0 },
	[4] = { x = -15.0, y = 0.0 },
	[5] = { x = 15.0, y = 15.0 },
	[6] = { x = -15.0, y = 15.0 },
	[7] = { x = 15.0, y = -15.0 },
	[8] = { x = -15.0, y = -15.0 },
	[9] = { x = 0.0, y = 25.0 },
	[10] = { x = 0.0, y = -25.0 },
	[11] = { x = 25.0, y = 0.0 },
	[12] = { x = -25.0, y = 0.0 },
	[13] = { x = 25.0, y = 25.0 },
	[14] = { x = -25.0, y = 25.0 },
	[15] = { x = 25.0, y = -25.0 },
	[16] = { x = -25.0, y = -25.0 },
	[17] = { x = 0.0, y = 20.0 },
	[18] = { x = 0.0, y = -20.0 },
	[19] = { x = 20.0, y = 0.0 },
	[20] = { x = -20.0, y = 0.0 },
	[21] = { x = 20.0, y = 20.0 },
	[22] = { x = -20.0, y = 20.0 },
	[23] = { x = 20.0, y = -20.0 },
	[24] = { x = -20.0, y = -20.0 }
}

config.animation = {
	OpenPhone = {
		label = 'Dealing',
		anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
		prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
	},
	UseBuyerApp = {
		label = 'Dealing',
		anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
		prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
	},
	UseDeliveryApp = {
		label = 'Dealing',
		anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
		prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
	},
	MakingDeal = {
		time = 2000,
		anim = { dict = 'mp_common', clip = 'givetake1_a' },
		prop = { model = `fs_wave_model_wig_bb`, bone = 57005, pos = vec3(0.17, 0.01, -0.01), rot = vec3(0.0, 0.0, -140.0) },
		anim2 = { dict = 'mp_common', clip = 'givetake1_a' },
		prop2 = { model = `hei_prop_heist_cash_pile`, bone = 57005, pos = vec3(0.13, 0.02, 0.0), rot = vec3(-90.0, 0, 0) },
	}
}

config.deliveryblip = { title = 'Delivery Client', sprite = 286, color = 5, scale = 1.0 }

config.Notification = {
	title = "Wigs Bundles",
	icon = "fa-solid fa-bag-shopping",
	time = 5000,
	position = "top",
}

config.Textui = {
	icon = "fa-solid fa-bag-shopping",
	iconAnimation = 'bounce',
}


---- !!!! DO NOT TOUCH BELOW THIS LINE !!!! ----

config.statebag = false -- recommened to keep it true untill we don't let u disable it in discord ticket
```

</div>
