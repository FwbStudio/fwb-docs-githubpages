---
title: Interact Integrations | FWB Studio Docs
description: Use Interact with ox_target, qb-target or qtarget on FiveM, or let Target Replacement take their place so scripts made for them run on Interact. ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact — Integrations

Interact works with your target resource in two ways. Pick the one that fits your server.

| | Next to your target | Target Replacement |
| :--- | :--- | :--- |
| **Your target** (`ox_target`, `qb-target`, `qtarget`) | Stays installed | Deleted |
| **Scripts made for Interact** | Press E or target, as you choose in `/fwb_interact` | Press E or Interact’s own target, as you choose in `/fwb_interact` |
| **Scripts made for ox_target / qb-target / qtarget** | Keep using your target | Run on Interact without changes: press E or Interact’s own target, as you choose in `/fwb_interact` |
| **Setup** | Nothing to do | Turn on one line in `fxmanifest.lua` |

---

## Next to your target

This is how Interact runs out of the box. Keep `ox_target`, `qb-target` or `qtarget` installed and started.

- Scripts made for Interact show the dot and `[E]` prompt, or hand their spots to your target when they are set to target.
- Every other script keeps using your target exactly as before.

Nothing else is needed.

---

## Target Replacement

Target Replacement lets Interact take the place of `ox_target`, `qb-target` or `qtarget`. Scripts written for those targets keep calling `exports.ox_target` or `exports['qb-target']` as always. Interact answers those calls itself, so the script's options show up on Interact. You don't change anything in those scripts.

### Press E or target

You choose how those spots are used in `/fwb_interact` → **General** → **How spots are used**. It is saved on the server and applies to everyone live.

| Choice | What players do |
| :--- | :--- |
| **Press E** (default) | Walk up to the dot, look at it, press `E`. Several options show as a list: mouse wheel or arrow keys pick. |
| **Target** | Interact's own target, because no ox_target / qb-target runs any more. The dot turns into an eye box when you are close enough. Hold `ALT`: an eye shows in the middle of the screen. Aim at the thing and its options show as a list next to the eye. **Left click**: the mouse cursor appears, then click any option to run it. Right click or `Esc` closes the list. Shooting and punching are blocked while `ALT` is held. Players can change the key in GTA **Settings → Key Bindings → FiveM → Target eye (hold)**. |

Turn on **Players can choose** under it, and every player can pick press E or target for themselves on their **Keys** tab. They start on the admin's choice, and their pick only changes their own game.

This is the same for every script on the server, made for Interact or for a target: Interact decides, not the script.

### How far the dot shows

For these scripts, **Dot range** in `/fwb_interact` → **General** is counted on top of where the option can be used, so the dot always shows before the player is in reach:

| Option usable from | Dot range | Dot shows from |
| :--- | :--- | :--- |
| `distance = 2.0` (set by the script) | 3.0 m | 5.0 m |
| no `distance` (uses **Use distance**, 1.5 m) | 3.0 m | 4.5 m |

Models, bones and global vehicles / peds / objects / players use **Range on models** the same way. Pressing E or the target eye still only works from the use distance.

### Turn it on

1. **Delete the target resource** (`ox_target`, `qb-target` or `qtarget`) from your resources folder, and remove its `ensure` line from `server.cfg`. Moving it into a parked folder like `[disabled]` inside `resources` is not enough: FiveM still sees it there. Move it out of `resources` completely.
2. **Open `fwb_interact/fxmanifest.lua`** and remove the `--` in front of that target's `provide` line. For ox_target:

   ```lua
   provide 'ox_target'
   -- provide 'qb-target'
   -- provide 'qtarget'
   ```

   Replacing ox_target and some scripts still use `exports.qtarget`? Turn on the `qtarget` line too: ox_target used to answer those for you.
3. **Ensure `fwb_interact` where your target was: right after your framework** (`es_extended`, `qb-core` or `qbx_core`) and before every script that uses the target. Scripts add their target options when they start, so if one starts before `fwb_interact`, its options are lost. In `server.cfg`:

   ```lua
   -- before
   ensure oxmysql
   ensure ox_lib
   ensure es_extended      -- or qb-core / qbx_core
   ensure ox_target
   ensure [scripts]

   -- after
   ensure oxmysql
   ensure ox_lib
   ensure es_extended      -- or qb-core / qbx_core
   ensure fwb_interact     -- right after the framework, before every script that uses the target
   ensure [scripts]
   ```

   Is `fwb_interact` inside a folder that starts later (for example `ensure [fwb]`)? Still add its own `ensure fwb_interact` line right after the framework. FiveM starts it there, and the later folder line skips it because it is already running.

4. **Restart the server.** Restarting only the resource is not enough, because `provide` lines are read when the server starts.

### Check that it works

- The server console prints no red or yellow `[fwb_interact]` line about `provide`.
- Walk up to something a target script added (a shop counter, an ATM, a job ped). It shows a dot, and up close the `[E]` prompt with that script's options (with **Target**: hold `ALT`, aim and click).
- With **Developer → Debug** on in `/fwb_interact`, F8 shows `answering target exports: ox_target` when you join.

### What works

**ox_target exports**

| Export | |
| :--- | :--- |
| `addSphereZone`, `addBoxZone`, `addPolyZone` | ✅ Return the zone id like ox_target |
| `removeZone`, `zoneExists` | ✅ By id or by name |
| `addModel`, `removeModel` | ✅ |
| `addEntity`, `removeEntity` | ✅ Network ids |
| `addLocalEntity`, `removeLocalEntity` | ✅ |
| `addGlobalPed`, `addGlobalVehicle`, `addGlobalObject`, `addGlobalPlayer` and their `removeGlobal…` | ✅ |
| `addGlobalOption`, `removeGlobalOption` | ✅ Every ped, vehicle and object |
| `getTargetOptions`, `disableTargeting`, `isActive` | ✅ |

Option fields: `label`, `name`, `icon`, `distance`, `bones`, `groups`, `items`, `anyItem`, `canInteract`, `onSelect`, `export`, `event`, `serverEvent`, `command`. They do the same as in ox_target. An option added again with the same `name` replaces the old one.

**qb-target and qtarget exports**

| Export | |
| :--- | :--- |
| `AddCircleZone`, `AddBoxZone`, `AddPolyZone`, `AddEntityZone`, `RemoveZone` | ✅ Height from `minZ` / `maxZ` |
| `AddTargetBone`, `RemoveTargetBone` | ✅ Vehicle bones |
| `AddTargetEntity`, `RemoveTargetEntity` | ✅ |
| `AddTargetModel`, `RemoveTargetModel` | ✅ |
| `AddGlobalPed`, `AddGlobalVehicle`, `AddGlobalObject`, `AddGlobalPlayer` and their `RemoveGlobal…` | ✅ |
| `AddGlobalType`, `RemoveGlobalType` | ✅ |
| `Ped`, `Vehicle`, `Object`, `Player` and their `Remove…` (old qtarget names) | ✅ |
| `SpawnPed`, `RemoveSpawnedPed` | ✅ |
| `AllowTargeting` | ✅ |

Option fields: `label`, `icon`, `type` + `event` (`client`, `server`, `command`, `qbcommand`), `action`, `canInteract`, `job`, `gang`, `citizenid`, `item`, `distance`. Options are removed by their `label`, like in qb-target.

**Jobs, gangs and items** are read from ESX, QBCore or Qbox, and from ox_inventory when it runs.

### What doesn't carry over

- ox_target sub menus (`menuName` / `openMenu`), `offset` and `iconColor`.
- qb-target `AddComboZone`, its `Get…Data` / `Update…Data` functions and entity outlines.
- Everything the deleted target added by itself goes with it: ox_target's built-in vehicle door options, and the zones and peds in qb-target's own `config.lua`. Add those from a script if you still need them.
- Restarting `fwb_interact` removes the spots those scripts added, just as restarting ox_target does. Restart those scripts too, or the server.

### Running fwb_interact and cr_interact together

Turn a target's `provide` line on in **only one** of them. If both have it on, `fwb_interact` answers and the console tells you which line to turn off. Scripts that `cr_interact` was told to put on a target keep their own dot and `[E]` prompt.

### Turn it off again

Put the `--` back in front of the `provide` line, add your target resource back with its `ensure` line right after your framework, and restart the server.

### Troubleshooting

| Problem | Fix |
| :--- | :--- |
| **"No such export … in resource ox_target"** | The `provide` line for that target is still off, the server was only restarted per resource, or the script starts before `fwb_interact`. Turn the line on, ensure `fwb_interact` right after your framework, and restart the server |
| **Red console line: "provide 'ox_target' is on, but ox_target is still in your resources"** | Move the target resource out of the `resources` folder (a stopped copy in `[disabled]` counts too), or put the `--` back |
| **Yellow console line: "cr_interact also has provide 'ox_target' on"** | Both Interacts have the line on. Put the `--` back in the one the message names |
| **A script won't start and says it needs ox_target** | Check that the `provide` line is on and that `fwb_interact` is ensured right after your framework, before that script |
| **An option with a job or item never shows** | Check you have that job (and grade) or item. Jobs come from ESX, QBCore or Qbox; items from ox_inventory or your framework's inventory |
| **A script's options are gone after restarting fwb_interact** | Restart that script too, or the whole server |
| **Something works with ox_target but not here** | Tell us on [Discord](https://discord.com/invite/sPqkfQHPAa) which script and which export it uses |
