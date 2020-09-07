<template>
  <div>
    <NavBar />
    <div class="notfound">
      <Laptop />
      <h2>Page not found</h2>
      <router-link to="/">Go back to home page.</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import Laptop from "vue-material-design-icons/Laptop.vue";

export default {
  name: "NotFound",
  components: {
    NavBar,
    Footer,
    Laptop,
  },
};
</script>

<style scoped>
.notfound {
  min-height: calc(100vh - 303px);
  padding: 1rem 5px 5px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.notfound svg {
  width: 100px;
  height: 100px;
}

.notfound a {
  text-decoration: none;
  color: #2c3e50;
}

.notfound a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .notfound {
    min-height: calc(100vh - 290px);
  }
}
</style>
