# Server Overrides

These are the server-side manual compatibility overrides from the current Bridge build.

Use this page when you need server-side compatibility for an unsupported or custom setup.

Paste these overrides into `fs_bridge/unlocked/server.lua`.

Each item below is its own expandable section. Open one to see description, arguments, return value, and example code.

### Ambulance

<details>
<summary><strong>IsPlayerDowned</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |

Returns:

- `boolean`

Override code:

```lua
function Override.IsPlayerDowned(source)
    return exports['your_ambulance']:isPlayerDowned(source)
end
```

Notes:

- this override is server-side
- Bridge resolves this through the ambulance compatibility layer

</details>

<details>
<summary><strong>IsPlayerDead</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |

Returns:

- `boolean`

Override code:

```lua
function Override.IsPlayerDead(source)
    return exports['your_ambulance']:isPlayerDead(source)
end
```

Notes:

- this override is server-side
- Bridge resolves this through the ambulance compatibility layer

</details>

<details>
<summary><strong>RevivePlayer</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |

Returns:

- optional result from your ambulance resource

Override code:

```lua
function Override.RevivePlayer(source)
    return exports['your_ambulance']:revivePlayer(source)
end
```

Notes:

- this override is server-side
- use the exact revive function expected by your ambulance system

</details>

<details>
<summary><strong>GetAmbulanceResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

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

- this override is server-side
- return the exact started resource folder name

</details>

### Banking

<details>
<summary><strong>AddSocietyMoney</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `job` | `string` | Yes | Society or job name |
| `money` | `number` | Yes | Amount to add |

Returns:

- `boolean` success result
- optional custom result from your banking resource

Override code:

```lua
function Override.AddSocietyMoney(job, money)
    return exports['your_banking']:addSocietyMoney(job, money)
end
```

Notes:

- this override is server-side
- keep your own validation around negative values if needed

</details>

<details>
<summary><strong>RemoveSocietyMoney</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `job` | `string` | Yes | Society or job name |
| `money` | `number` | Yes | Amount to remove |

Returns:

- `boolean` success result
- optional custom result from your banking resource

Override code:

```lua
function Override.RemoveSocietyMoney(job, money)
    return exports['your_banking']:removeSocietyMoney(job, money)
end
```

Notes:

- this override is server-side
- make sure your banking system handles missing accounts safely

</details>

<details>
<summary><strong>GetSocietyMoney</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `job` | `string` | Yes | Society or job name |

Returns:

- `number` balance
- `false` or `nil` if the account cannot be read

Override code:

```lua
function Override.GetSocietyMoney(job)
    return exports['your_banking']:getSocietyMoney(job)
end
```

Notes:

- this override is server-side
- return a number when possible so dependent scripts can compare balances safely

</details>

<details>
<summary><strong>GetBankResourceName (Server)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

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
- if you also need this on the client side, define the same function in `fs_bridge/unlocked/client.lua`

</details>

### Dispatch

<details>
<summary><strong>AddCustomDispatch</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `argument.Job` | `table` | Yes | Target jobs, for example `{ 'police', 'sheriff' }` |
| `argument.Location` | `vector3` | Yes | Dispatch location |
| `argument.CallCode.Code` | `string` | No | Dispatch call code |
| `argument.CallCode.Title` | `string` | No | Dispatch title |
| `argument.Message` | `string` | Yes | Main dispatch message |
| `argument.Flashes` | `boolean` | No | Flash state |
| `argument.Image` | `string` | No | Screenshot or image URL |
| `argument.icon` | `string` | No | Dispatch icon |
| `argument.Blip` | `table` | No | Blip settings such as sprite, scale, colour, text, time, and radius |

Returns:

- optional result from your dispatch resource

Override code:

```lua
function Override.AddCustomDispatch(argument)
    return exports['your_dispatch']:sendAlert({
        jobs = argument.Job,
        coords = argument.Location,
        code = argument.CallCode,
        message = argument.Message,
        flashes = argument.Flashes,
        image = argument.Image,
        icon = argument.icon,
        blip = argument.Blip,
    })
end
```

Notes:

- this override is server-side
- match the argument mapping to the exact alert format your dispatch expects

</details>

<details>
<summary><strong>GetDispatchResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

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

- return the exact started resource folder name
- this override is server-side

</details>

### Logging

<details>
<summary><strong>CreateLog</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` or `string` | Yes | Player source or invoking resource name |
| `event` | `string` | Yes | Log event name |
| `message` | `string` | Yes | Log message |
| `...` | `any` | No | Extra values forwarded by Bridge |

Returns:

- no return is required

Override code:

```lua
function Override.CreateLog(source, event, message, ...)
    local extra = { ... }

    return exports['your_logger']:createLog({
        source = source,
        event = event,
        message = message,
        extra = extra,
    })
end
```

Notes:

- this override is server-side
- Bridge can still run its own built-in logger after this override

</details>

### Phone

<details>
<summary><strong>SendEmail</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` or `string` | Yes | Player source or identifier |
| `emaildata.sender` | `string` | Yes | Sender name |
| `emaildata.subject` | `string` | Yes | Email subject |
| `emaildata.message` | `string` | Yes | Email message |
| `emaildata.imageurl` | `string` | No | Optional image URL |

Returns:

- optional result from your phone resource

Override code:

```lua
function Override.SendEmail(source, emaildata)
    return exports['your_phone']:sendEmail(source, {
        sender = emaildata.sender,
        subject = emaildata.subject,
        message = emaildata.message,
        imageurl = emaildata.imageurl,
    })
end
```

Notes:

- this override is server-side
- map `source` the way your phone resource expects it

</details>

<details>
<summary><strong>GetPhoneResourceName (Server)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

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
- if you also need this on the client side, define the same function in `fs_bridge/unlocked/client.lua`

</details>

### Security

<details>
<summary><strong>BanPlayer</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |
| `reason` | `string` | No | Ban reason |

Returns:

- `boolean` success result
- optional custom result from your ban system

Override code:

```lua
function Override.BanPlayer(source, reason)
    return exports['your_anticheat']:banPlayer(source, reason)
end
```

Notes:

- this override is server-side
- Bridge uses a default reason if one is not provided

</details>

<details>
<summary><strong>Kick</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |
| `reason` | `string` | No | Kick reason |

Returns:

- optional result from your kick flow

Override code:

```lua
function Override.Kick(source, reason)
    DropPlayer(source, reason or 'You have been Kicked from the server.')
end
```

Notes:

- this override is server-side
- Bridge uses a default reason if one is not provided

</details>

### Sounds

<details>
<summary><strong>PlayUrlPos</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Target player source, or `-1` for broadcast if your sound system supports it |
| `soundId` | `string` | Yes | Generated Bridge sound id |
| `position` | `vector3` | Yes | Sound location |
| `distance` | `number` | Yes | Max hearing distance |
| `url` | `string` | Yes | Audio URL |
| `volume` | `number` | Yes | Sound volume |
| `loop` | `boolean` | No | Loop state |

Returns:

- optional result from your sound resource

Override code:

```lua
function Override.PlayUrlPos(source, soundId, position, distance, url, volume, loop)
    return exports['your_sound']:playUrlPos(source, soundId, position, distance, url, volume, loop)
end
```

Notes:

- this override is server-side
- Bridge will still return the generated `soundId` to the caller after this override runs

</details>

<details>
<summary><strong>DestroySound</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Target player source, or `-1` if your sound system supports it |
| `soundId` | `string` | Yes | Bridge sound id |

Returns:

- optional result from your sound resource

Override code:

```lua
function Override.DestroySound(source, soundId)
    return exports['your_sound']:destroySound(source, soundId)
end
```

Notes:

- this override is server-side
- use the same sound id created during `Override.PlayUrlPos`

</details>

<details>
<summary><strong>GetSoundResourceName</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

- none

Returns:

- `string` resource name
- `nil` if you do not want to report one

Override code:

```lua
function Override.GetSoundResourceName()
    return 'your_sound'
end
```

Notes:

- return the exact started resource folder name
- this override is server-side

</details>

### Vehicle

<details>
<summary><strong>GenerateVehiclePlate</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

- none

Returns:

- `string` generated vehicle plate

Override code:

```lua
function Override.GenerateVehiclePlate()
    return ('ABC %04d'):format(math.random(0, 9999))
end
```

Notes:

- this override is server-side
- keep the result compatible with your server plate format and database rules

</details>

### Vehicle Keys

<details>
<summary><strong>GiveCarKeyPlayer (Server)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |
| `vehicle` | `number` | Yes | Vehicle entity handle or network-aware vehicle reference |

Returns:

- optional result from your vehicle-keys resource

Override code:

```lua
function Override.GiveCarKeyPlayer(source, vehicle)
    return exports['your_keys']:giveKeys(source, vehicle)
end
```

Notes:

- this override is server-side
- use the server-facing give-keys function from your keys resource

</details>

<details>
<summary><strong>RemoveCarKeyPlayer (Server)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

Arguments:

| Name | Type | Required | Notes |
|---|---|---|---|
| `source` | `number` | Yes | Player source |
| `vehicle` | `number` | Yes | Vehicle entity handle or network-aware vehicle reference |

Returns:

- optional result from your vehicle-keys resource

Override code:

```lua
function Override.RemoveCarKeyPlayer(source, vehicle)
    return exports['your_keys']:removeKeys(source, vehicle)
end
```

Notes:

- this override is server-side
- use the server-facing remove-keys function from your keys resource

</details>

<details>
<summary><strong>GetVehicleKeysResourceName (Server)</strong></summary>

Description:

Copy this code into `fs_bridge/unlocked/server.lua`.

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

- this override is server-side
- return the exact started resource folder name

</details>
