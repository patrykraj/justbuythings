<template>
  <section class="search">
    <SectionHeader title="Search" />
    <Form />
  </section>
</template>

<script>
import SectionHeader from "../shared/SectionHeader.vue";
import Form from "../Form.vue";

export default {
  name: "Search",
  components: {
    SectionHeader,
    Form,
  },
};
</script>

<style scoped></style>
