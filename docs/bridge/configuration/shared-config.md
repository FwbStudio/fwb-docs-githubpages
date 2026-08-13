# Shared Config (sh\_config.lua)

The current file is shown below exactly as it appears in Bridge.

```lua
sh_config = {        -- don't touch it

    language = 'en', -- if language written in this is missing then it will use 'en' language by default

    debug = {
        show_detected_resources = true, -- recommended to keep it true else if you want open ticket with us you need it
        show_stopped_resources = true,  -- this will show on server side of list of all reosurce that should stopped due to restart of bridge
    },

    framework = {
        ['ESX'] = {
            core_script = "es_extended",
            update_player_job = "esx:setJob",
            load_player = "esx:playerLoaded",
            unload_player = "esx:onPlayerLogout",
        },
        ['QBCore'] = {
            core_script = "qb-core",
            update_player_job = "QBCore:Client:OnJobUpdate",
            load_player = "QBCore:Client:OnPlayerLoaded",
            unload_player = "QBCore:Client:OnPlayerUnload",

            -- only for qbcore dirty money
            dirtymoney = {
                item = 'markedbills', -- item name that ur using in server like black_money or markedbills or marked_bills or anything else
                metadata = true,      -- if metadata = true means u are using worth of item in metadata / if metadata = false means ur using worth of item in item count
                bag_max_worth = 1000, -- only if metadata = true -- maxmium worth of a single bag if amount greater then this multiple bags will be added into inventory
            },
            bank = {
                -- if its true means society money handled by bank {new way of qbcore for society money handling}
                -- if its false means society money handled by qb-management in boss menu directly {old way of qbcore for society money handling}
                societymoney_in_bank = true,
            },
        },

    },

    Ambulance = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "esx_ambulancejob" },
            { key = 3, resource = "wasabi_ambulance" },
            { key = 4, resource = "qb-ambulancejob" },
            { key = 5, resource = "ak47_ambulancejob" },
            { key = 6, resource = "tk_ambulancejob" },
            { key = 7, resource = "p_ambulancejob" },
            { key = 8, resource = "wasabi_ambulance_v2" },
            { key = 9, resource = "qbx_ambulancejob" },
        },
        -- don't add anything here use docs override functions to add your script
    },

    Bank = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "okokBanking" },
            { key = 3, resource = "qb-banking" },
            { key = 4, resource = "Renewed-Banking" },
            { key = 5, resource = "qb-management" },
            { key = 6, resource = "tgg-banking" },
            { key = 7, resource = "qs_banking" },
            { key = 8, resource = "fd_banking" },
        }
        -- don't add anything here use docs override functions to add your script
    },

    Clothing = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "skinchanger" },
            { key = 3, resource = "fivem-appearance" },
            { key = 4, resource = "illenium-appearance" },
            { key = 5, resource = "rcore_clothing" },
            { key = 6, resource = "qb-clothing" },
            { key = 7, resource = "crm-appearance" },
            { key = 8, resource = "p_appearance" },
            { key = 9, resource = "qs-appearance" },
        },
        -- don't add anything here use docs override functions to add your script
    },

    Dispatch = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "cd_dispatch" },
            { key = 3, resource = "ps-dispatch" },
            { key = 4, resource = "qs-dispatch" },
            { key = 5, resource = "tk_dispatch" },
            { key = 6, resource = "rcore_dispatch" },
            { key = 7, resource = "core_dispatch" },
            { key = 8, resource = "wasabi_mdt" },
            --{ key = 9, resource = "lb-tablet" },
        }
        -- don't add anything here use docs override functions to add your script
    },

    Inventory = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "ox_inventory",      image_path = "nui://ox_inventory/web/images/" },
            { key = 3, resource = "ak47_inventory",    image_path = "nui://ak47_inventory/web/build/images/" },
            { key = 4, resource = "qs-inventory",      image_path = "nui://qs-inventory/html/images/" },
            { key = 5, resource = "qb-inventory",      image_path = "nui://qb-inventory/html/images/" },
            { key = 6, resource = "lj-Inventory",      image_path = "nui://lj-Inventory/html/images/" },
            { key = 7, resource = "ps-inventory",      image_path = "nui://ps-inventory/html/images/" },
            { key = 8, resource = "pappu-inventorynp", image_path = "nui://pappu-inventorynp/nui/images/" },
            { key = 9, resource = "codem-inventory",   image_path = "nui://codem-inventory/html/itemimages/" },
        }
        -- don't add anything here use docs override functions to add your script
        --incase u don't use any upper inventory system then esx/qb default core functions will work
        -- if you want any inventory added please open ticket with inventory files and a key from keymaster
    },


    Target = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "ox_target" },
            { key = 3, resource = "qb-target" },
            { key = 4, resource = "qtarget" },
        }
        -- don't add anything here use docs override functions to add your script
    },


    VehicleKeys = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "wasabi_carlock" },
            { key = 3, resource = "ak47_vehiclekeys" },
            { key = 4, resource = "qs-vehiclekeys" },
            { key = 5, resource = "vehicles_keys" },
            { key = 6, resource = "msk_vehiclekeys" },
            { key = 7, resource = "Renewed-Vehiclekeys" },
            { key = 8, resource = "qbx_vehiclekeys" },
            { key = 9, resource = "qb-vehiclekeys" },
            --    { key = 10, resource = "cd_garage", },
        }
        -- don't add anything here use docs override functions to add your script
    },
    VehicleFuel = {
        selected_key = 1,                    -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1,  resource = "auto" }, -- don't touch this
            { key = 2,  resource = "ox_fuel" },
            { key = 3,  resource = "msk_fuel" },
            { key = 4,  resource = "ti_fuel" },
            { key = 5,  resource = "TAM_Fuel" },
            { key = 6,  resource = "LegacyFuel" },
            { key = 7,  resource = "cdn-fuel" },
            { key = 8,  resource = "rcore_fuel" },
            { key = 9,  resource = "lyre_fuel" },
            { key = 10, resource = "lc_fuel" },
        },
        -- don't add anything here use docs override functions to add your script
    },
    Sounds = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = "auto" }, -- don't touch this
            { key = 2, resource = "xsound" },
            { key = 3, resource = "mx-surround" },
        },
        -- don't add anything here use docs override functions to add your script
    },
    Phone = {
        selected_key = 1,                   -- 1 = auto detect {if you want manual selection then change key from bottom keys}
        supported_keys = {
            { key = 1, resource = 'auto' }, -- don't touch this
            { key = 2, resource = "okokPhone" },
            { key = 3, resource = "qb-phone" },
            { key = 4, resource = "qs-smartphone" },
            { key = 5, resource = "qs-smartphone-pro" },
            { key = 6, resource = "lb-phone" },
            { key = 7, resource = "gksphone" }, -- support both version v1 and v2
        },
        -- don't add anything here use docs override functions to add your script
    },

}
```
