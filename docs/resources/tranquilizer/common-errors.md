---
title: Tranquilizer Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Tranquilizer (fs_tranquilizer).
---

# Tranquilizer — Common Errors & FAQ

Have a question or encounter an issue while running **fs_tranquilizer**? Check the common questions and error solutions below.

---

### ❓ Q: Why does `/fs_tranquilizer` say "Access Denied"?

::: danger Cause
The player lacks the required `fs_tranquilizer.admin` ACE permission.
:::

::: tip Solution
Add the ACE permission to your `server.cfg`:
```lua
add_ace group.admin "fs_tranquilizer.admin" allow
```
:::

---


### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
