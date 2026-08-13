# Supported

This page shows the frameworks and integrations that currently have public Bridge support.

## Supported Frameworks

| Framework | Status | Resource Name |
| --- | --- | --- |
| `ESX` | Officially Supported | `es_extended` |
| `QBCore` | Officially Supported | `qb-core` |
| `Qbox` | Officially Supported | `qbx_core` |

## Integration Compatibility

All integration groups below follow the same public setup rule:

* keep `selected_key = 1` for auto-detect
* only force a specific resource if support tells you to
* use overrides if your exact resource is not listed

### Ambulance

Used for downed-state and ambulance compatibility.

| Resource | Status |
| --- | --- |
| `esx_ambulancejob` | Supported |
| `wasabi_ambulance` | Supported |
| `wasabi_ambulance_v2` | Supported |
| `qb-ambulancejob` | Supported |
| `qbx_ambulancejob` | Supported |
| `ak47_ambulancejob` | Supported |
| `tk_ambulancejob` | Supported |
| `p_ambulancejob` | Supported |

### Banking

Used for society banking and bank-related helpers.

| Resource | Status |
| --- | --- |
| `okokBanking` | Supported |
| `qb-banking` | Supported |
| `Renewed-Banking` | Supported |
| `qb-management` | Supported |
| `tgg-banking` | Supported |
| `qs_banking` | Supported |
| `fd_banking` | Supported |

### Clothing

Used for clothing, appearance, and skin-related helpers.

| Resource | Status |
| --- | --- |
| `skinchanger` | Supported |
| `fivem-appearance` | Supported |
| `illenium-appearance` | Supported |
| `rcore_clothing` | Supported |
| `qb-clothing` | Supported |
| `crm-appearance` | Supported |
| `p_appearance` | Supported |
| `qs-appearance` | Supported |

### Dispatch

Used for alerts, police notifications, and dispatch integrations.

| Resource | Status |
| --- | --- |
| `cd_dispatch` | Supported |
| `ps-dispatch` | Supported |
| `qs-dispatch` | Supported |
| `tk_dispatch` | Supported |
| `rcore_dispatch` | Supported |
| `core_dispatch` | Supported |
| `wasabi_mdt` | Supported |
| `lb-tablet` | Supported |

### Inventory

Used for inventory reads, stash support, and item image helpers.

| Resource | Status |
| --- | --- |
| `ox_inventory` | Supported |
| `ak47_inventory` | Supported |
| `qs-inventory` | Supported |
| `qb-inventory` | Supported |
| `lj-Inventory` | Supported |
| `ps-inventory` | Supported |
| `pappu-inventorynp` | Supported |
| `codem-inventory` | Supported |

### Target

Used for target interaction support.

| Resource | Status |
| --- | --- |
| `ox_target` | Supported |
| `qb-target` | Supported |
| `qtarget` | Supported |

### Vehicle Keys

Used for key ownership and vehicle access support.

| Resource | Status |
| --- | --- |
| `wasabi_carlock` | Supported |
| `ak47_vehiclekeys` | Supported |
| `qs-vehiclekeys` | Supported |
| `vehicles_keys` | Supported |
| `msk_vehiclekeys` | Supported |
| `Renewed-Vehiclekeys` | Supported |
| `qbx_vehiclekeys` | Supported |
| `qb-vehiclekeys` | Supported |
| `cd_garage` | Supported |

### Vehicle Fuel

Used for fuel level support and refuel helpers.

| Resource | Status |
| --- | --- |
| `ox_fuel` | Supported |
| `msk_fuel` | Supported |
| `ti_fuel` | Supported |
| `TAM_Fuel` | Supported |
| `LegacyFuel` | Supported |
| `cdn-fuel` | Supported |
| `rcore_fuel` | Supported |
| `lyre_fuel` | Supported |
| `lc_fuel` | Supported |

### Sounds

Used for URL and positional audio support.

| Resource | Status |
| --- | --- |
| `xsound` | Supported |
| `mx-surround` | Supported |

### Phone

Used for phone and mail integrations.

| Resource | Status |
| --- | --- |
| `okokPhone` | Supported |
| `qb-phone` | Supported |
| `qs-smartphone` | Supported |
| `qs-smartphone-pro` | Supported |
| `lb-phone` | Supported |
| `gksphone` | Supported |

### Notification

Used for notify helpers.

| Resource | Status |
| --- | --- |
| `fs_notify` | Supported |
| `ox_lib` | Supported |

### Text UI

Used for text UI helpers.

| Resource | Status |
| --- | --- |
| `ox_lib` | Supported |

### Progressbar

Used for progress helper support.

| Resource | Status |
| --- | --- |
| `ox_lib` | Supported |

## Need A Custom Integration?

If your resource is not listed above:

* do not edit locked Bridge files for a normal setup
* use the [Manual Compatibility](/bridge/script-overrides) docs
* paste custom logic into your unlocked override files only
