---
title: Notify Configuration | FWB Studio Docs
description: Configure Notify — config files and key options.
---


# Notify — Configuration

Edit the config files inside `fs_notify/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--[[
================================
      Configuration File
================================
]]

config = {
    command = 'fs_notify',  -- main command used to open the notify panel

    AllowPlayerEdit = true, -- if false, only admins with permission can open the shared panel

    Permissions = {
        ace = 'fs_notify.admin'
    }
}
```

