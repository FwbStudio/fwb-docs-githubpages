---
title: ESX Society Server Exports | FWB Studio Docs
description: Server exports for registering societies, reading society metadata, and opening ESX Society boss menus on FiveM ESX servers.
---

# Server Exports

::: details GetSociety

Returns the registered society object for a valid job name, or `nil` when it is not registered.

```lua
local society = exports['esx_society']:GetSociety('mechanic')

if society then
    print(society.label, society.account, society.datastore)
end
```

The object contains the society `name`, `label`, `account`, `datastore`, `inventory`, registration `data`, and runtime account-state fields.

:::

::: details registerSociety

Registers a society using the standard ESX argument order.

```lua
exports['esx_society']:registerSociety(name, label, account, datastore, inventory, data)
```

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Lowercase ESX job ID |
| `label` | `string` | Yes | Display label |
| `account` | `string` | Yes | Usually `society_<job>` |
| `datastore` | `string` | Yes | Usually `society_<job>` |
| `inventory` | `string` | Yes | Preserved compatibility metadata |
| `data` | `table` | No | Registration metadata such as `{ type = 'public' }` |

Returns `true` when registered. A duplicate explicit registration returns `false` and prints the standard duplicate-society warning.

```lua
local registered = exports['esx_society']:registerSociety(
    'mechanic', 'Mechanic',
    'society_mechanic', 'society_mechanic', 'society_mechanic',
    { type = 'public' }
)
```

The case-friendly `RegisterSociety` export is an alias with the same arguments and return value. The standard `esx_society:registerSociety` event is also supported.

:::

::: details OpenBossMenu

Requests the boss interface for a specific player. This convenience export applies trusted section restrictions and still verifies the player's live ESX boss status.

```lua
exports['esx_society']:OpenBossMenu(playerId, jobName, close, options)
```

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `playerId` | `number` | Yes | Player server ID |
| `jobName` | `string` | Yes | ESX job managed by that player |
| `close` | `boolean` | No | `false` preserves the requesting flow when supported |
| `options` | `table` | No | Restricts compatible boss-menu sections |

```lua
local opened = exports['esx_society']:OpenBossMenu(source, 'mechanic', true, {
    wash = false,
    grades = true,
    uniforms = false,
})
```

Returns `true` when the boss session is created, otherwise `false`.

:::
