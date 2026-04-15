<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

import Header from '@/components/Header.vue'
import Left_Menu from './components/Left_Menu.vue';
const route = useRoute()

const showShell = !['/login', '/register', '/not-supported'].includes(route.path)

</script>

<template>
  <div v-if="showShell" class="app-shell">

    <Header />
    <div class="app-body">
      <Left_Menu />
      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>

  <RouterView v-else />

</template>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #f4f6f8;
}

:global(#app) {
  height: 100vh;
}

* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.app-shell {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f4f6f8;
}

.app-body {
  display: flex;
  align-items: stretch;
  flex: 1;
  overflow: hidden;
}

.main-content {
  flex: 1;

  overflow: auto;
}
</style>
