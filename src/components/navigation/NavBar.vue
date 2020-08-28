<template>
  <nav class="nav">
    <router-link class="logo" to="/">
      <Shopping />
    </router-link>
    <ul class="top-bar">
      <NavItem
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :to="link.to"
      />
    </ul>
  </nav>
</template>

<script>
import Shopping from "vue-material-design-icons/Shopping.vue";
import NavItem from "./NavItem";

export default {
  name: "NavBar",
  components: {
    NavItem,
    Shopping,
  },
  data: function() {
    return {
      links: [
        {
          to: "/",
          name: "products",
        },
        {
          to: "/basket",
          name: "basket",
        },
      ],
    };
  },
};
</script>

<style>
.nav {
  height: 70px;
  background: #2c3e50;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}

.top-bar {
  display: flex;
  list-style: none;
}

.logo {
  background: #42b883;
  width: 80px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav li:last-child a.link {
  margin-right: 0;
}

@media (max-width: 600px) {
  .nav {
    position: fixed;
    z-index: 100;
  }
}
</style>
