<template>
  <li class="basket-product">
    <div class="product-image-container">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <img
          class="product-image"
          v-bind:src="product.img"
          :alt="product.name"
        />
      </router-link>
    </div>
    <div class="product-info">
      <p>{{ product.brand }}</p>
      <router-link :to="{ name: 'product', params: { id: product.id } }"
        ><h3>
          <span class="uppercase">{{ product.name }}</span> -
          <span>{{ product.model }}</span>
        </h3></router-link
      >
      <p>Color: {{ product.color }}</p>
      <button class="delete" @click="handleRemoveFromProps(product.id)">
        Remove from basket
      </button>
    </div>
    <div class="product-summary">
      <select v-on:change="handleSetQuantity($event, product.id)">
        <option
          v-for="index in 10"
          :key="index"
          :value="index"
          :selected="product.quantity ? product.quantity === index : false"
          >{{ index }}</option
        >
      </select>
      <h4>${{ this.getPrice }}</h4>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BasketProduct",
  props: {
    product: Object,
  },
  computed: {
    getPrice() {
      const result =
        (this.product.price * 0.23 + this.product.price) *
        this.product.quantity;

      return result.toFixed(2);
    },
  },
  methods: {
    ...mapMutations(["setProductQuantity"]),

    handleRemoveFromProps(id) {
      this.$emit("handleRemove", id);
    },
    handleSetQuantity(e, id) {
      let val = Number(e.target.value);

      if (val && val <= 10 && typeof val === "number" && !isNaN(val)) {
        val = Math.floor(val);
      } else {
        val = 1;
      }

      this.setProductQuantity({ quantity: val, id });
    },
  },
};
</script>

<style scoped>
li + li {
  margin: 5px 0;
}

.basket-product {
  padding: 1rem;
  display: flex;
  background: whitesmoke;
}

.product-image {
  width: 100px;
  height: 100%;
  background: white;
}

.product-info {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;
  flex-grow: 1;
  font-size: 0.8rem;
}

.product-info a {
  color: #2c3e50;
  text-decoration: none;
}

.product-info p,
.product-info h3 {
  margin-top: 0;
}

.product-info h3 .uppercase {
  font-size: 1rem;
  text-transform: uppercase;
}

.delete {
  background: none;
  border: none;
  cursor: pointer;
  padding: 3px 5px 0;
  padding-left: 0;
  color: rgba(0, 0, 0, 0.6);
}

.delete:focus {
  outline: none;
}

.product-summary {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: right;
}

.product-summary select {
  width: 60px;
  padding: 3px 0 3px 10px;
}

.product-summary h4 {
  margin-bottom: 0;
}
</style>
