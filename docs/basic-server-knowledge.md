# Basic Server Knowledge

This page is a short FiveM server basics guide. It is not FWB-specific. Use it when you are setting up or cleaning up a normal FiveM server.

## 1. What you need first

A working FiveM server usually needs:

- a VPS or local machine that can run FXServer
- the FiveM server artifacts build
- a `server.cfg`
- a MySQL / MariaDB database for most frameworks
- a framework (`ESX`, `QBCore`, or `Qbox`)
- core libs such as `oxmysql` and often `ox_lib`

If those pieces are missing or half-installed, most paid scripts will fail even when the script itself is fine.

## 2. Keep your `resources` folder organized

Use clear groups so start order is easy to read:

```text
resources/
├── [framework]
├── [standalone]
├── [voice]
├── [inventory]
└── [fs]
```

Put related resources together. Avoid dumping every script into one flat folder.

## 3. Understand `server.cfg` start order

Resources should start in dependency order.

Typical safe order:

1. `oxmysql` / database connector
2. framework (`es_extended`, `qb-core`, or `qbx_core`)
3. inventories, appearance, target, voice, and other shared libs
4. `ox_lib` if your stack uses it
5. job scripts, MLOs, and other gameplay resources

Wrong start order is one of the most common FiveM setup problems.

## 4. Edit configs with a real code editor

Use VS Code, Notepad++, or another editor that keeps formatting clean.

Avoid editors that can:

- break Lua quotes
- save the wrong encoding
- turn dashes into fancy characters

One bad config save can make a whole resource fail on boot.

## 5. Database and SQL

Many frameworks and scripts need SQL.

General flow:

1. open your database tool (HeidiSQL, phpMyAdmin, etc.)
2. select the server database
3. import the SQL file once
4. confirm tables exist before starting the resource

Do not import the same SQL over and over unless the docs say it is safe.

## 6. Keymaster / license / artifact basics

For most live servers:

- use a clean FXServer artifact build
- keep your server license key valid
- claim purchased assets on Cfx.re Keymaster when required
- restart the server after adding newly claimed resources

Missing license or wrong artifact version can look like a “script bug” when the server itself is the problem.

## 7. Restart the right way

After framework, inventory, database, or escrow changes, do a full server restart.

Restarting one resource is fine for small config tweaks, but first-time setup is safer with a full reboot so detection and caches refresh cleanly.

## 8. Always check both logs

When something fails:

- client: press `F8`
- server: check the live console / txAdmin console

Looking at only one side often hides the real error.

## 9. Healthy install checklist

Before you blame a script, confirm:

- framework starts with no errors
- database connection works
- inventory and target start correctly
- `server.cfg` ensure order makes sense
- the resource folder name matches what docs expect
- you imported required SQL
- you restarted after the install

If the base server is unstable, paid scripts will look broken even when they are not.
