<template>
  <section class="search">
    <SectionHeader title="Search" />
    <Form />
  </section>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import Form from "./Form.vue";

export default {
  name: "Search",
  props: {
    msg: String,
  },
  components: {
    SectionHeader,
    Form,
  },
};
</script>

<style scoped></style>
