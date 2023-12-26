<template>
  <div class="flex-grow flex flex-col">
    <section class="container mx-auto px-4 lg:px-0">
      <h2 class="font-normal text-xl my-4 pl-2 md:text-2xl md:my-8 lg:pl-0">
        <router-link
          :to="{ name: 'courses.show', params: { id: course.id } }"
          title="This Vue.js lesson belongs to our course: Vue.js 3 Fundamentals with the Composition API"
          class="text-purple-dark hover:text-green-dark hover:no-underline inlineflex items-center"
          ><i class="fas fa-arrow-left text-green text-lg mr-2"></i>
          {{ course.name }}
        </router-link>
      </h2>
      <div class="video-player-wrapper" ref="videoPlayerWrapper">
        <div class="bg-indigo-dark">
          <div class="vimeo-player">
            <template v-for="(video, index) in videos" :key="index">
              <video
                v-if="playingVideo.download_url === video.download_url"
                :src="playingVideo.download_url"
                style="width: 100%; height: 100%"
                :muted="true"
                :controls="true"
                :loop="true"
                :playsinline="true"
                ref="player"
                crossorigin="anonymous"
                @timeupdate="timeupdate"
                @error="onError"
              />
            </template>
          </div>
          <div class="video-controls">
            <ul>
              <li class="disabled">
                <i class="fas fa-angle-left"></i>
                <span class="label">Previous</span>
              </li>
              <li>
                <i class="fas fa-angle-double-left"></i>
                <span class="label">-10s</span>
              </li>
            </ul>
            <ul>
              <li class="speed relative">
                <span class="text-center flex items-center"
                  ><i class="fas fa-tachometer"></i> <br class="mobile-only" /><span>1x</span></span
                >
                <ul class="dropdown">
                  <li>0.75</li>
                  <li>0.85</li>
                  <li>1.00</li>
                  <li>1.25</li>
                  <li>1.50</li>
                  <li>1.75</li>
                  <li>2.00</li>
                </ul>
              </li>
              <li>
                <label class="flex items-center"
                  ><div class="fas switch">
                    <input type="checkbox" id="autoplay" />
                    <span class="slider round"></span>
                  </div>
                  <div for="autoplay" class="leading-normal">Auto Play</div></label
                >
              </li>
            </ul>
            <ul class="right">
              <li>
                <span class="label">+10s</span>
                <i class="fas fa-angle-double-right"></i>
              </li>
              <li class="">
                <span class="label">Next</span>
                <i class="fas fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-8 px-4 lg:px-0 mx-auto flex flex-wrap md:justify-between lg:py-12">
      <div class="w-full md:w-3/5 pb-8 md:pb-0 flex-no-grow">
        <h1
          title="Read the description of the Vue.js Lesson: Getting Started with Vue.js and the Composition API"
          class="text-xl xl:text-2xl font-normal mb-4"
        >
          Getting Started with Vue.js and the Composition API
        </h1>
      </div>
      <aside class="w-full md:w-2/5 flex justify-end">
        <div class="w-full mx-auto lg:m-0" style="max-width: 27rem">
          <div
            class="locked-feature relative bg-white rounded-lg mb-2 text-sm font-medium text-blue-darkest"
          >
            <div class="px-5 py-5 block text-blue-darkest">
              DOWNLOAD VIDEO
              <a
                class="px-1 inline-block font-medium text-white bg-purple-lighter text-xs ml-2 rounded hover:text-white"
              >
                HD
              </a>
            </div>
          </div>
          <div class="mt-6">
            <div>
              <div class="w-full bg-white rounded-lg pb-6 shadow-lg" id="chapter-widget">
                <div
                  class="rounded-t-lg px-4 md:px-8 py-4 text-sm"
                  style="background: rgb(246, 245, 249)"
                >
                  <a href="#" class="hover:no-underline flex items-center"
                    ><a
                      href="/courses/vue-js-fundamentals-with-the-composition-api"
                      title="Course Overview of Vue.js 3 Fundamentals with the Composition API"
                      class="hover:no-underline"
                      ><i class="fas fa-arrow-left text-green mr-1"></i>
                      {{ course.name }}
                    </a></a
                  >
                </div>
                <div class="px-4 md:px-8">
                  <div class="mt-1 flex items-center justify-between">
                    <h3 class="text-xl">{{ course.name }}</h3>
                    <span class="hidden md:inline-block text-sm">
                      {{ course.videos?.length }} lessons
                    </span>
                  </div>
                  <div class="lessons mt-6">
                    <template v-for="(video, index) in videos" :key="index">
                      <div
                        :class="[
                          'lesson leading-tight',
                          playingVideo.id === video.id ? 'watching-lesson' : ''
                          // 'watched'
                        ]"
                      >
                        <div class="flex">
                          <div class="flex justify-center items-center" style="width: 25px">
                            <i class="fas fa-play text-green"></i>
                          </div>
                          <span>
                            <a
                              href="javascript:;"
                              :title="'Go to Vue.js lesson: ' + video.name"
                              @click="
                                () => {
                                  changeVideo(video)
                                }
                              "
                            >
                              {{ video.name }}
                            </a>
                          </span>
                          <div class="flex items-center"></div>
                        </div>
                        <span>3:58</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive, computed } from 'vue'
import { type Course, defaultCourse } from '@/models/Course'
import { type Video, defaultVideo } from '@/models/Video'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from 'lodash'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.vue'
import http from '@/plugins/http'
const course = ref<Course>(defaultCourse)
const videos = ref<Array<Video>>([])
const playingVideo = ref<Video>(defaultVideo)
const route = useRoute()
import dayjs from 'dayjs'

const courseId = computed(() => {
  return route.params.id
})

onBeforeMount(async () => {
  http(import.meta.env.VITE_API_ENDPOINT + '/courses/' + courseId.value).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        course.value = data.data
        videos.value = data.data.videos
        playingVideo.value = data.data.videos[0]
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
function onError() {
  console.log('error')

  http(import.meta.env.VITE_API_ENDPOINT + '/courses/' + courseId.value, {
    method: 'PUT'
  }).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        course.value = data.data
        videos.value = data.data.videos
        playingVideo.value = data.data.videos[0]
      })
      .catch((error) => {
        console.log(error)
      })
  })
}
function changeVideo(video: Video) {
  if (playingVideo.value.id === video.id) {
    return
  }
  playingVideo.value = video
  finalWaitingTime = 0
  this.$refs.videoPlayerWrapper.$el.scrollIntoView({
    behavior: 'smooth'
  })
}
const waitingTime = 5000
let isUpdatingProgress = false
let finalWaitingTime = 0
function timeupdate() {
  let now = dayjs().valueOf()
  if (finalWaitingTime === 0) {
    finalWaitingTime = dayjs().add(waitingTime, 'ms').valueOf()
  }
  if (finalWaitingTime <= now) {
    updateProgress()
  }
}
function updateProgress() {
  if (isUpdatingProgress) {
    return
  }
  isUpdatingProgress = true
  http(import.meta.env.VITE_API_ENDPOINT + '/courses-progress/' + courseId.value, {
    method: 'PUT'
  }).then((res) => {
    isUpdatingProgress = false
    finalWaitingTime = dayjs().add(waitingTime, 'ms').valueOf()
  })
}
</script>
