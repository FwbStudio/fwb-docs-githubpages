---
title: Outfit Bag Server Export | FWB Studio Docs
description: Integrate the Outfit Bag UseBag server export with exact inventory slots on FiveM ESX, QBCore and Qbox.
---

# Outfit Bag — Server Export

<details>
<summary><code>UseBag(source, slot)</code></summary>

Routes a bag item through the active inventory integration. Normally native framework usable callbacks call this automatically.

```lua
exports.fs_outfitbag:UseBag(source, item.slot)
```

| Argument | Type | Meaning |
| --- | --- | --- |
| `source` | number | Server player ID from the authoritative usable-item callback |
| `slot` | number | The exact inventory slot the player used |

Do not remove the item before calling. Do not choose a slot by item name alone: two same-name bags can have different metadata and outfits.

The server verifies the item, definition and bag identity; successful item use starts the normal nearby placement flow. This is not a direct wardrobe-open or admin-freecam export.

</details>

Custom integrations must implement the active inventory adapter's exact-slot metadata contract. Do not expose a client-triggered wrapper that trusts arbitrary player IDs or bypasses the resource's validation.
