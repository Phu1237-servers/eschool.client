<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      class="col-span-1 cursor-pointer hover:bg-gray-200 zoom-in p-1"
      v-for="(item, index) in data"
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
            >
              <path
                fill="#42b883"
                d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
              ></path>
              <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path>
            </svg>
          </div>
          <div class="flex-1 ml-1">
            <div class="title">
              {{ item.name }}
            </div>
            <div class="category">{{ item.category?.name }}</div>
            <div>{{ item.views }} Views</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Course } from '@/models/Course'
defineProps({
  data: {
    type: Array<Course>,
    required: true
  }
})
</script>
