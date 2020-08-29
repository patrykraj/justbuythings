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

import SectionHeader from "../shared/SectionHeader.vue";
import ComparedProduct from "../products/ComparedProduct.vue";

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

@media (max-width: 768px) {
  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    min-width: 250px;
    max-width: 50%;
  }

  li + li {
    margin: 1rem 0;
  }
}

@media (max-width: 400px) {
  li {
    min-width: 200px;
  }
}
</style>
