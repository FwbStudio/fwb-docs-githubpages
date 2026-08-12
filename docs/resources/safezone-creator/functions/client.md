---
title: Safezone Creator Client Functions | FWB Studio Docs
description: Client functions for Safezone Creator.
---


# Client functions

## Client Functions

<details>
<summary><strong>1. Player Enter Zone - FSBridge.Functions.OnEnterZone(zone)</strong></summary>

Runs when the local player enters a safezone.

Source file:

* `bridge/functions/client.lua`

Arguments:

* `zone` - table containing the current safezone data

Safezone data can include:

* `id`
* `name`
* `settings`
* `polyzone`

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

Runs while the local player stays inside a safezone.

Source file:

* `bridge/functions/client.lua`

Arguments:

* `zone` - table containing the current safezone data

This is useful for custom checks or repeated effects while the player remains inside the zone.

Example:

```lua
function FSBridge.Functions.InsideZone(zone)
    if zone and zone.settings then
        print('Inside safezone with current settings loaded.')
    end
end
```

</details>
