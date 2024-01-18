<template>
  <div class="order-container">
    <p class="title">Оформление заказа</p>
    <form class="order-form">
      <div class="order-wrapper">
        <p class="wrapper-title"><span class="point">1</span>Способ доставки</p>
        <ul class="options">
          <li class="options-item">
            <input class="options-radio" type="radio" name="deliveryMethod" :disabled="isDeliveryDisabled" />
            <img :src="require('~/assets/images/truck.svg')" alt="Машина">
            <span class="options-value">Курьер</span>
            <span class="options-description">Временно недоступно</span>
          </li>
          <li class="options-item">
            <input class="options-radio" type="radio" name="deliveryMethod" :checked="isDeliveryDisabled" />
            <img :src="require('~/assets/images/bag.svg')" alt="Пакет">
            <span class="options-value">Самовывоз</span>
            <div class="options-description">
              <span class="first-line">Скидка -10%</span>
              <span class="second-line">на стоиомость покупки</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-wrapper">
        <p class="wrapper-title"><span class="point">2</span>Данные для доставки</p>
        <div class="data-container">
          <div class="data-item">
            <img :src="require('~/assets/images/user.svg')" alt="">
            <input type="text" placeholder="Имя">
          </div>
          <div class="data-item">
            <img :src="require('~/assets/images/phone-user.svg')" alt="">
            <input type="tel" placeholder="Телефон">
          </div>
          <div class="data-item">
            <img :src="require('~/assets/images/info.svg')" alt="">
            <input type="text" placeholder="Дополнительная информация">
          </div>
        </div>

      </div>
      <div class="order-wrapper">
        <div class="third-container">
          <div class="cost">
            <p class="cost-title">Cтоимость товаров</p>
            <span class="cost-span">{{ totalCartAmount }} ₽</span>
          </div>
          <div class="total">
            <p class="total-title">Итого к оплате</p>
            <span class="total-span">{{ totalAmount }} ₽</span>
          </div>
          <button class="create-button">Оформить и оплатить</button>
          <p class="footnote">Создавая заказ, вы соглашаетесь с <a
              href="https://ru.wikipedia.org/wiki/Обработка_персональных_данных">политикой обработки персональных
              данных</a></p>
        </div>
      </div>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      isDeliveryDisabled: true,
    };
  },
  computed: {
    totalCartAmount() {
      return this.$store.getters.totalCartAmount;
    },
    discount() {
      return this.totalCartAmount * 0.1;
    },
    totalAmount() {
      return this.totalCartAmount - this.discount;
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

@mixin font-styles {
  font-size: 18px;
  font-weight: 400;
}

.order {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
    height: 100vh;

    .title {
      margin-top: 0;
      font-size: 32px;
      margin-bottom: 27px;
      text-transform: none;

      &::before,
      &::after {
        width: 5px;
        height: 5px;
        background-image: url("~/assets/images/ellipse-mini.svg");
      }

      &::before {
        right: 250px;
      }

      &::after {
        right: -21px;
      }
    }
  }

  &-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &-wrapper {
    background-color: $white;
    padding: 16px;
    border-radius: 8px;
  }

}

.point {
  background-color: $red;
  display: flex;
  width: 32px;
  height: 32px;
  padding-left: 12px;
  padding-top: 6px;
  border-radius: 50px;
  font-size: 20px;
  color: $white;
}

.wrapper {

  &-title {
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 22px;
    font-weight: 300;
  }
}

.options {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 15px;
  margin-left: 46px;

  &-item {
    display: grid;
    grid-template-columns: 50px 70px 161px 161px;
    align-items: center;

    input[type="radio"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;

      ~.options-value {
        color: $gray;
      }

      ~.options-description {
        font-size: 12px;
        color: $red;
        font-weight: 300;
      }
    }
  }

  &-radio {
    width: 32px;
    height: 32px;
    position: relative;

    &:checked {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $green;
        border-radius: 50%;
        background-image: url(@/assets/images/check-mark.svg);
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  &-value {
    font-size: 18px;
    font-weight: 300;
  }

  &-description {
    display: flex;
    flex-direction: column;

    .first-line {
      font-size: 14px;
      font-weight: 700;
      color: $blue;
    }

    .second-line {
      font-size: 8px;
      font-weight: 700;
      color: $blue;
    }
  }
}

.data {
  &-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 36px;
    margin-left: 46px;
    margin-right: 32px;

    input {
      width: 100%;
    }
  }

  &-item {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid $light-gray;
    padding-bottom: 7px;
    padding-left: 6px;
  }


}

.third-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cost {
  display: flex;
  align-items: center;
  gap: 45px;
  margin: 16px 32px 0 46px;
  padding-bottom: 20px;
  border-bottom: 1px solid $light-gray;

  &-title {
    font-size: 18px;
    font-weight: 300;
  }

  &-span {
    @include font-styles();
  }
}

.total {
  display: flex;
  align-items: center;
  gap: 79px;
  margin: 0 32px 0 46px;

  &-title,
  &-span {
    @include font-styles();
  }
}

.create-button {
  padding: 14px 0;
  width: 100%;
  background-color: $dark-blue;
  color: $white;
  border-radius: 4px;
  font-size: 18px;
  letter-spacing: 0.9px
}

.footnote {
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;

  a {
    color:
      #185598
  }
}
</style>
