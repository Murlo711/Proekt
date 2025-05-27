<template>
  <div>
    <h1>Корзина</h1>
    <div v-if="cartItems.length === 0">Ваша корзина пуста.</div>
    <ul v-else>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} шт. - {{ item.price * item.quantity }}$
      </li>
    </ul>
    <p v-if="cartItems.length > 0">Общая сумма: {{ totalAmount }}$</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CartPage',

  computed: {
    ...mapState({
      cartItems: state => state.cart.items,
      totalAmount() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
  },
};
</script>

<style scoped></style>