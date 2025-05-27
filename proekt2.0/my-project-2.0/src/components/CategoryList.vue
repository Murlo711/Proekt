<template>
    <div class="category-list">
        <h2>Категории</h2>
        <ul class="category-buttons">
            <li v-for="category in categories" :key="category.id">
                <button @click="showProducts(category)">{{ category.name }}</button>
            </li>
        </ul>
        <div v-if="selectedProducts.length > 0" class="product-list">
            <h3>Товары в категории:</h3>
            <ul>
                <li v-for="product in selectedProducts" :key="product.id" class="product-item">
                    <img :src="product.image" alt="product.name" class="product-image" />
                    <div class="product-info">
                        <p>{{ product.name }} - {{ product.price }}$</p>
                        <button @click="addToCart(product)">Добавить в корзину</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CategoryList',

  data() {
    return {
      selectedProducts: [],
    };
  },

  computed: {
    ...mapState({
      categories: state => state.categories.list,
    }),
  },

  methods: {
    showProducts(category) {
      this.selectedProducts = category.products;
    },
    
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product);
      alert('Продукт добавлен в корзину!');
    },
  },
};
</script>

<style scoped>
.category-list {
  margin-bottom: 20px;
}
.category-list img {
  margin-right: 10px;
}
</style>