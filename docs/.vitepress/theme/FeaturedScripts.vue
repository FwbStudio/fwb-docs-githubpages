<script setup lang="ts">
const products = [
  {
    tag: 'Top product',
    name: 'Safezone Creator',
    desc: 'Create and edit advanced safezones in-game for ESX, QBCore, and Qbox.',
    href: 'https://fwbstudio.tebex.io/'
  },
  {
    tag: 'Jobs',
    name: 'White Widow',
    desc: 'Weed shop business with processing, sales, and placeable compatibility.',
    href: 'https://fwbstudio.tebex.io/package/5847093'
  },
  {
    tag: 'Crime',
    name: 'Fraud System V2',
    desc: 'Modern fraud gameplay with fresh configs and ESX / QB packs.',
    href: 'https://fwbstudio.tebex.io/'
  },
  {
    tag: 'Crime',
    name: 'Trap Phone',
    desc: 'Burner phone crime loops that keep illegal roleplay active.',
    href: 'https://fwbstudio.tebex.io/package/5975664'
  },
  {
    tag: 'Jobs',
    name: 'Saucy Wings',
    desc: 'Full food business flow with MLO support — cook, sell, run the shop.',
    href: 'https://fwbstudio.tebex.io/'
  },
  {
    tag: 'Utility',
    name: 'Outfit Bags',
    desc: 'Placeable wardrobe bags with preview, jobs, and outfit codes.',
    href: 'https://fwbstudio.tebex.io/'
  }
]
</script>

<template>
  <section id="scripts" class="script-board">
    <div class="script-board__head">
      <p class="script-board__eyebrow">Best sellers</p>
      <h2 class="script-board__title">Scripts players actually use.</h2>
      <p class="script-board__copy">
        Featured FWB products for busy city servers. Open the store for pricing, or jump into docs when you are ready to install.
      </p>
    </div>

    <div class="script-grid">
      <a
        v-for="(item, i) in products"
        :key="item.name"
        class="script-card"
        :style="{ '--delay': `${0.08 * i}s` }"
        :href="item.href"
        target="_blank"
        rel="noreferrer"
      >
        <p class="script-card__tag">{{ item.tag }}</p>
        <h3 class="script-card__name">{{ item.name }}</h3>
        <p class="script-card__desc">{{ item.desc }}</p>
        <p class="script-card__cta">View on store →</p>
      </a>
    </div>
  </section>
</template>
