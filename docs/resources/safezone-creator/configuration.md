---
title: Safezone Creator Configuration | FWB Studio Docs
description: In-game configuration and management guide for FiveM Safezone Creator (fs_safezonecreator).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Configuration

`fs_safezonecreator` is designed with a **100% In-Game NUI Configuration Workflow**. You do not need to manually edit Lua coordinate tables or restart the server to deploy new zones.

All safezones, rules, permissions, blips, and notifications are managed live through the admin panel:

```
/safezonemenu
```

---

## In-Game UI Capabilities

### 1. Creating a New Safezone
1. Open the panel with `/safezonemenu`.
2. Click **Create Safezone**.
3. Select your desired zone type:
   - **Sphere**: Enter a radius in meters.
   - **Box**: Use the 3D in-game gizmo to resize and rotate length, width, and height.
   - **PolyZone**: Walk the perimeter and drop polygon points to wrap around custom buildings or MLOs.

### 2. Configuring Protection Rules
For each zone, you can independently toggle:
* **Invincibility (Godmode)**: Prevents player health and armor depletion while inside.
* **Disable Weapon Shooting**: Blocks firing weapons and prevents aiming.
* **Vehicle Protections**: Disables vehicle damage, punctures, and engine breakdowns.
* **Speed Limiter**: Enforces a maximum driving speed (e.g. 50 km/h) inside hospital or car meet zones.
* **Combat & Stealing Restrictions**: Blocks melee punches, pocket wiping, and carjacking.

### 3. Visuals & Notifications
* **Blip Settings**: Toggle map blip, change sprite icon, color, transparency, and display radius.
* **Entry / Exit Notifications**: Customize the banner message, icon, and audio chime when players cross the boundary.
