<template>
  <div class="cart-container">
    <p class="title">Корзина</p>
    <CartList />
    <div class="cart-wrapper">
      <p class="cart-total">Общая сумма <span class="cart-digits">{{ $store.getters.totalCartAmount }} ₽</span></p>
      <p class="cart-footnote">* Сумма заказа для доставки курьером должна составлять не менее 500 ₽</p>
      <div class="cart-buttons">
        <button class="cart-back" @click.prevent="goToHome">
          Вернуться к покупкам
        </button>
        <button class="cart-order" @click.prevent="createOrder">
          Оформить заказ
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
  components: {
    CartList,
  },
  methods: {
    goToHome() {
      this.$router.push('/');
      this.$store.commit('toggleSidebar');
      this.$store.commit('setSidebarContent', null);
    },
    createOrder() {
      this.$store.commit('setSidebarContent', 'OrderForm');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

@mixin button-styles {
  font-size: 18px;
  letter-spacing: 0.9px;
  padding: 19px 24px;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

}

.cart {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 40px 45px 45px;
    height: 100vh;

    .title {
      margin-top: 0;
      font-size: 48px;
      margin-bottom: 30px;

      &::before {
        right: 206px;
      }
    }
  }

  &-wrapper {
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &-total {
    font-size: 20px;
    letter-spacing: 1px;
  }

  &-digits {
    font-size: 22px;
    letter-spacing: 1.1px;
  }

  &-footnote {
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.48px;
    max-width: 368px;
  }

  &-buttons {
    display: flex;
    gap: 30px;

    button {
      @include button-styles;
    }

    .cart-back {
      background-color: $white;
      color: $brown;
    }

    .cart-order {
      background-color: $brown;
      color: $white;
    }
  }
}
</style>
