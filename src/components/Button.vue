<template>
  <button>{{ txt }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    txt: String,
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: none;
  border: 2px solid #2c3e50;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
