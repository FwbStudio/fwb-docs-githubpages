---
title: ESX Society Commands | FWB Studio Docs
description: Commands and server console recovery tools for the ESX Society FiveM ESX resource.
---

# ESX Society — Commands

## Player command

| Command | Access | Description |
| --- | --- | --- |
| `/esx_society` | Identifier ACE | Opens the administration tablet |

Default permission:

```cfg
add_ace identifier.license:YOUR_LICENSE esx_society.admin allow
```

The command name and ACE object are editable from **Settings**. Boss menus are normally opened by job scripts or management points, not by the administration command.

## Server-console recovery

| Command | Console only | Description |
| --- | --- | --- |
| `esx_society_reconcile_wash <id> retry` | Yes | Returns a legacy money-wash row from manual review to the pending queue |
| `esx_society_reconcile_wash <id> discard` | Yes | Removes an unprovable legacy money-wash row without paying it |

These commands are only for legacy rows found in the old `crediting` state without an operation ID. Such rows are never paid automatically because a previous payout cannot be proven safely.

```text
esx_society_reconcile_wash 42 retry
```

or:

```text
esx_society_reconcile_wash 42 discard
```
