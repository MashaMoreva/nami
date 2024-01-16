export const state = () => ({
  products: [
    {
      id: 1,
      name: "Ролл Ясай",
      ingredients: [
        "Огурец",
        "Авокадо",
        "Помидор",
        "Болгарский перец",
        "Листья салата",
        "Кунжут",
      ],
      weight: "185",
      price: "200",
      image: require("@/assets/images/roll1.svg"),
    },
    {
      id: 2,
      name: "Мясные роллы",
      ingredients: [
        "Огурец",
        "Авокадо",
        "Помидор",
        "Болгарский перец",
        "Листья салата",
        "Кунжут",
      ],
      weight: "260",
      price: "240",
      image: require("@/assets/images/roll2.svg"),
    },
    {
      id: 3,
      name: "Ролл Лайт",
      ingredients: [
        "Листья салата",
        "Огурец",
        "Перец",
        "Помидор",
        "Сырный соус",
        "Чипсы",
      ],
      weight: "190",
      price: "165",
      image: require("@/assets/images/roll3.svg"),
    },
    {
      id: 4,
      name: "Ролл Веган",
      ingredients: [
        "Листья салата",
        "Авокадо",
        "Огурец",
        "Спаржа",
        "Сивид чука",
        "Кунжут",
      ],
      weight: "230",
      price: "200",
      image: require("@/assets/images/roll4.svg"),
    },
    {
      id: 5,
      name: "Ролл Тайол",
      ingredients: [
        "Огурец",
        "Помидор",
        "Сыр творожный",
        "Бекон",
        "Сыр маасдам",
      ],
      weight: "215",
      price: "215",
      image: require("@/assets/images/roll5.svg"),
    },
    {
      id: 6,
      name: "Ролл Батакон",
      ingredients: ["Огурец", "Сыр творожный", "Бекон"],
      weight: "220",
      price: "230",
      image: require("@/assets/images/roll6.svg"),
    },
    {
      id: 7,
      name: "Ролл Калипсо",
      ingredients: ["Сыр творожный", "Огурец", "Мидии", "Стружка тунца"],
      weight: "195",
      price: "185",
      image: require("@/assets/images/roll7.svg"),
    },
    {
      id: 8,
      name: "Ролл Кавьяр",
      ingredients: ["Сыр творожный", "Помидор", "Огурец", "Мидии", "Майонез"],
      weight: "240",
      price: "200",
      image: require("@/assets/images/roll8.svg"),
    },
    {
      id: 9,
      name: "Ролл Чиро",
      ingredients: [
        "Листья салата",
        "Копченая курица",
        "Болгарский перец",
        "Твердый сыр",
        "Чесночный соус",
      ],
      weight: "210",
      price: "210",
      image: require("@/assets/images/roll9.png"),
    },

    {
      id: 10,
      name: "Ролл Чипу",
      ingredients: ["Сыр творожный", "Лосось", "Томаго", "Стружка тунца"],
      weight: "190",
      price: "180",
      image: require("@/assets/images/roll10.svg"),
    },
    {
      id: 11,
      name: "Ролл Катана",
      ingredients: [
        "Сыр творожный",
        "Краб",
        "Огурец",
        "Черный кунжут",
        "Лососевый тар-тар",
        "Спайси соус",
      ],
      weight: "240",
      price: "250",
      image: require("@/assets/images/roll11.svg"),
    },
    {
      id: 12,
      name: "Ролл Мишику",
      ingredients: [
        "Угорь",
        "Краб",
        "Огурец",
        "Масаго",
        "Сыр творожный",
        "Сырный соус",
        "Картофельные чипсы",
      ],
      weight: "210",
      price: "260",
      image: require("@/assets/images/roll12.svg"),
    },
  ],
  cartProducts: [],
});

export const mutations = {
  addToCart(state, product) {
    const existingProduct = state.cartProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      state.cartProducts.push(product);
    }
  },

  updateProductQuantity(state, { productId, quantity }) {
    const existingProduct = state.cartProducts.find((p) => p.id === productId);

    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  },

  removeFromCart(state, productId) {
    state.cartProducts = state.cartProducts.filter((p) => p.id !== productId);
  },
};
