---
title: Safezone Creator Server Functions | FWB Studio Docs
description: Server functions for Safezone Creator.
---


# Server functions

## Server Functions

<details>
<summary><strong>4. OnPlayerEnterZone(playerId, safezone)</strong></summary>

Runs on the server when a player enters a safezone.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server id of the player
* `safezone` - table containing the current safezone data

Example:

```lua
FSBridge.Functions.OnPlayerEnterZone = function(playerId, safezone)
    print(('Player %s entered safezone %s'):format(playerId, safezone and safezone.name or 'unknown'))
end
```

</details>

<details>
<summary><strong>5. OnPlayerLeaveZone(playerId, safezone)</strong></summary>

Runs on the server when a player leaves a safezone.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server id of the player
* `safezone` - table containing the last safezone data

Example:

```lua
FSBridge.Functions.OnPlayerLeaveZone = function(playerId, safezone)
    print(('Player %s left safezone %s'):format(playerId, safezone and safezone.name or 'unknown'))
end
```

</details>

<details>
<summary><strong>6. PlayerInsideZone(playerId, safezone)</strong></summary>

Runs on the server while a player remains inside a safezone.

Source file:

* `bridge/functions/server.lua`

Arguments:

* `playerId` - server id of the player
* `safezone` - table containing the current safezone data

Example:

```lua
FSBridge.Functions.PlayerInsideZone = function(playerId, safezone)
    if safezone and safezone.id then
        print(('Player %s is inside safezone #%s'):format(playerId, safezone.id))
    end
end
```

</details>

## Related Events

<details>
<summary><strong>7. Client Events</strong></summary>

Safezone Creator triggers these client events internally:

* `fs_safezonecreator:client:onEnterZone`
* `fs_safezonecreator:client:onExitZone`
* `fs_safezonecreator:client:insideZone`

Example:

```lua
AddEventHandler('fs_safezonecreator:client:onEnterZone', function(zone)
    if zone then
        print(('Client entered safezone: %s'):format(zone.name or 'unknown'))
    end
end)

AddEventHandler('fs_safezonecreator:client:onExitZone', function(zone)
    if zone then
        print(('Client left safezone: %s'):format(zone.name or 'unknown'))
    end
end)

AddEventHandler('fs_safezonecreator:client:insideZone', function(zone)
    if zone and zone.id then
        print(('Client is inside safezone #%s'):format(zone.id))
    end
end)
```

</details>

<details>
<summary><strong>8. Server Events</strong></summary>

Safezone Creator triggers these server events internally:

* `fs_safezonecreator:server:onEnterZone`
* `fs_safezonecreator:server:onExitZone`
* `fs_safezonecreator:server:insideZone`

Example:

```lua
AddEventHandler('fs_safezonecreator:server:onEnterZone', function(playerId, zone)
    print(('Player %s entered safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end)

AddEventHandler('fs_safezonecreator:server:onExitZone', function(playerId, zone)
    print(('Player %s left safezone %s'):format(playerId, zone and zone.name or 'unknown'))
end)

AddEventHandler('fs_safezonecreator:server:insideZone', function(playerId, zone)
    if zone and zone.id then
        print(('Player %s is inside safezone #%s'):format(playerId, zone.id))
    end
end)
```

</details>
