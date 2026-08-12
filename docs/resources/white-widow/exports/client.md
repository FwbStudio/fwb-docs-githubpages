---
title: White Widow Client Exports | FWB Studio Docs
description: Client exports for White Widow.
---


# Client exports

### Client Export:

If you want to add your function.

fs\_whitewidow/client/unlocked.lua

```lua
-- you can change boss menu function here 
RegisterNetEvent(Settings.Prefix..':openbossaction')
AddEventHandler(Settings.Prefix..':openbossaction', function(job)
    TriggerEvent('esx_society:openBossMenu', job, function(data, menu)
        ESX.CloseContext()
    end, {wash = false})
end)
```
