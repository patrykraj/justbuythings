<template>
  <section class="products">
    <SectionHeader title="Products" sorting />
  </section>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";

export default {
  name: "Search",
  props: {
    msg: String,
  },
  components: {
    SectionHeader,
  },
};
</script>

<style scoped></style>
