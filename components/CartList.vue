<template>
  <div class="flex">
    <CartItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    products() {
      return this.$store.state.cartProducts;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}
</style>
