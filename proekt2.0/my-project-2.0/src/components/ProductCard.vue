<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }}</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  
  props: {
    product: Object,
  },

  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', this.product);
      alert('Продукт добавлен в корзину!');
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>