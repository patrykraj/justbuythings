<template>
  <ul></ul>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductsList",
  props: {
    msg: String,
  },
  components: {
    Product,
  },
};
</script>

<style scoped></style>
