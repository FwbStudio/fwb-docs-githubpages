---
title: NPC Medic Installation | FWB Studio Docs
description: Install NPC Medic on FiveM — dependencies, supported EMS scripts, and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_lib` | Yes | Required for notifications, UI, and server callbacks |
| `ESX, QBCore, or Qbox` | Yes | Framework core for job checks, society money, and player states |

---

## Supported EMS & Ambulance Scripts

`fs_npcmedic` auto-detects when players are downed using your installed medical script:

| Medical Resource | Detection Logic |
| :--- | :--- |
| **wasabi_ambulance** (v1.x) | `exports.wasabi_ambulance:isPlayerDead()` |
| **wasabi_ambulance** (v2+) | `LocalPlayer.state['wasabi:deathState'] == 2` |
| **ak47_ambulancejob** | `LocalPlayer.state.dead` |
| **p_ambulancejob** | `LocalPlayer.state.isDead` |
| **qbx_ambulancejob** / **qbx_medical** | `exports.qbx_medical:IsDead()` |
| **tk_ambulancejob** | `LocalPlayer.state.isDead` |

::: tip Custom Medical Script Support
If you use a custom or unlisted ambulance script, you can easily add your own death state check in the open `fs_npcmedic/bridge/` folder in `IsPlayerDead()`:

```lua
function IsPlayerDead()
    if GetResourceState("your_custom_ambulance") == 'started' then
        return exports.your_custom_ambulance:isDead()
    end
end
```
:::

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory if you haven't already (`resources/[fs]/`).
2. Download and place the `fs_npcmedic` folder into `resources/[fs]/fs_npcmedic`.
3. Configure your commands, prices, EMS restrictions, and hospital drop-offs in `fs_npcmedic/config/config.lua`.
4. Add the resource to your `server.cfg`:

```lua
ensure ox_lib
ensure fs_npcmedic
```

5. Restart your FiveM server and verify console output.
