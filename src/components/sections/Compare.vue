<template>
  <section class="compare">
    <SectionHeader title="Compare products" />
    <ul class="compare-products-list" v-if="this.comparedProducts.length">
      <ComparedProduct
        v-for="product in comparedProducts"
        :key="product.id"
        :product="product"
      />
    </ul>

    <h2 v-else>No selected products</h2>
  </section>
</template>

<script>
import { mapState } from "vuex";

import SectionHeader from "../SectionHeader.vue";
import ComparedProduct from "../ComparedProduct.vue";

export default {
  name: "Compare",
  components: {
    SectionHeader,
    ComparedProduct,
  },
  computed: mapState(["comparedProducts"]),
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 2rem 0;
  list-style: none;
  display: flex;
  justify-content: center;
}
</style>
