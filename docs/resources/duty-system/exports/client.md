---
title: Duty System Client Exports | FWB Studio Docs
description: client exports for Duty System.
---


# Client exports

If you want to just do onduty player to keep record duty from any of ur mdt or any script these exports will help you in all ways

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details GetJobName()
job name as string

**Example**

```lua
exports['fs_dutysystem']:GetJobName()
```
:::

::: details IsOnDuty()
**Returns**

- true as boolean if player is on duty
- false as boolean if player is off duty

**Example**

```lua
exports['fs_dutysystem']:IsOnDuty()
```
:::

::: details ToggleDutyStatus()
use to toggle duty status of player will make on duty if player is off duty currently will make off duty if playeris on duty currently

**Example**

```lua
exports['fs_dutysystem']:ToggleDutyStatus()
```
:::

::: details SetOnDuty()
use to make set player job as on duty only if he is off duty will make player on duty if player is currently offduty will keep On duty if player is currently on duty

**Example**

```lua
exports['fs_dutysystem']:SetOnDuty()
```
:::

::: details SetOffDuty()
use to make set player job as on duty only if he is off duty will make player off duty if player is currently onduty will keep off duty if player is currently off duty

**Example**

```lua
exports['fs_dutysystem']:SetOffDuty()
```
:::
