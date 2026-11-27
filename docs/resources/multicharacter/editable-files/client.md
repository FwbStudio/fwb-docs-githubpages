---
title: Multicharacter Client Editable Files | FWB Studio Docs
description: FWB Multicharacter open client files — client hooks, your own spawn selector, your own character creator and appearance bridges.
---

# Multicharacter — Editable Files (Client)

| File | What it is for |
| :--- | :--- |
| `bridge/hooks/client.lua` | Your own client rules |
| `bridge/spawnselector.lua` | Use your own spawn selector instead of the map |
| `bridge/appearance/<script>/client.lua` | One folder per appearance script |
| `bridge/framework/<esx, qbcore, qbox>/client.lua` | The framework code |

---

## Hooks — `bridge/hooks/client.lua`

| Hook | data | Changeable |
| :--- | :--- | :--- |
| `before.openSelect` | `relog` | — |
| `before.scenePed` | `character, look, anim, position` | `look`, `anim` (`return false` = no ped) |
| `before.openCreator` | `sex, model` | `return false` = open your own creator |
| `before.spawn` | `place, isNew, position` | `position` |

`after` events: `selectOpened`, `focused`, `loaded`, `creatorClosed`, `spawned`. Each is also sent as `fwb_multicharacter:client:<event>`.

---

## Your own character creator

```lua
function before.openCreator(data)
    TriggerEvent('my_creator:open', data.sex)
    return false
end

-- in your creator, when the player is done:
exports.fwb_multicharacter:CreatorDone(true)
```

The spawn map opens after `CreatorDone`.

---

## Your own spawn selector — `bridge/spawnselector.lua`

Set `builtin = false` and write `SpawnSelector.open`:

```lua
SpawnSelector = { builtin = false }

function SpawnSelector.open(data, choose, spawnAt)
    -- data = { isNew, last, homes = { ... }, places = { ... } }
    exports['my-spawn']:Open(data.places, function(place) choose(place.id) end)
end
```

* `choose(id)` — `'last'`, a home id or a place id. The server checks it and gives the real position.
* `spawnAt({ x, y, z, h })` — any position you worked out yourself.

Call **one** of them once; the script then puts the player there and finishes the login.
