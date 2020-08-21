<template>
  <form v-if="products.length" @submit="handleSubmitSearch">
    <div class="row">
      <input
        class="search-input"
        type="text"
        placeholder="Name or model"
        @input="handleInputName"
      />
      <Button txt="Search" />
    </div>
    <div class="row">
      <select
        @change="
          handleFilterProducts({
            key: 'brand',
            val: $event.target.value,
            type: 'SEARCH',
          })
        "
      >
        <option selected disabled>Select brand</option>
        <option value="">Any</option>
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
            handleFilterProducts({
              key: 'from',
              val: $event.target.value,
              type: 'INPUT',
            })
          "
        />
        <input
          class="price-select-input"
          type="number"
          placeholder="to"
          min="0"
          max="1000000"
          @input="
            handleFilterProducts({
              key: 'to',
              val: $event.target.value,
              type: 'INPUT',
            })
          "
        />
      </div>
    </div>
    <div class="row">
      <div class="select-colors">
        <span>Select color:</span>
        <label v-for="color in colors" :key="color">
          <input
            type="checkbox"
            :value="color"
            @change="
              handleFilterProducts({
                key: 'colors',
                val: $event.target.value,
                type: 'CHECKBOX',
              })
            "
          />
          {{ color }}
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
      name: "",
      nameValid: false,
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
    ...mapMutations(["handleFilterProducts"]),
    handleSubmitSearch(e) {
      e.preventDefault();

      if (this.nameValid) {
        this.handleFilterProducts({
          key: "name",
          val: this.name,
          type: "SEARCH",
        });
      }
    },
    handleInputName(e) {
      this.name = e.target.value;
      if (e.target.value.trim().length >= 3) {
        this.nameValid = true;
      } else if (this.name.trim().length === 0) {
        this.handleFilterProducts({
          key: "name",
          val: "",
          type: "SEARCH",
        });
      } else {
        this.nameValid = false;
        this.name = "";
      }
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
