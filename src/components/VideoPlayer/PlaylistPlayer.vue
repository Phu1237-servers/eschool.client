<template>
  <template v-for="(video, index) in videos" :key="index">
    <VideoPlayer
      v-if="video.start <= time + 10"
      :video="video"
      :index="index"
      :playing="playing"
      :muted="muted"
      :time="time"
      @updateDuration="onUpdateDuration"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
      @loadeddata="onLoadedData"
      @waiting="onWaiting"
      @playing="onPlaying"
      @timeupdate="onTimeUpdate"
      @canplay="onCanPlay"
      @canplaythrough="onCanPlayThrough"
      @statechanged="onStateChanged"
      @volumechange="onVolumeChange"
    >
    </VideoPlayer>
  </template>
  <div class="videoplayer-controls">
    <button @click="playing = !playing" class="videoplayer-controls-toggleplay">
      {{ playing ? 'pause' : 'play' }}
    </button>
    <div class="videoplayer-controls-time">
      {{ convertTimeToDuration(time) }} /
      {{ convertTimeToDuration(duration) }}
    </div>
    <VideoPlayerTrack
      :step="parseInt(duration) / 1000"
      :percentage="percentagePlayed"
      @seek="onSeek"
      class="videoplayer-controls-track"
    />
    <button @click="muted = !muted" class="videoplayer-controls-togglemute">
      {{ muted ? 'unmute' : 'mute' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { log } from 'console'
import VideoPlayer from './VideoPlayer.vue'
import VideoPlayerTrack from './VideoPlayerTrack.vue'
import { ref, toRefs } from 'vue'
const percentagePlayed = ref(0)
const time = ref(0)
const playing = ref(false)
const muted = ref(false)
const seekValue = ref(0)
const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})
const { course } = toRefs(props)
let videos = course.value.videos
const duration = ref(0)
function updateDuration() {
  duration.value = 0
  videos.forEach((video) => {
    let start = duration.value !== 0 ? duration.value + 0.001 : 0
    let end = duration.value + video.duration
    video.start = start
    video.end = end
    duration.value = end
  }, 0)
}
updateDuration()

// Re-update duration after video loaded for better accuracy
function onUpdateDuration({ index, videoDuration }) {
  videos[index].duration = videoDuration
  updateDuration()
}
function onPlay() {
  playing.value = true
}
function onPause({ index }) {
  if (time.value > videos[index].end) return
  if (seekValue.value !== -1) {
    time.value = (seekValue.value / 100) * duration.value
    playing.value = true
    seekValue.value = -1
    return
  }

  playing.value = false
}
function onEnded({ index }) {
  if (index + 1 < videos.length) {
    time.value = videos[index + 1].start
    playing.value = true
  }
}
function onLoadedData(event) {
  console.log('loadeddata', event)
}
function onWaiting(event) {
  console.log('waiting', event)
}
function onTimeUpdate({ index, event }) {
  if (time.value <= videos[index].end) {
    time.value = videos[index].start + event.target.currentTime
    percentagePlayed.value = (time.value / duration.value) * 100
  }
}
function onPlaying(event) {
  console.log('playing', event)
}
function onCanPlay(event) {
  console.log('canplay', event)
}
function onCanPlayThrough(event) {
  console.log('canplaythrough', event)
}
function onStateChanged(event) {
  console.log('statechanged', event)
}
function onVolumeChange(e) {
  // console.log('volumechange', e, e.event.target.volume)
}
function onSeek(value) {
  // // console.log('seek', value)
  time.value = (value / 100) * duration.value
  playing.value = false
  seekValue.value = value
}
function convertTimeToDuration(seconds: number) {
  return [parseInt(String((seconds / 60) % 60), 10), parseInt(String(seconds % 60), 10)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1')
}
</script>
