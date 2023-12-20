<template>
  <div class="track bg-black p-2">
    <div class="track-progress flex relative bg-blue-200 h-[4px]">
      <div
        class="track-seek left absolute bg-black top-[-45px] border border-solid border-white border-2"
      >
        1:12
      </div>
      <div
        class="absolute top-[-50%] w-[13px] h-[13px] top-[-4px] left-[-7px] bg-red-500 rounded-full"
      ></div>
      <div class="inline-block buffer w-[20px] h-full" @mouseover="onHoverTrack" index="1"></div>
      <div class="inline-block bg-transparent w-[2px]"></div>
      <div class="inline-block buffer w-[40px] h-full" @mouseover="onHoverTrack" index="2"></div>
      <div class="inline-block bg-transparent w-[2px]"></div>
      <div class="inline-block buffer flex-1 h-full" @mouseover="onHoverTrack" index="3"></div>
    </div>
    <div class="track-tool flex pt-2">
      <div class="flex items-center flex-1">
        <button>
          <font-awesome-icon
            v-if="playing"
            :icon="['fas', 'pause']"
            size="xl"
            @click="$emit('pause')"
          />
          <font-awesome-icon v-else :icon="['fas', 'play']" size="lg" @click="$emit('pause')" />
        </button>
        <font-awesome-icon :icon="['fas', 'forward-step']" size="xl" />
        <div class="flex items-center" @mouseover="onHoverVolume" @mouseleave="onHoverOutVolumn">
          <button>
            <font-awesome-icon :icon="['fas', 'volume-xmark']" size="lg" v-if="volume === 0" />
            <font-awesome-icon :icon="['fas', 'volume-low']" size="lg" v-else-if="volume <= 25" />
            <font-awesome-icon :icon="['fas', 'volume-high']" size="lg" v-else />
          </button>
          <input
            v-if="isHoverVolume"
            class="h-full"
            type="range"
            :value="volume"
            @change="onVolumeChange"
          />
        </div>
        <span>{{ convertTimeToDuration(time) }} / {{ convertTimeToDuration(duration) }}</span>
      </div>
      <div class="flex items-center text-right">
        <button class="flex items-center" @click="$emit('cc')">
          <font-awesome-icon
            :icon="['fas', 'closed-captioning']"
            size="lg"
            :class="[cc ? 'border-b-2 border-red-600' : '']"
          />
        </button>
        <button class="flex items-center">
          <font-awesome-icon :icon="['fas', 'gear']" size="lg" />
        </button>
        <button @click="$emit('pip')">
          <font-awesome-icon :icon="['far', 'window-restore']" />
        </button>
        <button class="flex items-center">
          <font-awesome-icon :icon="['fas', 'expand']" size="xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  playing: {
    type: Boolean,
    required: true
  },
  volume: {
    type: Number,
    required: true,
    default: 0
  },
  cc: {
    type: Boolean,
    required: true,
    default: false
  },
  playbackRate: {
    type: Number,
    required: true,
    default: 1
  },
  videos: {
    type: Array,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['play', 'pause', 'changevolume', 'cc', 'pip'])

const isHoverVolume = ref(false)
const trackTooltipPosition = ref({
  left: 0,
  top: 0
})
function onHoverTrack(e) {
  trackTooltipPosition.value = {
    left: e.clientX - e.target.offsetLeft,
    top: e.clientY - e.target.offsetTop
  }

  console.log(
    trackTooltipPosition.value,
    (trackTooltipPosition.value.left / e.target.clientWidth) * 100,
    e.target.clientHeight
  )
}
function onHoverVolume() {
  if (!isHoverVolume.value) {
    isHoverVolume.value = true
  }
}
function onHoverOutVolumn() {
  setTimeout(() => {
    if (isHoverVolume.value) {
      isHoverVolume.value = false
    }
  }, 1000)
}
function onVolumeChange(e) {
  emits('changevolume', Number(e.target.value))
}
function convertTimeToDuration(seconds: number) {
  return [parseInt(String((seconds / 60) % 60), 10), parseInt(String(seconds % 60), 10)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1')
}
</script>

<style lang="scss">
.track-seek {
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-color: #fff;
  }
  &.left::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    // transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-color: #fff;
    transform: rotate(135deg);
    // tra
  }
}
.track {
  color: #fff;
  input[type='range'] {
    background-color: #ccc;
    border-radius: 5px;
    accent-color: #fff;
  }
}
.track-progress .buffer {
  background-color: rgba(255, 255, 255, 0.2);
}
.track-progress {
  background-color: rgba(0, 0, 0, 0.5);
}
a:hover .b {
  display: block;
}
.track-tool svg {
  @apply mr-2 cursor-pointer;
}
</style>
