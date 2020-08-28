<template>
  <section class="search">
    <SectionHeader
      title="Filters"
      :showFilter="true"
      :filtersActive="filtersActive"
      :setFiltersActive="setFiltersActive"
    />
    <Form v-if="this.filtersActive" />
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
  data: function() {
    return {
      filtersActive: true,
    };
  },
  methods: {
    setFiltersActive() {
      this.filtersActive = !this.filtersActive;
    },
  },
};
</script>

<style scoped></style>
