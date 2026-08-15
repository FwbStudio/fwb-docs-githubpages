<template>
  <div class="fwb-converter-wrap">

    <!-- Drop Zone -->
    <div
      v-if="!inputFile"
      class="fwb-drop-zone"
      :class="{ 'fwb-drop-zone--over': isDragOver }"
      @dragover.prevent="isDragOver = true"
      @dragleave="isDragOver = false"
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
      role="button"
      tabindex="0"
      @keydown.enter="triggerFileInput"
      @keydown.space.prevent="triggerFileInput"
    >
      <div class="fwb-drop-zone__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>
      <p class="fwb-drop-zone__label">Drop your video here</p>
      <p class="fwb-drop-zone__sub">or click to browse — supports MP4, MOV, AVI, MKV</p>
      <input
        ref="fileInputRef"
        type="file"
        accept="video/*"
        style="display:none"
        @change="handleFileInput"
      />
    </div>

    <!-- File Selected Panel -->
    <div v-if="inputFile && state !== 'done'" class="fwb-file-panel">
      <div class="fwb-file-panel__info">
        <div class="fwb-file-panel__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <div class="fwb-file-panel__meta">
          <span class="fwb-file-panel__name">{{ inputFile.name }}</span>
          <span class="fwb-file-panel__size">{{ formatSize(inputFile.size) }}</span>
        </div>
        <button class="fwb-file-panel__remove" @click="resetConverter" title="Remove file">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Progress Bar -->
      <div v-if="state === 'loading-ffmpeg' || state === 'converting'" class="fwb-progress-wrap">
        <div class="fwb-progress-bar">
          <div class="fwb-progress-bar__fill" :style="{ width: (state === 'loading-ffmpeg' ? 0 : progress) + '%' }"></div>
          <div v-if="state === 'loading-ffmpeg'" class="fwb-progress-bar__indeterminate"></div>
        </div>
        <p class="fwb-progress-label">{{ progressLabel }}</p>
      </div>

      <!-- Error -->
      <div v-if="state === 'error'" class="fwb-converter-error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-error__icon">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span>{{ errorMsg || 'Conversion failed. Try a smaller file or different format.' }}</span>
      </div>

      <!-- Action Buttons -->
      <div class="fwb-converter-actions">
        <button
          v-if="state === 'idle' || state === 'error'"
          class="fwb-btn fwb-btn--primary"
          @click="convert"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
          </svg>
          Convert to WEBM
        </button>
        <button
          v-if="state === 'loading-ffmpeg' || state === 'converting'"
          class="fwb-btn fwb-btn--disabled"
          disabled
        >
          <span class="fwb-btn__spinner"></span>
          {{ state === 'loading-ffmpeg' ? 'Loading engine...' : 'Converting...' }}
        </button>
      </div>
    </div>

    <!-- Done Panel -->
    <div v-if="state === 'done'" class="fwb-done-panel">
      <div class="fwb-done-panel__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      </div>
      <div class="fwb-done-panel__text">
        <p class="fwb-done-panel__title">Conversion Complete!</p>
        <p class="fwb-done-panel__filename">{{ outputName }}</p>
      </div>
      <div class="fwb-done-panel__actions">
        <a
          class="fwb-btn fwb-btn--primary"
          :href="outputUrl"
          :download="outputName"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download .webm
        </a>
        <button class="fwb-btn fwb-btn--secondary" @click="resetConverter">
          Convert Another
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

type ConvertState = 'idle' | 'loading-ffmpeg' | 'converting' | 'done' | 'error'

const state = ref<ConvertState>('idle')
const progress = ref(0)
const progressLabel = ref('')
const outputUrl = ref('')
const outputName = ref('')
const inputFile = ref<File | null>(null)
const errorMsg = ref('')
const isDragOver = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

let ffmpegInstance: any = null

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

function triggerFileInput() {
  fileInputRef.value?.click()
}

function handleDrop(e: DragEvent) {
  isDragOver.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file) selectFile(file)
}

function handleFileInput(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) selectFile(file)
}

function selectFile(file: File) {
  if (!file.type.startsWith('video/') && !file.name.match(/\.(mp4|mov|avi|mkv|webm|m4v)$/i)) {
    errorMsg.value = 'Please select a valid video file (MP4, MOV, AVI, MKV, etc.)'
    state.value = 'error'
    return
  }
  inputFile.value = file
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  progress.value = 0
}

function resetConverter() {
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
  inputFile.value = null
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  progress.value = 0
  progressLabel.value = ''
  if (fileInputRef.value) fileInputRef.value.value = ''
}

async function convert() {
  if (!inputFile.value) return

  try {
    state.value = 'loading-ffmpeg'
    progress.value = 0
    progressLabel.value = 'Loading FFmpeg engine...'
    errorMsg.value = ''

    const { FFmpeg } = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js' as any)
    const { fetchFile, toBlobURL } = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/esm/index.js' as any)

    if (!ffmpegInstance) {
      ffmpegInstance = new FFmpeg()
    }

    const ffmpeg = ffmpegInstance

    ffmpeg.on('progress', ({ progress: p }: { progress: number }) => {
      progress.value = Math.min(Math.round(p * 100), 99)
      progressLabel.value = `Converting... ${Math.min(Math.round(p * 100), 99)}%`
    })

    if (!ffmpeg.loaded) {
      const baseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm'
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      })
    }

    state.value = 'converting'
    progressLabel.value = 'Converting... 0%'

    const inputData = await fetchFile(inputFile.value)
    const inputExt = inputFile.value.name.split('.').pop() || 'mp4'
    await ffmpeg.writeFile(`input.${inputExt}`, inputData)

    await ffmpeg.exec([
      '-i', `input.${inputExt}`,
      '-c:v', 'libvpx-vp9',
      '-crf', '30',
      '-b:v', '0',
      '-c:a', 'libopus',
      '-b:a', '128k',
      '-deadline', 'realtime',
      '-cpu-used', '8',
      'output.webm'
    ])

    const data = await ffmpeg.readFile('output.webm')
    const blob = new Blob([data.buffer], { type: 'video/webm' })

    if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
    outputUrl.value = URL.createObjectURL(blob)
    outputName.value = inputFile.value.name.replace(/\.[^.]+$/, '') + '.webm'

    try { await ffmpeg.deleteFile(`input.${inputExt}`) } catch {}

    progress.value = 100
    progressLabel.value = 'Conversion complete!'
    state.value = 'done'

  } catch (err: any) {
    console.error('Conversion error:', err)
    errorMsg.value = err?.message || 'Conversion failed. Please try again with a smaller file.'
    state.value = 'error'
  }
}

onUnmounted(() => {
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
})
</script>
