<template>
  <div class="basket-empty">
    <div class="empty-container">
      <Cart />
      <h2>Your basket is empty</h2>
      <p>
        Go to <router-link to="/">products</router-link> to add products to your
        basket.
      </p>
    </div>
  </div>
</template>

<script>
import Cart from "vue-material-design-icons/Cart.vue";

export default {
  name: "BasketEmpty",
  components: {
    Cart,
  },
};
</script>

<style scoped>
.basket-empty {
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: 1024px;
  padding: 150px 1rem 1rem;
  margin: 0 auto;
}

.empty-container {
  width: 100%;
  padding: 2rem;
  background: whitesmoke;
}

.empty-container svg {
  width: 100px;
  height: 100px;
}

.empty-container a {
  color: inherit;
  font-weight: bold;
}
</style>
