---
title: Gun Jamming Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Gun Jamming script (fs_gunjamming).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426484" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Gun Jamming — Configuration

Edit `fs_gunjamming/config/config.lua` to configure job exemptions, unjamming shoot behaviors, per-weapon jam and unjam probabilities, and alert notifications.

---

## Complete `config/config.lua` Reference

```lua
config = {}

-- Whitelisted Jobs (Players in these jobs never experience weapon jamming)
config.Whitelistedjobs = {
    ['police'] = true,
    ['sheriff'] = true,
}

-- Unjamming Firing Behavior
-- true  = Player fires a round while unjamming and can deal damage to nearby entities
-- false = Player does not shoot while unjamming and can keep running while clearing the jam
config.Shoot = false

-- Per-Weapon Jam & Unjam Probabilities
-- Note: Weapon names MUST be written in uppercase inside backticks (e.g. [`WEAPON_PISTOL`])
config.Weapons = {
    [`WEAPON_PISTOL`]       = { JamChance = 100, UnjamChance = 100 },
    [`WEAPON_CARBINERIFLE`] = { JamChance = 30,  UnjamChance = 100 },
}

-- Notification Preferences
config.Notification = {
    title = 'Weapon Jamming',
    icon = 'fas fa-bullseye',
}
```

---

## Detailed Option Explanations

### `config.Whitelistedjobs`
* **Type:** `table`
* **Description:** Whitelists framework jobs so their weapons never jam during combat.
* **Usage:** Add your framework job name in brackets with `= true`:
  ```lua
  config.Whitelistedjobs = {
      ['police'] = true,
      ['sheriff'] = true,
      ['statepolice'] = true,
  }
  ```

---

### `config.Shoot`
* **Type:** `boolean`
* **Default:** `false`
* **Description:** Controls player movement and firing mechanics while clearing a weapon jam.
  - `false`: Player does **not** fire a shot while clearing the jam and can continue running.
  - `true`: Player fires a discharge shot during the unjamming animation, which can hit or damage nearby entities.

---

### `config.Weapons`
* **Type:** `table`
* **Description:** Defines which weapons can jam and sets their individual jam/unjam probabilities.
* **Fields per weapon:**
  - `JamChance`: Percentage chance (0-100%) that the weapon will jam when fired.
  - `UnjamChance`: Percentage chance (0-100%) that an unjamming attempt successfully clears the weapon.
* **Important Syntax Rule:** Weapon hashes MUST be formatted in **all uppercase** inside backticks:
  ```lua
  [`WEAPON_COMBATPISTOL`] = { JamChance = 25, UnjamChance = 80 },
  [`WEAPON_APPISTOL`]     = { JamChance = 40, UnjamChance = 70 },
  ```

---

### `config.Notification`
* **Description:** Configures the title and FontAwesome icon used for in-game jam/unjam notifications.
  - `title`: Alert title text (e.g. `'Weapon Jamming'`).
  - `icon`: FontAwesome icon class (e.g. `'fas fa-bullseye'`).
