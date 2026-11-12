---
title: Interact Server Exports | FWB Studio Docs
description: Server side of FiveM FWB Interact (fwb_interact) — handling an option's serverEvent, the data it sends, and checking players on ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Server exports

`fwb_interact` has **no server exports**. Spots are added on the client (see [Client Exports](./client)), because that's where the player looks at them and presses the key.

What reaches the server is an option's **`serverEvent`**. This page shows what it sends and how to handle it safely.

---

::: details serverEvent (from an option)
When a player uses an option that has `serverEvent`, the server event is triggered by that player with one table.

**Data**

* `id` — the spot's id
* `name` — the option's `name`, if you gave one
* `netId` — the entity's network id (entity, model and global spots on a networked entity), otherwise `nil`
* `coords` — where the spot is
* `bone` — the bone, for bone options
* `args` — your `args` from the option

The entity **handle** is not sent (handles only mean something on one client): use `netId` with `NetworkGetEntityFromNetworkId`.

**Example 1: open a stash**

```lua
-- client
exports.fwb_interact:AddSphere({
    coords = vec3(-1190.0, -895.5, 14.0),
    options = { { label = 'Open stash', serverEvent = 'myjob:openStash', args = { stash = 'burgershot' } } },
})

-- server
RegisterNetEvent('myjob:openStash', function(data)
    local src = source
    local stash = data and data.args and data.args.stash
    if stash ~= 'burgershot' then return end
    -- check the player's job here, then open the stash for src
end)
```

**Example 2: an action on a networked entity**

```lua
-- client
exports.fwb_interact:AddGlobalPlayer({
    options = { { label = 'Cuff', serverEvent = 'police:cuff', canInteract = function() return IsPolice() end } },
})

-- server
RegisterNetEvent('police:cuff', function(data)
    local src = source
    local ped = data and data.netId and NetworkGetEntityFromNetworkId(data.netId)
    if not ped or ped == 0 or not DoesEntityExist(ped) then return end
    local target = NetworkGetEntityOwner(ped)
    -- check the job of src again here: canInteract only runs on the client
    TriggerClientEvent('police:getCuffed', target, src)
end)
```
:::

::: warning Check everything on the server
`canInteract` and `distance` only run on the player's own game. A cheater can trigger your server event directly, with any data. Check job, items, money and distance again in the server handler before you give, take or change anything.
:::

```lua
-- a quick distance check against the spot's coords
RegisterNetEvent('shops:vending:buy', function(data)
    local src = source
    local ped = GetPlayerPed(src)
    if not data or not data.coords or #(GetEntityCoords(ped) - vector3(data.coords.x, data.coords.y, data.coords.z)) > 5.0 then return end
    -- take money, give the drink
end)
```
