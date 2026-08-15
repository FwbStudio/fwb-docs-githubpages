---
title: Outfit Bag Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Outfit Bag script (fs_outfitbag).
---

# Outfit Bag — Common Errors & FAQ

Have a question or encounter an issue while running **fs_outfitbag**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
This occurs when `fs_bridge` is missing, stopped, or started **after** `fs_outfitbag` in your `server.cfg`.
:::

::: tip Solution
1. Ensure `fs_bridge` is present inside your `resources/[fs]/` directory.
2. In your `server.cfg`, ensure `fs_bridge` is started before `fs_outfitbag`:
   ```lua
   ensure fs_bridge
   ensure fs_outfitbag
   ```
:::

---

### ❓ Q: Database error: `Table 'fs_outfitbag' doesn't exist`?

::: danger Cause
The MySQL database table for storing outfits has not been imported.
:::

::: tip Solution
1. Open `fs_outfitbag/[INSTALL_ME_FIRST]/sql.sql`.
2. Run the SQL script in your database manager (HeidiSQL, phpMyAdmin):
   ```sql
   CREATE TABLE IF NOT EXISTS `fs_outfitbag` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `owner` varchar(100) NOT NULL DEFAULT '0',
     `bagname` varchar(50) DEFAULT NULL,
     `data` longtext DEFAULT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   ```
3. Restart your server.
:::

---

### ❓ Q: Why are certain clothing parts (e.g. shoes, hats) not saving into outfits?

::: danger Cause
Those specific clothing components are disabled in `config.supported`.
:::

::: tip Solution
1. Open `fs_outfitbag/config/config.lua`.
2. Check `config.supported`:
   ```lua
   config.supported = {
       ["mask_1"] = true,
       ['helmet_1'] = true,
       ['glasses_1'] = true,
       ['ears_1'] = true,
       ["tshirt_1"] = true,
       ["torso_1"] = true,
       ["decals_1"] = true,
       ["bproof_1"] = true,
       ["arms"] = true,
       ["watches_1"] = true,
       ["bracelets_1"] = true,
       ['bags_1'] = true,
       ["pants_1"] = true,
       ["shoes_1"] = true, -- Set to true if you want shoes saved
   }
   ```
3. Restart the resource.
:::

---

### ❓ Q: 3D Bag prop models are invisible when placed on the ground?

::: danger Cause
The `.ytyp` stream definition is missing or blocked.
:::

::: tip Solution
Ensure line 9 in `fs_outfitbag/fxmanifest.lua` is intact:
```lua
data_file 'DLC_ITYP_REQUEST' 'stream/fs_outfitbag.ytyp'
```
Do not rename the `stream` directory or remove the `.ytyp` file.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
