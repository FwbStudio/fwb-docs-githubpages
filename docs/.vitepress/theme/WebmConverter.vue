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

    <!-- Active File & Conversion Panel -->
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
          v-if="state === 'idle' || state === 'error'"
          class="fwb-file-panel__remove"
          @click="resetConverter"
          title="Remove file"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Large File Advisory Banner -->
      <div v-if="isLargeFile && state === 'idle'" class="fwb-converter-warning">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-warning__icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <strong>Large Video ({{ formatSize(inputFile.size) }}):</strong>
          FiveM loading screens only need short 10–30s video loops (&lt; 50 MB) for fastest player loading. Conversion in the browser may take several minutes for large files.
        </div>
      </div>

      <!-- 4-Stage Stepper -->
      <div v-if="state !== 'idle'" class="fwb-stepper">
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

      <!-- Real-Time Progress Card -->
      <div v-if="state !== 'idle' && state !== 'error'" class="fwb-progress-card">
        <div class="fwb-progress-header">
          <div class="fwb-progress-title">
            <span class="fwb-progress-spinner"></span>
            <strong>{{ progressStageTitle }}</strong>
          </div>
          <div class="fwb-progress-percent">{{ progress }}%</div>
        </div>

        <div class="fwb-progress-bar">
          <div class="fwb-progress-bar__fill" :style="{ width: progress + '%' }"></div>
        </div>

        <div class="fwb-progress-meta">
          <span class="fwb-progress-desc">{{ progressDetail }}</span>
          <span v-if="liveStats" class="fwb-progress-live">{{ liveStats }}</span>
        </div>
      </div>

      <!-- Error Card -->
      <div v-if="state === 'error'" class="fwb-converter-error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fwb-converter-error__icon">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div class="fwb-converter-error__content">
          <strong>Conversion Error:</strong>
          <p>{{ errorMsg || 'Conversion failed. Please try a smaller video file.' }}</p>
        </div>
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
          v-if="state !== 'idle' && state !== 'error'"
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
import { ref, computed, onUnmounted } from 'vue'

type ConvertState = 'idle' | 'loading-engine' | 'reading-file' | 'converting' | 'packaging' | 'done' | 'error'

const state = ref<ConvertState>('idle')
const progress = ref(0)
const progressStageTitle = ref('')
const progressDetail = ref('')
const liveStats = ref('')
const outputUrl = ref('')
const outputName = ref('')
const inputFile = ref<File | null>(null)
const errorMsg = ref('')
const isDragOver = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

let ffmpegInstance: any = null

const isLargeFile = computed(() => {
  return (inputFile.value?.size || 0) > 300 * 1024 * 1024
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
  progress.value = 0
  liveStats.value = ''
}

function resetConverter() {
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
  inputFile.value = null
  outputUrl.value = ''
  outputName.value = ''
  errorMsg.value = ''
  state.value = 'idle'
  progress.value = 0
  progressStageTitle.value = ''
  progressDetail.value = ''
  liveStats.value = ''
  if (fileInputRef.value) fileInputRef.value.value = ''
}

// Stream download with live progress
async function fetchWithProgress(
  url: string,
  mimeType: string,
  onProgress: (percent: number, loaded: number, total: number) => void
): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to load ${url}: ${response.statusText}`)
  
  const contentLength = response.headers.get('content-length')
  const total = contentLength ? parseInt(contentLength, 10) : 0
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
      if (total > 0) {
        onProgress(Math.min(Math.round((loaded / total) * 100), 99), loaded, total)
      }
    }
  }

  const blob = new Blob(chunks, { type: mimeType })
  return URL.createObjectURL(blob)
}

// Read local file with progress
function readFileWithProgress(
  file: File,
  onProgress: (percent: number, loaded: number, total: number) => void
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        onProgress(Math.min(Math.round((e.loaded / e.total) * 100), 99), e.loaded, e.total)
      }
    }
    reader.onload = () => {
      if (reader.result) {
        resolve(new Uint8Array(reader.result as ArrayBuffer))
      } else {
        reject(new Error('Failed to read file'))
      }
    }
    reader.onerror = () => reject(reader.error || new Error('File read error'))
    reader.readAsArrayBuffer(file)
  })
}

async function convert() {
  if (!inputFile.value) return

  try {
    // -------------------------------------------------------------
    // STAGE 1: Download & Initialize FFmpeg Engine
    // -------------------------------------------------------------
    state.value = 'loading-engine'
    progress.value = 0
    progressStageTitle.value = 'Stage 1 of 3: Loading WebAssembly Engine'
    progressDetail.value = 'Connecting to CDN...'
    liveStats.value = ''
    errorMsg.value = ''

    const { FFmpeg } = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js' as any)

    if (!ffmpegInstance) {
      ffmpegInstance = new FFmpeg()
    }

    const ffmpeg = ffmpegInstance

    // Track live FFmpeg transcoding output
    ffmpeg.on('log', ({ message }: { message: string }) => {
      if (message.includes('frame=') || message.includes('fps=') || message.includes('time=')) {
        const timeMatch = message.match(/time=([0-9:.]+)/)
        const fpsMatch = message.match(/fps=\s*([0-9.]+)/)
        if (timeMatch) {
          liveStats.value = `Time: ${timeMatch[1]}${fpsMatch ? ` (${Math.round(parseFloat(fpsMatch[1]))} FPS)` : ''}`
        }
      }
    })

    ffmpeg.on('progress', ({ progress: p }: { progress: number }) => {
      if (state.value === 'converting') {
        const pct = Math.max(0, Math.min(Math.round(p * 100), 99))
        progress.value = pct
        progressDetail.value = `Encoding WebM video: ${pct}%`
      }
    })

    if (!ffmpeg.loaded) {
      const baseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm'
      const ffmpegBaseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm'

      progressDetail.value = 'Downloading FFmpeg WebAssembly core (approx 31 MB)...'

      const [coreURL, wasmURL, classWorkerURL] = await Promise.all([
        fetchWithProgress(`${baseURL}/ffmpeg-core.js`, 'text/javascript', () => {}),
        fetchWithProgress(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm', (p, loaded, total) => {
          progress.value = p
          progressDetail.value = `Downloading WASM core: ${formatSize(loaded)} / ${formatSize(total)} (${p}%)`
        }),
        fetchWithProgress(`${ffmpegBaseURL}/worker.js`, 'text/javascript', () => {})
      ])

      progress.value = 100
      progressDetail.value = 'Initializing engine...'

      await ffmpeg.load({
        coreURL,
        wasmURL,
        classWorkerURL
      })
    }

    // -------------------------------------------------------------
    // STAGE 2: Read Local Video File into Memory
    // -------------------------------------------------------------
    state.value = 'reading-file'
    progress.value = 0
    progressStageTitle.value = 'Stage 2 of 3: Loading Video into Memory'
    progressDetail.value = 'Reading local file...'

    const inputData = await readFileWithProgress(inputFile.value, (p, loaded, total) => {
      progress.value = p
      progressDetail.value = `Reading video: ${formatSize(loaded)} / ${formatSize(total)} (${p}%)`
    })

    const inputExt = inputFile.value.name.split('.').pop() || 'mp4'
    const inputFileName = `input.${inputExt}`

    progress.value = 99
    progressDetail.value = 'Mounting virtual file system...'
    await ffmpeg.writeFile(inputFileName, inputData)

    // -------------------------------------------------------------
    // STAGE 3: Transcode to WebM (VP9 + Opus)
    // -------------------------------------------------------------
    state.value = 'converting'
    progress.value = 0
    progressStageTitle.value = 'Stage 3 of 3: Transcoding to WebM'
    progressDetail.value = 'Starting encoder (VP9 + Opus)...'

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
    // STAGE 4: Package Output
    // -------------------------------------------------------------
    state.value = 'packaging'
    progress.value = 100
    progressStageTitle.value = 'Preparing Download...'
    progressDetail.value = 'Extracting converted .webm file...'

    const data = await ffmpeg.readFile('output.webm')
    const blob = new Blob([data.buffer], { type: 'video/webm' })

    if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
    outputUrl.value = URL.createObjectURL(blob)
    outputName.value = inputFile.value.name.replace(/\.[^.]+$/, '') + '.webm'

    try { await ffmpeg.deleteFile(inputFileName) } catch {}
    try { await ffmpeg.deleteFile('output.webm') } catch {}

    state.value = 'done'

  } catch (err: any) {
    console.error('Conversion error:', err)
    errorMsg.value = err?.message || 'Conversion failed. Browser memory may be exceeded for very large files.'
    state.value = 'error'
  }
}

onUnmounted(() => {
  if (outputUrl.value) URL.revokeObjectURL(outputUrl.value)
})
</script>
