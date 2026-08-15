---
title: Nails Saloon Installation | FWB Studio Docs
description: Install Nails Saloon on FiveM — dependencies, optional job setup, qb-clothing event, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426489" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Nails Saloon — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |


## Supported Clothing Resources

`fs_bridge` automatically detects and supports the following clothing & appearance resources out of the box:

| Resource | Status | Auto-Detected |
| --- | --- | --- |
| `illenium-appearance` | Officially Supported | Yes |
| `fivem-appearance` | Officially Supported | Yes |
| `qb-clothing` | Officially Supported | Yes |
| `skinchanger` | Officially Supported | Yes |
| `rcore_clothing` | Officially Supported | Yes |
| `crm-appearance` | Officially Supported | Yes |
| `p_appearance` | Officially Supported | Yes |
| `qs-appearance` | Officially Supported | Yes |


## Optional Job Setup (For Player-Owned Business)

Nails Saloon does not require inventory items, but if you want to run the salon as a player-owned business with society payout features:

1. Open `fs_nailssaloon/[INSTALL_ME_FIRST]`.
2. **For ESX:** Execute the `.sql` file inside `[INSTALL_ME_FIRST]/jobs/` into your server database to create the salon job and society account.
3. **For QBCore:** Copy the job definition snippet from `[INSTALL_ME_FIRST]/jobs/` and paste it into `qb-core/shared/jobs.lua`.


## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place all resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_nailssaloon`
3. Download and install `ox_lib` into your `resources/` directory.
4. **(Optional)** Complete **Optional Job Setup** if running a player-owned salon business.
5. **(QBCore Only)** Apply the optional `qb-clothing` event edit shown below if using `qb-clothing`.
6. Configure `fs_nailssaloon/config/` settings before starting.
7. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

8. Restart the server and check the console for errors.

---

## QBCore Framework Modifications *(Optional — Only For QB-Clothing Users)*

> [!IMPORTANT] Skip Notice
> Only required if you are using **`qb-clothing`**. If you are using `illenium-appearance`, `fivem-appearance`, `rcore_clothing`, or ESX, **SKIP this section**.

Add the following event handler to the bottom of `qb-clothing/client/main.lua` (only if using `qb-clothing` and make sure this event does not already exist in your script):

```lua
-- Add to the bottom of qb-clothing/client/main.lua
AddEventHandler('qb-clothing:getSkin', function(cb)
    cb(skinData)
end)
```
