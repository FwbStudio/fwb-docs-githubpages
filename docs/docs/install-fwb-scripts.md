# Install FWB Scripts

## ESX / QBCore / Qbox

### 1. Keep FWB resources together

Drag and drop FWB resources into one folder group so Bridge and scripts start as a set.

Recommended folder:

```text
resources/
└── [fs]/
    ├── fs_bridge
    └── ...your FWB scripts
```

### 2. Ensure the folder once

In `server.cfg`, start your framework and dependencies first, then ensure the whole `[fs]` folder:

```text
ensure ox_lib
ensure [fs]
```

You usually do **not** need to ensure every FWB script one by one if they all live under `[fs]`.

### 3. Install Bridge + items

- Use the latest `fs_bridge`
- Import SQL only when a script ships `.sql`
- Install items from each script’s `[INSTALL_ME_FIRST]` folder for your inventory

### 4. Restart fully after first setup

After framework, inventory, or Bridge changes, do a full server restart so detection refreshes cleanly.
