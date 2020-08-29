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
  flex-grow: 1;
  text-align: right;
}

button:focus {
  outline: none;
}
</style>
