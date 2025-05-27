<template>
  <div>
    <h1>Product Page</h1>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductPage',
  
  computed: {
    ...mapState({
      product: state => state.products.selectedProduct,
    }),
  },

  methods: {
    ...mapActions(['addToCart']),
    
    addToCart() {
      this.addToCart({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1 });
      alert('Товар добавлен в корзину!');
    }
  },

  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
</style>