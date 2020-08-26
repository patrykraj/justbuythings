<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created: function() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
}

@media (max-width: 400px) {
  #app {
    padding: 0 10px;
  }
}
</style>
