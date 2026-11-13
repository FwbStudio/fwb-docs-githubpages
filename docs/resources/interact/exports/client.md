---
title: Interact Client Exports | FWB Studio Docs
description: Client exports for FiveM FWB Interact (fwb_interact) — AddSphere, AddBox, AddPoly, AddEntity, AddModel, AddGlobal, RegisterCard, Update, Remove, SetType with examples for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Client exports

All exports are **client side**: `exports.fwb_interact:Name(...)`. Each one below is expandable. Open one to see its fields, return value and examples.

Spots are removed on their own when the script that added them stops.

---

## Quick start

```lua
-- client.lua of your script
exports.fwb_interact:AddSphere({
    coords = vec3(-1196.3, -891.2, 14.0),   -- where it is
    options = {
        { label = 'Open shop', onSelect = function() print('shop opened') end },
    },
})
```

From 3 m away players see a dot there. Looking at it from 1.5 m turns it into `[E] Open shop`.

---

## Fields every Add takes

Every `Add…` export takes one table. These fields work on all of them; each export lists its own extra fields. A field that only applies to one type is ignored by the other, so you can always pass everything.

| Field | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `options` | table | Required | One option or a list of options (see [Options](#options)) |
| `id` | string | made up | Your own id. Adding again with the same id replaces the spot |
| `type` | string | script / press E | `'draw3d'`, `'target'` or `'auto'` for this spot only |
| `distance` | number | Use distance setting | How close the player must be to use the options that don't set their own |
| `range` | number | 3.0 (2.0 global) | How far away the dot shows (max 30) |
| `dot` | boolean | `true` | `false` = no dot when the spot is on a target |
| `targetIcon` | string | `'eye'` | On a target: the icon in the white box that shows when the player is close enough. `eye`, `lock`, `lock-open`, `hand`, `door`, `car`, `key` |
| `color` | string / table | Key colour setting | The dot and key colour: `'#ff7a00'` or `{ 255, 122, 0 }` |
| `shape` | string | Shape setting | `circle`, `square`, `diamond`, `hexagon`, `ring`, `solid`, `plus` |
| `animation` | string | Animation setting | `none`, `pulse`, `spin`, `breathe`, `bounce` |
| `card` | table / string | none | A hint card, or the name of one from `RegisterCard` |
| `mode` | string | `'foot'` | draw3d: `'foot'`, `'vehicle'` (the driver only) or `'any'` |
| `los` | boolean | `true` | `false` = shown through walls too |
| `debug` | boolean | Debug setting | target: draw the zone |

Every `Add…` returns the spot's **id** (a string), or `nil` if the data was wrong. The F8 console says what was wrong.

## Options

| Field | Type | Description |
| :--- | :--- | :--- |
| `label` | string | What the option is called, for example `'Open shop'` |
| `onSelect` | function(data) | Runs when the player uses it (`action` works too) |
| `event` | string | A client event to trigger with `data` |
| `serverEvent` | string | A server event. The server gets `{ id, name, netId, coords, bone, args }` |
| `command` | string | A command to run |
| `distance` | number | How close the player must be for this option |
| `canInteract` | function | `(entity, distance, coords, name, bone)` — return `false` to hide the option |
| `key` | number | draw3d: the option's own control, for example `47` for G |
| `keyLabel` | string | What the key shows (common keys get their letter automatically) |
| `join` | boolean | `true` = put this option in the pick list even though others have keys |
| `bones` | string / table | Entity, model and global kinds: the option belongs to these bones |
| `icon` | string | target: a Font Awesome icon |
| `name` | string | Your own name, given back as `data.name` |
| `args` | any | Anything, given back as `data.args` |

`onSelect` and the events get:

```lua
data = {
    id = 'myshop:counter',   -- the spot's id
    name = 'open',           -- the option's name, if you gave one
    entity = 12345,          -- the entity (entity, model and global kinds)
    coords = vec3(...),      -- where the spot is
    distance = 1.2,          -- how far the player was
    bone = 'boot',           -- the bone, for bone options
    args = { ... },          -- your args
}
```

`onSelect` runs in its own thread, so progress bars, `Wait` and callbacks are fine. Until it returns, the player can't use any other option.

::: tip Several options
If **every** option has a `key`, each one is its own row with that key. As soon as **one** option has no key, they all go into one pick list on E (mouse wheel / arrow keys). Give `join = true` to the options that should share E while others keep their own keys.
:::

---

## Type

::: details SetType(type)
Sets how all of **your script's** spots are used. Call it once at start, and again whenever you like (for example from your own in-game toggle): spots that don't set their own `type` switch over live. `nil` goes back to press E.

**Arguments**

* `type` — `'draw3d'`, `'target'`, `'auto'` or `nil`

**Returns**

* `true`, or `false` if the type isn't one of those

**Example 1: from your own config**

```lua
-- Config.Interact = 'target' in your script's config
exports.fwb_interact:SetType(Config.Interact)
```

**Example 2: let your own command switch it**

```lua
RegisterCommand('interactmode', function(_, args)
    local mode = args[1] == 'target' and 'target' or 'draw3d'
    exports.fwb_interact:SetType(mode)   -- every spot of this script switches now
end)
```
:::

::: details GetType(id?)
With an id, returns what that spot uses right now. Without one, returns what your script's new spots would use right now (for example `'draw3d'` when you asked for target but none is running).

**Returns**

* `'draw3d'`, `'target'`, or `nil` for an unknown id

**Example 1: one spot**

```lua
local id = exports.fwb_interact:AddSphere({ coords = vec3(0, 0, 70), options = { label = 'Hi' } })
print(exports.fwb_interact:GetType(id))   -- 'draw3d' or 'target'
```

**Example 2: match your help text**

```lua
local how = exports.fwb_interact:GetType() == 'target'
    and 'Use your target on the grill'
    or 'Walk up to the grill and press E'
lib.notify({ description = how })
```
:::

---

## Places

::: details AddSphere(data)
A spot at fixed coords. This is the one you'll use most. In draw3d the dot sits at `coords`; on a target it becomes a sphere zone of `radius`.

**Extra fields**

* `coords` (vector3, required) — where the spot is. Put it where the player would look (counter height, not the floor)
* `radius` (number) — target: size of the zone (default: the Sphere size setting)

**Returns** the spot's id.

**Example 1: a shop counter**

```lua
exports.fwb_interact:AddSphere({
    id = 'myshop:counter',
    coords = vec3(-1196.3, -891.2, 14.0),
    options = {
        { label = 'Open shop', icon = 'fa-solid fa-basket-shopping', onSelect = function() OpenShop() end },
    },
})
```

**Example 2: a job-only stash with a card**

```lua
exports.fwb_interact:AddSphere({
    coords = vec3(-1190.0, -895.5, 14.0),
    range = 4.0,
    color = '#8c6eff',
    card = { title = 'Stash', text = 'Shared storage for the crew.', lines = { '50 slots' }, icon = '📦' },
    options = {
        { label = 'Open stash', serverEvent = 'myjob:openStash',
          canInteract = function() return PlayerJob == 'burgershot' end },
    },
})
```
:::

::: details AddBox(data)
A rotated box area. In draw3d the player can use it while standing inside, without aiming. The dot sits at the box's centre.

**Extra fields**

* `coords` (vector3, required) — the centre of the box
* `size` (vector3) — width (x), length (y), height (z). Default `vec3(1, 1, 1)`
* `rotation` (number) — heading in degrees (`heading` works too). Default `0`

**Example 1: a long counter**

```lua
exports.fwb_interact:AddBox({
    coords = vec3(-1195.0, -893.0, 14.0),
    size = vec3(4.0, 1.2, 2.0),
    rotation = 34.0,
    options = { { label = 'Take order', onSelect = TakeOrder } },
})
```

**Example 2: a garage bay for drivers**

```lua
exports.fwb_interact:AddBox({
    coords = vec3(215.8, -810.1, 30.7),
    size = vec3(4.0, 7.0, 3.0),
    rotation = 160.0,
    mode = 'vehicle',          -- only the driver of a vehicle
    options = { { label = 'Park vehicle', onSelect = ParkVehicle } },
})
```
:::

::: details AddPoly(data)
An area of any shape, given as its corner points. Like a box, it can be used from inside. The dot sits at the middle of the points, or at `coords` if you give it.

**Extra fields**

* `points` (table, required) — at least 3 points (`vec3` or `vec2`), in order around the area
* `thickness` (number) — height of the area (default `4.0`), centred on the points' height
* `coords` (vector3) — where the dot sits (default: the middle)

**Example 1: a farm field**

```lua
exports.fwb_interact:AddPoly({
    points = { vec3(2010.0, 4900.0, 41.0), vec3(2040.0, 4910.0, 41.0), vec3(2035.0, 4945.0, 41.0), vec3(2000.0, 4935.0, 41.0) },
    thickness = 6.0,
    range = 6.0,
    options = { { label = 'Harvest', onSelect = Harvest } },
})
```

**Example 2: a room, with the dot at the door**

```lua
exports.fwb_interact:AddPoly({
    points = { vec2(-560.0, 280.0), vec2(-552.0, 280.0), vec2(-552.0, 290.0), vec2(-560.0, 290.0) },
    coords = vec3(-556.0, 280.5, 83.0),
    options = { { label = 'Turn lights off', onSelect = LightsOff } },
})
```
:::

---

## Entities

::: details AddEntity(data) / AddEntity(entity, options, extra?)
One entity: an object, a vehicle, a ped, a player, or a local prop your script spawned. The dot follows it as it moves. Give a handle for anything on this client, or a `netId` for a networked entity (it's followed as it streams in and out, and can be added before it's near).

**Extra fields**

* `entity` (number) — the entity handle. Use this or `netId`
* `netId` (number) — the network id of a networked entity
* `offset` (vector3) — where the dot sits on it (default: the middle of the model)
* options can have `bones`

**Example 1: a prop you spawned, four options in a pick list**

```lua
local obj = CreateObject(`prop_bbq_5`, coords.x, coords.y, coords.z, false, false, false)
exports.fwb_interact:AddEntity({
    entity = obj,
    card = 'my_grill',    -- a card from RegisterCard
    options = {
        { label = 'Pick up object', onSelect = PickUp },
        { label = 'Place object',   onSelect = Place },
        { label = 'Delete object',  onSelect = function(d) DeleteEntity(d.entity) end },
        { label = 'Snap object',    onSelect = Snap },
    },
})
```

**Example 2: a networked food truck, with options on its bones**

```lua
exports.fwb_interact:AddEntity({
    netId = truckNetId,
    options = {
        { label = 'Open hatch', bones = 'boot', onSelect = OpenHatch },
        { label = 'Enter kitchen', bones = { 'door_dside_r', 'door_pside_r' }, onSelect = EnterKitchen },
        { label = 'Check stock', onSelect = CheckStock },  -- no bone: the dot on the truck itself
    },
})

-- short form: AddEntity(entity, options, extra)
exports.fwb_interact:AddEntity(obj, { { label = 'Pick up', onSelect = PickUp } }, { range = 4.0 })
```
:::

::: details AddModel(data)
Every entity of one or more models, including the map's own props, with nothing spawned. Every one near the player gets a dot.

**Extra fields**

* `models` (string / number / table, required) — model names or hashes (`model` works too)
* `offset` (vector3) — where the dot sits on each one
* `range` defaults to the Range on models setting

**Example 1: every ATM**

```lua
exports.fwb_interact:AddModel({
    models = { 'prop_atm_01', 'prop_atm_02', 'prop_atm_03', 'prop_fleeca_atm' },
    offset = vec3(0.0, 0.0, 1.0),
    shape = 'square',
    options = { { label = 'Use ATM', onSelect = function(d) OpenATM(d.entity) end } },
})
```

**Example 2: every vending machine, with a card**

```lua
exports.fwb_interact:AddModel({
    models = { 'prop_vend_soda_01', 'prop_vend_soda_02' },
    card = { title = 'Vending machine', text = 'A cold drink for $5.', icon = '🥤', color = '#ff4d6d' },
    options = { { label = 'Buy drink', serverEvent = 'shops:vending:buy' } },
})
```
:::

::: details AddGlobalVehicle(data)
Every vehicle. Use `bones` to put options on doors, the trunk or the hood, and `canInteract` to limit which vehicles.

**Example 1: trunk and hood**

```lua
exports.fwb_interact:AddGlobalVehicle({
    options = {
        { label = 'Open trunk', bones = 'boot', onSelect = function(d) SetVehicleDoorOpen(d.entity, 5, false, false) end },
        { label = 'Check engine', bones = 'bonnet', onSelect = CheckEngine },
    },
})
```

**Example 2: lockpick locked cars only**

```lua
exports.fwb_interact:AddGlobalVehicle({
    options = {
        { label = 'Lockpick', bones = { 'door_dside_f', 'door_pside_f' },
          canInteract = function(vehicle) return GetVehicleDoorLockStatus(vehicle) == 2 end,
          onSelect = function(d) StartLockpick(d.entity) end },
    },
})
```
:::

::: details AddGlobalPed(data)
Every NPC (players are not included, see `AddGlobalPlayer`).

**Example 1: talk to locals**

```lua
exports.fwb_interact:AddGlobalPed({
    options = { { label = 'Ask for directions', onSelect = AskDirections } },
})
```

**Example 2: sell, only to living NPCs and only while holding stock**

```lua
exports.fwb_interact:AddGlobalPed({
    distance = 1.5,
    options = {
        { label = 'Sell', canInteract = function(ped) return not IsPedDeadOrDying(ped, true) and HasStock() end,
          onSelect = function(d) TrySell(d.entity) end },
    },
})
```
:::

::: details AddGlobalPlayer(data)
Every other player. Use `serverEvent` so the server gets the player's network id.

**Example 1: give an item**

```lua
exports.fwb_interact:AddGlobalPlayer({
    options = { { label = 'Give item', onSelect = function(d)
        OpenGiveMenu(GetPlayerServerId(NetworkGetPlayerIndexFromPed(d.entity)))
    end } },
})
```

**Example 2: police only — search and cuff**

```lua
exports.fwb_interact:AddGlobalPlayer({
    color = '#3a7bff',
    options = {
        { label = 'Search', serverEvent = 'police:search', canInteract = function() return IsPolice() end },
        { label = 'Cuff',   serverEvent = 'police:cuff',   canInteract = function() return IsPolice() end },
    },
})
```
:::

::: details AddGlobalObject(data)
Every object in the world. Rarely what you want — prefer `AddModel`. Useful for debugging or very broad tools.

**Example 1: print any prop's model (debug)**

```lua
exports.fwb_interact:AddGlobalObject({
    range = 1.5,
    options = { { label = 'Print model', onSelect = function(d) print(GetEntityModel(d.entity)) end } },
})
```

**Example 2: only objects your script marked**

```lua
exports.fwb_interact:AddGlobalObject({
    options = { { label = 'Collect', canInteract = function(obj) return Entity(obj).state.collectable end, onSelect = Collect } },
})
```
:::

---

## Cards

::: details RegisterCard(name, card)
Saves a hint card under a name, so many spots can use it with `card = 'name'`. A card shows on the spot the player looks at once they're close enough to use it.

**Card fields**

* `title` — the heading
* `text` — a short description (up to 3 lines show)
* `lines` — up to 3 small detail lines, for example `{ 'Requires: Spatula', 'Job: Burger Shot' }`
* `icon` — a short text or emoji in the badge, for example `'🔥'`
* `image` — an image in the badge instead: `'nui://my_script/web/grill.png'` or a URL
* `color` — the card's colour (border, badge, keys). Defaults to the spot's `color`
* `footer` — your own footer text (target cards). Otherwise the Card footer setting

**Returns** `true`, or `false` if the name or card is missing.

**Example 1: one card, many grills**

```lua
exports.fwb_interact:RegisterCard('my_grill', {
    title = 'Grill', text = 'Cook raw patties here.', lines = { 'Requires: Spatula' }, icon = '🔥', color = '#ff7a00',
})
for _, grill in ipairs(Grills) do
    exports.fwb_interact:AddEntity({ entity = grill, card = 'my_grill', options = GrillOptions })
end
```

**Example 2: an image and your own footer**

```lua
exports.fwb_interact:RegisterCard('menu_board', {
    title = 'Menu', text = "See today's specials.",
    image = 'nui://my_restaurant/web/menu_icon.png',
    footer = 'Have a look before you order',
})
```
:::

---

## Managing spots

::: details Update(id, fields)
Changes a spot. It keeps its id, kind and owner, and only the fields you pass change. Use it for labels that change, a new position, or one spot's type.

**Returns** `true`, or `false` if there is no spot with that id.

**Example 1: open / close**

```lua
exports.fwb_interact:Update('myshop:door', {
    options = { { label = isOpen and 'Close shop' or 'Open shop', onSelect = ToggleShop } },
})
```

**Example 2: switch one spot to target**

```lua
exports.fwb_interact:Update('myshop:counter', { type = 'target' })
```
:::

::: details Remove(id)
Removes a spot. You don't need to remove spots when your script stops: that's done for you.

**Returns** `true`, or `false` if there is no spot with that id.

**Example 1**

```lua
exports.fwb_interact:Remove('myshop:counter')
```

**Example 2: remove a prop's spot when the prop goes**

```lua
local id = exports.fwb_interact:AddEntity({ entity = obj, options = Options })
-- later
exports.fwb_interact:Remove(id)
DeleteEntity(obj)
```
:::

::: details Exists(id)
Whether a spot with this id exists.

**Returns** `true` or `false`.

**Example 1**

```lua
if not exports.fwb_interact:Exists('myshop:counter') then AddCounter() end
```

**Example 2: add once, update after**

```lua
local function SetCounterLabel(label)
    local options = { { label = label, onSelect = OpenShop } }
    if exports.fwb_interact:Exists('myshop:counter') then
        exports.fwb_interact:Update('myshop:counter', { options = options })
    else
        exports.fwb_interact:AddSphere({ id = 'myshop:counter', coords = CounterCoords, options = options })
    end
end
-- (calling AddSphere again with the same id also works: it replaces the spot)
```
:::

---

## canInteract recipes

`canInteract(entity, distance, coords, name, bone)` decides whether an option shows. In draw3d it runs 4 times a second, only while the player is near, so keep it quick.

```lua
-- job (ESX)
canInteract = function() return ESX.PlayerData.job and ESX.PlayerData.job.name == 'police' end

-- job (QBCore)
canInteract = function() return QBCore.Functions.GetPlayerData().job.name == 'police' end

-- has an item (ox_inventory)
canInteract = function() return exports.ox_inventory:Search('count', 'lockpick') > 0 end

-- not cuffed / not dead (your own state bags)
canInteract = function() return not LocalPlayer.state.isCuffed and not LocalPlayer.state.isDead end

-- vehicle is locked
canInteract = function(vehicle) return GetVehicleDoorLockStatus(vehicle) == 2 end

-- the entity's state
canInteract = function(entity) return Entity(entity).state.owner == GetPlayerServerId(PlayerId()) end
```
