<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h2 {
  border-bottom: 3px solid #2c3e50;
  text-align: left;
  font-size: 2rem;
}
</style>
