---
title: Tranquilizer Configuration | FWB Studio Docs
description: In-game configuration guide for FiveM Tranquilizer script (fs_tranquilizer).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7444827" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Tranquilizer — Configuration

`fs_tranquilizer` uses a **100% In-Game NUI Dashboard**. Do not manually edit Lua config files.

Open the admin menu in-game with:

```
/fs_tranquilizer
```

---

## In-Game UI Capabilities

* **Sedation Duration & Timers**: Set base paralysis duration (in seconds/minutes) applied when a player is injected.
* **Relog & Combat-Logging Protection**: Enable or disable database persistence of remaining sedation time across disconnects.
* **Hospital Recovery Beds**: Add, edit, or remove hospital recovery beds, coordinates, and waking orientation angles.
* **Ambulance Framework Detection**: Automatically auto-detects or manually locks to `wasabi_ambulance`, `qbx_medical`, `esx_ambulancejob`, or `qb-ambulancejob`.
* **Notifications & Screen Effects**: Toggle screen blur, camera wobble, and custom notify alerts during sedation.
