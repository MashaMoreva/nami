<template>
  <div class="container">
    <p class="title">Меню</p>
    <ProductsList />
    <button class="scroll-to-top" @click="scrollToTop" v-show="showScrollButton" />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.container {
  flex-direction: column;
}

.scroll-to-top {
  background-image: url(~/assets/images/arrow.svg);
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: $brown;
  color: $white;
  border: none;
  padding: 30px;
  border-radius: 50px;
  cursor: pointer;
}
</style>

<script>
import ProductsList from '@/components/ProductsList.vue';

export default {
  components: {
    ProductsList,
  },
  data() {
    return {
      showScrollButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>
