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
        <a class="fwb-nav-store" :href="storeUrl" target="_blank" rel="noreferrer">Store</a>
        <a
          class="fwb-nav-discord"
          :href="discordUrl"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
          title="Discord"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path
              d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.079.034c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.07.07 0 0 0-.079-.034A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.07.07 0 0 0-.041-.098 13.17 13.17 0 0 1-1.872-.892.07.07 0 0 1-.007-.117c.126-.094.252-.192.372-.292a.07.07 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .079.01c.12.1.246.198.373.292a.07.07 0 0 1-.006.117 12.3 12.3 0 0 1-1.873.892.07.07 0 0 0-.041.099c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
        </a>
      </div>
    </template>
  </Layout>

  <div class="fwb-site-particles" aria-hidden="true">
    <span v-for="n in 15" :key="n" />
  </div>
</template>
