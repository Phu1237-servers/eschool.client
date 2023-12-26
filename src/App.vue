<template>
  <RouterView name="header" />
  <RouterView />
  <RouterView name="footer" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
@import './assets/css/vueschool.css';
// @import './assets/css/main.scss';
</style>
