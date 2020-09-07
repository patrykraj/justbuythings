<template>
  <div class="error-container">
    <h2>An error occured:</h2>
    <p class="red">{{ err }}</p>
    <p>Please refresh the page (F5) or try again later.</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    err: Error,
  },
};
</script>

<style>
.error-container {
  margin: 5rem 0;
}

.red {
  color: crimson;
}
</style>
