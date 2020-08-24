<template>
  <li class="product-listed" :class="product.special ? 'special' : null">
    <div class="img-container">
      <div class="img"></div>
    </div>
    <div class="data-container">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-model">Model: {{ product.model }}</p>
      <p>Brand: {{ product.brand }}</p>
    </div>
    <div class="price-container">
      <Button
        txt="Add to compare"
        :special="product.special"
        @clicked="addToCompared(product)"
      />
      <h4>${{ product.price.toFixed(2) }} net</h4>
      <p>${{ (product.price * 0.23 + product.price).toFixed(2) }} gross</p>
    </div>
  </li>
</template>

<script>
import Button from "./Button";

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
    ...mapMutations(["addToCompared"]),
  },
};
</script>

<style>
li.special {
  background: rgb(0, 0, 0, 0.1);
}

li.product-listed {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
  padding: 2rem 0;
  text-align: left;
}

li.product-listed:last-child {
  border-bottom: none;
}

div.img {
  width: 150px;
  height: 150px;
  border: 2px solid #2c3e50;
  position: relative;
  overflow: hidden;
  background: white;
}

div.img::before,
div.img::after {
  content: "";
  width: 2px;
  height: 212px;
  display: block;
  background: #2c3e50;
  transform: rotate(-45deg);
  position: absolute;
}

div.img::before {
  transform: rotate(45deg);
  transform-origin: top right;
  right: -2px;
  top: 0;
}

div.img::after {
  transform-origin: top left;
  left: -2px;
}

div.data-container {
  flex-grow: 1;
  padding: 0 15px;
}

h3.product-name {
  margin-top: 0;
  margin-bottom: 7px;
}

p.product-model {
  font-size: 0.9rem;
  margin-top: 0;
}

div.price-container {
  min-width: 160px;
}

@media (max-width: 600px) {
  li.product-listed {
    flex-direction: column;
    flex: 1 0 0;
    align-items: center;
    max-width: 40%;
    min-width: 200px;
    text-align: center;
    border: none;
  }

  h3.product-name {
    margin: 1rem 0;
  }
}

@media (max-width: 450px) {
  li.product-listed {
    max-width: 60%;
    min-width: 250px;
  }
}
</style>
