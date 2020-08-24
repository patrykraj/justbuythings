<template>
  <form class="filter-form" @submit="handleSubmitSearch">
    <div class="row">
      <input
        class="search-input"
        type="text"
        placeholder="Name or model"
        @input="handleInputName"
      />
      <Button txt="Search" />
      <div v-if="this.error" class="error-container">Min. 3 characters</div>
    </div>
    <div class="row column-row">
      <select
        class="select-input"
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
        <label class="color-input" v-for="color in colors" :key="color">
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
          <span class="checkmark"></span>
          <span class="color-description">{{ color }}</span>
        </label>
      </div>
    </div>
  </form>
</template>

<script>
import Button from "./shared/Button.vue";
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
      err: false,
    };
  },
  computed: {
    ...mapState(["products", "visibleProducts"]),
    error: {
      get: function() {
        return this.err;
      },
      set: function(newValue) {
        this.err = newValue;
      },
    },
  },
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
      } else {
        this.setError(true);
      }
    },
    handleInputName(e) {
      this.setError(false);

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

    setError(val) {
      this.err = val;
    },
  },
};
</script>

<style scoped>
div.row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
}

.error-container {
  background: crimson;
  color: white;
  position: absolute;
  display: block;
  bottom: -110%;
  right: 50%;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  transform: translateX(calc(100% - 100px));
  z-index: 1;
}

.error-container::before {
  content: "";
  display: block;
  position: absolute;
  top: -15px;
  left: 40%;
  width: 10px;
  height: 10px;
  border: 10px solid transparent;
  border-bottom: 10px solid crimson;
}

input:focus {
  outline: none;
}

input.search-input {
  width: 100%;
  margin: 5px;
  margin-left: 0;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid #2c3e50;
}

select.select-input {
  padding: 10px 5px;
  width: 150px;
  border: 2px solid #2c3e50;
}

select.select-input option {
  display: block;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
}

div.price-select {
  display: flex;
  align-items: center;
}

input.price-select-input {
  margin: 0 5px;
  padding: 10px 5px;
  border: 2px solid #2c3e50;
}

label.color-input {
  position: relative;
  min-width: 60px;
  padding-left: 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 5px;
}

label.color-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

label.color-input:hover input ~ .checkmark {
  background-color: #ccc;
}

label.color-input input:checked ~ .checkmark {
  background-color: #42b883;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

label.color-input input:checked ~ .checkmark:after {
  display: block;
}

label.color-input .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

span.color-description {
  min-width: 40px;
  display: block;
  text-align: left;
}

@media (max-width: 500px) {
  .column-row {
    flex-flow: column;
    padding: 0 !important;
  }

  .column-row > * {
    margin-bottom: 1rem;
    padding: 0;
  }
}
</style>
