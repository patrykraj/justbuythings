<template>
  <ul v-if="filteredProducts.length || filterActive">
    <Product
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
    <li v-if="!filteredProducts.length"><h2>No products.</h2></li>
  </ul>
  <ul v-else>
    <Product v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductsList",
  props: {
    products: Array,
    filteredProducts: Array,
    filterActive: Boolean,
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
