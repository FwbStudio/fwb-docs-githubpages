---
title: Interact Common Errors | FWB Studio Docs
description: Fix common FWB Interact problems on FiveM — nothing shows, no [E] prompt, target not used, keys and the pick list, for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact — Common Errors

| Problem | Fix |
| :--- | :--- |
| **Nothing shows** | Make sure `fwb_interact` starts **before** your script, and look for `[fwb_interact]` lines in F8 (turn on **Developer → Debug** in `/fwb_interact`). An `Add…` with wrong data prints why. Check you're within range, on foot (unless the spot's `mode` says otherwise), and not looking through a wall. Try `los = false` to test |
| **The dot shows but `[E]` doesn't** | You're not close enough (`distance`), not looking near enough to it (raise **Aim help**), or every option's `canInteract` returns `false` |
| **"no target resource is running: using draw3d"** | A script (or the player) asked for target, but none of `ox_target`, `qb-target` or `qtarget` is started. The spots move onto the target as soon as one starts |
| **An option with a key isn't on its own row** | Another option on the spot has no key, so they all joined the pick list. Give every option a `key`, or `join = true` on the ones that should share E |
| **"key X is used twice on one spot"** | Two options on the same thing (maybe from two scripts) want the same key. The first keeps it |
| **"This resource must be named fwb_interact"** | Rename the folder back to `fwb_interact`: other scripts call it by that name |
| **Settings didn't change for one player** | That player picked their own value (it shows without the grey **Server** tag). They can press **Reset** on the row, or **Reset mine** in the footer |
| **The menu says "Permission access denied"** | **Players can change their own** is off and you don't have the ACE. Add the `add_ace` line it shows to `server.cfg` and restart |

---

## ❓ Q: Can I use another font?

No. The prompt uses **Barlow Condensed**, which comes with the resource. You can change its words in **Text → List hint** and on the **Target** tab.

## ❓ Q: How does the update check work?

The server checks for a newer version at most once a day and prints it in the console. The menu footer shows it too.
