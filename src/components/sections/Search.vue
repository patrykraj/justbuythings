<template>
  <section class="search">
    <SectionHeader
      title="Filters"
      :showFilter="true"
      :filtersActive="filtersActive"
      :setFiltersActive="setFiltersActive"
    />
    <Form :class="filtersActive ? 'show' : 'hide'" />
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
      filtersActive: false,
    };
  },
  methods: {
    setFiltersActive() {
      this.filtersActive = !this.filtersActive;
    },
  },
};
</script>

<style scoped>
.hide {
  max-height: 0px;
}

.show {
  max-height: 500px;
}
</style>
