---
title: Multicharacter Server Exports | FWB Studio Docs
description: FWB Multicharacter server exports — delete characters also when offline, log players out to the select screen, read slots and add hooks from other resources.
---

# Multicharacter — Server Exports

| Export | Saves to the database? |
| :--- | :--- |
| `DeleteCharacter` | **Yes** — deletes the character for good |
| `Logout` | Yes — the framework saves the character before it is unloaded |
| `GetSlots` | No — only reads |
| `registerHook` | No |

<details>
<summary><code>DeleteCharacter(id, options)</code></summary>

Deletes a character, also when its player is offline. The delete is logged like any other (table `fwb_multicharacter_deletes`, and the Discord webhook in `bridge/logs.lua`), and the appearance script's data and your extra tables (`bridge/delete.lua`) go with it.

* `id` — ESX `char1:<license>`, QBCore / Qbox the citizenid.
* `options.reason` — shown in the log.
* `options.force` — `true` logs an online character out first. Without it, an online character is not deleted.

Returns `true`, or `false` and `'not_found'`, `'online'` or `'failed'`.

```lua
local ok, why = exports.fwb_multicharacter:DeleteCharacter('ABC12345', { reason = 'Inactive 90 days' })
```
</details>

<details>
<summary><code>Logout(source)</code></summary>

Sends a player back to the select screen. Their character is saved and unloaded by the framework. Returns `true` when the player had a character loaded.

```lua
exports.fwb_multicharacter:Logout(source)
```
</details>

<details>
<summary><code>GetSlots(source)</code></summary>

How many character slots a player may use: the default, plus their extra slots, after your `slots` hook.

```lua
local slots = exports.fwb_multicharacter:GetSlots(source)
```
</details>

<details>
<summary><code>registerHook(name, fn)</code></summary>

Adds a hook from another resource, without editing `bridge/hooks/server.lua`. A `before` hook can stop something (`return false, 'Text'`) or change its data; `after:<event>` only reacts. All names are on [Editable Files → Server](../editable-files/server).

```lua
exports.fwb_multicharacter:registerHook('play', function(data)
    if data.character.jobName == 'banned' then return false, 'This character is locked.' end
end)

exports.fwb_multicharacter:registerHook('after:loaded', function(data)
    print(data.id, data.isNew)
end)
```
</details>

## Server Events

Every `after` event is also sent as a server event:

```lua
AddEventHandler('fwb_multicharacter:created', function(data) end)  -- { source, account, id, slot, details }
AddEventHandler('fwb_multicharacter:loaded', function(data) end)   -- { source, account, id, isNew }
AddEventHandler('fwb_multicharacter:deleted', function(data) end)  -- { id, source, admin, by, reason, name }
AddEventHandler('fwb_multicharacter:unloaded', function(data) end) -- { source, id }
```
