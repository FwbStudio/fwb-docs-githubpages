---
title: WigsBundle Business Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM WigsBundle Business (fs_wigsbundles).
---

# WigsBundle Business — Common Errors & FAQ

Have a question or encounter an issue while running **fs_wigsbundles**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_wigsbundles` in your `server.cfg`.
:::

::: tip Solution
Ensure `fs_bridge` starts before `fs_wigsbundles` in `server.cfg`:
```lua
ensure fs_bridge
ensure fs_wigsbundles
```
:::

---

### ❓ Q: Player hairstyles do not reset back to normal when un-equipping a wig?

::: danger Cause
The fallback hair ID in `config.NonWig` is not configured for your character's clothing model.
:::

::: tip Solution
Open `fs_wigsbundles/config/config.lua` and adjust `config.NonWig`:
```lua
config.NonWig = {
    male = { hair_id = 0, hair_texture = 0, hair_color = 0, hair_highlight = 0 },
    female = { hair_id = 83, hair_texture = 0, hair_color = 0, hair_highlight = 0 }
}
```
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
