<template>
  <form>
    <div class="row">
      <input class="search-input" type="text" placeholder="Name or model" />
      <Button txt="Search" />
    </div>
    <div class="row">
      <select>
        <option>TAK</option>
        <option>NIE</option>
      </select>
      <div class="price-select">
        <span>Price range</span>
        <input class="price-select-input" type="text" placeholder="from" />
        <input class="price-select-input" type="text" placeholder="to" />
      </div>
    </div>
    <div class="row">
      <div class="select-colors">
        <span>Select color:</span>
        <label> <input type="checkbox" /> Color 1 </label>
        <label> <input type="checkbox" /> Color 2 </label>
        <label> <input type="checkbox" /> Color 3 </label>
      </div>
    </div>
  </form>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Search",
  props: {
    msg: String,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
div.row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

input.search-input {
  width: 100%;
  margin: 5px;
  margin-left: 0;
  border-radius: 10px;
  border: 2px solid #2c3e50;
}

div.price-select {
  display: flex;
  align-items: center;
}

input.price-select-input {
  margin: 0 5px;
}
</style>
