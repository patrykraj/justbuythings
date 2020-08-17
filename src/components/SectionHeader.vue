<template>
  <div class="section-header-wrapper">
    <h2>{{ title }}</h2>
    <div class="sort-container" v-if="sorting">
      <span>Sort price</span>
      <button>Descending</button>
      <button>Ascending</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: String,
    sorting: Boolean,
  },
};
</script>

<style scoped>
div.section-header-wrapper {
  border-bottom: 3px solid #2c3e50;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h2 {
  text-align: left;
  font-size: 2rem;
  margin: 10px 0;
}

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
