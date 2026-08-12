---
title: Trap Phone v1 Common Errors | FWB Studio Docs
description: Fix common Trap Phone v1 issues on FiveM.
---


# Trap Phone v1 — Common Errors

### <mark style="color:red;">Buyer Not Avilable :</mark>

Solution: This is due to ped is spawning too far to solve this issue you can go in config and change this 
\ <mark style="color:purple;">Change this in config:</mark>

<figure><img src="https://1183961505-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FwD85x8fSbgbLtvzWMHv7%2Fuploads%2Fc0Ab8FvRzEt07Mr2VNLP%2FScreenshot%202024-04-30%20150514.png?alt=media&#x26;token=9ae4b8ac-b065-4883-9529-967c27bef4a1" alt=""><figcaption></figcaption></figure>

<mark style="color:green;">TO  This:</mark>

```
Config.Offsets = {
    [1] = { x = 0.0, y = 7.0 },
}
```
