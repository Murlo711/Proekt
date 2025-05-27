import { createStore } from 'vuex';
import cart from './cartReducer';
import categories from './categoriesReducer';
import products from './productsReducer';

const store = createStore({
  modules: {
    cart,
    categories,
    products,
  },
});

export default store;