---
title: Gun Jamming Configuration | FWB Studio Docs
description: Configure Gun Jamming — config files and key options.
---


# Gun Jamming — Configuration

Edit `fs_gunjamming/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[

  -- config

]]

config.Whitelistedjobs = { -- No jamming for this job
     ['police'] = true,
     ['sheriff'] = true,
}

-- config.Shoot = true means player will shoot while unjamming and can damage to near player 
-- config.Shoot = false means player will not gonna shoot while unjamming
-- IF config.Shoot = false then player will able to keep running while unjamming
config.Shoot = false

-- player copy paste weapon row if u want to add new weapon
config.Weapons = {
  --  [`WEAPON_PISTOL`]       = {JamChance = 40, UnjamChance = 30},
    [`WEAPON_PISTOL`] = {JamChance = 100, UnjamChance = 100},                --name should be in capital latter 
    [`WEAPON_CARBINERIFLE`] = {JamChance = 30, UnjamChance = 100},    -- name should be in capital latter   
}
 
config.Notification = {
    title = 'Weapon Jamming',
    icon = 'fas fa-bullseye',
}
```

</div>
