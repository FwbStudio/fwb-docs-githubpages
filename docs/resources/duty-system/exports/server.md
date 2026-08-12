---
title: Duty System Server Exports | FWB Studio Docs
description: server exports for Duty System.
---


# Server exports

If you want to just do onduty player to keep record duty from any of ur mdt or any script these exports will help you in all ways

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details GetJobName()
job name as string player server id ex- source

**Example**

```lua
exports['fs_dutysystem']:GetJobName(source)
```
:::

::: details IsOnDuty()
player server id ex- source

**Returns**

- true as boolean if player is on duty
- false as boolean if player is off duty

**Example**

```lua
exports['fs_dutysystem']:IsOnDuty(source)
```
:::

::: details ToggleDutyStatus()
use to toggle duty status of player will make on duty if player is off duty currently will make off duty if playeris on duty currently player server id ex- source

**Example**

```lua
exports['fs_dutysystem']:ToggleDutyStatus(source)
```
:::

::: details SetOnDuty()
use to make set player job as on duty only if he is off duty will make player on duty if player is currently offduty will keep On duty if player is currently on duty player server id ex- source

**Example**

```lua
exports['fs_dutysystem']:SetOnDuty(source)
```
:::

::: details SetOffDuty()
use to make set player job as on duty only if he is off duty will make player off duty if player is currently onduty will keep off duty if player is currently off duty player server id ex- source

**Example**

```lua
exports['fs_dutysystem']:SetOffDuty(source)
```
:::
