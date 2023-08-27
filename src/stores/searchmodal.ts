import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchModalStore = defineStore('searchModal', () => {
  const isSearchModalShow = ref(false)
  function showSearchModal() {
    isSearchModalShow.value = true
  }
  function hideSearchModal() {
    isSearchModalShow.value = false
  }

  return { isSearchModalShow, showSearchModal, hideSearchModal }
})
