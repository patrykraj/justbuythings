<template>
  <div>
    <div class="site-container page">
      <NavBar />
      <div class="content-wrapper">
        <img :src="SiteHeader" alt="site-header" class="site-header" />
        <Loader v-if="this.loading" />
        <Error
          v-else-if="this.failedToFetch && !products.length"
          :err="failedToFetch"
        />
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
import Footer from "../components/sections/Footer";
import SiteHeader from "../assets/siteheader.png";

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
  data: function() {
    return {
      SiteHeader,
    };
  },
  computed: mapState(["products", "failedToFetch", "loading"]),
};
</script>

<style>
section {
  margin: 2rem 0;
}

.site-header {
  margin-top: 7rem;
  margin-bottom: 4rem;
  width: 90%;
}

.page {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1024px;
}

.content-wrapper {
  margin-top: 80px;
  min-height: calc(100vh - 303px);
}

@media (max-width: 600px) {
  .site-header {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
}
</style>
