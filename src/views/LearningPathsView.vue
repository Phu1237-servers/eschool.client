<template>
  <div class="relative">
    <div class="absolute left-1/2 -ml-160 mt-56 hidden xl:block">
      <img
        src="https://vueschool.io/images/sections/learning-paths/illustration-tech-boxes-1.svg"
        alt="Tech"
      />
    </div>
    <div class="absolute left-1/2 bottom-0 ml-144 mb-4 hidden xl:block">
      <img
        src="https://vueschool.io/images/sections/learning-paths/illustration-tech-boxes-2.svg"
        alt="Tech"
      />
    </div>
    <div class="absolute left-1/2 bottom-0 ml-84 mb-40 hidden xl:block">
      <img
        src="https://vueschool.io/images/sections/learning-paths/illustration-girl.svg"
        alt="Illustration of a girl"
      />
    </div>
    <div class="relative z-10 mx-4 py-20 font-roboto md:mx-10 xl:mx-auto xl:max-w-224">
      <h2
        class="mx-auto max-w-4xl text-center font-rubik text-[30px] font-medium leading-tight md:text-[40px] xl:text-[50px] text-white"
      >
        PATHS TO MASTER VUE.JS
      </h2>
      <p
        class="mx-auto mt-5 max-w-4xl text-center font-rubik text-lg font-medium leading-tight md:text-[28px] text-spindle"
      >
        Ready to start your journey to becoming a Vue Master with Vue School? We have created
        learning paths based on experience level for you to master Vue.js from start to finish with
        all the courses you need from Fundamentals to Mastery, as well as the ecosystem.
      </p>
      <div class="mt-14 flex flex-col items-center justify-center md:flex-row">
        <button
          class="relative w-full overflow-hidden border-2 font-rubik text-sm font-medium uppercase md:-mx-px md:w-fit md:first:rounded-l-full md:last:rounded-r-full xl:text-base border-white/20"
          style="color: rgb(94, 206, 71)"
        >
          <div class="py-5 px-2 md:px-9">Beginner</div></button
        ><button
          class="relative w-full overflow-hidden border-2 font-rubik text-sm font-medium uppercase md:-mx-px md:w-fit md:first:rounded-l-full md:last:rounded-r-full xl:text-base text-white border-white/20"
          style="background: rgb(255, 181, 0)"
        >
          <div
            class="py-5 px-2 md:px-9"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))"
          >
            Intermediate
          </div></button
        ><button
          class="relative w-full overflow-hidden border-2 font-rubik text-sm font-medium uppercase md:-mx-px md:w-fit md:first:rounded-l-full md:last:rounded-r-full xl:text-base border-white/20"
          style="color: rgb(249, 82, 79)"
        >
          <div class="py-5 px-2 md:px-9">Experienced</div>
        </button>
      </div>
      <div class="relative mt-20 space-y-5">
        <div
          class="absolute inset-y-0 z-0 my-20 ml-7 hidden border-l border-dashed md:block"
          style="border-color: rgb(67, 78, 150)"
        ></div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            1
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="The Vue.js 3 Masterclass"
                  class="h-24 w-24 rounded-md object-cover lazyLoad isLoaded"
                  src="https://vueschool.io/storage/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  The Vue.js 3 Masterclass
                </div>
                <p class="mt-2 text-center md:text-left">
                  Learn how to build a real-world application with Vue.js 3 in the supercharged and
                  remastered Vue.js Masterclass.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            2
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="Vue 3 Composition API"
                  data-src="https://vueschool.io/storage/media/4736c711002f927627a56f1e43a4841a/vueschool-vue-3-composition-api-not-transparent.jpg"
                  class="h-24 w-24 rounded-md object-cover lazyLoad"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  Vue 3 Composition API
                </div>
                <p class="mt-2 text-center md:text-left">
                  Leverage the power of the new Composition API and build reusable features
                  (composables) for scalable Vue applications.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            3
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="Rapid Development with Vite"
                  data-src="https://vueschool.io/storage/media/c0f2867c0f823580ec136928d3d9b7f2/rapid-development-with-vite.jpg"
                  class="h-24 w-24 rounded-md object-cover lazyLoad"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  Rapid Development with Vite
                </div>
                <p class="mt-2 text-center md:text-left">
                  Vite is a first-in-class build tool that aims to provide a faster and leaner
                  development experience for modern web projects. In this course, we cover
                  everything you need to know in order to get a Vue.js project up and running with
                  Vite.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            4
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="Pinia: The Enjoyable Vue Store"
                  data-src="https://vueschool.io/storage/media/39ebc760d644aa4625743dfc727ff737/pinia-the-enjoyable-vue-store.jpg"
                  class="h-24 w-24 rounded-md object-cover lazyLoad"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  Pinia: The Enjoyable Vue Store
                </div>
                <p class="mt-2 text-center md:text-left">
                  Learn how to use Pinia for global state management in your Vue 3 applications.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            5
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="Visual Studio Code for Vue.js Developers"
                  data-src="https://vueschool.io/storage/media/4512854650c7f5739ce7a5a55a0737b5/visual-studio-code-for-vuejs-developers-full.png"
                  class="h-24 w-24 rounded-md object-cover lazyLoad"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  Visual Studio Code for Vue.js Developers
                </div>
                <p class="mt-2 text-center md:text-left">
                  As a Vue.js developer, one of the tools you'll use most often is your code editor.
                  In this course, learn how to make the most out of the officially recommended IDE
                  for Vue.js development: Visual Studio Code.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="relative z-10 flex md:space-x-10">
          <div
            class="absolute top-0 mt-5 ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-medium md:static md:ml-0 md:mt-8 md:h-14 md:w-14 md:text-2xl"
            style="background: rgb(67, 78, 150); color: rgb(89, 199, 67)"
          >
            6
          </div>
          <div
            class="flex-1 cursor-pointer rounded-md border p-5 md:py-8 text-spindle border-blue-violet-dark bg-[#31396F] hover:border-blue-violet"
          >
            <div class="flex flex-col items-center md:flex-row md:space-x-5">
              <div class="shrink-0">
                <img
                  alt="Jamstack: The Complete Guide"
                  data-src="https://vueschool.io/storage/media/a720e0a048b61c085b010b993989c70d/jamstack-the-complete-guide-non-transparent.jpg"
                  class="h-24 w-24 rounded-md object-cover lazyLoad"
                />
              </div>
              <div>
                <div class="mt-5 text-center text-2xl font-bold md:mt-0 md:text-left text-white">
                  Jamstack: The Complete Guide
                </div>
                <p class="mt-2 text-center md:text-left">
                  The Jamstack architecture is a modern approach that capitalizes on the power of
                  JavaScript in the client and powerful site generators that output static html. In
                  this course, learn how to pair the Storyblok CMS with Nuxt.js to create a feature
                  rich site that's cheap, simple, and performant to host and serve.
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <!---->
    </div>
    <div class="mb-20 flex justify-center">
      <a
        href="/courses"
        target="_blank"
        class="inline-block rounded-md bg-mango py-5 px-8 font-roboto text-xl font-bold text-black hover:bg-bright-sun"
      >
        Browse Course Catalog
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/css/learning-paths.css';
// @import './assets/main.scss';
</style>
