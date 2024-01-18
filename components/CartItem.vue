<template>
  <div class="cart-item">
    <img :src="require(`~/assets/images/${product.image}`)" :alt="product.name" class="item-image" />
    <div class="cart-wrapper">
      <div class=""></div>
      <p class="item-name">{{ product.name }}</p>
      <button class="item-favorite" @click="toggleFavorite">
        <img :src="getHeartImage()" alt="Избранное" />
      </button>
      <p class="item-ingredients">{{ product.ingredients.join(', ') }} </p>
      <p class="item-weight">({{ product.weight }} г)</p>
    </div>

    <div class="cart-wrapper">
      <p class="item-price">Цена {{ product.price }} ₽</p>
      <div class="button-wrapper">
        <button class="button-decrement" @click="decrementProductQuantity">
        </button>
        <span> {{ quantityInCart }}</span>
        <button class="button-increment" @click="incrementProductQuantity">
        </button>
      </div>
      <div>Сумма {{ product.quantity * product.price }} ₽</div>
    </div>
    <button class="item-trash" @click.prevent="removeFromCart"></button>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.cart {
  &-item {
    background-color: $white;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 528px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 16px 0 16px 15px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3px;

    &:first-of-type {
      margin-right: 35px;
    }

    &:last-of-type {
      gap: 7px;
      align-items: start;
    }
  }

  &-weight {
    color: $gray;
    font-size: 13px;
    letter-spacing: 0.52px;
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
}

.item {
  &-image {
    width: 80px;
    height: 80px;
    margin: auto 25px auto 0;
  }

  &-name {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 1.6px;
  }

  &-favorite {
    position: absolute;
    top: 20px;
    left: 274px;

    img {
      width: 14px;
      height: 14px;
    }
  }

  &-ingredients {
    text-align: start;
    color: $gray;
    font-size: 13px;
    max-width: 210px;
  }

  &-weight {
    margin-top: auto;
    color: $gray;
    font-size: 13px;
  }

  &-trash {
    background-image: url(@/assets/images/trash.svg);
    width: 41px;
    height: 64px;
    margin-left: auto;
  }
}

@mixin button-style {
  padding: 12.5px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: $brown;
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
    background-image: url(@/assets/images/minus-white.svg);
  }

  &-increment {
    @include button-style;
    background-image: url(@/assets/images/plus-white.svg);
  }
}
</style>

<script>
export default {
  props: ["product"],
  data() {
    return {
      isFavorite: false,
    };
  },
  computed: {
    quantityInCart() {
      return this.$store.getters.getCartProducts.find(
        (p) => p.id === this.product.id
      ).quantity;
    },
  },
  methods: {
    getHeartImage() {
      if (this.isFavorite) {
        return require('@/assets/images/heart2.svg');
      }
      else {
        return require('@/assets/images/heart1.svg');
      }
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    incrementProductQuantity() {
      this.$store.commit("incrementProductQuantity", this.product.id);
    },
    decrementProductQuantity() {
      this.$store.commit("decrementProductQuantity", this.product.id);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product.id);
    },
  },
};
</script>
