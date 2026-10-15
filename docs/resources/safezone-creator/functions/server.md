---
title: Safezone Creator Server Functions | FWB Studio Docs
description: Editable server hooks and events for FiveM Safezone Creator (fwb_safezonecreator) — run your own server code when players enter, leave or stay in a safezone on ESX, QBCore, and Qbox.
---


# Server functions

These hooks are in the unlocked file `bridge/functions/server.lua`. Put your own code inside them. They run after the script has updated the player's safezone state.

The `zone` argument contains `id`, `name`, `settings` and `polyzone`.

## Server Functions

<details>
<summary><strong>1. OnPlayerEnterZone(playerId, zone)</strong></summary>

Runs on the server when a player enters a safezone.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server ID of the player
* `zone` - table containing the current safezone data

Example:

```lua
function FSBridge.Functions.OnPlayerEnterZone(playerId, zone)
    print(('Player %s entered safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end
```

</details>

<details>
<summary><strong>2. OnPlayerLeaveZone(playerId, zone)</strong></summary>

Runs on the server when a player leaves a safezone.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server ID of the player
* `zone` - table containing the last safezone data

Example:

```lua
function FSBridge.Functions.OnPlayerLeaveZone(playerId, zone)
    print(('Player %s left safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end
```

</details>

<details>
<summary><strong>3. PlayerInsideZone(playerId, zone)</strong></summary>

Runs on the server about **once per second** while a player remains inside a safezone. Keep it light.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server ID of the player
* `zone` - table containing the current safezone data

Example:

```lua
function FSBridge.Functions.PlayerInsideZone(playerId, zone)
    if zone and zone.id then
        print(('Player %s is inside safezone #%s'):format(playerId, zone.id))
    end
end
```

</details>

## Server Events

<details>
<summary><strong>4. Server Events</strong></summary>

Safezone Creator triggers these server events. Each one also fires under the old `fs_safezonecreator:` prefix, so older scripts keep working.

| Event | When |
| :--- | :--- |
| `fwb_safezonecreator:server:onEnterZone` | A player enters a zone |
| `fwb_safezonecreator:server:onExitZone` | A player leaves a zone |
| `fwb_safezonecreator:server:insideZone` | About once per second while a player is inside a zone |

Example:

```lua
AddEventHandler('fwb_safezonecreator:server:onEnterZone', function(playerId, zone)
    print(('Player %s entered safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end)

AddEventHandler('fwb_safezonecreator:server:onExitZone', function(playerId, zone)
    print(('Player %s left safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end)

AddEventHandler('fwb_safezonecreator:server:insideZone', function(playerId, zone)
    if zone and zone.id then
        print(('Player %s is inside safezone #%s'):format(playerId, zone.id))
    end
end)
```

</details>
