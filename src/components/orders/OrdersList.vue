<template>
  <ul class="orders-list">
    <Order
      v-for="orderItem in transactions"
      :key="orderItem.renderId"
      :product="orderItem"
    />
  </ul>
</template>

<script>
import Order from "./Order";

export default {
  name: "OrdersList",
  props: {
    transactions: Array,
  },
  components: {
    Order,
  },
};
</script>

<style scoped>
.orders-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
