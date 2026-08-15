---
title: Notify Special Feature — Rich Keycaps | FWB Studio Docs
description: Interactive Rich Keycap & Tag Badge formatting in FiveM Notify (fs_notify). Automatic styling for [E], [$10], item tags, and keybinds.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7464228" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Special Feature — Rich Keycaps & Badges

`fs_notify` includes a built-in formatting engine that automatically parses text enclosed in square brackets `[...]` and converts it into a **3D glass keycap badge**.

---

## 💡 How It Works

Whenever a notification message contains square brackets, the UI renders the enclosed text inside a stylized glass badge with:
* **JetBrains Mono / Cascadia Code** bold monospace font
* **Translucent glass gradient** and embossed border
* **Subtle drop shadow and inset highlight**
* **Fluid scaling** that automatically adapts to the player's custom font size and screen resolution

No complicated HTML tags or markdown syntax required — just use standard brackets `[like this]`.

---

## 🎨 Visual Preview of All Notification Types

Below is a live in-game replica of how all default notification types render when using rich keycaps and badges:

<div class="fsn-showcase-container">

  <!-- Success Preview -->
  <div class="fsn-real-card fsn-real-card--success">
    <span class="fsn-real-strip"></span>
    <span class="fsn-real-progress" style="width: 75%;"></span>
    <div class="fsn-real-inner">
      <div class="fsn-real-icon-lane">
        <span class="fsn-real-icon-ring">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.75"></circle><path d="m8.8 12.2 2.2 2.2 4.6-4.8"></path></svg>
        </span>
      </div>
      <div class="fsn-real-copy">
        <div class="fsn-real-head">
          <span class="fsn-real-title">Successful</span>
          <span class="fsn-real-time">13:30</span>
        </div>
        <p class="fsn-real-message">You successfully received <span class="fwb-rich-button">$2,500</span> cash and <span class="fwb-rich-button">5x Diamond</span>.</p>
      </div>
    </div>
  </div>

  <!-- Info Preview -->
  <div class="fsn-real-card fsn-real-card--info">
    <span class="fsn-real-strip"></span>
    <span class="fsn-real-progress" style="width: 60%;"></span>
    <div class="fsn-real-inner">
      <div class="fsn-real-icon-lane">
        <span class="fsn-real-icon-ring">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.75"></circle><path d="M12 10.3v5"></path><path d="M12 7.6h.01"></path></svg>
        </span>
      </div>
      <div class="fsn-real-copy">
        <div class="fsn-real-head">
          <span class="fsn-real-title">Information</span>
          <span class="fsn-real-time">13:30</span>
        </div>
        <p class="fsn-real-message">Press <span class="fwb-rich-button">E</span> to open the garage menu or <span class="fwb-rich-button">G</span> to park vehicle.</p>
      </div>
    </div>
  </div>

  <!-- Warning Preview -->
  <div class="fsn-real-card fsn-real-card--warning">
    <span class="fsn-real-strip"></span>
    <span class="fsn-real-progress" style="width: 45%;"></span>
    <div class="fsn-real-inner">
      <div class="fsn-real-icon-lane">
        <span class="fsn-real-icon-ring">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.2 20 18H4L12 4.2Z"></path><path d="M12 9.4v4.4"></path><path d="M12 16.2h.01"></path></svg>
        </span>
      </div>
      <div class="fsn-real-copy">
        <div class="fsn-real-head">
          <span class="fsn-real-title">Warning</span>
          <span class="fsn-real-time">13:30</span>
        </div>
        <p class="fsn-real-message">Your vehicle engine is overheating! Pull over and hold <span class="fwb-rich-button">H</span> to cool down.</p>
      </div>
    </div>
  </div>

  <!-- Error Preview -->
  <div class="fsn-real-card fsn-real-card--error">
    <span class="fsn-real-strip"></span>
    <span class="fsn-real-progress" style="width: 85%;"></span>
    <div class="fsn-real-inner">
      <div class="fsn-real-icon-lane">
        <span class="fsn-real-icon-ring">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.75"></circle><path d="m9 9 6 6"></path><path d="m15 9-6 6"></path></svg>
        </span>
      </div>
      <div class="fsn-real-copy">
        <div class="fsn-real-head">
          <span class="fsn-real-title">Error</span>
          <span class="fsn-real-time">13:30</span>
        </div>
        <p class="fsn-real-message">Access denied! You need <span class="fwb-rich-button">1x Keycard</span> to unlock the <span class="fwb-rich-button">Vault</span>.</p>
      </div>
    </div>
  </div>

</div>

---

## 💻 Code Examples for Every Type

::: code-group

```lua [🟢 Success]
-- Displays a success alert with currency and item tags
exports.fs_notify:show(
    'You successfully received [$2,500] cash and [5x Diamond].',
    'success',
    5000,
    'Successful'
)
```

```lua [🔵 Info]
-- Displays an informative keybind prompt
exports.fs_notify:show(
    'Press [E] to open the garage menu or [G] to park vehicle.',
    'info',
    5000,
    'Information'
)
```

```lua [🟡 Warning]
-- Displays a warning alert with keybind interaction
exports.fs_notify:show(
    'Your vehicle engine is overheating! Pull over and hold [H] to cool down.',
    'warning',
    6000,
    'Warning'
)
```

```lua [🔴 Error]
-- Displays an error alert with required item badge
exports.fs_notify:show(
    'Access denied! You need [1x Keycard] to unlock the [Vault].',
    'error',
    5000,
    'Error'
)
```

:::

---

## 🌟 Common Use Cases

| Use Case | Example String | Rendered Badges |
| :--- | :--- | :--- |
| **Keybind Prompts** | `'Press [E] to search or [X] to cancel'` | <span class="fwb-rich-button">E</span> & <span class="fwb-rich-button">X</span> |
| **Financial Alerts** | `'Salary deposited: [+$1,250] to bank account'` | <span class="fwb-rich-button">+$1,250</span> |
| **Inventory Actions** | `'Crafted [1x Lockpick] using [2x Scrap Metal]'` | <span class="fwb-rich-button">1x Lockpick</span> & <span class="fwb-rich-button">2x Scrap Metal</span> |
| **Dispatch Codes** | `'10-99 Panic activated near [Legion Square]'` | <span class="fwb-rich-button">Legion Square</span> |
