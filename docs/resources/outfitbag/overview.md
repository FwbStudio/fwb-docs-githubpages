---
title: Outfit Bag Overview | FWB Studio Docs
description: Outfit Bag v2.0 portable wardrobes and static job uniforms for FiveM ESX, QBCore and Qbox servers.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="./installation">Install</a>
</div>

# Outfit Bag

A portable wardrobe and static job-uniform system, configured through an in-game admin tablet. Players place a physical bag, open it through an entity interaction, and wear full outfits or individual clothing groups.

## Two kinds of bags

| Inventory bags | Static Job Bags |
| --- | --- |
| Small, medium and large definitions are pre-created. | Administrators place a permanent wardrobe prop. |
| Using an item places it nearby; it does not open the wardrobe. | No inventory item is required to use it. |
| The player who places the item manages the ground bag. | Access is selected by job and individual rank. |
| Public access lets other players wear outfits only. | Each outfit can inherit access or narrow it to selected bag ranks. |
| Pickup returns the unique item with its identity. | Only administrators edit the bag and its presets. |

## Player experience

- Realistic fabric bag interface with configurable fabric color, searchable outfits and model compatibility.
- Expandable rows with male/female indicators, actual worn-clothing matching and individual clothing-group controls.
- Wear or remove a group; configured naked defaults supply the replacement components.
- Small preview ped with animated outfit changes. Preview can be switched off while the bag camera remains active.
- Owner-only outfit saving, renaming and deletion; new outfits use the next free slot.
- Inline bag renaming and in-bag color selection when permitted by the administrator.
- Browsing animation persists while the bag is open, pauses for clothing changes and resumes afterward.
- Configurable robbery for inventory bags, with timed sessions and persistent cooldowns.

## Administration

The tablet contains **Bag Items**, **Active Bags**, **Job Bags**, **Bridge**, **Outfit Rules**, **Naked defaults**, and **Settings**.

Global Outfit Rules cover 15 clothing/prop slots. Hair, face and skin appearance are excluded. Blacklists can restrict a drawable across all textures or only specific textures, optionally for a particular player model.

## Performance and validation

Catalogs are cached, searches are paginated, and outfit data is requested when needed rather than broadcast to all players. Gameplay checks revalidate ownership, job/rank, player model, distance and routing bucket on the server. Cache contents are not used as permission grants.

The current safety limits include 2,000 active inventory-bag placements, 500 static Job Bags, and 100 outfits per static bag. These are safeguards, not a tested player-capacity guarantee. Test your actual framework, inventory and clothing versions before production; no 1,000-player load certification is claimed.

## Next steps

**Included languages:** Arabic, German, English, Spanish, French, Dutch, Polish, Brazilian Portuguese, Russian and Turkish. Language selection is in Bridge; Arabic uses right-to-left text. Locale files are unlocked, with English fallback for missing custom translations.

[Installation](./installation) · [Configuration](./configuration) · [Integrations](./integrations) · [Common errors](./common-errors)

Need assistance? [FwB Studio Discord](https://discord.com/invite/sPqkfQHPAa).

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_outfitbag` | ESX, QBCore, Qbox | FiveM Script |
