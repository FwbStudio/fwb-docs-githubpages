---
title: Duty System Server Exports | FWB Studio Docs
description: Server exports for Duty System.
---


# Server exports

### Exports:

If you want to just do onduty player to keep record duty from any of ur mdt or any script these exports will help you in all ways

#### Get Job Name Of Player

<pre class="language-lua"><code class="lang-lua">Client Side:

-- return
-- job name as string

<strong>exports.fs_dutysystem:GetJobName()
</strong>
-------------------------------------------------------------------------------------
--===================================================================================
-------------------------------------------------------------------------------------

Server Side:
-- return 
-- job name as string

-- argument
-- player server id ex- source

exports.fs_dutysystem:GetJobName(source)
</code></pre>

#### Check If Player  Is Onduty

```lua
Client Side:

-- return
-- true as boolean if player is on duty
-- false as boolean if player is off duty

exports.fs_dutysystem:IsOnDuty()

-------------------------------------------------------------------------------------
--===================================================================================
-------------------------------------------------------------------------------------

Server Side:
-- return 
-- true as boolean if player is on duty
-- false as boolean if player is off duty

-- argument
-- player server id ex- source

exports.fs_dutysystem:IsOnDuty(source)
```

#### Toggle Duty Status

```lua
Client Side:

-- use to toggle duty status of player 
-- will make on duty if player is off duty currently
-- will make off duty if playeris on duty currently

exports.fs_dutysystem:ToggleDutyStatus()

-------------------------------------------------------------------------------------
--===================================================================================
-------------------------------------------------------------------------------------

Server Side:

-- use to toggle duty status of player 
-- will make on duty if player is off duty currently
-- will make off duty if playeris on duty currently

-- argument
-- player server id ex- source

exports.fs_dutysystem:ToggleDutyStatus(source)
```

#### Set On Duty

<pre class="language-lua"><code class="lang-lua">Client Side:

-- use to make set player job as on duty only if he is off duty
-- will make player on duty if player is currently offduty
-- will keep On duty if player is currently on duty

exports.fs_dutysystem:SetOnDuty()

-------------------------------------------------------------------------------------
--===================================================================================
-------------------------------------------------------------------------------------

<strong>Server Side:
</strong>
-- use to make set player job as on duty only if he is off duty
-- will make player on duty if player is currently offduty
-- will keep On duty if player is currently on duty

-- argument
-- player server id ex- source

exports.fs_dutysystem:SetOnDuty(source)
</code></pre>

#### Set Off Duty

```lua
Client Side:

-- use to make set player job as on duty only if he is off duty
-- will make player off duty if player is currently onduty
-- will keep off duty if player is currently off duty

exports.fs_dutysystem:SetOffDuty()

-------------------------------------------------------------------------------------
--===================================================================================
-------------------------------------------------------------------------------------

Server Side:

-- use to make set player job as on duty only if he is off duty
-- will make player off duty if player is currently onduty
-- will keep off duty if player is currently off duty

-- argument
-- player server id ex- source

exports.fs_dutysystem:SetOffDuty(source)
```
