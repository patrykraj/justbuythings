<template>
  <li :class="product.special ? 'special' : null">
    <Button
      txt="Delete"
      :special="product.special"
      @clicked="removeFromCompared(product.id)"
    />
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="img-container">
        <img
          class="product-image"
          v-bind:src="product.img"
          :alt="product.name"
        />
      </div>
    </router-link>
    <div class="data-container">
      <router-link
        class="link"
        :to="{ name: 'product', params: { id: product.id } }"
      >
        <h3>{{ product.name }}</h3>
      </router-link>
      <p>Model: {{ product.model }}</p>
      <p>Brand: {{ product.brand }}</p>
    </div>
    <div class="price-container">
      <h4>${{ product.price.toFixed(2) }} net</h4>
      <p>${{ (product.price * 0.23 + product.price).toFixed(2) }} gross</p>
    </div>
    <div class="description-container">
      <h5>Description</h5>
      <p class="description">{{ product.description }}</p>
      <h5>Color: {{ product.color }}</h5>
    </div>
  </li>
</template>

<script>
import Button from "../shared/Button";

import { mapMutations } from "vuex";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  components: {
    Button,
  },
  methods: {
    ...mapMutations(["removeFromCompared"]),
  },
};
</script>

<style scoped>
li {
  flex: 1 0 25%;
  margin: 0 1rem;
  max-width: 33%;
}

li:first-child {
  margin-left: 0;
}

li:last-child {
  margin-right: 0;
}

.img-container {
  max-width: 309px;
  max-height: 309px;
  margin: 1rem auto;
}

.data-container a.link {
  text-decoration: none;
  color: inherit;
}

div.price-container {
  border-top: 2px solid #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

h4 {
  font-size: 1.5rem;
  margin: 10px 0;
}

p.description {
  text-align: left;
  font-size: 13px;
  padding: 0 5px;
}
</style>
