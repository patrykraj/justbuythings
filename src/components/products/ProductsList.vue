<template>
  <ul v-if="filteredProducts.length || filterActive">
    <Product
      v-for="product in filteredProducts.slice(
        visibleProperties.from,
        visibleProperties.to
      )"
      :key="product.id"
      :product="product"
    />
    <li v-if="!filteredProducts.length"><h2>No products.</h2></li>
  </ul>
  <ul v-else>
    <Product
      v-for="product in products.slice(
        visibleProperties.from,
        visibleProperties.to
      )"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<script>
import Product from "./Product.vue";

import { mapState } from "vuex";

export default {
  name: "ProductsList",
  props: {
    products: Array,
    filteredProducts: Array,
    filterActive: Boolean,
  },
  computed: {
    ...mapState(["visibleProperties"]),
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

@media (max-width: 600px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0 2rem;
  }
}

@media (max-width: 400px) {
  ul {
    justify-content: center;
  }
}
</style>
