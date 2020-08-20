<template>
  <section v-if="products.length" class="products">
    <SectionHeader title="Products" sorting />
    <ProductsList
      :products="this.visibleProducts"
      :filteredProducts="this.filteredProducts"
      :filterActive="this.filterActive"
    />
    <Pagination
      :productsQuantity="this.products.length"
      :filteredQuantity="this.filteredProducts.length"
    />
  </section>
  <h2 v-else>Loading...</h2>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
import ProductsList from "../ProductsList.vue";
import Pagination from "../Pagination.vue";

import { mapState } from "vuex";

export default {
  name: "Search",
  props: {},
  components: {
    SectionHeader,
    ProductsList,
    Pagination,
  },
  data() {
    return {};
  },
  methods: {},
  computed: mapState([
    "products",
    "visibleProducts",
    "filteredProducts",
    "filterActive",
  ]),
};
</script>

<style scoped></style>
