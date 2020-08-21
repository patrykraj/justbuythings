<template>
  <div class="sort-container">
    <span>Sort price</span>
    <button @click="sortList('descending')">Descending</button>
    <button @click="sortList('ascending')">Ascending</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Sort",
  methods: {
    ...mapMutations(["sortList"]),
  },
};
</script>

<style scoped>
div.sort-container {
  display: flex;
  align-items: center;
}

div.sort-container span {
  margin-right: 10px;
}

div.sort-container button {
  border: 2px solid #2c3e50;
  padding: 5px 10px;
  background: none;
  cursor: pointer;
}

div.sort-container button:nth-child(2) {
  border-radius: 15px 0 0 15px;
}

div.sort-container button:nth-child(3) {
  border-radius: 0 15px 15px 0;
  border-left: none;
}
</style>
