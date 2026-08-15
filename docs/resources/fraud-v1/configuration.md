---
title: Fraud System v1 Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Fraud System v1 script (fs_fraud_v1).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426478" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v1 — Configuration

Edit `fs_fraud_v1/config/config.lua` to configure generator fuel rates, item removal rules, placement controls, shop NPCs, ATM card insertion parameters, and police alert chances.

---

## Complete `config/config.lua` Reference

```lua
Config = {}

-- Fuel & Generator Settings
Config.InfinteFuel = false     -- true = generator runs without fuel | false = requires petrol can to refuel
Config.FuelConsumption = 1      -- Fuel consumption rate per minute (default = 1; 100% tank lasts 100 minutes)
Config.RemoveFuelCan = true     -- true = removes petrol can from player inventory upon refueling generator

-- Equipment Pickup Permissions
Config.PickupAllowed = {
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true
}

-- Job Lock Configuration
Config.JobOnly = false          -- true = restrict fraud operations to specific job | false = open to all players
Config.JobName = 'scammer'      -- Job name required if Config.JobOnly is set to true

-- Item Usage Behavior
Config.RemoveOnUse = true       -- true = removes placement items from inventory when placed down in-world

-- Placement Mode Key Controls & Speed
Config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,
    place = 38,   -- E key to place
    cancel = 177, -- H / Backspace to cancel
    pickup = 47,  -- G key to pick up
}

Config.Speed = {
    rotate = 1.5,  -- Object rotation speed
    move = 0.01,   -- Object movement speed
}

Config.MaxFar = 10.0            -- Maximum placement distance (in meters) from player

-- Inventory UI Icon Path
Config.ImagePath = 'nui://ox_inventory/web/images/' -- Icon path matching your inventory system

-- Item Name Registrations
Config.Items = {
    blankcard = 'fs_blankcard',
    laptop = 'fs_laptop',
    skimmer = 'fs_skimmer',
    printer = 'fs_printer',
    generator = 'fs_generator',
    usb = 'fs_usb',
    clonnedcard = 'fs_clonnedcard',
    whiteslip = 'fs_whiteslip',
    stolenCard = 'fs_stolencard',
    forgedcheque = 'fs_forgedcheque'
}

-- NPC Black Market Shops & Banker Buyers
Config.Shops = {
    [1] = {
        enable = true,
        id = 1,
        npc = { model = 'ig_lifeinvad_01', invinsible = true },
        coords = vector4(-657.5576, -854.6655, 24.5075, 3.0106),
        account = 'money', -- Currency type: 'money', 'black_money', or 'marked_bills'
        items = {
            { label = 'Printer',   name = 'fs_printer',   price = 100 },
            { label = 'Generator', name = 'fs_generator', price = 150 },
            { label = 'Laptop',    name = 'fs_laptop',    price = 200 },
        }
    },
    [2] = {
        enable = true,
        id = 2,
        npc = { model = 'a_m_m_farmer_01', invinsible = true },
        coords = vector4(995.6941, -1855.3029, 31.0398, 180.6734),
        account = 'money',
        items = {
            { label = 'White Slip', name = 'fs_whiteslip', price = 10 },
        }
    },
    [3] = {
        enable = true,
        id = 3,
        npc = { model = 'a_m_m_socenlat_01', invinsible = true },
        coords = vector4(-668.4225, -971.1768, 22.3409, 7.0597),
        account = 'money',
        items = {
            { label = 'Skimmer',            name = 'fs_skimmer',    price = 60 },
            { label = 'Blank Card',         name = 'fs_blankcard',  price = 10 },
            { label = 'Info Usb',           name = 'fs_usb',        price = 40 },
            { label = 'Stolen Credit Card', name = 'fs_stolencard', price = 10 },
        }
    },
    [4] = {
        enable = true,
        id = 4,
        npc = { model = 'u_m_m_bankman', invinsible = true },
        coords = vector4(250.6103, 207.7793, 106.2868, 339.6009),
        account = 'money',
        alert = {
            enable = true,                 -- Enable police alerts when cashing forged cheques
            alert_chance = 50,             -- 50% chance to alert police when selling
            alert_only_on_freezed = true   -- Alert police only when banker catches player
        },
        freezed_chance = 20,              -- 20% chance banker catches player & confiscates cheque (0 to disable)
        items = {
            { label = 'Forged Cheque', name = Config.Items.forgedcheque, price = { min = 1500, max = 2000 } },
        }
    }
}

-- ATM Card Insertion & Cashing Configuration
Config.Atm = {
    command = 'insertcc',                 -- Chat command to insert cloned card at ATM
    account = 'money',                    -- Payout currency: 'money', 'bank', or 'black_money'
    amount = { min = 1500, max = 2000 },  -- Random payout range per cloned card
    alert = {
        enable = true,                    -- Enable police alerts during ATM usage
        alert_chance = 50,                -- Percentage chance to notify police (0-100%)
        alert_only_on_ate = false         -- Alert police only when ATM eats card
    },
    atm_ate_chance = 0,                   -- Chance ATM eats card (0 to disable)
    models = { 'prop_atm_02', 'prop_atm_01', 'prop_fleeca_atm', 'prop_atm_03' },
    extras = { cheque = true, price = { min = 1500, max = 2000 } },
}

-- Processing & Transaction Delays
Config.delay = {
    atm = 10 * 1000,    -- 10-second delay when inserting cloned card at ATM
    banker = 10 * 1000, -- 10-second delay when handing forged cheque to banker
}

-- Prop Model Mappings
Config.Props = {
    [Config.Items.generator] = 'prop_generator_01a',
    [Config.Items.laptop] = 'prop_laptop_jimmy',
    [Config.Items.printer] = 'prop_printer_02',
    [Config.Items.skimmer] = 'fs_prop_sweeper_1'
}

-- UI Progress Bar Settings
Config.Progressbar = {
    enable = true, -- Enable progress bar animation
    circle = true  -- true = circular progress bar | false = linear progress bar
}
```

---

## Key Section Breakdown

### ⛽ Generator & Fuel System
* **`Config.InfinteFuel`**: When set to `false`, generators require fuel cans (`WEAPON_PETROLCAN`) to run.
* **`Config.FuelConsumption`**: Sets the fuel consumption rate per minute. A default value of `1` means a 100% filled generator runs for 100 minutes.

### 📦 Placement & Equipment Pickup
* **`Config.PickupAllowed`**: Controls whether placed generators, skimmers, laptops, and printers can be picked back up by players into their inventory.
* **`Config.RemoveOnUse`**: When `true`, equipment items are removed from player inventory as soon as they are placed down in the world.

### 🏪 Shops & Banker Buyer
* **Shops `[1]` to `[3]`**: Configure black-market NPC vendors selling scam equipment, white slips, blank cards, and info USBs.
* **Banker Shop `[4]`**: NPC buyer for forged cheques. Features a configurable freeze/catch chance (`freezed_chance = 20`) where the banker confiscates the cheque and alerts the police.

### 🏧 ATM Cloned Card Insertion (`/insertcc`)
* **Command:** `/insertcc`
* **Behavior:** Allows players to insert cloned credit cards into any ATM prop (`prop_atm_01`, `prop_fleeca_atm`, etc.) to cash out random payouts (`min = 1500, max = 2000`).
* **Police Alerts:** Configurable percentage chance to trigger law enforcement alerts when inserting cloned cards at ATMs.
