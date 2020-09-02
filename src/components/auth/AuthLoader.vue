<template>
  <div class="loader">
    <h2>Processing...</h2>
  </div>
</template>

<script>
export default {
  name: "AuthLoader",
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
</style>
