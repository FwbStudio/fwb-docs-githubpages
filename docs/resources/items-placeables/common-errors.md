---
title: Items Placeables Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Items Placeables script (fs_placeables).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Common Errors & FAQ

---

## Console messages

| Message | Cause | Fix |
| :--- | :--- | :--- |
| `Waiting for fs_bridge to start` (repeating) | `fs_bridge` is missing or not started | Put `fs_bridge` in `resources/[fs]/` and ensure it before `fs_placeables` |
| `You have vX of fs_bridge, please update it to atleast v3.7` | fs_bridge is too old | Download the latest fs_bridge from Keymaster |
| `Change Script name back to fs_placeables` | The resource folder was renamed | Rename the folder back to `fs_placeables` |
| `Item <name> is not found in your server item list` | A `Config.Items` entry isn't in your inventory items | Add the item to your inventory, or remove it from `Config.Items`. With ox_inventory see [Place Money Using ox_inventory](./place-money-ox-inventory#step-1-keep-the-right-money-entries-for-your-framework) |
| `Model not found in cdimage for item : <name>` (F8) | The prop model doesn't exist or isn't streamed | Fix the model name, or make sure the addon prop resource starts before `fs_placeables` |
| `Please use ("propname") or (`` `propname` ``) or (prophash) in config` | A model in `Config.Items` is the wrong type | Use a backtick hash, a quoted string or a number |

---

### ❓ "Nothing Placeable in your inventory" when opening `/placeprop`

You carry nothing that is in `Config.Items`. Check the names match your inventory's item names exactly, then give yourself the item and try again.

---

### ❓ The amount submenu is empty

You have less than the smallest amount configured for that item. With money, the default smallest amount is $1,000. Add a smaller amount (for example `[100]`) to `Config.Items` if you want one.

---

### ❓ The prop is a cardboard box

The amount being placed has no model, and the item has no `[1]` entry, so `Config.defaultprop` is used. This usually happens with the `fs_placeables:placeitemhook` event when the `count` isn't an amount listed in `Config.Items`.

---

### ❓ The outline is red and I can't place

You are aiming at an object smaller than the prop, or `Config.disallowItemStacking = true` and you are aiming at another object. Aim at the ground, a bigger surface or a vehicle.

---

### ❓ Placed items disappeared after a restart

Placed props are not saved. Pick them up before restarting the server or `fs_placeables`.

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
