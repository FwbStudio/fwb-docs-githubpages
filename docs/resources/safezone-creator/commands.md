---
title: Safezone Creator Commands | FWB Studio Docs
description: In-game admin command and ACE permission for FiveM Safezone Creator (fwb_safezonecreator) on ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Commands

`fwb_safezonecreator` has one admin command that opens the in-game menu.

---

## Admin Commands

::: details /fwb_safezonecreator
Opens the Safezone Creator menu.

### Syntax
```
/fwb_safezonecreator
```

### Requirements
* The player needs the ACE permission set in the menu (default `fwb_safezonecreator`):

```lua
add_ace group.admin fwb_safezonecreator allow
```

* Without it, the menu shows a **"You do not have permission for this menu"** page with the player's license and an `add_ace` line to copy.

### Changing the command
The command and ACE name are set in **General → Menu access**. Both apply after a resource restart. A leading `/` and spaces are removed from the command automatically.

### Inside the menu
* Create, edit, disable and delete zones.
* Draw or redraw a zone's area with the creation tool.
* Set combat, god mode, weapon whitelist, speed limit, no collision, blip and map rules per zone.
* Show a zone's outline, teleport to it, or copy its rules to a new zone.
* Manage Discord logs, bridge resources, the creation tool and debug options.

See [Configuration](./configuration) for every option.
:::
