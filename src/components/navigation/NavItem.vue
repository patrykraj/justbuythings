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
  color: rgba(255, 255, 255, 0.8);
  margin: 0 10px;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.2s;
}

a.link:hover {
  color: white;
}
</style>
