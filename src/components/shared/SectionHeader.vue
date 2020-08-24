<template>
  <div class="section-header-wrapper">
    <h2>{{ title }}</h2>
    <Sort v-if="sorting" />
  </div>
</template>

<script>
import Sort from "../products/Sort.vue";

export default {
  name: "SectionHeader",
  props: {
    title: String,
    sorting: Boolean,
  },
  components: {
    Sort,
  },
};
</script>

<style scoped>
div.section-header-wrapper {
  border-bottom: 3px solid #2c3e50;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h2 {
  text-align: left;
  font-size: 2rem;
  margin: 10px 0;
}

@media (max-width: 500px) {
  div.section-header-wrapper {
    flex-flow: column;
  }
}
</style>
