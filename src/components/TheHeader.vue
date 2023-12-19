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
            <button class="vs-bar-close-menu">×</button>
            <router-link :to="{ name: 'learning-paths' }" class="vs-bar-item">
              Learning Paths
            </router-link>
            <hr class="vs-bar-divider" />
            <button title="Toogle Search" class="vs-bar-search-button pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </button>
            <a href="/login" class="vs-bar-item"> Login </a>
            <a href="/register" class="vs-bar-item-button"> Create account </a>
          </div>
          <div class="vs-bar-right">
            <a href="/plans" class="vs-bar-bf-link"><span>30% Offer</span></a>
            <button title="Toogle Search" class="vs-bar-search-button pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="vs-searcher ais-InstantSearch">
          <!---->
          <div class="vs-searcher-input-wrapper ais-SearchBox">
            <input
              id="search-input"
              type="search"
              name="search"
              placeholder="Search"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="none"
              spellcheck="false"
              autofocus="autofocus"
            />
            <button>×</button>
          </div>
          <div class="vs-searcher-hits ais-StateResults">
            <div><!----></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { HomeIcon, PlayIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'

const sidebar = useSidebarStore()
const { closeSidebar } = sidebar
const { isSidebarOpen } = storeToRefs(sidebar)
const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Course', href: '/courses/1', icon: PlayIcon, current: false }
]
</script>
