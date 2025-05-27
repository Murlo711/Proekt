import axios from 'axios';

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      commit('SET_PRODUCTS', response.data);
    } catch (error) {
      console.error('Ошибка при получении продуктов:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};