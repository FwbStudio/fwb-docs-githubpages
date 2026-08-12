---
title: Carwipe Client Exports | FWB Studio Docs
description: Client exports for Carwipe.
---


# Client exports

### White List Vehicle:

this export can be used to whitelist plate from wipe. This export can be added into same function where you add vehicle keys function. only use this if you want to whitelist plate on runtime

```lua
-- Client/Server {can be used in both side}

--@plate - string
--@singlewipe - true = means only whitelist for upcoming 1 wipe
--@singlewipe - false = means whitelist for all wipes untill server restart

exports.fs_carwipe:whitelistvehicle(plate, singlewipe)

--example:
exports.fs_carwipe:whitelistvehicle('Dealer', false)
```

### Wipe Cars:

this export can be used in your any other admin to trigger carwipe keep in mind it don't check any kind of admin permissions this will simply trigger carwipe.

```lua
-- Client/Server {can be used in both side}

--@notifypeople = true - means if you want should notify people
--@notifypeople = false - means instant wipe of cars without notify to anyone
exports.fs_carwipe:WipeCars(notifypeople)

example:
exports.fs_carwipe:WipeCars(false)
```
