<template>
  <div class="cart-container">
    <p class="title">Корзина</p>
    <CartList />
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
  components: {
    CartList,
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 40px 45px 45px;

  .title {
    margin-top: 0;
    font-size: 48px;
    margin-bottom: 30px;

    &::before {
      right: 206px;
    }

  }
}
</style>
