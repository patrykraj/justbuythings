<template>
  <li class="basket-product">
    <div class="product-image">
      <div></div>
    </div>
    <div class="product-info">
      <p>{{ product.brand }}</p>
      <h3>
        <span class="uppercase">{{ product.name }}</span> -
        <span>{{ product.model }}</span>
      </h3>
      <p>Color: {{ product.color }}</p>
      <button class="delete">Delete from basket</button>
    </div>
    <div class="product-summary">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <h4>${{ (product.price * 0.23 + product.price).toFixed(2) }}</h4>
    </div>
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

<style scoped>
li + li {
  margin: 5px 0;
}

.basket-product {
  padding: 1rem;
  display: flex;
  background: whitesmoke;
}

.product-image div {
  width: 75px;
  height: 150px;
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
