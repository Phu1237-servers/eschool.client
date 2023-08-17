<template>
  <div class="app">
    <playlist-player
      @play="onPlayerPlay"
      @pause="onPlayerPause"
      @ended="onPlayerEnded"
      @loadeddata="onPlayerLoadeddata"
      @waiting="onPlayerWaiting"
      @playing="onPlayerPlaying"
      @timeupdate="onPlayerTimeupdate"
      @canplay="onPlayerCanplay"
      @canplaythrough="onPlayerCanplaythrough"
      @statechanged="playerStateChanged"
    />
  </div>
</template>

<script lang="ts">
import PlaylistPlayer from '@/components/VideoPlayer/PlaylistPlayer.vue'
export default {
  components: {
    PlaylistPlayer
  },
  data() {
    return {
      time: 0
    }
  },
  methods: {
    onPlayerPlay({ event, player }) {
      console.log(event.type)
      player.setPlaying(true)
    },
    onPlayerPause({ event, player }) {
      console.log(event.type)
      player.setPlaying(false)
    },
    onPlayerEnded({ event, player }) {
      console.log(event.type)
      player.setPlaying(false)
    },
    onPlayerLoadeddata({ event }) {
      console.log(event.type)
    },
    onPlayerWaiting({ event }) {
      console.log(event.type)
    },
    onPlayerPlaying({ event }) {
      console.log(event.type)
    },
    onPlayerTimeupdate({ event }) {
      this.time = event.target.currentTime
      console.log({ event: event.type, time: event.target.currentTime })
    },
    onPlayerCanplay({ event }) {
      console.log(event.type)
    },
    onPlayerCanplaythrough({ event }) {
      console.log(event.type)
    },
    playerStateChanged({ event }) {
      console.log(event.type)
    }
  }
}
</script>

<style>
.videoplayer {
  width: 500px;
}

.videoplayer-controls {
  display: flex;
  font: 0.8em sans-serif;
  width: 100%;
}

.videoplayer-controls-toggleplay,
.videoplayer-controls-togglemute {
  flex: 1;
}

.videoplayer-controls-time {
  flex: 2;
  text-align: center;
  line-height: 2;
}

.videoplayer-controls-track {
  flex: 5;
  line-height: 2;
}
</style>
