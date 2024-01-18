<template>
  <div v-if="isSidebarOpen">
    <div class="sidebar">
      <component :is="sidebarContent"></component>
    </div>
    <div class="overlay" @click="closeSidebar"></div>
  </div>
</template>


<script>
export default {
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
    sidebarContent() {
      return this.$store.state.sidebarContent;
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit('toggleSidebar');
      this.$store.commit('setSidebarContent', null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.sidebar {
  position: fixed;
  top: 0;
  right: -613px;
  height: 100%;
  width: 613px;
  background-color: $bg-sidebar;
  z-index: 3;
  animation: slideIn 0.5s forwards;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(60, 75, 97, 0.60);
  backdrop-filter: blur(11px);
  z-index: 2;
  cursor: pointer;
}

@keyframes slideIn {
  to {
    right: 0;
  }
}
</style>
