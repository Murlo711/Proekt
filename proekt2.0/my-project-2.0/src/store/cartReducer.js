const state = {
   items: [],
   totalAmount:0,
};

const mutations = {
   ADD_TO_CART(state, product) {
       const existingItem = state.items.find(item => item.id === product.id);
       if (existingItem) {
           existingItem.quantity++;
       } else {
           state.items.push({ ...product, quantity:1 });
       }
       state.totalAmount += product.price;
   },
};

const actions = {};

export default {
   state,
   mutations,
   actions,
};