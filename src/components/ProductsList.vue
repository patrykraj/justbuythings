<template>
  <ul v-if="products.length">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductsList",
  props: {
    products: Array,
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
