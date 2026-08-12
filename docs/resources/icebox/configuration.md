---
title: Icebox Configuration | FWB Studio Docs
description: Configure Icebox — config files and key options.
---


# Icebox — Configuration

Edit the config files inside `fs_icebox/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
-- FS Clothing Item is configured in-game from the admin tablet.
--
-- Open the menu in game with:
--   /fs_icebox
--
-- Default admin ACE permission:
--   fs_icebox.admin
--
-- Example ACE line:
--   add_ace group.admin fs_icebox.admin allow
--
-- This file is intentionally documentation-only now.
-- Do not add runtime settings here; use the in-game Settings, Robbery,
-- Naked Body, Bridge, Backups, and Item List tabs instead.
--
-- Legacy preset files in config/preset/ are import-only.
-- They are not used by the live UI, saved item list, or runtime clothing data.
-- Use Settings > Preset Folder to detect and import only new items, then delete those preset files when you are ready.
```

