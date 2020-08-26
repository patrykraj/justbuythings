<template>
  <li class="basket-product">
    <div class="product-image"></div>
    <div class="product-info">
      <p>{{ product.brand }}</p>
      <h3>{{ product.name }}</h3>
      <p>{{ product.color }}</p>
      <button>Delete from basket</button>
    </div>
    <div class="product-summary"></div>
  </li>
</template>

<script>
export default {
  name: "BasketProduct",
  props: {
    product: Object,
  },
};
</script>

<style scoped></style>
