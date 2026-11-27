---
title: Multicharacter Client Exports | FWB Studio Docs
description: FWB Multicharacter client exports — check if the select screen is open, finish your own character creator, and add client hooks.
---

# Multicharacter — Client Exports

None of the client exports save anything to the database.

<details>
<summary><code>IsSelecting()</code></summary>

`true` while the select screen, the creator after it or the spawn map is up. Use it to hide your HUD or stop other menus.

```lua
if exports.fwb_multicharacter:IsSelecting() then return end
```
</details>

<details>
<summary><code>CreatorDone(saved)</code></summary>

For your own character creator. When your `openCreator` hook returns `false`, the script waits until your creator calls this, then opens the spawn map.

```lua
exports.fwb_multicharacter:CreatorDone(true)  -- the player saved their look
```
</details>

<details>
<summary><code>registerClientHook(name, fn)</code></summary>

Adds a client hook from another resource. All names are on [Editable Files → Client](../editable-files/client).

```lua
exports.fwb_multicharacter:registerClientHook('openCreator', function(data)
    TriggerEvent('my_creator:open', data.sex)
    return false -- I open my own; I call CreatorDone when it closes
end)
```
</details>

## Client Events

Every client `after` event is also sent as `fwb_multicharacter:client:<event>`:

```lua
AddEventHandler('fwb_multicharacter:client:loaded', function(data) end) -- { isNew }
```
