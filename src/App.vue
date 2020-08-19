<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Price Comparison App" />
    <Search />
    <Products />
    <Compare />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Search from "./components/sections/Search.vue";
import Products from "./components/sections/Products.vue";
import Compare from "./components/sections/Compare.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Search,
    Products,
    Compare,
  },
};
</script>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 1024px;
  padding: 0 1rem;
}

section {
  margin: 2rem 0;
}
</style>
