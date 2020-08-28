<template>
  <button @click="setFiltersActive">
    {{ this.filtersActive ? "Hide" : "Show" }}
  </button>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    filtersActive: Boolean,
    setFiltersActive: Function,
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
