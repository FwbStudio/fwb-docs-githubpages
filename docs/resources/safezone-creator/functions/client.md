---
title: Safezone Creator Client Functions | FWB Studio Docs
description: Editable client hooks and events for FiveM Safezone Creator (fwb_safezonecreator) — run your own code when a player enters, leaves or stays in a safezone on ESX, QBCore, and Qbox.
---


# Client functions

These hooks are in the unlocked file `bridge/functions/client.lua`. Put your own code inside them. They run on the player who entered, left, or is inside the safezone.

The `zone` argument contains:

* `id`
* `name`
* `settings`
* `polyzone`

Treat it as read-only. Use the [`GetCurrentSafezone`](../exports/client) export when you need a copy you can change.

## Client Functions

<details>
<summary><strong>1. Player Enter Zone - FSBridge.Functions.OnEnterZone(zone)</strong></summary>

Runs when the local player enters a safezone.

Source file:

* `bridge/functions/client.lua`

Arguments:

* `zone` - table containing the current safezone data

Example:

```lua
function FSBridge.Functions.OnEnterZone(zone)
    print('Entered safezone:', zone and zone.name)

    if zone and zone.id then
        print('Safezone ID:', zone.id)
    end
end
```

</details>

<details>
<summary><strong>2. Player Leave Zone - FSBridge.Functions.OnLeaveZone(zone)</strong></summary>

Runs when the local player leaves a safezone.

Source file:

* `bridge/functions/client.lua`

Arguments:

* `zone` - table containing the last safezone data

Example:

```lua
function FSBridge.Functions.OnLeaveZone(zone)
    print('Left safezone:', zone and zone.name)
end
```

</details>

<details>
<summary><strong>3. Player Inside Zone - FSBridge.Functions.InsideZone(zone)</strong></summary>

Runs every **500 ms** while the local player stays inside a safezone (not every frame, to keep resmon low).

Source file:

* `bridge/functions/client.lua`

Arguments:

* `zone` - table containing the current safezone data

Keep this light. It's useful for custom checks or repeated effects while the player remains inside the zone.

Example:

```lua
function FSBridge.Functions.InsideZone(zone)
    if zone and zone.settings then
        print('Inside safezone with current settings loaded.')
    end
end
```

</details>

## Client Events

<details>
<summary><strong>4. Client Events</strong></summary>

Safezone Creator triggers these client events. Each one also fires under the old `fs_safezonecreator:` prefix, so older scripts keep working.

| Event | When |
| :--- | :--- |
| `fwb_safezonecreator:client:onEnterZone` | The local player enters a zone |
| `fwb_safezonecreator:client:onExitZone` | The local player leaves a zone |
| `fwb_safezonecreator:client:insideZone` | Every 500 ms while inside a zone |

Example:

```lua
AddEventHandler('fwb_safezonecreator:client:onEnterZone', function(zone)
    if zone then
        print(('Client entered safezone: %s'):format(zone.name or 'unknown'))
    end
end)

AddEventHandler('fwb_safezonecreator:client:onExitZone', function(zone)
    if zone then
        print(('Client left safezone: %s'):format(zone.name or 'unknown'))
    end
end)

AddEventHandler('fwb_safezonecreator:client:insideZone', function(zone)
    if zone and zone.id then
        print(('Client is inside safezone #%s'):format(zone.id))
    end
end)
```

</details>
