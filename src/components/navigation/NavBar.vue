<template>
  <nav class="nav">
    <div class="wide-logo-container">
      <router-link class="logo" to="/">
        <Store />
        <span class="logo-caption">Home</span>
      </router-link>
    </div>
    <ul class="top-bar" v-if="!isAuthenticated">
      <li class="narrow-logo-container">
        <router-link class="logo" to="/">
          <Store />
          <span class="logo-caption">Home</span>
        </router-link>
      </li>
      <NavItem
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :to="link.to"
      />
    </ul>
    <ul class="top-bar" v-if="isAuthenticated">
      <li class="narrow-logo-container">
        <router-link class="logo" to="/">
          <Store />
          <span class="logo-caption">Home</span>
        </router-link>
      </li>
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
        {
          to: "/logout",
          name: "logout",
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
  padding: 0;
  margin: 0;
  list-style: none;
}

.logo {
  height: 50px;
  padding: 5px 20px;
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

.wide-logo-container {
  display: block;
}

.narrow-logo-container {
  display: none;
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
    height: 40px;
    width: 70px;
  }
}

@media (max-width: 450px) {
  .nav {
    padding: 0 5px;
  }

  .top-bar {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .wide-logo-container {
    display: none;
  }

  .narrow-logo-container {
    display: flex;
    align-items: center;
    position: relative;
    width: calc(20% - 5px);
    padding: 5px 0;
    margin: 0 2px;
  }

  .logo {
    padding: 0;
  }
}
</style>
