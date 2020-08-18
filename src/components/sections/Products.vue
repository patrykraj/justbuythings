<template>
  <section v-if="!this.loading" class="products">
    <SectionHeader title="Products" sorting />
    <ProductsList :products="this.visibleProducts" />
    <Pagination
      :productsQuantity="this.products.length"
      :setVisibleProperties="this.setVisibleProperties"
    />
  </section>
  <h2 v-else>Loading...</h2>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
import ProductsList from "../ProductsList.vue";
import Pagination from "../Pagination.vue";
import axios from "axios";

export default {
  name: "Search",
  props: {},
  components: {
    SectionHeader,
    ProductsList,
    Pagination,
  },
  data() {
    return {
      products: [],
      visibleProducts: [],
      visibleProperties: {
        from: 0,
        to: 4,
      },
      loading: false,
    };
  },
  methods: {
    setVisibleProperties(from, to) {
      const newProperties = {
        from,
        to,
      };

      this.visibleProperties = newProperties;
      this.visibleProducts = this.products.slice(
        newProperties.from,
        newProperties.to
      );
    },
  },
  created: function() {
    this.loading = true;
    axios
      .get(
        "https://my-json-server.typicode.com/patrykraj/product-comparison/products"
      )
      .then((res) => {
        this.products = res.data;
        this.visibleProducts = res.data.slice(
          this.visibleProperties.from,
          this.visibleProperties.to
        );
        this.loading = false;
      });
  },
};
</script>

<style scoped></style>
