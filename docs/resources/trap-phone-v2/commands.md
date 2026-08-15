---
title: Trap Phone v2 Commands | FWB Studio Docs
description: In-game chat commands reference for FiveM Trap Phone v2 (fs_trapphone_v2).
---

# Trap Phone v2 — Commands

`fs_trapphone_v2` includes in-game administrator commands to configure and manage the script live.

---

## Admin Commands

::: details /fs_trapphone
Opens the full in-game NUI admin configuration panel to modify apps, drop rates, pricing, coordinates, and bridge providers live.

### Syntax
```
/fs_trapphone
```

* **Permission**: Requires `fs_trapphone_v2.admin` ACE permission in `server.cfg`:
  ```lua
  # Grant to admin group:
  add_ace group.admin "fs_trapphone_v2.admin" allow

  # Or grant directly to player license:
  add_ace identifier.license:YOUR_LICENSE_HERE "fs_trapphone_v2.admin" allow
  ```
:::
