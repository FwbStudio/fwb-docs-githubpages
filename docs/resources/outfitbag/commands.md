---
title: Outfit Bag Commands | FWB Studio Docs
description: In-game chat commands reference for FiveM Outfit Bag script (fs_outfitbag) — wardrobe access and developer outfit tool.
---

# Outfit Bag — Commands

`fs_outfitbag` provides in-game commands for player wardrobe access and developer uniform configuration.

---

## Player Commands

::: details /outfitbag & /ob
Opens the portable outfit bag menu directly without placing an inventory item on the ground.

### Syntax
```
/outfitbag
/ob
```

* **Requirement**: `config.non_item.enable = true` in `config/config.lua`.
* **Behavior**: Opens the small outfit bag UI to change or manage saved outfits instantly.
:::

---

## Developer / Admin Tools

::: details /getoutfit
Developer tool to extract your character's currently worn clothing components directly into Lua table format.

### Syntax
```
/getoutfit
```

### How to Use
1. Set `config.command.enable = true` in `fs_outfitbag/config/config.lua`.
2. Dress your character in the desired job uniform (e.g. Police Officer, Paramedic, SWAT).
3. Run `/getoutfit` in-game.
4. The script copies the complete clothing component table (`drawable`, `texture`, `palette` for mask, helmet, shirt, torso, pants, etc.) to your clipboard / chat.
5. Paste the table directly into `config.whitelist_bags[bag_name].outfits` in `config/config.lua`.
6. Set `config.command.enable = false` when done.
:::
