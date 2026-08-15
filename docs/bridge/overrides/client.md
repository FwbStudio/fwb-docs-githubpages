# Client Overrides

These are the client-side manual compatibility overrides from the current Bridge build.

Use this page when you need client-side compatibility for an unsupported or custom setup.

Paste these overrides into `fs_bridge/unlocked/client.lua`.

Each item below is its own expandable section. Open one to see description, arguments, return value, and example code.

### Ambulance

<details>
<summary><strong>IsPlayerDowned</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | No | Optional player source if your ambulance system supports it |

Returns:

- `boolean`

Override code:

```lua
function Override.IsPlayerDowned(source)
    if source then
        return exports['your_ambulance']:isPlayerDowned(source)
    else
        return exports['your_ambulance']:isPlayerDowned()
    end
end
```

Notes:

- this override is client-side
- Bridge resolves this through the ambulance compatibility layer

</details>

<details>
<summary><strong>IsPlayerDead</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | No | Optional player server ID / ped if checking another player, or nil for local player |

Returns:

- `boolean`

Override code:

```lua
function Override.IsPlayerDead(source)
    if source then
        return exports['your_ambulance']:isPlayerDead(source)
    else
        return exports['your_ambulance']:isPlayerDead()
    end
end
```

Notes:

- this override is client-side
- Bridge resolves this through the ambulance compatibility layer

</details>

<details>
<summary><strong>GetAmbulanceResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetAmbulanceResourceName()
    return 'your_ambulance'
end
```

Notes:

- this override is client-side
- return the exact started resource folder name

</details>

### Banking

<details>
<summary><strong>OpenBossMenu</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `job` | `string` | Yes | Job name for the boss menu |

Returns:

- optional result from your banking resource

Override code:

```lua
function Override.OpenBossMenu(job)
    return exports['your_banking']:openBossMenu(job)
end
```

Notes:

- use the exact export or event name from your banking resource
- this override is client-side

</details>

<details>
<summary><strong>GetBankResourceName (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetBankResourceName()
    return 'your_banking'
end
```

Notes:

- return the exact started resource folder name
- if you also need this on the server side, define the same function in `fs_bridge/unlocked/server.lua`

</details>

### Clothing

<details>
<summary><strong>ResetPedCurrentScriptSkin</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- optional result from your clothing resource

Override code:

```lua
function Override.ResetPedCurrentScriptSkin()
    TriggerEvent('your_clothing:resetSkin')
end
```

Notes:

- this override is client-side
- replace the example event with your real clothing reset event or export

</details>

<details>
<summary><strong>SavePedCurrentScriptSkin</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- optional result from your clothing resource

Override code:

```lua
function Override.SavePedCurrentScriptSkin()
    TriggerServerEvent('your_clothing:saveSkin')
end
```

Notes:

- this override is client-side
- replace the example event with your real clothing save flow

</details>

<details>
<summary><strong>GetClothingResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetClothingResourceName()
    return 'your_clothing'
end
```

Notes:

- return the exact started resource folder name
- this override is client-side

</details>

### Dispatch

<details>
<summary><strong>AddCustomDispatch</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `argument.Job` | `table` | Yes | Target jobs |
| `argument.Location` | `vector3` | Yes | Dispatch location |
| `argument.CallCode.Code` | `string` | No | Dispatch call code |
| `argument.CallCode.Title` | `string` | No | Dispatch title |
| `argument.Message` | `string` | Yes | Main dispatch message |
| `argument.Flashes` | `boolean` | No | Flash state |
| `argument.Image` | `string` | No | Optional image URL |
| `argument.icon` | `string` | No | Dispatch icon |
| `argument.Blip` | `table` | No | Blip settings |

Returns:

- optional result from your dispatch resource

Override code:

```lua
function Override.AddCustomDispatch(argument)
    return exports['your_dispatch']:sendAlert(argument)
end
```

Notes:

- this override is client-side
- Bridge also supports a server-side dispatch override on the server page

</details>

<details>
<summary><strong>GetDispatchResourceName (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetDispatchResourceName()
    return 'your_dispatch'
end
```

Notes:

- this override is client-side
- return the exact started resource folder name

</details>

### Interface

<details>
<summary><strong>Notification</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `argument.description` | `string` | Yes | Main notification text |
| `argument.title` | `string` | No | Notification title |
| `argument.type` | `string` | No | Example: `inform`, `success`, `warning`, `error` |
| `argument.position` | `string` | No | Bridge defaults this to `top` |
| `argument.duration` | `number` | No | Bridge defaults this to `5000` |

Returns:

- optional result from your notification resource

Override code:

```lua
function Override.Notification(argument)
    return exports['your_notify']:notify({
        title = argument.title,
        description = argument.description,
        type = argument.type,
        position = argument.position,
        duration = argument.duration,
    })
end
```

Notes:

- this override is client-side
- Bridge already normalizes string notifications into a table before calling this override

</details>

<details>
<summary><strong>TextUi</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `text` | `string` | No | Text to show; may be `nil` when hiding |
| `options.type` | `string` | No | Example: `inform`, `success`, `warning`, `error` |
| `options.icon` | `string` | No | Font Awesome icon |
| `options.iconColor` | `string` | No | Hex color |
| `options.position` | `string` | No | Example: `right-center`, `left-center`, `top-center`, `bottom-center` |
| `options.iconAnimation` | `string` | No | Example: `spin`, `pulse`, `bounce`, `shake` |

Returns:

- optional result from your text UI resource

Override code:

```lua
function Override.TextUi(text, options)
    if not text then
        return exports['your_textui']:hideTextUi()
    end

    return exports['your_textui']:showTextUi(text, options or {})
end
```

Notes:

- this override is client-side
- use one function for both show and hide behavior

</details>

<details>
<summary><strong>SetClipBoard</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `string` | `string` | Yes | Text to copy |

Returns:

- optional result from your clipboard resource

Override code:

```lua
function Override.SetClipBoard(string)
    return exports['your_clipboard']:setClipboard(string)
end
```

Notes:

- this override is client-side
- Bridge only calls this when a string is provided

</details>

### Inventory

<details>
<summary><strong>OpenStash</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `argument.name` | `string` | Yes | Unique stash name |
| `argument.label` | `string` | Yes | Stash label shown in UI |
| `argument.slots` | `number` | Yes | Slot count |
| `argument.weight` | `number` | Yes | Max weight |
| `argument.coords` | `vector3` | No | Stash location |
| `argument.jobs` | `table` | No | Job access rules |
| `argument.identifier` | `string` | No | Owner-linked identifier |

Returns:

- optional result from your inventory resource

Override code:

```lua
function Override.OpenStash(argument)
    return exports['your_inventory']:openStash({
        name = argument.name,
        label = argument.label,
        slots = argument.slots,
        weight = argument.weight,
        coords = argument.coords,
        jobs = argument.jobs,
        identifier = argument.identifier,
    })
end
```

Notes:

- this override is client-side
- keep your security checks around `coords`, `jobs`, or `identifier`

</details>

<details>
<summary><strong>OpenShop</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `argument.name` | `string` | Yes | Unique shop name |
| `argument.label` | `string` | Yes | Shop label shown in UI |
| `argument.items` | `table` | Yes | Shop item list |

Returns:

- optional result from your inventory resource

Override code:

```lua
function Override.OpenShop(argument)
    return exports['your_inventory']:openShop({
        name = argument.name,
        label = argument.label,
        items = argument.items,
    })
end
```

Notes:

- this override is client-side
- the current Bridge source marks this path as one you should test carefully with your inventory

</details>

### Phone

<details>
<summary><strong>GetPhoneResourceName (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetPhoneResourceName()
    return 'your_phone'
end
```

Notes:

- return the exact started resource folder name
- if you also need this on the server side, define the same function in `fs_bridge/unlocked/server.lua`

</details>

### Player Status

<details>
<summary><strong>Hunger</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `value` | `number` | Yes | `1-100` percentage-style value to add or remove from the current hunger status |

Returns:

- optional result from your status resource

Override code:

```lua
function Override.AddHunger(value)
    return exports['your_status']:addHunger(value)
end

function Override.RemoveHunger(value)
    return exports['your_status']:removeHunger(value)
end
```

Notes:

- Bridge expects `value` to be a numeric `1-100` percentage-style change on the current hunger status
- this override is client-side

</details>

<details>
<summary><strong>Thirst</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `value` | `number` | Yes | `1-100` percentage-style value to add or remove from the current thirst status |

Returns:

- optional result from your status resource

Override code:

```lua
function Override.AddThirst(value)
    return exports['your_status']:addThirst(value)
end

function Override.RemoveThirst(value)
    return exports['your_status']:removeThirst(value)
end
```

Notes:

- Bridge expects `value` to be a numeric `1-100` percentage-style change on the current thirst status
- this override is client-side

</details>

<details>
<summary><strong>Stress</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `value` | `number` | Yes | `1-100` percentage-style value to add or remove from the current stress status |

Returns:

- optional result from your stress resource

Override code:

```lua
function Override.AddStress(value)
    return exports['your_status']:addStress(value)
end

function Override.RemoveStress(value)
    return exports['your_status']:removeStress(value)
end
```

Notes:

- Bridge expects `value` to be a numeric `1-100` percentage-style change on the current stress status
- this override is client-side

</details>

<details>
<summary><strong>Health</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `value` | `number` | Yes | Amount to add or remove |

Returns:

- optional result from your health logic

Override code:

```lua
function Override.AddHealth(value)
    local ped = PlayerPedId()
    SetEntityHealth(ped, GetEntityHealth(ped) + value)
end

function Override.RemoveHealth(value)
    local ped = PlayerPedId()
    SetEntityHealth(ped, GetEntityHealth(ped) - value)
end
```

Notes:

- this override is client-side
- clamp values if your server needs stricter health limits

</details>

<details>
<summary><strong>Armour</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `value` | `number` | Yes | `1-100` percentage-style value to add or remove from the current armour |

Returns:

- optional result from your armour logic

Override code:

```lua
function Override.AddArmour(value)
    local ped = PlayerPedId()
    SetPedArmour(ped, math.min(100, GetPedArmour(ped) + value))
end

function Override.RemoveArmour(value)
    local ped = PlayerPedId()
    SetPedArmour(ped, math.max(0, GetPedArmour(ped) - value))
end
```

Notes:

- Bridge expects `value` to be a numeric `1-100` percentage-style change on the current armour
- this override is client-side
- this example clamps armour between `0` and `100`

</details>

### Vehicle Fuel

<details>
<summary><strong>SetFuel</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `vehicle` | `number` | Yes | Vehicle entity handle |
| `value` | `number` | No | Fuel amount; Bridge defaults to `100.0` when not provided |

Returns:

- optional result from your fuel resource

Override code:

```lua
function Override.SetFuel(vehicle, value)
    return exports['your_fuel']:setFuel(vehicle, value)
end
```

Notes:

- this override is client-side
- match the fuel scale used by your fuel resource

</details>

<details>
<summary><strong>GetFuel</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `vehicle` | `number` | Yes | Vehicle entity handle |

Returns:

- `number` fuel amount

Override code:

```lua
function Override.GetFuel(vehicle)
    return exports['your_fuel']:getFuel(vehicle)
end
```

Notes:

- this override is client-side
- Bridge falls back to `0.0` if nothing is returned

</details>

<details>
<summary><strong>GetFuelResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetFuelResourceName()
    return 'your_fuel'
end
```

Notes:

- this override is client-side
- return the exact started resource folder name

</details>

### Vehicle Keys

<details>
<summary><strong>GiveCarKeyPlayer (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `vehicle` | `number` | Yes | Vehicle entity handle |

Returns:

- optional result from your vehicle-keys resource

Override code:

```lua
function Override.GiveCarKeyPlayer(vehicle)
    return exports['your_keys']:giveKeys(vehicle)
end
```

Notes:

- this override is client-side
- use the client-facing give-keys function from your keys resource

</details>

<details>
<summary><strong>RemoveCarKeyPlayer (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `vehicle` | `number` | Yes | Vehicle entity handle |

Returns:

- optional result from your vehicle-keys resource

Override code:

```lua
function Override.RemoveCarKeyPlayer(vehicle)
    return exports['your_keys']:removeKeys(vehicle)
end
```

Notes:

- this override is client-side
- use the client-facing remove-keys function from your keys resource

</details>

<details>
<summary><strong>GetVehicleKeysResourceName (Client)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/client.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetVehicleKeysResourceName()
    return 'your_keys'
end
```

Notes:

- this override is client-side
- return the exact started resource folder name

</details>
