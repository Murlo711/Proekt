<template>
  <div id="app">
    <header>
      <h1>Магазин</h1>
      <nav class="navbar">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/cart" class="nav-link">Корзина</router-link>
      </nav>
    </header>
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
  },
};
</script>

<style>
#app {
  text-align: center;
}

header {
  background-color: #007bff;
  padding: 15px;
  color: white;
}

header h1 {
  margin: 0;
}

.navbar {
  margin-top: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>