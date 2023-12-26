<template>
  <div class="flex-grow flex flex-col">
    <section id="header" class="bg-indigo-dark-gradient pt-4 md:p-8 lg:pb-10 text-white">
      <div
        id="course-container"
        class="container mx-auto flex flex-wrap flex-col-reverse lg:flex-row lg:flex-no-wrap p-4 lg:p-0 relative bg-transparent"
        style="
          background-image: url('https://vueschool.io/storage/media/818121f696debe28debfb265f8dc4c16/vuejs-3-master-class-transparent.png');
        "
      >
        <div class="w-full md:w-1/2 flex-no-shrink z-20 lg:pt-24">
          <h1
            title="{{ course.name }} Course"
            class="font-normal mb-3 md:mb-6 text-2xl lg:text-4xl"
          >
            {{ course.name }}
          </h1>
          <p class="md:text-lg leading-normal tracking-wide lg:pr-12">
            {{ course.description }}
          </p>
          <div class="mt-4 sm:mt-8 md:mt-10 lg:mt-10 md:pt-4 flex-no-shrink">
            <ul class="list-reset flex flex-wrap">
              <li class="mr-4">
                <router-link
                  :to="{ name: 'lessons.show', params: { id: course.id } }"
                  :title="'Go to the first lesson: ' + (videos.length ? videos[0].name : '')"
                  class="btn flex btn-green-gradient"
                  ><i class="fas fa-graduation-cap"></i>
                  Start Course
                </router-link>
              </li>
              <li>
                <div>
                  <a href="#" :title="'Follow ' + course.name" class="btn shadow-none text-white"
                    ><i class="far fa-star"></i>
                    Follow
                  </a>
                  <p class="text-sm text-grey" style="display: none">
                    You will receive a notification to your email when a new lesson is published.
                  </p>
                </div>
              </li>
            </ul>
            <ul
              class="stats list-reset flex justify-between md:justify-start text-lg md:text-xl text-shadow mt-3 md:mt-6"
            >
              <li class="mr-3">{{ videos.length }} lessons</li>
              <li class="mr-3">{{ course.category?.name }}</li>
            </ul>
          </div>
        </div>
        <div class="course-header-image-wrapper mb-4 md:hidden">
          <img
            src="https://vueschool.io/storage/media/818121f696debe28debfb265f8dc4c16/vuejs-3-master-class-transparent.png"
            alt="Illustration image of The Vue.js 3 Masterclass"
            title="Learn Vue.js with The Vue.js 3 Masterclass"
            class="w-full"
          />
        </div>
      </div>
    </section>
    <section
      class="container p-4 flex-col-reverse md:flex-row lg:px-0 mx-auto flex flex-wrap justify-between py-6 md:py-12"
    >
      <div class="w-full lg:w-3/5">
        <div class="flex flex-col-reverse md:flex-col">
          <div>
            <h2
              title="Read the description of {{ course.name }} course"
              class="text-xl md:text-2xl font-normal mb-4"
            >
              About the {{ course.name }}
            </h2>
            <div class="text md:text-lg">
              <p>{{ course.description }}</p>
            </div>
          </div>
          <div id="chapters" class="mt-12 lg:max-w-full md:max-w-md md:mx-auto">
            <div class="chapter">
              <div class="flex justify-between items-center flex-wrap">
                <div class="w-full flex flex-wrap md:flex-no-wrap justify-between items-center">
                  <div class="flex items-baseline max-w-32">
                    <div class="flex self-center items-baseline">
                      <div
                        class="h-8 w-8 lg:h-10 lg:w-10 mr-4 bg-white rounded-full md:text-lg font-medium flex items-center justify-center circle-0/4"
                      >
                        <span>
                          <font-awesome-icon :icon="['fas', 'book-open']" />
                        </span>
                      </div>
                    </div>
                    <h2
                      title="Getting Started is a chapter in our Vue.js course The Vue.js 3 Masterclass"
                      class="font-medium text-lg md:font-normal md:text-2xl"
                    >
                      Lessons
                    </h2>
                  </div>
                  <div
                    class="w-full pl-12 md:p-0 md:w-auto flex items-center justify-between md:justify-end"
                  >
                    <div>{{ videos.length }} lessons</div>
                    <button
                      title="Toggle chapter details"
                      class="text-green text-xl md:pl-2 lg:p-0 mx-2"
                    >
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </div>
                </div>
                <div class="w-full mt-4 lg:ml-14">
                  <div class="lesson group" v-for="(video, index) in videos" :key="index">
                    <div class="flex items-center">
                      <div class="mx-2" style="font-size: 0.7rem">
                        <router-link
                          :to="{ name: 'lessons.show', params: { id: course.id } }"
                          :title="'Watch Lesson: ' + video.name"
                          class="icon"
                        >
                          <span class="fa-stack text-green rounded-full border-8">
                            <font-awesome-icon :icon="['fas', 'play']" class="fa-stack-1x" />
                          </span>
                        </router-link>
                      </div>
                      <router-link
                        :to="{
                          name: 'lessons.show',
                          params: { id: course.id },
                          query: { chapter: video.id }
                        }"
                        :title="video.name"
                        class="title"
                      >
                        {{ video.name }}
                      </router-link>
                      <!-- <span
                        class="mx-4 text-green text-xs font-medium rounded border-2 px-1 border-green"
                        >FREE</span
                      > -->
                    </div>
                    <div>
                      <span class="time">{{ convertTimeToDuration(video.duration) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="max-w-24 mx-auto lg:m-0"></aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { type Course, defaultCourse } from '@/models/Course'
import { type Video, defaultVideo } from '@/models/Video'
import { useRoute, useRouter } from 'vue-router'
import http from '@/plugins/http'
import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const course = ref<Course>(defaultCourse)
const videos = ref<Array<Video>>([])
const route = useRoute()

onBeforeMount(async () => {
  http(import.meta.env.VITE_API_ENDPOINT + '/courses/' + route.params.id).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        course.value = data.data
        videos.value = data.data.videos
      })
      .catch((error) => {
        console.log(error)
        // router.push({ name: 'home' })
      })
  })
})

function convertTimeToDuration(seconds: number) {
  return [parseInt(String((seconds / 60) % 60), 10), parseInt(String(seconds % 60), 10)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1')
}
</script>
