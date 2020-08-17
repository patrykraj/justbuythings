<template>
  <li>
    <div class="img-container">
      <div class="img"></div>
    </div>
    <div class="data-container">
      <h3>{{ product.name }}</h3>
      <p>Model: {{ product.model }}</p>
      <p>Brand: {{ product.brand }}</p>
    </div>
    <div class="price-container">
      <Button txt="Add to compare" />
      <h4>${{ product.price.toFixed(2) }} net</h4>
      <p>${{ (product.price * 0.23 + product.price).toFixed(2) }} gross</p>
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
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
  padding: 2rem 0;
  text-align: left;
}

li:last-child {
  border-bottom: none;
}

div.img {
  width: 150px;
  height: 150px;
  border: 2px solid #2c3e50;
  position: relative;
  overflow: hidden;
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

div.price-container {
  min-width: 160px;
}
</style>
