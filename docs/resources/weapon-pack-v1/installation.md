---
title: Weapon Pack v1 Installation | FWB Studio Docs
description: Install Weapon Pack v1 on FiveM — dependencies and server.cfg. FiveM weapon pack v1 install ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7005106" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Weapon Pack v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `FiveM server` | Yes | Latest artifacts recommended |




## Items & inventory setup

Open `fs_weapons_v1/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

| Inventory | Files | Copy images to |
| --- | --- | --- |
| QBCore / qb-inventory | `NEW-QBCORE-INSTALLATION copy.md`, `OLD-QBCORE-INSTALLATION.md` | `qb-inventory/html/images/items/` |
| Item images | `at_clip_drum_pistol_fs_v1.png`, `at_clip_drum_rifle_fs_v1.png`, `at_clip_drum_smg_fs_v1.png`, `at_clip_extended_pistol_fs_v1.png`, `at_clip_extended_rifle_fs_v1.png`, `at_clip_extended_smg_fs_v1.png`, `at_flashlight_fs_v1.png`, `at_grip_fs_v1.png`, `at_scope_macro_fs_v1.png`, `at_suppressor_heavy_fs_v1.png`, `at_suppressor_light_fs_v1.png`, `at_clip_drum_pistol_fs_v1.png`, `at_clip_drum_rifle_fs_v1.png`, `at_clip_drum_smg_fs_v1.png`, `at_clip_extended_pistol_fs_v1.png`, `at_clip_extended_rifle_fs_v1.png`, `at_clip_extended_smg_fs_v1.png`, `at_flashlight_fs_v1.png`, `at_grip_fs_v1.png`, `at_scope_macro_fs_v1.png`, `at_suppressor_heavy_fs_v1.png`, `at_suppressor_light_fs_v1.png`, `WEAPON_FSACP9.png`, `WEAPON_FSAK103.png`, `WEAPON_FSAK74U.png`, `WEAPON_FSAPVECTOR.png`, `WEAPON_FSBARBAT.png`, `WEAPON_FSBROOM.png`, `WEAPON_FSCARL.png`, `WEAPON_FSDRACO.png`, `WEAPON_FSDRAGNOV.png`, `WEAPON_FSFIVE7.png`, `WEAPON_FSFN502.png`, `WEAPON_FSG19.png`, `WEAPON_FSG3.png`, `WEAPON_FSGALILAR.png`, `WEAPON_FSGEPARD.png`, `WEAPON_FSGLOCKG4.png`, `WEAPON_FSGLOCKG5.png`, `WEAPON_FSIZH81.png`, `WEAPON_FSKORPVZ.png`, `WEAPON_FSM9A1.png`, `WEAPON_FSMP5.png`, `WEAPON_FSMP5K.png`, `WEAPON_FSNEEDLE.png`, `WEAPON_FSP980.png`, `WEAPON_FSPICKX.png`, `WEAPON_FSPP19.png`, `WEAPON_FSRCHAIR.png`, `WEAPON_FSRENETTI.png`, `WEAPON_FSTACA2011.png`, `WEAPON_FSUMP45.png`, `WEAPON_FSACP9.PNG`, `WEAPON_FSAK103.png`, `WEAPON_FSAK74U.PNG`, `WEAPON_FSAPVECTOR.png`, `WEAPON_FSBARBAT.png`, `WEAPON_FSBROOM.png`, `WEAPON_FSCARL.png`, `WEAPON_FSDRACO.png`, `WEAPON_FSDRAGNOV.png`, `WEAPON_FSFIVE7.png`, `WEAPON_FSFN502.png`, `WEAPON_FSG19.png`, `WEAPON_FSG3.png`, `WEAPON_FSGALILAR.png`, `WEAPON_FSGEPARD.png`, `WEAPON_FSGLOCKG4.png`, `WEAPON_FSGLOCKG5.png`, `WEAPON_FSIZH81.png`, `WEAPON_FSKORPVZ.png`, `WEAPON_FSM9A1.png`, `WEAPON_FSMP5.png`, `WEAPON_FSMP5K.png`, `WEAPON_FSNEEDLE.png`, `WEAPON_FSP980.png`, `WEAPON_FSPICKX.png`, `WEAPON_FSPP19.png`, `WEAPON_FSRCHAIR.png`, `WEAPON_FSRENETTI.png`, `WEAPON_FSTACA2011.png`, `WEAPON_FSUMP45.png` | See file notes |
| Other | `AK47-INSTALLATION.md`, `NEW QS INVENTORY-INSTALLATION.md`, `OLD QS INVENTORY-INSTALLATION.md`, `OX-INSTALLATION.md` | See file notes |

<div class="fwb-inv-tabs">
<details>
<summary>QBCore / qb-inventory</summary>

Copy item/weapon images into `qb-inventory/html/images/items/`.

**`NEW-QBCORE-INSTALLATION copy.md`**

```lua
# FWB Studio

# Installation Steps

## Step 1: Add Images to Inventory

Copy the required images to the following directory:

```
qb_inventory\html\images   or according to your inventory
```

## Step 2: Add Weapon Item Definitions

Add the first code block to section in:

```
qb-core/shared/items
```

## Step 3: Add Weapon Definitions

Add the first code block to section in:

```
qb-core/shared/weapons
```

## Step 4: Add Durability Definition

Config.DurabilityMultiplier = { paste in this section

```
qb-weapons\config.lua
```

## Step 5: Add Components Definition

Paste the items under the [Config.DurabilityMultiplier = {] section in:

## WeaponAttachments = { paste in this section

```
qb-weapons\config.lua
```

```lua
--	 .----------------.  .----------------.  .----------------.  .----------------.   .----------------.   .----------------.  .-----------------. .----------------.
--	| .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. | | .--------------. || .--------------. || .--------------. |
--	| |    _______   | || |  _________   | || |  _________   | || |   ______     | | | |              | | | |     ____     | || | ____  _____  | || |  _________   | |
--	| |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | | | |              | | | |   .'    `.   | || ||_   \|_   _| | || | |_   ___  |  | |
--	| |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | | | |    ______    | | | |  /  .--.  \  | || |  |   \ | |   | || |   | |_  \_|  | |
--	| |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | | | |   |______|   | | | |  | |    | |  | || |  | |\ \| |   | || |   |  _|  _   | |
--	| |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | | | |              | | | |  \  `--'  /  | || | _| |_\   |_  | || |  _| |___/ |  | |
--	| |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | | | |              | | | |   `.____.'   | || ||_____|\____| | || | |_________|  | |
--	| |              | || |              | || |              | || |              | | | |              | | | |              | || |              | || |              | |
--	| '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' | | '--------------' || '--------------' || '--------------' |
--	 '----------------'  '----------------'  '----------------'  '----------------'   '----------------'   '----------------'  '----------------'  '----------------'
```

## Copy this into qb-core/shared/items

# make sure to add it under last weapon

````lua

    ['weapon_fsacp9'] = { name = 'weapon_fsacp9', label = 'ACP 9', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSACP9.png', unique = true, useable = false, description = 'A compact automatic pistol chambered in 9mm.' },
    ['weapon_fsak74u'] = { name = 'weapon_fsak74u', label = 'AK 74u', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSAK74U.png', unique = true, useable = false, description = 'A shortened version of the AK-74 rifle.' },
    ['weapon_fsak103'] = { name = 'weapon_fsak103', label = 'AK 103', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSAK103.png', unique = true, useable = false, description = 'A modernized Russian assault rifle.' },
    ['weapon_fsrchair'] = { name = 'weapon_fsrchair', label = 'Rusty Chair', weight = 1, type = 'weapon', image = 'WEAPON_FSRCHAIR.png', unique = true, useable = false, description = 'An old rusty chair turned weapon.' },
    ['weapon_fsbroom'] = { name = 'weapon_fsbroom', label = 'Broom', weight = 1, type = 'weapon', image = 'WEAPON_FSBROOM.png', unique = true, useable = false, description = 'A sturdy cleaning tool that hurts.' },
    ['weapon_fsbarbat'] = { name = 'weapon_fsbarbat', label = 'Barbed bat', weight = 1, type = 'weapon', image = 'WEAPON_FSBARBAT.png', unique = true, useable = false, description = 'A baseball bat wrapped in barbed wire.' },
    ['weapon_fsump45'] = { name = 'weapon_fsump45', label = 'UMP-45', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSUMP45.png', unique = true, useable = false, description = 'A .45 caliber submachine gun.' },
    ['weapon_fsapvector'] = { name = 'weapon_fsapvector', label = 'Compact Vector', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSAPVECTOR.png', unique = true, useable = false, description = 'A compact .45 ACP Vector SMG.' },
    ['weapon_fstaca2011'] = { name = 'weapon_fstaca2011', label = 'Stacatto 2011', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSTACA2011.png', unique = true, useable = false, description = 'A high-performance competition pistol' },
    ['weapon_fsdraco'] = { name = 'weapon_fsdraco', label = 'Mini Draco', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSDRACO.png', unique = true, useable = false, description = 'A short-barreled AK pistol.' },
    ['weapon_fsdragnov'] = { name = 'weapon_fsdragnov', label = 'Dragnov', weight = 1, type = 'weapon', ammotype = 'AMMO_SNIPER', image = 'WEAPON_FSDRAGNOV.png', unique = true, useable = false, description = 'A long-range Russian sniper rifle.' },
    ['weapon_fsfive7'] = { name = 'weapon_fsfive7', label = 'Five Seven', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSFIVE7.png', unique = true, useable = false, description = 'A lightweight pistol chambered in 5.7mm.' },
    ['weapon_fsfn502'] = { name = 'weapon_fsfn502', label = 'FN 502', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSFN502.png', unique = true, useable = false, description = 'FN’s .22 LR tactical pistol variant.' },
    ['weapon_fsg3'] = { name = 'weapon_fsg3', label = 'G3 Rifle', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSG3.png', unique = true, useable = false, description = 'A powerful 7.62mm battle rifle.' },
    ['weapon_fsm9a1'] = { name = 'weapon_fsm9a1', label = 'Beretta M9', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSM9A1.png', unique = true, useable = false, description = 'The iconic 9mm military sidearm.' },
    ['weapon_fsg19'] = { name = 'weapon_fsg19', label = 'G-19', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSG19.png', unique = true, useable = false, description = 'A versatile Glock 19 pistol.' },
    ['weapon_fsgalilar'] = { name = 'weapon_fsgalilar', label = 'GALIL AR', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSGALILAR.png', unique = true, useable = false, description = 'An Israeli assault rifle.' },
    ['weapon_fsgepard'] = { name = 'weapon_fsgepard', label = 'Gepard PDW', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSGEPARD.png', unique = true, useable = false, description = 'A compact personal defense weapon.' },
    ['weapon_fsglockg4'] = { name = 'weapon_fsglockg4', label = 'Glock Gen4', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSGLOCKG4.png', unique = true, useable = false, description = 'Fourth generation Glock handgun.' },
    ['weapon_fsglockg5'] = { name = 'weapon_fsglockg5', label = 'Glock Gen5', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSGLOCKG5.png', unique = true, useable = false, description = 'Fifth generation Glock handgun.' },
    ['weapon_fsneedle'] = { name = 'weapon_fsneedle', label = 'Infected Needle', weight = 1, type = 'weapon', image = 'WEAPON_FSNEEDLE.png', unique = true, useable = false, description = 'A dangerous infected needle.' },
    ['weapon_fsizh81'] = { name = 'weapon_fsizh81', label = 'IZH 81', weight = 1, type = 'weapon', ammotype = 'AMMO_SHOTGUN', image = 'WEAPON_FSIZH81.png', unique = true, useable = false, description = 'A rugged Russian shotgun.' },
    ['weapon_fsmp5'] = { name = 'weapon_fsmp5', label = 'MP-5', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSMP5.png', unique = true, useable = false, description = 'A trusted 9mm submachine gun.' },
    ['weapon_fsmp5k'] = { name = 'weapon_fsmp5k', label = 'MP5 K', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSMP5K.png', unique = true, useable = false, description = 'A compact version of the MP5.' },
    ['weapon_fsp980'] = { name = 'weapon_fsp980', label = 'P-980', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSP980.png', unique = true, useable = false, description = 'A reliable semi-auto handgun.' },
    ['weapon_fspickx'] = { name = 'weapon_fspickx', label = 'PICK AXE', weight = 1, type = 'weapon', image = 'WEAPON_FSPICKX.png', unique = true, useable = false, description = 'A mining tool turned deadly weapon.' },
    ['weapon_fspp19'] = { name = 'weapon_fspp19', label = 'P-980', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSPP19.png', unique = true, useable = false, description = 'A high-capacity Russian SMG.' },
    ['weapon_fsrenetti'] = { name = 'weapon_fsrenetti', label = 'Renetti', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSRENETTI.png', unique = true, useable = false, description = 'A semi-auto 9mm handgun.' },
    ['weapon_fscarl'] = { name = 'weapon_fscarl', label = 'SCAR-L', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSCARL.png', unique = true, useable = false, description = 'A lightweight modular assault rifle.' },
    ['weapon_fskorpvz'] = { name = 'weapon_fskorpvz', label = 'Scorpion SA61', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSKORPVZ.png', unique = true, useable = false, description = 'A compact 9mm Czech submachine gun.' },


    ```


--        .----------------.  .----------------.  .----------------.  .----------------.   .----------------.   .----------------.  .----------------.  .----------------.
--       | .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. | | .--------------. || .--------------. || .--------------. |
--       | |    _______   | || |  _________   | || |  _________   | || |   ______     | | | |              | | | |  _________   | || | _____  _____ | || |     ____     | |
--       | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | | | |              | | | | |  _   _  |  | || ||_   _||_   _|| || |   .'    `.   | |
--       | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | | | |    ______    | | | | |_/ | | \_|  | || |  | | /\ | |  | || |  /  .--.  \  | |
--       | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | | | |   |______|   | | | |     | |      | || |  | |/  \| |  | || |  | |    | |  | |
--       | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | | | |              | | | |    _| |_     | || |  |   /\   |  | || |  \  `--'  /  | |
--       | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | | | |              | | | |   |_____|    | || |  |__/  \__|  | || |   `.____.'   | |
--       | |              | || |              | || |              | || |              | | | |              | | | |              | || |              | || |              | |
--       | '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' | | '--------------' || '--------------' || '--------------' |
--        '----------------'  '----------------'  '----------------'  '----------------'   '----------------'   '----------------'  '----------------'  '----------------'

## Copy this into qb-core/shared/weapons
# make sure to add it under last weapon
```lua

    -- Custom Weapons

    [`weapon_fsacp9`]      = { name = 'weapon_fsacp9', label = 'ACP 9', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsak74u`]     = { name = 'weapon_fsak74u', label = 'AK 74u', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsak103`]     = { name = 'weapon_fsak103', label = 'AK 103', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsrchair`]    = { name = 'weapon_fsrchair', label = 'Rusty Chair', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsbroom`]     = { name = 'weapon_fsbroom', label = 'Broom', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsbarbat`]    = { name = 'weapon_fsbarbat', label = 'Barbed Bat', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsump45`]    = { name = 'weapon_fsump45', label = 'UMP-45', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsapvector`]  = { name = 'weapon_fsapvector', label = 'Compact Vector', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fstaca2011`]  = { name = 'weapon_fstaca2011', label = 'Stacatto 2011', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsdraco`]     = { name = 'weapon_fsdraco', label = 'Mini Draco', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsdragnov`]   = { name = 'weapon_fsdragnov', label = 'Dragnov', weapontype = 'Sniper Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Sniped / Picked off / Scoped' },
    [`weapon_fsfive7`]     = { name = 'weapon_fsfive7', label = 'Five Seven', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsfn502`]     = { name = 'weapon_fsfn502', label = 'FN 502', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsg3`]        = { name = 'weapon_fsg3', label = 'G3 Rifle', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsm9a1`]      = { name = 'weapon_fsm9a1', label = 'Beretta M9', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsg19`]       = { name = 'weapon_fsg19', label = 'G-19', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsgalilar`]   = { name = 'weapon_fsgalilar', label = 'GALIL AR', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsgepard`]    = { name = 'weapon_fsgepard', label = 'Gepard PDW', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsglockg4`]   = { name = 'weapon_fsglockg4', label = 'Glock Gen4', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsglockg5`]   = { name = 'weapon_fsglockg5', label = 'Glock Gen5', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsneedle`]    = { name = 'weapon_fsneedle', label = 'Infected Needle', weapontype = 'Melee', ammotype = nil, damagereason = 'Knifed / Stabbed / Eviscerated' },
    [`weapon_fsizh81`]     = { name = 'weapon_fsizh81', label = 'IZH 81', weapontype = 'Shotgun', ammotype = 'AMMO_SHOTGUN', damagereason = 'Devastated / Pulverized / Shotgunned' },
    [`weapon_fsmp5`]       = { name = 'weapon_fsmp5', label = 'MP-5', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsmp5k`]      = { name = 'weapon_fsmp5k', label = 'MP5 K', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsp980`]      = { name = 'weapon_fsp980', label = 'P-980', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fspickx`]     = { name = 'weapon_fspickx', label = 'Pick Axe', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fspp19`]      = { name = 'weapon_fspp19', label = 'P-980', weapontype = 'Submachine Gun', ammotype = 'AMMO_RIFLE', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsrenetti`]   = { name = 'weapon_fsrenetti', label = 'Renetti', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fscarl`]      = { name = 'weapon_fscarl', label = 'SCAR-L', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fskorpvz`]    = { name = 'weapon_fskorpvz', label = 'Scorpion SA61', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },


```

--      .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--    | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--    | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |  ____  ____  | || |  _______     | || |  _________   | || |  _________   | |
--    | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |  _   _  |  | || | |_   ||   _| | || | |_   __ \    | || | |_   ___  |  | || | |_   ___  |  | |
--    | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || | |_/ | | \_|  | || |   | |__| |   | || |   | |__) |   | || |   | |_  \_|  | || |   | |_  \_|  | |
--    | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |     | |      | || |   |  __  |   | || |   |  __ /    | || |   |  _|  _   | || |   |  _|  _   | |
--    | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |    _| |_     | || |  _| |  | |_  | || |  _| |  \ \_  | || |  _| |___/ |  | || |  _| |___/ |  | |
--    | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || |   |_____|    | || | |____||____| | || | |____| |___| | || | |_________|  | || | |_________|  | |
--    | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--    | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--     '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


 --- paste all bottom into qb-weapons/config.lua under Config.DurabilityMultiplier = { under last weapon

    weapon_fsacp9      = 0.15,
    weapon_fsak74u     = 0.15,
    weapon_fsak103     = 0.15,
    weapon_fsrchair    = 0.15,
    weapon_fsbroom     = 0.15,
    weapon_fsbarbat    = 0.15,
    weapon_fsump45     = 0.15,
    weapon_fsapvector  = 0.15,
    weapon_fstaca2011  = 0.15,
    weapon_fsdraco     = 0.15,
    weapon_fsdragnov   = 0.15,
    weapon_fsfive7     = 0.15,
    weapon_fsfn502     = 0.15,
    weapon_fsg3        = 0.15,
    weapon_fsm9a1      = 0.15,
    weapon_fsg19       = 0.15,
    weapon_fsgalilar   = 0.15,
    weapon_fsgepard    = 0.15,
    weapon_fsglockg4   = 0.15,
    weapon_fsglockg5   = 0.15,
    weapon_fsneedle    = 0.15,
    weapon_fsizh81     = 0.15,
    weapon_fsmp5       = 0.15,
    weapon_fsmp5k      = 0.15,
    weapon_fsp980      = 0.15,
    weapon_fspickx     = 0.15,
    weapon_fspp19      = 0.15,
    weapon_fsrenetti   = 0.15,
    weapon_fscarl      = 0.15,
    weapon_fskorpvz    = 0.15,


--   .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--  | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |     ____     | || | _____  _____ | || |  _______     | |
--  | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |_   ___  |  | || |   .'    `.   | || ||_   _||_   _|| || | |_   __ \    | |
--  | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || |   | |_  \_|  | || |  /  .--.  \  | || |  | |    | |  | || |   | |__) |   | |
--  | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |   |  _|      | || |  | |    | |  | || |  | '    ' |  | || |   |  __ /    | |
--  | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |  _| |_       | || |  \  `--'  /  | || |   \ `--' /   | || |  _| |  \ \_  | |
--  | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || | |_____|      | || |   `.____.'   | || |    `.__.'    | || | |____| |___| | |
--  | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--  | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--   '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


--- ATTACHMENTS ARE IMPORTANT FOR WEAPONS SO
--- copy bottom code in qb-weapons/config.lua under WeaponAttachments = {  copy each code under each same kind of section no mistake

    clip_attachment = {

        -- copy bottom and paste in clip_attachment { under last attachment if you do wrong it wil not work

            WEAPON_FSTACA2011 = `COMPONENT_STACATTO_CLIP_02`,
			WEAPON_FSFIVE7 = 	`COMPONENT_FSFIVE7_CLIP_02`,
			WEAPON_FSFN502 = 	`COMPONENT_FSFN502_CLIP_02`,
			WEAPON_FSM9A1 = 	`COMPONENT_FSM9A1_CLIP_02`,
			WEAPON_FSG19 = 		`COMPONENT_FSG19_CLIP_02`,
			WEAPON_FSGLOCKG4 = 	`COMPONENT_FSGLOCKG4_CLIP_02`,
			WEAPON_FSGLOCKG5 = 	`COMPONENT_FSGLOCKG5_CLIP_02`,
			WEAPON_FSP980 = 	`COMPONENT_FSP980_CLIP_02`,
			WEAPON_FSRENETTI = 	`COMPONENT_FSRENETTI_CLIP_02`,
			WEAPON_FSKORPVZ = 	`COMPONENT_FSKORPVZ_CLIP_02`,
            WEAPON_FSACP9 =     `COMPONENT_ACP9_CLIP_02`,
            WEAPON_FSUMP45 =    `COMPONENT_FSUMP45_CLIP_02`,
            WEAPON_FSAPVECTOR = `COMPONENT_FSAPVECTOR_CLIP_02`,
            WEAPON_FSGEPARD =   `COMPONENT_FSGEPARD_CLIP_02`,
            WEAPON_FSMP5 =      `COMPONENT_FSMP5_CLIP_02`,
            WEAPON_FSMP5K =     `COMPONENT_FSMP5K_CLIP_02`,
            WEAPON_FSAK74U =    `COMPONENT_FSAK74U_CLIP_02`,
            WEAPON_FSAK103 =    `COMPONENT_FSAK103_CLIP_02`,
            WEAPON_FSDRACO =    `COMPONENT_FSDRACO_CLIP_02`,
            WEAPON_FSDRAGNOV = `COMPONENT_FSDRAGUNOV_CLIP_02`,
            WEAPON_FSG3 =       `COMPONENT_FSG3_CLIP_02`,
            WEAPON_FSGALIL =    `COMPONENT_FSGALIL_CLIP_02`,
            WEAPON_FSPP19 =     `COMPONENT_FSPP19_CLIP_02`,
            WEAPON_FSCARL =     `COMPONENT_FSCARL_CLIP_02`,
            WEAPON_FSGALILAR = `COMPONENT_FSGALIL_CLIP_02`.
    }

    -- do some for  dump mag
    drum_attachment = {

        -- dont replace otherwise old weapon will messed so copy this code and put under drum_attachment

        WEAPON_FSFIVE7 = `COMPONENT_FSFIVE7_CLIP_DRUM`,
        WEAPON_FSFN502 = `COMPONENT_FSFN502_CLIP_DRUM`,
        WEAPON_FSG19 = `COMPONENT_FSG19_CLIP_DRUM`,
        WEAPON_FSGLOCKG4 = `COMPONENT_FSGLOCKG4_CLIP_DRUM`,
        WEAPON_FSGLOCKG5 = `COMPONENT_FSGLOCKG5_CLIP_DRUM`,
        WEAPON_FSP980 = `COMPONENT_FSP980_CLIP_DRUM`,
        WEAPON_FSRENETTI = `COMPONENT_FSRENETTI_CLIP_DRUM`,
        WEAPON_FSACP9 = `COMPONENT_ACP9_CLIP_DRUM`,
        WEAPON_FSGEPARD = `COMPONENT_FSGEPARD_CLIP_DRUM`,
        WEAPON_FSMP5 = `COMPONENT_FSMP5_CLIP_DRUM`,
        WEAPON_FSMP5K = `COMPONENT_FSMP5K_CLIP_DRUM`,
        WEAPON_FSAK74U = `COMPONENT_FSAK74U_BOXMAG`,
        WEAPON_FSAK103 = `COMPONENT_FSAK103_BOXMAG`,
        WEAPON_FSDRACO = `COMPONENT_FSDRACO_BOXMAG`,
        WEAPON_FSG3 = `COMPONENT_FSG3_BOXMAG`,
        WEAPON_FSGALIL = `COMPONENT_FSGALIL_CLIP_DRUM`,
        WEAPON_FSCARL = `COMPONENT_FSCARL_BOXMAG`,
        WEAPON_FSPP19 = `COMPONENT_FSPP19_CLIP_DRUM`,
        WEAPON_FSGALILAR = `COMPONENT_FSGALIL_CLIP_DRUM`,
    },

-- do some for  flashlight attachment
    flashlight_attachment = {

        -- dont replace otherwise old weapon will messed so copy this code and put under flashlight_attachment


        WEAPON_FSACP9 = `COMPONENT_ACP9_FLSH`,
        WEAPON_FSAK74U = `COMPONENT_AT_FSAK74U_FLSH`,
        WEAPON_FSAK103 = `COMPONENT_AT_FSAK103_FLSH`,
        WEAPON_FSAPVECTOR = `COMPONENT_AT_FSAPVECTOR_FLSH`,
        WEAPON_FSUMP45 = `COMPONENT_AT_FSUMP45_FLSH`,
        WEAPON_FSTACA2011 = `COMPONENT_AT_STACATTO_FLSH`,
        WEAPON_FSDRACO = `COMPONENT_AT_FSDRACO_FLSH`,
        WEAPON_FSFIVE7 = `COMPONENT_AT_FSFIVE7_FLSH`,
        WEAPON_FSFN502 = `COMPONENT_AT_FSFN502_FLSH`,
        WEAPON_FSG3 = `COMPONENT_AT_FSG3_FLSH`,
        WEAPON_FSM9A1 = `COMPONENT_AT_FSM9A1_FLSH`,
        WEAPON_FSG19 = `COMPONENT_AT_FSG19_FLSH`,
        WEAPON_FSGALIL = `COMPONENT_AT_FSGALIL_FLSH`,
        WEAPON_FSGLOCKG4 = `COMPONENT_AT_FSGLOCKG4_FLSH`,
        WEAPON_FSGLOCKG5 = `COMPONENT_AT_FSGLOCKG5_FLSH`,
        WEAPON_FSMP5 = `COMPONENT_AT_FSMP5_FLSH`,
        WEAPON_FSMP5K = `COMPONENT_AT_FSMP5K_FLSH`,
        WEAPON_FSP980 = `COMPONENT_AT_FSP980_FLSH`,
        WEAPON_FSPP19 = `COMPONENT_AT_FSPP19_FLSH`,
        WEAPON_FSRENETTI = `COMPONENT_AT_FSRENETTI_FLSH`,
        WEAPON_FSCARL = `COMPONENT_AT_FSCARL_FLSH`,
        WEAPON_FSKORPVZ = `COMPONENT_AT_FSKORPVZ_FLSH`,
        WEAPON_FSGALILAR = `COMPONENT_AT_FSGALIL_FLSH`,
        WEAPON_FSGEPARD = `COMPONENT_AT_FSGEPARD_FLSH`,
    },


-- do same for suppressor

    suppressor_attachment = {

        -- dont replace otherwise old weapon will messed so copy this code and put under suppressor_attachment

        WEAPON_FSACP9   = `COMPONENT_ACP9_SUPP`,
        WEAPON_FSUMP45   = `COMPONENT_AT_FSUMP45_SUPP`,
        WEAPON_FSAPVECTOR   = `COMPONENT_AT_FSAPVECTOR_SUPP`,
        WEAPON_FSTACA2011   = `COMPONENT_AT_STACATTO_SUPP`,
        WEAPON_FSFIVE7   = `COMPONENT_AT_FSFIVE7_SUPP`,
        WEAPON_FSFN502   = `COMPONENT_AT_FSFN502_SUPP`,
        WEAPON_FSM9A1   = `COMPONENT_AT_FSM9A1_SUPP`,
        WEAPON_FSG19   = `COMPONENT_AT_FSG19_SUPP`,
        WEAPON_FSGLOCKG4   = `COMPONENT_AT_FSGLOCKG4_SUPP`,
        WEAPON_FSGLOCKG5   = `COMPONENT_AT_FSGLOCKG5_SUPP`,
        WEAPON_FSMP5   = `COMPONENT_AT_FSMP5_SUPP`,
        WEAPON_FSMP5K   = `COMPONENT_AT_FSMP5K_SUPP`,
        WEAPON_FSP980   = `COMPONENT_AT_FSP980_SUPP`,
        WEAPON_FSRENETTI   = `COMPONENT_AT_FSRENETTI_SUPP`,
        WEAPON_FSKORPVZ   = `COMPONENT_AT_FSKORPVZ_SUPP`,
        WEAPON_FSAK74U = `COMPONENT_AT_FSAK74U_SUPP`,
        WEAPON_FSAK103 = `COMPONENT_AT_FSAK103_SUPP`,
        WEAPON_FSDRAGNOV = `COMPONENT_AT_FSDRAGUNOV_SUPP`,
        WEAPON_FSG3 = `COMPONENT_AT_FSG3_SUPP`,
        WEAPON_FSGALIL = `COMPONENT_AT_FSGALIL_SUPP`,
        WEAPON_FSCARL = `COMPONENT_AT_FSCARL_SUPP`,
        WEAPON_FSDRACO = `COMPONENT_AT_FSDRACO_SUPP`,
        WEAPON_FSGALILAR = `COMPONENT_AT_FSGALIL_SUPP`,
        WEAPON_FSPP19 = `COMPONENT_AT_FSPP19_SUPP`,

    },
 
    --- do same for  smallscope attachment

    smallscope_attachment = {

-- dont replace otherwise old weapon will messed so copy this code and put under smallscope_attachment

        WEAPON_FSAK74U = `COMPONENT_AT_FSAK74U_MACRO`,
        WEAPON_FSAK103 = `COMPONENT_AT_FSAK103_MACRO`,
        WEAPON_FSUMP45 = `COMPONENT_AT_FSUMP45_MACRO`,
        WEAPON_FSDRACO = `COMPONENT_AT_FSDRACO_MACRO`,
        WEAPON_FSGALIL = `COMPONENT_AT_FSGALIL_MACRO`,
        WEAPON_FSMP5 = `COMPONENT_AT_FSMP5_MACRO`,
        WEAPON_FSMP5K = `COMPONENT_AT_FSMP5K_MACRO`,
        WEAPON_FSDRAGNOV = `COMPONENT_AT_FSDRAGUNOV_LARGE`,
        WEAPON_FSGALILAR = `COMPONENT_AT_FSGALIL_MACRO`,
    },

     medscope_attachment = {
         WEAPON_FSG3 = `COMPONENT_AT_FSG3_MEDIUM`,
    
     }

-- dont replace otherwise old weapon will messed so copy this code and put under largescope_attachment

    largescope_attachment = {
        WEAPON_FSDRAGNOV = `COMPONENT_AT_FSDRAGUNOV_LARGE`,
    },

    ---- do some for grip
    grip_attachment = {

        -- dont replace otherwise old weapon will messed so copy this code and put under grip_attachment

        WEAPON_FSUMP45 = `COMPONENT_AT_FSUMP45_AFGRIP`
    },







--   .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--  | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |     _____    | || | ____   ____  | || |  _________   | |
--  | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |_   ___  |  | || |    |_   _|   | || ||_  _| |_  _| | || | |_   ___  |  | |
--  | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || |   | |_  \_|  | || |      | |     | || |  \ \   / /   | || |   | |_  \_|  | |
--  | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |   |  _|      | || |      | |     | || |   \ \ / /    | || |   |  _|  _   | |
--  | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |  _| |_       | || |     _| |_    | || |    \ ' /     | || |  _| |___/ |  | |
--  | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || | |_____|      | || |    |_____|   | || |     \_/      | || | |_________|  | |
--  | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--  | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--   '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


-- only if you have qb-smallresources/client/weapdraw.lua

-- then add this bottom under last weapon name in weapons = {


    'weapon_fsacp9'
    'weapon_fsak74u'
    'weapon_fsak103'
    'weapon_fsrchair'
    'weapon_fsbroom'
    'weapon_fsbarbat'
    'weapon_fsump45'
    'weapon_fsapvector'
    'weapon_fstaca2011'
    'weapon_fsdraco'
    'weapon_fsdragnov'
    'weapon_fsfive7'
    'weapon_fsfn502'
    'weapon_fsg3'
    'weapon_fsm9a1'
    'weapon_fsg19'
    'weapon_fsgalilar'
    'weapon_fsgepard'
    'weapon_fsglockg4'
    'weapon_fsglockg5'
    'weapon_fsneedle'
    'weapon_fsizh81'
    'weapon_fsmp5'
    'weapon_fsmp5k'
    'weapon_fsp980'
    'weapon_fspickx'
    'weapon_fspp19'
    'weapon_fsrenetti'
    'weapon_fscarl'
    'weapon_fskorpvz'


--	 .----------------.  .----------------.  .----------------.   .----------------.  .-----------------. .----------------.
--	| .--------------. || .--------------. || .--------------. | | .--------------. || .--------------. || .--------------. |
--	| |  _________   | || |  ____  ____  | || |  _________   | | | |  _________   | || | ____  _____  | || |  ________    | |
--	| | |  _   _  |  | || | |_   ||   _| | || | |_   ___  |  | | | | |_   ___  |  | || ||_   \|_   _| | || | |_   ___ `.  | |
--	| | |_/ | | \_|  | || |   | |__| |   | || |   | |_  \_|  | | | |   | |_  \_|  | || |  |   \ | |   | || |   | |   `. \ | |
--	| |     | |      | || |   |  __  |   | || |   |  _|  _   | | | |   |  _|  _   | || |  | |\ \| |   | || |   | |    | | | |
--	| |    _| |_     | || |  _| |  | |_  | || |  _| |___/ |  | | | |  _| |___/ |  | || | _| |_\   |_  | || |  _| |___.' / | |
--	| |   |_____|    | || | |____||____| | || | |_________|  | | | | |_________|  | || ||_____|\____| | || | |________.'  | |
--	| |              | || |              | || |              | | | |              | || |              | || |              | |
--	| '--------------' || '--------------' || '--------------' | | '--------------' || '--------------' || '--------------' |
--	 '----------------'  '----------------'  '----------------'   '----------------'  '----------------'  '----------------'
````
```

**`OLD-QBCORE-INSTALLATION.md`**

```lua
# FWB Studio

# Installation Steps

## Step 1: Add Images to Inventory

Copy the required images to the following directory:

```
qb_inventory\html\images   or according to your inventory
```

## Step 2: Add Weapon Item Definitions

Add the first code block to section in:

```
qb-core/shared/items
```

## Step 3: Add Weapon Definitions

Add the first code block to section in:

```
qb-core/shared/weapons
```

## Step 4: Add Durability Definition

Config.DurabilityMultiplier = { paste in this section

```
qb-weapons\config.lua
```

## Step 5: Add Components Definition

Paste the items under the [Config.DurabilityMultiplier = {] section in:

## WeaponAttachments = { paste in this section

```
qb-weapons\config.lua
```

```lua
--	 .----------------.  .----------------.  .----------------.  .----------------.   .----------------.   .----------------.  .-----------------. .----------------.
--	| .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. | | .--------------. || .--------------. || .--------------. |
--	| |    _______   | || |  _________   | || |  _________   | || |   ______     | | | |              | | | |     ____     | || | ____  _____  | || |  _________   | |
--	| |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | | | |              | | | |   .'    `.   | || ||_   \|_   _| | || | |_   ___  |  | |
--	| |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | | | |    ______    | | | |  /  .--.  \  | || |  |   \ | |   | || |   | |_  \_|  | |
--	| |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | | | |   |______|   | | | |  | |    | |  | || |  | |\ \| |   | || |   |  _|  _   | |
--	| |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | | | |              | | | |  \  `--'  /  | || | _| |_\   |_  | || |  _| |___/ |  | |
--	| |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | | | |              | | | |   `.____.'   | || ||_____|\____| | || | |_________|  | |
--	| |              | || |              | || |              | || |              | | | |              | | | |              | || |              | || |              | |
--	| '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' | | '--------------' || '--------------' || '--------------' |
--	 '----------------'  '----------------'  '----------------'  '----------------'   '----------------'   '----------------'  '----------------'  '----------------'
```

## Copy this into qb-core/shared/items

# make sure to add it under last weapon

````lua

    ['weapon_fsacp9'] = { name = 'weapon_fsacp9', label = 'ACP 9', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSACP9.png', unique = true, useable = false, description = 'A compact automatic pistol chambered in 9mm.' },
    ['weapon_fsak74u'] = { name = 'weapon_fsak74u', label = 'AK 74u', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSAK74U.png', unique = true, useable = false, description = 'A shortened version of the AK-74 rifle.' },
    ['weapon_fsak103'] = { name = 'weapon_fsak103', label = 'AK 103', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSAK103.png', unique = true, useable = false, description = 'A modernized Russian assault rifle.' },
    ['weapon_fsrchair'] = { name = 'weapon_fsrchair', label = 'Rusty Chair', weight = 1, type = 'weapon', image = 'WEAPON_FSRCHAIR.png', unique = true, useable = false, description = 'An old rusty chair turned weapon.' },
    ['weapon_fsbroom'] = { name = 'weapon_fsbroom', label = 'Broom', weight = 1, type = 'weapon', image = 'WEAPON_FSBROOM.png', unique = true, useable = false, description = 'A sturdy cleaning tool that hurts.' },
    ['weapon_fsbarbat'] = { name = 'weapon_fsbarbat', label = 'Barbed bat', weight = 1, type = 'weapon', image = 'WEAPON_FSBARBAT.png', unique = true, useable = false, description = 'A baseball bat wrapped in barbed wire.' },
    ['weapon_fsump45'] = { name = 'weapon_fsump45', label = 'UMP-45', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSUMP45.png', unique = true, useable = false, description = 'A .45 caliber submachine gun.' },
    ['weapon_fsapvector'] = { name = 'weapon_fsapvector', label = 'Compact Vector', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSAPVECTOR.png', unique = true, useable = false, description = 'A compact .45 ACP Vector SMG.' },
    ['weapon_fstaca2011'] = { name = 'weapon_fstaca2011', label = 'Stacatto 2011', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSTACA2011.png', unique = true, useable = false, description = 'A high-performance competition pistol' },
    ['weapon_fsdraco'] = { name = 'weapon_fsdraco', label = 'Mini Draco', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSDRACO.png', unique = true, useable = false, description = 'A short-barreled AK pistol.' },
    ['weapon_fsdragnov'] = { name = 'weapon_fsdragnov', label = 'Dragnov', weight = 1, type = 'weapon', ammotype = 'AMMO_SNIPER', image = 'WEAPON_FSDRAGNOV.png', unique = true, useable = false, description = 'A long-range Russian sniper rifle.' },
    ['weapon_fsfive7'] = { name = 'weapon_fsfive7', label = 'Five Seven', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSFIVE7.png', unique = true, useable = false, description = 'A lightweight pistol chambered in 5.7mm.' },
    ['weapon_fsfn502'] = { name = 'weapon_fsfn502', label = 'FN 502', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSFN502.png', unique = true, useable = false, description = 'FN’s .22 LR tactical pistol variant.' },
    ['weapon_fsg3'] = { name = 'weapon_fsg3', label = 'G3 Rifle', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSG3.png', unique = true, useable = false, description = 'A powerful 7.62mm battle rifle.' },
    ['weapon_fsm9a1'] = { name = 'weapon_fsm9a1', label = 'Beretta M9', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSM9A1.png', unique = true, useable = false, description = 'The iconic 9mm military sidearm.' },
    ['weapon_fsg19'] = { name = 'weapon_fsg19', label = 'G-19', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSG19.png', unique = true, useable = false, description = 'A versatile Glock 19 pistol.' },
    ['weapon_fsgalilar'] = { name = 'weapon_fsgalilar', label = 'GALIL AR', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSGALILAR.png', unique = true, useable = false, description = 'An Israeli assault rifle.' },
    ['weapon_fsgepard'] = { name = 'weapon_fsgepard', label = 'Gepard PDW', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSGEPARD.png', unique = true, useable = false, description = 'A compact personal defense weapon.' },
    ['weapon_fsglockg4'] = { name = 'weapon_fsglockg4', label = 'Glock Gen4', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSGLOCKG4.png', unique = true, useable = false, description = 'Fourth generation Glock handgun.' },
    ['weapon_fsglockg5'] = { name = 'weapon_fsglockg5', label = 'Glock Gen5', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSGLOCKG5.png', unique = true, useable = false, description = 'Fifth generation Glock handgun.' },
    ['weapon_fsneedle'] = { name = 'weapon_fsneedle', label = 'Infected Needle', weight = 1, type = 'weapon', image = 'WEAPON_FSNEEDLE.png', unique = true, useable = false, description = 'A dangerous infected needle.' },
    ['weapon_fsizh81'] = { name = 'weapon_fsizh81', label = 'IZH 81', weight = 1, type = 'weapon', ammotype = 'AMMO_SHOTGUN', image = 'WEAPON_FSIZH81.png', unique = true, useable = false, description = 'A rugged Russian shotgun.' },
    ['weapon_fsmp5'] = { name = 'weapon_fsmp5', label = 'MP-5', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSMP5.png', unique = true, useable = false, description = 'A trusted 9mm submachine gun.' },
    ['weapon_fsmp5k'] = { name = 'weapon_fsmp5k', label = 'MP5 K', weight = 1, type = 'weapon', ammotype = 'AMMO_SMG', image = 'WEAPON_FSMP5K.png', unique = true, useable = false, description = 'A compact version of the MP5.' },
    ['weapon_fsp980'] = { name = 'weapon_fsp980', label = 'P-980', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSP980.png', unique = true, useable = false, description = 'A reliable semi-auto handgun.' },
    ['weapon_fspickx'] = { name = 'weapon_fspickx', label = 'PICK AXE', weight = 1, type = 'weapon', image = 'WEAPON_FSPICKX.png', unique = true, useable = false, description = 'A mining tool turned deadly weapon.' },
    ['weapon_fspp19'] = { name = 'weapon_fspp19', label = 'P-980', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSPP19.png', unique = true, useable = false, description = 'A high-capacity Russian SMG.' },
    ['weapon_fsrenetti'] = { name = 'weapon_fsrenetti', label = 'Renetti', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSRENETTI.png', unique = true, useable = false, description = 'A semi-auto 9mm handgun.' },
    ['weapon_fscarl'] = { name = 'weapon_fscarl', label = 'SCAR-L', weight = 1, type = 'weapon', ammotype = 'AMMO_RIFLE', image = 'WEAPON_FSCARL.png', unique = true, useable = false, description = 'A lightweight modular assault rifle.' },
    ['weapon_fskorpvz'] = { name = 'weapon_fskorpvz', label = 'Scorpion SA61', weight = 1, type = 'weapon', ammotype = 'AMMO_PISTOL', image = 'WEAPON_FSKORPVZ.png', unique = true, useable = false, description = 'A compact 9mm Czech submachine gun.' },


    ```


--        .----------------.  .----------------.  .----------------.  .----------------.   .----------------.   .----------------.  .----------------.  .----------------.
--       | .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. | | .--------------. || .--------------. || .--------------. |
--       | |    _______   | || |  _________   | || |  _________   | || |   ______     | | | |              | | | |  _________   | || | _____  _____ | || |     ____     | |
--       | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | | | |              | | | | |  _   _  |  | || ||_   _||_   _|| || |   .'    `.   | |
--       | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | | | |    ______    | | | | |_/ | | \_|  | || |  | | /\ | |  | || |  /  .--.  \  | |
--       | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | | | |   |______|   | | | |     | |      | || |  | |/  \| |  | || |  | |    | |  | |
--       | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | | | |              | | | |    _| |_     | || |  |   /\   |  | || |  \  `--'  /  | |
--       | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | | | |              | | | |   |_____|    | || |  |__/  \__|  | || |   `.____.'   | |
--       | |              | || |              | || |              | || |              | | | |              | | | |              | || |              | || |              | |
--       | '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' | | '--------------' || '--------------' || '--------------' |
--        '----------------'  '----------------'  '----------------'  '----------------'   '----------------'   '----------------'  '----------------'  '----------------'

## Copy this into qb-core/shared/weapons
# make sure to add it under last weapon
```lua

    -- Custom Weapons

    [`weapon_fsacp9`]      = { name = 'weapon_fsacp9', label = 'ACP 9', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsak74u`]     = { name = 'weapon_fsak74u', label = 'AK 74u', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsak103`]     = { name = 'weapon_fsak103', label = 'AK 103', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsrchair`]    = { name = 'weapon_fsrchair', label = 'Rusty Chair', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsbroom`]     = { name = 'weapon_fsbroom', label = 'Broom', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsbarbat`]    = { name = 'weapon_fsbarbat', label = 'Barbed Bat', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fsump45`]    = { name = 'weapon_fsump45', label = 'UMP-45', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsapvector`]  = { name = 'weapon_fsapvector', label = 'Compact Vector', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fstaca2011`]  = { name = 'weapon_fstaca2011', label = 'Stacatto 2011', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsdraco`]     = { name = 'weapon_fsdraco', label = 'Mini Draco', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsdragnov`]   = { name = 'weapon_fsdragnov', label = 'Dragnov', weapontype = 'Sniper Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Sniped / Picked off / Scoped' },
    [`weapon_fsfive7`]     = { name = 'weapon_fsfive7', label = 'Five Seven', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsfn502`]     = { name = 'weapon_fsfn502', label = 'FN 502', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsg3`]        = { name = 'weapon_fsg3', label = 'G3 Rifle', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsm9a1`]      = { name = 'weapon_fsm9a1', label = 'Beretta M9', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsg19`]       = { name = 'weapon_fsg19', label = 'G-19', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsgalilar`]   = { name = 'weapon_fsgalilar', label = 'GALIL AR', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fsgepard`]    = { name = 'weapon_fsgepard', label = 'Gepard PDW', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsglockg4`]   = { name = 'weapon_fsglockg4', label = 'Glock Gen4', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsglockg5`]   = { name = 'weapon_fsglockg5', label = 'Glock Gen5', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fsneedle`]    = { name = 'weapon_fsneedle', label = 'Infected Needle', weapontype = 'Melee', ammotype = nil, damagereason = 'Knifed / Stabbed / Eviscerated' },
    [`weapon_fsizh81`]     = { name = 'weapon_fsizh81', label = 'IZH 81', weapontype = 'Shotgun', ammotype = 'AMMO_SHOTGUN', damagereason = 'Devastated / Pulverized / Shotgunned' },
    [`weapon_fsmp5`]       = { name = 'weapon_fsmp5', label = 'MP-5', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsmp5k`]      = { name = 'weapon_fsmp5k', label = 'MP5 K', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsp980`]      = { name = 'weapon_fsp980', label = 'P-980', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fspickx`]     = { name = 'weapon_fspickx', label = 'Pick Axe', weapontype = 'Melee', ammotype = nil, damagereason = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered' },
    [`weapon_fspp19`]      = { name = 'weapon_fspp19', label = 'P-980', weapontype = 'Submachine Gun', ammotype = 'AMMO_RIFLE', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },
    [`weapon_fsrenetti`]   = { name = 'weapon_fsrenetti', label = 'Renetti', weapontype = 'Pistol', ammotype = 'AMMO_PISTOL', damagereason = 'Pistoled / Blasted / Plugged / Bust a cap in' },
    [`weapon_fscarl`]      = { name = 'weapon_fscarl', label = 'SCAR-L', weapontype = 'Assault Rifle', ammotype = 'AMMO_RIFLE', damagereason = 'Ended / Rifled / Shot down / Floored' },
    [`weapon_fskorpvz`]    = { name = 'weapon_fskorpvz', label = 'Scorpion SA61', weapontype = 'Submachine Gun', ammotype = 'AMMO_PISTOL', damagereason = 'Riddled / Drilled / Finished / Submachine Gunned' },


```

--      .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--    | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--    | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |  ____  ____  | || |  _______     | || |  _________   | || |  _________   | |
--    | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |  _   _  |  | || | |_   ||   _| | || | |_   __ \    | || | |_   ___  |  | || | |_   ___  |  | |
--    | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || | |_/ | | \_|  | || |   | |__| |   | || |   | |__) |   | || |   | |_  \_|  | || |   | |_  \_|  | |
--    | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |     | |      | || |   |  __  |   | || |   |  __ /    | || |   |  _|  _   | || |   |  _|  _   | |
--    | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |    _| |_     | || |  _| |  | |_  | || |  _| |  \ \_  | || |  _| |___/ |  | || |  _| |___/ |  | |
--    | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || |   |_____|    | || | |____||____| | || | |____| |___| | || | |_________|  | || | |_________|  | |
--    | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--    | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--     '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


 --- paste all bottom into qb-weapons/config.lua under Config.DurabilityMultiplier = { under last weapon

    weapon_fsacp9      = 0.15,
    weapon_fsak74u     = 0.15,
    weapon_fsak103     = 0.15,
    weapon_fsrchair    = 0.15,
    weapon_fsbroom     = 0.15,
    weapon_fsbarbat    = 0.15,
    weapon_fsump45     = 0.15,
    weapon_fsapvector  = 0.15,
    weapon_fstaca2011  = 0.15,
    weapon_fsdraco     = 0.15,
    weapon_fsdragnov   = 0.15,
    weapon_fsfive7     = 0.15,
    weapon_fsfn502     = 0.15,
    weapon_fsg3        = 0.15,
    weapon_fsm9a1      = 0.15,
    weapon_fsg19       = 0.15,
    weapon_fsgalilar   = 0.15,
    weapon_fsgepard    = 0.15,
    weapon_fsglockg4   = 0.15,
    weapon_fsglockg5   = 0.15,
    weapon_fsneedle    = 0.15,
    weapon_fsizh81     = 0.15,
    weapon_fsmp5       = 0.15,
    weapon_fsmp5k      = 0.15,
    weapon_fsp980      = 0.15,
    weapon_fspickx     = 0.15,
    weapon_fspp19      = 0.15,
    weapon_fsrenetti   = 0.15,
    weapon_fscarl      = 0.15,
    weapon_fskorpvz    = 0.15,


--   .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--  | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |     ____     | || | _____  _____ | || |  _______     | |
--  | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |_   ___  |  | || |   .'    `.   | || ||_   _||_   _|| || | |_   __ \    | |
--  | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || |   | |_  \_|  | || |  /  .--.  \  | || |  | |    | |  | || |   | |__) |   | |
--  | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |   |  _|      | || |  | |    | |  | || |  | '    ' |  | || |   |  __ /    | |
--  | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |  _| |_       | || |  \  `--'  /  | || |   \ `--' /   | || |  _| |  \ \_  | |
--  | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || | |_____|      | || |   `.____.'   | || |    `.__.'    | || | |____| |___| | |
--  | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--  | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--   '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


--- ATTACHMENTS ARE IMPORTANT FOR WEAPONS SO
--- copy bottom code in qb-weapons/config.lua under WeaponAttachments = {  copy each code under each same kind of section no mistake

    ['WEAPON_FSACP9'] = { -- smg
        defaultclip = { component = 'COMPONENT_ACP9_CLIP_01', item = 'smg_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_ACP9_CLIP_02', item = 'smg_extendedclip' , type = 'clip', },
        drum = { component = 'COMPONENT_ACP9_CLIP_DRUM', item = 'smg_drum' , type = 'clip', },
        flashlight = { component = 'COMPONENT_ACP9_FLSH', item = 'smg_flashlight' },
        suppressor = { component = 'COMPONENT_ACP9_SUPP', item = 'smg_suppressor' }
    },

    ['WEAPON_FSAK74U'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSAK74U_CLIP_01', item = 'rifle_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSAK74U_CLIP_02', item = 'rifle_extendedclip' , type = 'clip', },
        drum = { component = 'COMPONENT_FSAK74U_BOXMAG', item = 'rifle_drum' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSAK74U_FLSH', item = 'rifle_flashlight' },
        scope = { component = 'COMPONENT_AT_FSAK74U_MACRO', item = 'rifle_scope' }
    },

    ['WEAPON_FSAK103'] = { -- rifle
        defaultclip = { component = 'COMPONENT_FSAK103_CLIP_01', item = 'rifle_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSAK103_CLIP_02', item = 'rifle_extendedclip' , type = 'clip', },
        drum = { component = 'COMPONENT_FSAK103_BOXMAG', item = 'rifle_drum' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSAK103_FLSH', item = 'rifle_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSAK103_SUPP', item = 'rifle_suppressor' },
        scope = { component = 'COMPONENT_AT_FSAK103_MACRO', item = 'rifle_scope' }
    },

    ['WEAPON_FSUMP45'] = { -- smg
        defaultclip = { component = 'COMPONENT_FSUMP45_CLIP_01', item = 'smg_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSUMP45_CLIP_02', item = 'smg_extendedclip' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSUMP45_FLSH', item = 'smg_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSUMP45_SUPP', item = 'smg_suppressor' },
        smallscope = { component = 'COMPONENT_AT_FSUMP45_MACRO', item = 'smg_smallscope' },
        grip = { component = 'COMPONENT_AT_FSUMP45_AFGRIP', item = 'smg_grip' },
    },

    ['WEAPON_FSAPVECTOR'] = {-- pistol
        defaultclip = { component = 'COMPONENT_FSAPVECTOR_CLIP_01', item = 'pistol_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSAPVECTOR_CLIP_02', item = 'pistol_extendedclip' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSAPVECTOR_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSAPVECTOR_SUPP', item = 'pistol_suppressor' }
    },

     ['WEAPON_FSTACA2011'] = { --pistol
        defaultclip = { component = 'COMPONENT_STACATTO_CLIP_01', item = 'pistol_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_STACATTO_CLIP_02', item = 'pistol_extendedclip' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_STACATTO_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_STACATTO_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSDRACO'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSDRACO_CLIP_01', item = 'rifle_defaultclip' , type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSDRACO_CLIP_02', item = 'rifle_extendedclip' , type = 'clip', },
        drum = { component = 'COMPONENT_FSDRACO_BOXMAG', item = 'rifle_drum' , type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSDRACO_FLSH', item = 'rifle_flashlight' },
        scope = { component = 'COMPONENT_AT_FSDRACO_MACRO', item = 'rifle_scope' },
        suppressor = { component = 'COMPONENT_AT_FSDRACO_SUPP', item = 'rifle_suppressor' }
    },

    ['WEAPON_FSDRAGNOV'] = { --marksman
        defaultclip = { component = 'COMPONENT_FSDRAGUNOV_CLIP_01', item = 'sniper_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSDRAGUNOV_CLIP_02', item = 'sniper_extendedclip', type = 'clip', },
        suppressor = { component = 'COMPONENT_AT_FSDRAGUNOV_SUPP', item = 'sniper_suppressor' },
        scope = { component = 'COMPONENT_AT_FSDRAGUNOV_LARGE', item = 'sniper_scope' }
    },

    ['WEAPON_FSFIVE7'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSFIVE7_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSFIVE7_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSFIVE7_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSFIVE7_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSFIVE7_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSFN502'] = { -- pistol
        defaultclip = { component = 'COMPONENT_FSFN502_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSFN502_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSFN502_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSFN502_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSFN502_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSG3'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSG3_CLIP_01', item = 'rifle_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSG3_CLIP_02', item = 'rifle_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSG3_BOXMAG', item = 'rifle_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSG3_FLSH', item = 'rifle_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSG3_SUPP', item = 'rifle_suppressor' },
        scope = { component = 'COMPONENT_AT_FSG3_MEDIUM', item = 'rifle_scope' }
    },

    ['WEAPON_FSM9A1'] = { -- pistol
        defaultclip = { component = 'COMPONENT_FSM9A1_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSM9A1_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSM9A1_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSM9A1_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSG19'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSG19_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSG19_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSG19_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSG19_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSG19_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSGALILAR'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSGALIL_CLIP_01', item = 'rifle_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSGALIL_CLIP_02', item = 'rifle_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSGALIL_CLIP_DRUM', item = 'rifle_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSGALIL_FLSH', item = 'rifle_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSGALIL_SUPP', item = 'rifle_suppressor' },
        scope = { component = 'COMPONENT_AT_FSGALIL_MACRO', item = 'rifle_scope' }
    },

    ['WEAPON_FSGEPARD'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSGEPARD_CLIP_01', item = 'rifle_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSGEPARD_CLIP_02', item = 'rifle_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSGEPARD_CLIP_DRUM', item = 'rifle_extendedclip', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSGEPARD_FLSH', item = 'rifle_flashlight' },
    },

    ['WEAPON_FSGLOCKG4'] = { -- pistol
        defaultclip = { component = 'COMPONENT_FSGLOCKG4_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSGLOCKG4_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSGLOCKG4_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSGLOCKG4_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSGLOCKG4_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSGLOCKG5'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSGLOCKG5_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSGLOCKG5_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSGLOCKG5_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSGLOCKG5_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSGLOCKG5_SUPP', item = 'pistol_suppressor' }
    },

     ['WEAPON_FSMP5'] = { --smg
        defaultclip = { component = 'COMPONENT_FSMP5_CLIP_01', item = 'smg_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSMP5_CLIP_02', item = 'smg_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSMP5_CLIP_DRUM', item = 'smg_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSMP5_FLSH', item = 'smg_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSMP5_SUPP', item = 'smg_suppressor' },
        scope = { component = 'COMPONENT_AT_FSMP5_MACRO', item = 'smg_scope' },
    },
    ['WEAPON_FSMP5K'] = { --smg
        defaultclip = { component = 'COMPONENT_FSMP5K_CLIP_01', item = 'smg_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSMP5K_CLIP_02', item = 'smg_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSMP5K_CLIP_DRUM', item = 'smg_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSMP5K_FLSH', item = 'smg_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSMP5K_SUPP', item = 'smg_suppressor' },
        scope = { component = 'COMPONENT_AT_FSMP5K_MACRO', item = 'smg_scope' },
    },

     ['WEAPON_FSP980'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSP980_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSP980_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSP980_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSP980_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSP980_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSPP19'] = { --rifle
        defaultclip = { component = 'COMPONENT_FSPP19_CLIP_01', item = 'rifle_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSPP19_CLIP_02', item = 'rifle_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSPP19_CLIP_DRUM', item = 'rifle_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSPP19_FLSH', item = 'rifle_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSPP19_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSRENETTI'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSRENETTI_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSRENETTI_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSRENETTI_CLIP_DRUM', item = 'pistol_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSRENETTI_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSRENETTI_SUPP', item = 'pistol_suppressor' }
    },

    ['WEAPON_FSCARL'] =  { --rifle
        defaultclip = { component = 'COMPONENT_FSCARL_CLIP_01', item = 'rifle_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSCARL_CLIP_02', item = 'rifle_extendedclip', type = 'clip', },
        drum = { component = 'COMPONENT_FSCARL_BOXMAG', item = 'rifle_drum', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSCARL_FLSH', item = 'rifle_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSCARL_SUPP', item = 'rifle_suppressor' }
    },

     ['WEAPON_FSKORPVZ'] = { --pistol
        defaultclip = { component = 'COMPONENT_FSKORPVZ_CLIP_01', item = 'pistol_defaultclip', type = 'clip', },
        extendedclip = { component = 'COMPONENT_FSKORPVZ_CLIP_02', item = 'pistol_extendedclip', type = 'clip', },
        flashlight = { component = 'COMPONENT_AT_FSKORPVZ_FLSH', item = 'pistol_flashlight' },
        suppressor = { component = 'COMPONENT_AT_FSKORPVZ_SUPP', item = 'pistol_suppressor' },
    },






--   .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.
--  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
--  | |    _______   | || |  _________   | || |  _________   | || |   ______     | || |              | || |  _________   | || |     _____    | || | ____   ____  | || |  _________   | |
--  | |   /  ___  |  | || | |  _   _  |  | || | |_   ___  |  | || |  |_   __ \   | || |              | || | |_   ___  |  | || |    |_   _|   | || ||_  _| |_  _| | || | |_   ___  |  | |
--  | |  |  (__ \_|  | || | |_/ | | \_|  | || |   | |_  \_|  | || |    | |__) |  | || |    ______    | || |   | |_  \_|  | || |      | |     | || |  \ \   / /   | || |   | |_  \_|  | |
--  | |   '.___`-.   | || |     | |      | || |   |  _|  _   | || |    |  ___/   | || |   |______|   | || |   |  _|      | || |      | |     | || |   \ \ / /    | || |   |  _|  _   | |
--  | |  |`\____) |  | || |    _| |_     | || |  _| |___/ |  | || |   _| |_      | || |              | || |  _| |_       | || |     _| |_    | || |    \ ' /     | || |  _| |___/ |  | |
--  | |  |_______.'  | || |   |_____|    | || | |_________|  | || |  |_____|     | || |              | || | |_____|      | || |    |_____|   | || |     \_/      | || | |_________|  | |
--  | |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
--  | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
--   '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'


-- only if you have qb-smallresources/client/weapdraw.lua

-- then add this bottom under last weapon name in weapons = {


    'weapon_fsacp9'
    'weapon_fsak74u'
    'weapon_fsak103'
    'weapon_fsrchair'
    'weapon_fsbroom'
    'weapon_fsbarbat'
    'weapon_fsump45'
    'weapon_fsapvector'
    'weapon_fstaca2011'
    'weapon_fsdraco'
    'weapon_fsdragnov'
    'weapon_fsfive7'
    'weapon_fsfn502'
    'weapon_fsg3'
    'weapon_fsm9a1'
    'weapon_fsg19'
    'weapon_fsgalilar'
    'weapon_fsgepard'
    'weapon_fsglockg4'
    'weapon_fsglockg5'
    'weapon_fsneedle'
    'weapon_fsizh81'
    'weapon_fsmp5'
    'weapon_fsmp5k'
    'weapon_fsp980'
    'weapon_fspickx'
    'weapon_fspp19'
    'weapon_fsrenetti'
    'weapon_fscarl'
    'weapon_fskorpvz'


--	 .----------------.  .----------------.  .----------------.   .----------------.  .-----------------. .----------------.
--	| .--------------. || .--------------. || .--------------. | | .--------------. || .--------------. || .--------------. |
--	| |  _________   | || |  ____  ____  | || |  _________   | | | |  _________   | || | ____  _____  | || |  ________    | |
--	| | |  _   _  |  | || | |_   ||   _| | || | |_   ___  |  | | | | |_   ___  |  | || ||_   \|_   _| | || | |_   ___ `.  | |
--	| | |_/ | | \_|  | || |   | |__| |   | || |   | |_  \_|  | | | |   | |_  \_|  | || |  |   \ | |   | || |   | |   `. \ | |
--	| |     | |      | || |   |  __  |   | || |   |  _|  _   | | | |   |  _|  _   | || |  | |\ \| |   | || |   | |    | | | |
--	| |    _| |_     | || |  _| |  | |_  | || |  _| |___/ |  | | | |  _| |___/ |  | || | _| |_\   |_  | || |  _| |___.' / | |
--	| |   |_____|    | || | |____||____| | || | |_________|  | | | | |_________|  | || ||_____|\____| | || | |________.'  | |
--	| |              | || |              | || |              | | | |              | || |              | || |              | |
--	| '--------------' || '--------------' || '--------------' | | '--------------' || '--------------' || '--------------' |
--	 '----------------'  '----------------'  '----------------'   '----------------'  '----------------'  '----------------'
````
```

</details>

<details>
<summary>Item images</summary>

**Image:** `at_clip_drum_pistol_fs_v1.png` — place in the path above.

**Image:** `at_clip_drum_rifle_fs_v1.png` — place in the path above.

**Image:** `at_clip_drum_smg_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_pistol_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_rifle_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_smg_fs_v1.png` — place in the path above.

**Image:** `at_flashlight_fs_v1.png` — place in the path above.

**Image:** `at_grip_fs_v1.png` — place in the path above.

**Image:** `at_scope_macro_fs_v1.png` — place in the path above.

**Image:** `at_suppressor_heavy_fs_v1.png` — place in the path above.

**Image:** `at_suppressor_light_fs_v1.png` — place in the path above.

**Image:** `at_clip_drum_pistol_fs_v1.png` — place in the path above.

**Image:** `at_clip_drum_rifle_fs_v1.png` — place in the path above.

**Image:** `at_clip_drum_smg_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_pistol_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_rifle_fs_v1.png` — place in the path above.

**Image:** `at_clip_extended_smg_fs_v1.png` — place in the path above.

**Image:** `at_flashlight_fs_v1.png` — place in the path above.

**Image:** `at_grip_fs_v1.png` — place in the path above.

**Image:** `at_scope_macro_fs_v1.png` — place in the path above.

**Image:** `at_suppressor_heavy_fs_v1.png` — place in the path above.

**Image:** `at_suppressor_light_fs_v1.png` — place in the path above.

**Image:** `WEAPON_FSACP9.png` — place in the path above.

**Image:** `WEAPON_FSAK103.png` — place in the path above.

**Image:** `WEAPON_FSAK74U.png` — place in the path above.

**Image:** `WEAPON_FSAPVECTOR.png` — place in the path above.

**Image:** `WEAPON_FSBARBAT.png` — place in the path above.

**Image:** `WEAPON_FSBROOM.png` — place in the path above.

**Image:** `WEAPON_FSCARL.png` — place in the path above.

**Image:** `WEAPON_FSDRACO.png` — place in the path above.

**Image:** `WEAPON_FSDRAGNOV.png` — place in the path above.

**Image:** `WEAPON_FSFIVE7.png` — place in the path above.

**Image:** `WEAPON_FSFN502.png` — place in the path above.

**Image:** `WEAPON_FSG19.png` — place in the path above.

**Image:** `WEAPON_FSG3.png` — place in the path above.

**Image:** `WEAPON_FSGALILAR.png` — place in the path above.

**Image:** `WEAPON_FSGEPARD.png` — place in the path above.

**Image:** `WEAPON_FSGLOCKG4.png` — place in the path above.

**Image:** `WEAPON_FSGLOCKG5.png` — place in the path above.

**Image:** `WEAPON_FSIZH81.png` — place in the path above.

**Image:** `WEAPON_FSKORPVZ.png` — place in the path above.

**Image:** `WEAPON_FSM9A1.png` — place in the path above.

**Image:** `WEAPON_FSMP5.png` — place in the path above.

**Image:** `WEAPON_FSMP5K.png` — place in the path above.

**Image:** `WEAPON_FSNEEDLE.png` — place in the path above.

**Image:** `WEAPON_FSP980.png` — place in the path above.

**Image:** `WEAPON_FSPICKX.png` — place in the path above.

**Image:** `WEAPON_FSPP19.png` — place in the path above.

**Image:** `WEAPON_FSRCHAIR.png` — place in the path above.

**Image:** `WEAPON_FSRENETTI.png` — place in the path above.

**Image:** `WEAPON_FSTACA2011.png` — place in the path above.

**Image:** `WEAPON_FSUMP45.png` — place in the path above.

**Image:** `WEAPON_FSACP9.PNG` — place in the path above.

**Image:** `WEAPON_FSAK103.png` — place in the path above.

**Image:** `WEAPON_FSAK74U.PNG` — place in the path above.

**Image:** `WEAPON_FSAPVECTOR.png` — place in the path above.

**Image:** `WEAPON_FSBARBAT.png` — place in the path above.

**Image:** `WEAPON_FSBROOM.png` — place in the path above.

**Image:** `WEAPON_FSCARL.png` — place in the path above.

**Image:** `WEAPON_FSDRACO.png` — place in the path above.

**Image:** `WEAPON_FSDRAGNOV.png` — place in the path above.

**Image:** `WEAPON_FSFIVE7.png` — place in the path above.

**Image:** `WEAPON_FSFN502.png` — place in the path above.

**Image:** `WEAPON_FSG19.png` — place in the path above.

**Image:** `WEAPON_FSG3.png` — place in the path above.

**Image:** `WEAPON_FSGALILAR.png` — place in the path above.

**Image:** `WEAPON_FSGEPARD.png` — place in the path above.

**Image:** `WEAPON_FSGLOCKG4.png` — place in the path above.

**Image:** `WEAPON_FSGLOCKG5.png` — place in the path above.

**Image:** `WEAPON_FSIZH81.png` — place in the path above.

**Image:** `WEAPON_FSKORPVZ.png` — place in the path above.

**Image:** `WEAPON_FSM9A1.png` — place in the path above.

**Image:** `WEAPON_FSMP5.png` — place in the path above.

**Image:** `WEAPON_FSMP5K.png` — place in the path above.

**Image:** `WEAPON_FSNEEDLE.png` — place in the path above.

**Image:** `WEAPON_FSP980.png` — place in the path above.

**Image:** `WEAPON_FSPICKX.png` — place in the path above.

**Image:** `WEAPON_FSPP19.png` — place in the path above.

**Image:** `WEAPON_FSRCHAIR.png` — place in the path above.

**Image:** `WEAPON_FSRENETTI.png` — place in the path above.

**Image:** `WEAPON_FSTACA2011.png` — place in the path above.

**Image:** `WEAPON_FSUMP45.png` — place in the path above.

</details>

<details>
<summary>Other install files</summary>

- `AK47-INSTALLATION.md`
- `NEW QS INVENTORY-INSTALLATION.md`
- `OLD QS INVENTORY-INSTALLATION.md`
- `OX-INSTALLATION.md`

</details>

</div>




## Install steps

1. Extract `fs_weapons_v1` into `resources/[fs]/`.
2. Follow the **Items & inventory setup** section below for your inventory (weapon meta, items, images).
3. Run any SQL files if included in `[INSTALL_ME_FIRST]`.
4. Add to `server.cfg`:

```cfg
ensure fs_weapons_v1
```

5. Restart the server and test in-game.
