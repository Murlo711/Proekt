import { createStore } from 'vuex';
import products from './products';
import categories from './categories';
import cart from './cart';

const store = createStore({
  modules: {
    products,
    categories,
    cart,
  },
});

export default store;