<template>
  <div class="product-card" :class="{ 'in-cart': isProductInCart }">
    <div :class="{ 'shadow': isProductInCart }" />
    <img :src="product.image" :alt="product.name" class="product-image" :class="{ 'in-cart': isProductInCart }" />

    <div class="product-wrapper">
      <p class="product-name">{{ product.name }}</p>
      <p class="product-weight" :class="{ 'in-cart': isProductInCart }">{{ product.weight }} г</p>
    </div>
    <p class="product-ingredients" :class="{ 'in-cart': isProductInCart }">{{ product.ingredients.join(', ') }} </p>
    <div class="product-wrapper">
      <p class="product-price"> {{ product.price }} ₽</p>
      <div v-if="!isProductInCart">
        <button class="product-button" @click="addToCart">
          В корзину
        </button>
      </div>
      <div v-else class="button-wrapper">
        <button class="button-decrement" @click="decrementProductQuantity">
        </button>
        <span> {{ quantity }}</span>
        <button class="button-increment" @click="incrementProductQuantity">
        </button>
      </div>
    </div>
    <button class="product-favorite" @click="toggleFavorite">
      <img :src="getHeartImage()" alt="Избранное" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.product {

  &-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 270px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 30px;
    text-align: center;
    background-color: $white;
    transition: all 0.2s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }

  &-image {
    max-width: 100%;
    height: auto;
    margin: 0 auto 25px auto;
  }

  &-name {
    text-transform: uppercase;
    font-size: 19px;
    line-height: 25px;
    letter-spacing: 1.9px;
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

  &-price {
    font-size: 19px;
    letter-spacing: 0.95px;
  }

  &-button {
    border-radius: 8px;
    background: #312525;
    padding: 8px 31px;
    color: $white;
    font-size: 15px;
    letter-spacing: 0.45px;
  }

  &-favorite {
    position: absolute;
    top: 30px;
    left: 222px;

    img {
      width: 20px;
      height: 20px;
    }
  }
}

.shadow {
  &::after {
    content: '';
    position: absolute;
    bottom: 265px;
    right: 110px;
    box-shadow: 0px 0px 30px 50px rgba(203, 182, 137, 0.3);

  }
}

@mixin button-style {
  padding: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: $white;
  border-radius: 50px;
}

.button {
  &-wrapper {
    display: flex;
    align-items: center;
    gap: 13px;

    span {
      font-size: 19px;
      letter-spacing: 0.95px;
      margin-top: 5px;
    }
  }

  &-decrement {
    @include button-style;
    background-image: url(@/assets/images/minus.svg);
  }

  &-increment {
    @include button-style;
    background-image: url(@/assets/images/plus.svg);
  }
}

.in-cart {
  background-color: #312525;
  color: $white;

}
</style>

<script>
export default {
  props: ["product"],
  data() {
    return {
      isFavorite: false,
      isProductInCart: false,
      quantity: 0,
    };
  },
  methods: {
    getHeartImage() {
      if (this.isFavorite) {
        return require('@/assets/images/heart2.svg');
      } else if (this.quantity > 0) {
        return require('@/assets/images/heart3.svg');
      } else {
        return require('@/assets/images/heart1.svg');
      }
    },
    addToCart() {
      this.quantity = 1;
      this.$store.commit("addToCart", this.product);
      this.isProductInCart = true;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    incrementProductQuantity() {
      this.quantity += 1;
      this.updateProductQuantity();
    },
    decrementProductQuantity() {
      this.quantity -= 1;
      this.updateProductQuantity();
    },
    updateProductQuantity() {
      this.$store.commit("updateProductQuantity", {
        productId: this.product.id,
        quantity: this.quantity,
      });
      if (this.quantity === 0) {
        this.$store.commit("removeFromCart", this.product.id);
        this.isProductInCart = false;
      }
    },
  },
};
</script>
