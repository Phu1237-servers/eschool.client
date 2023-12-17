<template>
  <div class="flex-grow flex flex-col">
    <section id="courses" class="py-8 px-4 lg:px-0 md:my-16">
      <div class="mx-auto container mt-8">
        <div class="flex flex-wrap pb-4 -mx-4">
          <div class="w-full px-4 mb-8 md:w-1/2 xl:w-1/3">
            <a
              href="https://vueschool.io/courses/the-vuejs-3-master-class"
              title="Click to see more details about our Vue.js Course, The Vue.js 3 Masterclass"
              class="thumb-card hover:no-underline cursor-pointer"
              ><div class="rounded-lg text-purple flex flex-col h-full justify-between">
                <div class="bg-white flex flex-col flex-grow rounded-lg justify-between">
                  <div class="relative">
                    <div class="absolute pin-t pin-l pin-r mt-6 ml-6">
                      <Badge type="secondary">FREE</Badge>
                    </div>
                    <div
                      class="thumbnail inline-block w-full rounded-t-lg h-64 md:h-44 lg:h-48"
                      style="
                        background-image: url('https://vueschool.io/storage/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg');
                      "
                    ></div>
                  </div>
                  <div class="px-4 py-4 flex flex-col flex-1 justify-between md:px-6">
                    <div>
                      <h3
                        title="The Vue.js 3 Masterclass has 157 vue.js lessons"
                        class="text-xl leading-tight tracking-normal font-normal mb-4 text-navy-blue lg:text-2xl"
                      >
                        The Vue.js 3 Masterclass
                      </h3>
                      <div class="mb-3 flex items-center text-sm text-navy-blue">
                        <img
                          src="https://vueschool.io/img/runtime.png"
                          width="20px"
                          alt="watch time"
                          class="mr-2"
                        />
                        <span class="mt-1">
                          17 hrs
                          <span class="text-iron mx-2">|</span>
                          157 lessons
                        </span>
                      </div>
                      <p class="text-sm leading-normal mb-3 mt-1">
                        Learn how to build a real-world application with Vue.js 3 in the
                        supercharged and remastered Vue.js Masterclass.
                      </p>
                    </div>
                    <div>
                      <div
                        data-test="Intermediate"
                        class="py-1 px-2 uppercase difficulty-label text-xs rounded-sm inline-flex items-center"
                      >
                        <span class="difficulty difficulty-intermediate"></span>
                        <span> Intermediate </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
      <div class="pt-4 flex flex-col items-center">
        <a
          href="https://vueschool.io/courses"
          title="Browse our Vue.js Course Catalogue"
          class="text-center block uppercase text-white hover:text-white hover:bg-pale-green-darker bg-pale-green rounded-full w-full py-4 px-8 mb-6 md:w-auto md:px-16"
          >See all our courses</a
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TheTopbar from '@/components/TheTopbar.vue'
import BoxContainer from '@/components/Common/BoxContainer.vue'
import { ref } from 'vue'
import Badge from '@/components/Common/Badge.vue'
</script>
