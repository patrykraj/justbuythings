<template>
  <li class="order-container">
    <h4 class="order-id">Order id: {{ product.id }}</h4>
    <div>
      <span class="order-date-header">Order date:</span>
      <div class="order-dates">
        <span class="order-date">{{ product.date.split("T")[0] }} </span>
        <span class="order-date"
          >{{ product.date.split("T")[1].slice(0, 8) }}
        </span>
      </div>
      <router-link
        class="product-info-link"
        :to="{ name: 'product', params: { id: product.id } }"
      >
        <img class="product-image" :src="product.img" alt="product.name" />
        <p class="product-info-desc">{{ product.name }}</p>
        <p class="product-info-desc">{{ product.model }}</p>
        <p class="product-info-desc">{{ product.color }}</p>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: "Order",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.order-container {
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid #2c3e50;
}

.order-id {
  margin-top: 0;
}

.order-date-header {
  display: block;
  margin-bottom: 5px;
}

.order-date {
  font-weight: bold;
}

.product-image {
  width: 90px;
  margin: 10px 0;
}

.product-info-link {
  text-decoration: none;
}

.product-info-desc {
  margin: 5px 0;
  color: #2c3e50;
  font-size: 0.9rem;
}
</style>
