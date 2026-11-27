---
title: Appearance Server Exports | FWB Studio Docs
description: Server-side exports for FWB Appearance on FiveM (ESX / QBCore / Qbox) — read and save looks also for offline characters, outfits, wardrobes, the creator, deleting characters, and which exports save to the database.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Server Exports

Call these from any server script.

| Name in this page | What to pass |
| :--- | :--- |
| `src` | A player's server id |
| `identifier` | A character's id: ESX `xPlayer.identifier` (e.g. `char1:abc123`), QBCore / Qbox `citizenid` |
| `appearance` | A look in the FWB Appearance format (see [Client Exports](./client)) |
| `outfit` | `{ pieces = { ['11'] = { drawable, texture } }, props = { ['0'] = { drawable, texture } } }` |

## Does it save?

| Export | Saves to the database? | Player must be online? |
| :--- | :--- | :--- |
| `GetPlayerAppearance` | No (reads) | Yes |
| `GetCharacterAppearance` | No (reads) | **No** |
| `SavePlayerAppearance` | **Yes, the whole look** | Yes |
| `SetCharacterAppearance` | **Yes, the whole look** | **No** (online players wear it at once) |
| `WearOutfit` | **Yes (clothes)**, unless you pass `false` | Yes |
| `ReloadAppearance` | No (loads the saved look again) | Yes |
| `GetOutfits` | No (reads) | Yes |
| `AddOutfit` | **Yes** (a new outfit in the wardrobe) | Yes |
| `OpenWardrobe` | Only what the player does inside | Yes |
| `AllowCreator` | No (lets the next creator save for free) | Yes |
| `DeleteCharacter` | **Deletes** the look, outfits and stored pieces | **No** |

---

## Looks

::: details GetPlayerAppearance
The saved look of the character a player is playing.

**Saves:** no.

```lua
local appearance, identifier = exports.fwb_appearance:GetPlayerAppearance(src)
```

### Returns
* the look (or `nil` when the character never saved one) and the character's id
:::

::: details GetCharacterAppearance
A character's saved look, **also when the player is offline**. Use it for an MDT photo, a mugshot ped or a character preview.

**Saves:** no.

```lua
local appearance = exports.fwb_appearance:GetCharacterAppearance(identifier)
```

### Returns
* the look, or `nil` when the character has none
:::

::: details SavePlayerAppearance
Saves a whole look (body, face, hair, tattoos, clothes) for the character a player is playing.

**Saves:** **yes, the whole look.** The player sees it after [`ReloadAppearance`](#looks) or their next login. To save and show it at once, use `SetCharacterAppearance`.

```lua
exports.fwb_appearance:SavePlayerAppearance(src, appearance)
```

### Returns
* `true`, or `false` when the player has no character loaded
:::

::: details SetCharacterAppearance
Saves a whole look for a character, **also offline**. When the player is online, they wear it at once.

**Saves:** **yes, the whole look.**

```lua
exports.fwb_appearance:SetCharacterAppearance(identifier, appearance)
```

### Returns
* `true`, or `false` when `identifier` or `appearance` is wrong
:::

::: details ReloadAppearance
Makes a player load their saved look again (after your script changed it in the database).

**Saves:** no.

```lua
exports.fwb_appearance:ReloadAppearance(src)
```
:::

---

## Outfits

::: details WearOutfit
Puts an outfit on an online player. Pieces the outfit leaves out stay as they are.

**Saves:** yes, the clothes, unless `save` is `false` (a uniform for one shift, gone at the next login).

```lua
exports.fwb_appearance:WearOutfit(src, outfit, save)
```

### Example
```lua
-- a uniform for the shift only
exports.fwb_appearance:WearOutfit(source, {
    pieces = { ['11'] = { drawable = 55, texture = 0 }, ['4'] = { drawable = 35, texture = 0 } },
}, false)
```
:::

::: details AddOutfit
Adds an outfit to a player's wardrobe (a job uniform to keep, a reward, a gift).

**Saves:** **yes.** The outfit is in the wardrobe for good.

```lua
exports.fwb_appearance:AddOutfit(src, name, outfit, wardrobe, model)
```

- `wardrobe`: the wardrobe's id. `nil` = `'personal'`.
- `model`: `'mp_m_freemode_01'` or `'mp_f_freemode_01'`. `nil` = the player's own model.

### Returns
* `true`, or `false` when the player has no character loaded
:::

::: details GetOutfits
The outfits in a player's wardrobe.

**Saves:** no.

```lua
local outfits = exports.fwb_appearance:GetOutfits(src, wardrobe)
-- { { id = 12, name = 'Work', model = 'mp_m_freemode_01', outfit = { pieces = {...}, props = {...} } } }
```
:::

---

## Menus

::: details OpenWardrobe
Opens a wardrobe for a player. Only the server can open a **shared** wardrobe (everyone with access sees the same outfits), so your house script decides who may open it.

**Saves:** only what the player does inside.

```lua
exports.fwb_appearance:OpenWardrobe(src, id, { label = 'Apartment 12', shared = true })
```
:::

---

## Creator

::: details AllowCreator
Lets the player's next creator save for free, also when the character already has a look (a plastic surgeon event, a character reset, a multicharacter with its own starting look).

**Saves:** no. The creator saves when the player presses Finish.

```lua
exports.fwb_appearance:AllowCreator(src)
TriggerClientEvent('my-script:openCreator', src) -- your client then calls exports.fwb_appearance:OpenCreator()
```
:::

---

## Characters

::: details DeleteCharacter
Removes a deleted character's look, outfits and stored pieces. Multicharacter scripts call it when a character is deleted. Characters that no longer exist in the framework are also cleaned up at every start.

**Saves:** **deletes** from the database. Stop it with the `deleteCharacter` hook.

```lua
exports.fwb_appearance:DeleteCharacter(identifier)
```
:::

---

## Hooks

::: details registerHook
Adds a server hook from another resource. Same names as in `bridge/hooks/server.lua`. See [Hooks & Open Files](../editable-files/server).

```lua
exports.fwb_appearance:registerHook('pay', function(data)
    if Player(data.source).state.wanted then return false, 'Not while you are wanted' end
    return true
end)
```
:::

::: details fwbClothing
The version of the clothing contract other FWB scripts check (returns `1`).

```lua
local version = exports.fwb_appearance:fwbClothing()
```
:::
