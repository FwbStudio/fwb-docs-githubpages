<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { theme } = useData()

const storeUrl = computed(
  () => theme.value.fwbLinks?.store ?? 'https://fwbstudio.tebex.io/'
)
const discordUrl = computed(
  () => theme.value.fwbLinks?.discord ?? 'https://discord.gg/WH6uQ6uFvq'
)
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="fwb-nav-actions">
        <a class="fwb-nav-btn" :href="storeUrl" target="_blank" rel="noreferrer">Store</a>
        <a class="fwb-nav-btn fwb-nav-btn--discord" :href="discordUrl" target="_blank" rel="noreferrer">Discord</a>
      </div>
    </template>
  </Layout>

  <div class="fwb-site-particles" aria-hidden="true">
    <span v-for="n in 15" :key="n" />
  </div>
</template>
