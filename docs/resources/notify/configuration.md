---
title: Notify Configuration | FWB Studio Docs
description: Configure Notify — config files and key options.
---


# Notify — Configuration

Edit `fs_notify/config/config.lua` in your download.

<div class="fwb-config-block">

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

</div>
