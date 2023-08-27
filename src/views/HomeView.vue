<template>
  <div class="flex flex-1 flex-col md:pl-64">
    <TheTopbar />

    <main class="flex-1">
      <div class="py-6">
        <BoxContainer title="Continue Watch">
          <div class="grid grid-cols-12 gap-4 h-96">
            <div class="col-span-9 h-full flex justify-center">
              <!-- <div class="h-full rounded-lg border-4 border-dashed border-gray-200" /> -->
              <video
                class="h-full"
                src="https://public.bl.files.1drv.com/y4mYSnUANkYVNj1g1nXBD1hakjBVZI85-yo2FX0MPE82UCD_EXUMyouRY6H7bIBC4ScHQTJ6DNbXAOMfGvVyQGpQkSjFijXNZ9kLw78G57SQNAlMqJ164ltuiUro1JLli9SwtTexU7qV1WAgu6DYVykqPwCr5EPuUEfnnsasxpzEOWBKI7nXLQCUD9zY6SM7PVd1YecVC0FMFtl22W55Qusp5aoRANZbVA2mLM8pM1Jze4"
                controls="true"
              />
            </div>
            <div class="col-span-3 grid grid-ros-4 gap-5 h-full">
              <div
                class="row-span-1 h-20 p-2 rounded-lg border-2 border-solid border-gray-200 bg-white cursor-pointer hover:bg-gray-50"
                v-for="index in 3"
                :key="index"
              >
                <div class="grid grid-cols-5 h-full">
                  <div class="relative col-span-2 h-full flex items-center justify-center">
                    <img
                      src="https://i.ytimg.com/vi/5ngmes7C_sM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC84DWX6lqJ_j0gkR0ZL-2vQJ9ERQ"
                    />
                    <div class="absolute bottom-1 right-1">
                      <span
                        class="inline-flex items-center rounded-full bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-white"
                        >4:06</span
                      >
                    </div>
                  </div>
                  <div class="col-span-3 h-full">
                    <div class="h-full flex flex-col justify-center px-4">
                      <div class="text-sm text-gray-500">Video Title</div>
                      <div class="text-sm text-gray-400 mt-2">
                        <span
                          class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                        >
                          Badge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="row-span-1 h-20 rounded-lg border-2 border-solid border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                Watch more
              </div>
            </div>
          </div>
        </BoxContainer>
        <BoxContainer title="Beginner">
          <div class="grid grid-cols-3 gap-4">
            <div
              class="col-span-1 cursor-pointer hover:bg-gray-200 zoom-in p-1"
              v-for="index in 3"
              :key="index"
            >
              <div class="h-full w-full">
                <div>
                  <img
                    class="rounded-lg w-full"
                    src="https://i.ytimg.com/vi/XCoinFxlzZ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA24TEHuv0Cf7JiIJwygWlZru9SuA"
                  />
                </div>
                <div class="flex mt-2">
                  <div class="flex-initial">
                    <svg
                      class="logo bg-red-100 rounded-full h-8 w-8"
                      viewBox="0 0 128 128"
                      width="24"
                      height="24"
                      data-v-c0161dce=""
                    >
                      <path
                        fill="#42b883"
                        d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                        data-v-c0161dce=""
                      ></path>
                      <path
                        fill="#35495e"
                        d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                        data-v-c0161dce=""
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="title">
                      Chuyện Gì Đã Xảy Ra Trong Life (2017) ? | Mầm Sống Sao Hỏa Chết Chóc
                    </div>
                    <div class="category">Beginner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 r">
            <div
              class="col-span-1 cursor-pointer hover:bg-gray-200 zoom-in p-1"
              v-for="index in 3"
              :key="index"
            >
              <div class="h-full w-full">
                <div>
                  <img
                    class="rounded-lg w-full"
                    src="https://i.ytimg.com/vi/XCoinFxlzZ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA24TEHuv0Cf7JiIJwygWlZru9SuA"
                  />
                </div>
                <div class="flex mt-2">
                  <div class="flex-initial">
                    <svg
                      class="logo bg-red-100 rounded-full h-8 w-8 p-1"
                      viewBox="0 0 128 128"
                      width="24"
                      height="24"
                      data-v-c0161dce=""
                    >
                      <path
                        fill="#42b883"
                        d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                        data-v-c0161dce=""
                      ></path>
                      <path
                        fill="#35495e"
                        d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                        data-v-c0161dce=""
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1 ml-1">
                    <div class="title">
                      Chuyện Gì Đã Xảy Ra Trong Life (2017) ? | Mầm Sống Sao Hỏa Chết ChócChuyện Gì
                      Đã Xảy Ra Trong Life (2017) ? | Mầm Sống Sao Hỏa Chết ChócChuyện Gì Đã Xảy Ra
                      Trong Life (2017) ? | Mầm Sống Sao Hỏa Chết ChócChuyện Gì Đã Xảy Ra Trong Life
                      (2017) ? | Mầm Sống Sao Hỏa Chết Chóc
                    </div>
                    <div class="category">Beginner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BoxContainer>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheTopbar from '@/components/TheTopbar.vue'
import BoxContainer from '@/components/Common/BoxContainer.vue'
</script>
