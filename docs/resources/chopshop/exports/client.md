---
title: ChopShop Client Exports | FWB Studio Docs
description: Client exports for ChopShop.
---


# Client exports

Optional export for developers — blacklist vehicle plates at runtime (e.g. PD/EMS/admin spawner plates).

```lua
-- Blacklist a plate from chop shop
exports['fs_chopshop']:addplateblacklist(plate)

-- Example with a vehicle entity
exports['fs_chopshop']:addplateblacklist(GetVehiclePlateType(vehicle))
```
