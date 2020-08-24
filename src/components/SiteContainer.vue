<template>
  <div class="site-container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Price Comparison App" />
    <Error v-if="this.failedToFetch" :err="this.failedToFetch" />
    <main v-else class="main">
      <Search />
      <Products />
      <Compare />
    </main>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import Search from "./sections/Search.vue";
import Products from "./sections/Products.vue";
import Compare from "./sections/Compare.vue";
import Error from "./Error.vue";

import { mapState } from "vuex";

export default {
  name: "SiteContainer",
  components: {
    HelloWorld,
    Search,
    Products,
    Compare,
    Error,
  },
  computed: mapState(["failedToFetch"]),
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
  max-width: 1024px;
  padding: 0 1rem;
}

section {
  margin: 2rem 0;
}

@media (max-width: 400px) {
  #app {
    padding: 0 10px;
  }
}
</style>
