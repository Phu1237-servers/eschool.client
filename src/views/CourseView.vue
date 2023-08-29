<template>
  <div class="flex flex-1 flex-col md:pl-64">
    <TheTopbar />

    <main class="flex-1">
      <div class="py-6">
        <BoxContainer>
          <div class="flex h-96">
            <div class="flex-1 h-full">
              <video
                class="h-full w-full bg-black"
                :src="playingVideo.download_url"
                controls="true"
                crossorigin="anonymous"
                @error="onError"
              >
                <track
                  v-if="playingVideo.subtitle_url"
                  :src="playingVideo.subtitle_url"
                  kind="subtitles"
                  srclang="en"
                  label="English"
                  default
                />
              </video>
            </div>
            <div class="flex-initial flex flex-col ml-2 border border-1 border-solid">
              <header class="p-1 text-base font-bold border-b-[1px] border-solid">Chapters</header>
              <div class="overflow-auto">
                <section
                  :class="[
                    'p-1 flex hover:bg-gray-200',
                    { 'bg-gray-200': video.id === playingVideo.id }
                  ]"
                  v-for="(video, index) in videos"
                  :key="index"
                >
                  <div class="thumbnail flex-initial max-w-[200px]">
                    <img :src="video.thumbnail" />
                  </div>
                  <div class="information flex-1 mx-2">
                    <div class="title">{{ video.name }}</div>
                    <div class="duration">{{ convertTimeToDuration(video.duration) }}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div>
            <div>It's Not Like I Like You!!</div>
          </div>
        </BoxContainer>
        <BoxContainer title="Other courses in related to the level of this course">
          <CourseGridList :data="relatedCourses" />
        </BoxContainer>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheTopbar from '@/components/TheTopbar.vue'
import BoxContainer from '@/components/Common/BoxContainer.vue'
import CourseGridList from '@/components/Common/CourseGridList.vue'
import { ref, onBeforeMount } from 'vue'
import { type Course, defaultCourse } from '@/models/Course'
import { type Video, defaultVideo } from '@/models/Video'
import { useRoute, useRouter } from 'vue-router'
const playingVideo = ref<Video>(defaultVideo)
const course = ref<Course>(defaultCourse)
const relatedCourses = ref<Array<Course>>([])
const videos = ref<Array<Video>>([])
const route = useRoute()
const router = useRouter()

onBeforeMount(async () => {
  fetch(import.meta.env.VITE_API_ENDPOINT + '/courses/' + route.params.id).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        course.value = data.data
        videos.value = data.data.videos
        playingVideo.value = data.data.videos[0]
        relatedCourses.value = data.data.related_courses
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'home' })
      })
  })
})

function convertTimeToDuration(seconds: number) {
  return [parseInt(String((seconds / 60) % 60), 10), parseInt(String(seconds % 60), 10)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1')
}
// Methods
function onError() {
  fetch(import.meta.env.VITE_API_ENDPOINT + '/courses/' + route.params.id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _method: 'PUT'
    })
  }).then((res) => {
    res.json().then((response) => {
      let data = response
      course.value = data.data
      videos.value = data.data.videos
      playingVideo.value = data.data.videos[0]
    })
  })
}
</script>
