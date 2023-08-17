<template>
  <template v-for="(video, index) in videos" :key="index">
    <VideoPlayer :src="video" @addDuration="(n) => (duration += n)"> </VideoPlayer>
    <!-- <template
      v-slot:controls="{
        togglePlay,
        playing,
        percentagePlayed,
        seekToPercentage,
        // duration,
        convertTimeToDuration,
        videoMuted,
        toggleMute
      }"
    > -->
    <div class="videoplayer-controls">
      <button @click="togglePlay()" class="videoplayer-controls-toggleplay">
        {{ playing ? 'pause' : 'play' }}
      </button>
      <div class="videoplayer-controls-time">
        {{ convertTimeToDuration(time) }} /
        {{ convertTimeToDuration(duration) }}
      </div>
      <VideoPlayerTrack
        :percentage="percentagePlayed"
        @seek="1"
        class="videoplayer-controls-track"
      />
      <button @click="toggleMute()" class="videoplayer-controls-togglemute">
        {{ 1 ? 'unmute' : 'mute' }}
      </button>
    </div>
  </template>
</template>

<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import VideoPlayerTrack from './VideoPlayerTrack.vue'
// import { defineProps } from 'vue'
let time = 0
let duration = 0
let percentagePlayed = 0
let percentage = 0
const props = defineProps({
  videos: {
    type: Array<string>,
    default: () => [
      'https://public.bl.files.1drv.com/y4mYHnPXXfRIXpfWmxbFS5C7oXulF0otdIhWMgMsIdckjLACDQdHC1zdJjGaXvOSmEVhMMkEirz3_T-HExZLAXOL4dxH-8wMnnpEIdHaObCXtAq4Fn22T0Ykx6vgxPrSSm0OuX25YQhbsdyJ5EnBnC6tn5YzMjQaGRuhgJZnkfdMbGwoUhlxj6FnqgMdjII0VPaYUuO5q2aAExqeJOs_uJBZ3Eh8iOO6Wk6CWOqjbOOV0_vxCpblJO86F7DJCmdOyZH',
      'https://public.bl.files.1drv.com/y4mGoP6uzEWm0eHIDhXbJr6cfrfVNnDDz0WaiEcvRPESntz87PDypVYVEbxjgWWNTb-gdqCdS62WwKkdQyCHUxzl6WQHufv3M8r4D5EmJw3vuAADd7w0IIBm2ugufgRuChoDRkuLCM9P_mnNlso4VUfZ0UaGpYieIdMZoRPVbXK03Cuhvoe3EmXQxqYB7vfYMBvDPMuqs8ohXzQ-EbF3Yb_LV8uZC8lGuoW4ugiZzNgs0zwFLkw_w8n9I4GsU1_VZ0Q'
    ]
  }
})

function convertTimeToDuration(seconds) {
  return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1')
}
</script>
