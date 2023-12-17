<template>
  <div
    :class="[
      'inline-block px-3 py-1 text-xs font-medium rounded-lg',
      type === 'primary' && 'bg-pink-bright text-white',
      type === 'secondary' && 'bg-pale-blue text-white',
      type === 'info' && 'bg-white text-blue-darkest'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'info'
  },
  text: {
    type: String,
    required: false
  }
})
</script>
