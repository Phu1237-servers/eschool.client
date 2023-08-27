<template>
  <div class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
    <div v-for="(item, index) in data" :key="index" class="group relative">
      <div class="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center" />
        <div class="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
          <div
            class="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter"
          >
            View Product
          </div>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
      >
        <h3>
          <a href="#" class="title">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ item.name }}
          </a>
        </h3>
        <p>{{ item.price }}</p>
      </div>
      <p class="mt-1 text-sm text-gray-500">{{ item.category }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
