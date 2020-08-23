<template>
  <div class="sort-container">
    <span>Sort price</span>
    <button
      :class="this.sorting === 'descending' ? 'active' : null"
      @click="sortList('descending')"
    >
      Descending
    </button>
    <button
      :class="this.sorting === 'ascending' ? 'active' : null"
      @click="sortList('ascending')"
    >
      Ascending
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Sort",
  computed: mapState(["sorting"]),
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

button {
  border: 2px solid #2c3e50;
  padding: 5px 10px;
  background: none;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button:nth-child(2) {
  border-radius: 15px 0 0 15px;
}

button:nth-child(3) {
  border-radius: 0 15px 15px 0;
  border-left: none;
}

button.active {
  background-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 500px) {
  div.sort-container {
    margin: 1rem 0;
  }
}
</style>
