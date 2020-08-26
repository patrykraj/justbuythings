<template>
  <li>
    <router-link class="link" :to="to">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: "NavList",
  props: {
    name: String,
    to: String,
  },
};
</script>

<style scoped>
li {
  color: white;
}

a.link {
  display: block;
  color: white;
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 10px;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.2s;
}

nav a.router-link-exact-active {
  background-color: #42b883;
}
</style>
