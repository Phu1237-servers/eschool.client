<template>
  <div class="px-4 sm:px-6 md:px-0">
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
  </div>
  <div class="px-4 sm:px-6 md:px-0">
    <!-- Replace with your content -->
    <div class="py-4">
      <div class="h-96 rounded-lg border-4 border-dashed border-gray-200" />
    </div>
    <!-- /End replace -->
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
      time: 0,
      categories: [],
      courses: []
    }
  },
  beforeMount() {
    fetch('http://your-video-api.test/api/categories').then((response) => {
      // fetch('http://localhost:8001/api/categories').then((response) => {
      response.json().then((data) => {
        this.categories = data
        this.courses = []
        this.categories.forEach((category) => {
          this.courses.push(...category.courses)
        })
      })
    })
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
