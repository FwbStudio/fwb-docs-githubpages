---
title: Trap Phone v2 Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Trap Phone v2 (fs_trapphone_v2).
---

# Trap Phone v2 — Common Errors & FAQ

Have a question or encounter an issue while running **fs_trapphone_v2**? Check the common questions and error solutions below.

---

### ❓ Q: "You do not have permission to use this command" when typing `/fs_trapphone`?

::: danger Cause
Your player or admin group has not been granted the `fs_trapphone_v2.admin` ACE permission.
:::

::: tip Solution
Add the following line into your `server.cfg`:
```lua
add_ace group.admin "fs_trapphone_v2.admin" allow
```
:::

---

### ❓ Q: Does Trap Phone v2 require `fs_bridge`?

::: tip Solution
**No**. `fs_trapphone_v2` is completely self-contained with its own internal modular bridge folder (`fs_trapphone_v2/bridge/`). It does not come with, require, or use `fs_bridge`.
:::

---

### ❓ Q: Changes made in the NUI editor are not saving?

::: tip Solution
Ensure your server process has write permissions to `resources/[fs]/fs_trapphone_v2/server/config.json`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
