<template>
  <div>
    <h1>Главная страница</h1>
    <CategoryList />
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CategoryList from '../components/CategoryList.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'HomePage',
  components: {
    CategoryList,
    ProductCard,
  },
  
  computed: {
    ...mapState({
      products: state => state.products.products,
    }),
  },

  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>