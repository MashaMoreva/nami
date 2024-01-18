export const state = () => ({
  products: [],
  cartProducts: [],
  isSidebarOpen: false,
  sidebarContent: null,
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },

  addToCart(state, product) {
    const existingProduct = state.cartProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const productWithQuantity = {
        ...product,
        quantity: 1,
      };
      state.cartProducts.push(productWithQuantity);
    }
  },

  incrementProductQuantity(state, productId) {
    const existingProduct = state.cartProducts.find((p) => p.id === productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
    }
  },

  decrementProductQuantity(state, productId) {
    const existingProduct = state.cartProducts.find((p) => p.id === productId);

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
    } else {
      state.cartProducts = state.cartProducts.filter((p) => p.id !== productId);
    }
  },

  removeFromCart(state, productId) {
    state.cartProducts = state.cartProducts.filter((p) => p.id !== productId);
  },

  toggleSidebar(state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  },

  setSidebarContent(state, content) {
    state.sidebarContent = content;
  },
};

export const getters = {
  getCartProducts: (state) => {
    return state.cartProducts;
  },
  totalCartAmount: (state) =>
    state.cartProducts.reduce(
      (total, product) => total + product.quantity * Number(product.price),
      0
    ),
};

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const productsData = require("~/static/products.json");
      commit("setProducts", productsData);
    } catch (error) {
      console.error("Ошибка при загрузке данных о продуктах:", error);
    }
  },
};
