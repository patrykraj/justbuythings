<template>
  <section class="products">
    <SectionHeader title="Products" sorting />
    <ProductsList />
  </section>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
import ProductsList from "../ProductsList.vue";

export default {
  name: "Search",
  props: {
    msg: String,
  },
  components: {
    SectionHeader,
    ProductsList,
  },
};
</script>

<style scoped></style>
