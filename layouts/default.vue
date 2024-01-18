<template>
  <div id="app">
    <AppHeader />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
    <Sidebar v-if="$store.state.isSidebarOpen" />
  </div>
</template>

<style lang="scss" scoped>
main {
  flex: 1;
  overflow-y: auto;
}
</style>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: { AppHeader, AppFooter, Sidebar }
}
</script>
