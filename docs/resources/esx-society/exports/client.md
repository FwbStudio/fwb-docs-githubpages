---
title: ESX Society Client Exports | FWB Studio Docs
description: Client exports for opening and extending the ESX Society boss menu on FiveM ESX servers.
---

# Client Exports

::: details OpenBossMenu

Opens the redesigned boss interface for a society. The server verifies that the local player currently manages the requested ESX job.

```lua
exports['esx_society']:OpenBossMenu(society, close, options)
```

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `society` | `string` | Yes | Lowercase ESX job or society name |
| `close` | `function` or `nil` | No | Called when the menu closes |
| `options` | `table` or `nil` | No | Enables or disables compatible boss-menu sections |

Supported option keys are `checkBal`, `withdraw`, `deposit`, `wash`, `employees`, `salary`, `grades`, and `uniforms`. Omitted keys use the standard defaults; uniforms are disabled by default.

Returns `true` when the request is accepted locally, otherwise `false`. Server authorization still decides whether the menu opens.

```lua
exports['esx_society']:OpenBossMenu('mechanic', function(data, menu)
    menu.close()
end, {
    wash = false,
    grades = true,
    uniforms = false,
})
```

The standard event remains supported:

```lua
TriggerEvent('esx_society:openBossMenu', 'mechanic', nil, { wash = false })
```

:::

::: details AddBossMenuItem

Adds a custom compatibility item to the boss-menu context definition.

```lua
local itemId = exports['esx_society']:AddBossMenuItem({
    id = 'company_reports',
    icon = 'fas fa-file-lines',
    title = 'Company reports',
    value = 'company_reports',
})
```

Returns the normalized item ID, or `false` when the argument is not a table.

:::

::: details RemoveBossMenuItem

Removes a custom item registered with `AddBossMenuItem`.

```lua
local removed = exports['esx_society']:RemoveBossMenuItem('company_reports')
```

Returns `true` after removing the stored ID.

:::
