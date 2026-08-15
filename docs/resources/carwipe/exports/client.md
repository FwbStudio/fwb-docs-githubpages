---
title: Carwipe Client Exports | FWB Studio Docs
description: Client exports for FiveM Carwipe script.
---

# Client Exports

Each export below is expandable. Open one to view description, arguments, return value, and usage examples.

::: details whitelistvehicle

Whitelists a vehicle license plate from being wiped. Useful for integrating with vehicle keys or custom vehicle systems to protect specific plates on runtime.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `plate` | `string` | Yes | The vehicle license plate text to whitelist. |
| `singlewipe` | `boolean` | Yes | `true`: Whitelist for the next upcoming wipe only.<br>`false`: Whitelist for all wipes until server restart. |

**Example**

```lua
-- Whitelist plate 'DEALER' permanently until server restart
exports['fs_carwipe']:whitelistvehicle('DEALER', false)

-- Whitelist plate 'TEMP123' for the next single wipe only
exports['fs_carwipe']:whitelistvehicle('TEMP123', true)
```

:::

::: details WipeCars

Triggers a vehicle wipe. Can be called from custom admin menus or external scripts to initiate a car cleanup. Note: This export executes the wipe immediately without checking admin permissions.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `notifypeople` | `boolean` | Yes | `true`: Send countdown warnings to players before wiping.<br>`false`: Instantly wipe vehicles without sending notifications. |

**Example**

```lua
-- Trigger carwipe with countdown notifications
exports['fs_carwipe']:WipeCars(true)

-- Trigger instant carwipe with no notifications
exports['fs_carwipe']:WipeCars(false)
```

:::
