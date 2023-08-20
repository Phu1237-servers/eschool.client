<template>
  <div class="app">
    <template v-for="course in courses" :key="course.id">
      <playlist-player v-if="course.videos.length > 0" :course="course" />
    </template>
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
