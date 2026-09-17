---
title: ESX Society Common Errors & FAQ | FWB Studio Docs
description: Troubleshoot ESX Society installation, ACE access, targets, accounts, legacy job refresh, garage datastore, money wash, and logging on FiveM ESX servers.
---

# ESX Society — Common Errors & FAQ

## The administration command says I do not have permission

::: danger Cause
The current player's license identifier does not have the configured ACE object.
:::

::: tip Solution
Copy the exact identifier line shown on the permission screen into `server.cfg`, then restart:

```cfg
add_ace identifier.license:YOUR_LICENSE esx_society.admin allow
```

ACE protects only the administrator tablet. Boss access comes from the player's live ESX job and boss grade.
:::

## ESX job refresh is unavailable

The running framework exposes neither a callable `ESX.RefreshJob()` nor `ESX.RefreshJobs()`, and no working compatibility handler is installed.

Follow [Manual refresh compatibility](./installation#manual-refresh-compatibility) for older ESX versions. On current ESX, check framework startup errors and update ESX Society: its detector supports ordinary Lua functions and callable cross-resource references.

## The old worker permission error still appears

Automatic ESX patching is disabled. Errors mentioning `Legacy ESX worker unavailable`, `add_unsafe_worker_permission`, or `--allow-worker` come from older code still being loaded.

Update the complete resource, run `refresh` and `restart esx_society`, and verify the active resource folder if a new error appears. Do not grant worker permissions. Use the [manual handler](./installation#manual-refresh-compatibility) if your framework lacks refresh APIs.

## No supported target provider is running

::: danger Cause
Neither `ox_target` nor `qb-target` was started before `esx_society`, or the selected provider is unavailable.
:::

::: tip Solution
Install and start one target resource first; `ox_lib` and `ox_inventory` do not replace a target resource. Select **Auto** or the matching provider in **Bridge**, then restart `esx_society` so connected clients rebuild their targets.
:::

## The society account is unavailable or remains at zero

::: danger Cause
`esx_addonaccount` was not started first, its database table is missing, or the database user could not create the shared account.
:::

::: tip Solution
Start `esx_addonaccount` before `esx_society`, verify its SQL is installed, and confirm that the `society_<job>` shared account exists. Restart to synchronize the ESX jobs again.
:::

## Garage callbacks fail or return no vehicles

::: danger Cause
`esx_datastore` is missing, started too late, or the registered datastore name does not exist.
:::

::: tip Solution
Start `esx_datastore` before the job resource and `esx_society`. Register the society with the correct datastore name, normally `society_<job>`. This resource keeps the original datastore-based garage behavior.
:::

## A newly assigned grade resets after restart

::: danger Cause
A delayed ESX bulk save can overwrite a newer job mutation when the database account cannot install the player-state revision trigger.
:::

::: tip Solution
Grant the database user `TRIGGER` permission, restart, and confirm that `esx_society_guard_player_state` is installed. Online money and job mutations fail closed when this guard cannot be verified.
:::

## Discord or FiveManage logs do not arrive

::: danger Cause
The provider is incomplete: the Discord URL is missing, `fmsdk` is not running, or the custom bridge reports unavailable.
:::

::: tip Solution
Select the intended provider in **Logs**. Add a valid Discord webhook, or start and configure `fmsdk`. For custom logging, implement `bridge/logging/custom/server.lua` and make `available()` return `true` only while ready.
:::

## A legacy money-wash row requires manual review

::: danger Cause
The old row was found in `crediting` state without an operation ID. A previous payout cannot be proven safely.
:::

::: tip Solution
Review the row and use one server-console command:

```text
esx_society_reconcile_wash <id> retry
esx_society_reconcile_wash <id> discard
```
:::

## Can I run the original `esx_society` too?

No. This resource is the replacement and must own the exact `esx_society` folder and resource name.

## Does this resource manage stock inventories?

No. The registration `inventory` argument is retained as compatibility metadata. Use a dedicated stock resource for item storage.

## Need more help?

Join the [FWB Studio Discord](https://discord.gg/fwbstudio) and include the full server-console error, ESX version, and selected providers.
