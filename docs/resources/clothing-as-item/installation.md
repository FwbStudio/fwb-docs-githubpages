---
title: Clothing As Item Installation | FWB Studio Docs
description: Install Clothing As Item on FiveM — dependencies, items setup, server.cfg, and QBCore modifications.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Clothing As Item — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |


## Supported Clothing Resources

`fs_bridge` automatically detects and supports the following clothing & appearance resources out of the box:

| Resource | Status | Auto-Detected |
| --- | --- | --- |
| `illenium-appearance` | Officially Supported | Yes |
| `fivem-appearance` | Officially Supported | Yes |
| `qb-clothing` | Officially Supported | Yes |
| `skinchanger` | Officially Supported | Yes |
| `rcore_clothing` | Officially Supported | Yes |
| `crm-appearance` | Officially Supported | Yes |
| `p_appearance` | Officially Supported | Yes |
| `qs-appearance` | Officially Supported | Yes |


## Items & inventory setup

1. Open `fs_clothingitem/[INSTALL_ME_FIRST]`.
2. Copy the item definitions from `items/` into your inventory system (`ox_inventory`, `qb-inventory`, `qs-inventory`).
3. Copy inventory item images from `images for inventory/` into your inventory's image folder.


## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place all resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_clothingitem`
3. Download and install `ox_lib` into your `resources/` directory.
4. Complete **Items & inventory setup** by importing item definitions and images from `fs_clothingitem/[INSTALL_ME_FIRST]`.
5. **(QBCore Only)** If using `qb-inventory` or `qb-clothing`, apply the modifications detailed below. If using `ox_inventory`, `qs-inventory`, `illenium-appearance`, etc., **SKIP** the modifications section.
6. Configure `fs_clothingitem/config/` settings before starting.
7. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

---

## QBCore Framework Modifications

> [!IMPORTANT] Skip Notice
> - **Inventory Edit (Part 1):** Only required if you use `qb-inventory`, `ps-inventory`, `qs-inventory`, or `ij-inventory`. If you use `ox_inventory`, **SKIP Part 1**.
> - **Clothing Edit (Part 2):** Only required if you use `qb-clothing`. If you use `illenium-appearance`, `fivem-appearance`, or `rcore_clothing`, **SKIP Part 2**.

---

### Part 1: Inventory Modifications *(Optional — Only For QB, QS, & PS Inventory Servers)*

Open your inventory server script (`qb-inventory/server/main.lua`, `qs-inventory/server/main.lua`, `ps-inventory/server/main.lua`, or `ij-inventory/server/main.lua`) and use `Ctrl + F` to search for `RemoveItem`. Add `TriggerEvent('qb-core:onRemoveInventoryItem', ...)` to notify `fs_clothingitem` when an item is removed. If you use `ox_inventory`, **skip this section**.

::: code-group

```lua [New QB Inventory]
-- Path: qb-inventory/server/main.lua (NEW QB Inventory)
function RemoveItem(identifier, item, amount, slot, reason)
    if not QBCore.Shared.Items[item:lower()] then
        print('RemoveItem: Invalid item')
        return false
    end
    local inventory
    local player = QBCore.Functions.GetPlayer(identifier)

    if player then
        inventory = player.PlayerData.items
    elseif Inventories[identifier] then
        inventory = Inventories[identifier].items
    elseif Drops[identifier] then
        inventory = Drops[identifier].items
    end

    if not inventory then
        print('RemoveItem: Inventory not found')
        return false
    end

    slot = tonumber(slot) or GetFirstSlotByItem(inventory, item)

    if not slot then
        print('RemoveItem: Slot not found')
        return false
    end

    local inventoryItem = inventory[slot]
    if not inventoryItem or inventoryItem.name:lower() ~= item:lower() then
        print('RemoveItem: Item not found in slot')
        return false
    end

    amount = tonumber(amount)
    if inventoryItem.amount < amount then
        print('RemoveItem: Not enough items in slot')
        return false
    end

    inventoryItem.amount = inventoryItem.amount - amount
    if inventoryItem.amount <= 0 then
        inventory[slot] = nil
    end

    -- Added for fs_clothingitem by Capy
    if player and slot then 
        TriggerEvent('qb-core:onRemoveInventoryItem', identifier, item) 
    end

    if player then player.Functions.SetPlayerData('items', inventory) end
    local invName = player and GetPlayerName(identifier) .. ' (' .. identifier .. ')' or identifier
    local removeReason = reason or 'No reason specified'
    local resourceName = GetInvokingResource() or 'qb-inventory'
    TriggerEvent(
        'qb-log:server:CreateLog',
        'playerinventory',
        'Item Removed',
        'red',
        '**Inventory:** ' .. invName .. ' (Slot: ' .. slot .. ')\n' ..
        '**Item:** ' .. item .. '\n' ..
        '**Amount:** ' .. amount .. '\n' ..
        '**Reason:** ' .. removeReason .. '\n' ..
        '**Resource:** ' .. resourceName
    )
    return true
end
```

```lua [Old QB Inventory]
-- Path: qb-inventory/server/main.lua (OLD QB Inventory / ps-inventory / ij-inventory)
local function RemoveItem(source, item, amount, slot)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return false end
    amount = tonumber(amount) or 1
    slot = tonumber(slot)
    if slot then
        if Player.PlayerData.items[slot].amount > amount then
            Player.PlayerData.items[slot].amount = Player.PlayerData.items[slot].amount - amount
            Player.Functions.SetPlayerData("items", Player.PlayerData.items)
            if not Player.Offline then
                TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. slot .. '], itemname: ' .. Player.PlayerData.items[slot].name .. ', removed amount: ' .. amount .. ', new total amount: ' .. Player.PlayerData.items[slot].amount)
            end
            -- Added for fs_clothingitem by Capy
            TriggerEvent('qb-core:onRemoveInventoryItem', source, item)
            return true
        elseif Player.PlayerData.items[slot].amount == amount then
            Player.PlayerData.items[slot] = nil
            Player.Functions.SetPlayerData("items", Player.PlayerData.items)
            if Player.Offline then return true end
            TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. slot .. '], itemname: ' .. item .. ', removed amount: ' .. amount .. ', item removed')
            -- Added for fs_clothingitem by Capy
            TriggerEvent('qb-core:onRemoveInventoryItem', source, item)
            return true
        end
    else
        local slots = GetSlotsByItem(Player.PlayerData.items, item)
        local amountToRemove = amount
        if not slots then return false end
        for _, _slot in pairs(slots) do
            if Player.PlayerData.items[_slot].amount > amountToRemove then
                Player.PlayerData.items[_slot].amount = Player.PlayerData.items[_slot].amount - amountToRemove
                Player.Functions.SetPlayerData("items", Player.PlayerData.items)
                if not Player.Offline then
                    TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. _slot .. '], itemname: ' .. Player.PlayerData.items[_slot].name .. ', removed amount: ' .. amount .. ', new total amount: ' .. Player.PlayerData.items[_slot].amount)
                end
                -- Added for fs_clothingitem by Capy
                TriggerEvent('qb-core:onRemoveInventoryItem', source, item)
                return true
            elseif Player.PlayerData.items[_slot].amount == amountToRemove then
                Player.PlayerData.items[_slot] = nil
                Player.Functions.SetPlayerData("items", Player.PlayerData.items)
                if Player.Offline then return true end
                TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. _slot .. '], itemname: ' .. item .. ', removed amount: ' .. amount .. ', item removed')
                -- Added for fs_clothingitem by Capy
                TriggerEvent('qb-core:onRemoveInventoryItem', source, item)
                return true
            end
        end
    end
    return false
end
```

:::

---

### Part 2: `qb-clothing` Modifications *(Optional — Only For QB Clothing Servers)*

Add the following events to the bottom of `qb-clothing/client/main.lua` (only if you are using `qb-clothing` and these events do not already exist in your script). If you use `illenium-appearance`, `fivem-appearance`, or `rcore_clothing`, **skip this section**.

```lua
-- Event 1: qb-clothing:client:loadOutfit
RegisterNetEvent('qb-clothing:client:loadOutfit')
AddEventHandler('qb-clothing:client:loadOutfit', function(oData)
    local ped = PlayerPedId()

    data = oData.outfitData

    if typeof(data) ~= "table" then data = json.decode(data) end

    for k, v in pairs(data) do
        skinData[k].item = data[k].item
        skinData[k].texture = data[k].texture

        if data[k].shapeMix then
            skinData[k].shapeMix = data[k].shapeMix
        end

        if data[k].skinMix then
            skinData[k].skinMix = data[k].skinMix
        end
    end

    if data["pants"] ~= nil then
        SetPedComponentVariation(ped, 4, data["pants"].item, data["pants"].texture, 0)
    end
    if data["arms"] ~= nil then
        SetPedComponentVariation(ped, 3, data["arms"].item, data["arms"].texture, 0)
    end
    if data["t-shirt"] ~= nil then
        SetPedComponentVariation(ped, 8, data["t-shirt"].item, data["t-shirt"].texture, 0)
    end
    if data["vest"] ~= nil then
        SetPedComponentVariation(ped, 9, data["vest"].item, data["vest"].texture, 0)
    end
    if data["torso2"] ~= nil then
        SetPedComponentVariation(ped, 11, data["torso2"].item, data["torso2"].texture, 0)
    end
    if data["shoes"] ~= nil then
        SetPedComponentVariation(ped, 6, data["shoes"].item, data["shoes"].texture, 0)
    end
    if data["bag"] ~= nil then
        SetPedComponentVariation(ped, 5, data["bag"].item, data["bag"].texture, 0)
    end
    if data["decals"] ~= nil then
        SetPedComponentVariation(ped, 10, data["decals"].item, data["decals"].texture, 0)
    end
    if data["accessory"] ~= nil then
        if QBCore.Functions.GetPlayerData().metadata["tracker"] then
            SetPedComponentVariation(ped, 7, 13, 0, 0)
        else
            SetPedComponentVariation(ped, 7, data["accessory"].item, data["accessory"].texture, 0)
        end
    end
    if data["mask"] ~= nil then
        SetPedComponentVariation(ped, 1, data["mask"].item, data["mask"].texture, 0)
    end
    if data["hat"] ~= nil then
        if data["hat"].item ~= -1 and data["hat"].item ~= 0 then
            SetPedPropIndex(ped, 0, data["hat"].item, data["hat"].texture, true)
        else
            ClearPedProp(ped, 0)
        end
    end
    if data["glass"] ~= nil then
        if data["glass"].item ~= -1 and data["glass"].item ~= 0 then
            SetPedPropIndex(ped, 1, data["glass"].item, data["glass"].texture, true)
        else
            ClearPedProp(ped, 1)
        end
    end
    if data["ear"] ~= nil then
        if data["ear"].item ~= -1 and data["ear"].item ~= 0 then
            SetPedPropIndex(ped, 2, data["ear"].item, data["ear"].texture, true)
        else
            ClearPedProp(ped, 2)
        end
    end
    if data["watch"] ~= nil then
        if data["watch"].item ~= -1 and data["watch"].item ~= 0 then
            SetPedPropIndex(ped, 6, data["watch"].item, data["watch"].texture, true)
        else
            ClearPedProp(ped, 6)
        end
    end

    if oData.outfitName ~= nil then
        QBCore.Functions.Notify("You have chosen "..oData.outfitName.."! Press Confirm to confirm outfit.")
    end
end)

-- Event 2: qb-clothing:getSkin
AddEventHandler('qb-clothing:getSkin', function(cb)
    cb(skinData)
end)
```
