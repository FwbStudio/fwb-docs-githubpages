---
title: NPC Medic Server Exports | FWB Studio Docs
description: Server-side exports for NPC Medic on FiveM (fwb_npcmedic) — send an NPC medic to a player from your own scripts and check if one is on the way.
---

# Server Exports

Call these from any server script. `exports['fs_npcmedic']` works as well, for scripts written for the old name.

---

::: details CallMedic
Sends an NPC medic to a downed player, the same as `/help [playerid]`. All checks still run: cooldown, EMS limit, zones, the player can pay and is really dead. The "who can call" settings (`selfrevive`, `othersrevive`) don't apply, because no player is calling.

The checks take a moment (the player's game is asked whether they are dead), so the result comes in the callback.

### Export
```lua
exports.fwb_npcmedic:CallMedic(target, cb)
```

### Parameters
* `target` (`number`): Server id of the downed player
* `cb` (`function`, optional): `function(ok, reason)`. `ok` is `true` when the medic is on the way; otherwise `reason` is the text of why not (for example the cooldown message).

### Returns
* `true` (the request was accepted; the result comes in `cb`)

### Example
```lua
exports.fwb_npcmedic:CallMedic(source, function(ok, reason)
    if not ok then
        print(('No NPC medic for %s: %s'):format(source, reason))
    end
end)
```
:::

::: details HasActiveMedic
Whether an NPC medic is on the way to, or working on, this player right now.

### Export
```lua
exports.fwb_npcmedic:HasActiveMedic(target)
```

### Parameters
* `target` (`number`): Server id of the player

### Returns
* `boolean`

### Example
```lua
if exports.fwb_npcmedic:HasActiveMedic(source) then
    -- don't send a player EMS call for someone the NPC medic is already handling
end
```
:::
