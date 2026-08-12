---
title: Carwipe Client Exports | FWB Studio Docs
description: client exports for Carwipe.
---


# Client exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details whitelistvehicle()
this export can be used to whitelist plate from wipe. This export can be added into same function where you add vehicle keys function. only use this if you want to whitelist plate on runtime

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `plate` | `any` | Yes | string |
| `singlewipe` | `any` | Yes | true = means only whitelist for upcoming 1 wipe |
| `singlewipe` | `any` | Yes | false = means whitelist for all wipes untill server restart |

**Example**

```lua
exports['fs_carwipe']:whitelistvehicle(plate, singlewipe)
exports['fs_carwipe']:whitelistvehicle('Dealer', false)
```
:::

::: details WipeCars()
this export can be used in your any other admin to trigger carwipe keep in mind it don't check any kind of admin permissions this will simply trigger carwipe.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `notifypeople` | `any` | Yes | true - means if you want should notify people |
| `notifypeople` | `any` | Yes | false - means instant wipe of cars without notify to anyone |

**Example**

```lua
exports['fs_carwipe']:WipeCars(notifypeople)
exports['fs_carwipe']:WipeCars(false)
```
:::
