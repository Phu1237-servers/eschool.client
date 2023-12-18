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
      <div class="video-player-wrapper">
        <div data-v-85a86954="" class="bg-indigo-dark">
          <div data-v-85a86954="" class="vimeo-player" data-vimeo-initialized="true">
            <div style="padding: 56.25% 0 0 0; position: relative">
              <VideoPlayerVue :video="playingVideo" />
            </div>
          </div>
          <div data-v-85a86954="" class="video-controls">
            <ul data-v-85a86954="">
              <li data-v-85a86954="" class="disabled">
                <i data-v-85a86954="" class="fas fa-angle-left"></i>
                <span data-v-85a86954="" class="label">Previous</span>
              </li>
              <li data-v-85a86954="">
                <i data-v-85a86954="" class="fas fa-angle-double-left"></i>
                <span data-v-85a86954="" class="label">-10s</span>
              </li>
            </ul>
            <ul data-v-85a86954="">
              <li data-v-85a86954="" class="speed relative">
                <span data-v-85a86954="" class="text-center flex items-center"
                  ><i data-v-85a86954="" class="fas fa-tachometer"></i>
                  <br data-v-85a86954="" class="mobile-only" /><span data-v-85a86954=""
                    >1x</span
                  ></span
                >
                <ul data-v-85a86954="" class="dropdown">
                  <li data-v-85a86954="">0.75</li>
                  <li data-v-85a86954="">0.85</li>
                  <li data-v-85a86954="">1.00</li>
                  <li data-v-85a86954="">1.25</li>
                  <li data-v-85a86954="">1.50</li>
                  <li data-v-85a86954="">1.75</li>
                  <li data-v-85a86954="">2.00</li>
                </ul>
              </li>
              <li data-v-85a86954="">
                <label data-v-85a86954="" class="flex items-center"
                  ><div data-v-85a86954="" class="fas switch">
                    <input data-v-85a86954="" type="checkbox" id="autoplay" />
                    <span data-v-85a86954="" class="slider round"></span>
                  </div>
                  <div data-v-85a86954="" for="autoplay" class="leading-normal">
                    Auto Play
                  </div></label
                >
              </li>
            </ul>
            <ul data-v-85a86954="" class="right">
              <li data-v-85a86954="">
                <span data-v-85a86954="" class="label">+10s</span>
                <i data-v-85a86954="" class="fas fa-angle-double-right"></i>
              </li>
              <li data-v-85a86954="" class="">
                <span data-v-85a86954="" class="label">Next</span>
                <i data-v-85a86954="" class="fas fa-angle-right"></i>
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
                    <h3 class="text-xl">Getting Started with Vue.js and the Composition API</h3>
                    <span class="hidden md:inline-block text-sm">
                      {{ course.videos?.length }} lessons
                    </span>
                  </div>
                  <div class="lessons mt-6">
                    <div class="lesson leading-tight watching-lesson watched">
                      <div class="flex">
                        <div class="flex justify-center items-center" style="width: 25px">
                          <i class="fas fa-play text-green"></i>
                        </div>
                        <span>
                          <a
                            href="/lessons/getting-started-with-vue-js-and-the-composition-api"
                            title="Go to Vue.js lesson: Getting Started with Vue.js and the Composition API"
                          >
                            Getting Started with Vue.js and the Composition API
                          </a>
                        </span>
                        <div class="flex items-center"><!----></div>
                      </div>
                      <span>3:58</span>
                    </div>
                  </div>
                  <!---->
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
import { ref, onBeforeMount } from 'vue'
import { type Course, defaultCourse } from '@/models/Course'
import { type Video, defaultVideo } from '@/models/Video'
import { useRoute, useRouter } from 'vue-router'
const playingVideo = ref<Video>(defaultVideo)
const course = ref<Course>(defaultCourse)
const videos = ref<Array<Video>>([])
const route = useRoute()

onBeforeMount(async () => {
  fetch(import.meta.env.VITE_API_ENDPOINT + '/courses/' + route.params.id).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        course.value = data.data
        videos.value = data.data.videos
        // playingVideo.value = data.data.videos[0]
        // relatedCourses.value = data.data.related_courses
      })
      .catch((error) => {
        console.log(error)
        // router.push({ name: 'home' })
      })
  })
})
</script>
