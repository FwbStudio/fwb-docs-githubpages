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
            Please trim your video clip first, or use a desktop tool like HandBrake.
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
          FiveM loading screens work best with short clips (&lt; 50 MB). Conversion for this video may take 1–2 minutes depending on your CPU.
        </div>
      </div>

      <!-- 4-Stage Visual Stepper -->
      <div v-if="state !== 'idle' && !isOver500MB" class="fwb-stepper">
        <div
          class="fwb-step"
          :class="{
            'fwb-step--done': currentStep > 1,
            'fwb-step--active': currentStep === 1
          }"
        >
          <div class="fwb-step__circle">
            <svg v-if="currentStep > 1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span v-else>1</span>
          </div>
          <span class="fwb-step__label">Engine</span>
        </div>

        <div class="fwb-step__line" :class="{ 'fwb-step__line--active': currentStep > 1 }"></div>

        <div
          class="fwb-step"
          :class="{
            'fwb-step--done': currentStep > 2,
            'fwb-step--active': currentStep === 2
          }"
        >
          <div class="fwb-step__circle">
            <svg v-if="currentStep > 2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span v-else>2</span>
          </div>
          <span class="fwb-step__label">Read File</span>
        </div>

        <div class="fwb-step__line" :class="{ 'fwb-step__line--active': currentStep > 2 }"></div>

        <div
          class="fwb-step"
          :class="{
            'fwb-step--done': currentStep > 3,
            'fwb-step--active': currentStep === 3
          }"
        >
          <div class="fwb-step__circle">
            <svg v-if="currentStep > 3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span v-else>3</span>
          </div>
          <span class="fwb-step__label">Transcode</span>
        </div>

        <div class="fwb-step__line" :class="{ 'fwb-step__line--active': currentStep > 3 }"></div>

        <div
          class="fwb-step"
          :class="{
            'fwb-step--done': state === 'done',
            'fwb-step--active': currentStep === 4
          }"
        >
          <div class="fwb-step__circle">
            <span>4</span>
          </div>
          <span class="fwb-step__label">Ready</span>
        </div>
      </div>

      <!-- Real-Time Active Step Progress Card -->
      <div v-if="state !== 'idle' && state !== 'error' && !isOver500MB" class="fwb-progress-card">
        <div class="fwb-progress-header">
          <div class="fwb-progress-title">
            <span class="fwb-progress-spinner"></span>
            <strong>{{ currentStepTitle }}</strong>
          </div>
          <div class="fwb-progress-percent">{{ currentStepProgress }}%</div>
        </div>

        <!-- Real Step Progress Bar -->
        <div class="fwb-progress-bar">
          <div class="fwb-progress-bar__fill" :style="{ width: currentStepProgress + '%' }"></div>
        </div>

        <!-- Live Step Details & Dual Timers -->
        <div class="fwb-progress-meta">
          <span class="fwb-progress-desc">{{ currentStepDetail }}</span>
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
          Converting (Please keep tab open)...
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

type ConvertState = 'idle' | 'loading-engine' | 'reading-file' | 'converting' | 'packaging' | 'done' | 'error'

const state = ref<ConvertState>('idle')
const currentStepProgress = ref(0)
const currentStepTitle = ref('')
const currentStepDetail = ref('')
const elapsedTime = ref('00:00')
const etaTime = ref('')
const outputUrl = ref('')
const outputName = ref('')
const inputFile = ref<File | null>(null)
const errorMsg = ref('')
const isDragOver = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

let ffmpegInstance: any = null
let timerInterval: any = null
let conversionStartTime = 0
let transcodeStartTime = 0

// Strict limit: > 500 MB
const isOver500MB = computed(() => {
  return (inputFile.value?.size || 0) > 500 * 1024 * 1024
})

// Advisory notice: > 150 MB and <= 500 MB
const isLargeFile = computed(() => {
  const sz = inputFile.value?.size || 0
  return sz > 150 * 1024 * 1024 && sz <= 500 * 1024 * 1024
})

const currentStep = computed(() => {
  switch (state.value) {
    case 'loading-engine':
      return 1
    case 'reading-file':
      return 2
    case 'converting':
      return 3
    case 'packaging':
    case 'done':
      return 4
    default:
      return 1
  }
})

function formatSize(bytes: number): string {
  if (!bytes) return '0 B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

function formatTimer(totalSec: number): string {
  const mins = String(Math.floor(totalSec / 60)).padStart(2, '0')
  const secs = String(Math.floor(totalSec % 60)).padStart(2, '0')
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
  currentStepProgress.value = 0
  etaTime.value = ''
}

function resetConverter() {
  stopTimer()
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
  inputFile.value = null
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  currentStepProgress.value = 0
  currentStepTitle.value = ''
  currentStepDetail.value = ''
  elapsedTime.value = '00:00'
  etaTime.value = ''
  if (fileInputRef.value) fileInputRef.value.value = ''
}

// Download URL with byte-by-byte progress tracking
async function fetchBlobWithProgress(
  url: string,
  mimeType: string,
  onProgress: (pct: number, loaded: number, total: number) => void
): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`)
  
  const contentLength = response.headers.get('content-length')
  const total = contentLength ? parseInt(contentLength, 10) : 31457280 // ~30MB fallback
  let loaded = 0

  const reader = response.body?.getReader()
  if (!reader) {
    const blob = await response.blob()
    return URL.createObjectURL(blob)
  }

  const chunks: Uint8Array[] = []
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) {
      chunks.push(value)
      loaded += value.length
      const pct = Math.min(Math.round((loaded / total) * 100), 99)
      onProgress(pct, loaded, total)
    }
  }

  const blob = new Blob(chunks, { type: mimeType })
  return URL.createObjectURL(blob)
}

// Read local file with real progress
function readFileWithRealProgress(
  file: File,
  onProgress: (pct: number, loaded: number, total: number) => void
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const pct = Math.min(Math.round((e.loaded / e.total) * 100), 99)
        onProgress(pct, e.loaded, e.total)
      }
    }
    reader.onload = () => {
      onProgress(100, file.size, file.size)
      resolve(new Uint8Array(reader.result as ArrayBuffer))
    }
    reader.onerror = () => reject(reader.error || new Error('Failed to read file'))
    reader.readAsArrayBuffer(file)
  })
}

async function convert() {
  if (!inputFile.value || isOver500MB.value) return

  startTimer()

  try {
    // -------------------------------------------------------------
    // STEP 1: Download & Initialize FFmpeg WebAssembly Engine (Real %)
    // -------------------------------------------------------------
    state.value = 'loading-engine'
    currentStepTitle.value = 'Step 1 of 4: Loading WebAssembly Engine'
    currentStepDetail.value = 'Downloading FFmpeg engine files (~31 MB)...'
    currentStepProgress.value = 5

    const { FFmpeg } = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js' as any)
    const { toBlobURL } = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/esm/index.js' as any)

    if (!ffmpegInstance) {
      ffmpegInstance = new FFmpeg()
    }

    const ffmpeg = ffmpegInstance

    // Listen to real-time transcoding progress from FFmpeg
    ffmpeg.on('progress', ({ progress: p }: { progress: number }) => {
      if (state.value === 'converting') {
        const pct = Math.max(0, Math.min(Math.round(p * 100), 99))
        currentStepProgress.value = pct
        currentStepDetail.value = `Encoding WebM frames: ${pct}%`

        // Dynamic ETA calculation
        if (transcodeStartTime > 0 && pct > 3) {
          const transcodeElapsedSec = (Date.now() - transcodeStartTime) / 1000
          const estimatedTotalSec = transcodeElapsedSec / (pct / 100)
          const remainingSec = Math.max(1, Math.round(estimatedTotalSec - transcodeElapsedSec))
          etaTime.value = formatTimer(remainingSec)
        }
      }
    })

    if (!ffmpeg.loaded) {
      const baseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm'
      const ffmpegBaseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm'

      const [coreURL, wasmURL, classWorkerURL] = await Promise.all([
        toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        fetchBlobWithProgress(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm', (pct, loaded, total) => {
          currentStepProgress.value = pct
          currentStepDetail.value = `Downloading WASM core: ${formatSize(loaded)} / ${formatSize(total)} (${pct}%)`
        }),
        toBlobURL(`${ffmpegBaseURL}/worker.js`, 'text/javascript')
      ])

      currentStepProgress.value = 100
      currentStepDetail.value = 'Engine initialization complete.'

      await ffmpeg.load({
        coreURL,
        wasmURL,
        classWorkerURL
      })
    }

    // -------------------------------------------------------------
    // STEP 2: Read Local Video File into Virtual FS (Real %)
    // -------------------------------------------------------------
    state.value = 'reading-file'
    currentStepTitle.value = 'Step 2 of 4: Loading Video into Memory'
    currentStepDetail.value = `Reading ${formatSize(inputFile.value.size)} into memory...`
    currentStepProgress.value = 0

    const inputData = await readFileWithRealProgress(inputFile.value, (pct, loaded, total) => {
      currentStepProgress.value = pct
      currentStepDetail.value = `Reading file: ${formatSize(loaded)} / ${formatSize(total)} (${pct}%)`
    })

    const inputExt = inputFile.value.name.split('.').pop() || 'mp4'
    const inputFileName = `input.${inputExt}`

    currentStepProgress.value = 100
    currentStepDetail.value = 'Mounting file into encoder...'
    await ffmpeg.writeFile(inputFileName, inputData)

    // -------------------------------------------------------------
    // STEP 3: Transcode to WebM (Real Frame-by-Frame %)
    // -------------------------------------------------------------
    state.value = 'converting'
    transcodeStartTime = Date.now()
    currentStepProgress.value = 0
    currentStepTitle.value = 'Step 3 of 4: Transcoding Video (VP9 + Opus)'
    currentStepDetail.value = 'Starting encoder (VP9 realtime)...'
    etaTime.value = 'Calculating...'

    await ffmpeg.exec([
      '-i', inputFileName,
      '-c:v', 'libvpx-vp9',
      '-crf', '32',
      '-b:v', '0',
      '-c:a', 'libopus',
      '-b:a', '128k',
      '-deadline', 'realtime',
      '-cpu-used', '8',
      'output.webm'
    ])

    // -------------------------------------------------------------
    // STEP 4: Package Output (Finalizing %)
    // -------------------------------------------------------------
    state.value = 'packaging'
    currentStepProgress.value = 100
    currentStepTitle.value = 'Step 4 of 4: Preparing Download'
    currentStepDetail.value = 'Generating final .webm download...'
    etaTime.value = '00:00'

    const data = await ffmpeg.readFile('output.webm')
    const blob = new Blob([data.buffer], { type: 'video/webm' })

    if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
    outputUrl.value = URL.createObjectURL(blob)
    outputName.value = inputFile.value.name.replace(/\.[^.]+$/, '') + '.webm'

    try { await ffmpeg.deleteFile(inputFileName) } catch {}
    try { await ffmpeg.deleteFile('output.webm') } catch {}

    stopTimer()
    state.value = 'done'

  } catch (err: any) {
    stopTimer()
    console.error('Conversion error:', err)
    errorMsg.value = err?.message || 'Conversion failed. Please try a smaller video file.'
    state.value = 'error'
  }
}

onUnmounted(() => {
  stopTimer()
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
})
</script>
