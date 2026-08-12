---
title: Smoking Client Exports | FWB Studio Docs
description: Client exports for Smoking.
---


# Client exports

### Client Export:

If you want to add your function or effect or stress system you can add here.

fs\_smoking/client/unlocked.lua

```lua
RegisterNetEvent('fs_smoking:OnJoinInhale')
AddEventHandler('fs_smoking:OnJoinInhale',function (inhale_count, item)
    --you can comment bottom line to code ur own effect opotions here for each item on each inhale at the time of smoking 
    DefaultJointEffect(inhale_count, item)

    --trigger ur stress status here if u want to remove little stress on each inhale
end)

RegisterNetEvent('fs_smoking:onStartSmokeJoint')
AddEventHandler('fs_smoking:onStartSmokeJoint',function (item)
    --write ur code

end)

RegisterNetEvent('fs_smoking:onStopSmokeJoint')
AddEventHandler('fs_smoking:onStopSmokeJoint',function (item)
    --write ur code

end)

RegisterNetEvent('fs_smoking:OnVapeInhale')
AddEventHandler('fs_smoking:OnVapeInhale',function (item , liquid_flavour)
     
    --trigger ur stress status here if u want to remove little stress on each inhale
end)

RegisterNetEvent('fs_smoking:onStartSmokeVape')
AddEventHandler('fs_smoking:onStartSmokeVape',function (item)
    --write ur code

end)

RegisterNetEvent('fs_smoking:onStopSmokeVape')
AddEventHandler('fs_smoking:onStopSmokeVape',function (item , liquid_flavour)
    --write ur code

end)
```
