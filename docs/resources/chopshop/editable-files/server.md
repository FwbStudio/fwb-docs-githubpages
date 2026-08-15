---
title: Chop Shop Editable Files — Server | FWB Studio Docs
description: Open server-side editable functions and callbacks for FiveM Chop Shop script (fs_chopshop).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426482" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Chop Shop — Editable Files (Server)

Chop Shop includes unencrypted server-side functions and callbacks. Experienced developers can edit these functions to customize active police checks, framework duty checks, or integrate custom banking and society account scripts.

> [!NOTE]
> **Developer Note:** These open server functions are provided for custom framework or banking integrations (such as custom banking exports or duty scripts). Official support is not provided for third-party script modifications written inside these functions.

---

### `fs_chopshop:checkactivejobs` (Callback)

Verifies if enough active duty police officers or job members are online before allowing a player to start chopping a vehicle.

```lua
lib.callback.register('fs_chopshop:checkactivejobs', function(source, needed_jobs)
    local canchop = false
    if Framework.core == 'esx' then
        for job_name, player_count in pairs(needed_jobs) do
            if #Framework.Sharedobj.GetExtendedPlayers('job', job_name) >= player_count then
                canchop = true
                break
            end  
        end
    elseif Framework.core == 'qb' then
        local activecount = {}
        for job_name, player_count in pairs(needed_jobs) do
            activecount[job_name] = 0
            for _, v in pairs(Framework.Sharedobj.Functions.GetPlayers()) do
                local xPlayer = xPlayer(v)
                if xPlayer ~= nil then
                    if (xPlayer.PlayerData.job.name == job_name and xPlayer.PlayerData.job.onduty) then
                        activecount[job_name] = activecount[job_name] + 1
                    end
                end
            end
        end
        for job_name, player_count in pairs(needed_jobs) do
            if activecount[job_name] >= player_count then
                canchop = true
                break
            end
        end
    end
    return canchop
end)
```

* **Parameters:**
  - `source` (`number`): Player server ID.
  - `needed_jobs` (`table`): Table of required job names and minimum required player counts (from `Config.Stations[id].need_job.jobname`).
* **Return Value:** `boolean` (`true` if minimum online job count is met, `false` otherwise).
* **Use Cases:** Customize duty checks for custom duty scripts, job grade checks, or custom police alert requirements.

---

### `addSocietyMoney(job_name, money)`

Deposits funds into a job society account when business or job-restricted chop shop actions are performed.

```lua
function addSocietyMoney(job_name, money)
    if Framework.core == 'esx' then
        TriggerEvent('esx_addonaccount:getSharedAccount', 'society_' .. job_name, function(account)
            account.addMoney(money)
        end)
    elseif Framework.core == 'qb' then
        exports['qb-banking']:AddMoney(job_name, tonumber(money), 'Business Transctions')
    end
end
```

* **Parameters:**
  - `job_name` (`string`): Target job/society name (e.g. `scraper`, `mechanic`).
  - `money` (`number`): Amount of money to deposit into the society account.
* **Use Cases:** Replace default banking triggers (`esx_addonaccount` / `qb-banking`) with custom banking scripts (e.g. `okokBanking`, `Renewed-Banking`, `fd_banking`).
