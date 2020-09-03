<template>
  <nav class="nav">
    <router-link class="logo" to="/">
      <Store />
      <span class="logo-caption">Home</span>
    </router-link>
    <ul class="top-bar" v-if="!isAuthenticated">
      <NavItem
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :to="link.to"
      />
    </ul>
    <ul class="top-bar" v-if="isAuthenticated">
      <NavItem
        v-for="link in authLinks"
        :key="link.name"
        :name="link.name"
        :to="link.to"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "./NavItem";
import Store from "vue-material-design-icons/Store.vue";

import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  components: {
    NavItem,
    Store,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  data: function() {
    return {
      links: [
        {
          to: "/",
          name: "products",
        },
        {
          to: "/auth",
          name: "sign in",
        },
        {
          to: "/basket",
          name: "basket",
        },
      ],
      authLinks: [
        {
          to: "/",
          name: "products",
        },
        {
          to: "/account",
          name: "my account",
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
  height: 50px;
  width: 80px;
  border-radius: 15px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.logo span {
  display: flex;
  align-items: center;
}

.logo-caption {
  font-size: 0.8rem;
  font-weight: 300;
}

.nav li:last-child a.link {
  margin-right: 0;
}

@media (max-width: 600px) {
  .nav {
    position: fixed;
    z-index: 100;
  }

  span.logo-caption {
    display: none;
  }

  .logo {
    background: #42b883;
    height: 40px;
    width: 70px;
  }
}
</style>
