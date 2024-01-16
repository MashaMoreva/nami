<template>
  <div class="grid">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 30px;
  margin: 60px 0 100px;
}
</style>
