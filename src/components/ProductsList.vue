<template>
  <ul v-if="products.length">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import Product from "./Product.vue";

import axios from "axios";

export default {
  name: "ProductsList",
  props: {
    msg: String,
  },
  components: {
    Product,
  },
  data: function() {
    return {
      products: [],
    };
  },
  created: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/patrykraj/product-comparison/products"
      )
      .then((res) => {
        console.log(res.data);
        this.products = res.data;
      });
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
