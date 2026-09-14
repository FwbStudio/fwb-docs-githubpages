---
title: ESX Society Installation | FWB Studio Docs
description: Install the ESX Society replacement on a FiveM ESX server with oxmysql, es_extended, esx_addonaccount, optional targets, and automatic database setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="./configuration">Configure</a>
</div>

# ESX Society — Installation

Install this resource as the complete redesigned replacement for the standard ESX Society resource. It keeps the original resource name so existing ESX integrations can continue using their established events, callbacks, and exports.

## Dependencies

| Resource | Required | Purpose |
| --- | --- | --- |
| `oxmysql` | Yes | Database access, migrations, transactions, and pagination |
| `es_extended` | Yes | ESX jobs, grades, players, and callbacks |
| `esx_addonaccount` | Yes | Authoritative shared society balances |
| `esx_datastore` | Only for garage APIs | Stores the standard society garage array |
| `ox_target` or `qb-target` | Only for management points | Registers sphere and local-entity interactions |
| `fs_notify` or `ox_lib` | Optional | Alternative notification providers; ESX notifications work by default |
| `ox_lib` or `PolyZone` | Optional | Optional zone-engine workflows; neither is a hard dependency |
| `fmsdk` | Only for FiveManage logs | Sends administrator activity through FiveManage |

## Install steps

1. Stop and remove the existing `esx_society` resource. Only one resource may own the `esx_society` name and events.
2. Place this resource in your server resources directory and name its folder exactly `esx_society`.
3. Confirm the database user can create and alter tables. Current installations also require `TRIGGER` permission for the player-state revision guard.
4. Add the required resources in this order:

```cfg
ensure oxmysql
ensure es_extended
ensure esx_addonaccount

# Optional: required only when management access points are used
ensure ox_target # or qb-target

ensure esx_society
```

5. Give your own license identifier access to the administration tablet:

```cfg
add_ace identifier.license:YOUR_LICENSE esx_society.admin allow
```

6. Restart the server, confirm a clean startup, then open `/esx_society` in game.

## Database setup

No manual SQL import is required. The resource creates and migrates its private tables idempotently during startup. Standard ESX tables, job rows, addon accounts, and datastore records remain owned by their normal ESX resources.

Every existing ESX job is synchronized as a society on startup. If a job resource later calls the standard registration event, its explicit label, account, datastore, inventory, and data override the automatically generated registration.

### Optional manual SQL installation

The resource package does not need to include an SQL folder because startup installs and migrates the schema automatically. Administrators who prefer a reviewed manual installation can run the queries below in order.

::: details 1. Standard money-wash table — only when missing

Skip this query when `society_moneywash` already exists. It uses the original ESX Society table structure.

```sql
CREATE TABLE `society_moneywash` (
    `id` int NOT NULL AUTO_INCREMENT,
    `identifier` varchar(60) NOT NULL,
    `society` varchar(60) NOT NULL,
    `amount` int NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

:::

::: details 2. Redesigned ESX Society extension tables

These queries use `CREATE TABLE IF NOT EXISTS`, so they can be run safely on an existing installation.

```sql
CREATE TABLE IF NOT EXISTS `esx_society_financial_operations` (
    `operation_id` varchar(191) NOT NULL, `job_name` varchar(48) NOT NULL, `actor_identifier` varchar(80) NOT NULL,
    `actor_name` varchar(100) NOT NULL DEFAULT '',
    `kind` varchar(24) NOT NULL, `amount` bigint unsigned NOT NULL, `player_account` varchar(16) NOT NULL,
    `player_balance_before` bigint unsigned DEFAULT NULL, `player_balance_after` bigint unsigned DEFAULT NULL,
    `business_balance_before` bigint unsigned DEFAULT NULL, `business_balance_after` bigint unsigned DEFAULT NULL,
    `state` varchar(32) NOT NULL, `balance_after` bigint unsigned DEFAULT NULL, `error_code` varchar(48) DEFAULT NULL,
    `journaled` tinyint(1) NOT NULL DEFAULT 0, `journal_state` longtext NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`operation_id`),
    KEY `idx_esx_society_financial_job_created` (`job_name`, `created_at`),
    KEY `idx_esx_society_financial_state` (`state`, `journaled`),
    KEY `idx_management_financial_history` (`job_name`, `state`, `journaled`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `esx_society_settings` (
    `setting_key` varchar(48) NOT NULL, `setting_value` varchar(255) NOT NULL,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `esx_society_moneywash_queue` (
    `wash_id` int NOT NULL, `operation_id` varchar(191) DEFAULT NULL,
    `actor_name` varchar(100) NOT NULL DEFAULT '',
    `player_balance_before` bigint unsigned DEFAULT NULL, `player_balance_after` bigint unsigned DEFAULT NULL,
    `payout_balance_after` bigint unsigned DEFAULT NULL,
    `queued_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `ready_at` datetime NOT NULL, `duration_seconds` int unsigned NOT NULL,
    `state` varchar(16) NOT NULL DEFAULT 'pending', `claimed_at` datetime NULL DEFAULT NULL,
    PRIMARY KEY (`wash_id`), UNIQUE KEY `idx_esx_society_wash_operation` (`operation_id`),
    KEY `idx_esx_society_wash_due` (`state`, `ready_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `esx_society_moneywash_operations` (
    `operation_id` varchar(191) NOT NULL, `identifier` varchar(80) NOT NULL,
    `society` varchar(48) NOT NULL, `actor_name` varchar(100) NOT NULL DEFAULT '',
    `amount` bigint unsigned NOT NULL, `player_balance_before` bigint unsigned NOT NULL,
    `player_balance_after` bigint unsigned NOT NULL, `duration_seconds` int unsigned NOT NULL,
    `wash_id` int DEFAULT NULL, `state` varchar(16) NOT NULL DEFAULT 'prepared',
    `error_code` varchar(48) DEFAULT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`operation_id`), UNIQUE KEY `idx_esx_society_moneywash_operation_wash` (`wash_id`),
    KEY `idx_esx_society_moneywash_operation_state` (`state`, `updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `esx_society_points` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT, `framework` varchar(16) NOT NULL, `job_name` varchar(48) NOT NULL,
    `label` varchar(80) NOT NULL, `x` decimal(12,4) NOT NULL, `y` decimal(12,4) NOT NULL, `z` decimal(12,4) NOT NULL,
    `heading` decimal(7,2) NOT NULL DEFAULT 0, `radius` decimal(5,2) NOT NULL DEFAULT 0.75,
    `point_type` varchar(16) NOT NULL DEFAULT 'sphere', `model` varchar(64) DEFAULT NULL, `entity_model` bigint DEFAULT NULL,
    `all_grades` tinyint(1) NOT NULL DEFAULT 1, `grades` longtext NOT NULL, `permissions` longtext NOT NULL,
    `enabled` tinyint(1) NOT NULL DEFAULT 1, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`),
    KEY `idx_esx_society_points_framework_job` (`framework`, `job_name`, `enabled`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `esx_society_job_webhooks` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `job_name` varchar(48) NOT NULL,
    `webhook_url` varchar(255) NOT NULL,
    `events` longtext NOT NULL,
    `created_by` varchar(80) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_esx_society_job_webhooks_job` (`job_name`, `id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

:::

Manual table installation does not install the player-state revision trigger. The resource verifies and creates `esx_society_guard_player_state` during startup, so the database user still needs `TRIGGER` permission.

## Older ESX versions

Current ESX versions expose `ESX.RefreshJob()` or `ESX.RefreshJobs()` and need no additional permission.

Only when startup reports that neither API exists, temporarily add:

```cfg
add_unsafe_worker_permission esx_society
```

Restart once to let the guarded installer add the legacy refresh handler, then remove that permission and restart again. The installer accepts only known `es_extended` server files, refuses symlinks and path escapes, and creates a non-overwriting `.esx_society_backup` before changing a file.

::: danger Do not add the worker permission on current ESX
If the resource detects a supported refresh API, the worker permission is unnecessary and the permission screen will not request it.
:::

## Existing job resources

Existing ESX scripts can keep their normal society registration:

```lua
TriggerEvent('esx_society:registerSociety',
    'mechanic', 'Mechanic',
    'society_mechanic', 'society_mechanic', 'society_mechanic',
    { type = 'public' }
)
```

See [Integrations](./integrations) for the preserved callbacks and events.
