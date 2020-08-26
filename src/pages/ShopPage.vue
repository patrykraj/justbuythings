<template>
  <div>
    <div class="site-container page">
      <NavBar />
      <div class="content-wrapper">
        <h1>SHOPTEMPLATE.COM</h1>
        <Loader v-if="this.loading" />
        <Error v-else-if="this.failedToFetch" :err="this.failedToFetch" />
        <main v-else class="main">
          <Search />
          <Products />
          <Compare />
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Search from "../components/sections/Search.vue";
import Products from "../components/sections/Products.vue";
import Compare from "../components/sections/Compare.vue";
import Error from "../components/shared/Error.vue";
import Loader from "../components/shared/Loader.vue";
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/shared/Footer";

import { mapState } from "vuex";

export default {
  name: "SiteContainer",
  components: {
    Search,
    Products,
    Compare,
    Error,
    Loader,
    NavBar,
    Footer,
  },
  computed: mapState(["failedToFetch", "loading"]),
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

section {
  margin: 2rem 0;
}

.page {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1024px;
}

.content-wrapper {
  margin-top: 80px;
  min-height: 70vh;
}

@media (max-width: 400px) {
  #app {
    padding: 0 10px;
  }
}
</style>
