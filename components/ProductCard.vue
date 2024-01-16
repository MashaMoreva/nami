<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />

    <div class="product-wrapper">
      <p class="product-name">{{ product.name }}</p>
      <p class="product-weight">{{ product.weight }} г</p>
    </div>
    <p class="product-ingredients">{{ product.ingredients.join(', ') }}</p>
    <div class="product-wrapper">
      <p class="product-price"> {{ product.price }} ₽</p>
      <button class="product-button">
        В корзину
      </button>
    </div>



  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.product {

  &-card {
    width: 100%;
    max-width: 270px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 30px;
    text-align: center;
    background-color: $white;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-image {
    max-width: 100%;
    height: auto;
    margin: 0 auto 25px auto;

  }

  &-name {
    text-transform: uppercase;
  }

  &-weight {
    color: $gray;
    font-size: 13px;
    letter-spacing: 0.52px;
  }

  &-ingredients {
    text-align: start;
    color: $gray;
    font-size: 15px;
    letter-spacing: 0.6px;
    margin: 20px 0 44px;
  }

  &-button {
    border-radius: 8px;
    background: #312525;
    padding: 8px 31px;
    color: $white;
    font-size: 15px;
    letter-spacing: 0.45px;
  }
}
</style>

<script>
export default {
  props: ["product"],
};
</script>
