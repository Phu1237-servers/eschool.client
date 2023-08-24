<template>
  <div style="width: 500px">
    <div class="bg-black" v-for="(video, index) in videos" :key="index">
      <VideoPlayer
        class="flex-1"
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
    </div>
    <PlayerControls
      :playing="playing"
      :duration="duration"
      :volume="volume"
      :cc="cc"
      :time="time"
      :playbackRate="playbackRate"
      :videos="videos"
      @play="onPlay"
      @pause="onPause"
      @changevolume="onVolumeChange"
      @cc="onCC"
    />
  </div>
</template>

<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import VideoPlayerTrack from './VideoPlayerTrack.vue'
import { ref, toRefs } from 'vue'
import PlayerControls from './PlayerControls.vue'
const percentagePlayed = ref(0)
const time = ref(0)
const playing = ref(false)
const muted = ref(false)
const volume = ref(100)
const cc = ref(true)
const playbackRate = ref(1)
const seekValue = ref(-1)
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
function onPause() {
  console.log(seekValue.value)

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
  volume.value = e
}
function onCC() {
  cc.value = !cc.value
}
function onSeek(value) {
  // // console.log('seek', value)
  time.value = (value / 100) * duration.value
  playing.value = false
  seekValue.value = value
}
</script>
