---
title: Multicharacter Server Editable Files | FWB Studio Docs
description: FWB Multicharacter open server files — hooks, starter items, inventory, extra tables to delete, Discord logs, housing and appearance bridges.
---

# Multicharacter — Editable Files (Server)

The whole `bridge/` folder is open (not escrowed). Keep your copy when you update.

| File | What it is for |
| :--- | :--- |
| `bridge/hooks/server.lua` | Your own rules: stop or change actions, react to events |
| `bridge/starter.lua` | Items a new character gets at its first spawn |
| `bridge/inventory.lua` | How starter items are given (add your inventory here) |
| `bridge/delete.lua` | Extra tables to clean when a character is deleted |
| `bridge/logs.lua` | Discord webhook for deletes and new characters |
| `bridge/housing/<script>/server.lua` | One folder per housing script ([Supported Scripts](../supported-scripts#housing-scripts)) |
| `bridge/appearance/<script>/server.lua` | One folder per appearance script ([Supported Scripts](../supported-scripts#appearance-scripts)) |
| `bridge/framework/<esx, qbcore, qbox>/server.lua` | The framework code, if your framework is modified |
| `bridge/spawns.lua` | The GTA places the admin menu offers with **Add GTA places** |
| `bridge/scenes.lua` | The built-in select scene |
| `bridge/themes.lua` | The menu themes |

---

## Hooks — `bridge/hooks/server.lua`

**`before.<name>(data)`** runs before something happens. `return false` stops it, `return false, 'Text'` stops it and shows the player the text. You may change the fields marked *changeable*.

| Hook | data | Changeable |
| :--- | :--- | :--- |
| `openSelect` | `source, account` | — |
| `slots` | `source, account, slots` | `slots` |
| `selectData` | `source, account, characters` | `characters` (add fields, hide characters) |
| `play` | `source, account, id, character` | — |
| `create` | `source, account, slot, details` | `details` (names, dob, sex, height, nationality) |
| `delete` | `source, id, admin` | — |
| `spawnData` | `source, id, isNew, last, homes, places` | `homes`, `places` (add your own places) |
| `spawn` | `source, id, isNew, place, position` | `position` |
| `starterItems` | `source, id, items` | `items` |
| `adminAction` | `source, action, payload` | — |

**`after.<event>(data)`** runs after something happened: `selectOpened`, `created`, `loaded`, `deleted`, `unloaded`, `died`. Each is also sent as the server event `fwb_multicharacter:<event>`.

```lua
-- A police character can only be played by players with the police ACE
function before.play(data)
    if data.character.jobName == 'police' and not IsPlayerAceAllowed(data.source, 'group.police') then
        return false, 'Ask a supervisor to unlock this character.'
    end
    return true
end
```

---

## Starter items — `bridge/starter.lua`

```lua
StarterItems = {
    useFrameworkList = true, -- QBCore / Qbox: also give QBCore.Shared.StarterItems
    items = {
        { item = 'phone', count = 1 },
        { item = 'id_card', count = 1, metadata = function(c) return { firstname = c.firstname, lastname = c.lastname } end },
    },
}
```

Given **once**, when the new character first stands in the world. ESX already gives its own `Config.StartingInventoryItems`; keep only one of the two lists. `StarterItems.forCharacter(character)` can give different items per character.

---

## Deleting characters — `bridge/delete.lua`

The framework removes its own rows. Tables of other scripts that keep the character under a different column are listed here:

```lua
CharacterDelete = {
    tables = {
        { table = 'my_phone_messages', column = 'citizenid' },
    },
}

function CharacterDelete.after(id, info)
    exports['my-phone']:DeleteNumber(id)
end
```

Every delete is written to the table `fwb_multicharacter_deletes` (who, by whom, why, when).

---

## Discord logs — `bridge/logs.lua`

```lua
Logs = {
    webhook = 'https://discord.com/api/webhooks/...', -- empty = off
    deletes = true,
    created = false,
}
```

---

## Adding a housing or appearance script

Copy `bridge/housing/_template` or `bridge/appearance/_template`, rename the folder to the script's name, and fill it in. The template explains every line. Restart: the admin menu lists it, and nothing else needs editing.
