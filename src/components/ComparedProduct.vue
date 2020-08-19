<template>
  <li :class="product.special ? 'special' : null">
    <Button txt="Delete" :special="product.special" />
    <div class="img-container">
      <div class="img"></div>
    </div>
    <div class="data-container">
      <h3>{{ product.name }}</h3>
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
import Button from "./Button";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
li {
  flex: 1 0 25%;
  margin: 0 1rem;
}

div.img {
  width: 190px;
  height: 190px;
  margin: 1rem auto;
}

div.img::before,
div.img::after {
  height: 269px;
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
