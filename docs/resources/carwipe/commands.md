---
title: Carwipe Commands | FWB Studio Docs
description: Admin and protected zone management commands for FiveM Carwipe script.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426481" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Carwipe — Commands

Carwipe includes chat commands for instant vehicle cleanup and interactive protected zone creation.

---

### `/carwipe`

Triggers an instant vehicle cleanup across the server.

* **Command:** `/carwipe`
* **Access:** Restricted based on admin group, job, or identifier rules defined in `config.lua`.
* **Description:** Manually initiates an immediate vehicle wipe on demand, separate from the automated timer-based car wipes. If staff need to clear abandoned cars right before a server event or race, this command instantly triggers the cleanup without waiting for the scheduled wipe timer.

---

### `/carwipezone`

Opens the protected safezone creation menu.

* **Command:** `/carwipezone`
* **Access:** Configurable in `config.lua` (allowed by admin group, job, or identifier).
* **Description:** Opens an in-game menu that allows staff or authorized job roles to create protected safe zones on the map. You can specify a custom radius for the zone, ensuring that any vehicles parked within that radius are safely excluded and exempted from all automated and manual vehicle wipes.
