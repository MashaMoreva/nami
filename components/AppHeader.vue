<template>
  <header class="header">
    <div class="container">
      <img class="header-logo" :src="logo" alt="Логотип">
      <nav class="header-navigation">
        <NuxtLink active-class="active" exact to="/" class="header-link">Меню</NuxtLink>
        <NuxtLink active-class="active" to="/delivery" class="header-link">Доставка</NuxtLink>
        <NuxtLink active-class="active" to="/promotions" class="header-link">Акции</NuxtLink>
        <NuxtLink active-class="active" to="/feedback" class="header-link">Отзывы</NuxtLink>
        <NuxtLink active-class="active" to="/contacts" class="header-link">Контакты</NuxtLink>
      </nav>
      <div class="header-phone">
        +7 979 700 97 91
      </div>
      <button class='header-cart' @click="toggleSidebar">
        <span class='header-count'>{{
          $store.state.cartProducts.length
        }}</span>
      </button>
      <button class='header-login'>Войти</button>

    </div>

  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 82px;
  background-color: $bg-header;
  display: flex;
  padding: 12px 0;
  align-items: center;
  z-index: 1;

  &-logo {
    position: absolute;
    top: -20px;
    left: 0;
  }

  &-navigation {
    margin-left: 250px;
    margin-right: 80px;
  }

  &-link {
    color: $white;
    line-height: 21px;
    letter-spacing: 0.8px;
    position: relative;
    margin-right: 30px;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -18px;
      width: 3px;
      height: 3px;
      background-image: url('~/assets/images/ellipse-white.svg');
      transform: translateY(-50%);
    }
  }

  &-phone {
    position: relative;
    color: $white;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.18px;
    margin-right: 151px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 120px;
      width: 24px;
      height: 24px;
      background-image: url('~/assets/images/phone.svg');
      transform: translateY(-50%);
    }
  }

  &-cart {
    background-image: url(~/assets/images/cart.svg);
    background-position: center;
    width: 46px;
    height: 44px;
    margin-right: 21px;
    position: relative;
  }

  &-count {
    position: absolute;
    top: -5px;
    left: 25px;
    background-color: $red;
    width: 16px;
    height: 16px;
    padding: 3px 5px;
    border-radius: 50px;
    font-size: 11px;
    color: $white;
  }

  &-login {
    padding: 11px 30px;
    background-color: $white;
    border-radius: 30px;
    font-family: Neucha, sans-serif;
    color: $black;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.8px;
  }
}

.active {
  font-weight: 700;
  text-decoration: underline;
}
</style>

<script>
import logo from '~/assets/images/logo.png';
import Cart from '@/components/Cart.vue';

export default {
  components: {
    Cart,
  },
  data() {
    return {
      logo: logo,
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('setSidebarContent', 'Cart');
      this.$store.commit('toggleSidebar');
    },
  },
};

</script>
