<template>
  <video
    v-show="isShowing"
    :src="video.download_url"
    :muted="muted"
    :autoplay="autoplay"
    :controls="controls"
    :loop="loop"
    :poster="poster"
    :preload="preload"
    :playsinline="true"
    :style="{
      // width: '100%',
      // height: '100vh'
    }"
    ref="player"
    crossorigin="anonymous"
  >
    <track
      v-if="video.subtitle_url"
      :src="video.subtitle_url"
      kind="subtitles"
      srclang="en"
      label="English"
      default
    />
  </video>
</template>

<script lang="ts">
const EVENTS = [
  'play',
  'pause',
  'ended',
  'loadeddata',
  'waiting',
  'playing',
  'timeupdate',
  'canplay',
  'canplaythrough',
  'statechanged',
  'volumechange'
]

export default {
  name: 'VideoPlayer',
  props: {
    time: {
      type: Number,
      required: false,
      default: 0
    },
    video: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    controls: {
      type: Boolean,
      required: false,
      default: false
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    poster: {
      type: String,
      required: false
    },
    preload: {
      type: String,
      required: false,
      default: 'auto'
    },
    playing: {
      type: Boolean,
      required: false,
      default: false
    },
    muted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    if (this.time >= this.video.start && this.time <= this.video.end) {
      this.$refs.player.currentTime = this.time - this.video.start
    }
    this.$refs.player.playbackRate = 2
    this.bindEvents()

    // if (this.$refs.player.muted) {
    // this.muted = true
    // }
  },
  emits: ['updateDuration', 'volumechange', ...EVENTS],
  computed: {
    player: function () {
      return this.$refs.player
    },
    isPlaying: function () {
      return this.playing && this.isShowing
    },
    isShowing: function () {
      // return true
      let start = this.video.start || 0
      let end = this.video.end || 0
      return start <= this.time && (end == 0 || end >= this.time)
    }
  },
  data() {
    return {
      duration: 0
    }
  },
  watch: {
    time: function () {
      if (!this.playing && this.isShowing) {
        this.player.currentTime = this.time - this.video.start
      }
    },
    isPlaying: function (newVal) {
      if (newVal) {
        this.play()
      } else {
        this.pause()
      }
    },
    muted: function (newVal) {
      if (newVal) {
        this.mute()
      } else {
        this.unmute()
      }
    }
  },
  methods: {
    bindEvents() {
      EVENTS.forEach((event) => {
        this.bindVideoEvent(event)
      })
    },

    bindVideoEvent(which) {
      const player = this.$refs.player

      player.addEventListener(
        which,
        (event) => {
          if (which === 'loadeddata') {
            this.duration = player.duration

            if (this.isPlaying) {
              console.log(
                'loadeddata',
                this.isPlaying,
                this.isShowing,
                this.time,
                this.video.start,
                this.video.end,
                this.video.duration,
                this.duration,
                this.video
              )

              this.play()
            }
            this.$emit('updateDuration', {
              index: this.index,
              videoDuration: player.duration
            })
          }

          if (which === 'play' && this.isShowing) {
            this.$refs.player.currentTime = this.time - this.video.start
          }

          this.$emit(which, { index: this.index, event, player: this })
        },
        true
      )
    },

    play() {
      this.$refs.player.play()
    },

    pause() {
      this.$refs.player.pause()
    },

    mute() {
      this.$refs.player.muted = true
    },

    unmute() {
      this.$refs.player.muted = false
    }
  }
}
</script>
