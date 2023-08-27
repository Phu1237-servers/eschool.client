import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isSidebarOpen = ref(false)
  function openSidebar() {
    isSidebarOpen.value = true
  }
  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return { isSidebarOpen, openSidebar, closeSidebar }
})
