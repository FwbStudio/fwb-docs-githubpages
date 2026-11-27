---
title: Appearance Client Exports | FWB Studio Docs
description: Client-side exports for FWB Appearance on FiveM (ESX / QBCore / Qbox) — open shops, wardrobes and the creator, read and set looks, dress any ped, and which exports save to the database.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Client Exports

Call these from any client script.

A **look** (`appearance`) is a table in the FWB Appearance format:

```lua
{
    model = 'mp_m_freemode_01',
    heritage = { mother = 21, father = 0, shapeMix = 0.5, skinMix = 0.5 },
    face = { 0.0, 0.0, ... },                              -- 20 face features, -1.0 .. 1.0
    hair = { style = 4, texture = 0, color = 3, highlight = 0 },
    components = { ['11'] = { drawable = 55, texture = 0 } }, -- SetPedComponentVariation ids
    props = { ['0'] = { drawable = -1, texture = 0 } },       -- SetPedPropIndex ids, -1 = none
    overlays = { ['1'] = { style = 2, opacity = 1.0, color = 0 } },
    eyeColor = 0,
    tattoos = {},
}
```

An **outfit** is only clothes: `{ pieces = { ['11'] = { drawable, texture } }, props = { ['0'] = { drawable, texture } } }`.

## Does it save?

Some exports only change what the player sees. Others write to the database, so the change is still there after a relog.

| Export | Saves to the database? |
| :--- | :--- |
| `OpenShop` | Only if the player pays in the shop |
| `OpenWardrobe` | Only what the player does in the wardrobe (save, rename, delete an outfit) |
| `OpenCreator` | Yes, when the player presses Finish |
| `GetAppearance` | No (reads) |
| `SetAppearance` | **Clothes only.** Body, face, hair and tattoos are shown but not saved |
| `WearOutfit` | **Yes (clothes)**, unless you pass `false` |
| `ReloadAppearance` | No (loads the saved look again) |
| `ApplyToPed` | No |
| `ReadPed` | No (reads) |
| `GetDefaultLook` | No (reads) |
| `IsMenuOpen` | No (reads) |

> [!TIP]
> Need to save a whole look (body, face, hair too)? Use the server export [`SetCharacterAppearance`](./server#looks).

---

## Menus

::: details OpenShop
Opens the **nearest** shop of that kind, when the player is within 10 m of it. Use it from your own interaction (a ped, a door, a radial menu).

**Saves:** only when the player pays.

### Export
```lua
exports.fwb_appearance:OpenShop(kind)
```

- `kind`: `'clothing'`, `'barber'`, `'tattoo'`, `'surgeon'` or `'locker'`. `nil` = the nearest shop of any kind.

### Returns
* `true` when a shop opened, `false` when no shop of that kind is within 10 m

### Example
```lua
if not exports.fwb_appearance:OpenShop('barber') then
    print('No barber nearby')
end
```
:::

::: details OpenWardrobe
Opens a wardrobe. `'personal'` is the player's own; any other id is a wardrobe of its own (a house, a motel room, a locker).

**Saves:** only what the player does inside (saving, renaming or deleting outfits).

### Export
```lua
exports.fwb_appearance:OpenWardrobe(id, opts)
```

- `id`: text, e.g. `'apartment_12'`. `nil` = `'personal'`.
- `opts`: `{ label = 'Apartment 12' }`.

> [!NOTE]
> A **shared** wardrobe (everyone with access sees the same outfits) can only be opened from the server: [`OpenWardrobe` (server)](./server#menus). That way your house script decides who may open it.

### Example
```lua
exports.fwb_appearance:OpenWardrobe('apartment_12', { label = 'Apartment 12' })
```
:::

::: details OpenCreator
Opens the character creator (heritage, face, hair, clothes). For a new character, or a creator your server allowed with [`AllowCreator`](./server#creator).

**Saves:** yes, when the player presses Finish. The server checks that the creator is allowed (a character without a saved look, or `AllowCreator`).

### Export
```lua
exports.fwb_appearance:OpenCreator(model, cb)
```

- `model`: `'mp_m_freemode_01'` or `'mp_f_freemode_01'`. `nil` = the player's current model.
- `cb(saved)`: called when the creator closes. `saved` is `true` after Finish, `false` after Cancel.

### Example
```lua
exports.fwb_appearance:OpenCreator('mp_f_freemode_01', function(saved)
    if saved then print('Character finished') end
end)
```
:::

::: details IsMenuOpen
`true` while a menu of FWB Appearance is open (creator, shop, barber, tattoo, surgeon, wardrobe editor). Use it to hide your HUD or block other menus.

**Saves:** no.

```lua
local open = exports.fwb_appearance:IsMenuOpen()
```
:::

---

## Looks

::: details GetAppearance
The player's current look.

**Saves:** no.

```lua
local appearance = exports.fwb_appearance:GetAppearance()
```
:::

::: details SetAppearance
Puts a whole look on the player.

**Saves:** **the clothes only.** Body, face, hair and tattoos change on screen, but only the creator, a shop or the server export [`SetCharacterAppearance`](./server#looks) save those. Clothes the server does not allow (a job's uniform pieces, blocked items) are not saved.

```lua
exports.fwb_appearance:SetAppearance(appearance)
```

### Returns
* `true`, or `false` when `appearance` is not a table
:::

::: details WearOutfit
Puts an outfit on the player. Pieces the outfit leaves out stay as they are.

**Saves:** yes, the clothes, unless `save` is `false` (a uniform for one shift).

```lua
exports.fwb_appearance:WearOutfit(outfit, save)
```

- `outfit`: `{ pieces = { ['11'] = { drawable = 55, texture = 0 } }, props = { ['0'] = { drawable = 46, texture = 0 } } }`
- `save`: `false` = only worn. Default: saved.

### Returns
* `true`, or `false` when `outfit` is not a table

### Example
```lua
-- a police uniform for the shift, not kept as the player's clothes
exports.fwb_appearance:WearOutfit({
    pieces = { ['11'] = { drawable = 55, texture = 0 }, ['4'] = { drawable = 35, texture = 0 } },
}, false)
```
:::

::: details ReloadAppearance
Loads the player's saved look from the database again and puts it on. Use it after a job uniform, or when another script changed the saved look.

**Saves:** no.

```lua
exports.fwb_appearance:ReloadAppearance()
```
:::

---

## Any ped

::: details ApplyToPed
Dresses **any** ped in a look: a shop NPC, a preview ped, a ped of your own script. The ped keeps its model.

**Saves:** no.

```lua
exports.fwb_appearance:ApplyToPed(ped, appearance)
```

### Returns
* `true`, or `false` when the ped does not exist or `appearance` is not a table
:::

::: details ReadPed
Reads a ped's clothes, props and hair. Face details (heritage, face shape) can only be read for the player, because GTA does not give them for other peds.

**Saves:** no.

```lua
local appearance = exports.fwb_appearance:ReadPed(ped)
```
:::

::: details GetDefaultLook
The creator's starting look for a model, as set in `bridge/creator.lua`.

**Saves:** no.

```lua
local appearance = exports.fwb_appearance:GetDefaultLook('mp_f_freemode_01')
```
:::

---

## Hooks

::: details registerClientHook
Adds a client hook from another resource. Same names as in `bridge/hooks/client.lua`. See [Hooks & Open Files](../editable-files/client).

```lua
exports.fwb_appearance:registerClientHook('loadLook', function(data)
    -- data.appearance is the look about to be put on at login
    return true
end)
```
:::

---

## Exports of other clothing scripts

Scripts written for **skinchanger / esx_skin**, **qb-clothing**, **illenium-appearance** and **fivem-appearance** keep working: FWB Appearance answers their exports and events.

| What the old script calls | Saves to the database? |
| :--- | :--- |
| `exports.skinchanger:LoadSkin`, `LoadClothes`, `skinchanger:loadSkin` | No (only shown) |
| `exports['illenium-appearance']:setPedAppearance`, `setPlayerAppearance`, `setPedComponent(s)`, `setPedProp(s)` ... | No (only shown) |
| `TriggerServerEvent('esx_skin:save', skin)` | Yes, checked by the `legacySave` hook |
| `TriggerServerEvent('qb-clothing:saveSkin', model, skin)` | Yes, checked by the `legacySave` hook |
| `TriggerServerEvent('illenium-appearance:server:saveAppearance', appearance)` | Yes, checked by the `legacySave` hook |
