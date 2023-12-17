<template>
  <RouterView name="header" />
  <div id="app-wrapper" class="min-h-screen flex flex-col justify-between">
    <div id="app" class="landing-page flex-grow flex flex-col">
      <RouterView />
    </div>
  </div>
  <RouterView name="footer" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
@import './assets/css/vueschool.css';
// @import './assets/main.scss';
</style>
