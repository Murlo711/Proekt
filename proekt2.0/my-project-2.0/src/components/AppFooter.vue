<template>
  <footer class="footer">
    <div class="footer-links">
      <router-link to="/" class="footer-link">Главная</router-link>
      <router-link to="/cart" class="footer-link">Корзина</router-link>
      <router-link to="/categories" class="footer-link">Категории</router-link>
      <router-link to="/about" class="footer-link">О нас</router-link>
    </div>
    <p>&copy; 2023 Ваш Сайт. Все права защищены.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>