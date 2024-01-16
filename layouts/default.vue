<template>
  <div id="app">
    <AppHeader />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
main {
  flex: 1;
  overflow-y: auto;
}
</style>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter }
}
</script>
