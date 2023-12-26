<template>
  <div>
    <header class="bg-indigo-dark relative">
      <div class="container mx-auto">
        <div class="vs-bar">
          <div class="vs-bar-init">
            <button class="vs-bar-open-menu">☰</button>
            <a href="/" title="Go to VueSchool.io, home of Vue.js courses" class="vs-bar-logo"
              ><img
                src="https://vueschool.io/img/logo/vueschool_logo_multicolor_negative.svg"
                alt="Vue School"
            /></a>
          </div>
          <div id="menu" class="vs-bar-menu">
            <router-link :to="{ name: 'learning-paths' }" class="vs-bar-item">
              Learning Paths
            </router-link>
            <hr class="vs-bar-divider" />
            <template v-if="userStore.isLoggedIn()">
              <div class="vs-bar-item">
                <button class="vs-bar-toggler" @click="toggleDropdown">
                  <div class="vs-bar-avatar">{{ userName }}</div>
                  <svg viewBox="0 0 8 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L-3.49691e-07 6.99382e-07L8 0L4 4Z"></path>
                  </svg>
                </button>
                <ul class="vs-bar-dropdown vs-bar-dropdown-alt" :data-open="isOpenDropdown">
                  <li>
                    <a href="/logout" @click.prevent="logout"> Log out </a>
                  </li>
                </ul>
              </div>
            </template>
            <template v-else>
              <router-link :to="{ name: 'login' }" class="vs-bar-item"> Login </router-link>
              <router-link :to="{ name: 'register' }" class="vs-bar-item-button">
                Create account
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userName = computed(() => {
  return user.value.name.charAt(0)
})
const isOpenDropdown = ref<Boolean | null>(null)
function toggleDropdown() {
  isOpenDropdown.value = isOpenDropdown.value === null ? true : null
}

function logout() {
  userStore.logout()
  window.location.href = '/'
}
</script>
