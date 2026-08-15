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
      <p class="fwb-drop-zone__sub">Supports MP4, MOV, AVI, MKV — max size 500 MB</p>
      <input
        ref="fileInputRef"
        type="file"
        accept="video/*"
        style="display:none"
        @change="handleFileInput"
      />
    </div>

    <!-- Active File Panel -->
    <div v-if="inputFile && state !== 'done'" class="fwb-file-panel">
      <!-- File Metadata Card -->
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
        <button
          v-if="state === 'idle' || state === 'error' || isOver500MB"
          class="fwb-file-panel__remove"
          @click="resetConverter"
          title="Clear file selection"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Hard Limit Block Banner (> 500 MB) -->
      <div v-if="isOver500MB" class="fwb-converter-error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-error__icon">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div class="fwb-converter-error__content">
          <strong>File Size Exceeds Limit ({{ formatSize(inputFile.size) }}):</strong>
          <p>
            The browser converter limit is <strong>500 MB</strong> to prevent browser tab memory crashes.
            FiveM loading screen backgrounds only need a short <strong>10–30 second video clip (&lt; 50 MB)</strong>.
            Please trim your video clip first.
          </p>
        </div>
      </div>

      <!-- Advisory Notice for 150MB - 500MB files -->
      <div v-else-if="isLargeFile && state === 'idle'" class="fwb-converter-warning">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-warning__icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <strong>Video Size ({{ formatSize(inputFile.size) }}):</strong>
          FiveM loading screens work best with short clips (&lt; 50 MB). Conversion for this video may take a couple of minutes depending on your computer speed.
        </div>
      </div>

      <!-- Real-Time Active Step Progress Card -->
      <div v-if="state !== 'idle' && state !== 'error' && !isOver500MB" class="fwb-progress-card">
        <div class="fwb-progress-header">
          <div class="fwb-progress-title">
            <span class="fwb-progress-spinner"></span>
            <strong>{{ stageTitle }}</strong>
          </div>
          <div class="fwb-progress-percent">{{ progressPercent }}%</div>
        </div>

        <!-- Real Step Progress Bar -->
        <div class="fwb-progress-bar">
          <div class="fwb-progress-bar__fill" :style="{ width: progressPercent + '%' }"></div>
        </div>

        <!-- Live Step Details & Dual Timers -->
        <div class="fwb-progress-meta">
          <span class="fwb-progress-desc">{{ stageDetail }}</span>
          <div class="fwb-progress-timers">
            <span class="fwb-progress-live">⏱️ Elapsed: {{ elapsedTime }}</span>
            <span v-if="etaTime" class="fwb-progress-live fwb-progress-live--eta">⏳ ETA: ~{{ etaTime }}</span>
          </div>
        </div>
      </div>

      <!-- General Error Message -->
      <div v-if="state === 'error' && !isOver500MB" class="fwb-converter-error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-error__icon">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div class="fwb-converter-error__content">
          <strong>Conversion Error:</strong>
          <p>{{ errorMsg }}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="fwb-converter-actions">
        <!-- If over 500MB, show Clear button only -->
        <button
          v-if="isOver500MB"
          class="fwb-btn fwb-btn--secondary"
          @click="resetConverter"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear Selection & Choose Smaller Video
        </button>

        <!-- Normal Convert Button -->
        <button
          v-else-if="state === 'idle' || state === 'error'"
          class="fwb-btn fwb-btn--primary"
          @click="convert"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
          </svg>
          Convert to WEBM
        </button>

        <!-- In-Progress Disabled Button -->
        <button
          v-else
          class="fwb-btn fwb-btn--disabled"
          disabled
        >
          <span class="fwb-btn__spinner"></span>
          Converting in browser (Please keep tab open)...
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
        <p class="fwb-done-panel__filename">{{ outputName }} (Converted in {{ elapsedTime }})</p>
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
import { ref, computed, onUnmounted } from 'vue'

type ConvertState = 'idle' | 'converting' | 'done' | 'error'

const state = ref<ConvertState>('idle')
const progressPercent = ref(0)
const stageTitle = ref('')
const stageDetail = ref('')
const elapsedTime = ref('00:00')
const etaTime = ref('')
const outputUrl = ref('')
const outputName = ref('')
const inputFile = ref<File | null>(null)
const errorMsg = ref('')
const isDragOver = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

let timerInterval: any = null
let conversionStartTime = 0
let activeVideoElement: HTMLVideoElement | null = null
let activeMediaRecorder: MediaRecorder | null = null

// Strict limit: > 500 MB
const isOver500MB = computed(() => {
  return (inputFile.value?.size || 0) > 500 * 1024 * 1024
})

// Advisory notice: > 150 MB and <= 500 MB
const isLargeFile = computed(() => {
  const sz = inputFile.value?.size || 0
  return sz > 150 * 1024 * 1024 && sz <= 500 * 1024 * 1024
})

function formatSize(bytes: number): string {
  if (!bytes) return '0 B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

function formatTimer(totalSec: number): string {
  const mins = String(Math.floor(totalSec / 60)).padStart(2, '0')
  const secs = String(totalSec % 60).padStart(2, '0')
  return `${mins}:${secs}`
}

function startTimer() {
  conversionStartTime = Date.now()
  clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    const totalSec = Math.floor((Date.now() - conversionStartTime) / 1000)
    elapsedTime.value = formatTimer(totalSec)
  }, 500)
}

function stopTimer() {
  clearInterval(timerInterval)
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
  if (!file.type.startsWith('video/') && !file.name.match(/\.(mp4|mov|avi|mkv|webm|m4v|wmv|flv)$/i)) {
    errorMsg.value = 'Please select a valid video file (MP4, MOV, AVI, MKV, etc.)'
    state.value = 'error'
    return
  }

  inputFile.value = file
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  progressPercent.value = 0
  etaTime.value = ''
}

function resetConverter() {
  stopTimer()
  cleanupActiveTranscoder()
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
  inputFile.value = null
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  progressPercent.value = 0
  stageTitle.value = ''
  stageDetail.value = ''
  elapsedTime.value = '00:00'
  etaTime.value = ''
  if (fileInputRef.value) fileInputRef.value.value = ''
}

function cleanupActiveTranscoder() {
  if (activeMediaRecorder && activeMediaRecorder.state !== 'inactive') {
    try { activeMediaRecorder.stop() } catch {}
  }
  activeMediaRecorder = null
  if (activeVideoElement) {
    activeVideoElement.pause()
    if (activeVideoElement.src) URL.revokeObjectURL(activeVideoElement.src)
    activeVideoElement.remove()
  }
  activeVideoElement = null
}

// Convert video to WebM using native browser hardware encoding
function convertVideoNative(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    cleanupActiveTranscoder()

    const video = document.createElement('video')
    activeVideoElement = video
    video.muted = true
    video.playsInline = true
    video.autoplay = false
    video.preload = 'auto'
    video.src = URL.createObjectURL(file)

    video.onloadedmetadata = () => {
      const duration = video.duration || 1
      stageTitle.value = 'Transcoding to WebM (Hardware Accelerated)'
      stageDetail.value = `Processing frames... (00:00 / ${formatTimer(Math.round(duration))})`

      const stream = (video as any).captureStream
        ? (video as any).captureStream()
        : (video as any).mozCaptureStream
        ? (video as any).mozCaptureStream()
        : null

      if (!stream) {
        reject(new Error('Browser does not support stream capture.'))
        return
      }

      // Check supported WebM codecs
      let mimeType = 'video/webm;codecs=vp9,opus'
      if (typeof MediaRecorder !== 'undefined') {
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'video/webm;codecs=vp8,opus'
        }
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'video/webm'
        }
      }

      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 4500000 // 4.5 Mbps crisp 1080p quality
      })
      activeMediaRecorder = recorder

      const chunks: Blob[] = []
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data)
      }

      recorder.onstop = () => {
        const finalBlob = new Blob(chunks, { type: 'video/webm' })
        resolve(finalBlob)
      }

      recorder.onerror = (e) => reject(e)

      video.ontimeupdate = () => {
        const cur = video.currentTime || 0
        const pct = Math.min(Math.round((cur / duration) * 100), 99)
        progressPercent.value = pct
        stageDetail.value = `Processed: ${formatTimer(Math.round(cur))} / ${formatTimer(Math.round(duration))} (${pct}%)`

        // Accurate live ETA calculation
        const elapsedSec = (Date.now() - conversionStartTime) / 1000
        if (pct > 2 && elapsedSec > 1) {
          const totalEstimatedSec = elapsedSec / (pct / 100)
          const remainingSec = Math.max(1, Math.round(totalEstimatedSec - elapsedSec))
          etaTime.value = formatTimer(remainingSec)
        }
      }

      video.onended = () => {
        progressPercent.value = 100
        stageTitle.value = 'Finalizing .webm Download...'
        stageDetail.value = 'Encoding complete.'
        etaTime.value = '00:00'
        if (recorder.state !== 'inactive') {
          recorder.stop()
        }
      }

      // Fast forward playback for faster-than-realtime encoding if supported
      try {
        video.playbackRate = 2.0 // 2x speed for faster transcoding
      } catch {}

      recorder.start(100)
      video.play().catch((err) => reject(err))
    }

    video.onerror = () => {
      reject(new Error('Browser could not decode this video format.'))
    }
  })
}

async function convert() {
  if (!inputFile.value || isOver500MB.value) return

  state.value = 'converting'
  progressPercent.value = 1
  stageTitle.value = 'Initializing Hardware Video Encoder...'
  stageDetail.value = 'Preparing video stream...'
  etaTime.value = 'Calculating...'
  errorMsg.value = ''
  startTimer()

  try {
    const outputBlob = await convertVideoNative(inputFile.value)

    if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
    outputUrl.value = URL.createObjectURL(outputBlob)
    outputName.value = inputFile.value.name.replace(/\.[^.]+$/, '') + '.webm'

    progressPercent.value = 100
    stopTimer()
    cleanupActiveTranscoder()
    state.value = 'done'

  } catch (err: any) {
    stopTimer()
    cleanupActiveTranscoder()
    console.error('Conversion error:', err)
    errorMsg.value = err?.message || 'Conversion failed. Please try a different video format or smaller file.'
    state.value = 'error'
  }
}

onUnmounted(() => {
  stopTimer()
  cleanupActiveTranscoder()
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
})
</script>
