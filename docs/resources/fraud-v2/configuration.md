---
title: Fraud System v2 Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Fraud System v2 script (fs_fraud_v2).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426477" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v2 — Configuration

Edit `fs_fraud/config/config.lua` to configure interaction modes, power sources (generator vs laptop), crafting recipes (`Required_Rewards`), black-market shops, exchanger NPCs, contract phone drops, and police alert triggers.

---

## Complete `config/config.lua` Reference

```lua
config = {}

-- Interaction Mode: true = ox_target / qb-target | false = TextUI
config.target = true

-- Power Source & Fuel Settings
config.generator = true     -- true = generator acts as power source | false = laptop acts as power source
config.InfinteFuel = false  -- true = generator runs without fuel | false = requires petrol can to refuel
config.FuelConsumption = 1   -- Fuel consumption rate per minute (100% tank lasts 100 minutes)
config.RemoveFuelCan = true  -- true = removes petrol can from inventory after refueling

-- Equipment Pickup Permissions
config.PickupAllowed = {
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true,
    cardshark = true,
    clonejack = true,
    doppel = true,
}

config.RemoveOnUse = true   -- true = removes items from inventory when placed down in-world
config.PickupAdded = true   -- true = adds items back to inventory when picked up from ground

-- Job Lock Configuration
config.JobOnly = false      -- true = restrict fraud operations to allowed jobs | false = open to all
config.AllowedJobs = {
    ['scammer'] = true,
}

-- Placement Movement Controls & Speed
config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,
    place = 38,   -- E
    cancel = 177, -- H / Backspace
    pickup = 47,  -- G
}

config.Speed = {
    rotate = 1.5,
    move = 0.01,
}

config.MaxFar = 10.0             -- Maximum placement distance in meters
config.circleprogressbar = false -- true = circle progress bar from ox_lib | false = normal progress bar

-- Item Name Registrations
config.Items = {
    laptop = 'fs_laptop',
    generator = 'fs_generator',
    fuelcan = 'WEAPON_PETROLCAN',

    nfccard = 'fs_nfccard',
    clonnedcard = 'fs_clonnedcard',
    infousb = 'fs_infousb',
    skimmer = 'fs_skimmer',

    whiteslip = 'fs_whiteslip',
    forgedcheque = 'fs_forgedcheque',
    stolencard = 'fs_stolencard',
    printer = 'fs_printer',
    contractphone = 'fs_contractphone',

    cardstock = 'fs_cardstock',
    clonnedgiftcard = 'fs_clonnedgiftcard',
    giftcard = 'fs_giftcard',
    cardshark = 'fs_cardshark',

    softslip = 'fs_softslip',
    clonnedlotteryticket = 'fs_clonnedlotteryticket',
    lotteryticket = 'fs_lotteryticket',
    clonejack = 'fs_clonejack',

    blankcard = 'fs_blankcard',
    clonnedsocialcard = 'fs_clonnedsocialcard',
    stolensocialcard = 'fs_stoleninfoslip',
    doppel = 'fs_doppel',

    fraudtablet = 'fs_fraudtablet'
}

-- Scam Crafting Recipes & Output Quantities
config.Required_Rewards = {
    [config.Items.skimmer] = {
        required = {
            [config.Items.nfccard] = 1,
            [config.Items.infousb] = 1
        },
        reward = { [config.Items.clonnedcard] = 1 }
    },
    [config.Items.printer] = {
        required = {
            [config.Items.whiteslip] = 1,
            [config.Items.stolencard] = 1
        },
        reward = { [config.Items.forgedcheque] = 1 },
    },
    [config.Items.cardshark] = {
        required = {
            [config.Items.cardstock] = 1,
            [config.Items.giftcard] = 1
        },
        reward = { [config.Items.clonnedgiftcard] = 2 },
    },
    [config.Items.clonejack] = {
        required = {
            [config.Items.softslip] = 1,
            [config.Items.lotteryticket] = 1
        },
        reward = { [config.Items.clonnedlotteryticket] = 2 },
    },
    [config.Items.doppel] = {
        required = {
            [config.Items.blankcard] = 1,
            [config.Items.stolensocialcard] = 1
        },
        reward = { [config.Items.clonnedsocialcard] = 1 },
    },
}

-- NPC Black Market Shops
config.Shops = {
    ['Electronic Shop'] = {
        enable = true,
        ped = { coords = vector4(392.6530, -831.9913, 29.2917, 222.8036), model = 'ig_lifeinvad_01', invinsible = true },
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },
        blackmoney = false, -- true = charge dirty money | false = charge normal cash
        items = {
            { label = 'Generator',      name = config.Items.generator,     price = 1000 },
            { label = 'Printer',        name = config.Items.printer,       price = 1000 },
            { label = 'Laptop',         name = config.Items.laptop,        price = 2000 },
            { label = 'Contract Phone', name = config.Items.contractphone, price = 1000 },
        }
    },
    ['Paper Shop'] = {
        enable = true,
        ped = { coords = vector4(995.6941, -1855.3029, 31.0398, 180.6734), model = 'a_m_m_farmer_01', invinsible = true },
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },
        blackmoney = false,
        items = {
            { label = 'White Slip', name = 'fs_whiteslip', price = 50 },
            { label = 'Soft Slip',  name = 'fs_softslip',  price = 50 },
            { label = 'Card Stock', name = 'fs_cardstock', price = 50 },
        }
    },
    ['Black Accessories Shop'] = {
        enable = true,
        ped = { coords = vector4(145.1111, -2199.7078, 4.6880, 181.6250), model = 'a_m_m_socenlat_01', invinsible = true },
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },
        blackmoney = true, -- Charges black/dirty money
        items = {
            { label = 'Skimmer',      name = config.Items.skimmer,     price = 1000 },
            { label = 'Info Usb',     name = config.Items.infousb,     price = 1000 },
            { label = 'Card Shark',   name = config.Items.cardshark,   price = 1000 },
            { label = 'Clonejack',    name = config.Items.clonejack,   price = 1000 },
            { label = 'Doppel',       name = config.Items.doppel,      price = 1000 },
            { label = 'Fraud Tablet', name = config.Items.fraudtablet, price = 3000 },
        }
    },
    ['Blank Card Shop'] = {
        enable = true,
        ped = { coords = vector4(-381.1197, -42.6400, 49.0244, 69.0171), model = 'a_m_m_socenlat_01', invinsible = true },
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },
        blackmoney = true,
        items = {
            { label = 'Nfc Card',   name = config.Items.nfccard,   price = 50 },
            { label = 'Blank Card', name = config.Items.blankcard, price = 50 },
        }
    },
    ['Gift Card Shop'] = {
        enable = true,
        ped = { coords = vector4(-656.9600, -854.4056, 24.5042, 357.9516), model = 'a_m_m_socenlat_01', invinsible = true },
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },
        blackmoney = false,
        items = {
            { label = 'GiftCard',       name = config.Items.giftcard,      price = 500 },
            { label = 'Lottery Ticket', name = config.Items.lotteryticket, price = 800 },
        }
    },
}

-- ATM Cloned Card & Cheque Withdrawal Settings
config.Atm = {
    models = { 'prop_atm_02', 'prop_atm_01', 'prop_fleeca_atm', 'prop_atm_03' },
    blackmoney = false,
    timer = 10000,       -- Animation timer in milliseconds
    moneychance = 100,   -- Percentage chance to receive cash (0-100%)
    alert_onReject_only = false, -- false = alert police on each attempt | true = alert only if rejected
    item = { label = 'Clonned Card', name = config.Items.clonnedcard, price = { min = 1000, max = 2500 }, quantity = 1 },
    withdraw_cheque = {
        enable = true,   -- Enable cashing forged cheques at ATMs
        timer = 15000,
        item = { label = 'Withdraw Cheque', name = config.Items.forgedcheque, price = { min = 1000, max = 2500 }, quantity = 1 },
    }
}

-- Exchanger NPCs (Banker, Gift, Lottery, Social Security)
config.Banker = {
    peds = {
        { coords = vector4(250.3983, 207.7024, 106.2868, 341.2410), model = 'a_m_y_business_01', invinsible = true },
    },
    blackmoney = false,
    timer = 10000,
    moneychance = 50,    -- 50% chance banker accepts forged cheque
    alert_onReject_only = false,
    item = { label = 'Forged Cheque', name = config.Items.forgedcheque, price = { min = 1000, max = 2500 }, quantity = 1 },
}

config.GiftExchanger = {
    peds = {
        { coords = vector4(121.7701, -876.8692, 31.1231, 250.4280), model = 'a_m_y_business_01', invinsible = true },
    },
    blackmoney = false,
    timer = 10000,
    moneychance = 50,
    alert_onReject_only = false,
    item = { label = 'Clonned GiftCard', name = config.Items.clonnedgiftcard, price = { min = 500, max = 500 }, quantity = 1 },
}

config.LotteryExchanger = {
    peds = {
        { coords = vector4(308.0541, -910.8138, 29.2958, 345.8549), model = 'a_m_y_business_01', invinsible = true },
    },
    blackmoney = false,
    timer = 10000,
    moneychance = 50,
    alert_onReject_only = false,
    item = { label = 'Clonned Lottery Ticket', name = config.Items.clonnedlotteryticket, price = { min = 800, max = 800 }, quantity = 1 },
}

config.SocialExchanger = {
    peds = {
        { coords = vector4(263.6539, -309.4271, 49.6456, 344.0214), model = 'a_m_y_business_01', invinsible = true },
    },
    blackmoney = false,
    timer = 10000,
    moneychance = 50,
    alert_onReject_only = false,
    item = { label = 'Clonned Social Card', name = config.Items.clonnedsocialcard, price = { min = 1000, max = 2500 }, quantity = 1 },
}

-- Contract Phone Stolen Card Drop Calls
config.contract_phone = {
    remove_on_use = false,
    blackmoney = false,
    timer = 5000,
    alert_onEach_Purchase = false,
    alert_chance = 50,
    alert_on_usingphone = true,
    item = { label = 'Stolen Card', name = config.Items.stolencard, price = { min = 1000, max = 2500 }, quantity = 1 },
    invinsible = true,
    points = { -- 25 vector4 drop call locations across Los Santos
        vec4(405.0268, -1748.7028, 29.2799, 122.5766),
        vec4(-109.6634, -1590.5364, 31.9251, 226.5505),
        -- ...
    },
    pedmodels = { 'ig_abigail', 'csb_abigail', 'u_m_y_abner', 'a_m_m_afriamer_01', 'ig_mp_agent14' }
}

-- Police Dispatch Alerts
config.policealert = {
    enable = true,
    title = { title = 'Fraud Activity', code = "10-4" },
    message = 'There is Fraud Activity report in this area',
    blip = { sprite = 161, color = 1, scale = 1.0 },
    jobs = { 'police', 'sheriff' },
}

config.Notification = { title = "Fraud System", icon = "fa-solid fa-laptop-file", time = 5000, position = "top" }
config.Textui = { icon = "fa-solid fa-laptop-file", iconAnimation = 'bounce' }
```

---

## Key Section Breakdown

### ⚡ Power Source Selection (`config.generator`)
* **`true`**: Generator acts as the main power source for all scam operations (requires refueling with petrol cans).
* **`false`**: Laptop acts as the power source directly.

### 🛠️ Scam Chains & Crafting Recipes (`config.Required_Rewards`)

| Machine Item | Required Inputs | Crafting Reward Output |
| --- | --- | --- |
| **Skimmer** (`fs_skimmer`) | `fs_nfccard` (1) + `fs_infousb` (1) | `fs_clonnedcard` (1) |
| **Printer** (`fs_printer`) | `fs_whiteslip` (1) + `fs_stolencard` (1) | `fs_forgedcheque` (1) |
| **Card Shark** (`fs_cardshark`) | `fs_cardstock` (1) + `fs_giftcard` (1) | `fs_clonnedgiftcard` (2) |
| **Clonejack** (`fs_clonejack`) | `fs_softslip` (1) + `fs_lotteryticket` (1) | `fs_clonnedlotteryticket` (2) |
| **Doppel** (`fs_doppel`) | `fs_blankcard` (1) + `fs_stolensocialcard` (1) | `fs_clonnedsocialcard` (1) |

### 💵 Exchangers & Buyers
* **ATM & Banker**: Cash out cloned cards and forged cheques for randomized monetary payouts (`min = 1000, max = 2500`).
* **Gift, Lottery & Social Exchangers**: Sell cloned gift cards, lottery tickets, and social cards to specific NPC exchangers.
* **Black Money Support (`blackmoney = true`)**: Each shop or exchanger can be independently configured to use black/dirty money instead of normal cash.

### 📞 Contract Phone (`config.contract_phone`)
* Allows players to use a contract phone item to trigger random drop calls at 25 map coordinates, meeting an NPC seller to purchase stolen credit cards.
