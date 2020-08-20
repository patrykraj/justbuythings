<template>
  <form v-if="products.length">
    <div class="row">
      <input class="search-input" type="text" placeholder="Name or model" />
      <Button txt="Search" />
    </div>
    <div class="row">
      <select
        @change="
          handleFilterProducts({ key: 'brand', val: $event.target.value })
        "
      >
        <option selected disabled>Select</option>
        <option v-for="brand in brands" :key="brand" :value="brand">{{
          brand
        }}</option>
      </select>
      <div class="price-select">
        <span>Price range</span>
        <input
          class="price-select-input"
          type="number"
          placeholder="from"
          min="0"
          max="1000000"
          @input="
            handleFilterPriceProducts({ key: 'from', val: $event.target.value })
          "
        />
        <input
          class="price-select-input"
          type="number"
          placeholder="to"
          min="0"
          max="1000000"
          @input="
            handleFilterPriceProducts({ key: 'to', val: $event.target.value })
          "
        />
      </div>
    </div>
    <div class="row">
      <div class="select-colors">
        <span>Select color:</span>
        <label v-for="color in colors" :key="color">
          <input type="checkbox" value="color" /> {{ color }}
        </label>
      </div>
    </div>
  </form>
  <h2 v-else>Loading form...</h2>
</template>

<script>
import Button from "./Button.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Search",
  props: {
    msg: String,
  },
  components: {
    Button,
  },
  data: function() {
    return {
      colors: [],
      brands: [],
    };
  },
  computed: mapState(["products", "visibleProducts"]),
  created: function() {
    this.$watch(() => {
      this.products.map((product) => {
        if (!this.colors.includes(product.color)) {
          this.colors.push(product.color);
        }
        if (!this.brands.includes(product.brand)) {
          this.brands.push(product.brand);
        }
      });
    });
  },
  methods: {
    ...mapMutations(["handleFilterProducts", "handleFilterPriceProducts"]),
    handlePrice(val, key) {
      console.log(key, val);
    },
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
