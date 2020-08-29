<template>
  <li>
    <router-link class="link" :to="to">
      <span v-if="name === 'basket'" class="link-icon"><Shopping /></span>
      <span v-if="name === 'products'" class="link-icon"><Menu /></span>
      <span class="link-caption"
        ><span class="name">{{ name }}</span>
        <span class="quantity">{{
          name === "basket" ? `(${basketProducts.length})` : null
        }}</span></span
      ></router-link
    >
  </li>
</template>

<script>
import { mapState } from "vuex";

import Shopping from "vue-material-design-icons/Shopping.vue";
import Menu from "vue-material-design-icons/Menu.vue";

export default {
  name: "NavList",
  props: {
    name: String,
    to: String,
  },
  components: {
    Shopping,
    Menu,
  },
  computed: {
    ...mapState(["basketProducts"]),
  },
};
</script>

<style scoped>
li {
  color: white;
  display: flex;
  align-items: center;
  position: relative;
}

a.link {
  display: flex;
  flex-flow: column;
  justify-content: center;
  color: white;
  margin: 0 5px;
  height: 50px;
  width: 80px;
  border-radius: 10px;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.2s;
}

nav a.router-link-exact-active {
  background-color: #42b883;
}

.link-icon span {
  display: flex;
  justify-content: center;
}

.link-caption {
  margin-top: 2px;
  font-size: 0.75rem;
}

@media (max-width: 600px) {
  a.link {
    padding: 5px 20px;
    height: 40px;
    width: 70px;
  }

  .link-caption {
    margin-top: 0;
  }

  span.name {
    display: none;
  }

  span.quantity {
    position: absolute;
    font-weight: bold;
    top: 3px;
    right: 3px;
  }
}
</style>
